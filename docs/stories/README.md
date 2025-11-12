# TWG Landing Page - Epic Overview

**Project:** TWG Landing Page (Greenfield)
**Timeline:** 2 weeks (10 working days)
**Team Start Date:** Monday
**Tech Stack:** Astro + React Islands, Sanity CMS, Cloudflare Pages

---

## Executive Summary

This document provides a comprehensive breakdown of all 5 epics for the TWG Landing Page project. Each epic has been decomposed into detailed user stories with acceptance criteria, technical specifications, and time estimates to enable your development team to start work immediately on Monday.

**Total Estimated Effort:** 128 hours across 5 epics
**Recommended Team Allocation:** 5-6 developers, 3 QA testers

---

## Epic Roadmap

### Sprint 1 - Week 1 (Days 1-5)

**Focus:** Core Foundation & First Impressions

| Epic | Priority | Effort | Stories | Status |
|------|----------|--------|---------|--------|
| [Epic 1: First Impression](./epic-01-first-impression.md) | P0 - Critical | 32h | 5 | Ready |
| [Epic 2: Product Discovery](./epic-02-product-discovery.md) | P0 - Critical | 36h | 5 | Ready |

**Week 1 Deliverables:**
- ✅ Hero section with video background
- ✅ Glassmorphism navigation header
- ✅ Product grid and detail pages
- ✅ Image gallery with lightbox
- ✅ Sanity CMS schemas configured

---

### Sprint 2 - Week 2 (Days 6-10)

**Focus:** Content Pages & Contact

| Epic | Priority | Effort | Stories | Status |
|------|----------|--------|---------|--------|
| [Epic 3: Sustainability Verification](./epic-03-sustainability-verification.md) | P0 - Critical | 24h | 5 | Ready |
| [Epic 4: Manufacturing Transparency](./epic-04-manufacturing-transparency.md) | P1 - High | 20h | 5 | Ready |
| [Epic 5: Contact and Inquiry](./epic-05-contact-inquiry.md) | P0 - Critical | 16h | 4 | Ready |

**Week 2 Deliverables:**
- ✅ Sustainability page with tree-to-tree cycle
- ✅ Manufacturing process pages
- ✅ Contact form with email integration
- ✅ Footer with contact information
- ✅ Full site testing and polish

---

## Epic Details

### Epic 1: First Impression
**Goal:** Create immersive hero section with video and glassmorphism navigation
**Priority:** P0 - Critical
**Effort:** 32 hours (4 days)
**Sprint:** Week 1

**User Stories:**
1. Video Background with Fallback Strategy (12h)
2. Glassmorphism Header Navigation (8h)
3. Reusable Glass Card Component (4h)
4. Hero Content Overlay (6h)
5. Sanity CMS Schema for Site Settings (2h)

**Key Success Metrics:**
- Hero loads in <1.5s
- Video creates emotional connection in 5s
- Glass effects work across all browsers

**[View Full Epic Details →](./epic-01-first-impression.md)**

---

### Epic 2: Product Discovery
**Goal:** Enable B2B clients to explore 5 product categories
**Priority:** P0 - Critical
**Effort:** 36 hours (4.5 days)
**Sprint:** Week 1-2

**User Stories:**
1. Product Category Schema in Sanity (4h)
2. Products Grid Page (10h)
3. Product Card Component (8h)
4. Product Detail Page (Dynamic Route) (10h)
5. Image Gallery with Lightbox (4h)

**Key Success Metrics:**
- All 5 categories visible
- Product detail pages load <1.2s
- A/B test variants implemented
- Click-through rate >15%

**[View Full Epic Details →](./epic-02-product-discovery.md)**

---

### Epic 3: Sustainability Verification
**Goal:** Build trust through transparent sustainability practices
**Priority:** P0 - Critical
**Effort:** 24 hours (3 days)
**Sprint:** Week 2

**User Stories:**
1. Sustainability Page Schema in Sanity (3h)
2. Sustainability Hero Section (5h)
3. Tree-to-Tree Cycle Visual Diagram (8h)
4. Sustainability Practices Section (5h)
5. Impact Metrics & Certifications (3h)

**Key Success Metrics:**
- Clear tree-to-tree cycle explanation
- Visual proof of practices
- Page engagement time >45s
- Load time <1.0s

**[View Full Epic Details →](./epic-03-sustainability-verification.md)**

---

### Epic 4: Manufacturing Transparency
**Goal:** Showcase manufacturing process and quality control
**Priority:** P1 - High
**Effort:** 20 hours (2.5 days)
**Sprint:** Week 2

**User Stories:**
1. Manufacturing Page Schema in Sanity (3h)
2. Manufacturing Page Layout (5h)
3. Manufacturing Process Steps Component (6h)
4. Quality Control Highlights Section (4h)
5. Equipment & Technology Showcase (2h) - Optional

**Key Success Metrics:**
- Process overview clearly displayed
- Highlights 100% cycle control
- Page engagement time >40s
- Load time <1.0s

**[View Full Epic Details →](./epic-04-manufacturing-transparency.md)**

---

### Epic 5: Contact and Inquiry
**Goal:** Enable easy contact through form and persistent footer
**Priority:** P0 - Critical
**Effort:** 16 hours (2 days)
**Sprint:** Week 2

**User Stories:**
1. Contact Information Schema in Sanity (2h)
2. Footer Component with Contact Information (4h)
3. Contact Page with Inquiry Form (6h)
4. Contact Form API Endpoint (4h)

**Key Success Metrics:**
- Contact info visible on all pages
- Form submission success >95%
- Response time expectation set
- Load time <0.8s

**[View Full Epic Details →](./epic-05-contact-inquiry.md)**

---

## Team Allocation Recommendations

### Week 1 - Sprint 1

**Frontend Team (4 developers):**
- **Developer 1:** Epic 1 - Video Background, Hero Content (Stories 1.1, 1.4)
- **Developer 2:** Epic 1 - Navigation, Glass Components (Stories 1.2, 1.3)
- **Developer 3:** Epic 2 - Products Grid, Product Card (Stories 2.2, 2.3)
- **Developer 4:** Epic 2 - Product Detail Pages, Gallery (Stories 2.4, 2.5)

**Backend Team (1 developer):**
- Epic 1 - Sanity Site Settings (Story 1.5)
- Epic 2 - Product Category Schema (Story 2.1)
- Sanity studio configuration and setup

**QA Team (3 testers):**
- Setup test environments
- Create E2E test scripts for Epic 1 & 2
- Manual testing as features complete

---

### Week 2 - Sprint 2

**Frontend Team (4 developers):**
- **Developer 1:** Epic 3 - Sustainability Page (Stories 3.2, 3.3, 3.4)
- **Developer 2:** Epic 4 - Manufacturing Pages (Stories 4.2, 4.3, 4.4)
- **Developer 3:** Epic 5 - Footer & Contact Page (Stories 5.2, 5.3)
- **Developer 4:** Epic 3 - Metrics, Certifications, Polish (Story 3.5 + Epic 3 polish)

**Backend Team (1 developer):**
- Epic 3 - Sustainability Schema (Story 3.1)
- Epic 4 - Manufacturing Schema (Story 4.1)
- Epic 5 - Contact Schema & API (Stories 5.1, 5.4)
- Email service integration

**QA Team (3 testers):**
- Full regression testing
- Cross-browser testing
- Performance testing
- Accessibility audits

---

## Critical Dependencies

### External Dependencies
| Dependency | Required By | Impact | Mitigation |
|------------|-------------|--------|------------|
| Video assets (forest scenery) | Epic 1 | High | Use placeholder videos initially |
| Product images (5 categories) | Epic 2 | High | Use stock images initially |
| Product descriptions & specs | Epic 2 | Medium | Create placeholder content |
| Sustainability content | Epic 3 | Medium | Use lorem ipsum, mark as "Coming Soon" |
| Manufacturing photography | Epic 4 | Medium | Use stock factory images initially |
| Email service account (Resend) | Epic 5 | Medium | Setup in parallel, fallback to mailto |
| Company logo & brand assets | Epic 1 | Low | Use temporary logo |

### Internal Dependencies
| Dependency | Required By | Status |
|------------|-------------|--------|
| Astro project initialized | All Epics | ⏳ Setup on Day 1 |
| Tailwind CSS configured | All Epics | ⏳ Setup on Day 1 |
| Sanity CMS workspace | All Epics | ⏳ Setup on Day 1 |
| Cloudflare Pages account | Deployment | ⏳ Setup on Day 1 |
| GitHub repository | All Epics | ⏳ Setup on Day 1 |

---

## Day 1 Setup Checklist

Before the team starts on epics, complete these setup tasks:

### Repository Setup
- [ ] Create GitHub repository
- [ ] Initialize Astro project (`npm create astro@latest`)
- [ ] Configure Tailwind CSS
- [ ] Setup TypeScript configuration
- [ ] Configure ESLint and Prettier
- [ ] Setup package manager (pnpm)

### Sanity CMS Setup
- [ ] Create Sanity workspace
- [ ] Initialize Sanity studio
- [ ] Configure Sanity client in Astro
- [ ] Setup environment variables

### Cloudflare Pages Setup
- [ ] Create Cloudflare Pages project
- [ ] Connect GitHub repository
- [ ] Configure build settings (build command: `pnpm build`, output: `dist`)
- [ ] Setup preview deployments

### CI/CD Pipeline
- [ ] Create GitHub Actions workflow
- [ ] Configure automated deployments
- [ ] Setup testing pipeline

### Team Onboarding
- [ ] Share repository access
- [ ] Share Sanity workspace access
- [ ] Share design assets (Figma, brand guidelines)
- [ ] Review architecture document
- [ ] Review epic documents
- [ ] Assign initial stories

**Estimated Setup Time:** 4-6 hours (can be done before Monday)

---

## Success Metrics & KPIs

### Technical Metrics
- **Performance:**
  - Lighthouse Performance Score: >90
  - LCP (Largest Contentful Paint): <1.5s
  - FID (First Input Delay): <50ms
  - CLS (Cumulative Layout Shift): <0.05

- **Accessibility:**
  - Lighthouse Accessibility Score: 100
  - WCAG 2.1 Level AA compliance
  - Keyboard navigation fully functional

- **SEO:**
  - Lighthouse SEO Score: 100
  - All pages have meta tags
  - Sitemap generated automatically

### Business Metrics (Post-Launch)
- Page views by source
- Contact form submissions
- Product category engagement
- Video engagement rate
- Time on sustainability page

---

## Risk Management

### High Risk Items
| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Content not ready by launch | High | Medium | Use placeholder content, phase delivery |
| Video assets too large | High | Medium | Aggressive compression, fallback strategy |
| Team unfamiliar with Astro | Medium | Low | Provide learning resources, pair programming |
| Email service issues | Medium | Low | Test early, have mailto fallback |

### Medium Risk Items
| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Design changes mid-sprint | Medium | Medium | Lock designs before sprint, use change control |
| A/B testing complexity | Medium | Low | Simplify to feature flag, defer analytics |
| Sanity schema changes | Low | Medium | Plan schemas upfront, use migrations |

---

## Testing Strategy

### Unit Tests (Vitest)
- All Astro components have prop validation tests
- Utility functions covered
- Target coverage: >80%

### E2E Tests (Playwright)
- User journey: Home → Products → Product Detail → Contact
- Form submission flows
- Navigation across all pages
- Mobile responsive tests
- Cross-browser tests (Chrome, Safari, Firefox)

### Visual Regression (Percy - Optional)
- Hero section consistency
- Product card layouts
- Glass effects rendering

### Performance Tests (Lighthouse CI)
- Run on every PR
- Fail build if scores drop below thresholds
- Monitor Core Web Vitals

---

## Definition of Done (Project-Wide)

A story/epic is considered "Done" when:

- [ ] All acceptance criteria met
- [ ] Code reviewed and approved
- [ ] Unit tests written and passing
- [ ] E2E tests written and passing
- [ ] Manual QA sign-off
- [ ] Accessibility audit passed
- [ ] Performance metrics met
- [ ] Deployed to preview environment
- [ ] Product Owner approval
- [ ] Documentation updated

---

## Launch Checklist

Before production deployment:

### Technical
- [ ] All 5 epics completed
- [ ] All tests passing (unit + E2E)
- [ ] Performance budgets met
- [ ] Cross-browser testing complete
- [ ] Mobile responsive testing complete
- [ ] SEO meta tags verified
- [ ] Analytics configured
- [ ] Error tracking (Sentry) configured
- [ ] SSL certificate configured
- [ ] Custom domain configured

### Content
- [ ] All placeholder content replaced
- [ ] All images optimized
- [ ] Copy proofread and approved
- [ ] Legal pages (Privacy, Terms) added
- [ ] Contact email verified

### Business
- [ ] Stakeholder sign-off
- [ ] Launch plan documented
- [ ] Support plan documented
- [ ] Monitoring alerts configured

---

## Resources

### Documentation
- [Astro Documentation](https://docs.astro.build)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages)
- [Project Architecture Document](../architecture.md)
- [Project PRD](../prd/index.md)

### Design Assets
- Brand guidelines: `[Link to be provided]`
- Figma designs: `[Link to be provided]`
- Image assets: `[Link to be provided]`

### Communication
- Daily standup: `[Time TBD]`
- Sprint planning: `[Time TBD]`
- Retrospective: `[Time TBD]`
- Slack channel: `[Channel TBD]`

---

## Questions or Issues?

If you have questions about any epic or story:

1. **Technical questions:** Review the [Architecture Document](../architecture.md) first
2. **Product questions:** Review the [PRD](../prd/index.md) first
3. **Blockers:** Escalate immediately to Product Manager
4. **Scope changes:** Discuss with PM before implementing

---

## Quick Reference

| Epic | Priority | Effort | Key Deliverable |
|------|----------|--------|-----------------|
| Epic 1 | P0 | 32h | Hero section with video |
| Epic 2 | P0 | 36h | Product catalog |
| Epic 3 | P0 | 24h | Sustainability page |
| Epic 4 | P1 | 20h | Manufacturing page |
| Epic 5 | P0 | 16h | Contact form |

**Total:** 128 hours across 24 stories

---

**Document Version:** 1.0
**Last Updated:** 2025-11-07
**Created By:** John (Product Manager)
**Status:** Ready for Sprint Planning ✅
