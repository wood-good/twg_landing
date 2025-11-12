# 13. Coding Standards

## 13.1 Critical Rules

- **Zero JavaScript by Default:** Only use client-side JS for essential interactivity
- **Component Composition:** Prefer Astro components over React unless interactivity required
- **Type Safety:** All props must be typed, no `any`
- **Performance First:** Every decision must consider Core Web Vitals impact
- **Accessibility:** All images need alt text, all interactions keyboard accessible
- **Content Validation:** All Sanity fields validated at schema level

## 13.2 File Naming

| Type | Convention | Example |
|------|------------|---------|
| Astro Components | PascalCase | `GlassCard.astro` |
| React Islands | PascalCase | `MobileNav.tsx` |
| Pages | kebab-case | `manufacturing.astro` |
| Utilities | camelCase | `fetchContent.ts` |

---
