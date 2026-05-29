---
layout: ../layouts/BaseLayout.astro
title: Output
description: "Reference for the Output results element, which defines the column metadata and R methods for writing computed values back to the jamovi spreadsheet."
type: article
---

The `Output` element is declared in `.r.yaml` and defines *what* gets written to the spreadsheet. Its companion [`Output` option](/api/option-output) is declared in `.a.yaml` and controls the Save checkbox in the UI. Together they form the save-to-spreadsheet feature: the option in `.a.yaml` captures the user's intent, while this element specifies what the column looks like and how it is populated.

> **Note:** The Output element writes to the **spreadsheet**, not the results panel. Values only appear when the user has ticked the corresponding Save checkbox.

## YAML Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `name` | string | — | Internal name. Must match the `Output` option name in `.a.yaml`. Accessed in R as `self$results$name`. |
| `type` | string | — | Must be `Output`. |
| `title` | string | — | Display label shown in the Save section of the analysis UI. |
| `varTitle` | string | — | Column header written to the spreadsheet. |
| `varDescription` | string | — | Tooltip or description for the column in the spreadsheet. |
| `measureType` | string | `continuous` | Variable type for the new column. One of `continuous`, `nominal`, `ordinal`, or `id`. |
| `clearWith` | list | `*` | List of option names whose change invalidates this output. Defaults to `*` (cleared by any option change). |
| `items` | integer or expression | `1` | Number of output columns to produce. Defaults to `1`. For multi-column output, set to the number of columns or an R expression evaluated against the options (e.g. `(length(factors))`). |

## R Methods

All methods are accessed via `self$results$name`, where `name` matches the `name` property in `.r.yaml`.

| Method | Description |
|--------|-------------|
| `setRowNums(rowNums)` | Sets which spreadsheet rows to write to. **Must be `rownames(data)`, not `1:nrow(data)`** — see important note below. |
| `setValues(values, index, key)` | Sets the vector of values for the column. For a single output (`items: 1`) pass a plain vector. For multi-output use `index` (integer position) or `key` (name) to target a specific column. |
| `isFilled(key)` | Returns `TRUE` if this output has already been populated in the current run. |
| `isNotFilled(key)` | Returns `TRUE` if this output has **not** yet been populated. Use as a guard to avoid redundant computation. |
| `setTitle(title, index, key)` | Overrides `varTitle` at runtime for a specific column. |
| `setDescription(desc, index, key)` | Overrides `varDescription` at runtime for a specific column. |

**Note on `key` and `index`:** These parameters are only relevant when `items > 1` (multi-column output). For the default single-output case (`items: 1`) you can omit them entirely — e.g. `self$results$myOutput$setValues(myVector)` is sufficient.

> [!IMPORTANT]
> **`setRowNums` must receive `rownames()`, not `1:n`**
>
> When jamovi applies row filters or handles missing values, it drops rows from the cleaned data frame but **preserves the original row names**. If you pass `1:nrow(data)` instead of `rownames(data)`, the values are written to the wrong spreadsheet rows — silently, with no error. Always use:
>
> ```r
> self$results$residsOV$setRowNums(rownames(data))
> ```

## Examples

### 0. Declare the option in `.a.yaml`

```yaml
- name: residsOV
  title: Residuals
  type: Output
```

### 1. Define in `.r.yaml`

```yaml
results:
    - name: residsOV
      type: Output
      title: Residuals
      varTitle: Residuals
      varDescription: Ordinary residuals from the fitted model
      measureType: continuous
      clearWith:
          - dep
          - factors
```

### 2. Populate in `.b.R`

Call a dedicated helper from `.run()` to keep the implementation clean.

```r
.run = function() {
    # ... main analysis logic, storing results in private fields ...
    private$.populateOutputs()
},

.populateOutputs = function() {
    if (self$options$residsOV && self$results$residsOV$isNotFilled()) {
        # self$cleanData and self$residuals are private fields
        # computed and stored during the main analysis in .run()
        self$results$residsOV$setRowNums(rownames(self$cleanData))
        self$results$residsOV$setValues(self$residuals)
    }
}
```
