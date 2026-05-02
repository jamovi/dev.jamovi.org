---
layout: ../layouts/BaseLayout.astro
title: Integer Option
description: The Integer option represents a whole number, typically a text box in the UI.
---

The `Integer` option represents a whole number.

## Description

In the jamovi UI, an `Integer` option is typically represented by a **TextBox**. It validates that the user input is a whole number and falls within the specified range.

## YAML Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | The unique name of the option. |
| `type` | string | Must be `Integer`. |
| `title` | string | The label displayed in the UI. |
| `default` | integer | The default value. |
| `min` | integer | The minimum allowed value (inclusive). |
| `max` | integer | The maximum allowed value (inclusive). |

## R Implementation

In R, an `Integer` option is represented as an `integer` value.

## Examples

### 1. Define in YAML

```yaml
- name: bootstrap
  type: Integer
  title: Bootstrap samples
  default: 1000
  min: 1
```

### 2. Implementation in R

Access the value using `self$options$name`:

```r
n_samples <- self$options$bootstrap
```
