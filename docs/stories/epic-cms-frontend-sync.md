# CMS-Frontend Content Sync - Brownfield Enhancement

**Epic ID:** CMS-SYNC-01
**Status:** In Progress
**Priority:** P0 (Critical)
**Created:** 2025-12-01
**Agent:** PM (John) - BMAD Workflow

---

## Epic Title

CMS-Frontend Content Sync - Brownfield Enhancement

## Epic Goal

Enable full content management through TinaCMS for all homepage sections, eliminating hardcoded content and establishing a flexible block-based architecture that syncs seamlessly with the existing frontend components.

## Epic Description

### Existing System Context

- **Current Functionality:** TinaCMS installed with basic page schema; homepage renders with mix of CMS-driven hero and hardcoded sections
- **Technology Stack:** TinaCMS 2.9.5, Next.js 15, React 19, Tailwind CSS, Framer Motion, gray-matter
- **Integration Points:**
  - `tina/config.ts` - CMS schema definition
  - `lib/tina.ts` - Content fetching (currently using gray-matter, not TinaCMS client)
  - `app/(frontend)/page-client.tsx` - Homepage renderer
  - `components/` - UI components (Hero, FeatureGrid, etc.)

### Enhancement Details

**What's Being Added/Changed:**
1. Extended TinaCMS schema with flexible content blocks (Hero, Features Grid, Editorial Text, Expertise Grid, CTA)
2. Block renderer system to dynamically render CMS-defined page layouts
3. TinaCMS client integration for live visual editing support
4. All hardcoded homepage content moved to CMS

**How It Integrates:**
- Schema changes in `tina/config.ts` define new block types
- New `BlockRenderer` component maps CMS blocks to existing React components
- Replace gray-matter with TinaCMS client for data fetching
- Existing components (Hero, FeatureGrid) receive props from CMS data

**Success Criteria:**
- [ ] All homepage sections editable from `/admin`
- [ ] Live visual editing works in TinaCMS
- [ ] No hardcoded content in `page-client.tsx`
- [ ] Page renders correctly with CMS content
- [ ] Existing design/animations preserved

---

## Stories

### Story 1: Extend TinaCMS Schema with Content Blocks

**Priority:** P0 | **Estimate:** 2-3 hours

**User Story:**
As a content editor, I want flexible content blocks in TinaCMS, so that I can compose page layouts without developer assistance.

**Acceptance Criteria:**
- [ ] Hero block with heading, subheading, image, video, CTA, theme options
- [ ] Features Grid block with configurable columns (2-4) and feature items
- [ ] Editorial Text block with title, columns of rich text
- [ ] Expertise Grid block with items (title, description, link, image)
- [ ] CTA block with heading, button text, link, theme options
- [ ] Page collection updated to use blocks array instead of fixed fields
- [ ] All blocks have helpful field descriptions

**Technical Notes:**
- File: `tina/config.ts`
- Use TinaCMS `object` type with `list: true` for blocks
- Use `templates` for polymorphic block types
- Reference: https://tina.io/docs/editing/blocks/

---

### Story 2: Build Block Renderer Components

**Priority:** P0 | **Estimate:** 2-3 hours

**User Story:**
As a developer, I want a block renderer system, so that CMS blocks automatically map to React components.

**Acceptance Criteria:**
- [ ] `BlockRenderer` component that maps block types to React components
- [ ] Hero block renders using existing `Hero` component
- [ ] FeaturesGridBlock component created (or uses existing `FeatureGrid`)
- [ ] EditorialTextBlock component created
- [ ] ExpertiseGridBlock component created
- [ ] CTABlock component created
- [ ] Type safety with TypeScript interfaces matching CMS schema
- [ ] Fallback for unknown block types

**Technical Notes:**
- Create `components/blocks/` directory
- Create `components/blocks/BlockRenderer.tsx`
- Generate types from TinaCMS schema
- Reuse existing component styles/animations

---

### Story 3: Integrate TinaCMS Client for Live Editing

**Priority:** P1 | **Estimate:** 1-2 hours

**User Story:**
As a content editor, I want live visual editing, so that I can see changes immediately while editing.

**Acceptance Criteria:**
- [ ] Replace gray-matter fetch with TinaCMS client
- [ ] `useTina` hook integrated in page components
- [ ] Visual editing overlay works in `/admin`
- [ ] Data queries use TinaCMS GraphQL
- [ ] Static generation still works for production
- [ ] Existing `lib/tina.ts` updated or replaced

**Technical Notes:**
- Use `@tinacms/cli` generated client
- Import from `tina/__generated__/client`
- Use `useTina` for client-side hydration
- Reference: https://tina.io/docs/contextual-editing/react/

---

## Compatibility Requirements

- [x] Existing frontend components remain unchanged (props may extend)
- [x] Existing CSS/animations preserved
- [x] Database/content schema changes are additive only
- [x] UI changes follow existing Moooi-inspired patterns
- [x] Performance impact is minimal (blocks render same as before)

## Risk Mitigation

**Primary Risk:** Breaking existing content structure in `content/pages/*.mdx`

**Mitigation:**
- Create new schema alongside existing fields (non-breaking)
- Add `blocks` field as optional, fall back to legacy fields
- Test migration path before removing legacy fields

**Rollback Plan:**
- Revert `tina/config.ts` to previous version
- Content files remain compatible with old schema
- Git branch allows easy rollback

## Definition of Done

- [ ] All 3 stories completed with acceptance criteria met
- [ ] Existing homepage functionality verified (visual regression check)
- [ ] Integration points working correctly
- [ ] Documentation updated (README, inline comments)
- [ ] No regression in existing features
- [ ] Playwright tests pass (navigation, page load)
- [ ] TinaCMS admin at `/admin` fully functional

---

## Story Manager Handoff

"Please develop detailed user stories for this brownfield epic. Key considerations:

- This is an enhancement to an existing system running TinaCMS + Next.js 15
- Integration points: `tina/config.ts`, `lib/tina.ts`, `page-client.tsx`, `components/`
- Existing patterns to follow: Framer Motion animations, Tailwind CSS utilities, TypeScript interfaces
- Critical compatibility requirements: Preserve all existing visual design and animations
- Each story must include verification that existing functionality remains intact

The epic should maintain system integrity while delivering full CMS-driven content management for the homepage."

---

**Epic Validation Checklist:**

- [x] Epic can be completed in 1-3 stories maximum
- [x] No architectural documentation is required
- [x] Enhancement follows existing patterns
- [x] Integration complexity is manageable
- [x] Risk to existing system is low
- [x] Rollback plan is feasible
- [x] Testing approach covers existing functionality
