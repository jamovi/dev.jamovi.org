---
layout: ../layouts/BaseLayout.astro
title: "Advanced UI Design"
type: article
description: "Explore advanced UI design in jamovi, including detailed mappings between option types and their corresponding UI controls."
output: html_document
---

## Controls

There are three different categories of controls:

 - [Layout Controls](/api/ui-definition)
 - [Option Controls](/api/ui-definition)
 - [Display Controls](/api/ui-definition)

Layout controls are used to control the layout child controls in the UI. Option controls allow the user to change the values of options for analyses. We've already seen some of these; the `CheckBox`, the `ComboBox`, etc. Display controls are for presenting static information such as labels.

### Option Controls

As already seen earlier in this tutorial series, different option controls are 'bound' to different analysis options. The name of the option control typically needs to match the name of the option it is bound to. Changing the option control leads to changes to the underlying option, resulting in changes to the analysis.

> [!TIP]
> **Choose the Right Control for the Job**
> - Use **CheckBoxes** for binary "on/off" settings.
> - Use **RadioButtons** when there are 2-4 mutually exclusive options.
> - Use **ComboBoxes** (dropdowns) when there are 5 or more options, or to save vertical space.
> - Use **TextBoxes** with `format: number` to ensure users only enter valid numeric data.

Not all controls can be bound to *any* option. It wouldn't be meaningful to bind a checkbox to a `List` option for example. The following lists the different option types, and the control types that can be bound to each:

### `Bool`

**You can use** : [`CheckBox`](/ui/checkbox)

```yaml
- type: CheckBox
  name: #optionName
```

**Or you can use** : [`Label`](/ui/label)

This control is read only.

```yaml
- type: Label
  name: #optionName
  format: bool
```

------------------

### `Integer`

**You can use** : [`TextBox`](/ui/textbox)

Allows for the value to be edited.

```yaml
- type: TextBox
  name: #optionName
  format: number
```

**Or you can use** : [`Label`](/ui/label)

This control is read only.

```yaml
- type: Label
  name: #optionName
  format: number
```

---------------

### `Number`

**You can use** : [`TextBox`](/ui/textbox)

Allows for the value to be edited.

```yaml
- type: TextBox
  name: #optionName
  format: number
```

**Or you can use** : [`Label`](/ui/label)

This control is read only.

```yaml
- type: Label
  name: #optionName
  format: number
```

----------------

### `String`

**You can use** : [`TextBox`](/ui/textbox)

Allows for the value to be edited.

```yaml
- type: TextBox
  name: #optionName
```

**Or you can use** : [`Label`](/ui/label)

This control is read only.

```yaml
- type: Label
  name: #optionName
```

-----------------

### `List`

**You can use** : [`ComboBox`](/ui/combobox)

```yaml
- type: ComboBox
  name: #optionName
```

**Or you can use** : [`RadioButton`](/ui/radiobutton)

Use multiple `RadioButton`'s linked to the different sub-options.

```yaml
- type: RadioButton
  name: #uniqueName_1
  optionName: #optionName
  optionPart: #optionPartName_1

- type: RadioButton
  name: #uniqueName_2
  optionName: #optionName
  optionPart: #optionPartName_2

- type: RadioButton
  name: #uniqueName_N
  optionName: #optionName
  optionPart: #optionPartName_N

```

----------------

### `NMXList`

**You can use** : [`CheckBox`](/ui/checkbox)

Use multiple CheckBox's linked to the different sub-options.

```yaml
- type: CheckBox
  name: #uniqueName_1
  optionName: #optionName
  optionPart: #optionPartName_1

- type: CheckBox
  name: #uniqueName_2
  optionName: #optionName
  optionPart: #optionPartName_2

- type: CheckBox
  name: #uniqueName_N
  optionName: #optionName
  optionPart: #optionPartName_N

```

----------------


### `Variable`

**You can use** : `VariablesListBox`

```yaml
- type: VariableListBox
  name: #optionName
  isTarget: true
  maxItemCount: 1
```

**Or you can use** : [`ListBox`](/ui/listbox)

```yaml
- type: ListBox
  name: #optionName
  isTarget: true
  maxItemCount: 1
  template:
    type: VariableLabel
```

-----------------

### `Variables`

**You can use** : `VariablesListBox`

```yaml
- type: VariableListBox
  isTarget: true
  name: #optionName
```

**Or you can use** : [`ListBox`](/ui/listbox)

```yaml
- type: ListBox
  name: #optionName
  isTarget: true
  template:
    type: VariableLabel
```

------------------

### `Terms`

**You can use** : [`ListBox`](/ui/listbox)

```yaml
- type: ListBox
  name: #optionName
  isTarget: true
  template:
    type: TermLabel
```

------------------

### `Pairs`

**You can use** : `VariablesListBox`

```yaml
  - type: VariablesListBox
    name: #optionName
    isTarget: true
    columns:
      - name: i1
        template:
          type: VariableLabel
      - name: i2
        template:
          type: VariableLabel
```

**Or you can use** : [`ListBox`](/ui/listbox)

```yaml
  - type: ListBox
    name: #optionName
    isTarget: true
    columns:
      - name: i1
        template:
          type: VariableLabel
      - name: i2
        template:
          type: VariableLabel
```

------------------

### `Array`


**You can use** : [`ListBox`](/ui/listbox)

```yaml
- type: ListBox
  name: #optionName
  template:
    type: #depends on the option
```

This is jamovi's most complicated control. The setup of it's UI definition depends heavily on the way the option is setup. A more detailed explanation can be found [here](/ui/listbox).

**Next Step:** Learn how to add complex logic to your UI with **[Advanced Customisation](/ui/advanced-customisation)**.
