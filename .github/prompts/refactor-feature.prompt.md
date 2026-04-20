---
name: refactor-feature
description: Refactor an existing feature for cleanliness and consistency
---

Refactor the specified feature or component in the Michael Systems™ website.

Guidelines:
- Extract repeated patterns into shared utilities in `src/lib/`
- Ensure all types are explicit and in `src/types/michael.ts`
- Break large components into smaller focused ones
- Ensure animations use Framer Motion consistently
- Remove any inline styles that could be Tailwind classes
- Preserve all existing functionality and visual behavior

Inspect the target file(s) first, identify issues, then apply improvements.
