---
layout: ../layouts/BaseLayout.astro
title: "Distributing Modules"
description: "Share your jamovi module with others by side-loading .jmo files or submitting to the jamovi library."
---

Once your module is working as expected, it's time to share it with the world. There are two primary ways to distribute a jamovi module: **Side-loading** (for testing) and the **jamovi library** (for public release).

## 1. Side-loading via `.jmo` files

Every time you run `jmvtools::install()`, it produces a file with the `.jmo` extension in your module's root directory (e.g., `SuperAwesome.jmo`).

This single file **is** your module. It contains all the R code, YAML definitions, and metadata needed to run in jamovi.

### How to Side-load:
1.  Send the `.jmo` file to your colleagues or testers.
2.  In jamovi, open the **jamovi library** (the "plus" icon in the top-right corner).
3.  Select the **Side-load** tab.
4.  Choose the `.jmo` file to install it.

The module will be installed locally and appear in your ribbon menu just as if it were from the store.

## 2. Submitting to the jamovi library

To reach the entire jamovi community, you can submit your module to the official **jamovi library**. This makes your module browseable, searchable, and easy to install for any jamovi user.

### ⚠️ Platform Compatibility
Before you share your `.jmo` file, it is important to understand that **a `.jmo` file only works on the operating system and architecture it was built on.** 

For example, a file built on an Intel Mac will not work on a Windows machine or an ARM-based Mac. This is why you should not distribute `.jmo` files directly to the public.

**The Solution:** When you submit your module to the jamovi library, we build it for all supported platforms (Solid and Current versions across Windows, macOS, and Linux). This ensures that every user gets a version that works perfectly on their system.

### Submission Checklist:
-   **Documentation:** Ensure your analyses have clear titles and descriptions.
-   **Stability:** Verify that your module doesn't crash on empty datasets (using [Input Checks](/tutorial/tuts0104-input-checks)).
-   **Metadata:** Check your `DESCRIPTION` file for a summary and author info.
-   **Clean Repository:** Do **not** commit **build artifacts** (files generated during the build process, like `build/`, `dist/`, or `.jmo` files) to your Git repository. Use a `.gitignore` file to keep your source code clean:

```text
# .gitignore
build/
dist/
*.jmo
```

### How to Submit:
If you are satisfied that your module is ready for broader distribution, please send an email to the jamovi team at **[contact@jamovi.org](mailto:contact@jamovi.org)**. 

**Always provide a link to your source code** (e.g., a GitHub repository). This allows us to perform the multi-platform builds mentioned above. You may also attach the `.jmo` file for initial testing.

## 3. Versioning and Updates

As you continue to improve your module, remember to update the version number in `0000.yaml` and the `DESCRIPTION` file. jamovi uses these version numbers to notify users when an update is available in the library.

**Next Step:** You've completed the core tutorial series! For some final technical tips, check out the **[Additional Notes](/tutorial/tuts0111-additional-notes)**.
