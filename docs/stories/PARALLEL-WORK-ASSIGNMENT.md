# TWG Landing Page - Parallel Work Assignment Matrix

**Team:** 6 Developers + 3 QA
**Timeline:** 2 weeks (10 working days)
**Start Date:** Monday

---

## Team Structure

### Development Team
- **Dev 1 (Frontend):** Video/Media specialist
- **Dev 2 (Frontend):** Component architecture specialist
- **Dev 3 (Frontend):** Page layout specialist
- **Dev 4 (Frontend):** Interactive components specialist
- **Dev 5 (Backend):** Sanity CMS specialist
- **Dev 6 (Backend/Fullstack):** API and integration specialist

### QA Team
- **QA 1:** E2E testing & cross-browser testing
- **QA 2:** Performance testing & accessibility audits
- **QA 3:** Manual testing & regression testing

---

## Week 1: Sprint 1 (Epic 1 + Epic 2)

### Day 1-2 (Monday-Tuesday): Foundation

| Developer | Story | Branch | Effort | Dependencies |
|-----------|-------|--------|--------|--------------|
| **Dev 5** | Story 1.5: Sanity Site Settings | `story-1.5-sanity-site-settings` | 2h | None - START FIRST |
| **Dev 2** | Story 1.3: Glass Card Component | `story-1.3-glass-card-component` | 4h | None - START FIRST |
| **Dev 1** | Story 1.1: Video Background | `story-1.1-video-background` | 12h | None - START FIRST |
| **Dev 6** | Story 2.1: Product Category Schema | `story-2.1-product-category-schema` | 4h | Story 1.5 complete |
| **Dev 2** | Story 1.2: Glassmorphism Header | `story-1.2-glassmorphism-header` | 8h | Story 1.3, 1.5 complete |
| **Dev 3** | Story 2.2: Products Grid Page | `story-2.2-products-grid-page` | 10h | Story 2.1 complete |

**QA Team:**
- **QA 1:** Setup E2E test environment, Playwright configuration
- **QA 2:** Setup Lighthouse CI, performance baselines
- **QA 3:** Review stories, prepare test cases

---

### Day 3-4 (Wednesday-Thursday): Content & Interaction

| Developer | Story | Branch | Effort | Dependencies |
|-----------|-------|--------|--------|--------------|
| **Dev 1** | Story 1.4: Hero Content Overlay | `story-1.4-hero-content-overlay` | 6h | Story 1.1, 1.3, 1.5 |
| **Dev 3** | Story 2.3: Product Card Component | `story-2.3-product-card-component` | 8h | Story 1.3, 2.1 |
| **Dev 4** | Story 2.4: Product Detail Page | `story-2.4-product-detail-page` | 10h | Story 2.1, 2.3 |
| **Dev 4** | Story 2.5: Image Gallery/Lightbox | `story-2.5-image-gallery-lightbox` | 4h | Story 2.4 |
| **Dev 5** | Epic 3 Prep: Sustainability Schema | `story-3.1-sustainability-schema` | 3h | None |
| **Dev 6** | Epic 4 Prep: Manufacturing Schema | `story-4.1-manufacturing-schema` | 3h | None |

**QA Team:**
- **QA 1:** Test Story 1.1, 1.2, 1.3 (E2E tests)
- **QA 2:** Performance testing on Hero section
- **QA 3:** Manual testing Epic 1 stories, cross-browser

---

### Day 5 (Friday): Epic 1 & 2 Completion

| Developer | Task | Branch | Notes |
|-----------|------|--------|-------|
| **All Devs** | Bug fixes from QA | Various story branches | Address QA feedback |
| **Dev 1** | Epic 1 polish & review | `epic-01-first-impression` | Final touches |
| **Dev 3** | Epic 2 polish & review | `epic-02-product-discovery` | Final touches |
| **All Devs** | Code review | N/A | PR reviews for all stories |

**QA Team:**
- **QA 1:** Full E2E regression suite on Epic 1 & 2
- **QA 2:** Performance audit, Lighthouse scores
- **QA 3:** Final sign-off on Epic 1 & 2

**End of Week Actions:**
- Merge all completed stories to epic branches
- Create PR: `epic-01-first-impression` → `development`
- Create PR: `epic-02-product-discovery` → `development`
- Deploy to preview environment

---

## Week 2: Sprint 2 (Epic 3, 4, 5)

### Day 6-7 (Monday-Tuesday): Content Pages

| Developer | Story | Branch | Effort | Dependencies |
|-----------|-------|--------|--------|--------------|
| **Dev 1** | Story 3.2: Sustainability Hero | `story-3.2-sustainability-hero` | 5h | Story 3.1 |
| **Dev 1** | Story 3.3: Tree-to-Tree Cycle Diagram | `story-3.3-tree-cycle-diagram` | 8h | Story 3.2 |
| **Dev 2** | Story 3.4: Sustainability Practices | `story-3.4-sustainability-practices` | 5h | Story 3.1 |
| **Dev 2** | Story 3.5: Impact Metrics & Certs | `story-3.5-impact-metrics-certs` | 3h | Story 3.4 |
| **Dev 3** | Story 4.2: Manufacturing Page Layout | `story-4.2-manufacturing-layout` | 5h | Story 4.1 |
| **Dev 3** | Story 4.3: Process Steps Component | `story-4.3-process-steps` | 6h | Story 4.2 |
| **Dev 4** | Story 4.4: Quality Control Section | `story-4.4-quality-control` | 4h | Story 4.3 |
| **Dev 5** | Story 5.1: Contact Info Schema | `story-5.1-contact-info-schema` | 2h | None |
| **Dev 6** | Story 5.2: Footer Component | `story-5.2-footer-component` | 4h | Story 5.1 |

**QA Team:**
- **QA 1:** Test Week 1 fixes, prepare Week 2 test cases
- **QA 2:** Continued performance monitoring
- **QA 3:** Content validation for Sustainability/Manufacturing

---

### Day 8-9 (Wednesday-Thursday): Contact & Polish

| Developer | Story | Branch | Effort | Dependencies |
|-----------|-------|--------|--------|--------------|
| **Dev 4** | Story 5.3: Contact Page & Form | `story-5.3-contact-page-form` | 6h | Story 5.1 |
| **Dev 6** | Story 5.4: Contact Form API | `story-5.4-contact-form-api` | 4h | Story 5.3 |
| **Dev 1** | Epic 3 polish | `epic-03-sustainability-verification` | - | All E3 stories |
| **Dev 2** | Epic 4 polish | `epic-04-manufacturing-transparency` | - | All E4 stories |
| **Dev 3** | Epic 5 polish | `epic-05-contact-inquiry` | - | All E5 stories |
| **Dev 5** | Content validation & Sanity polish | Various | - | All schemas |

**QA Team:**
- **QA 1:** E2E tests for Epic 3, 4, 5
- **QA 2:** Full performance audit across all pages
- **QA 3:** Comprehensive manual testing, all user flows

---

### Day 10 (Friday): Final Integration & Launch Prep

| Developer | Task | Branch | Notes |
|-----------|------|--------|-------|
| **All Devs** | Bug fixes from QA | Various | Critical fixes only |
| **Dev 1-3** | Cross-browser testing fixes | Various | Safari, Firefox issues |
| **Dev 4-6** | Final integration testing | `development` | End-to-end validation |
| **All Devs** | Documentation updates | N/A | README, deployment docs |
| **All Devs** | Code review | N/A | Final PR reviews |

**QA Team:**
- **QA 1:** Final E2E regression suite
- **QA 2:** Final performance validation (all metrics green)
- **QA 3:** UAT sign-off, launch checklist verification

**End of Week Actions:**
- Merge all Epic 3, 4, 5 to development
- Final deployment to preview environment
- Stakeholder review
- Prepare production release

---

## Dependency Matrix

### Epic 1 Dependencies
```
Story 1.5 (Sanity) ──┬─> Story 1.2 (Header)
                     └─> Story 1.4 (Hero Content)

Story 1.3 (GlassCard) ─┬─> Story 1.2 (Header)
                       └─> Story 1.4 (Hero Content)

Story 1.1 (Video) ─────> Story 1.4 (Hero Content)
```

### Epic 2 Dependencies
```
Story 2.1 (Schema) ────┬─> Story 2.2 (Grid)
                       └─> Story 2.3 (Card)

Story 2.3 (Card) ──────> Story 2.4 (Detail Page)

Story 2.4 (Detail) ────> Story 2.5 (Gallery)
```

### Epic 3-5 Dependencies
- Minimal cross-dependencies
- Can be worked in parallel
- Schema work (5, 6) enables frontend work (1-4)

---

## Parallel Work Rules

### ✅ Safe to Work in Parallel

**Same Epic, Different Areas:**
- Story 1.1 (Video) + Story 1.3 (Component)
- Story 2.2 (Grid) + Story 2.4 (Detail)
- Story 3.2 (Hero) + Story 3.4 (Practices)

**Different Epics:**
- Epic 1 + Epic 2 (Week 1)
- Epic 3 + Epic 4 + Epic 5 (Week 2)

**Backend + Frontend:**
- Schema work (Dev 5, 6) + Component work (Dev 1-4)

### ⚠️ Sequential Work Required

**Must Complete First:**
- Story 1.5 (Sanity) before Story 1.2 (Header)
- Story 1.3 (GlassCard) before any components using it
- Story 2.1 (Product Schema) before Story 2.2 (Grid)

---

## Communication & Handoffs

### Daily Standup Structure (15 min)
**Each dev shares:**
1. Yesterday: What story completed/progressed
2. Today: What story working on + branch name
3. Blockers: Any dependencies waiting

**QA shares:**
1. Stories tested yesterday
2. Bugs found (severity)
3. Stories ready for testing today

### Handoff Process

**Story Complete → QA:**
1. Dev merges story to epic branch
2. Dev posts in Slack: "Story X.Y ready for QA - branch: story-x.y-name"
3. QA picks up within 2 hours
4. QA runs test checklist from story doc
5. QA either approves or logs bugs

**Epic Complete → Preview:**
1. All stories in epic branch merged
2. Epic lead creates PR: epic → development
3. Team code review (min 2 approvals)
4. Merge to development
5. Auto-deploy to preview environment
6. QA validates on preview

---

## Branch Protection & Merge Strategy

### Branch Hierarchy Reminder
```
main (PROTECTED - PM only)
└── development (preview environment)
    ├── epic-01-first-impression
    │   ├── story-1.1-video-background
    │   ├── story-1.2-glassmorphism-header
    │   ├── story-1.3-glass-card-component
    │   ├── story-1.4-hero-content-overlay
    │   └── story-1.5-sanity-site-settings
    ├── epic-02-product-discovery
    │   ├── story-2.1-product-category-schema
    │   ├── story-2.2-products-grid-page
    │   ├── story-2.3-product-card-component
    │   ├── story-2.4-product-detail-page
    │   └── story-2.5-image-gallery-lightbox
    └── epic-03/04/05... (similar structure)
```

### Merge Permissions
- **Story → Epic:** Any dev can merge after 1 approval
- **Epic → Development:** Epic lead + 1 other approval required
- **Development → Main:** PM ONLY (manual review)

---

## Conflict Resolution

### Likely Conflict Areas
1. **Global styles** (src/styles/global.css)
2. **Layout components** (Header, Footer)
3. **Sanity schemas** (schema registration)
4. **Package.json** (dependencies)

### Conflict Prevention
- Dev 2 owns GlassCard component (others use, don't modify)
- Dev 5 owns Sanity schema index (others add files, coordinate merge)
- Use CSS modules for component-specific styles
- Coordinate package installations in standup

### Conflict Resolution Process
1. Pull latest from epic branch before starting work
2. Rebase story branch daily: `git rebase epic-XX-name`
3. If conflict occurs: ping dev who owns the conflicting file
4. Pair to resolve conflict (don't guess)

---

## Emergency Protocols

### Story Blocked
1. Dev posts in Slack immediately
2. Blocker resolved within 2 hours OR
3. Dev pivots to next available story

### Epic Delayed
1. PM notified immediately
2. Team evaluates scope reduction
3. Move non-critical stories to Phase 2

### Production Bug (Post-Launch)
1. Create hotfix branch from main
2. Fix applied and tested
3. Merge to main AND development
4. Deploy immediately

---

## Success Metrics

### Development Velocity
- **Target:** 6-8 stories completed per day (team average)
- **Measure:** Track in daily standup

### Quality Metrics
- **Bug Rate:** <2 bugs per story
- **First-Time Pass:** >80% stories pass QA first time
- **Code Review Time:** <4 hours from PR creation to merge

### Performance Metrics
- All pages: Lighthouse score >90
- Hero section LCP: <1.5s
- Product pages LCP: <1.2s

---

## Quick Reference

### Story Branch Naming
```bash
story-{epic}.{story}-{name}

Examples:
story-1.1-video-background
story-2.3-product-card-component
story-5.4-contact-form-api
```

### Commit Message Format
```bash
feat(story-1.1): add video autoplay functionality
fix(story-2.3): correct image aspect ratio
test(story-3.2): add e2e tests for hero section
docs(story-1.5): update Sanity schema documentation
```

### PR Title Format
```bash
[Story X.Y] Brief description

Examples:
[Story 1.1] Implement hero video with responsive fallbacks
[Story 2.3] Create reusable product card component
[Story 5.4] Add contact form API endpoint
```

---

## Developer Assignments Summary

| Developer | Primary Focus | Stories | Total Hours |
|-----------|---------------|---------|-------------|
| Dev 1 | Video, Media, Sustainability | 1.1, 1.4, 3.2, 3.3 | 31h |
| Dev 2 | Components, Design System | 1.2, 1.3, 3.4, 3.5 | 28h |
| Dev 3 | Page Layouts, Product Pages | 2.2, 2.3, 4.2, 4.3 | 29h |
| Dev 4 | Interactive Components | 2.4, 2.5, 4.4, 5.3 | 24h |
| Dev 5 | Backend, Sanity CMS | 1.5, 2.1, 3.1, 5.1 | 11h + schemas |
| Dev 6 | Backend, APIs, Integration | 4.1, 5.2, 5.4 | 11h + integration |

**Note:** Hours are estimates for primary stories. Developers will also spend time on bug fixes, code review, and polish.

---

## QA Assignments Summary

| QA | Primary Focus | Responsibilities |
|----|---------------|------------------|
| QA 1 | E2E Testing | Playwright tests, user flows, cross-browser |
| QA 2 | Performance | Lighthouse CI, Core Web Vitals, optimization |
| QA 3 | Manual & Regression | Comprehensive testing, UAT, sign-off |

---

**Document Version:** 1.0
**Last Updated:** 2025-11-07
**Status:** Ready for Sprint Planning ✅
