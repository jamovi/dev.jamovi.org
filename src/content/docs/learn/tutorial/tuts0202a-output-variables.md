---
layout: ../layouts/BaseLayout.astro
title: Output Variables
type: article
description: "Learn how to write values from your R analysis back to the jamovi spreadsheet as new columns using the Output element."
---

Every result you have produced in this tutorial series so far has gone to the **results panel** — tables and plots that appear on the right-hand side of the jamovi interface. The `Output` element lets you go in a different direction: instead of displaying a value in the results panel, you write it back to the **spreadsheet** as a new column. Concrete examples include ordinary residuals, standardised residuals, predicted values, factor scores, and Mahalanobis distances. In jamovi terminology, a column produced this way is called an **output variable**.

Output variables are most useful when the user wants to continue working with the values downstream — for example, plotting residuals in another analysis, or exporting the dataset with predicted values already attached. The mechanism is deliberately simple to wire up, but it has one critical detail around row numbering that is easy to get wrong. This tutorial covers both the happy path and that gotcha.

## What is an Output Variable?

When a user enables an output variable (by ticking its checkbox), jamovi appends a new column to their open dataset. The column is tied to the analysis: if the user changes an option that affects the underlying computation, jamovi clears the column and re-populates it on the next run. If the relevant options have not changed, the existing values are left untouched (you control which options are relevant via `clearWith`, covered in the step-by-step example below). The column persists in the dataset for the life of the session and can be saved with the file.

From the developer's perspective, you declare what the column looks like (its title, description, and variable type) and then write a small amount of R code that pushes a vector of values into it.

## The Three-File Pattern

Computed columns follow the same three-file structure as the rest of a jamovi analysis. Each file plays a distinct role:

| File | Role |
| :--- | :--- |
| `.a.yaml` | Declares an `Output` option — jamovi creates a checkbox in the UI |
| `.r.yaml` | Defines the column metadata: title, description, variable type, and which options invalidate it |
| `.b.R` | Populates the column at runtime by writing the computed values into the Output element |

The option in `.a.yaml` captures the user's intent (did they tick the checkbox?). The element in `.r.yaml` describes the column. The code in `.b.R` does the writing.

## Step-by-Step Example

The following example adds a single `residsOV` residuals column to a hypothetical regression analysis. Each sub-section maps directly to one of the three files above.

### 1. Declare the option in `.a.yaml`

**Add** the following three lines to your `.a.yaml` options list:

```yaml
- name: residsOV
  type: Output
  title: Residuals
```

That is all that is needed here. jamovi recognises `type: Output` and creates a checkbox for saving residuals to the spreadsheet. In R, `self$options$residsOV` will be `TRUE` when the user has ticked the box and `FALSE` otherwise.

### 2. Define the column in `.r.yaml`

**Add** the following block to your `.r.yaml` results list:

```yaml
- name: residsOV
  type: Output
  title: Residuals
  varTitle: Residuals
  varDescription: Ordinary residuals from the fitted model
  measureType: continuous
  clearWith:
      - dep
      - covs
```

A few details worth noting:

- **`name` must match the option name** in `.a.yaml`. This is how jamovi links the checkbox to the column. It is also how you access the element in R via `self$results$residsOV`.
- **`varTitle`** is the column header written to the spreadsheet (as opposed to `title`, which labels the checkbox in the UI).
- **`measureType: continuous`** marks the new column as a continuous variable in the spreadsheet. `measureType` describes how jamovi classifies the column — use `continuous` for numeric values, `nominal` or `ordinal` for categories, and `id` for identifier columns. This is distinct from the column `type` and format options used in results tables.
- **`clearWith`** lists the options whose change should invalidate this output. Here, changing the dependent variable (`dep`) or the covariates (`covs`) means the residuals need to be recomputed, so both are listed. Any option not listed is treated as irrelevant to this column — if only that option changes, the existing values are preserved. See the [State tutorial](/tutorial/tuts0203-state) for a deeper explanation of how `clearWith` works across the results system.

### 3. Populate the column in `.b.R`

**Add** the output population code to your `.run()` method, after the main computation:

```r
.run = function() {
    dep  <- self$options$dep
    covs <- self$options$covs
    data <- self$data

    # convert variables to numeric (see Handling Data tutorial)
    data[[dep]] <- jmvcore::toNumeric(data[[dep]])
    for (cov in covs)
        data[[cov]] <- jmvcore::toNumeric(data[[cov]])

    # remove rows with missing values — row names are preserved by na.omit()
    data <- na.omit(data)

    # fit the model
    formula <- jmvcore::constructFormula(dep, covs)
    model   <- lm(formula, data = data)

    # ... populate tables and other results here ...

    # write residuals to the spreadsheet
    if (self$options$residsOV && self$results$residsOV$isNotFilled()) {
        self$results$residsOV$setRowNums(rownames(data))
        self$results$residsOV$setValues(residuals(model))
    }
}
```

Walking through the output section at the bottom:

- `self$options$residsOV` — checks the user has ticked the Save checkbox; no point computing anything if they haven't.
- `self$results$residsOV$isNotFilled()` — checks the column hasn't already been filled in this run (see the `isNotFilled()` guard section below).
- `setRowNums(rownames(data))` — passes the **original** row indices after cleaning; this is the critical detail covered in the next section.
- `setValues(residuals(model))` — pushes the residuals vector into the column.

## Row Numbers Matter

This is the most common source of bugs with output variables, and it is entirely silent — jamovi will not warn you if you get it wrong.

When a user applies a row filter or jamovi excludes rows containing missing values, those rows are removed from the data frame passed to your R code. However, the remaining rows keep their **original row names** from the full dataset. A data frame with 90 rows after filtering will have row names like `"1"`, `"3"`, `"5"`, ... (skipping the excluded rows), not `"1"`, `"2"`, `"3"`, ....

`setRowNums()` uses these row names to map each computed value back to the correct row in the spreadsheet. If you pass sequential integers instead, every value lands in the wrong row for any dataset that has excluded rows.

> [!IMPORTANT]
> **Always pass `rownames()`, never `1:nrow()`**
>
> `1:nrow(data)` produces the wrong mapping whenever rows have been filtered or excluded. The error is silent — jamovi writes the values without complaint, but they end up in the wrong spreadsheet rows.

```r
# Correct — preserves original row indices through filtering
self$results$residsOV$setRowNums(rownames(data))

# Wrong — breaks silently when any rows are excluded
self$results$residsOV$setRowNums(1:nrow(data))
```

The fix is straightforward: call `na.omit()` **before** passing `rownames()` to `setRowNums()`. Row names survive `na.omit()` intact, so `rownames(data)` after cleaning gives you the correct original indices.

## The `isNotFilled()` Guard

The `isNotFilled()` check in the output section of `.run()` is a deliberate performance guard. Because the `Output` element participates in the same `clearWith` system as tables and images, jamovi will have already cleared the output if any of the listed options changed. If nothing in `clearWith` changed, the column is still filled from the previous run — there is no need to recompute the residuals or call `setValues()` again.

The guard therefore works in tandem with `clearWith`:

- `clearWith` in `.r.yaml` decides **when** the output is invalidated.
- `isNotFilled()` in `.b.R` decides **whether** to skip the population step entirely.

Together they ensure you only perform the computation and the write when the values are actually stale. For a residuals vector this saving may be small, but for larger outputs or more expensive derivations it can be significant.

**Next Step:** Now that you can write data back to the spreadsheet, let's look at how to manage [complex analysis state](/tutorial/tuts0203-state).
