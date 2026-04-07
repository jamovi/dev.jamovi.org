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

### Visual Result

<div class="jamovi-demo-box" style="padding: 12px; border: 1px solid #ccc; background: #e8e8e8; width: 220px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; color: #333; border-radius: 3px;">
  <div style="margin-bottom: 4px;">Factors</div>
  <div style="border: 1px solid #b2b2b2; height: 120px; overflow-y: auto; background: #fff; border-radius: 2px; padding: 2px;">
    <div style="padding: 2px 4px; cursor: grab; user-select: none;">Factor A</div>
    <div style="padding: 2px 4px; cursor: grab; user-select: none; background: #e1f0fa; outline: 1px solid #99c8e9;">Factor B</div>
    <div style="padding: 2px 4px; cursor: grab; user-select: none;">Factor C</div>
  </div>
</div>