---
layout: ../layouts/BaseLayout.astro
title: List Option
description: The List option allows the user to select one value from a predefined set of strings.
---

The `List` option allows the user to select one value from a predefined set of strings.

## Description

In the jamovi UI, a `List` option is typically represented by a **ComboBox** (drop-down) or a set of **RadioButtons**.

## YAML Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | The unique name of the option. |
| `type` | string | Must be `List`. |
| `title` | string | The label displayed in the UI. |
| `options` | array | A list of strings representing the available choices. |
| `default` | string | The default selected value. If omitted, the first item in `options` is used. |

## R Implementation

In R, a `List` option is represented as a `character` string.

## Examples

### 1. Define in YAML

```yaml
- name: hypothesis
  type: List
  title: Hypothesis
  options:
    - greater
    - less
    - unequal
  default: unequal
```

### 2. Implementation in R

Access the value using `self$options$name`:

```r
if (self$options$hypothesis == "greater") {
    # Perform one-tailed test
}
```
