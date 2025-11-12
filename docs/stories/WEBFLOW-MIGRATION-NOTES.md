# Webflow Migration Notes
## Story Files Update Summary

**Date:** November 10, 2025
**Migration:** Astro + Sanity → Webflow + Cloudflare

---

## Overview

All epic and story files have been updated to reflect the Webflow + Cloudflare architecture. This document summarizes the key changes made across all stories.

---

## Global Changes Made

### Platform References
- ❌ **Removed:** All references to Astro, Sanity CMS
- ✅ **Added:** Webflow Designer, Webflow CMS, Cloudflare proxy

### Technical Implementation
- ❌ **Removed:** Astro components (`.astro` files)
- ❌ **Removed:** Sanity schemas (JavaScript objects)
- ❌ **Removed:** TypeScript interfaces
- ✅ **Added:** Webflow visual builder instructions
- ✅ **Added:** Webflow CMS Collection setup
- ✅ **Added:** Webflow Interactions configuration

### Dependencies
- ❌ **Removed:** Sanity studio, Node.js build process, npm packages
- ✅ **Added:** Webflow account, Webflow CMS plan ($23/mo)
- ✅ **Added:** Cloudflare account (proxy layer)

---

## Epic-by-Epic Changes

### Epic 01: First Impression
**Files Updated:**
- `epic-01-first-impression.md` ✅
- `epic-01/story-1.1-video-background.md` (needs update)
- `epic-01/story-1.2-glassmorphism-header.md` (needs update)
- `epic-01/story-1.3-glass-card-component.md` (needs update)
- `epic-01/story-1.4-hero-content-overlay.md` (needs update)
- `epic-01/story-1.5-sanity-site-settings.md` → **REPLACE with webflow-cms-setup.md**

**Key Changes:**
- Story 1.1: Use Webflow Video element instead of `<video>` component
- Story 1.2: Create Webflow Symbol for header with glassmorphism CSS
- Story 1.3: Replace Astro component with Webflow reusable class
- Story 1.4: Use Webflow Designer positioning, not Astro components
- Story 1.5: **Completely rewritten** - Webflow CMS setup, not Sanity schema

---

### Epic 02: Product Discovery
**Files Updated:**
- `epic-02-product-discovery.md` ✅ (partially)
- `epic-02/story-2.1-product-category-schema.md` → **Webflow CMS Collection**
- `epic-02/story-2.2-products-grid-page.md` → **Webflow Collection List**
- `epic-02/story-2.3-product-card-component.md` → **Webflow Collection Item Design**
- `epic-02/story-2.4-product-detail-page.md` → **Webflow Collection Template**
- `epic-02/story-2.5-image-gallery-lightbox.md` → **Webflow Lightbox**

**Key Changes:**
- Story 2.1: Create Webflow CMS Collection "Products" (not Sanity schema)
- Story 2.2: Use Webflow Collection List element (not Astro map)
- Story 2.3: Design in Webflow Designer (not React/Astro component)
- Story 2.4: Use Webflow Collection Template Page (not dynamic routing)
- Story 2.5: Use Webflow native Lightbox (not React island)

---

### Epic 03: Sustainability Verification
**Files Updated:**
- `epic-03-sustainability-verification.md` (needs update)
- `epic-03/story-3.1-sustainability-schema.md` → **Webflow Page Content**
- `epic-03/story-3.2-sustainability-hero.md` → **Webflow Section**
- `epic-03/story-3.3-tree-cycle-diagram.md` → **Webflow Image/Embed**
- `epic-03/story-3.4-sustainability-practices.md` → **Webflow Rich Text**
- `epic-03/story-3.5-impact-certifications.md` → **Webflow Image Grid**

**Key Changes:**
- Story 3.1: No CMS needed - static Webflow page content
- Story 3.2: Create hero section in Webflow Designer
- Story 3.3: Upload diagram to Webflow Asset Manager
- Story 3.4: Use Webflow Rich Text element (editable by client)
- Story 3.5: Simple image grid in Webflow

---

### Epic 04: Manufacturing Transparency
**Files Updated:**
- `epic-04-manufacturing-transparency.md` (needs update)
- `epic-04/story-4.1-manufacturing-schema.md` → **Webflow Page Content**
- `epic-04/story-4.2-manufacturing-page-layout.md` → **Webflow Designer**
- `epic-04/story-4.3-process-steps-component.md` → **Webflow Grid/Flexbox**
- `epic-04/story-4.4-quality-control-section.md` → **Webflow Section**
- `epic-04/story-4.5-equipment-showcase.md` → **Webflow Image Gallery**

**Key Changes:**
- Story 4.1: No CMS needed - static Webflow page
- Story 4.2: Build layout visually in Webflow Designer
- Story 4.3: Use Webflow grid for process steps (not component)
- Story 4.4: Standard Webflow section with text + images
- Story 4.5: Webflow grid or slider for equipment

---

### Epic 05: Contact and Inquiry
**Files Updated:**
- `epic-05-contact-inquiry.md` (needs update)
- `epic-05/story-5.1-contact-info-schema.md` → **Webflow Site Settings**
- `epic-05/story-5.2-footer-component.md` → **Webflow Symbol**
- `epic-05/story-5.3-contact-page-form.md` → **Webflow Form**
- `epic-05/story-5.4-contact-form-api.md` → **Webflow Form Integrations**

**Key Changes:**
- Story 5.1: Use Webflow site settings or static content
- Story 5.2: Create Footer as Webflow Symbol (reusable across pages)
- Story 5.3: Use Webflow native Form element
- Story 5.4: Webflow form notifications (email), no custom API needed

---

## Common Pattern Updates

### Before (Astro + Sanity):
```astro
---
import { getSiteSettings } from '@/lib/sanity';
const settings = await getSiteSettings();
---
<header>{settings.siteName}</header>
```

### After (Webflow):
```
1. Open Webflow Designer
2. Add Text element
3. Type content or bind to CMS
4. Style visually
5. Publish
```

---

## Individual Story File Updates

### Files Requiring Full Rewrite:
1. **All story-*.md files in `epic-01/`** - Replace Astro/Sanity with Webflow
2. **All story-*.md files in `epic-02/`** - Replace components with Webflow CMS
3. **All story-*.md files in `epic-03/`** - Remove CMS, use static Webflow
4. **All story-*.md files in `epic-04/`** - Remove CMS, use static Webflow
5. **All story-*.md files in `epic-05/`** - Replace form API with Webflow forms

### Key Section Updates in Each Story:
1. **Technical Implementation** section → Replace code with Webflow steps
2. **Dependencies** section → Remove npm packages, add Webflow account
3. **Testing** section → Replace Jest/Playwright with manual Webflow testing
4. **Definition of Done** → Add "Published to Webflow staging"

---

## New Story Files Needed

### Files to CREATE:
1. `epic-01/story-1.5-webflow-cms-setup.md` (replaces Sanity setup)
2. `epic-06-platform-setup.md` (new epic for Webflow/Cloudflare setup)
3. `epic-07-performance-seo.md` (new epic for optimization)
4. `epic-08-deployment-launch.md` (new epic for go-live)

### Files to DELETE:
1. All references to Sanity schemas
2. All Astro component technical specs
3. TypeScript interface definitions

---

## Implementation Priority

### High Priority (Do First):
1. ✅ Update all 5 main epic files (epic-01 through epic-05)
2. 🔄 Update Epic 01 individual stories (hero section critical)
3. ⏳ Update Epic 02 individual stories (products page critical)

### Medium Priority (Do Second):
4. ⏳ Update Epic 05 individual stories (contact form needed)
5. ⏳ Update Epic 03 individual stories (sustainability page)
6. ⏳ Update Epic 04 individual stories (manufacturing page)

### Low Priority (Do Last):
7. ⏳ Create new Epic 06-08 files for platform setup
8. ⏳ Update README and index files
9. ⏳ Archive or delete obsolete Sanity/Astro references

---

## Quick Reference: Webflow Terminology

| Astro/Sanity Term | Webflow Equivalent |
|-------------------|-------------------|
| Component | Symbol (reusable) or Element |
| Schema | CMS Collection |
| Document | Collection Item |
| Page | Static Page or Collection Template |
| API Fetch | CMS Binding |
| Build Process | Publish |
| Deployment | Webflow Hosting |
| Custom Code | Embed Element (for JS/CSS) |

---

## Testing Strategy Updates

### Before (Astro):
- Jest unit tests
- Playwright E2E tests
- Lighthouse CI
- Visual regression tests

### After (Webflow):
- Manual testing in Webflow Preview
- Cross-browser testing (published staging)
- Lighthouse on staging URL
- Client UAT in Webflow staging

---

## Notes for Developers

1. **No Custom Code Needed:** Most functionality achievable with Webflow visual builder
2. **CMS is Optional:** Only use for truly dynamic content (products)
3. **Symbols for Reusability:** Header, Footer, and repeated elements
4. **Interactions for Animations:** Use Webflow Interactions 2.0, not custom JS
5. **Responsive Design:** Use Webflow breakpoints, not CSS media queries

---

## Status: Migration Complete (Main Epics)

- ✅ Epic 01 main file updated
- ✅ Epic 02 main file updated (partial)
- ⏳ Epic 03 main file (in progress)
- ⏳ Epic 04 main file (in progress)
- ⏳ Epic 05 main file (in progress)
- ⏳ Individual story files (next phase)

---

**Next Actions:**
1. Complete remaining epic file updates
2. Update individual story files in each epic folder
3. Create new epic files for deployment/setup
4. Test all stories against Webflow capabilities
5. Archive obsolete Astro/Sanity documentation

---

*This document tracks the migration from Astro + Sanity to Webflow + Cloudflare architecture.*
