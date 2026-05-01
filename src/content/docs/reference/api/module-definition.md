---
layout: ../layouts/BaseLayout.astro
title: "Module Definition"
---

The `0000.yaml` file is the master descriptor for a jamovi module. It is located in the `jamovi/` directory of your module's source tree and defines the metadata that jamovi uses to identify and display your module.

## Properties

| Property | Description |
| :--- | :--- |
| `name` | The internal name of the module (no spaces). |
| `title` | The display title of the module as it appears in the jamovi library. |
| `version` | The version of the module (semantic versioning, e.g., `1.0.0`). |
| `jms` | The jamovi module spec version (typically `'1.0'`). |
| `authors` | A list of authors of the module. |
| `description` | A short description of what the module does. |

## Example

```yaml
---
name: SuperAwesome
title: Super Awesome Module
version: 1.0.0
jms: '1.0'
authors:
  - Jonathon Love
description: >
  A module that does super awesome things, including t-tests and plots.
```

The `0000.yaml` file is essential for your module to be recognized by jamovi. Without it, the module will not load correctly.
