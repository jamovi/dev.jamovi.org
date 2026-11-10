---
layout: ../layouts/BaseLayout.astro
title: Color Option
description: "Reference for the Color option, letting users pick a colour for an analysis to use, such as the fill of a plot."
type: article
---

The `Color` option lets the user pick a colour for the analysis to use, such as the fill of a plot or the colour of a highlighted line.

Available in jamovi 28.14 and newer. Declare this in your module's `0000.yaml` using `minApp`, so jamovi prevents installation on older versions that don't support it:

```yaml
minApp: 28.14.0
```

Compiling a module that uses it requires jmvtools 28.17 or newer; older versions reject `Color` as an unknown option type.

## Description

In the jamovi UI, a `Color` option is represented by a **ColorPicker**: a colour swatch, which opens the system's colour picker, alongside the colour's hex code. The user can either pick a colour from the swatch, or type into the hex code box.

The hex code box accepts any CSS colour — `#3e6da9`, `3e6da9`, `#36a`, or a name like `steelblue` — and converts it to a `#rrggbb` hex code. Colours with transparency aren't supported. While the user drags through the colour picker, the analysis isn't rerun; it's rerun once they've settled on a colour.

## YAML Properties

| Property | Type | Description |
|----------|------|-------------|
| `name` | string | The unique name of the option. |
| `type` | string | Must be `Color`. |
| `title` | string | The label displayed in the UI. |
| `default` | string | (optional) The default colour, as a `#rrggbb` hex code, e.g. `'#3e6da9'`. Defaults to `'#000000'` (black). |
| `hidden` | boolean | (optional) Hides the control from the UI. Defaults to `false`. |
| `description` | string | (optional) A description of the option, shown to the user as help text. |

The `default` must be written as a six-digit hex code with a leading `#`. Because `#` begins a comment in YAML, put it in quotes.

## R Implementation

In R, a `Color` option is represented as a character string holding a lowercase `#rrggbb` hex code, which can be passed directly to R's plotting functions.

When the analysis is called from R, rather than from the jamovi UI, the argument also accepts any colour R recognises (e.g. `'steelblue'`), as well as `'#rgb'` and hex codes without the leading `#`; these are converted to `#rrggbb` as well. A value that isn't a colour, or one with transparency, is rejected with an error.

## Examples

### 1. Define in YAML

```yaml
- name: fill
  type: Color
  title: Fill colour
  default: '#3e6da9'
```

### 2. Implementation in R

Pass the value straight to the plotting function:

```r
.plot = function(image, ggtheme, ...) {

    plotData <- image$state

    if (is.null(plotData))
        return(FALSE)

    p <- ggplot(plotData, aes(x = value)) +
        geom_histogram(fill = self$options$fill) +
        ggtheme

    return(p)
}
```

Called from R, the colour can be given in any form R understands:

```r
mymodule::myanalysis(data, var='len', fill='steelblue')
```
