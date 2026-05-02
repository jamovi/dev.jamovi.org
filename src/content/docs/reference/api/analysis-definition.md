---
layout: ../layouts/BaseLayout.astro
title: "Analysis Definition"
---

The analysis definition is a YAML file in the `jamovi/` directory with the extension `.a.yaml`. It describes the analysis metadata, how it appears in the jamovi menus, and the options (parameters) it requires.

## Header

The header section of the `.a.yaml` file defines the analysis identity and its placement in the UI. The file must be named to match the name of the analysis, but converted to lowercase (e.g., `ttestis.a.yaml`).

```yaml
---
name:  TTestIS
title: Independent Samples T-Test
menuGroup: T-Tests
version: '1.0.0'
jas: '1.0'

options:
    - name: ...
      type: ...
    - name: ...
      type: ...
```

property     | function
-------------|-----------------------------------------
name         | the name of the analysis. camel case. underscores are discouraged, dots are verboten.
title        | the title of the analysis in title case.
version      | the version of the analysis. should make use of [semantic versioning](https://semver.org/).
jas          | the `jamovi analysis spec`. should be '1.0'. must be wrapped in quotes to prevent it being interpretted as a number.
menuGroup    | the name of the top level menu where the analysis should appear.
menuSubgroup | (optional) places the menu entry under a subheading.
menuTitle    | (optional) the title to be used in the menu. if unspecified, then the `title` is used.
menuSubtitle | (optional) additional text placed to the lower right of the menu entry.
options      | an array of options that the analysis requires. these are described in greater detail below.

## Options

Options represent the parameters that an analysis requires in order to run. When a jamovi module is used as an R package, they represent the arguments to the function. When used in jamovi itself, they represent the user interface (UI) options presented to the user.

Each option has a `name`, a `type`, and some additional properties. When a value is specified by the user, the option checks the value and produces an error if the value is not suitable.

### Option Types

The following option types are available in jamovi:

| Type | Description |
| :--- | :--- |
| [**Data**](/api/option-data) | The primary dataset for the analysis. |
| [**Bool**](/api/option-bool) | A true/false toggle (UI: Checkbox). |
| [**Integer**](/api/option-integer) | A whole number input. |
| [**Number**](/api/option-number) | A decimal number input. |
| [**List**](/api/option-list) | A selection from a predefined set of values. |
| [**Variable**](/api/option-variable) | A single variable selection from the dataset. |
| [**Variables**](/api/option-variables) | Multiple variable selections from the dataset. |
| [**Terms**](/api/option-terms) | Model terms, including main effects and interactions. |
| [**Group**](/api/option-group) | A container for organizing other options. |
| [**Action**](/api/option-action) | A button that triggers a specific task. |

For a detailed look at how to interact with these options in your R code, see the [Options API (R)](/api/options-api) documentation.
