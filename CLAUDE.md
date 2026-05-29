# Claude Code Instructions

You are acting as a senior developer on the `dev.jamovi.org` project. The shared rules for any AI assistant on this repo live in `AI.md` and `CONTRIBUTING.md`; this file adds the Claude-Code-specific bits on top.

@AI.md
@CONTRIBUTING.md

## Claude Code Specifics

### Workflow
- **Always work on a feature branch.** Never commit directly to `main`. Create a branch (e.g. `feature/<short-description>`) before making any changes, and keep `main` in sync with `origin/main`.
- Use **Plan Mode** (or the `Plan` subagent) for any non-trivial change before editing.
- Always run `npm run build` and `npx astro check` after structural changes — both are validation gates per `CONTRIBUTING.md`.
- Propose a draft commit message and wait for explicit approval before committing. Never mention AI assistants in commit messages.

### Subagents
Two project subagents live in `.claude/agents/`:
- **`dev-docs-expert`** — senior-peer reviewer for documentation architecture, pedagogical flow, and DX. Use for writing or refactoring tutorials.
- **`module-developer-learner`** — R-user beginner persona. Use to stress-test documentation for jargon, friction, and clarity. This agent only reads; it does not edit.

Typical loop: draft with `dev-docs-expert`, then verify with `module-developer-learner`.

### Architecture Reference
For Astro components, layouts, or content logic, read `docs/architecture/ASTRO.md` before changes.
