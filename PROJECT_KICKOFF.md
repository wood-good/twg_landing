# TWG Landing Page - Project Kickoff
## Monday, November 11, 2025

---

# 🎯 Mission

**Create a premium web presence for TWG that embodies craftsmanship, sustainability, and generational heritage through elegant design and flawless performance.**

**Timeline:** 2 weeks (November 11-22, 2025)
**Team:** 5-6 developers, 1-2 UI/UX designers, 3 QA testers, 1 PM
**Stack:** Astro + React Islands + Sanity CMS + Cloudflare Pages

---

# 📊 Project Overview

## The Client

**TWG** - Sustainable woodworking manufacturer
- **Industry:** B2B wood products & custom furniture
- **Heritage:** Multi-generational family craftsmen
- **Differentiator:** Complete forest-to-finish cycle control

## The Challenge

Transform TWG from an unknown craftsman workshop into a recognized premium B2B partner through digital presence that communicates quality, heritage, and sustainability.

## The Solution

A **performance-first landing page** featuring:
- Glassmorphism aesthetic inspired by moooi.com
- Forest-themed video storytelling
- Zero JavaScript by default (Astro framework)
- Quarterly content updates via Sanity CMS

---

# 🎨 Design Direction

## Visual Identity

**Inspiration:** moooi.com
**Emotion:** Peace and harmony
**Aesthetic:** Modern minimalism meets natural warmth

## Key Design Elements

### Glassmorphism Effects
```css
backdrop-filter: blur(10px);
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.2);
```

### Color Palette
- **Forest Green:** #2C5530
- **Wood Brown:** #8B4513
- **Earth Tone:** #D2B48C
- **Glass White:** rgba(255,255,255,0.1)

### Hero Video
- 30-second forest loop
- 3-5 scenery transitions
- <2.5MB optimized
- Mobile: Static fallback

---

# 🏗️ Technical Architecture

## Technology Stack

| Layer | Technology | Why |
|-------|-----------|-----|
| **Framework** | Astro 4.0+ | Zero JS by default, perfect for static content |
| **UI Islands** | React 18.3+ | Interactive components only where needed |
| **Styling** | Tailwind + CSS Modules | Rapid development + complex glassmorphism |
| **CMS** | Sanity | Client already has workspace |
| **Hosting** | Cloudflare Pages | Edge delivery, client account exists |
| **Analytics** | Cloudflare Analytics | Privacy-first, no cookies |

## Performance Targets

- **LCP:** <1.5 seconds
- **JavaScript:** <10KB total
- **Lighthouse:** 95+ score
- **Mobile:** 100% responsive

---

# 📄 Site Structure

## Pages & Purpose

### 1. Landing Page
- Hero video with catchphrase
- Product category grid (5 items)
- Trust indicators
- **Goal:** First impression → Interest

### 2. Products Pages
- 5 categories (Finger Joint, Solid Wood, etc.)
- Photo galleries with zoom
- Specifications tables
- **Goal:** Education → Inquiry

### 3. Manufacturing Page
- Generational story
- Craftsman profiles
- Process comparisons
- **Goal:** Build trust through heritage

### 4. Sustainability Page
- Tree-to-tree cycle
- Planting commitments
- Forest stewardship
- **Goal:** ESG compliance verification

---

# 👥 User Stories

## Primary Persona: Procurement Manager

**Sarah, 42, Furniture Retailer**
- Needs sustainable suppliers for ESG goals
- Compares 3-5 vendors online
- Values visual proof of quality
- Decision factors: Quality, sustainability, reliability

## Key User Journeys

1. **Discovery → Trust**
   Landing → Manufacturing → Sustainability

2. **Interest → Research**
   Landing → Products → Specifications

3. **Consideration → Contact**
   Any page → Contact form/phone

## Success Metrics

- **Lead Generation:** 20 qualified/month
- **Conversion:** 5% visitor → lead
- **Engagement:** >3 pages/session
- **Bounce Rate:** <40%

---

# 🚀 Development Plan

## Week 1: Foundation (Nov 11-15)

### Monday-Tuesday (Days 1-2)
**Team:** UI/UX + 2 Devs
- [ ] Finalize design mockups
- [ ] Setup Astro project
- [ ] Configure Sanity schemas
- [ ] Implement design system

### Wednesday-Thursday (Days 3-4)
**Team:** 4 Devs
- [ ] Hero section with video
- [ ] Navigation (desktop + mobile)
- [ ] Products listing page
- [ ] Glassmorphism components

### Friday (Day 5)
**Team:** All devs
- [ ] Product detail pages
- [ ] Gallery interactions
- [ ] Deploy to preview

## Week 2: Completion (Nov 18-22)

### Monday-Tuesday (Days 6-7)
**Team:** 3 Devs + 1 QA
- [ ] Manufacturing page
- [ ] Sustainability page
- [ ] Contact forms
- [ ] Begin testing

### Wednesday (Day 8)
**Team:** 2 Devs + 2 QA
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] Bug fixes

### Thursday (Day 9)
**Team:** All hands
- [ ] Final polish
- [ ] Accessibility audit
- [ ] Content review
- [ ] Client preview

### Friday (Day 10)
**Team:** 1 Dev + PM
- [ ] Client feedback
- [ ] Final adjustments
- [ ] Production deployment
- [ ] Handoff

---

# 📝 Key Narratives

## Manufacturing: "We Are Not a Factory"

**Story Focus:** Three generations of craftsmen
- Knowledge passed through hands, not manuals
- Personal expertise vs automation
- Each piece adjusted for wood's personality
- "Would I put this in my own home?" quality standard

## Sustainability: "We Complete the Circle"

**Story Focus:** Forest-to-forest responsibility
- 3:1 tree planting ratio
- Four generations of forest stewardship
- "Borrowing from our grandchildren"
- Personal promises, not corporate policy

---

# 🎯 Sprint Priorities

## Must Have (MVP)
✅ All 5 pages functional
✅ Mobile responsive
✅ Glassmorphism effects
✅ Hero video
✅ Contact form
✅ SEO basics

## Should Have
⭐ Product gallery with zoom
⭐ A/B testing setup
⭐ Analytics tracking
⭐ Performance >90

## Nice to Have
💫 360° workshop tour
💫 Forest webcam
💫 Advanced animations
💫 Multi-language

---

# 🔧 Developer Guidelines

## Core Principles

1. **Zero JavaScript by Default**
   - Start with Astro components
   - Add React islands only for interactivity

2. **Performance Budget**
   ```javascript
   const LIMITS = {
     javascript: 10KB,
     css: 20KB,
     lcp: 1500ms,
     videoHero: 2.5MB
   };
   ```

3. **Component Architecture**
   ```
   src/components/
   ├── glass/        # Glassmorphism components
   ├── islands/      # React interactive
   └── sections/     # Page sections
   ```

4. **Git Workflow**
   - Feature branches → development
   - Daily deploys to preview
   - development → main when stable

---

# 📋 Definition of Done

## Code Complete When:
- [ ] Follows coding standards
- [ ] TypeScript - no `any`
- [ ] Responsive all breakpoints
- [ ] Lighthouse >90
- [ ] Cross-browser tested
- [ ] Accessibility WCAG 2.1 AA
- [ ] Unit tests pass
- [ ] Code reviewed
- [ ] Deployed to preview

## Page Complete When:
- [ ] Content from Sanity
- [ ] SEO meta tags
- [ ] Performance budget met
- [ ] Mobile tested
- [ ] QA approved
- [ ] Client reviewed

---

# 🚦 Risk Mitigation

## Technical Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| Glassmorphism performance | High | Progressive enhancement, fallbacks |
| Video optimization | Medium | Multiple formats, poster images |
| Content delays | High | Placeholder content ready |
| Browser compatibility | Medium | Extensive testing, graceful degradation |

## Mitigation Strategies

1. **Daily Progress Reviews**
   - 9 AM standup
   - 5 PM preview deploy
   - Slack updates

2. **Parallel Workstreams**
   - Design ahead of dev
   - QA tests completed features
   - Content populated async

3. **Clear Escalation**
   - Technical: Lead developer
   - Design: UI/UX lead
   - Business: PM → Client

---

# 📚 Resources

## Documentation

All docs in `/docs/`:
- `architecture.md` - Technical details
- `coding-standards.md` - Development rules
- `prd.md` - Full requirements
- `product-interactions.md` - Interaction specs
- `manufacturing-page-concept.md` - Content guide
- `sustainability-page-concept.md` - Content guide

## Key Links

- **Preview:** preview.twg-landing.pages.dev
- **Production:** twg-landing.com (after launch)
- **Sanity Studio:** [Will be provided]
- **GitHub:** [Repository URL]
- **Slack:** #twg-landing-dev

## Design References

- **Primary:** moooi.com
- **Sustainability:** interface.com
- **B2B Products:** hermanmiller.com

---

# 🎬 Day 1 Action Items

## Morning (9 AM - 12 PM)

### All Hands Meeting (30 min)
- [ ] Review this deck
- [ ] Q&A session
- [ ] Confirm roles

### Breakout Sessions
- **Design Team:** Finalize mockups
- **Dev Team:** Environment setup
- **QA Team:** Test plan creation
- **PM:** Client check-in

## Afternoon (1 PM - 5 PM)

### Development Start
- [ ] Repository setup (Team Lead)
- [ ] Astro project init (Dev 1-2)
- [ ] Sanity schema creation (Dev 3)
- [ ] Design system setup (Dev 4)
- [ ] CI/CD pipeline (Dev 5)

### End of Day
- [ ] Preview environment live
- [ ] Basic project structure complete
- [ ] Team sync at 4:30 PM
- [ ] Deploy status to Slack

---

# 🏁 Success Criteria

## Project Success =

✅ **On Time:** Launched by November 22
✅ **On Quality:** Lighthouse >90, zero critical bugs
✅ **On Brand:** Client loves the aesthetic
✅ **On Performance:** <1.5s load time
✅ **On Business:** Lead generation ready

## Team Success =

✅ **Collaboration:** Smooth handoffs
✅ **Communication:** Daily progress visible
✅ **Quality:** Code we're proud of
✅ **Learning:** Astro expertise gained
✅ **Satisfaction:** Client testimonial worthy

---

# 💬 Questions?

## Common Concerns Addressed

**Q: Why Astro instead of Next.js?**
A: Content updates quarterly, not daily. Zero JS = perfect performance.

**Q: How do we handle glassmorphism browser support?**
A: Progressive enhancement. Looks great everywhere, amazing in modern browsers.

**Q: What about mobile video?**
A: Static poster image <768px. No bandwidth waste.

**Q: Client changes during development?**
A: Daily preview deploys = early feedback = fewer surprises.

**Q: Post-launch support?**
A: Quarterly content updates only. Static site = minimal maintenance.

---

# 🚀 Let's Build Something Beautiful!

**Remember:**
- We're not building a website, we're crafting a digital experience
- Every decision should support: Premium, Sustainable, Crafted
- Performance is a feature
- Simplicity is sophisticated

## Team Mantras

1. "Zero JavaScript by default"
2. "Mobile-first always"
3. "Performance is non-negotiable"
4. "Test early, test often"
5. "When in doubt, check the PRD"

---

# 📞 Key Contacts

| Role | Name | Contact | Responsibility |
|------|------|---------|----------------|
| PM | [Name] | [Slack/Email] | Client communication, timeline |
| Tech Lead | [Name] | [Slack] | Architecture decisions |
| Design Lead | [Name] | [Slack] | Visual consistency |
| QA Lead | [Name] | [Slack] | Quality assurance |
| Client | TWG Rep | [Email] | Approvals |

## Escalation Path

1. Try to solve within team
2. Escalate to Team Lead
3. Escalate to PM
4. Client consultation if needed

---

# ✅ Pre-Launch Checklist

## Technical
- [ ] All pages responsive
- [ ] Lighthouse >90 all pages
- [ ] Browser testing complete
- [ ] Forms working
- [ ] Analytics configured
- [ ] SEO meta tags set
- [ ] Sitemap generated
- [ ] SSL certificate active

## Content
- [ ] All text proofread
- [ ] Images optimized
- [ ] Videos compressed
- [ ] Alt text complete
- [ ] Links verified

## Business
- [ ] Client approval
- [ ] DNS configured
- [ ] Backup plan ready
- [ ] Monitoring enabled
- [ ] Handoff docs complete

---

**Ready to craft something extraordinary?**

Let's begin! 🎯