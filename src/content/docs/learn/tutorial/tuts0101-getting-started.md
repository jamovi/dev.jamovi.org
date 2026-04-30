---
layout: ../layouts/BaseLayout.astro
title: "Getting Started"
description: "Learn how to set up your environment and install your first jamovi module using jmvtools."
---

> [!IMPORTANT]
> ### Prerequisites
> 
> To follow this tutorial and build the module, you will need:
> - **jamovi**: Make sure you have the [latest version of jamovi](https://www.jamovi.org/) installed.
> - **R**: You need [R installed](https://cloud.r-project.org/) on your system.
> - **R knowledge**: Analyses in jamovi are written in the **R programming language**. This tutorial assumes you have a basic understanding of R logic.
> - **An IDE**: We highly recommend using an IDE such as [RStudio](https://posit.co/download/rstudio-desktop) or [VS Code](https://code.visualstudio.com/) for writing your R code.


## What Are We Building?

Throughout this "Getting Started" series, you are going to build a fully functional **Independent Samples T-Test** module from scratch. By the end of the next few pages, you will have created a beautiful, interactive analysis that includes a responsive UI, robust data handling, an APA-formatted table, and dynamic plots:

![Final T-Test Module Result](@assets/learn/tutorial/getting-started-final.png)

## 1. Install `jmvtools`

The `jmvtools` package provides the essential tools for building and debugging jamovi modules. You can find the source code on the [jmvtools GitHub page](https://github.com/jamovi/jmvtools). 

To install it, run the following command in your R console. Note that we are using the `repos` argument to tell R to look in the official **jamovi repository** (our private server for jamovi-specific packages) in addition to CRAN:

```r
# slow internet? you'll need to increase the R download timeout
option(timeout=600)  # 10 minutes

install.packages('jmvtools', repos=c('https://repo.jamovi.org', 'https://cran.r-project.org'))
```

## 2. Connect to jamovi

Once installed, verify that `jmvtools` can locate your jamovi application. Run:

```r
jmvtools::check()
```

`jmvtools` automatically searches standard installation locations such as:
*   **macOS:** `/Applications`
*   **Linux:** `/usr/lib/jamovi`
*   **Windows:** `C:\Program Files`

> [!NOTE]
> ### Manually specifying the path
> If `jmvtools` cannot find jamovi, you can manually point to the installation directory:
>
> ```r
> # Example for a custom path
> jmvtools::check(home='C:\\Program Files\\jamovi X.X.X.X')
> ```
>
> To save this path for your current R session, use:
> ```r
> options(jamovi_home='C:\\Program Files\\jamovi X.X.X.X')
> ```

## 3. Install an Example Module

Now that your environment is ready, let's test it by installing the [Base R](https://github.com/jamovi/jmvbaseR) module. 

1.  **Download** the source code: [Download .zip](https://codeload.github.com/jamovi/jmvbaseR/zip/refs/heads/master)
2.  **Unzip** the directory and open the `jmvbaseR.Rproj` file in RStudio.
3.  **Start jamovi** (ensure it's running before the next step).
4.  **Install** the module by running:

```r
jmvtools::install()
```

### What happens next?
Switch to your open jamovi window. You should see a new **'Base R'** menu on the ribbon. 

![Base R menu in jamovi | 551 | no-border](@assets/learn/tutorial/getting-started-baser.png)

The appearance of this menu proves that `jmvtools` successfully compiled the module's source code and injected it directly into your running jamovi instance. 

With your environment perfectly configured, we are ready to move on to the fun part. Let's create a brand new module from scratch and **[build your first analysis](/tutorial/tuts0102-building-your-first-analysis)**.
