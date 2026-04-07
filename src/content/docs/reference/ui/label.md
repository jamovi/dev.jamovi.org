---
layout: ../layouts/BaseLayout.astro
title: "Label"
---

A `Label` is a simple control that displays text. It can take two inheritance forms depending on how it is setup. The first is a *static label* and the second is an *option label*.

## Option Label
**Inherits from (`OptionControl`](ui-optioncontrol), [`ParentControl`](/ui/parentcontrol)**

A `Label` is by default an *option label* unless the `label` property is defined. An option `Label` will populate its display using the underlying option to which it has been assigned. For further information about option binding see [`OptionControl`](/ui/optioncontrol).

### Properties

When bound to an option, there are no `Label` specific properties. All behavior can be achieved using the inherited properties of [`OptionControl`](/ui/optioncontrol) and [`OptionControl`](/ui/optioncontrol).

-------------

## Static Label
**Inherits from [`BaseControl`](/ui/basecontrol), [`ParentControl`](/ui/parentcontrol)**

A static `Label` is created when the `label` property of the control is defined. In this form the `Label` control acts like any old label.

### Properties

In addition to any inherited properties, a `Label` supports:

Property      | Description                               | Form                 |
------------- | ------------------------------------------| -------------------- |
`label`  | Sets the text to be displayed by the control. | string

### Example

```yaml
- type: Label
  label: Percentile Values
  children:
    - type: CheckBox
      name: quart
```




----------------------------------------

### Visual Result

<div class="jamovi-demo-box" style="padding: 12px; border: 1px solid #ccc; background: #e8e8e8; display: inline-block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; color: #333; border-radius: 3px;">
  <div style="font-weight: 600; margin-bottom: 6px;">Percentile Values</div>
  <div style="margin-left: 8px;">
    <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none;">
      <input type="checkbox" checked style="margin: 0; cursor: pointer;">
      quart
    </label>
  </div>
</div>