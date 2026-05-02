---
layout: ../layouts/BaseLayout.astro
title: Data Option
description: "Learn how to define the primary dataset for a jamovi analysis using the Data option."
type: article
---

The `Data` option is used to specify the dataset that the analysis will operate on. Almost every analysis in jamovi begins with a `Data` option.

## Description

In the jamovi UI, the `Data` option is not explicitly represented as a control; instead, it represents the entire spreadsheet. When an analysis is called from R, the `data` argument accepts a `data.frame`.

## YAML Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | Must be `data`. |
| `type` | string | Must be `Data`. |

## R Implementation

In the R implementation, the data is accessed via `self$data`. While `self$options$data` exists, it is generally preferred to use `self$data` as it provides the actual `data.frame` (potentially with filters and missing value handling applied).

## Examples

### 1. Define in YAML

The `Data` option should always be the first option in the `options` list of the `.a.yaml` file.

```yaml
name: MyAnalysis
jas: '1.2'

options:
  - name: data
    type: Data
```

### 2. Implementation in R

Access the dataset in your `.run()` function:

```r
.run = function() {
    # Access the data frame
    df <- self$data
    
    # Perform operations
    n_rows <- nrow(df)
}
```
