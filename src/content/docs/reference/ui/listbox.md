---
layout: ../layouts/BaseLayout.astro
title: "ListBox"
output: html_document
---

The `ListBox` control is used to display a list of items that the user can interact with. It is typically bound to a `List` or `NMXList` option type.

## Properties

| Property | Description |
| :--- | :--- |
| `name` | The name of the control. |
| `label` | The label displayed above the list box. |
| `fullWidth` | (Optional) If `true`, the control takes up the full width of the panel. |

## Supported Option Types

- `List`
- `NMXList`

## Example

```yaml
- type: ListBox
  name: variables
  label: Select variables
```

### Visual Result

<div class="jamovi-demo-box" style="padding: 12px; border: 1px solid #ccc; background: #e8e8e8; display: inline-block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; color: #333; border-radius: 3px;">
  <div style="margin-bottom: 4px;">Select variables</div>
  <select multiple style="width: 200px; height: 120px; padding: 2px; border: 1px solid #b2b2b2; border-radius: 2px; font-family: inherit; font-size: inherit; background: #fff; outline: none; cursor: pointer;">
    <option value="1" style="padding: 2px 4px;">Variable A</option>
    <option value="2" style="padding: 2px 4px;">Variable B</option>
    <option value="3" style="padding: 2px 4px;">Variable C</option>
    <option value="4" style="padding: 2px 4px;">Variable D</option>
  </select>
  <div style="font-size: 0.9em; color: #666; margin-top: 4px;">Hold Ctrl/Cmd to select multiple</div>
</div>