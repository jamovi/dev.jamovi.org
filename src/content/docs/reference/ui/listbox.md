---
layout: ../layouts/BaseLayout.astro
title: "ListBox"
type: article
description: "Technical reference for the jamovi UI ListBox control, used for managing lists of items such as variables or terms."
output: html_document
---

The `ListBox` control is used to display a list of items that the user can interact with. It is typically bound to a `List` or `NMXList` option type.

## Properties

| Property | Description |
| :--- | :--- |
| `name` | The name of the control. |
| `label` | The label displayed above the list box. |
| `fullWidth` | (Optional) If `true`, the control takes up the full width of the panel. |

## Supported Option Types

- `List`
- `NMXList`

## Example

```yaml
- type: ListBox
  name: variables
  label: Select variables
```

