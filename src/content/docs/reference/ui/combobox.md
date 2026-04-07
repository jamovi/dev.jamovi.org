---
layout: ../layouts/BaseLayout.astro
title: "ComboBox"
---

**Inherits from [`OptionControl`](/ui/optioncontrol)**

A `ComboBox` displays the selected value from a preset list of options.

## Properties

In addition to any inherited properties, a `ComboBox` supports:

Property      | Description                               | Form
------------- | ------------------------------------------| --------------------
`options` | Sets the options to be displayed in the drop-down list. This property is to be used as an override of the `options` property of the underlying option. | array of objects consisting of<br />`name`: reference name<br />`title`: display text

## Supported Option Types

- `List`

### `List`

When the option binding is to a `List` a few properties are needed for it to work.

The below example shows an option with the name `ss`. This option has a property called `options` which describes three mutually exclusive sub-options that are possible values for the options output. A `List` returns the name of one of these sub-options as a string.

Now a `ComboBox` can be used to manipulate a 'List' option by changing its value to the option selected in the drop-down.

*Option Definition*
```yaml
- name: ss
  title: Sum of squares
  type: List
  options:
    - title: Type 1
      name: '1'
    - title: Type 2
      name: '2'
    - title: Type 3
      name: '3'
  default: '3'
  description:
      R: >
        `'1'`, `'2'` or `'3'` (default), the sum of squares
        to use
```

A `ComboBox` can completely encapsulate a `List` option which makes its definition very simple. The control will use the options `title` as a `label` and `options` as the contents for the drop-down. `Label` and `options` can be defined in the control definition if it is required to override the values of the option.

*UI Control Definition*
```yaml
- type: ComboBox
  name: ss
```

### Visual Result

<div class="jamovi-demo-box" style="padding: 12px; border: 1px solid #ccc; background: #e8e8e8; display: inline-block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; color: #333; border-radius: 3px;">
  <label style="display: flex; align-items: center; gap: 8px;">
    Sum of squares
    <select style="padding: 2px 4px; border: 1px solid #b2b2b2; border-radius: 2px; font-family: inherit; font-size: inherit; background: #fff; cursor: pointer; outline: none;">
      <option value="1">Type 1</option>
      <option value="2">Type 2</option>
      <option value="3" selected>Type 3</option>
    </select>
  </label>
</div>