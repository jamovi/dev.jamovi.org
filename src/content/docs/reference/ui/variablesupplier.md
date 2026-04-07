---
layout: ../layouts/BaseLayout.astro
title: "VariableSupplier"
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

### Visual Result

<div class="jamovi-demo-box" style="padding: 12px; border: 1px solid #ccc; background: #e8e8e8; width: 220px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; color: #333; border-radius: 3px;">
  <div style="border: 1px solid #b2b2b2; height: 140px; overflow-y: auto; background: #fff; padding: 2px; border-radius: 2px;">
    <div style="padding: 2px 4px; cursor: grab; user-select: none; display: flex; align-items: center; gap: 6px;">
      <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background: #f39c12; border: 1px solid #e67e22; box-sizing: border-box;"></span> ID
    </div>
    <div style="padding: 2px 4px; cursor: grab; user-select: none; display: flex; align-items: center; gap: 6px; background: #e1f0fa; outline: 1px solid #99c8e9;">
      <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background: #f39c12; border: 1px solid #e67e22; box-sizing: border-box;"></span> Score
    </div>
    <div style="padding: 2px 4px; cursor: grab; user-select: none; display: flex; align-items: center; gap: 6px;">
      <span style="display: inline-flex; align-items: center; justify-content: center; width: 12px; height: 12px;">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#3498db" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="12" rx="2" ry="2"/><path d="M6 6v12M10 6v12M14 6v12M18 6v12"/></svg>
      </span> Group
    </div>
  </div>
</div>