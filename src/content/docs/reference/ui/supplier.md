---
layout: ../layouts/BaseLayout.astro
title: "Supplier"
---

The `Supplier` control is a generic list of items from which the user can select and drag to other controls. It is often used for supplying factors or other non-variable items.

## Properties

| Property | Description |
| :--- | :--- |
| `name` | The name of the supplier. |
| `label` | The title displayed at the top of the supplier. |

## Example

```yaml
- type: Supplier
  name: factors
  label: Factors
```

