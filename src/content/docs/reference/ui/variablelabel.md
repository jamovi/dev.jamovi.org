---
layout: ../layouts/BaseLayout.astro
title: "VariableLabel"
output: html_document
---
The `VariableLabel` control is used to represent a single variable within a `TargetLayoutBox`. It provides the visual representation of a "dropped" variable.

## Properties

| Property | Description |
| :--- | :--- |
| `name` | The name of the option it binds to. |
| `label` | (Optional) The title of the variable (usually automatically handled). |

## Example

```yaml
- type: VariableLabel
  name: dep
```

### Visual Result

<div class="jamovi-demo-box" style="padding: 12px; border: 1px solid #ccc; background: #fff; display: inline-block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; color: #333; border-radius: 3px;">
  <div style="padding: 2px 4px; display: inline-flex; align-items: center; gap: 6px; cursor: grab; user-select: none;">
    <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background: #f39c12; border: 1px solid #e67e22; box-sizing: border-box;"></span> dep
  </div>
</div>