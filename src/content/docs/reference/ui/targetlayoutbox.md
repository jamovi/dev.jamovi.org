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

### Visual Result

<div class="jamovi-demo-box" style="padding: 12px; border: 1px solid #ccc; background: #e8e8e8; width: 320px; display: flex; align-items: flex-start; gap: 8px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; color: #333; border-radius: 3px;">
  <button style="margin-top: 24px; width: 24px; height: 24px; border: 1px solid #b2b2b2; background: #f0f0f0; border-radius: 2px; padding: 0; cursor: pointer; display: flex; align-items: center; justify-content: center; outline: none;">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
  </button>
  <div style="flex: 1;">
    <div style="margin-bottom: 4px;">Dependent Variables</div>
    <div style="border: 1px solid #b2b2b2; min-height: 80px; background: #fff; border-radius: 2px; padding: 2px;">
      <div style="padding: 2px 4px; cursor: grab; user-select: none; display: flex; align-items: center; gap: 6px;">
        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background: #f39c12; border: 1px solid #e67e22; box-sizing: border-box;"></span> dep
      </div>
    </div>
  </div>
</div>