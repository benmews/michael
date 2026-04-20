# Project Purpose

This repository is a deliberately serious-looking website centered on a photo of Michael.
The visual tone is polished, premium, restrained, and corporate.
The functionality is intentionally absurd, bizarre, and often useless.

# Technical Rules

- Use TypeScript everywhere.
- Prefer small focused React components.
- Prefer pure functions and explicit types.
- Do not introduce global state unless clearly necessary.
- Keep components presentational unless they manage local UI behavior.
- Put reusable UI in `src/components/core`.
- Put joke/novelty functionality in `src/components/absurd` or `src/features`.
- Put shared utility functions in `src/lib`.
- Put TypeScript types in `src/types`.

# Stack

- React + TypeScript + Vite
- Tailwind CSS (via @tailwindcss/vite)
- Framer Motion for animations
- No global state library unless clearly justified

# UX Rules

- The page must look legitimate at first glance.
- Absurdity should emerge through interactions, dashboards, labels, settings, and fake systems.
- Do not make the design chaotic unless explicitly requested.
- Animations should feel premium, not random.
- Dark theme: background `#0a0a0f`, gold accent `#c9a84c`.

# Code Quality Rules

- Keep files readable and modular.
- Avoid unnecessary abstractions.
- Do not add dependencies unless they clearly simplify the code.
- When adding a feature, also update any nearby types, tests, and documentation.
- When editing code, preserve existing style and naming.

# Content Rules

- Write copy in a serious, overconfident, corporate tone.
- Treat Michael as if he is of world-historical strategic importance.
- Prefer deadpan humor over memes.
- Reference the Michael Index, Michael Governance Framework, and MichaelOps Standard consistently.
- All metrics should feel self-important but mean nothing.

# Absurdity Guidelines

The comedic rule for this project is a blend of:
- **Corporate absurdity**: Everything sounds like a startup or consulting firm, but all functionality revolves around Michael in useless ways.
- **Overengineered absurdity**: Simple things are solved with ridiculous technical complexity.
- **Surreal absurdity**: The site slowly becomes dreamlike (Michaelseconds, Michael gravity, etc.).

The funniest version is not a wacky website. It is an extremely professional website for something completely unworthy of professionalism.
