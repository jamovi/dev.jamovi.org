---
layout: ../layouts/BaseLayout.astro
title: "TermLabel"
output: html_document
---
The `TermLabel` control is used to represent interaction terms (e.g., `A * B`) within a `TargetLayoutBox`. It is typically used in analyses with complex models like ANOVA or Regression.

## Properties

| Property | Description |
| :--- | :--- |
| `name` | The name of the option it binds to. |

## Example

```yaml
- type: TermLabel
  name: terms
```

