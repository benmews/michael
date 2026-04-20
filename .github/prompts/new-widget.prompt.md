---
name: new-widget
description: Add a new absurd but polished website widget
---

Add a new self-contained absurd feature to this website.

Requirements:
- The feature must look polished and intentional.
- The feature must be functionally useless or bizarre.
- Reuse existing styling patterns and component conventions (dark bg, gold accents, Framer Motion).
- Keep the implementation modular — one file per widget in `src/features/bizarre-widgets/`.
- Add or update types in `src/types/michael.ts` as needed.
- Use `getMichaelInsight()` or other utilities from `src/lib/michael-engine.ts` where appropriate.
- Do not break the main page layout.

First inspect the codebase structure and existing UI patterns in `src/features/bizarre-widgets/` and `src/components/core/`.
Then propose the feature in 3 short options.
After selection, implement it and add it to `src/components/absurd/WidgetsSection.tsx`.
