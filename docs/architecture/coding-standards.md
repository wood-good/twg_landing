# TWG Landing Page - Coding Standards

> **Version:** 1.0
> **Last Updated:** November 7, 2025
> **Framework:** Astro 4.0+ with TypeScript
> **Team Size:** 5-6 Developers

## Table of Contents

1. [Core Principles](#core-principles)
2. [Project Structure](#project-structure)
3. [Astro Components](#astro-components)
4. [React Islands](#react-islands)
5. [TypeScript Standards](#typescript-standards)
6. [Styling Guidelines](#styling-guidelines)
7. [Performance Standards](#performance-standards)
8. [Content & Assets](#content--assets)
9. [Testing Requirements](#testing-requirements)
10. [Git Workflow](#git-workflow)
11. [Code Review Checklist](#code-review-checklist)

---

## Core Principles

### 🎯 The Golden Rules

1. **Zero JavaScript by Default** - Every component starts as static HTML/CSS
2. **Performance First** - Every decision must consider Core Web Vitals impact
3. **Type Safety Always** - No `any` types, full TypeScript coverage
4. **Accessibility Required** - WCAG 2.1 AA compliance is non-negotiable
5. **Mobile-First Design** - Start with mobile, enhance for desktop

### ⚡ Performance Budget (MANDATORY)

```typescript
// Maximum allowed metrics
const PERFORMANCE_BUDGET = {
  firstContentfulPaint: 1000,    // 1 second
  largestContentfulPaint: 1500,  // 1.5 seconds
  totalBlockingTime: 50,          // 50ms
  cumulativeLayoutShift: 0.05,    // 0.05
  javascriptBundle: 10000,        // 10KB max
  cssBundle: 20000,              // 20KB max
  totalPageWeight: 100000,        // 100KB (excluding video)
  heroVideo: 2500000,            // 2.5MB max
};
```

---

## Project Structure

### Directory Organization

```
src/
├── components/         # All components
│   ├── base/          # Basic HTML elements (Button, Link)
│   ├── glass/         # Glassmorphism components
│   ├── islands/       # React interactive components
│   ├── layout/        # Layout components (Header, Footer)
│   └── sections/      # Page sections (Hero, ProductGrid)
├── layouts/           # Page layouts
├── pages/             # Route pages
├── lib/               # Utilities and helpers
├── styles/            # Global styles
└── types/             # TypeScript type definitions
```

### File Naming Conventions

| Type | Convention | Example | ❌ Wrong |
|------|------------|---------|----------|
| Astro Components | PascalCase.astro | `GlassCard.astro` | `glass-card.astro` |
| React Components | PascalCase.tsx | `MobileNav.tsx` | `mobileNav.tsx` |
| Pages | kebab-case.astro | `about-us.astro` | `AboutUs.astro` |
| Utilities | camelCase.ts | `formatDate.ts` | `FormatDate.ts` |
| Types | PascalCase.ts | `ProductTypes.ts` | `product-types.ts` |
| Styles | kebab-case.css | `glass-effects.css` | `glassEffects.css` |

---

## Astro Components

### Component Structure

```astro
---
// 1. Imports (sorted: external, then internal)
import { Image } from 'astro:assets';
import BaseLayout from '@/layouts/BaseLayout.astro';
import type { ProductCategory } from '@/types/ProductTypes';

// 2. Props interface (always exported)
export interface Props {
  title: string;
  products: ProductCategory[];
  className?: string;  // Optional props last
}

// 3. Props destructuring with defaults
const {
  title,
  products,
  className = ''
} = Astro.props;

// 4. Data fetching/logic (minimal)
const formattedTitle = title.toUpperCase();

// 5. NO BUSINESS LOGIC - move to lib/
---

<!-- 6. Template (semantic HTML) -->
<section class={`product-grid ${className}`}>
  <h2>{formattedTitle}</h2>
  <!-- Use semantic HTML5 elements -->
  <article>...</article>
</section>

<!-- 7. Styles (scoped, mobile-first) -->
<style>
  /* Mobile first */
  .product-grid {
    display: grid;
    gap: 1rem;
  }

  /* Tablet and up */
  @media (min-width: 768px) {
    .product-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  /* Desktop */
  @media (min-width: 1024px) {
    .product-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
</style>
```

### Component Guidelines

```astro
<!-- ✅ GOOD: Static by default -->
<nav class="desktop-nav">
  {items.map(item => (
    <a href={item.href}>{item.label}</a>
  ))}
</nav>

<!-- ❌ BAD: Unnecessary JavaScript -->
<nav>
  {items.map(item => (
    <a href={item.href} onclick="handleClick()">{item.label}</a>
  ))}
</nav>

<!-- ✅ GOOD: Semantic HTML -->
<article class="product-card">
  <header>
    <h3>{product.name}</h3>
  </header>
  <figure>
    <img src={product.image} alt={product.imageAlt} />
    <figcaption>{product.caption}</figcaption>
  </figure>
</article>

<!-- ❌ BAD: Div soup -->
<div class="product-card">
  <div class="header">
    <div class="title">{product.name}</div>
  </div>
  <div class="image-container">
    <img src={product.image} />  <!-- Missing alt -->
  </div>
</div>
```

---

## React Islands

### When to Use React

Only create React components for:
- Mobile navigation toggle
- Interactive product galleries
- Form validation with real-time feedback
- Complex state management

### Island Component Structure

```tsx
// components/islands/ProductGallery.tsx

// 1. Imports (React first, then dependencies, then internal)
import { useState, useCallback } from 'react';
import type { FC } from 'react';
import type { ProductImage } from '@/types/ProductTypes';

// 2. Props interface (exported)
export interface ProductGalleryProps {
  images: ProductImage[];
  initialIndex?: number;
}

// 3. Component (always typed FC)
const ProductGallery: FC<ProductGalleryProps> = ({
  images,
  initialIndex = 0
}) => {
  // 4. State (minimal, colocated)
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // 5. Handlers (memoized when passed to children)
  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  // 6. Early returns for edge cases
  if (!images.length) {
    return <div>No images available</div>;
  }

  // 7. Main render
  return (
    <div className="gallery">
      <img
        src={images[currentIndex].src}
        alt={images[currentIndex].alt}
      />
      <button onClick={handleNext} aria-label="Next image">
        Next
      </button>
    </div>
  );
};

// 8. Named export (for consistency)
export default ProductGallery;
```

### Island Hydration Strategies

```astro
<!-- Only hydrate on mobile (saves desktop bandwidth) -->
<MobileNav client:media="(max-width: 768px)" items={navItems} />

<!-- Hydrate when visible (lazy loading) -->
<ProductGallery client:visible images={products} />

<!-- Hydrate on interaction (maximum performance) -->
<ContactForm client:idle />

<!-- Never do this - wastes bandwidth -->
<StaticComponent client:load />  <!-- ❌ BAD -->
```

---

## TypeScript Standards

### Type Definitions

```typescript
// types/ProductTypes.ts

// 1. Use interfaces for objects (extendable)
export interface Product {
  id: string;
  name: string;
  price: number;
  inStock: boolean;
}

// 2. Use types for unions/intersections
export type ProductStatus = 'available' | 'sold-out' | 'coming-soon';

// 3. Avoid enums (use const objects)
export const PRODUCT_CATEGORY = {
  FINGER_JOINT: 'finger-joint',
  SOLID_WOOD: 'solid-wood',
  FURNITURE_PARTS: 'furniture-parts',
  CNC: 'cnc',
  TABLE_TOPS: 'table-tops',
} as const;

export type ProductCategory = typeof PRODUCT_CATEGORY[keyof typeof PRODUCT_CATEGORY];

// 4. Always export prop types
export interface ProductCardProps {
  product: Product;
  variant?: 'default' | 'featured';
  onInteraction?: (productId: string) => void;
}

// 5. Use generics for reusable types
export interface ApiResponse<T> {
  data: T;
  error?: string;
  timestamp: number;
}

// ❌ NEVER use 'any'
const processData = (data: any) => { ... }  // BAD

// ✅ Use 'unknown' if type is truly unknown
const processData = (data: unknown) => {
  if (typeof data === 'string') {
    // Type is now narrowed to string
  }
}
```

### Sanity Type Generation

```typescript
// lib/sanity.types.ts
// Generated from Sanity schema - DO NOT EDIT MANUALLY

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt: string;  // Required for accessibility
  hotspot?: {
    x: number;
    y: number;
  };
}

// Use Zod for runtime validation
import { z } from 'zod';

export const ProductSchema = z.object({
  name: z.string().min(1),
  slug: z.string().regex(/^[a-z0-9-]+$/),
  price: z.number().positive(),
  image: z.object({
    url: z.string().url(),
    alt: z.string().min(1),  // Enforce alt text
  }),
});

export type Product = z.infer<typeof ProductSchema>;
```

---

## Styling Guidelines

### CSS Architecture

```css
/* styles/global.css */

/* 1. CSS Custom Properties (Design Tokens) */
:root {
  /* Colors */
  --color-primary: #2c5530;
  --color-glass: rgba(255, 255, 255, 0.1);
  --color-glass-border: rgba(255, 255, 255, 0.2);

  /* Spacing (8px grid) */
  --space-1: 0.5rem;   /* 8px */
  --space-2: 1rem;     /* 16px */
  --space-3: 1.5rem;   /* 24px */
  --space-4: 2rem;     /* 32px */

  /* Typography */
  --font-body: system-ui, -apple-system, sans-serif;
  --font-display: 'Playfair Display', serif;

  /* Glassmorphism */
  --glass-blur: 10px;
  --glass-opacity: 0.1;

  /* Breakpoints (reference only) */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}

/* 2. Base Reset */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* 3. Semantic Base Styles */
html {
  scroll-behavior: smooth;
  /* Prevent layout shift from scrollbar */
  scrollbar-gutter: stable;
}

body {
  font-family: var(--font-body);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

/* 4. Utility Classes (minimal, prefer Tailwind) */
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```

### Glassmorphism Standards

```css
/* components/glass/glass.module.css */

.glass-base {
  /* Fallback for unsupported browsers */
  background: rgba(255, 255, 255, 0.9);

  /* Modern browsers */
  @supports (backdrop-filter: blur(1px)) {
    background: var(--color-glass);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
  }

  /* Consistent border and radius */
  border: 1px solid var(--color-glass-border);
  border-radius: 12px;

  /* Performance optimization */
  will-change: backdrop-filter;
  transform: translateZ(0); /* Force GPU */
}

/* Performance: Disable blur on scroll */
@media (prefers-reduced-motion: no-preference) {
  .scrolling .glass-base {
    backdrop-filter: none;
    background: rgba(255, 255, 255, 0.95);
  }
}
```

### Tailwind Usage

```tsx
// ✅ GOOD: Consistent spacing using design tokens
<div className="p-4 md:p-6 lg:p-8">

// ❌ BAD: Arbitrary values
<div className="p-[17px] md:p-[33px]">

// ✅ GOOD: Responsive and readable
<div className="
  grid grid-cols-1
  md:grid-cols-2
  lg:grid-cols-3
  gap-4
">

// ❌ BAD: Unreadable utility soup
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 md:gap-3 lg:gap-4 xl:gap-5 p-2 md:p-4 lg:p-6">

// ✅ GOOD: Extract complex patterns to CSS modules
<div className={styles.productGrid}>
```

---

## Performance Standards

### Image Optimization

```astro
---
import { Image } from 'astro:assets';
import heroImage from '@/assets/hero.jpg';
---

<!-- ✅ GOOD: Optimized image with responsive sizes -->
<Image
  src={heroImage}
  alt="Sustainable forest management"
  widths={[400, 800, 1200]}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
  format="avif"
  loading="lazy"
  class="hero-image"
/>

<!-- ❌ BAD: Unoptimized image -->
<img src="/images/hero.jpg" />
```

### Video Optimization

```astro
<!-- ✅ GOOD: Optimized video with fallbacks -->
<video
  autoplay
  loop
  muted
  playsinline
  poster="/images/hero-poster.jpg"
  preload="metadata"
>
  <source src="/videos/hero.webm" type="video/webm" />
  <source src="/videos/hero.mp4" type="video/mp4" />
  <!-- Fallback image for no-video support -->
  <img src="/images/hero-poster.jpg" alt="Forest scenery" />
</video>

<!-- ❌ BAD: Unoptimized video -->
<video autoplay src="/videos/hero.mp4"></video>
```

### Critical CSS

```astro
<!-- Layout.astro -->
<style is:inline>
  /* Only above-the-fold critical styles */
  .hero {
    height: 100vh;
    position: relative;
  }

  .glass-nav {
    backdrop-filter: blur(10px);
  }
</style>

<!-- Load non-critical styles async -->
<link rel="preload" href="/styles/main.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

---

## Content & Assets

### Asset Organization

```
public/
├── fonts/
│   ├── playfair-display-latin-400.woff2
│   └── playfair-display-latin-700.woff2
├── images/
│   ├── hero/
│   │   ├── hero-poster.webp         # 1920x1080
│   │   ├── hero-poster-mobile.webp  # 768x1024
│   │   └── hero-poster.jpg          # Fallback
│   └── products/
│       ├── finger-joint/
│       └── solid-wood/
└── videos/
    ├── hero.webm    # <2.5MB
    └── hero.mp4     # <2.5MB fallback
```

### Naming Conventions

```
# Images
{name}-{variant}-{size}.{ext}
hero-poster-1920w.webp
product-thumbnail-400w.jpg

# Videos
{name}-{quality}.{ext}
hero-1080p.webm
hero-720p.mp4
```

### Content Guidelines

```typescript
// ✅ GOOD: Meaningful alt text
alt="Handcrafted oak table with natural wood grain finish"

// ❌ BAD: Generic or empty alt
alt="Image"
alt=""  // Only for decorative images

// ✅ GOOD: Descriptive link text
<a href="/products">View our sustainable wood products</a>

// ❌ BAD: Generic link text
<a href="/products">Click here</a>
```

---

## Testing Requirements

### Component Testing

```typescript
// tests/components/GlassCard.test.ts
import { experimental_AstroContainer as AstroContainer } from 'astro/container';
import { expect, test } from 'vitest';
import GlassCard from '@/components/glass/GlassCard.astro';

test('GlassCard renders with props', async () => {
  const container = await AstroContainer.create();
  const result = await container.renderToString(GlassCard, {
    props: {
      title: 'Test Card',
      blur: 15
    },
  });

  expect(result).toContain('Test Card');
  expect(result).toContain('data-blur="15"');
});
```

### E2E Testing

```typescript
// tests/e2e/glassmorphism.test.ts
import { test, expect } from '@playwright/test';

test('glassmorphism effects render correctly', async ({ page }) => {
  await page.goto('/');

  const glassNav = page.locator('.glass-nav');

  // Check backdrop-filter is applied
  const backdropFilter = await glassNav.evaluate((el) => {
    return window.getComputedStyle(el).backdropFilter;
  });

  // Should have blur or fall back gracefully
  expect(backdropFilter).toMatch(/blur|none/);

  // Test performance
  const metrics = await page.evaluate(() => {
    const fcp = performance.getEntriesByType('paint')
      .find(entry => entry.name === 'first-contentful-paint');
    return fcp?.startTime;
  });

  expect(metrics).toBeLessThan(1000); // Under 1 second
});
```

### Performance Testing

```javascript
// tests/performance/lighthouse.test.js
import lighthouse from 'lighthouse';
import chromeLauncher from 'chrome-launcher';

test('Lighthouse scores meet requirements', async () => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
  const options = {
    logLevel: 'info',
    output: 'json',
    onlyCategories: ['performance'],
    port: chrome.port,
  };

  const runnerResult = await lighthouse('http://localhost:4321', options);
  const scores = runnerResult.lhr.categories;

  expect(scores.performance.score).toBeGreaterThan(0.9); // 90+

  await chrome.kill();
});
```

---

## Git Workflow

### Branch Hierarchy

**CRITICAL:** This project uses a strict 4-tier branch hierarchy:

```
main
└── development
    └── epic-{n}-{epic-name}
        └── story-{n.m}-{story-name}
```

**Branch Protection Rules:**
- `main` - **PROTECTED** - Only PM can merge via manual PR review
- `development` - Preview environment, merges from epic branches
- `epic-*` - Created per epic, merges from story branches
- `story-*` - Individual developer work, merges to epic branch

### Branch Naming Conventions

```bash
# Epic branches (created at epic start)
epic-01-first-impression
epic-02-product-discovery
epic-03-sustainability-verification
epic-04-manufacturing-transparency
epic-05-contact-inquiry

# Story branches (created from epic branch)
story-1.1-video-background
story-1.2-glassmorphism-header
story-2.1-product-category-schema
story-2.2-products-grid-page

# Hotfix branches (ONLY for production emergencies)
hotfix/critical-video-crash
hotfix/contact-form-failure
```

### Workflow Rules

**1. Starting a New Epic**
```bash
# Create epic branch from development
git checkout development
git pull origin development
git checkout -b epic-01-first-impression
git push -u origin epic-01-first-impression
```

**2. Starting a New Story**
```bash
# Create story branch from epic branch
git checkout epic-01-first-impression
git pull origin epic-01-first-impression
git checkout -b story-1.1-video-background
git push -u origin story-1.1-video-background
```

**3. Completing a Story**
```bash
# Push your work
git add .
git commit -m "feat(story-1.1): implement video background with fallbacks"
git push origin story-1.1-video-background

# Create PR: story-1.1-video-background → epic-01-first-impression
# After review and approval, merge to epic branch
# Delete story branch after merge
```

**4. Completing an Epic**
```bash
# Once all stories in epic are complete
# Create PR: epic-01-first-impression → development
# After testing on preview environment
# Epic lead creates PR, team reviews
# Merge to development
# Keep epic branch for reference (do not delete)
```

**5. Production Release**
```bash
# PM manually reviews and merges
# Create PR: development → main
# Only PM has permission to merge
# After merge, tag release
git tag -a v1.0.0 -m "Release v1.0.0"
git push origin v1.0.0
```

### Branch Lifecycle

| Branch Type | Created From | Merges To | Deleted After | Lifespan |
|-------------|--------------|-----------|---------------|----------|
| `story-*` | `epic-*` | `epic-*` | ✅ Yes | 1-3 days |
| `epic-*` | `development` | `development` | ❌ No (archive) | 3-5 days |
| `development` | `main` (initially) | `main` | ❌ Never | Permanent |
| `main` | N/A | N/A | ❌ Never | Permanent |
| `hotfix/*` | `main` | `main` + `development` | ✅ Yes | Hours |

### Example Parallel Development

```bash
# 6 developers working simultaneously

# Dev 1 - Epic 1, Story 1.1
git checkout -b story-1.1-video-background
# from epic-01-first-impression

# Dev 2 - Epic 1, Story 1.2
git checkout -b story-1.2-glassmorphism-header
# from epic-01-first-impression

# Dev 3 - Epic 2, Story 2.2
git checkout -b story-2.2-products-grid-page
# from epic-02-product-discovery

# Dev 4 - Epic 2, Story 2.3
git checkout -b story-2.3-product-card-component
# from epic-02-product-discovery

# Dev 5 - Backend
git checkout -b story-1.5-sanity-site-settings
# from epic-01-first-impression

# Dev 6 - Backend
git checkout -b story-2.1-product-category-schema
# from epic-02-product-discovery

# All developers can work in parallel without conflicts
```

### Commit Messages

```bash
# Format: <type>: <subject>

# ✅ GOOD commits
feat: add glassmorphism navigation component
fix: prevent layout shift on video load
perf: optimize hero video to 2MB
style: apply consistent spacing to product cards
test: add e2e tests for mobile navigation
docs: update component usage examples
chore: configure GitHub Actions deployment

# ❌ BAD commits
update files
fix bug
WIP
changes
```

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Performance improvement
- [ ] Refactoring

## Testing
- [ ] Unit tests pass
- [ ] E2E tests pass
- [ ] Lighthouse score >90
- [ ] Tested on mobile
- [ ] Tested on Safari

## Performance Impact
- Bundle size before: X KB
- Bundle size after: Y KB
- FCP impact: none/improved/degraded

## Screenshots
[If applicable]
```

---

## Code Review Checklist

### Before Submitting PR

```markdown
### Performance
- [ ] No unnecessary JavaScript
- [ ] Images optimized (WebP/AVIF)
- [ ] CSS minimized
- [ ] No layout shifts
- [ ] Mobile-first responsive

### Accessibility
- [ ] Alt text on all images
- [ ] Semantic HTML used
- [ ] Keyboard navigable
- [ ] Focus indicators visible
- [ ] ARIA labels where needed

### Code Quality
- [ ] TypeScript - no `any` types
- [ ] Props interfaces exported
- [ ] Components documented
- [ ] No console.logs
- [ ] Error boundaries added

### Testing
- [ ] Unit tests written
- [ ] E2E tests updated
- [ ] Manual testing completed
- [ ] Cross-browser tested
```

### Review Focus Areas

1. **Performance Impact** - Every PR must maintain or improve metrics
2. **Accessibility** - No regressions in a11y
3. **Type Safety** - Full TypeScript coverage
4. **Component Reusability** - DRY principles
5. **Mobile Experience** - Test on actual devices

---

## Enforcement

### Pre-commit Hooks

```json
// package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{astro,tsx,ts}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.css": [
      "prettier --write"
    ]
  }
}
```

### CI/CD Checks

```yaml
# .github/workflows/ci.yml
name: CI
on: [pull_request]

jobs:
  quality:
    steps:
      - name: Type Check
        run: pnpm tsc --noEmit

      - name: Lint
        run: pnpm lint

      - name: Test
        run: pnpm test

      - name: Build
        run: pnpm build

      - name: Bundle Size
        run: pnpm size-limit

      - name: Lighthouse CI
        run: pnpm lhci autorun
```

---

## Quick Reference

### Component Decision Tree

```
Need user interaction?
├─ No → Astro Component (.astro)
└─ Yes → Is it essential?
    ├─ No → Reconsider, use CSS
    └─ Yes → React Island (.tsx)
        └─ Use appropriate hydration:
            ├─ Mobile only → client:media
            ├─ Below fold → client:visible
            └─ Non-critical → client:idle
```

### Performance Checklist

```
Before committing:
□ Images optimized (WebP/AVIF)
□ Video under 2.5MB
□ No unused CSS/JS
□ Lighthouse score >90
□ Mobile tested
□ Safari tested
```

### Emergency Contacts

- **Performance Issues:** Check bundle analyzer first
- **Glassmorphism Bugs:** Test in Safari first
- **Type Errors:** Run `pnpm tsc` locally
- **Style Conflicts:** Check CSS module scoping

---

## Appendix: Banned Practices

### Never Do These

```typescript
// ❌ Using any type
const data: any = fetch('/api');

// ❌ Inline styles (except for dynamic values)
<div style="padding: 20px">

// ❌ Global event listeners without cleanup
window.addEventListener('scroll', handler);

// ❌ Synchronous scripts
<script src="/heavy-library.js"></script>

// ❌ Unoptimized images
<img src="/huge-image.png">

// ❌ Client-side only rendering
<div id="root"></div>
<script>renderApp()</script>

// ❌ Console.logs in production
console.log('Debug:', data);

// ❌ Ignoring TypeScript errors
// @ts-ignore

// ❌ Magic numbers
padding: 17px;  // Use design tokens

// ❌ Nested ternaries
const x = a ? b : c ? d : e;
```

---

*These standards are living documentation. Propose changes via PR if you identify improvements.*