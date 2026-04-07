---
layout: ../layouts/BaseLayout.astro
title: "CollapseBox"
output: html_document
---

**Inherits from [`LayoutBox`](/ui/layoutbox)**

The `CollapseBox` is a `LayoutBox` that can be collapsed down to a label so that advanced options can be hidden until needed.

## Properties

In addition to any inherited properties, a `CollapseBox` supports:

Property      | Description                               | Form                 |
------------- | ------------------------------------------| -------------------- |
`collapsed`  | Sets the initial collapsed state of the control. | boolean
`label`  | Sets the text that will be displayed in the label bar of the control. | string

----------------------------------------

### Visual Result

<div class="jamovi-demo-box" style="padding: 12px; border: 1px solid #ccc; background: #e8e8e8; display: inline-block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; color: #333; border-radius: 3px; width: 300px;">
  <details style="border-top: 1px solid #b2b2b2;">
    <summary style="padding: 6px 0; font-weight: 600; cursor: pointer; user-select: none; color: #333; outline: none; display: flex; align-items: center; justify-content: space-between; list-style: none;">
      Advanced Options <span style="font-size: 0.8em; color: #666;">▼</span>
    </summary>
    <div style="padding: 8px 0 4px 12px;">
      <div style="display: flex; align-items: center; gap: 6px;">
        <label for="customIterD" style="flex: 1;">Iterations</label>
        <input type="number" id="customIterD" value="1000" style="width: 60px; padding: 2px 4px; border: 1px solid #b2b2b2; border-radius: 2px; outline: none; background: #fff; font-family: inherit; font-size: inherit;">
      </div>
    </div>
  </details>
</div>