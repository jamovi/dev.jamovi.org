---
layout: ../layouts/BaseLayout.astro
title: "Results Definition"
description: "Detailed reference for the jamovi results definition (.r.yaml), defining the structure of analysis output."
type: article
---

The results definition is a YAML file in the `jamovi/` directory with the extension `.r.yaml`. It describes the structure and organization of the results produced by your analysis.

## Header

The header section of the `.r.yaml` file defines the identity of the results output. The file must be named to match the name of the analysis, but converted to lowercase (e.g., `ttest.r.yaml`).

```yaml
---
name:  ttest
title: Independent Samples T-Test
jrs: '1.0'

items:
    - name: ...
      type: ...
```

| Property | Description |
| :--- | :--- |
| `name` | The internal name of the analysis. Must correspond to the filename. |
| `title` | The title displayed at the top of the jamovi results panel. |
| `jrs` | The jamovi results spec version (typically `'1.0'`). Must be wrapped in quotes. |
| `items` | An array of results elements that make up the results tree. |

## Results Elements

The `items` property contains a collection of results elements. Each element type is designed for a specific kind of output.

### Element Types

| Type | Description |
| :--- | :--- |
| [**Table**](/api/table) | Structured tabular data with columns and rows. |
| [**Image**](/api/image) | Plots and other graphical output. |
| [**Group**](/api/group) | A container for organizing other elements into sections. |
| [**Array**](/api/array) | A dynamic container for repeating elements (e.g., a table per factor level). |
| [**Notice**](/api/notice) | Informational messages, warnings, or errors. |
| [**Output**](/api/output) | An output variable written back to the spreadsheet. |
| [**Preformatted**](/api/preformatted) | Raw, monospaced text output. |
| [**Html**](/api/html) | Custom, rich HTML content. |

## Common Element Properties

All results elements share a set of common properties that can be configured in the YAML:

| Property | Description |
| :--- | :--- |
| `name` | The internal name used to access the element in R (e.g., `self$results$name`). |
| `type` | The type of results element (see table above). |
| `title` | The display title for the element in the results panel. |
| `visible` | (Optional) Whether the element is visible by default. Can be a boolean or a data-binding to an option. Defaults to `true`. |
| `clearWith` | (Optional) A list of option names. The element will be cleared/reset when any of these options change. Defaults to `*` (all options). |

For a detailed look at how to interact with these elements in your R code, see the [Results API (R)](/api/results-elements) documentation.
