---
layout: ../layouts/BaseLayout.astro
title: "Summary & Next Steps"
description: "A comprehensive summary of everything covered in the jamovi module development tutorial series."
---

Congratulations! You've successfully walked through the foundations of jamovi module development. 

## What We've Covered

1. **Setup**: Installing `jmvtools` and linking it to jamovi.
2. **Structure**: Understanding the 5-file architecture of an analysis (`.a.yaml`, `.r.yaml`, `.u.yaml`, `.h.R`, `.b.R`).
3. **Definition**: Defining options and arguments in `.a.yaml`.
4. **Results**: Designing rich tables and interactive plots.
5. **Logic**: Implementing R code using R6 classes and handling user input.
6. **Debugging**: Using dev mode and stack traces to troubleshoot issues.
7. **Testing**: Writing automated tests with `testthat`.
8. **Distribution**: Sharing your work via side-loading or the jamovi library.

## Key Concepts Cheat Sheet

| File | Purpose | Edit? |
| :--- | :--- | :--- |
| `*.a.yaml` | Describe options & UI mapping | **Yes** |
| `*.r.yaml` | Describe results layout | **Yes** |
| `*.u.yaml` | Advanced UI customization | Sometimes |
| `*.b.R` | Core analysis logic (R code) | **Yes** |
| `*.h.R` | Auto-generated API | **No** |

## Next Steps

Now that you've mastered a basic t-test, you might want to explore:

- **Complex Model Building**: Handling multiple variables and interaction terms.
- **Dynamic Content**: Creating tables that change rows/columns based on user data.
- **Enhanced UI**: Using collapse boxes, complex layouts, and custom supplier filtering.

Check out the **[Intermediate Tutorial Series](/tutorial/tuts0201-dynamic-tables)** for more advanced topics!
