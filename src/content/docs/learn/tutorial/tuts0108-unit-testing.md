---
layout: ../layouts/BaseLayout.astro
title: "Unit Testing your Analysis"
description: "Ensure your jamovi analysis is robust and accurate by writing automated tests using testthat."
---

As your analysis grows in complexity, manual testing in the jamovi UI becomes slow and error-prone. To ensure your calculations remain accurate, you should use **automated unit testing**.

Since jamovi modules are standard R packages, we can use the popular `testthat` framework.

## 1. Setup Testing Infrastructure

In your R console, with your working directory set to your module root (e.g., `SuperAwesome/`), run:

```r
usethis::use_testthat()
```

This creates a `tests/testthat/` directory where your tests will live.

## 2. Understanding What to Test

When you use `jmvtools`, it generates an R function for your analysis (e.g., `ttest()`). This function is what you should test. It runs your analysis logic and returns a results object.

## 3. Writing Your First Test

Create a new file in `tests/testthat/test-ttest.R`:

```r
test_that("ttest produces correct p-values", {
    # 1. Prepare sample data
    df <- data.frame(
        dep = c(1, 2, 3, 4, 5, 6),
        group = c('A', 'A', 'A', 'B', 'B', 'B')
    )
    
    # 2. Run your analysis function
    results <- SuperAwesome::ttest(
        data = df,
        dep = "dep",
        group = "group"
    )
    
    # 3. Extract the table as a Data Frame
    # jamovi tables have an 'asDF' method for easy testing
    mainTable <- results$ttest$asDF
    
    # 4. Assertions
    expect_equal(nrow(mainTable), 1)
    expect_true("p" %in% colnames(mainTable))
    
    # Check a specific value (e.g., p-value should be ~0.08)
    expect_equal(mainTable$p, 0.08, tolerance = 0.01)
})
```

## 4. Running Your Tests

You can run your tests directly from RStudio using the **"Test"** button in the Build pane, or by running:

```r
devtools::test()
```

**Next Step:** Once your analysis is tested and robust, check out some **[Additional Notes](/tutorial/tuts0110-additional-notes)** on advanced module development.
