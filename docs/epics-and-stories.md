# Epics and User Stories
## TWG Landing Page - Webflow Implementation

**Version:** 1.0
**Date:** November 10, 2025
**Sprint Duration:** 2 weeks (Nov 7-21, 2025)
**Platform:** Webflow + Cloudflare

---

## Epic Overview

| Epic ID | Epic Name | User Type | Priority | Sprint | Story Points |
|---------|-----------|-----------|----------|--------|--------------|
| **EPIC-01** | First Impression | End User | P0 | 1 | 21 |
| **EPIC-02** | Product Discovery | End User | P0 | 1-2 | 34 |
| **EPIC-03** | Sustainability Verification | End User | P1 | 2 | 13 |
| **EPIC-04** | Manufacturing Transparency | End User | P1 | 2 | 13 |
| **EPIC-05** | Contact and Inquiry | End User | P0 | 2 | 8 |
| **EPIC-06** | Platform Setup | Development | P0 | 1 | 13 |
| **EPIC-07** | Performance & SEO | Development | P0 | 2 | 13 |
| **EPIC-08** | Deployment & Launch | Development | P0 | 2 | 8 |

**Total Story Points:** 123
**Estimated Timeline:** 2 weeks (10 working days)

---

# USER-FACING EPICS

## EPIC-01: First Impression

**As a** procurement manager
**I want** to immediately understand TWG's value proposition
**So that** I can quickly assess if they're worth investigating

### Acceptance Criteria:
- Hero section loads in <1.5 seconds
- Catchphrase clearly communicates sustainability + quality
- Video creates emotional connection within 5 seconds
- Navigation is intuitive and visible

### User Stories

#### US-01.1: Hero Video Background
**As a** potential B2B client
**I want** to see immersive forest scenery when I land on the site
**So that** I immediately connect with TWG's sustainability focus

**Acceptance Criteria:**
- [ ] 30-second forest scenery video loops continuously
- [ ] Video includes 3 different scenes with smooth transitions
- [ ] No audio plays (accessibility + performance)
- [ ] Static poster image fallback for mobile (<768px)
- [ ] Reduced quality video for tablet (768-1024px)
- [ ] Full quality video for desktop (>1024px)
- [ ] Video loads in <2 seconds on desktop
- [ ] Fallback image loads in <1 second on mobile

**Implementation Notes:**
- Upload video to Webflow Asset Manager
- Configure responsive video element with breakpoints
- Test on Safari, Chrome, Firefox, Edge
- Compress video to <2.5MB

**Story Points:** 5
**Priority:** P0
**Sprint:** 1

---

#### US-01.2: Hero Content Overlay
**As a** visitor
**I want** to see TWG's logo and catchphrase immediately
**So that** I understand who they are and what they do

**Acceptance Criteria:**
- [ ] TWG logo visible in hero section
- [ ] Catchphrase text (10-15 words) clearly readable
- [ ] Glass-morphism effect on text container (backdrop-blur: 10-15px)
- [ ] Text contrast ratio >4.5:1 (WCAG AA)
- [ ] Responsive typography (clamp function)
- [ ] Text container doesn't overlap on mobile
- [ ] Optional CTA button styled consistently

**Implementation Notes:**
- Use Webflow visual designer for positioning
- Apply glass-morphism CSS via Webflow Interactions
- Test readability on video backgrounds
- Ensure browser fallbacks (Safari)

**Story Points:** 3
**Priority:** P0
**Sprint:** 1

---

#### US-01.3: Navigation System (Desktop)
**As a** visitor
**I want** to navigate between pages easily
**So that** I can explore TWG's offerings

**Acceptance Criteria:**
- [ ] Persistent glass-morphism header across all pages
- [ ] Logo + company name on left
- [ ] Menu items: Home, Products, Manufacturing, Sustainability, Contact
- [ ] Smooth hover effects (200-300ms transitions)
- [ ] Active page indication
- [ ] Sticky navigation on scroll
- [ ] Navigation loads instantly (no CLS)

**Implementation Notes:**
- Create Webflow symbol for reusable header
- Use Webflow Interactions for hover effects
- Configure sticky positioning
- Add active state styling

**Story Points:** 5
**Priority:** P0
**Sprint:** 1

---

#### US-01.4: Navigation System (Mobile)
**As a** mobile visitor
**I want** to access navigation via hamburger menu
**So that** I can browse the site on my phone

**Acceptance Criteria:**
- [ ] Hamburger menu icon in top-right
- [ ] Full-screen overlay when opened
- [ ] Touch-optimized spacing (min 44x44px tap targets)
- [ ] Smooth open/close animation (300ms)
- [ ] Close on menu item selection
- [ ] Close on overlay background tap
- [ ] Prevents body scroll when open

**Implementation Notes:**
- Use Webflow interactions for menu toggle
- Test on iOS Safari and Chrome Android
- Ensure accessibility (focus management)
- Add aria-labels for screen readers

**Story Points:** 5
**Priority:** P0
**Sprint:** 1

---

#### US-01.5: Page Performance
**As a** visitor
**I want** the page to load instantly
**So that** I don't bounce before seeing content

**Acceptance Criteria:**
- [ ] First Contentful Paint <1.0s
- [ ] Largest Contentful Paint <1.5s
- [ ] Time to Interactive <2.0s
- [ ] Cumulative Layout Shift <0.05
- [ ] Lighthouse Performance Score >90

**Implementation Notes:**
- Optimize images in Webflow (WebP format)
- Lazy load below-fold content
- Defer non-critical JavaScript
- Test with Lighthouse

**Story Points:** 3
**Priority:** P0
**Sprint:** 1

---

## EPIC-02: Product Discovery

**As a** potential B2B client
**I want** to explore TWG's product categories
**So that** I can determine if they meet my needs

### Acceptance Criteria:
- All 5 product categories visible on products page
- Each product has clear imagery (photo or illustration)
- Specifications easily accessible
- Clear navigation between products
- A/B test: Photo vs illustration effectiveness

### User Stories

#### US-02.1: Product Category Overview
**As a** buyer
**I want** to see all product categories at a glance
**So that** I can quickly assess TWG's range

**Acceptance Criteria:**
- [ ] 5 product cards displayed in organized grid
- [ ] Each card shows: name, featured image, brief description (2-3 lines)
- [ ] "Learn More" CTA on each card
- [ ] Responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
- [ ] Hover effect: subtle scale (1.05) + shadow
- [ ] Click/tap navigates to product detail page

**Products:**
1. Finger Joint
2. Edge-Glued Panels
3. Solid Wood
4. Laminated Timber
5. Custom Products

**Implementation Notes:**
- Create Webflow CMS Collection: "Products"
- Design card component in Webflow
- Add hover interactions
- Link to dynamic product pages

**Story Points:** 8
**Priority:** P0
**Sprint:** 1

---

#### US-02.2: Product Detail Page - Finger Joint
**As a** buyer researching finger joint products
**I want** to see detailed specifications
**So that** I can evaluate if this meets my project needs

**Acceptance Criteria:**
- [ ] Hero image (full width, high quality)
- [ ] Product name and description (100-150 words)
- [ ] Specifications table (dimensions, materials, grades)
- [ ] Image gallery (3-5 images)
- [ ] Use cases / applications section
- [ ] Quality differentiators
- [ ] Sustainability notes
- [ ] Contact CTA at bottom
- [ ] Breadcrumb navigation (Home > Products > Finger Joint)

**Implementation Notes:**
- Create Webflow CMS template for products
- Use dynamic content binding
- Add lightbox for image gallery
- Mobile swipe gestures for gallery

**Story Points:** 5
**Priority:** P0
**Sprint:** 1-2

---

#### US-02.3: Product Detail Page - Edge-Glued Panels
**As a** buyer researching edge-glued panels
**I want** to see detailed specifications
**So that** I can compare with other suppliers

**Acceptance Criteria:**
- [ ] Same structure as US-02.2
- [ ] Panel-specific specifications (thickness, width, length ranges)
- [ ] Wood species options
- [ ] Glue types and certifications
- [ ] Load-bearing capabilities
- [ ] Custom sizing availability

**Implementation Notes:**
- Use same Webflow CMS template
- Populate with edge-glued panel content
- Ensure consistency across product pages

**Story Points:** 5
**Priority:** P0
**Sprint:** 2

---

#### US-02.4: Product Detail Page - Solid Wood
**As a** buyer researching solid wood products
**I want** to see available wood species and grades
**So that** I can select the right material

**Acceptance Criteria:**
- [ ] Same structure as US-02.2
- [ ] Wood species list (oak, maple, walnut, etc.)
- [ ] Grade classifications (Select, #1 Common, #2 Common)
- [ ] Moisture content specifications
- [ ] Finishing options
- [ ] Bulk pricing notes (contact for quote)

**Implementation Notes:**
- Use same Webflow CMS template
- Add species comparison table
- High-quality wood grain photos

**Story Points:** 5
**Priority:** P0
**Sprint:** 2

---

#### US-02.5: Product Detail Page - Laminated Timber
**As a** buyer researching laminated timber
**I want** to understand structural capabilities
**So that** I can use it in construction projects

**Acceptance Criteria:**
- [ ] Same structure as US-02.2
- [ ] Structural specifications (load ratings, span tables)
- [ ] Lamination process explanation
- [ ] Certification details (building codes)
- [ ] Environmental benefits vs. solid timber
- [ ] Project examples (optional)

**Implementation Notes:**
- Use same Webflow CMS template
- Technical diagrams if available
- Link to manufacturing page for process details

**Story Points:** 5
**Priority:** P0
**Sprint:** 2

---

#### US-02.6: Product Detail Page - Custom Products
**As a** buyer with unique requirements
**I want** to understand TWG's customization capabilities
**So that** I can determine if they can meet my needs

**Acceptance Criteria:**
- [ ] Same structure as US-02.2
- [ ] Customization options overview
- [ ] Design consultation process
- [ ] Lead time expectations
- [ ] Minimum order quantities
- [ ] Case study examples (if available)
- [ ] Prominent contact CTA

**Implementation Notes:**
- Use same Webflow CMS template
- Emphasize consultation process
- Gallery of past custom work

**Story Points:** 3
**Priority:** P1
**Sprint:** 2

---

#### US-02.7: A/B Test - Product Images
**As a** product owner
**I want** to test photos vs. illustrations
**So that** I can optimize engagement

**Acceptance Criteria:**
- [ ] Version A: Real product photos
- [ ] Version B: Professional illustrations
- [ ] Google Analytics events tracking clicks
- [ ] Track engagement time per version
- [ ] 50/50 traffic split
- [ ] Run test for 30 days post-launch

**Implementation Notes:**
- Create two versions of product overview page
- Use Google Optimize or Webflow A/B test
- Track: CTR, time on page, bounce rate
- Document findings for optimization

**Story Points:** 3
**Priority:** P1
**Sprint:** 2 (setup for post-launch)

---

## EPIC-03: Sustainability Verification

**As an** ESG-conscious buyer
**I want** to verify TWG's sustainability claims
**So that** I can meet my company's environmental goals

### Acceptance Criteria:
- Dedicated sustainability page
- Clear explanation of tree-to-tree cycle
- Visual proof of practices
- Certifications displayed (if available)

### User Stories

#### US-03.1: Sustainability Page - Hero
**As an** ESG-focused buyer
**I want** to see TWG's sustainability commitment immediately
**So that** I know they align with my values

**Acceptance Criteria:**
- [ ] Hero statement (50-75 words) about commitment
- [ ] High-quality image (forest, planting, or manufacturing)
- [ ] Clear, confident messaging
- [ ] Matches brand voice (professional, approachable)

**Implementation Notes:**
- Create page in Webflow Designer
- Use CMS for editable content
- Hero image from client assets

**Story Points:** 3
**Priority:** P1
**Sprint:** 2

---

#### US-03.2: Tree-to-Tree Cycle Explanation
**As a** sustainability-conscious buyer
**I want** to understand TWG's complete cycle control
**So that** I can trust their environmental impact

**Acceptance Criteria:**
- [ ] Visual diagram or infographic showing cycle
- [ ] Text explanation (200-300 words)
- [ ] Specific practices listed (bulleted)
- [ ] Environmental impact metrics (if available)
- [ ] Future commitments section
- [ ] Certification logos (FSC, PEFC, if applicable)

**Implementation Notes:**
- Create custom illustration or use client-provided
- Use Webflow CMS for editable text
- Responsive layout for mobile

**Story Points:** 5
**Priority:** P1
**Sprint:** 2

---

#### US-03.3: Sustainability Page - SEO
**As a** product owner
**I want** the sustainability page to rank well
**So that** ESG-focused buyers find us via search

**Acceptance Criteria:**
- [ ] Meta title: "Sustainability Commitment | TWG"
- [ ] Meta description: 150-160 characters
- [ ] H1: Clear sustainability headline
- [ ] Structured data (Organization schema)
- [ ] Alt text on all images
- [ ] Internal links to manufacturing page

**Implementation Notes:**
- Configure in Webflow SEO panel
- Use keywords: sustainable timber, eco-friendly wood, FSC certified
- Link to related content

**Story Points:** 2
**Priority:** P1
**Sprint:** 2

---

#### US-03.4: Social Proof - Certifications
**As a** compliance officer
**I want** to see TWG's certifications
**So that** I can verify regulatory compliance

**Acceptance Criteria:**
- [ ] Certification logos displayed prominently
- [ ] Certification descriptions (if needed)
- [ ] Link to certificate PDFs (if available)
- [ ] Compliance statements

**Implementation Notes:**
- Upload certificate images to Webflow
- Create badges/logos section
- Conditional display if certifications exist

**Story Points:** 3
**Priority:** P2
**Sprint:** 2

---

## EPIC-04: Manufacturing Transparency

**As a** quality-focused buyer
**I want** to understand TWG's manufacturing process
**So that** I can trust their quality control

### Acceptance Criteria:
- Manufacturing page shows process overview
- Mix of text and visual content
- Highlights 100% control of cycle
- Builds trust through transparency

### User Stories

#### US-04.1: Manufacturing Process Overview
**As a** buyer evaluating suppliers
**I want** to see how TWG manufactures products
**So that** I can assess their quality capabilities

**Acceptance Criteria:**
- [ ] Process overview (200-300 words)
- [ ] 3-5 process steps with descriptions
- [ ] Each step has supporting image
- [ ] Quality control highlights
- [ ] Equipment/technology mentions
- [ ] "100% cycle control" messaging

**Implementation Notes:**
- Create page in Webflow Designer
- Use numbered steps or timeline layout
- Photos from client (factory, equipment, products)

**Story Points:** 5
**Priority:** P1
**Sprint:** 2

---

#### US-04.2: Quality Assurance Section
**As a** quality manager
**I want** to understand TWG's QA process
**So that** I can trust their consistency

**Acceptance Criteria:**
- [ ] QA process description
- [ ] Testing procedures mentioned
- [ ] Quality standards referenced
- [ ] Defect rate or quality metrics (if available)
- [ ] Inspection photos (optional)

**Implementation Notes:**
- Add section to manufacturing page
- Use client-provided QA documentation
- Visual content to support claims

**Story Points:** 3
**Priority:** P2
**Sprint:** 2

---

#### US-04.3: Manufacturing Page - SEO
**As a** product owner
**I want** the manufacturing page to rank well
**So that** quality-focused buyers find us

**Acceptance Criteria:**
- [ ] Meta title: "Manufacturing Process | TWG"
- [ ] Meta description: 150-160 characters
- [ ] H1: Clear manufacturing headline
- [ ] Alt text on all process images
- [ ] Internal links to product pages

**Implementation Notes:**
- Configure in Webflow SEO panel
- Keywords: wood manufacturing, quality control, timber processing
- Link to related content

**Story Points:** 2
**Priority:** P1
**Sprint:** 2

---

#### US-04.4: Technology & Equipment Highlight
**As a** technical buyer
**I want** to understand TWG's capabilities
**So that** I can assess their production capacity

**Acceptance Criteria:**
- [ ] Equipment list or mentions
- [ ] Technology highlights (if applicable)
- [ ] Capacity indicators (optional)
- [ ] Certifications related to manufacturing

**Implementation Notes:**
- Add subsection to manufacturing page
- Client to provide equipment details
- Photos of key machinery

**Story Points:** 3
**Priority:** P2
**Sprint:** 2

---

## EPIC-05: Contact and Inquiry

**As an** interested buyer
**I want** to easily contact TWG
**So that** I can start a business conversation

### Acceptance Criteria:
- Contact information visible on every page
- Simple inquiry form (name, company, email, message)
- Form submission confirmation
- Response time expectation set

### User Stories

#### US-05.1: Contact Form
**As a** potential client
**I want** to send an inquiry to TWG
**So that** I can request a quote or ask questions

**Acceptance Criteria:**
- [ ] Form fields: Name, Company, Email, Phone (optional), Message
- [ ] All required fields validated
- [ ] Email format validation
- [ ] reCAPTCHA v3 (spam protection)
- [ ] Success message on submission
- [ ] Error handling (network issues)
- [ ] Response time expectation: "We'll respond within 24 hours"
- [ ] Mobile-optimized form layout

**Implementation Notes:**
- Use Webflow native form builder
- Configure form notifications to client email
- Add reCAPTCHA via Webflow settings
- Style consistent with brand

**Story Points:** 5
**Priority:** P0
**Sprint:** 2

---

#### US-05.2: Footer - Global Contact Info
**As a** visitor on any page
**I want** to see TWG's contact information
**So that** I can reach out via my preferred method

**Acceptance Criteria:**
- [ ] Footer visible on all pages (Webflow symbol)
- [ ] Company name and tagline
- [ ] Contact email (clickable mailto:)
- [ ] Phone number (clickable tel:, if applicable)
- [ ] Physical address
- [ ] LinkedIn link (primary social)
- [ ] Copyright notice
- [ ] Privacy/Terms links (if required)

**Implementation Notes:**
- Create Webflow footer symbol
- Link to social profiles
- Ensure mobile responsiveness

**Story Points:** 3
**Priority:** P0
**Sprint:** 2

---

#### US-05.3: Contact Page
**As a** buyer ready to inquire
**I want** a dedicated contact page
**So that** I have all contact options in one place

**Acceptance Criteria:**
- [ ] Contact form (same as US-05.1)
- [ ] Contact information displayed
- [ ] Office hours (if applicable)
- [ ] Map embed (optional, if physical location relevant)
- [ ] Alternative contact methods highlighted

**Implementation Notes:**
- Create page in Webflow Designer
- Reuse form component
- Optionally embed Google Maps

**Story Points:** 3 (if reusing form)
**Priority:** P1
**Sprint:** 2

---

# DEVELOPMENT EPICS

## EPIC-06: Platform Setup

**As a** developer
**I want** to set up the Webflow and Cloudflare infrastructure
**So that** I can build the site efficiently

### User Stories

#### US-06.1: Webflow Account & Project Setup
**As a** developer
**I want** to create the Webflow project
**So that** I can start building

**Acceptance Criteria:**
- [ ] Webflow CMS plan activated ($23/mo)
- [ ] New project created: "TWG Landing Page"
- [ ] Team members invited (if applicable)
- [ ] Project settings configured
- [ ] Backup/export enabled

**Implementation Notes:**
- Sign up at webflow.com
- Choose CMS plan
- Configure project name and settings

**Story Points:** 1
**Priority:** P0
**Sprint:** 1, Day 1

---

#### US-06.2: Webflow CMS Collections Setup
**As a** developer
**I want** to configure CMS collections
**So that** content is manageable

**Acceptance Criteria:**
- [ ] Collection: "Products" created
  - Fields: Name, Slug, Description, Specifications, Images (multi)
- [ ] Collection: "Pages" (if needed for dynamic content)
- [ ] Template pages created for product details
- [ ] CMS binding configured

**Implementation Notes:**
- Use Webflow CMS designer
- Create fields matching content requirements
- Test dynamic content binding

**Story Points:** 3
**Priority:** P0
**Sprint:** 1, Day 1-2

---

#### US-06.3: Design System Setup
**As a** developer
**I want** to establish design tokens
**So that** styling is consistent

**Acceptance Criteria:**
- [ ] Color variables configured (forest green, wood brown, etc.)
- [ ] Typography styles created (Playfair Display + system fonts)
- [ ] Spacing scale defined
- [ ] Glass-morphism component created
- [ ] Reusable symbols: Header, Footer

**Implementation Notes:**
- Use Webflow style guide
- Create global styles
- Build reusable components

**Story Points:** 3
**Priority:** P0
**Sprint:** 1, Day 1-2

---

#### US-06.4: Cloudflare Account Setup
**As a** developer
**I want** to configure Cloudflare as a proxy
**So that** we have additional security and control

**Acceptance Criteria:**
- [ ] Cloudflare account created (Free or Pro plan)
- [ ] Domain added: twg.com
- [ ] DNS records configured (CNAME to Webflow)
- [ ] Proxy enabled (orange cloud)
- [ ] SSL/TLS mode: Full (strict)
- [ ] Page rules configured (if needed)

**Implementation Notes:**
- Follow Webflow + Cloudflare setup guide
- Test SSL certificate activation
- Verify proxy is working

**Story Points:** 3
**Priority:** P0
**Sprint:** 1, Day 1-2

---

#### US-06.5: Google Analytics Setup
**As a** product owner
**I want** to track site analytics
**So that** I can measure success

**Acceptance Criteria:**
- [ ] Google Analytics 4 property created
- [ ] GA4 tracking code added to Webflow (custom code)
- [ ] Events configured: form submissions, CTA clicks
- [ ] Test events are firing correctly
- [ ] Goals/conversions set up

**Implementation Notes:**
- Create GA4 property in Google Analytics
- Add tracking code to Webflow Project Settings → Custom Code
- Test with GA4 DebugView

**Story Points:** 3
**Priority:** P0
**Sprint:** 1, Day 2

---

## EPIC-07: Performance & SEO

**As a** developer
**I want** to optimize site performance and SEO
**So that** we meet technical KPIs

### User Stories

#### US-07.1: Performance Optimization
**As a** developer
**I want** to achieve Lighthouse score >90
**So that** users have a fast experience

**Acceptance Criteria:**
- [ ] All images optimized (WebP format)
- [ ] Lazy loading enabled for below-fold content
- [ ] Video compressed to <2.5MB
- [ ] JavaScript deferred where possible
- [ ] CSS optimized (Webflow auto-generates)
- [ ] Lighthouse Performance Score >90
- [ ] FCP <1.0s, LCP <1.5s, CLS <0.05

**Implementation Notes:**
- Use Webflow's built-in optimization
- Test with Lighthouse CI
- Compress images before upload

**Story Points:** 5
**Priority:** P0
**Sprint:** 2, Day 9

---

#### US-07.2: SEO Configuration - All Pages
**As a** product owner
**I want** all pages to be SEO-optimized
**So that** we rank well in search

**Acceptance Criteria:**
- [ ] Meta titles configured (all pages)
- [ ] Meta descriptions written (150-160 chars, all pages)
- [ ] Open Graph tags set (for social sharing)
- [ ] Alt text on all images
- [ ] Sitemap generated (Webflow automatic)
- [ ] Robots.txt configured
- [ ] Schema.org markup (Organization)
- [ ] Lighthouse SEO Score >95

**Implementation Notes:**
- Use Webflow SEO panel for each page
- Add structured data via custom code
- Test with Google Rich Results Test

**Story Points:** 5
**Priority:** P0
**Sprint:** 2, Day 8-9

---

#### US-07.3: Accessibility Audit
**As a** developer
**I want** to ensure WCAG 2.1 AA compliance
**So that** the site is accessible to all users

**Acceptance Criteria:**
- [ ] Color contrast ratio >4.5:1 (all text)
- [ ] Keyboard navigation functional (all interactive elements)
- [ ] Focus indicators visible
- [ ] Skip navigation link added
- [ ] ARIA labels on complex components
- [ ] Video has pause control
- [ ] Forms have proper labels
- [ ] axe DevTools: 0 violations

**Implementation Notes:**
- Use axe DevTools browser extension
- Test keyboard navigation manually
- Add aria-labels where needed

**Story Points:** 3
**Priority:** P0
**Sprint:** 2, Day 9

---

## EPIC-08: Deployment & Launch

**As a** project lead
**I want** to deploy the site to production
**So that** the client's customers can access it

### User Stories

#### US-08.1: Staging Deployment
**As a** developer
**I want** to deploy to staging
**So that** the client can review

**Acceptance Criteria:**
- [ ] Publish to Webflow staging domain
- [ ] Share staging URL with client
- [ ] All content populated (or lorem ipsum placeholders)
- [ ] All pages functional
- [ ] Forms working and tested
- [ ] Mobile responsive on all breakpoints

**Implementation Notes:**
- Use Webflow publish button
- Test staging site thoroughly
- Send to client for UAT

**Story Points:** 2
**Priority:** P0
**Sprint:** 2, Day 9

---

#### US-08.2: Client UAT & Feedback
**As a** product owner
**I want** the client to review the staging site
**So that** we can address feedback before launch

**Acceptance Criteria:**
- [ ] Client walkthrough scheduled (Day 10)
- [ ] Feedback collected and documented
- [ ] Critical issues resolved
- [ ] Minor issues triaged for post-launch
- [ ] Client sign-off received

**Implementation Notes:**
- Schedule 1-2 hour walkthrough meeting
- Use Loom or screen share
- Document feedback in tracker

**Story Points:** 3
**Priority:** P0
**Sprint:** 2, Day 10

---

#### US-08.3: Production Deployment
**As a** developer
**I want** to deploy to production domain
**So that** the site is live

**Acceptance Criteria:**
- [ ] All content reviewed and approved
- [ ] Performance metrics met (Lighthouse >90)
- [ ] SEO setup complete
- [ ] Google Analytics verified firing
- [ ] SSL certificate active (Cloudflare + Webflow)
- [ ] DNS configured (Cloudflare proxy to Webflow)
- [ ] Cloudflare proxy rules configured
- [ ] Redirects in place (if needed)
- [ ] Backup plan ready
- [ ] Site live at twg.com

**Implementation Notes:**
- Follow Webflow custom domain guide
- Coordinate DNS changes with client
- Monitor for 24 hours post-launch

**Story Points:** 3
**Priority:** P0
**Sprint:** 2, Day 10

---

#### US-08.4: Post-Launch Monitoring
**As a** developer
**I want** to monitor site health post-launch
**So that** we catch issues early

**Acceptance Criteria:**
- [ ] Uptime monitoring enabled (Cloudflare or third-party)
- [ ] Google Analytics tracking verified
- [ ] Form submissions tested on production
- [ ] Performance checked on production (Lighthouse)
- [ ] No console errors in production
- [ ] Mobile testing on real devices

**Implementation Notes:**
- Use Cloudflare analytics
- Check GA4 real-time view
- Test forms end-to-end

**Story Points:** 2
**Priority:** P0
**Sprint:** 2, Day 10 (ongoing)

---

# SPRINT PLANNING

## Sprint 1 (Week 1: Nov 7-14)

### Goals:
- Set up Webflow project and Cloudflare
- Build hero section and navigation
- Create product overview page
- Establish design system

### Stories:
| Story ID | Story Name | Points | Assignee |
|----------|-----------|--------|----------|
| US-06.1 | Webflow Account Setup | 1 | Dev |
| US-06.2 | CMS Collections Setup | 3 | Dev |
| US-06.3 | Design System Setup | 3 | Dev/Designer |
| US-06.4 | Cloudflare Setup | 3 | Dev |
| US-06.5 | Google Analytics Setup | 3 | Dev |
| US-01.1 | Hero Video Background | 5 | Dev |
| US-01.2 | Hero Content Overlay | 3 | Dev/Designer |
| US-01.3 | Navigation (Desktop) | 5 | Dev |
| US-01.4 | Navigation (Mobile) | 5 | Dev |
| US-01.5 | Page Performance | 3 | Dev |
| US-02.1 | Product Category Overview | 8 | Dev/Designer |
| US-02.2 | Product Detail - Finger Joint | 5 | Dev/Content |

**Total Sprint 1 Points:** 47

---

## Sprint 2 (Week 2: Nov 15-21)

### Goals:
- Complete remaining product detail pages
- Build Manufacturing and Sustainability pages
- Implement contact form
- Optimize performance and SEO
- Deploy to production

### Stories:
| Story ID | Story Name | Points | Assignee |
|----------|-----------|--------|----------|
| US-02.3 | Product Detail - Edge-Glued | 5 | Dev/Content |
| US-02.4 | Product Detail - Solid Wood | 5 | Dev/Content |
| US-02.5 | Product Detail - Laminated | 5 | Dev/Content |
| US-02.6 | Product Detail - Custom | 3 | Dev/Content |
| US-02.7 | A/B Test Setup | 3 | Dev |
| US-03.1 | Sustainability - Hero | 3 | Dev/Content |
| US-03.2 | Tree-to-Tree Cycle | 5 | Dev/Designer |
| US-03.3 | Sustainability SEO | 2 | Dev |
| US-03.4 | Certifications Display | 3 | Dev |
| US-04.1 | Manufacturing Overview | 5 | Dev/Content |
| US-04.2 | Quality Assurance | 3 | Dev/Content |
| US-04.3 | Manufacturing SEO | 2 | Dev |
| US-04.4 | Technology Highlight | 3 | Dev/Content |
| US-05.1 | Contact Form | 5 | Dev |
| US-05.2 | Footer - Contact Info | 3 | Dev |
| US-05.3 | Contact Page | 3 | Dev |
| US-07.1 | Performance Optimization | 5 | Dev |
| US-07.2 | SEO Configuration | 5 | Dev |
| US-07.3 | Accessibility Audit | 3 | Dev |
| US-08.1 | Staging Deployment | 2 | Dev |
| US-08.2 | Client UAT | 3 | PM/Dev |
| US-08.3 | Production Deployment | 3 | Dev |
| US-08.4 | Post-Launch Monitoring | 2 | Dev |

**Total Sprint 2 Points:** 76

---

# STORY POINT REFERENCE

| Points | Complexity | Time Estimate |
|--------|-----------|---------------|
| 1 | Trivial | <1 hour |
| 2 | Simple | 1-2 hours |
| 3 | Moderate | 2-4 hours |
| 5 | Complex | 4-8 hours (half day to full day) |
| 8 | Very Complex | 1-2 days |
| 13 | Epic-level | 2-3 days |

---

# DEPENDENCIES

## Critical Path:
1. ✅ Platform setup (US-06.x) must complete first
2. ✅ Design system (US-06.3) before any visual work
3. ✅ CMS setup (US-06.2) before product pages
4. ✅ Navigation (US-01.3, US-01.4) before other pages
5. ✅ All content pages before performance optimization
6. ✅ Performance + SEO before deployment

## External Dependencies:
- Client provides content assets (photos, videos, copy)
- Client provides brand guidelines and logo
- Client provides Cloudflare account access (or creates new)
- Client reviews staging site (UAT)

---

# RISKS & MITIGATIONS

| Risk | Impact | Mitigation |
|------|--------|------------|
| **Content delay from client** | High | Use placeholder content, finalize later |
| **Webflow learning curve** | Low | Extensive documentation, intuitive UI |
| **Performance issues with video** | Medium | Test early, have fallback images ready |
| **Client feedback requires major changes** | High | Daily previews, clear requirements upfront |

---

# DEFINITION OF DONE

A user story is considered DONE when:
- [ ] All acceptance criteria met
- [ ] Code/design implemented in Webflow
- [ ] Tested on all target browsers (Chrome, Safari, Firefox, Edge)
- [ ] Tested on mobile devices (iOS, Android)
- [ ] Meets performance targets (Lighthouse)
- [ ] Meets accessibility standards (axe DevTools)
- [ ] Content reviewed by client (if applicable)
- [ ] Deployed to staging for review

---

*This document will be updated as epics and stories evolve during development.*
