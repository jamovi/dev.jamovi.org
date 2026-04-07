# Astro 5.x Development Standards

This document serves as the expert knowledge base for developing with Astro 5.x on the `dev.jamovi.org` project. It contains mandated patterns, migration examples, and optimization strategies.

## 1. Project Context
- **Framework:** Astro 5.x
- **Architecture:** Islands Architecture (server-render by default, hydrate selectively)
- **Content:** Content Layer API (modern)
- **Type Safety:** Strict TypeScript with auto-generated types in `.astro/types.d.ts`

---

## 2. Core Development Standards

### TypeScript Integration
- **Type Generation:** Run `astro sync` to update definitions. 
- **Type Location:** Use `.astro/types.d.ts` instead of the legacy `src/env.d.ts`.
- **Config:** Adhere to `astro/tsconfigs/strict` patterns.

### Component Design
- **PascalCase** for component names.
- **Islands:** Import framework components (React, Vue, etc.) only when interactivity is needed.
- **Structure:** Frontmatter at the top, template logic below.
- **Styles:** Prefer scoped styles in `.astro` components. Use CSS custom properties for theming.

### Modern Content Layer API
Define collections in `src/content.config.ts` using modern loaders:
```typescript
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/docs' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date().optional()
  })
});
```

---

## 3. View Transitions & Navigation
- **Router:** Use `<ClientRouter />` (formerly `<ViewTransitions />`).
- **Persistence:** Use `transition:persist` to maintain state across navigations for shared elements like `Header` or `Sidebar`.
- **Navigation Logic:** All path-to-section mapping must be centralized in `src/utils/navigation.ts`.

---

## 4. Performance & Optimization
- **Zero JS:** Default to static rendering. Only add interactivity where absolutely required.
- **Client Directives:** Use `client:load`, `client:idle`, or `client:visible` strategically.
- **Image Optimization:** Always use the Astro `<Image />` component for automatic WebP/AVIF generation and lazy loading.
- **Bundle Size:** Avoid unnecessary client-side libraries; prefer Vanilla CSS and lightweight TypeScript.

---

## 5. SEO & Discoverability
- **Meta Management:** Use the centralized `<SEO />` component.
- **Sitemaps:** Automatically generated via `@astrojs/sitemap`.
- **Structured Data:** Use JSON-LD (Breadcrumbs, TechArticles) for documentation pages to ensure rich search results.
