---
layout: ../layouts/BaseLayout.astro
title: API Updates
type: article
description: "Stay informed about the latest changes, ecosystem improvements, and API updates for jamovi developers."
---

Welcome to the jamovi developer updates page. Here we track important changes to the jamovi API and ecosystem improvements.

## December 2025

### 🖼️ Image Sizing (31-12-2025)
The 2.7.16 version of jamovi introduces **image sizing** support for R-based modules. This allow developers to specify or constrain the dimensions of plot outputs more precisely.

---

## November 2025

### ⚡ New Analysis Action System (11-11-2025)
The 2.7.12 version of jamovi introduces the new **analysis action system**, providing a more robust way to handle user interactions and dynamic result updates.

---

## March 2024

### 🚀 jamovi 2.5 Series (08-03-2024)
The 2.5 series of jamovi is out. This updates the **R version to 4.3.2**, and moves the snapshot forward to 2024-01-09.

**Key Highlights:**
- **ARM / Apple Silicon Support**: Improved support for computers using ARM CPUs such as Chromebooks and the new "Apple Silicon" Macs. 
- **Architecture Specifics**: Note that modules are (typically) not portable between operating systems or architectures, so separate modules will need to be built for each.

**Update dev tools:**
You’ll need to update your `jmvtools` to build against the 2.5 series:

```r
install.packages('jmvtools', repos=c('https://repo.jamovi.org', 'https://cran.r-project.org'))
```

---

## Old News & Historical Changes

### Advanced UI Customisation (08-07-2019)
We’ve refined the advanced UI customization in jamovi 1.0.4 and newer. This is not backwards compatible with older 0.x versions.

### Analysis State (09-06-2017)
We’ve added a new document to our tutorial series describing how jamovi analyses can use **state**. State is used with longer running analyses, and allows the analysis to re-use results that were calculated previously, leading to much faster performance.

### jamovi 0.7.3 Dev Tools (20-04-2017)
Significant improvements to the development workflow:
- **Dependency Resolution**: Isolated system libraries from `jmvtools` for more reliable builds.
- **UI Definition (`.u.yaml`)**: The `.u.yaml` and `.a.yaml` files now work together. Labels and properties are now pulled directly from the analysis definition, reducing redundancy.
- **Compiler Modes**: Introduced `aggressive` (default) and `tame` modes for UI generation.

### Dev Mode & Debugging (02-04-2017)
jamovi 0.7.2.7 adds **dev mode**, providing a stack trace when an analysis errors. Read more in [Debugging an Analysis](/tutorial/tuts0204-debugging-an-analysis).
