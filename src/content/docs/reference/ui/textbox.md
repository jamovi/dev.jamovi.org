---
layout: ../layouts/BaseLayout.astro
title: "TextBox"
---

**Inherits from [`OptionControl`](/ui/optioncontrol)**

A textbox allows for the displaying and editing of the value of an option in text form.

## Properties

In addition to any inherited properties, a `TextBox` supports:

Property      | Description                               | Form
------------- | ------------------------------------------| --------------------
`format` | Sets the format definition that the `TextBox` should use to perform string manipulations with. If no format is specified `string` is assumed. | Name of a [standard format](/ui/standard-formats)<br />or a [custom format](/ui/custom-format) include
`suffix`  | Sets the text to be placed to the right of the textbox.  | string
`inputPattern` | Sets the input string filter for determining valid inputs. For example, a number `TextBox` would have `inputPattern: '[0-9]+'`   | regular expression string
`alignText`  | Set the horizontal alignment of the text within the `TextBox`. | enum: left, center, right
`borderless`  | Toggles whether the control has a visible border or not. This is mainly used when a `TextBox` is add to the `template` of a `ListBox`. | bool

## Supported Option Types ##

- `String`
- `Integer`
- `Number`
- Any format that has both toString() and parsing capabilities.

## Example

```yaml
  - type: CheckBox
    name: logOdds
    children:
      - type: TextBox
        name: ciWidth
        suffix: '%'
        format: number
        inputPattern: '[0-9]+'
        enable: (logOdds)

```

The above example adds a `TextBox` as a child control to a `CheckBox`.

### Visual Result

<div class="jamovi-demo-box" style="padding: 12px; border: 1px solid #ccc; background: #e8e8e8; display: inline-block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; color: #333; border-radius: 3px;">
  <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; margin-bottom: 6px; user-select: none;">
    <input type="checkbox" id="logOddsCheckD" checked style="margin: 0; cursor: pointer;">
    Log odds
  </label>
  <div style="margin-left: 20px; display: flex; align-items: center; gap: 6px;">
    <label for="logOddsWidthD">Interval</label>
    <input type="number" id="logOddsWidthD" value="95" style="width: 50px; padding: 2px 4px; border: 1px solid #b2b2b2; border-radius: 2px; outline: none; font-family: inherit; font-size: inherit; background: #fff;"> %
  </div>
  <script>
    document.getElementById('logOddsCheckD').addEventListener('change', (e) => {
      document.getElementById('logOddsWidthD').disabled = !e.target.checked;
    });
  </script>
</div>