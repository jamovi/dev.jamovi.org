---
layout: ../layouts/BaseLayout.astro
title: Variables Option
description: "Reference for the Variables option, used for multiple column selection from the jamovi dataset."
type: article
---

The `Variables` option allows the user to select multiple variables (columns) from the dataset.

## Description

In the jamovi UI, a `Variables` option is represented as a **Target Drop Box** that accepts multiple items. Users can drag several variables into this slot. It is ideal for multivariate analyses, repeated measures, or specifying multiple covariates.

## YAML Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | The unique name of the option. |
| `type` | string | Must be `Variables`. |
| `title` | string | The label displayed in the UI. |
| `suggested` | array | A list of suggested variable types. |
| `permitted` | array | A list of permitted variable types. |
| `rejectInf` | boolean | If `true`, errors on infinite values. Defaults to `true`. |
| `rejectMissing` | boolean | If `true`, errors on missing values. Defaults to `false`. |

## R Implementation

In R, a `Variables` option is represented as a **character vector**. If no variables are assigned, it returns an empty character vector (`character(0)`).

## Examples

### 1. Define in YAML

```yaml
- name: deps
  type: Variables
  title: Dependent Variables
  permitted:
    - continuous
```

### 2. Implementation in R

Access the list of variables using `self$options$name`:

```r
depNames <- self$options$deps

for (depName in depNames) {
    # Perform analysis for each variable
}
```
