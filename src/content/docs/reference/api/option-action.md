---
layout: ../layouts/BaseLayout.astro
title: Action Option
---

Actions allow an analysis to trigger specific events, such as opening a new data set in a new jamovi window. This functionality requires jamovi 2.7.12 or newer.

## Definition

Actions are defined in the `.a.yaml` file:

```yaml
    - name: open
      title: Open
      type: Action
      action: open
```

Presently, the only action supported is of type `open`.

## Usage in R

When a user clicks the action button in the UI, the analysis is run, and the value of the option is set to `TRUE`.

```r
if (self$options$open) {
    # The user clicked the open button
}
```

### Performing the Action

To actually execute the action, you must retrieve the Option object and call its `$perform()` method.

```r
if (self$options$open) {
    # 1. Retrieve the option object
    option <- self$options$option('open')
    
    # 2. Check for compatibility
    if (is.null(option$perform))
        return()
    
    # 3. Call $perform() with a callback
    option$perform(function(action) {
        # Perform logic (e.g., create a data frame)
        list(
            data = ToothGrowth,
            title = 'Results from Action'
        )
    })
}
```
