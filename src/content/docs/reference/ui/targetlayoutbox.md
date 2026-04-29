---
layout: ../layouts/BaseLayout.astro
title: "TargetLayoutBox"
---

The `TargetLayoutBox` is a container that acts as a destination for items dragged from a `Supplier` or `VariableSupplier`. It is used to define areas where users drop variables to assign them to analysis options.

## Properties

| Property | Description |
| :--- | :--- |
| `label` | The label displayed above the drop target. |
| `fixed` | (Optional) if `true`, the target has a fixed height. |
| `children` | (Optional) Nested controls within the box. |

## Example

```yaml
- type: TargetLayoutBox
  label: Dependent Variables
  children:
    - type: VariableLabel
      name: dep
```

