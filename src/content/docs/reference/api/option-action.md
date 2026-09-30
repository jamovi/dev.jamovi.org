---
layout: ../layouts/BaseLayout.astro
title: Action Option
description: "Documentation for the Action option, allowing analyses to trigger UI events like opening new datasets or opening files in their respective programs."
type: article
---

Actions allow an analysis to trigger specific events, such as opening a new dataset in a new jamovi window, or opening a file the analysis produced (a report, a spreadsheet, etc.) in another application.

The `open` action requires jamovi 2.7.12 or newer. The `openExternal` action requires jamovi 28.4 or newer; if you use it, declare this in your module's `0000.yaml` using `minApp`, so jamovi prevents installation on older versions that don't support it:

```yaml
minApp: 28.4.0
```

## Description

In the jamovi UI, an `Action` option is represented as a **Button**. When clicked, it triggers the specified action. Two actions are supported:

| Action | What happens |
|--------|--------------|
| `open` | Opens a dataset the analysis produced in a new jamovi window. |
| `openExternal` | Hands a file the analysis produced to the user. In the desktop app, the file is opened with whichever application the operating system associates with its extension (e.g. a `.docx` opens in Word). In a browser, the file is downloaded. |

## YAML Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | The unique name of the option. |
| `type` | string | Must be `Action`. |
| `title` | string | The label displayed on the button. |
| `action` | string | The type of action to perform: `open` or `openExternal`. |

## R Implementation

In R, an `Action` option is represented as a `logical` value. It is `TRUE` when the user has clicked the button, and `FALSE` otherwise.

Checking `self$options$name` tells you the button was clicked, but does not execute the action. To execute it, retrieve the Option object and call its `$perform()` method, passing a function. This function receives an `action` object, and returns a `list` describing the result. What the list must contain depends on the action.

If the function throws an error, the error message is shown to the user as a notification.

## Examples

### Opening a dataset (`open`)

#### 1. Define in YAML

```yaml
- name: open
  title: Open
  type: Action
  action: open
```

#### 2. Implementation in R

Return the data frame as `data`, and an optional `title` for the new window:

```r
if (self$options$open) {
    option <- self$options$option('open')

    if (is.null(option$perform))
        return()

    option$perform(function(action) {
        list(
            data  = ToothGrowth,
            title = 'Results from Action'
        )
    })
}
```

### Opening a file in another application (`openExternal`)

#### 1. Define in YAML

```yaml
- name: export
  title: Open in Word
  type: Action
  action: openExternal
```

#### 2. Implementation in R

Write the file to `action$params$fullPath` (a temporary path jamovi provides for you), and return the `filename` the user should see:

```r
if (self$options$export) {
    option <- self$options$option('export')

    if (is.null(option$perform))
        return()

    option$perform(function(action) {
        writeReport(action$params$fullPath)  # your own function
        list(
            filename = 'report.docx'
        )
    })
}
```

The result list takes the following properties:

| Property | Type | Description |
|----------|------|-------------|
| `filename` | string | **Required.** The name the user sees, e.g. as the title in Word or the name of the downloaded file. Its extension tells the operating system what kind of file it is, so make sure it's correct. |
| `path` | string | (optional) The location of the file, if you wrote it somewhere other than `action$params$fullPath`. The file is moved from here, so don't point it at a file you want to keep. |
| `title` | string | (optional) Defaults to `filename`. |

#### Things to be aware of

- **Supported file types:** For security, the desktop app only opens common document, data, and image formats directly: `pdf`, `docx`, `doc`, `odt`, `rtf`, `txt`, `md`, `xlsx`, `xls`, `ods`, `csv`, `tsv`, `json`, `xml`, `sav`, `omv`, `pptx`, `ppt`, `odp`, `png`, `jpg`, `jpeg`, `gif`, `svg`, `tif`, `tiff`, `bmp`, `webp`, and `zip`. Any other file is shown in the file manager (Finder, Explorer, etc.) instead, and the user can decide what to do with it. The same happens if no application is associated with the extension.