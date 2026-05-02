---
layout: ../layouts/BaseLayout.astro
title: "VariableLabel"
type: article
description: "Technical reference for the jamovi UI VariableLabel control, used for displaying variable names with their respective icons."
output: html_document
---
The `VariableLabel` control is used to represent a single variable within a `TargetLayoutBox`. It provides the visual representation of a "dropped" variable.

## Properties

| Property | Description |
| :--- | :--- |
| `name` | The name of the option it binds to. |
| `label` | (Optional) The title of the variable (usually automatically handled). |

## Example

```yaml
- type: VariableLabel
  name: dep
```

