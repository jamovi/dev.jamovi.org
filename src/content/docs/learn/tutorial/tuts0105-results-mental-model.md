---
layout: ../layouts/BaseLayout.astro
title: "The jamovi Results Model"
type: article
description: "Understand the hierarchical relationship between your R code and the jamovi results panel."
---

Before we dive into building complex tables, it's worth establishing a strong **Mental Model** of how jamovi handles results. In our first analysis, we used a simple "text" box, but jamovi's true power lies in its **Rich Results** system.

## 1. The Results Definition vs. The Content

Unlike traditional R scripts where you simply `print()` output to the console piecemeal, building a beautiful jamovi analysis is a structured, two-step process:

1. **The Results Definition (`.r.yaml`):** Think of this as the architectural blueprint for your output. This file defines exactly *what* result containers will appear (e.g., tables, plots, or HTML) and their rigid structure (like how many columns a table has, or the title of a plot).
2. **The Content (`.b.R`):** This is your R code where you perform the actual statistical calculations and then "pour" those numbers into those containers.

## 2. The Results Tree

To make this two-step process seamless, jamovi reads your `.r.yaml` results definition and automatically generates an R object called `self$results`. 

Think of `self$results` as a tree that perfectly mirrors your YAML file. If your definition looks like this:

```yaml
# .r.yaml
items:
  - name: myTable
    type: Table
    ...
  - name: myPlot
    type: Image
    ...
```

Then inside your `.b.R` logic file, those exact result containers are waiting for you, accessible by the very names you gave them in the results definition:

```r
# .b.R
self$results$myTable  # Accesses the table container
self$results$myPlot   # Accesses the plot container
```

You simply calculate your statistics, and then call functions like `self$results$myTable$setRow()` to fill them up.

**Next Step:** Now that you understand the results definition model, let's **[create a Rich Table](/tutorial/tuts0106-creating-rich-results)**!
