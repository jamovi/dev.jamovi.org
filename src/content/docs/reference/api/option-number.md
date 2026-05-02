---
layout: ../layouts/BaseLayout.astro
title: Number Option
description: The Number option represents a decimal number, typically a text box in the UI.
---

The `Number` option represents a decimal (floating-point) number.

## Description

In the jamovi UI, a `Number` option is typically represented by a **TextBox**. It validates that the user input is numeric and falls within the specified range.

## YAML Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | The unique name of the option. |
| `type` | string | Must be `Number`. |
| `title` | string | The label displayed in the UI. |
| `default` | number | The default value. |
| `min` | number | The minimum allowed value (inclusive). |
| `max` | number | The maximum allowed value (inclusive). |

## R Implementation

In R, a `Number` option is represented as a `numeric` value.

## Examples

### 1. Define in YAML

```yaml
- name: ciWidth
  type: Number
  title: Confidence level
  default: 95
  min: 50
  max: 99.9
```

### 2. Implementation in R

Access the value using `self$options$name`:

```r
ci_level <- self$options$ciWidth / 100
```
