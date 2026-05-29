---
name: computed-columns-design
description: Design spec for documenting the jamovi Output element — writing computed values back to the spreadsheet
metadata:
  type: project
---

# Computed Columns Documentation — Design Spec

## Overview

jamovi allows analyses to write computed values (e.g. residuals, predicted values, factor scores) back to the user's spreadsheet as new columns, using a special `Output` results element type. This feature is currently completely undocumented. This spec covers adding a tutorial page and a reference page.

---

## Files to Create

### `src/content/docs/learn/tutorial/tuts0202a-computed-columns.md`

A new tutorial page in the Intermediate series, inserted as item 5 (between "Handling Data" and "State").

**URL:** `/tutorial/tuts0202a-computed-columns`

**Sections:**
1. **What is a Computed Column?** — Concept intro: an Output is a new column written back to the user's spreadsheet from values the analysis computes (e.g. residuals, predicted values, factor scores).
2. **The Three-File Pattern** — Overview of wiring: `.a.yaml` creates the UI checkbox, `.r.yaml` defines column metadata, `.b.R` populates values.
3. **Step-by-step example** — Worked example adding a single `residuals` output column. Shows YAML and R code for all three files.
4. **Row numbers matter** — Explains `setRowNums()`: must pass original row indices (not `1:n`) so jamovi maps values correctly when rows are filtered/excluded.
5. **The `isNotFilled()` guard** — Why to check before computing: jamovi's caching means the output may already be current.
6. **Next steps** — Link forward to State.

**Scope:** Single-output case only. Multi-output (index/key pattern) is out of scope for this tutorial; real-world reference is linreg in jmv.

---

### `src/content/docs/reference/api/output.md`

A new reference page in the Results API (R) section, after "Notice".

**Sections:**
1. **Overview** — What the Output element is; how it differs from other results elements (writes to spreadsheet, not results panel).
2. **YAML properties table** — `name`, `type`, `title`, `varTitle`, `varDescription`, `measureType` (continuous/nominal/ordinal/id), `clearWith`, `items`.
3. **R methods table** — `setRowNums(rowNums)`, `setValues(values, index, key)`, `isFilled(key)` / `isNotFilled(key)`, `setTitle(title, index, key)`, `setDescription(desc, index, key)`.
4. **Minimal example** — Concise `.r.yaml` + `.b.R` snippet showing the complete pattern.

---

## Files to Update

### `src/data/menu.ts`

- Insert new tutorial entry after "4 - Handling Data":
  ```
  { text: '5 - Computed Columns', href: '/tutorial/tuts0202a-computed-columns' }
  ```
- Update display numbers: State `5 → 6`, Translation `6 → 7` (URL slugs unchanged).
- Add Output to Results API (R) section after Notice:
  ```
  { text: 'Output', href: '/api/output' }
  ```

### `src/content/docs/reference/api/results-definition.md`

- Add `Output` row to the element types table:
  ```
  | [**Output**](/api/output) | A computed column written back to the spreadsheet. |
  ```

---

## Key Technical Details (from jmvcore + jmv research)

### .a.yaml — option declaration
```yaml
- name: residsOV
  title: Residuals
  type: Output
```
Declaring `type: Output` in the analysis options creates a checkbox in a "Save" section of the UI automatically. No UI YAML needed.

### .r.yaml — result definition
```yaml
- name: residsOV
  title: Residuals
  type: Output
  varTitle: Residuals
  varDescription: Residuals from the analysis
  measureType: continuous
  clearWith:
    - dep
    - factors
```

### .b.R — population pattern
```r
.populateOutputs = function() {
    if (self$options$residsOV && self$results$residsOV$isNotFilled()) {
        self$results$residsOV$setRowNums(rownames(self$finalData))
        self$results$residsOV$setValues(self$residuals)
    }
}
```
Call `.populateOutputs()` from `.run()` after computing results.

**Critical:** `setRowNums()` must receive the original row names/indices from `self$data` (or the cleaned subset's `rownames()`), not a simple `1:n` sequence. This ensures correct mapping when the user has excluded or filtered rows.

---

## Decisions & Rationale

- **Placement:** Intermediate series item 5, between "Handling Data" and "State". The data-in (tuts0202) / data-out (tuts0202a) pairing is a clean conceptual arc.
- **URL strategy:** `tuts0202a` follows the existing `tuts0201a` precedent. Existing URLs for State and Translation are not changed.
- **Scope:** Single-output only in the tutorial. The multi-output (index/key) pattern is documented only in the reference page's properties table.
- **Format:** Both tutorial + reference, because the tutorial teaches the concept and the reference page gives the full API surface alongside Table, Image, etc.
