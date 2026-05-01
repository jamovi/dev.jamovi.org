---
layout: ../layouts/BaseLayout.astro
title: "User-interface Definition"
---

## Automatic UI Generation

One of the most powerful features of jamovi is its ability to automatically generate a functional user interface from your analysis definition (`.a.yaml`). When you run `jmvtools::install()`, jamovi looks at the `type` of each option and picks a sensible default control:

| Option Type (`.a.yaml`) | Default UI Control (`.u.yaml`) |
| :--- | :--- |
| `Bool` | `CheckBox` |
| `List` | `ComboBox` |
| `Variable` | `TargetLayoutBox` containing a `VariableLabel` |
| `Variables` | `TargetLayoutBox` containing multiple `VariableLabel`s |
| `Integer` / `Number` | `TextBox` |

## The UI YAML Structure

For many analyses, the automatically generated UI is sufficient. However, for more complex tools, you will want to customize the layout, add labels, or group controls into sections. This is where `ttest.u.yaml` comes in. It follows a tree structure of controls.

### Properties

| Property | Description | Form |
| :--- | :--- | :--- |
| `name` | The name of the analysis. | Unique string |
| `title` | Sets the title to be displayed at the top of the option panel. | string |
| `jus` | Defines the syntax version used (typically `'2.0'`). | string |
| `children` | An array of child control definitions. | Array |

### Example: Customizing Layout

```yaml
name:  descriptives
title: Descriptives
jus:   '2.0'
children:
  - type: LayoutBox
    margin: large
    children:
      - type: CheckBox
        name: plot_enabled
        label: Enable Plots
      - type: CollapseBox
        label: Advanced Options
        collapsed: true
        children:
          - type: TextBox
            name: custom_iterations
            label: Iterations
```

## Controls

The UI can be built using a variety of specialized controls:

### Base Control

- [BaseControl (abstract)](/ui/basecontrol)

### Layout Controls

- [ParentControl (abstract)](/ui/parentcontrol)
- [LayoutBox](/ui/layoutbox)
- [CollapseBox](/ui/collapsebox)
- [Supplier](/ui/supplier)
- [VariableSupplier](/ui/variablesupplier)
- [TargetLayoutBox](/ui/targetlayoutbox)

#### Parent Controls

- [CheckBox](/ui/checkbox)
- [RadioButton](/ui/radiobutton)
- [Label](/ui/label)

### Option Controls

- [TextBox](/ui/textbox)
- [CheckBox](/ui/checkbox)
- [RadioButton](/ui/radiobutton)
- [ComboBox](/ui/combobox)
- [Label](/ui/label)
- [ListBox](/ui/listbox)
- [VariableLabel](/ui/variablelabel)
- [TermLabel](/ui/termlabel)

### Display Controls

- [Label](/ui/label)
