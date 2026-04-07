---
layout: ../layouts/BaseLayout.astro
title: "jamovi Library"
---

Having developed a jamovi module, one of the best ways to publicise it and distribute it is through the jamovi Library. The jamovi Library is available from within jamovi, and is a place where people can browse, search, discover, and install your module.

Additionally, listing your module in the jamovi library means that the jamovi project takes care of building your module for all the different platforms (macOS arm64, macOS x64, linux arm64, linux x64, windows x64, and soon, windows on arm64), and building it for the newer versions of jamovi as they come out.

### Licensing

One requirement of modules being listed in the jamovi Library is that they comply with any GPL licensing requirements. For example, if a module depends on and ships with an R package which is licensed under the GPL, then that constitutes a "combined work" with that package, and the module must be released under the GPL as well.

The easiest way to assess whether your module needs to be released under the GPL is to browse through the R packages installed in your modules `build` folder. Work your way through each of these R packages, and see if any of them are licensed under a "copyleft" or "less permissive" license, such as the GPL2 or the GPL3.

As an example, the `scatr` module ships with the R packages `lazyeval` and `ggstance`. Both of these packages are licensed under the GPL, and `scatr` forms a "combined work" with them. The GPL license gives us permission to make a "combined work" with these GPL packages, however in return our modules must also be licensed under the GPL.
