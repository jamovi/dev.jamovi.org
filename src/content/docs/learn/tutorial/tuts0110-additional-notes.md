---
layout: ../layouts/BaseLayout.astro
title: "Additional Notes"
description: "Advanced tips on dependency management, performance optimization, and R namespace best practices."
---

To wrap up this tutorial series, here are some important technical details regarding dependency management and performance optimization in jamovi modules.

## 1. Automated Dependency Management

When you run `jmvtools::install()`, jamovi doesn't just build your R code—it also identifies, downloads, and bundles every dependency listed in your `DESCRIPTION` file.

### Why bundle dependencies?
*   **Zero-Install for Users:** Users don't need to have R or any specific R packages installed on their system to use your module.
*   **Reproducibility:** Your analysis will produce the same results today as it will five years from now, regardless of changes to CRAN.

## 2. Optimizing Performance with Namespaces

While it's common in standard R packages to use `import()` in the `NAMESPACE` file, we recommend using the `::` operator instead (e.g., `stats::t.test`).

### Benefits of this approach:
1.  **Lazy Loading:** Dependencies are only loaded into memory at the exact moment they are needed.
2.  **Reduced RAM:** Only the necessary parts of a package are loaded, keeping jamovi's memory footprint small.

## 3. Understanding Your Tools

| Tool | Primary Role | Used For... |
| :--- | :--- | :--- |
| `jmvtools` | **jamovi Bridge** | Creating modules, adding analyses, and installing into the jamovi application. |
| `devtools` | **R Development** | Standard R package tasks like testing (`test()`) and installing into your R console. |

**Next Step:** Your module is now ready for the world! Let's learn how to **[Distribute your Module](/tutorial/tuts0109-distributing-modules)**.
