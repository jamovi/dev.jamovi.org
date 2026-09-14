---
layout: ../layouts/BaseLayout.astro
title: File Option
description: "Reference for the File option, letting users select one or more files from disk for an analysis to use."
type: article
---

The `File` option lets the user select one or more files from their computer for the analysis to read, such as a stimulus list, a custom lexicon, etc.

Available in jamovi 28.3 and newer. Declare this in your module's `0000.yaml` using `minApp`, so jamovi prevents installation on older versions that don't support it:

```yaml
minApp: 28.3.0
```

## Description

In the jamovi UI, a `File` option is represented by a **Browse…** button and a list of the file(s) currently selected. In the desktop app, the analysis reads the file directly from the path the user chose. In the cloud, the chosen file is uploaded into the user's session so the R process can read it.

Because uploaded (or otherwise session-local) files don't outlive the session, only the filename is kept when an analysis is saved to an `.omv` file. If the file is needed again after re-opening, the user is asked to re-select it.

## YAML Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | The unique name of the option. |
| `type` | string | Must be `File`. |
| `title` | string | The label displayed in the UI. |
| `hidden` | boolean | (optional) Hides the control from the UI. Defaults to `false`. |
| `multiple` | boolean | (optional) Allows more than one file to be selected. Defaults to `false`. |
| `extensions` | array | (optional) A list of file extensions (without the dot) used to filter the file browser, e.g. `[csv, txt]`. |
| `description` | string | (optional) A description of the option, shown to the user as help text. |

## R Implementation

In R, a `File` option is represented as a `list` with `path` and `filename` elements, or `NULL` if nothing has been selected. When `multiple` is `true`, the value is a `list` of such entries instead (an empty `list()` when nothing is selected).

`path` is the location of the file on disk, and `filename` is the original name of the file (which, particularly in the cloud, may differ from the name of the file at `path`). `path` is `NULL` when the file needs to be re-selected, such as after re-opening an analysis from an `.omv` file — but you don't need to check for this yourself: the option rejects automatically with an appropriate error before your `.b.R` code runs, so by the time you read the value, `path` is guaranteed to point to a file that exists.

## Examples

### 1. Define in YAML

```yaml
- name: lexicon
  type: File
  title: Lexicon
  extensions:
    - csv
    - txt
```

### 2. Implementation in R

```r
file <- self$options$lexicon

if ( ! is.null(file)) {
    data <- read.csv(file$path)

    # ...
}
```

With `multiple: true`, iterate over the list of files instead:

```r
for (file in self$options$lexicons) {
    data <- read.csv(file$path)

    # ...
}
```
