---
layout: ../layouts/BaseLayout.astro
title: "RadioButton"
---

**Inherits from [`OptionControl`](/ui/optioncontrol), [`ParentControl`](/ui/parentcontrol)**

## Properties

There are no `RadioButton` specific properties. All behavior can be achieved using the inherited properties of `OptionControl` and `ParentControl`.

## Supported Option Types

- `List`

### `List`

When the option binding is to a `List` a few properties are needed for it to work.

The below example shows an option with the name `plotError`.
This option has a property called `options` which describes three mutually exclusive sub-options that are possible values for the options output. A `List` returns the name of one of these sub-options as a string.

Now a `RadioButton` can be used to manipulate a 'List' option by changing its value to a specified sub-option name.

*Option Definition*
```yaml
- name: plotError
  title: Error Bar Definition
  type: List
  options:
    - name: none
      title: None
    - name: ci
      title: Confidence interval
    - name: se
      title: Standard Error
  default: ci
  description:
      R: >
        `'none'`, `'ci'` (default), or `'se'`. Use no error
        bars, use confidence intervals, or use standard errors on the
        plots, respectively
```

To achieve this two properties will need to be added to the `RadioButton` definition `optionName` and `optionPart`. Both these properties are inherited from `OptionControl`. As has been described in `OptionControl` documentation, `optionName` is used to determine what option the `RadioButton` should bind to. Under normal circumstances, it is not necessary to use `optionName` as the property `name` can be used for the same effect. This however, becomes a problem for defining a `RadioButton` that is linked to an `List` as the `name` property also has the requirement to be unique to that UI control. It is not allowed to have two radio buttons (or any other control for that matter) with the same name. Because of this, when binding to an `List` with a `RadioButton` we are required to give that `RadioButton` a unique name and use the `optionName` to bind to the desired `List`.

Now binding solely to a `List` is not a valid configuration for a `RadioButton` as it requires a boolean data type to operate correctly. To overcome this, the `RadioButton` definition will need to not *just* bind to the `List` but also to one of the sub-options. This is achieved using the `optionPart` property. By assigning the name of the desired sub-option to this property, the `RadioButton` will operate base on that sub-options name.

*UI Control Definition*
```yaml
- type: RadioButton
  name: plotError_none
  optionName: plotError
  optionPart: none
- type: RadioButton
  name: plotError_ci
  optionName: plotError
  optionPart: ci
  children:
    - type: TextBox
      name: ciWidth
      label: Interval
      suffix: '%'
      format: number
      inputPattern: '[0-9]+'
      enable: (plotError_ci)
- type: RadioButton
  name: plotError_se
  optionName: plotError
  optionPart: se

```

Three `RadioButton`'s for the three sub-options of the option bound `List`.

### Visual Result

<div class="jamovi-demo-box" style="padding: 12px; border: 1px solid #ccc; background: #e8e8e8; display: inline-block; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; font-size: 13px; color: #333; border-radius: 3px;">
  <div style="font-weight: 600; margin-bottom: 6px;">Error Bar Definition</div>
  <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; margin-bottom: 4px; user-select: none;">
    <input type="radio" name="plotErrorD" value="none" style="margin: 0; cursor: pointer;"> None
  </label>
  <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; margin-bottom: 4px; user-select: none;">
    <input type="radio" name="plotErrorD" value="ci" checked style="margin: 0; cursor: pointer;"> Confidence interval
  </label>
  <div style="margin-left: 20px; margin-bottom: 4px; display: flex; align-items: center; gap: 6px;">
    <label for="ciWidthD">Interval</label>
    <input type="number" id="ciWidthD" value="95" style="width: 50px; padding: 2px 4px; border: 1px solid #b2b2b2; border-radius: 2px; outline: none; background: #fff; font-family: inherit; font-size: inherit;"> %
  </div>
  <label style="display: flex; align-items: center; gap: 6px; cursor: pointer; user-select: none;">
    <input type="radio" name="plotErrorD" value="se" style="margin: 0; cursor: pointer;"> Standard Error
  </label>
  <script>
    document.querySelectorAll('input[name="plotErrorD"]').forEach(rad => {
      rad.addEventListener('change', (e) => {
        document.getElementById('ciWidthD').disabled = (e.target.value !== 'ci');
      });
    });
  </script>
</div>
</div>