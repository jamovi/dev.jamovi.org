---
layout: ../layouts/BaseLayout.astro
title: Handling Data
description: "Master the Dual Nature of jamovi variables and learn how to correctly convert data for your R analyses."
---

When you access data in jamovi via `self$data`, you aren't just getting a standard R data frame. jamovi uses a sophisticated system to ensure data integrity while remaining flexible for the user.

## 1. The "Dual Nature" of Variables

In jamovi, variables have a **Dual Nature**: they exist as both **Factors** (labels) and **Numeric** values simultaneously.

There are four primary variable types:

| Icon | Type | R Representation |
| :--- | :--- | :--- |
| <img src="/assets/variable-nominal-text.svg" width="16px"> | **Nominal Text** | Always a Factor |
| <img src="/assets/variable-nominal.svg" width="16px"> | **Nominal** | Factor (with underlying Numeric attributes) |
| <img src="/assets/variable-ordinal.svg" width="16px"> | **Ordinal** | Factor (with underlying Numeric attributes) |
| <img src="/assets/variable-continuous.svg" width="16px"> | **Continuous** | Always Numeric |

### Why this matters
Users often want to treat the same variable differently depending on the context. For example, a "Likert Scale" (Ordinal) might be used as a **Grouping Factor** in a t-test, but as a **Numeric Score** when calculating a mean.

---

## 2. Best Practice: Explicit Conversion

By default, jamovi provides `Nominal` and `Ordinal` variables as **Factors**. If you need to use them as numbers, you must explicitly convert them.

> [!IMPORTANT]
> **The Golden Rule of Conversion**
> Always perform your data conversions **early** in your `.run()` function, and always **before** using functions like `na.omit()` or `subset()`. These base R functions often strip away the special attributes jamovi uses to track numeric values.

### Implementation Example (ANCOVA)

If you are building an ANCOVA that requires a numeric dependent variable, factors for your groups, and numeric covariates, follow these steps:

```r
.run = function() {
    
    # 1. READ option values into short names
    dep  <- self$options$dep
    facs <- self$options$factors
    covs <- self$options$covs
    
    # 2. GET the raw data
    data <- self$data
    
    # 3. CONVERT to the required types explicitly
    
    # Ensure Dependent is numeric
    data[[dep]] <- jmvcore::toNumeric(data[[dep]])
    
    # Ensure Factors are factors
    for (fac in facs)
        data[[fac]] <- as.factor(data[[fac]])
        
    # Ensure Covariates are numeric
    for (cov in covs)
        data[[cov]] <- jmvcore::toNumeric(data[[cov]])
    
    # 4. CLEAN the data (now that attributes aren't needed)
    data <- na.omit(data)
    
    # 5. PERFORM calculations...
}
```

### Why use `jmvcore::toNumeric()`?
- **Safe:** If the variable is already numeric, it does nothing.
- **Smart:** It correctly extracts the underlying numeric values from jamovi's "Dual Nature" variables, where standard `as.numeric(as.character(x))` might fail or be inefficient.

**Next Step:** Now that you can handle data safely, let's look at how to manage [complex analysis state](/tutorial/tuts0203-state).
