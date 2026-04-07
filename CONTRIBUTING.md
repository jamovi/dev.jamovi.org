# Contributing to dev.jamovi.org

This guide contains the mandates and standards for building and maintaining the jamovi developer documentation. These rules apply to both human developers and AI assistants.

## 1. Development Workflow

To ensure high-quality documentation and a stable codebase, all contributors must follow this workflow:

### Research & Strategy
- **Always research first:** Before making changes, map the relevant files and understand the existing patterns.
- **Plan before acting:** For any non-trivial change, create a plan and obtain approval (or if you are an AI, enter **Plan Mode**).

### Execution
- **Atomic changes:** Keep your changes focused and atomic.
- **Maintain integrity:** Ensure every structural change (adding/moving pages) is reflected in:
  - `src/data/menu.ts` (The sidebar)
  - `astro.config.mjs` (Redirects, if necessary)

### Validation
- **Build check:** Always run `npm run build` after making changes to ensure structural integrity.
- **Type check:** Run `npx astro check` to verify TypeScript and Astro component validity.
- **Link check:** Ensure all internal and external links are functional.

### Committing
- **Small logical commits**: Break changes into small, focused commits with a single purpose.
- **Commit title**: The title must be a single sentence in active style (imperative mood), max 50 characters, and must not end with a dot. Do not use commit type prefixes (e.g., "feat:", "fix:").
- **Optional descriptions**: Commit descriptions are optional and should only be used to clarify functional choices (the "what" and "why"). Do not explain the "how" or anything that is already evident in the code changes. Max line length for descriptions is 72 characters.
- **No AI mentions**: Never mention AI assistants or tools in commit messages.
- **Propose messages**: AI assistants should always propose a draft commit message before committing.

---

## 2. Documentation Standards

### Writing Style
- **Pedagogical Flow:** Establish a theoretical "Mental Model" (e.g., the Results Tree) before introducing complex R6 implementation logic.
- **Momentum:** Avoid "Click Fatigue." If multiple sequential tutorials are mechanical or very short, consider merging them to keep the user moving.
- **Progressive Disclosure:** Start with simple concepts and layer complexity.
- **Action Verbs:** Use bolded imperative verbs for tutorial steps (**Install**, **Connect**, **Verify**).
- **SEO:** Every page must include a `description` in the frontmatter.

### jamovi Technical Specs
- **Analysis Pipeline (.a.yaml):** Use `jas: '1.2'`.
- **Results Pipeline (.r.yaml):** Use `jrs: '1.1'`. Structure tables with clear column names, types (`number`, `integer`, `text`), and formats (`zto`, `pvalue`).
- **R Implementation (.b.R):** 
    - Use `R6` class structure.
    - Access all inputs via `self$options` and outputs via `self$results`.
    - Always use `jmvcore::constructFormula` for R formulas.
- **R Testing:** Use `testthat` and the `$asDF` method on jamovi tables for easy assertions.

---

## 3. Technical References

When writing documentation or implementing examples, refer to the following authoritative sources:

- **R API & Core Logic:** [jmvcore](https://github.com/jamovi/jmvcore)
- **Module Building & Tooling:** [jmvtools](https://github.com/jamovi/jmvtools)
- **Analysis Implementation Examples:** [jmv](https://github.com/jamovi/jmv)
- **Plotting Implementation Examples:** [jmvplots](https://github.com/jamovi/jmvplots)

---

## 4. Technology Stack

- **Astro 5.x:** Islands Architecture, Content Layer API, and selective hydration.
- **TypeScript:** Strict type safety for components and content collections.
- **Vanilla CSS:** Preferred for styling to ensure maximum flexibility and performance.
- **Pagefind:** Client-side search indexing.
