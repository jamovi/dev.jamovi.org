---
layout: ../layouts/BaseLayout.astro
title: "LayoutBox"
output: html_document
---

**Inherits from [`BaseControl`](/ui/basecontrol), [`ParentControl`](/ui/parentcontrol)**

A `LayoutBox` allows a designer to control the layout of its child controls. A `LayoutBox` does not display anything itself but purely serves as a frame for placing other controls. It can be used as a list (default), inline list, or grid.

## Properties

In addition to any inherited properties, a `LayoutBox` supports:

Property      | Description                               | Form                 |
------------- | ------------------------------------------| -------------------- |
`style`  | Determines how the automatic layout behavior of the control. | *enum*: list, inline

### Further Details

####`style`

-	`list`: Children will be added in a vertical manner starting at `cell` position `column: 0, row: 0`.
-	`inline`: Children will be added in a horizontal manner starting at `cell` position `column: 0, row: 0`.

To add to a `LayoutBox` in a grid format, use the `cell` property of the child control. As the `LayoutBox` is positioning its `children` it will use the `cell` property of the control to place it correctly. The `cell` property of a child control overrides the auto positioning of the `style` property. If a child control does not have a `cell` property defined it will use the `style` property to automatically place it based on the position of the previous child.

----------------------------------------

### Visual Result

<div class="jamovi-demo-box" style="padding: 12px; border: 1px solid #ccc; background: #e8e8e8; display: inline-block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; color: #333; border-radius: 3px; width: 350px;">
  <div style="margin-bottom: 24px;">
    <div style="font-size: 0.85em; color: #666; text-transform: uppercase; margin-bottom: 8px; font-weight: 600; letter-spacing: 0.5px;">List Style (Vertical)</div>
    <div style="display: flex; flex-direction: column; gap: 6px;">
      <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;"><input type="checkbox" checked style="margin: 0; cursor: pointer;"> Option 1</label>
      <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;"><input type="checkbox" style="margin: 0; cursor: pointer;"> Option 2</label>
    </div>
  </div>
  <div>
    <div style="font-size: 0.85em; color: #666; text-transform: uppercase; margin-bottom: 8px; font-weight: 600; letter-spacing: 0.5px;">Inline Style (Horizontal)</div>
    <div style="display: flex; flex-direction: row; gap: 16px;">
      <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;"><input type="radio" name="ibD" checked style="margin: 0; cursor: pointer;"> A</label>
      <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;"><input type="radio" name="ibD" style="margin: 0; cursor: pointer;"> B</label>
      <label style="display: flex; align-items: center; gap: 6px; cursor: pointer;"><input type="radio" name="ibD" style="margin: 0; cursor: pointer;"> C</label>
    </div>
  </div>
</div>