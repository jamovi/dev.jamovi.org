---
layout: ../layouts/BaseLayout.astro
title: Output Option
description: "Reference for the Output option, which lets a jamovi analysis write computed values back to the spreadsheet as a new column."
type: article
---

The `Output` option declares that an analysis can save a computed value (e.g. residuals, predicted values) back to the jamovi spreadsheet as a new column. Declaring it automatically adds a checkbox inside a **Save** section in the analysis UI — no additional UI YAML is required. Unlike most options, it is a two-part construct: the option itself is declared in `.a.yaml` to capture the user's intent, while the companion Output results element — defined in `.r.yaml` — specifies the column metadata and the R logic that writes the values.

> **Note:** This option only captures user intent (whether saving is enabled). The column metadata and the R logic that populates it are defined in the companion Output results element in `.r.yaml`, not here in `.a.yaml`. See the [Output results element](/api/output) reference for details.

## YAML Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | The unique name of the option. Used in R as `self$options$name`. |
| `type` | string | Must be `Output`. |
| `title` | string | The label shown next to the checkbox in the Save section of the UI. |

The `Output` option has no `default` property; the checkbox is always unchecked by default.

## Examples

### 1. Define in `.a.yaml`

```yaml
- name: residsOV
  type: Output
  title: Residuals
```

### 2. Check in R

```r
if (self$options$residsOV) {
    # User has enabled saving — populate the Output results element
}
```

See the [Output results element](/api/output) reference for how to define the column and write values to it from R.
