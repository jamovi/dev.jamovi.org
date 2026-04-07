---
layout: ../layouts/BaseLayout.astro
title: "TermLabel"
output: html_document
---
The `TermLabel` control is used to represent interaction terms (e.g., `A * B`) within a `TargetLayoutBox`. It is typically used in analyses with complex models like ANOVA or Regression.

## Properties

| Property | Description |
| :--- | :--- |
| `name` | The name of the option it binds to. |

## Example

```yaml
- type: TermLabel
  name: terms
```

### Visual Result

<div class="jamovi-demo-box" style="padding: 12px; border: 1px solid #ccc; background: #fff; display: inline-block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; color: #333; border-radius: 3px;">
  <div style="padding: 2px 4px; display: inline-flex; align-items: center; gap: 4px; cursor: grab; user-select: none;">
    <span style="display: inline-flex; align-items: center; justify-content: center; width: 12px; height: 12px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f39c12" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg></span> A
    <span style="color: #666; font-weight: bold; margin: 0 2px;">✻</span>
    <span style="display: inline-flex; align-items: center; justify-content: center; width: 12px; height: 12px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f39c12" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 8v8M8 12h8"/></svg></span> B
  </div>
</div>