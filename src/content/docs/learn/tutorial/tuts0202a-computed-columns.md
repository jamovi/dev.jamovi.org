---
layout: ../layouts/BaseLayout.astro
title: Computed Columns
type: article
description: "Learn how to write computed values from your analysis back to the jamovi spreadsheet as new columns using the Output element."
---

Every result you have produced in this tutorial series so far has gone to the **results panel** — tables and plots that appear on the right-hand side of the jamovi interface. The `Output` element lets you go in a different direction: instead of displaying a value in the results panel, you write it back to the **spreadsheet** as a new column. Concrete examples include ordinary residuals, standardised residuals, predicted values, factor scores, and Mahalanobis distances. In jamovi terminology, a column produced this way is called a **computed column**.

Computed columns are most useful when the user wants to continue working with the values downstream — for example, plotting residuals in another analysis, or exporting the dataset with predicted values already attached. The mechanism is deliberately simple to wire up, but it has one critical detail around row numbering that is easy to get wrong. This tutorial covers both the happy path and that gotcha.

## What is a Computed Column?

When a user enables a computed column (by ticking its Save checkbox), jamovi appends a new column to their open dataset. The column is tied to the analysis: if the user changes an option that affects the underlying computation, jamovi clears the column and re-populates it on the next run. If the relevant options have not changed, the existing values are left untouched (you control which options are relevant via `clearWith`, covered in the step-by-step example below). The column persists in the dataset for the life of the session and can be saved with the file.

From the developer's perspective, you declare what the column looks like (its title, description, and variable type) and then write a small amount of R code that pushes a vector of values into it.

## The Three-File Pattern

Computed columns follow the same three-file structure as the rest of a jamovi analysis. Each file plays a distinct role:

| File | Role |
| :--- | :--- |
| `.a.yaml` | Declares an `Output` option — jamovi automatically creates a Save checkbox in the UI |
| `.r.yaml` | Defines the column metadata: title, description, variable type, and which options invalidate it |
| `.b.R` | Populates the column at runtime by calling `setRowNums()` and `setValues()` |

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

That is all that is needed here. Because `type` is `Output`, jamovi recognises it as a save-to-spreadsheet option and automatically places a Save section with a "Residuals" checkbox into the analysis UI — no extra UI YAML is required. In R, `self$options$residsOV` will be `TRUE` when the user has ticked the box and `FALSE` otherwise.

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

**Add** a dedicated private helper method called `.populateOutputs()` and **call** it from `.run()` after the main computation is complete:

In R6, `private$` is used for internal methods that aren't part of the public API — it's good practice to keep populate logic private.

`self$cleanData` and `self$residuals` are private fields that your main analysis code in `.run()` computes and stores before calling `private$.populateOutputs()`. Keeping output population in its own helper method makes `.run()` easier to read and test.

```r
.run = function() {
    # ... main analysis code, storing results in private fields ...
    private$.populateOutputs()
},

.populateOutputs = function() {
    if (self$options$residsOV && self$results$residsOV$isNotFilled()) {
        self$results$residsOV$setRowNums(rownames(self$cleanData))
        self$results$residsOV$setValues(self$residuals)
    }
}
```

Walking through each line inside `.populateOutputs()`:

- `self$options$residsOV` — checks that the user has actually ticked the Save checkbox. There is no point computing or writing anything if they have not.
- `self$results$residsOV$isNotFilled()` — checks that the column has not already been filled in this run (see the `isNotFilled()` guard section below).
- `setRowNums(rownames(self$cleanData))` — tells jamovi which spreadsheet rows to write to. The argument **must** be `rownames()`, not `1:nrow()` — this is covered in detail in the next section.
- `setValues(self$residuals)` — pushes the vector of residual values into the column.

## Row Numbers Matter

This is the most common source of bugs with computed columns, and it is entirely silent — jamovi will not warn you if you get it wrong.

When a user applies a row filter or jamovi excludes rows containing missing values, those rows are removed from the data frame passed to your R code. However, the remaining rows keep their **original row names** from the full dataset. A data frame with 90 rows after filtering will have row names like `"1"`, `"3"`, `"5"`, ... (skipping the excluded rows), not `"1"`, `"2"`, `"3"`, ....

`setRowNums()` uses these row names to map each computed value back to the correct row in the spreadsheet. If you pass sequential integers instead, every value lands in the wrong row for any dataset that has excluded rows.

> [!IMPORTANT]
> **Always pass `rownames()`, never `1:nrow()`**
>
> `1:nrow(data)` produces the wrong mapping whenever rows have been filtered or excluded. The error is silent — jamovi writes the values without complaint, but they end up in the wrong spreadsheet rows.

```r
# Correct — preserves original row indices through filtering
self$results$residsOV$setRowNums(rownames(self$cleanData))

# Wrong — breaks silently when any rows are excluded
self$results$residsOV$setRowNums(1:nrow(self$cleanData))
```

The fix is straightforward: always call `na.omit()` (or your equivalent cleaning step) **before** storing your cleaned data frame, and then always pass `rownames()` of that frame to `setRowNums()`. The row names survive `na.omit()` correctly.

Note: `self$cleanData` is simply the name used in this example for a private field the developer defines themselves in `.run()` to hold the cleaned data frame — it is not a field provided by jmvcore. You can name it whatever you like.

## The `isNotFilled()` Guard

The `isNotFilled()` check in `.populateOutputs()` is a deliberate performance guard. Because the `Output` element participates in the same `clearWith` system as tables and images, jamovi will have already cleared the output if any of the listed options changed. If nothing in `clearWith` changed, the column is still filled from the previous run — there is no need to recompute the residuals or call `setValues()` again.

The guard therefore works in tandem with `clearWith`:

- `clearWith` in `.r.yaml` decides **when** the output is invalidated.
- `isNotFilled()` in `.b.R` decides **whether** to skip the population step entirely.

Together they ensure you only perform the computation and the write when the values are actually stale. For a residuals vector this saving may be small, but for larger outputs or more expensive derivations it can be significant.

**Next Step:** Now that you can write data back to the spreadsheet, let's look at how to manage [complex analysis state](/tutorial/tuts0203-state).
