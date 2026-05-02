---
layout: ../layouts/BaseLayout.astro
title: Bool Option
description: "Reference for the Bool option, represented as a checkbox in the jamovi user interface."
type: article
---

The `Bool` option represents a boolean (true/false) value.

## Description

In the jamovi UI, a `Bool` option is typically represented by a **Checkbox**. It is ideal for toggling specific statistics, plots, or analysis settings.

## YAML Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | The unique name of the option. |
| `type` | string | Must be `Bool`. |
| `title` | string | The label displayed in the UI. |
| `default` | boolean | The default value (`true` or `false`). Defaults to `false`. |

## R Implementation

In R, a `Bool` option is represented as a `logical` value (`TRUE` or `FALSE`).

## Examples

### 1. Define in YAML

```yaml
- name: welch
  type: Bool
  title: Welch's
  default: false
```

### 2. Implementation in R

Access the value using `self$options$name`:

```r
if (self$options$welch) {
    # Perform Welch's t-test
}
```
