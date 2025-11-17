# Product Requirements Document (PRD)
## B2B Luxury Table Maker Website

**Project:** Artisan Table Maker - B2B Brand Experience
**Version:** 1.0
**Date:** 2025-11-14
**Author:** Dr. Quinn (Requirements Analysis) + Council
**Status:** Approved for Development

---

## Table of Contents
1. [Product Overview](#product-overview)
2. [User Personas](#user-personas)
3. [User Stories](#user-stories)
4. [Functional Requirements](#functional-requirements)
5. [Non-Functional Requirements](#non-functional-requirements)
6. [Technical Requirements](#technical-requirements)
7. [Content Requirements](#content-requirements)
8. [Design Requirements](#design-requirements)
9. [Success Metrics](#success-metrics)
10. [Out of Scope](#out-of-scope)
11. [Dependencies](#dependencies)
12. [Acceptance Criteria](#acceptance-criteria)

---

## Product Overview

### Purpose
A philosophy-driven B2B website that positions a three-generation table craftsmanship studio as a premium partner for architects, interior designers, and high-value project specifiers. The site prioritizes emotional connection and values alignment over transactional sales.

### Goals
1. **Brand Establishment:** Communicate "we connect wood's energy to homes" philosophy
2. **Lead Qualification:** Attract values-aligned B2B clients, repel poor-fit inquiries
3. **Credibility Building:** Demonstrate generational expertise and craft mastery
4. **Self-Service Management:** Enable non-technical client to manage content via CMS
5. **Platform Reusability:** Create template E can deploy for future clients

### Key Differentiators
- Philosophy-first positioning (not product-first)
- Cinematic video storytelling (not static photography)
- Spiritual/emotional connection (not feature/benefit marketing)
- Selective invitation (not aggressive conversion optimization)

---

## User Personas

### Primary Persona: "The Visionary Architect"
**Name:** Alexandra Chen
**Role:** Principal Architect, boutique firm
**Age:** 38
**Location:** Amsterdam

**Background:**
- 12 years experience designing high-end residential and hospitality spaces
- Portfolio of €2M-10M projects
- Values authentic materials and artisan partnerships
- Specifies custom furniture for 60% of projects

**Goals:**
- Find reliable artisan partners who understand design intent
- Source unique pieces that elevate project narrative
- Build long-term relationships with craft studios
- Impress clients with authentic, story-rich elements

**Frustrations:**
- Mass-produced "luxury" furniture lacks soul
- Vendors who don't understand design language
- Unreliable craftspeople who miss deadlines
- Furniture that looks good but feels generic

**Website Usage:**
- Visits from mobile while reviewing project mood boards
- Spends 5-10 minutes exploring if initial impression resonates
- Looks for: Process transparency, portfolio quality, values alignment
- Decision trigger: Emotional resonance + credibility signals

**Quote:** *"I don't need another furniture catalog. I need partners who understand that every piece should belong to the space it inhabits."*

---

### Secondary Persona: "The Hospitality Curator"
**Name:** Marcus Andersson
**Role:** Design Director, boutique hotel group
**Age:** 45
**Location:** Copenhagen

**Background:**
- Oversees design for 8 boutique properties across Scandinavia
- €500K-2M annual furniture budget
- Seeks pieces that tell regional/material stories
- Values sustainability and craft heritage

**Goals:**
- Furnish properties with unique, conversation-worthy pieces
- Support local/regional artisans when possible
- Create Instagram-worthy spaces that drive bookings
- Balance aesthetics with durability for commercial use

**Frustrations:**
- Cookie-cutter hotel furniture suppliers
- Long lead times from artisan makers
- Lack of scalability (needs 20 identical tables, not 1 unique piece)
- Unclear pricing for commercial orders

**Website Usage:**
- Desktop research during sourcing phase
- Reviews portfolio looking for hospitality experience
- Wants to see: Scale capability, durability consideration, installation support
- Decision trigger: Portfolio proof + perceived reliability

**Quote:** *"Our guests remember the table they gathered at more than the room they slept in. I need makers who understand that."*

---

### Tertiary Persona: "The Design-Conscious Entrepreneur"
**Name:** Sophie Laurent
**Role:** Founder/CEO, tech startup
**Age:** 34
**Location:** Berlin

**Background:**
- Building 500sqm headquarters for 40-person team
- €150K fit-out budget, wants to make statement with meeting table
- Values craftsmanship as reflection of company values
- First-time commissioning custom furniture

**Goals:**
- Conference table that embodies company philosophy (innovation + craft)
- Support authentic makers (not IKEA or corporate suppliers)
- Impress investors and clients who visit office
- Tell story about intentional, values-driven choices

**Frustrations:**
- Doesn't know how to evaluate craftspeople
- Worried about making expensive mistake
- Needs guidance on specifications (size, wood type, etc.)
- Unclear process and timeline expectations

**Website Usage:**
- Mobile and desktop, researches extensively
- Reads every word on philosophy page
- Looks for: Educational content, reassurance, clear process
- Decision trigger: Trust-building + philosophical alignment

**Quote:** *"We're not just buying a table. We're making a statement about who we are as a company."*

---

## User Stories

### Epic 1: Discovery & First Impression
**As a** design professional visiting for the first time,
**I want** to immediately feel the quality and philosophy of the brand,
**So that** I can determine if this studio aligns with my values and project needs.

**User Stories:**
- US1.1: As a mobile visitor, I want the hero video to load quickly and play smoothly, so I'm not frustrated by poor performance
- US1.2: As a skeptical architect, I want to see authentic craft imagery (not stock photos), so I trust this is a real studio
- US1.3: As a time-constrained professional, I want clear navigation, so I can jump to portfolio or contact quickly
- US1.4: As a philosophical buyer, I want to read the brand story without sales pressure, so I can evaluate values fit

### Epic 2: Understanding the Process
**As a** potential B2B client,
**I want** to understand how this studio works,
**So that** I can evaluate if they're the right partner for my project.

**User Stories:**
- US2.1: As a project manager, I want to see step-by-step process documentation, so I understand timeline and collaboration points
- US2.2: As a quality-conscious designer, I want to see material selection criteria, so I know they share my standards
- US2.3: As a pragmatic buyer, I want transparency about their approach, so I can assess reliability
- US2.4: As a visual thinker, I want video of the actual process, so I can see (not just read about) their work

### Epic 3: Evaluating Credibility
**As a** decision-maker with budget authority,
**I want** evidence of expertise and past success,
**So that** I can justify commissioning them for my project.

**User Stories:**
- US3.1: As a risk-averse buyer, I want to see completed projects, so I know they can deliver
- US3.2: As an architect, I want to see work in context (not isolated products), so I can envision fit for my projects
- US3.3: As a hospitality buyer, I want to see commercial installations, so I know they understand B2B requirements
- US3.4: As a quality evaluator, I want high-resolution imagery, so I can assess craftsmanship detail

### Epic 4: Initiating Contact
**As a** qualified lead ready to inquire,
**I want** a frictionless way to start a conversation,
**So that** I can begin exploring collaboration.

**User Stories:**
- US4.1: As a busy professional, I want a simple contact form (not 20 fields), so submission doesn't feel burdensome
- US4.2: As a thoughtful buyer, I want to communicate my project vision, so they understand context before responding
- US4.3: As a design professional, I want to feel invited (not sold to), so the interaction feels collaborative
- US4.4: As a cautious inquirer, I want reassurance that inquiry doesn't equal commitment, so I feel safe reaching out

### Epic 5: Content Management (Client Perspective)
**As the** studio owner (non-technical),
**I want** to update website content easily,
**So that** I don't depend on a developer for simple changes.

**User Stories:**
- US5.1: As the content manager, I want to edit text without touching code, so I can fix typos or update copy
- US5.2: As the portfolio curator, I want to add new project images, so the site stays current
- US5.3: As the business owner, I want to change contact information, so clients reach the right channels
- US5.4: As a visual editor, I want to see changes before publishing, so I don't accidentally break the site

---

## Functional Requirements

### FR1: Homepage
**Priority:** Critical
**Description:** Full-screen cinematic landing experience

**Requirements:**
- FR1.1: Display looping video background (autoplay, muted, no controls)
- FR1.2: Overlay hero text (3-line philosophy statement) centered
- FR1.3: Subtle scroll indicator at bottom of viewport
- FR1.4: Smooth scroll transition to next section
- FR1.5: Mobile: Display poster image instead of video
- FR1.6: Video optimization: <5MB file size, H.264 codec
- FR1.7: Lazy load: Video loads only when in viewport

**Acceptance Criteria:**
- Video plays automatically without user interaction
- Text remains readable across all video frames
- Page loads in <3 seconds on 4G connection
- Mobile users see high-quality poster image
- Smooth 60fps scroll performance

---

### FR2: Philosophy/Story Page
**Priority:** Critical
**Description:** Three-generation narrative with supporting visuals

**Requirements:**
- FR2.1: Split layout: 50% video, 50% text content
- FR2.2: Text content: 300-400 words, generous line-height
- FR2.3: Video: Looping footage of hands working wood, workshop scenes
- FR2.4: Mobile: Stack layout (video top, text below)
- FR2.5: Smooth fade-in animation as page enters viewport
- FR2.6: Max content width: 720px for readability

**Acceptance Criteria:**
- Text is readable (WCAG AA contrast standards)
- Video enhances but doesn't distract from reading
- Layout responds gracefully on tablet and mobile
- Content can be edited via CMS without code changes

---

### FR3: Process/Craft Page
**Priority:** Critical
**Description:** Four-section journey with video backgrounds

**Requirements:**
- FR3.1: Four sequential sections: Selection, Understanding, Preparing, Connecting
- FR3.2: Each section: Video background + text overlay
- FR3.3: Section numbering (1, 2, 3, 4) subtle and elegant
- FR3.4: Text: ~80-100 words per section
- FR3.5: Parallax scroll effect (video scrolls slower than content)
- FR3.6: Mobile: Reduce/disable parallax, stack cleanly

**Acceptance Criteria:**
- Clear visual distinction between sections
- Text remains readable over all video backgrounds
- Smooth scrolling experience (no jank)
- Each section's message is clear and scannable

---

### FR4: Portfolio/Collaborations Page
**Priority:** High
**Description:** Project gallery with lightbox functionality

**Requirements:**
- FR4.1: Grid layout: 2 columns (desktop), 1 column (mobile)
- FR4.2: High-quality images (min 1200px width)
- FR4.3: Captions below each image (project name, year, brief description)
- FR4.4: Click image: Opens lightbox with larger view
- FR4.5: Lightbox: Arrow navigation, ESC to close, swipe on mobile
- FR4.6: Lazy loading: Images load as user scrolls
- FR4.7: Generous spacing between grid items (80-120px gap)

**Acceptance Criteria:**
- Images load quickly (optimized, <300KB each)
- Lightbox opens smoothly without page jump
- Mobile gallery is touch-friendly
- Client can add/remove/reorder images via CMS

---

### FR5: Contact Page
**Priority:** Critical
**Description:** B2B-focused inquiry form with philosophical framing

**Requirements:**
- FR5.1: Form fields:
  - Name (required, text input)
  - Email (required, email validation)
  - Your Space (required, textarea, placeholder: "Where will this table live?")
  - The Gathering (required, textarea, placeholder: "How will it be used?")
  - The Feeling (optional, textarea, placeholder: "What energy does your space hold?")
- FR5.2: Submit button text: "Begin the Listening"
- FR5.3: Form validation: Client-side (immediate feedback) + server-side (security)
- FR5.4: Success state: "Thank you. We'll listen and respond within 3 business days."
- FR5.5: Error state: Clear messaging for validation failures
- FR5.6: Email notification to client with form contents
- FR5.7: Mobile: Large touch targets (48px minimum)
- FR5.8: No CAPTCHA (use honeypot method for spam prevention)

**Acceptance Criteria:**
- Form submits successfully to client's email
- Validation prevents empty required fields
- Success message replaces form (doesn't redirect)
- Mobile keyboard shows appropriate input type (email for email field)
- No spam submissions reach client

---

### FR6: Navigation
**Priority:** High
**Description:** Minimal, elegant site navigation

**Requirements:**
- FR6.1: Fixed header with logo (left) and menu (right)
- FR6.2: Menu items: Home, Philosophy, Process, Portfolio, Contact
- FR6.3: Smooth scroll to section when menu clicked
- FR6.4: Mobile: Hamburger menu, full-screen overlay
- FR6.5: Active state: Current page/section highlighted subtly
- FR6.6: Header background: Transparent on homepage, solid on other pages

**Acceptance Criteria:**
- Navigation is accessible from all pages
- Smooth scroll animation (800ms ease)
- Mobile menu opens/closes without page jump
- Logo links to homepage

---

### FR7: Footer
**Priority:** Medium
**Description:** Simple footer with contact information

**Requirements:**
- FR7.1: Studio address
- FR7.2: Email address (mailto link)
- FR7.3: Phone number (optional, tel link)
- FR7.4: Copyright notice with year
- FR7.5: Tagline: "Where wood finds home"
- FR7.6: Social media links (if applicable)

**Acceptance Criteria:**
- All contact methods are functional links
- Footer is consistent across all pages
- Mobile: Stack elements vertically with appropriate spacing

---

### FR8: CMS Functionality (VVVeb)
**Priority:** Critical
**Description:** Client must edit content without developer

**Requirements:**
- FR8.1: Visual page editor (WYSIWYG)
- FR8.2: Edit text: Click to edit, rich text formatting
- FR8.3: Replace images: Upload new file, automatic optimization
- FR8.4: Add/remove portfolio items
- FR8.5: Edit form labels and button text
- FR8.6: Preview changes before publishing
- FR8.7: Undo/redo capability
- FR8.8: Media library for image management

**Acceptance Criteria:**
- Client can edit homepage hero text in <2 clicks
- Image replacement doesn't break layout
- Changes are immediately visible in preview
- Published changes go live without page cache issues

---

## Non-Functional Requirements

### NFR1: Performance
**Priority:** Critical

- NFR1.1: Homepage loads in <3 seconds on 4G (mobile)
- NFR1.2: All pages achieve Google PageSpeed score >85 (mobile)
- NFR1.3: Video files optimized to <5MB each
- NFR1.4: Images lazy-loaded and optimized (WebP format with fallback)
- NFR1.5: Smooth 60fps scroll performance
- NFR1.6: Time to Interactive (TTI) <5 seconds

**Measurement:** Google PageSpeed Insights, Chrome DevTools Performance tab

---

### NFR2: Accessibility
**Priority:** High

- NFR2.1: WCAG 2.1 AA compliance
- NFR2.2: Keyboard navigation for all interactive elements
- NFR2.3: Color contrast ratios meet 4.5:1 minimum (text)
- NFR2.4: Alt text for all images
- NFR2.5: Semantic HTML structure (proper heading hierarchy)
- NFR2.6: Form labels properly associated with inputs
- NFR2.7: Skip navigation link for keyboard users
- NFR2.8: No animations that trigger motion sickness (respect prefers-reduced-motion)

**Measurement:** WAVE accessibility checker, axe DevTools

---

### NFR3: Browser Compatibility
**Priority:** High

**Supported Browsers:**
- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari iOS (last 2 versions)
- Chrome Android (last 2 versions)

**Graceful Degradation:**
- Older browsers: Static images replace videos
- No JavaScript: Content still readable, forms still submit
- No CSS: Semantic HTML ensures content hierarchy

---

### NFR4: Responsive Design
**Priority:** Critical

**Breakpoints:**
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Wide: 1440px+

**Requirements:**
- NFR4.1: All content accessible on mobile devices
- NFR4.2: Touch targets minimum 48×48px
- NFR4.3: No horizontal scrolling at any breakpoint
- NFR4.4: Videos replaced with poster images on mobile
- NFR4.5: Forms are thumb-friendly on mobile
- NFR4.6: Images scale proportionally without distortion

---

### NFR5: Security
**Priority:** High

- NFR5.1: HTTPS enforced (SSL certificate via Cloudflare)
- NFR5.2: Form submissions sanitized (prevent XSS attacks)
- NFR5.3: SQL injection protection (parameterized queries)
- NFR5.4: Honeypot spam prevention on contact form
- NFR5.5: Server firewall configured (SSH, HTTP, HTTPS only)
- NFR5.6: Regular security updates for server software
- NFR5.7: Strong passwords for CMS admin access
- NFR5.8: Cloudflare DDoS protection enabled

---

### NFR6: SEO
**Priority:** Medium

- NFR6.1: Semantic HTML structure
- NFR6.2: Meta titles and descriptions for all pages
- NFR6.3: Open Graph tags for social sharing
- NFR6.4: XML sitemap generated
- NFR6.5: Robots.txt configured
- NFR6.6: Structured data (Schema.org) for business information
- NFR6.7: Descriptive URLs (e.g., /philosophy not /page2)
- NFR6.8: Image alt attributes for SEO

---

### NFR7: Maintainability
**Priority:** High

- NFR7.1: Code commented for future developers
- NFR7.2: Modular component structure (reusable across pages)
- NFR7.3: Separate concerns (HTML/CSS/JS in appropriate files)
- NFR7.4: Version control (Git repository)
- NFR7.5: Documentation for client (CMS usage guide)
- NFR7.6: Documentation for developers (setup/deployment guide)
- NFR7.7: Automated backups (daily database + files)

---

## Technical Requirements

### TR1: Platform
- **CMS:** VVVeb (latest stable version)
- **Web Server:** Nginx 1.24+
- **PHP:** 8.1+
- **Database:** MySQL 8.0+ or MariaDB 10.6+
- **Version Control:** Git

### TR2: Hosting Infrastructure
- **Provider:** Hetzner VPS (CX21 recommended: 2 vCPU, 4GB RAM, 40GB SSD)
- **Location:** EU datacenter (Falkenstein, Germany preferred for GDPR)
- **CDN:** Cloudflare (free tier sufficient)
- **SSL:** Cloudflare Universal SSL
- **Backup:** Daily automated backup to external storage

### TR3: Video Hosting
**Option A:** Self-hosted on VPS (simple but bandwidth-heavy)
**Option B:** Cloudflare R2 bucket (€0.015/GB, cost-effective)
**Option C:** Vimeo Pro (€7/month, unlimited bandwidth) - **Recommended**

**Specifications:**
- Format: MP4 (H.264 codec)
- Resolution: 1920×1080 (1080p)
- Bitrate: 2-3 Mbps
- Target file size: 3-5MB per 10-15 second loop
- Mobile: Poster images (JPEG, <200KB, 1200×800px)

### TR4: Development Environment
- **Local:** MAMP/XAMPP or Docker for PHP/MySQL
- **Staging:** Subdomain on production server (e.g., staging.clientdomain.com)
- **Production:** clientdomain.com

### TR5: Deployment
- **Method:** Git-based deployment or FTP/SFTP
- **CI/CD:** Manual deployment initially (can automate later)
- **Rollback:** Git tags for version rollback capability

---

## Content Requirements

### CR1: Copywriting
**Status:** Complete (Sophia has drafted all copy)

**Pages:**
- Home: Hero statement (15 words)
- Philosophy: Brand story (400 words)
- Process: 4 sections (80 words each)
- Portfolio: Project captions (10-15 words each)
- Contact: Invitation text (50 words)

**Tone:** Subtle, honest, heartfelt, generational, spiritual, selective

### CR2: Video Assets
**Status:** In Progress (E sources stock + client footage)

**Required Videos:**
- Home hero: Wood grain close-up, slow motion (10-15s loop)
- Philosophy: Hands working wood, workshop scenes (15-20s loop)
- Process Section 1: Lumber selection, touching wood (10-15s)
- Process Section 2: Crafting, tools, joinery (10-15s)
- Process Section 3: Finishing, oiling, detail work (10-15s)
- Process Section 4: Table in final space, people gathering (10-15s)

**Format:** MP4, H.264, 1920×1080, 2-3 Mbps, <5MB each

### CR3: Images
**Required:**
- Portfolio: 6-10 high-quality images of completed installations
- Process: 4-6 supplementary images (if video isn't enough)
- About: 1-2 images of workshop or team (optional)
- Contact: 1 atmospheric image for background (optional)

**Format:** JPEG, 1600×1200px minimum, optimized for web (<300KB)

### CR4: Brand Assets
- Logo (SVG preferred, PNG fallback)
- Color palette (defined: Oak-based tones)
- Typography (specified: Crimson Text, Spectral, Inter)

### CR5: Business Information
- Studio name
- Address (for footer/contact)
- Email (for contact form destination)
- Phone (optional)
- Social media links (if applicable)

---

## Design Requirements

### DR1: Color Palette
**Oak-Based Monochrome:**

```css
--oak-dark: #3d2817;        /* Deep oak - dark backgrounds */
--oak-medium: #6b4423;      /* Rich oak - accents */
--oak-honey: #b8956a;       /* Light oak - highlights */
--oak-cream: #e8dcc8;       /* Bleached oak - light text */
--almost-black: #1a1410;    /* Near black with warmth */
--warm-white: #faf7f0;      /* Warm white - light backgrounds */
--oak-amber: #d4a574;       /* Amber - hover states */
```

### DR2: Typography
**Fonts:**
- Display: Crimson Text (Google Fonts) - headlines
- Body: Spectral (Google Fonts) - readable text
- UI: Inter (Google Fonts) - interface elements

**Hierarchy:**
- Hero: 72px/42px (desktop/mobile), Crimson Text, 400 weight
- Section headline: 48px/32px, Crimson Text, 600 weight
- Body: 21px/18px, Spectral, 400 weight, 1.9 line-height
- Small/UI: 16px, Inter, 400 weight

### DR3: Spacing System
```css
--space-xs: 20px;
--space-sm: 40px;
--space-md: 60px;
--space-lg: 80px;
--space-xl: 120px;
--space-xxl: 160px;
```

**Usage:**
- Section padding: 120px (desktop) / 80px (mobile)
- Element spacing: 60-80px
- Content width: 720px (body text), 1440px (galleries)

### DR4: Motion Design
**Timing:**
- Fast: 400ms
- Medium: 800ms
- Slow: 1200ms

**Easing:**
- Gentle: cubic-bezier(0.4, 0.0, 0.2, 1)
- Natural: cubic-bezier(0.33, 1, 0.68, 1)

**Principles:**
- Subtle over dramatic
- Slow and calm (matches brand philosophy)
- Respect prefers-reduced-motion

### DR5: Component Library
1. Video Hero (full-screen)
2. 50/50 Split (video + text)
3. Process Timeline (sequential video sections)
4. Portfolio Grid (2-col with lightbox)
5. Contact Form (B2B fields)
6. Navigation (fixed header)
7. Footer (minimal info)

---

## Success Metrics

### Launch Metrics (Week 1)
- ✅ All pages load successfully
- ✅ Contact form sends emails correctly
- ✅ Mobile responsive on iOS and Android
- ✅ PageSpeed score >85 (mobile)
- ✅ Client can edit content via VVVeb

### Early Performance (Month 1)
- **Traffic:** 50-100 visitors (low volume expected for B2B)
- **Engagement:** Avg. time on site >3 minutes
- **Form submissions:** 3-5 qualified inquiries
- **Bounce rate:** <40% (indicates resonance)

### Business Impact (6 Months)
- **Inquiry quality:** 80%+ inquiries mention philosophy/values
- **Conversion:** 20-30% inquiry-to-project conversion
- **Project value:** Avg. project size >€5K (multiple tables or high-end single pieces)
- **Reputation:** Shared by architects/designers (word-of-mouth)

### Technical Health (Ongoing)
- **Uptime:** >99.9%
- **Page speed:** Maintained >85 mobile score
- **Security:** Zero breaches
- **Client satisfaction:** Can manage content independently

---

## Out of Scope

### Explicitly NOT Included
- ❌ E-commerce functionality (shopping cart, checkout)
- ❌ Product catalog database
- ❌ User accounts / customer portal
- ❌ Payment processing integration
- ❌ Blog or CMS for articles
- ❌ Multi-language support
- ❌ Advanced analytics (beyond basic traffic)
- ❌ Custom CRM integration
- ❌ Email marketing integration
- ❌ Live chat widget
- ❌ 3D product visualization
- ❌ Augmented reality (AR) features
- ❌ Professional video production (client sources content)
- ❌ Ongoing maintenance contract (separate agreement)

### Future Enhancements (Post-Launch)
- Phase 2: Project case studies (detailed blog posts)
- Phase 2: Architect resource library (wood guides, specs)
- Phase 2: Booking system for studio visits
- Phase 3: Client portal for project tracking
- Phase 3: Advanced analytics and heatmapping

---

## Dependencies

### Client Dependencies
- ✅ Brand philosophy defined (complete)
- ✅ Copywriting completed (Sophia finished)
- ⏳ Portfolio photography provided (in progress)
- ⏳ Video footage sourced (E handling with client input)
- ⏳ Logo and brand assets supplied
- ⏳ Business information confirmed (address, email, phone)
- ⏳ Domain registration or access provided
- ⏳ Content approval (1 revision round)

### Technical Dependencies
- ⏳ Hetzner VPS provisioned
- ⏳ Domain DNS pointed to Cloudflare
- ⏳ SSL certificate activated
- ⏳ Email configured for form submissions
- ⏳ VVVeb installed and configured

### External Dependencies
- Cloudflare account (free tier)
- Hetzner account (or E manages on client's behalf)
- Google Fonts (CDN availability)
- Stock video sources (if needed)

---

## Acceptance Criteria

### AC1: Functional Completeness
- [ ] All 5 pages are built and accessible
- [ ] Navigation works between all pages
- [ ] Contact form submits successfully and sends email
- [ ] Video backgrounds play on desktop
- [ ] Poster images show on mobile
- [ ] Portfolio lightbox opens and navigates correctly
- [ ] All links are functional (no 404s)

### AC2: Design Fidelity
- [ ] Color palette matches oak-based specification
- [ ] Typography uses Crimson Text, Spectral, Inter
- [ ] Spacing follows defined system (generous breathing room)
- [ ] Animations are subtle and calm (800-1200ms timing)
- [ ] Mobile layouts stack appropriately
- [ ] All content is readable (contrast meets WCAG AA)

### AC3: Content Integration
- [ ] All copy from Sophia is integrated correctly
- [ ] Videos are optimized and load efficiently
- [ ] Portfolio images are high-quality and properly captioned
- [ ] Business information (address, email) is accurate
- [ ] Logo is placed correctly in header

### AC4: Performance
- [ ] Homepage loads in <3 seconds on 4G
- [ ] Google PageSpeed score >85 (mobile)
- [ ] Smooth 60fps scrolling (no jank)
- [ ] Video files are <5MB each
- [ ] Images are optimized (<300KB each)

### AC5: Responsiveness
- [ ] Tested on iPhone (Safari iOS)
- [ ] Tested on Android phone (Chrome)
- [ ] Tested on iPad (Safari)
- [ ] Tested on desktop (Chrome, Firefox, Safari)
- [ ] All breakpoints (320px, 768px, 1024px, 1440px) work correctly
- [ ] Touch targets are minimum 48×48px on mobile

### AC6: CMS Functionality
- [ ] Client can log into VVVeb admin panel
- [ ] Client can edit homepage hero text
- [ ] Client can add/remove portfolio images
- [ ] Client can edit contact information
- [ ] Changes preview before going live
- [ ] Client trained on CMS usage (documentation provided)

### AC7: Security
- [ ] HTTPS enforced (HTTP redirects to HTTPS)
- [ ] Form submissions are sanitized
- [ ] Server firewall configured
- [ ] Strong password set for CMS admin
- [ ] Cloudflare DDoS protection enabled

### AC8: Documentation
- [ ] Client documentation: CMS usage guide
- [ ] Developer documentation: Technical setup guide
- [ ] Deployment procedure documented
- [ ] Backup procedure documented
- [ ] Contact information for support (E's email)

---

## Timeline & Milestones

### Week 1: Foundation
- [ ] Server provisioned (Hetzner)
- [ ] VVVeb installed
- [ ] Cloudflare configured
- [ ] Design system implemented (colors, typography)
- [ ] Custom components started

### Week 2: Development
- [ ] All pages built
- [ ] Copy integrated
- [ ] Video optimization completed
- [ ] Form functionality implemented
- [ ] Mobile responsive testing

### Week 3: Refinement & Launch
- [ ] Portfolio images integrated
- [ ] Performance optimization
- [ ] Client review and feedback
- [ ] Revisions implemented
- [ ] Client training session
- [ ] Launch

---

## Risks & Mitigations

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Video files too large, slow loading | Medium | High | Compression guidelines, CDN delivery, mobile fallbacks |
| Client delays providing content | Medium | Medium | Parallel work tracks, use placeholders initially |
| VVVeb learning curve for client | Medium | Low | Comprehensive documentation, training session, video tutorials |
| Stock footage looks generic | Low | Medium | Careful curation, mix with client-provided authentic footage |
| Browser compatibility issues | Low | Medium | Test on all major browsers, graceful degradation |
| Form spam submissions | Medium | Low | Honeypot method, Cloudflare protection |

---

## Sign-Off

### Stakeholders
**E (Developer):** _________________________ Date: _______
**Client (Studio Owner):** _________________ Date: _______

### Document Approval
This PRD defines the complete scope and requirements for the B2B Luxury Table Maker Website project. Changes to scope require written approval and may affect timeline and budget.

---

**Document Version:** 1.0
**Last Updated:** 2025-11-14
**Author:** Dr. Quinn (Requirements Analysis) + Council
**Status:** Ready for Architecture Phase
**Next Step:** Architecture Documentation
