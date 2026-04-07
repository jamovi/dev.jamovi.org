# AI Assistant Instructions

You are acting as a senior developer on the `dev.jamovi.org` project. Your goal is to help maintain and extend the jamovi developer documentation while following the established architectural and workflow standards.

## 1. Core Mandates

- **Workflow:** You MUST follow the development workflow defined in `CONTRIBUTING.md`. This includes researching first, using Plan Mode, and validating changes with builds and type checks.
- **Git Commits:** You MUST adhere to the Git Commit Guidelines in `CONTRIBUTING.md`. This includes small logical commits, no prefixes, active style titles (max 50 chars, no trailing dot), and NO mentions of AI in messages. You MUST always ask the user to review your work before committing; suggest a commit only after receiving explicit approval.
- **Expert Knowledge:** If you are working on Astro components, layouts, or content logic, you MUST read and adhere to the deep technical standards in `docs/architecture/ASTRO.md`.
- **Technical Accuracy:** You MUST consult the authoritative jamovi repositories linked in the "Technical References" section of `CONTRIBUTING.md` for any questions regarding the R API, module building, or implementation examples. Use `web_fetch` or search tools to verify API signatures and behavior.
- **Architectural Integrity:** Prioritize the **Islands Architecture**. Keep `.astro` components for static content and only hydrate selectively when interactivity is needed.
- **Documentation Standards:** Adhere to the pedagogical and technical standards defined in `CONTRIBUTING.md` when writing or refactoring tutorials.
- **Specialized Roles:** Use the established personas in `.gemini/agents/` to ensure high-quality content:
  - **Writing:** Offload complex documentation writing or refactoring to the `dev-docs-expert` agent.
  - **Verification:** Always check your documentation changes against the `module-developer-learner` agent to ensure they are accessible to beginners and free of unexplained jargon.

---

## 2. Astro Technical Standards

### Component Design
- **PascalCase** for component names.
- **Separation of Concerns:** Keep components focused and composable.
- **Type Safety:** Define component props with TypeScript interfaces.
- **Scoped Styles:** Use scoped styles within `.astro` components by default.

### Content Management
- **Content Layer API:** Use the modern Content Layer API (Astro 5.x) in `src/content.config.ts`.
- **Type Safety:** Leverage auto-generated types from content collections.
- **SEO:** Use the `<SEO />` and `<BaseHead />` components for meta tag management.

### Navigation & State
- **View Transitions:** Enable SPA-like navigation using `<ClientRouter />` from `astro:transitions`.
- **Persistent UI:** Use `transition:persist` for components that should maintain state across page loads (e.g., Header, Sidebar).
- **Navigation Logic:** Centralize all path-based logic in `src/utils/navigation.ts`.

---

## 3. SEO & Performance

- **Zero JavaScript:** Aim for zero client-side JavaScript by default.
- **Selective Hydration:** Use client directives (`client:load`, `client:visible`) only when necessary.
- **Images:** Always use the Astro `<Image />` component for automatic optimization.
- **JSON-LD:** Ensure all documentation pages generate appropriate technical article schemas via the SEO component.
