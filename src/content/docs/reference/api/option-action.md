---
layout: ../layouts/BaseLayout.astro
title: Action Option
description: "Documentation for the Action option, allowing analyses to trigger UI events like opening new datasets."
type: article
---

Actions allow an analysis to trigger specific events, such as opening a new dataset in a new jamovi window. This functionality requires jamovi 2.7.12 or newer.

## Description

In the jamovi UI, an `Action` option is represented as a **Button**. When clicked, it triggers the specified action. Currently, the only supported action is `open`, which opens a dataset in a new jamovi window.

## YAML Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | The unique name of the option. |
| `type` | string | Must be `Action`. |
| `title` | string | The label displayed on the button. |
| `action` | string | The type of action to perform. Currently only `open` is supported. |

## R Implementation

In R, an `Action` option is represented as a `logical` value. It is `TRUE` when the user has clicked the button, and `FALSE` otherwise.

## Examples

### 1. Define in YAML

```yaml
- name: open
  title: Open
  type: Action
  action: open
```

### 2. Implementation in R

Checking `self$options$name` tells you the button was clicked, but does not execute the action. To execute it, retrieve the Option object and call its `$perform()` method:

```r
if (self$options$open) {
    option <- self$options$option('open')

    if (is.null(option$perform))
        return()

    option$perform(function(action) {
        list(
            data  = ToothGrowth,
            title = 'Results from Action'
        )
    })
}
```
