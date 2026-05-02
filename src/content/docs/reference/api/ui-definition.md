---
layout: ../layouts/BaseLayout.astro
title: "User-interface Definition"
---

The user-interface definition is a YAML file in the `jamovi/` directory with the extension `.u.yaml`. While jamovi can automatically generate a UI from your analysis definition, the `.u.yaml` file allows you to customize the layout and appearance of the analysis options panel.

## Header

The header section defines the structure of the options panel. The file must be named to match the name of the analysis, but converted to lowercase (e.g., `ttest.u.yaml`).

```yaml
name:  ttest
title: Independent Samples T-Test
jus:   '2.0'
compilerMode: tame
children:
  - type: ...
    name: ...
```

| Property | Description |
| :--- | :--- |
| `name` | The internal name of the analysis. |
| `title` | The title displayed at the top of the options panel. |
| `jus` | The jamovi UI spec version (typically `'2.0'`). Must be wrapped in quotes. |
| `compilerMode` | Controls how `jmvtools` handles the file. Either `tame` or `aggressive`. Defaults to `aggressive`. |
| `events` | (Optional) Maps view-level events (e.g., `update`) to JavaScript handlers. |
| `children` | An array of UI controls that define the layout of the panel. |

## Compiler Modes

The `compilerMode` property determines how the jamovi compiler (`jmvtools`) interacts with your `.u.yaml` file. It defaults to `aggressive` when an analysis is first created.

- **`aggressive` (Default)**: The compiler will automatically regenerate and overwrite the `.u.yaml` file every time you install or build the module. This ensures the UI stays in sync with your `.a.yaml` but means **any manual changes to the UI definition will be lost.**
- **`tame`**: The compiler will respect your manual edits. It will add new controls for any new options you define, but it will not overwrite or rearrange your existing structure. **You must set the mode to `tame` if you wish to hand-polish your UI layout.**

## UI Interactivity (JavaScript)

For more complex UI behaviors, such as dynamically hiding controls or responding to user input with custom logic, jamovi allows you to attach JavaScript event handlers. These handlers are defined in a `.js` file in the `jamovi/js` directory and linked via the `events` property in your `.u.yaml`.

For a comprehensive guide on building interactive interfaces and a complete list of available events, see the **[Advanced Customisation](/ui/advanced-customisation)** tutorial.


## UI Controls

The UI is built using a hierarchy of controls. These controls are organized into three primary categories:

### Layout & Containers
Used to organize and group other controls.
- [**LayoutBox**](/ui/layoutbox): A generic container for layout management.
- [**CollapseBox**](/ui/collapsebox): A group that can be expanded or collapsed.
- [**TargetLayoutBox**](/ui/targetlayoutbox): A container specifically for variable drop targets.

### Input Controls
Directly map to analysis options defined in the `.a.yaml`.
- [**CheckBox**](/ui/checkbox): For boolean options.
- [**ComboBox**](/ui/combobox): For selecting from a list of options.
- [**TextBox**](/ui/textbox): For numeric or text input.
- [**RadioButton**](/ui/radiobutton): For selecting one from a set of mutually exclusive options.
- [**ListBox**](/ui/listbox): For managing lists of items (e.g., terms or custom levels).

### Specialized Controls
- [**VariableSupplier**](/ui/variablesupplier): Displays the available variables from the dataset.
- [**VariableLabel**](/ui/variablelabel): Represents a single variable within a target box.
- [**TermLabel**](/ui/termlabel): Represents a model term (e.g., an interaction).
- [**Label**](/ui/label): Displays static text or titles within the UI.

## Common Control Properties

Most UI controls share these fundamental properties:

| Property | Description |
| :--- | :--- |
| `type` | The class of the UI control (e.g., `CheckBox`). |
| `name` | (For option controls) The name of the corresponding option in `.a.yaml`. |
| `label` | The text label displayed next to or above the control. |

---

## Automatic UI Generation

If no `.u.yaml` file is provided, jamovi automatically generates a functional interface based on your [Analysis Definition](/api/analysis-definition).

| Option Type (`.a.yaml`) | Default UI Control |
| :--- | :--- |
| `Bool` | `CheckBox` |
| `List` | `ComboBox` |
| `Variable` | `TargetLayoutBox` containing a `VariableLabel` |
| `Variables` | `TargetLayoutBox` containing multiple `VariableLabel`s |
| `Integer` / `Number` | `TextBox` |
