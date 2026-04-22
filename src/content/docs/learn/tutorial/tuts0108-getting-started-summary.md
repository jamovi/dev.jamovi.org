---
layout: ../layouts/BaseLayout.astro
title: "Summary & Next Steps"
description: "Review what you've learned in the Getting Started series and discover your next steps for building jamovi modules."
---

Congratulations! You have successfully built a fully functional Independent Samples T-Test module from scratch. 

## What You've Achieved

Throughout this Getting Started series, you learned the core mental model of jamovi module development:

1. **The 5-File Architecture:** You used `jmvtools` to scaffold the essential files: `.a.yaml` (analysis definition), `.r.yaml` (results definition), `.u.yaml` (UI definition), `.h.R` (auto-generated header), and `.b.R` (analysis implementation).
2. **Options (`.a.yaml`):** You defined the inputs your analysis needs, such as variables and checkboxes.
3. **Input Checks:** You used "early returns" to keep the results panel clean and prevent errors before variables are assigned.
4. **Results Definition (`.r.yaml`):** You defined the result containers that will appear in the UI: an APA-formatted Table and an Image placeholder.
5. **The State/Render Model:** You learned how jamovi handles dynamic content by separating the heavy calculations (`.run()`) from the fast drawing logic (`.plot()`).
6. **R Logic (`.b.R`):** You wrote an R6 class that takes user input (`self$options`), performs the `t.test()`, and populates the results (`self$results`).

## Where to Go Next

Now that you have the basics down, you can choose your own adventure based on your goals.

### 1. The Intermediate Series (Deep Dive)
If you want to build more complex analyses, the **[Intermediate Series](/tutorial/tuts0200-analysis-lifecycle)** is your next logical step. You will learn:
- **Dynamic Tables:** Create tables that add rows or columns automatically based on user input.
- **Handling Data:** Manage missing values and safely work with jamovi datasets.

### 2. Advanced Plotting
If your analysis relies heavily on visuals, jump into the **[Plotting section](/tutorial/tuts0301-image-state-performance)**. You will learn how to optimize plots for large datasets, apply beautiful jamovi color themes, and make your images responsive.

### 3. UI Design
Want to make your module's interface look spectacular? The **[User Interface section](/ui/basic-design)** covers everything from custom layouts and collapse boxes to variable suppliers and advanced controls.

### 4. The API Reference (Technical Specifications)
Do you prefer to learn by reading technical specifications instead of following guided tutorials? If you are comfortable diving straight into the deep end, head over to the **Reference API** section. It contains comprehensive documentation on:
- **[API (yaml)](/api/module-definition):** Every property and setting available in `.a.yaml` and `.r.yaml`.
- **[API (R)](/api/results-elements):** The classes and methods available in the `jmvcore` R package for interacting with tables, images, and other result objects.
