---
layout: ../layouts/BaseLayout.astro
title: "VariableSupplier"
type: article
description: "Technical reference for the jamovi UI VariableSupplier control, the primary source for variables in an analysis UI."
---

The `VariableSupplier` is a foundational component of the jamovi UI. it represents the sidebar on the left of the analysis options that lists all the variables available in the current dataset.

## Properties

| Property | Description |
| :--- | :--- |
| `name` | The name of the supplier (usually `data`). |
| `suggested` | (Optional) Types of variables that should be highlighted. |
| `permitted` | (Optional) Types of variables allowed to be dragged from here. |

## Example

```yaml
- type: VariableSupplier
  name: data
```

