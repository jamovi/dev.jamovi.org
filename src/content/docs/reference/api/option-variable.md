---
layout: ../layouts/BaseLayout.astro
title: Variable Option
description: "Learn how to use the Variable option for single column selection from the jamovi dataset."
type: article
---

The `Variable` option allows the user to select a single variable (column) from the dataset.

## Description

In the jamovi UI, a `Variable` option is represented as a **Target Drop Box**. Users can drag a single variable from the variable supplier into this slot. It is commonly used for dependent variables in simple tests or grouping variables.

## YAML Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | The unique name of the option. |
| `type` | string | Must be `Variable`. |
| `title` | string | The label displayed in the UI. |
| `suggested` | array | A list of suggested variable types (e.g., `[continuous]`). |
| `permitted` | array | A list of permitted variable types (e.g., `[continuous, ordinal, nominal]`). |
| `rejectInf` | boolean | If `true`, the analysis will error if the variable contains infinite values. Defaults to `true`. |
| `rejectMissing` | boolean | If `true`, the analysis will error if the variable contains missing values. Defaults to `false`. |

## R Implementation

In R, a `Variable` option is represented as a **character string** (a character vector of length 1) containing the name of the variable. If no variable is assigned, it is `NULL`.

## Examples

### 1. Define in YAML

```yaml
- name: dep
  type: Variable
  title: Dependent Variable
  suggested:
    - continuous
  permitted:
    - continuous
    - ordinal
```

### 2. Implementation in R

Access the variable name using `self$options$name`:

```r
depName <- self$options$dep

if ( ! is.null(depName)) {
    # Get the actual data column
    column <- self$data[[depName]]
}
```
