# TWG Landing Page - Linear Import Summary

**Generated:** 2025-11-07
**Project:** TWG Landing Page
**Timeline:** 2 weeks (November 11-22, 2025)

---

## Quick Import Guide

This document contains all 5 epics and 24 stories ready for Linear import. You can:
1. **Manual Import:** Copy each epic/story details below into Linear
2. **CSV Import:** Use the CSV format at the bottom
3. **API Import:** Use Linear's API with the JSON structure provided

---

## Epic 1: First Impression

**Priority:** P0 - Critical
**Effort:** 32 hours (4 days)
**Sprint:** Week 1

### Epic Description
Create an immersive hero section that immediately communicates TWG's value proposition through nature-inspired video content and elegant glassmorphism design, establishing emotional connection within the first 5 seconds of page load.

### Success Metrics
- Hero section loads in <1.5 seconds (LCP)
- Video creates emotional connection within 5 seconds
- Catchphrase clearly communicates sustainability + quality
- Navigation is intuitive and visible
- Core Web Vitals: LCP <1.5s, CLS <0.05

### Stories

#### Story 1.1: Video Background with Fallback Strategy
**Priority:** P0
**Effort:** 12 hours
**Assignee:** Frontend Developer 1

**User Story:**
As a procurement manager, I want to see an immersive forest video background, so that I immediately feel the connection to TWG's sustainable practices.

**Acceptance Criteria:**
- [ ] Video background plays automatically on desktop (>1024px)
- [ ] 3 different forest scenes with smooth transitions
- [ ] No audio (accessibility + performance)
- [ ] Static poster image for mobile (<768px)
- [ ] Reduced quality video for tablet (768px-1024px)
- [ ] Video loops seamlessly
- [ ] Poster image displays immediately while video loads

**Technical Notes:**
- Component: `src/components/Hero/HeroVideo.astro`
- Video specs: 1920x1080, WebM + MP4, <2.5MB
- Use `playsinline` attribute for iOS
- Preload poster image

**Dependencies:**
- Video assets (forest scenery footage)
- Compressed video files
- Poster images (WebP + JPG)

---

#### Story 1.2: Glassmorphism Header Navigation
**Priority:** P0
**Effort:** 8 hours
**Assignee:** Frontend Developer 2

**User Story:**
As a user, I want a persistent navigation header with glassmorphism effects, so that I can easily navigate the site while maintaining the modern aesthetic.

**Acceptance Criteria:**
- [ ] Header persists across all pages
- [ ] Glass effect with backdrop-filter blur
- [ ] Logo + company name on left
- [ ] Menu items: Home, Products, Manufacturing, Sustainability, Contact
- [ ] Smooth hover effects (200ms transition)
- [ ] Active page indication
- [ ] Graceful fallback for browsers without backdrop-filter support

**Technical Notes:**
- Component: `src/components/Layout/Header.astro`
- Backdrop blur: 10px
- Background: rgba(255, 255, 255, 0.1)
- Border: 1px solid rgba(255, 255, 255, 0.2)
- Height: 72px desktop

**Dependencies:**
- GlassCard component (Story 1.3)
- Navigation data from Sanity CMS

---

#### Story 1.3: Reusable Glass Card Component
**Priority:** P0
**Effort:** 4 hours
**Assignee:** Frontend Developer 2

**User Story:**
As a developer, I want a reusable glassmorphism component, so that I can maintain consistent glass effects throughout the site.

**Acceptance Criteria:**
- [ ] Configurable blur intensity (default: 10px)
- [ ] Configurable opacity (default: 0.1)
- [ ] Accepts custom classes
- [ ] Uses CSS custom properties
- [ ] Fallback for unsupported browsers
- [ ] Fully type-safe with TypeScript

**Technical Notes:**
- Component: `src/components/Glass/GlassCard.astro`
- Export Props interface with blur, opacity, class
- Browser support: Chrome/Edge/Safari/Firefox with fallback

**Dependencies:** None

---

#### Story 1.4: Hero Content Overlay
**Priority:** P0
**Effort:** 6 hours
**Assignee:** Frontend Developer 1

**User Story:**
As a visitor, I want to see clear messaging over the hero video, so that I understand TWG's value proposition immediately.

**Acceptance Criteria:**
- [ ] Company logo centered and visible
- [ ] Catchphrase text clearly legible over video
- [ ] Glass effect on text container
- [ ] Optional CTA button with hover effect
- [ ] Responsive typography (scales on mobile)
- [ ] Text remains readable even if video fails to load

**Technical Notes:**
- Component: `src/components/Hero/HeroContent.astro`
- Typography: 48px desktop, 32px mobile
- Use GlassCard for content container
- Position: absolute with z-index layering

**Dependencies:**
- GlassCard component (Story 1.3)
- Sanity CMS content (Story 1.5)

---

#### Story 1.5: Sanity CMS Schema for Site Settings
**Priority:** P0
**Effort:** 2 hours
**Assignee:** Backend Developer

**User Story:**
As a content manager, I want to manage site settings through Sanity CMS, so that I can update hero content without code changes.

**Acceptance Criteria:**
- [ ] SiteSettings document type created
- [ ] Fields: siteName, catchphrase, logo (image), navigationItems (array)
- [ ] Image validation: max 5MB, alt text required
- [ ] Navigation items sortable by order field
- [ ] Single instance (singleton)

**Technical Notes:**
- Schema: `sanity/schemas/documents/siteSettings.js`
- Singleton pattern
- Navigation items as array with name, slug, order

**Dependencies:**
- Sanity studio setup

---

## Epic 2: Product Discovery

**Priority:** P0 - Critical
**Effort:** 36 hours (4.5 days)
**Sprint:** Week 1-2

### Epic Description
Enable B2B clients to explore TWG's 5 product categories through an elegant product grid with detailed product pages, supporting A/B testing between real photos and illustrations to optimize engagement.

### Success Metrics
- All 5 product categories visible on products page
- Each product has clear imagery
- Specifications easily accessible
- A/B test: Photo vs illustration click-through rate >15%
- Product detail page load time <1.2s

### Stories

#### Story 2.1: Product Category Schema in Sanity
**Priority:** P0
**Effort:** 4 hours
**Assignee:** Backend Developer

**User Story:**
As a content manager, I want to manage product categories in Sanity, so that I can update product information without code changes.

**Acceptance Criteria:**
- [ ] ProductCategory document type created
- [ ] Fields: name, slug, description, featuredImage, specifications, gallery, ctaText, order
- [ ] Image validation (max 5MB, alt text required)
- [ ] Gallery supports 3-5 images
- [ ] Specifications as structured array
- [ ] Slug auto-generates from name
- [ ] Order field for manual sorting

**Technical Notes:**
- Schema: `sanity/schemas/documents/productCategory.js`
- Specification object: label + value
- Gallery: array of images with max 5 items

**Dependencies:**
- Sanity studio running

---

#### Story 2.2: Products Grid Page
**Priority:** P0
**Effort:** 10 hours
**Assignee:** Frontend Developer 1

**User Story:**
As a potential B2B client, I want to see all product categories in a grid, so that I can browse TWG's offerings.

**Acceptance Criteria:**
- [ ] Grid layout: 2 columns mobile, 3 columns tablet, 3-4 columns desktop
- [ ] Each card shows: product name, featured image, description (2-3 lines), "Learn More" CTA
- [ ] Hover effect: subtle scale (1.05) + shadow elevation
- [ ] Click navigates to product detail page
- [ ] Loading states for images
- [ ] Products sorted by order field
- [ ] Accessible keyboard navigation

**Technical Notes:**
- Page: `src/pages/products/index.astro`
- CSS Grid with auto-fit
- Fetch products from Sanity with getAllProducts()

**Dependencies:**
- ProductCategory schema (Story 2.1)
- ProductCard component (Story 2.3)

---

#### Story 2.3: Product Card Component
**Priority:** P0
**Effort:** 8 hours
**Assignee:** Frontend Developer 1

**User Story:**
As a user browsing products, I want attractive product cards with smooth interactions, so that I have a premium browsing experience.

**Acceptance Criteria:**
- [ ] Glass effect on card background
- [ ] Optimized image with srcset for responsive loading
- [ ] Text truncation for long descriptions (max 3 lines)
- [ ] Smooth hover animation (transform + shadow)
- [ ] Accessible link wrapping entire card
- [ ] Loading skeleton state
- [ ] Support for both photo and illustration variants (A/B testing)

**Technical Notes:**
- Component: `src/components/Products/ProductCard.astro`
- Hover: transform scale(1.05), 200ms ease-in-out
- Use Astro Image component for optimization

**Dependencies:**
- GlassCard component
- Astro Image component

---

#### Story 2.4: Product Detail Page (Dynamic Route)
**Priority:** P0
**Effort:** 10 hours
**Assignee:** Frontend Developer 2

**User Story:**
As a B2B buyer, I want detailed product information including specifications, so that I can evaluate if the product meets my needs.

**Acceptance Criteria:**
- [ ] Dynamic route `/products/[slug]`
- [ ] Hero image full-width at top
- [ ] Product name and description
- [ ] Specifications displayed as formatted table
- [ ] Image gallery (3-5 images)
- [ ] Contact CTA button
- [ ] SEO meta tags for each product
- [ ] 404 page for invalid slugs

**Technical Notes:**
- Page: `src/pages/products/[slug].astro`
- Use getStaticPaths() for pre-rendering
- Specifications as table with label/value rows

**Dependencies:**
- ImageGallery component (Story 2.5)
- Product data from Sanity

---

#### Story 2.5: Image Gallery with Lightbox
**Priority:** P1 - High
**Effort:** 4 hours
**Assignee:** Frontend Developer 2

**User Story:**
As a user viewing product details, I want to zoom into product images, so that I can examine quality and details.

**Acceptance Criteria:**
- [ ] Grid of 3-5 thumbnail images
- [ ] Click opens lightbox modal
- [ ] Previous/Next navigation in lightbox
- [ ] Keyboard navigation (arrow keys, ESC to close)
- [ ] Swipe gestures on mobile
- [ ] Close button accessible
- [ ] Prevents body scroll when open

**Technical Notes:**
- Component: `src/components/Products/ImageGallery.tsx` (React island)
- Use client:visible directive
- Prevent body scroll when lightbox open

**Dependencies:**
- React island framework

---

## Epic 3: Sustainability Verification

**Priority:** P0 - Critical
**Effort:** 24 hours (3 days)
**Sprint:** Week 2

### Epic Description
Build trust with ESG-conscious buyers by creating a dedicated sustainability page that clearly explains TWG's tree-to-tree cycle, environmental practices, and certifications through visual storytelling.

### Success Metrics
- Clear visual explanation of tree-to-tree cycle
- Visual proof of practices displayed
- Page engagement time >45 seconds
- Load time <1.0s

### Stories

#### Story 3.1: Sustainability Page Schema in Sanity
**Priority:** P0
**Effort:** 3 hours
**Assignee:** Backend Developer

**User Story:**
As a content manager, I want to manage sustainability content in Sanity, so that I can update our environmental messaging.

**Acceptance Criteria:**
- [ ] SustainabilityPage document type created (singleton)
- [ ] Fields: heroStatement, cycleSteps, practicesList, impactMetrics, certifications, futureCommitments
- [ ] Image support for cycle diagram and certification logos
- [ ] Rich text support for detailed explanations
- [ ] Validation for required fields

**Technical Notes:**
- Schema: `sanity/schemas/documents/sustainabilityPage.js`
- Nested objects: cycleStep, practice, metric, certification
- cycleDiagram as image field

**Dependencies:**
- Sanity studio running

---

#### Story 3.2: Sustainability Hero Section
**Priority:** P0
**Effort:** 5 hours
**Assignee:** Frontend Developer 1

**User Story:**
As an ESG-conscious buyer, I want to see TWG's sustainability commitment immediately, so that I know they align with my values.

**Acceptance Criteria:**
- [ ] Hero statement prominently displayed
- [ ] Background image or subtle video related to nature/sustainability
- [ ] Glass effect on text container
- [ ] Scroll indicator to encourage exploration
- [ ] Mobile-responsive typography
- [ ] Accessible heading structure

**Technical Notes:**
- Page: `src/pages/sustainability.astro`
- Hero height: 60vh
- Typography: 36px desktop, 28px mobile

**Dependencies:**
- Sustainability schema (Story 3.1)
- GlassCard component

---

#### Story 3.3: Tree-to-Tree Cycle Visual Diagram
**Priority:** P0
**Effort:** 8 hours
**Assignee:** Frontend Developer 2 + UI/UX Designer

**User Story:**
As a sustainability-focused buyer, I want to understand TWG's tree-to-tree cycle, so that I can verify their environmental claims.

**Acceptance Criteria:**
- [ ] 3-5 cycle steps visualized clearly
- [ ] Each step has icon, title, and description
- [ ] Visual flow showing circular nature
- [ ] Mobile-friendly layout (vertical on mobile, circular on desktop)
- [ ] Optional: Subtle animations on scroll
- [ ] Accessible for screen readers

**Technical Notes:**
- Component: `src/components/Sustainability/TreeCycleDiagram.astro`
- Option A: Component-based with CSS Grid
- Option B: Static infographic from designer (faster)

**Dependencies:**
- Cycle step data from Sanity
- Icons/illustrations from designer

---

#### Story 3.4: Sustainability Practices Section
**Priority:** P0
**Effort:** 5 hours
**Assignee:** Frontend Developer 1

**User Story:**
As a buyer, I want to see specific sustainability practices with evidence, so that I can trust TWG's claims.

**Acceptance Criteria:**
- [ ] List of practices (3-5 items)
- [ ] Each practice has: title, description, supporting image
- [ ] Grid layout (2 columns desktop, 1 column mobile)
- [ ] Glass cards for each practice
- [ ] Optimized images with lazy loading

**Technical Notes:**
- Component: `src/components/Sustainability/PracticesList.astro`
- Grid: auto-fit, minmax(350px, 1fr)
- Lazy load images below fold

**Dependencies:**
- Practices data from Sanity
- Practice images optimized

---

#### Story 3.5: Impact Metrics & Certifications
**Priority:** P1 - High
**Effort:** 3 hours
**Assignee:** Frontend Developer 1

**User Story:**
As a buyer, I want to see measurable environmental impact and certifications, so that I can verify TWG's credentials.

**Acceptance Criteria:**
- [ ] Impact metrics displayed as cards (e.g., "1,500+ trees planted annually")
- [ ] Certification logos with descriptions
- [ ] Responsive grid layout
- [ ] Optional: Counter animation for metrics
- [ ] Certification logos link to verification URLs

**Technical Notes:**
- Component: `src/components/Sustainability/ImpactMetrics.astro`
- Large metric values with labels and units
- Certifications component with optional verification links

**Dependencies:**
- Metrics and certifications data from Sanity
- Certification logos

---

## Epic 4: Manufacturing Transparency

**Priority:** P1 - High
**Effort:** 20 hours (2.5 days)
**Sprint:** Week 2

### Epic Description
Build trust with quality-focused B2B buyers by transparently showcasing TWG's manufacturing process, quality control measures, and complete control of the tree-to-product cycle.

### Success Metrics
- Manufacturing page shows clear process overview
- Mix of text and visual content (50/50 balance)
- Highlights 100% control of cycle
- Page engagement time >40 seconds
- Load time <1.0s

### Stories

#### Story 4.1: Manufacturing Page Schema in Sanity
**Priority:** P1
**Effort:** 3 hours
**Assignee:** Backend Developer

**User Story:**
As a content manager, I want to manage manufacturing content in Sanity, so that I can update process information.

**Acceptance Criteria:**
- [ ] ManufacturingPage document type created (singleton)
- [ ] Fields: heroTitle, overview, processSteps, qualityControl, equipment, certifications
- [ ] Image support for process photos and equipment
- [ ] Rich text support for detailed descriptions
- [ ] Validation for required fields

**Technical Notes:**
- Schema: `sanity/schemas/documents/manufacturingPage.js`
- Nested objects: processStep (with highlights array), equipmentItem
- processSteps array with stepNumber, title, description, image

**Dependencies:**
- Sanity studio running

---

#### Story 4.2: Manufacturing Page Layout
**Priority:** P1
**Effort:** 5 hours
**Assignee:** Frontend Developer 1

**User Story:**
As a quality-focused buyer, I want to learn about TWG's manufacturing process, so that I can assess their quality standards.

**Acceptance Criteria:**
- [ ] Hero section with compelling title
- [ ] Overview section with rich text content
- [ ] Responsive layout (single column mobile, multi-column desktop)
- [ ] Glass effect containers for content sections
- [ ] Breadcrumb navigation
- [ ] SEO meta tags

**Technical Notes:**
- Page: `src/pages/manufacturing.astro`
- Max width: 1200px
- Section spacing: 3-4rem

**Dependencies:**
- Manufacturing schema (Story 4.1)
- Component dependencies (Stories 4.3, 4.4)

---

#### Story 4.3: Manufacturing Process Steps Component
**Priority:** P1
**Effort:** 6 hours
**Assignee:** Frontend Developer 1

**User Story:**
As a buyer, I want to see TWG's manufacturing process step-by-step, so that I understand their methodology.

**Acceptance Criteria:**
- [ ] Display 3-5 process steps in sequential order
- [ ] Each step shows: step number, title, description, image, key highlights
- [ ] Alternating layout (image left/right) on desktop
- [ ] Stacked layout on mobile
- [ ] Step numbers visually prominent
- [ ] Smooth transitions between steps

**Technical Notes:**
- Component: `src/components/Manufacturing/ProcessSteps.astro`
- Grid layout with image positioning
- Step number as circular badge

**Dependencies:**
- Process step data from Sanity
- High-quality process photography

---

#### Story 4.4: Quality Control Highlights Section
**Priority:** P1
**Effort:** 4 hours
**Assignee:** Frontend Developer 2

**User Story:**
As a buyer, I want to understand TWG's quality control measures, so that I can trust their product quality.

**Acceptance Criteria:**
- [ ] Section with rich text content about quality control
- [ ] Emphasizes complete control of tree-to-product cycle
- [ ] Visual elements (icons or images) supporting key points
- [ ] Call-out boxes for key statistics or certifications
- [ ] Responsive layout

**Technical Notes:**
- Component: `src/components/Manufacturing/QualityControl.astro`
- Grid with quality content + highlight cards
- Highlight cards: 100% Control, Expert Craftsmen, Rigorous Testing

**Dependencies:**
- Quality control content from Sanity

---

#### Story 4.5: Equipment & Technology Showcase (Optional)
**Priority:** P2 - Medium
**Effort:** 2 hours
**Assignee:** Frontend Developer 2

**User Story:**
As a buyer, I want to see TWG's manufacturing equipment, so that I can assess their capabilities.

**Acceptance Criteria:**
- [ ] Grid of equipment items with images
- [ ] Each item: name, description, image
- [ ] Responsive grid layout
- [ ] Section can be hidden if no content
- [ ] Lazy loaded images

**Technical Notes:**
- Component: `src/components/Manufacturing/Equipment.astro`
- Grid: auto-fit, minmax(250px, 1fr)
- Conditional rendering in page

**Dependencies:**
- Equipment data from Sanity (optional)
- Equipment photography (optional)

---

## Epic 5: Contact and Inquiry

**Priority:** P0 - Critical
**Effort:** 16 hours (2 days)
**Sprint:** Week 2

### Epic Description
Enable interested B2B buyers to easily contact TWG through a simple, accessible contact form and persistent footer with contact information on every page.

### Success Metrics
- Contact information visible on every page (footer)
- Simple inquiry form accessible from all pages
- Response time expectation clearly set
- Form submission success rate >95%
- Contact page load time <0.8s

### Stories

#### Story 5.1: Contact Information Schema in Sanity
**Priority:** P0
**Effort:** 2 hours
**Assignee:** Backend Developer

**User Story:**
As a content manager, I want to manage contact information in Sanity, so that I can update it without code changes.

**Acceptance Criteria:**
- [ ] ContactInfo within SiteSettings schema
- [ ] Fields: email, phone (optional), address, social links, response time expectation
- [ ] Validation for email format
- [ ] Phone number optional
- [ ] Social links with URL validation

**Technical Notes:**
- Extend `sanity/schemas/documents/siteSettings.js`
- contactInfo object with email, phone, address, responseTime, socialLinks array
- socialLink object: platform + url

**Dependencies:**
- Sanity studio running
- SiteSettings schema (from Epic 1)

---

#### Story 5.2: Footer Component with Contact Information
**Priority:** P0
**Effort:** 4 hours
**Assignee:** Frontend Developer 1

**User Story:**
As a user, I want to see contact information on every page, so that I can easily reach out to TWG.

**Acceptance Criteria:**
- [ ] Footer appears on all pages
- [ ] Displays: company name, tagline, contact email, phone, address, social media links
- [ ] LinkedIn link prominently displayed
- [ ] Copyright notice with current year
- [ ] Privacy/Terms links (if required)
- [ ] Glass effect styling
- [ ] Mobile-responsive layout

**Technical Notes:**
- Component: `src/components/Layout/Footer.astro`
- Grid layout: auto-fit columns
- Integrated into Layout.astro

**Dependencies:**
- ContactInfo from Sanity
- GlassCard component

---

#### Story 5.3: Contact Page with Inquiry Form
**Priority:** P0
**Effort:** 6 hours
**Assignee:** Frontend Developer 2

**User Story:**
As an interested buyer, I want to send TWG a message through a contact form, so that I can start a business conversation.

**Acceptance Criteria:**
- [ ] Contact page accessible from navigation
- [ ] Form fields: name, company, email, message
- [ ] Client-side validation
- [ ] Loading state during submission
- [ ] Success confirmation message
- [ ] Error handling with user-friendly messages
- [ ] Response time expectation displayed
- [ ] Accessible form with proper labels

**Technical Notes:**
- Component: `src/components/Contact/ContactForm.tsx` (React island)
- Page: `src/pages/contact.astro`
- Form state management: idle, loading, success, error
- Use client:load directive

**Dependencies:**
- React for form handling
- API endpoint (Story 5.4)

---

#### Story 5.4: Contact Form API Endpoint (Serverless Function)
**Priority:** P0
**Effort:** 4 hours
**Assignee:** Backend Developer

**User Story:**
As the system, I want to process contact form submissions and send email notifications, so that TWG receives inquiries.

**Acceptance Criteria:**
- [ ] API endpoint `/api/contact` accepts POST requests
- [ ] Validates form data (name, company, email, message)
- [ ] Sends email notification to TWG contact email
- [ ] Returns appropriate status codes (200, 400, 500)
- [ ] Rate limiting to prevent spam
- [ ] Logs submissions for tracking

**Technical Notes:**
- Cloudflare Pages Function: `functions/api/contact.ts`
- Email service: Resend (recommended) or SendGrid
- Environment variables: CONTACT_EMAIL, RESEND_API_KEY
- Rate limiting: max 5 submissions per IP per hour

**Dependencies:**
- Email service configured
- Environment variables set in Cloudflare Pages

---

## CSV Import Format

```csv
Epic Name,Story Name,Priority,Effort (hours),Assignee,Description
"Epic 1: First Impression","Story 1.1: Video Background with Fallback Strategy",P0,12,"Frontend Developer 1","Implement responsive hero video with 30-second forest scenery loop, including fallback strategies for mobile and tablet devices."
"Epic 1: First Impression","Story 1.2: Glassmorphism Header Navigation",P0,8,"Frontend Developer 2","Build persistent glassmorphism header with desktop navigation menu."
"Epic 1: First Impression","Story 1.3: Reusable Glass Card Component",P0,4,"Frontend Developer 2","Create reusable Astro component for glassmorphism effects used throughout the site."
"Epic 1: First Impression","Story 1.4: Hero Content Overlay",P0,6,"Frontend Developer 1","Implement content overlay on hero section with company logo, catchphrase, and optional CTA."
"Epic 1: First Impression","Story 1.5: Sanity CMS Schema for Site Settings",P0,2,"Backend Developer","Create Sanity schema for site-wide settings including logo, catchphrase, and navigation items."
"Epic 2: Product Discovery","Story 2.1: Product Category Schema in Sanity",P0,4,"Backend Developer","Create Sanity schema for product categories with all required fields for product display and detail pages."
"Epic 2: Product Discovery","Story 2.2: Products Grid Page",P0,10,"Frontend Developer 1","Create responsive product grid page displaying all 5 product categories with hover effects and click navigation."
"Epic 2: Product Discovery","Story 2.3: Product Card Component",P0,8,"Frontend Developer 1","Reusable product card component with glassmorphism styling and smooth hover interactions."
"Epic 2: Product Discovery","Story 2.4: Product Detail Page (Dynamic Route)",P0,10,"Frontend Developer 2","Create dynamic product detail page with hero image, specifications table, image gallery, and contact CTA."
"Epic 2: Product Discovery","Story 2.5: Image Gallery with Lightbox",P1,4,"Frontend Developer 2","Interactive image gallery with click-to-zoom lightbox and navigation (React island)."
"Epic 3: Sustainability Verification","Story 3.1: Sustainability Page Schema in Sanity",P0,3,"Backend Developer","Create Sanity schema for sustainability content including hero statement, cycle explanation, practices, metrics, and certifications."
"Epic 3: Sustainability Verification","Story 3.2: Sustainability Hero Section",P0,5,"Frontend Developer 1","Create impactful hero section for sustainability page with statement and visual background."
"Epic 3: Sustainability Verification","Story 3.3: Tree-to-Tree Cycle Visual Diagram",P0,8,"Frontend Developer 2","Create interactive or static visual diagram explaining TWG's tree-to-tree sustainability cycle."
"Epic 3: Sustainability Verification","Story 3.4: Sustainability Practices Section",P0,5,"Frontend Developer 1","Display specific sustainability practices with supporting images and descriptions."
"Epic 3: Sustainability Verification","Story 3.5: Impact Metrics & Certifications",P1,3,"Frontend Developer 1","Display environmental impact metrics and certification logos to build credibility."
"Epic 4: Manufacturing Transparency","Story 4.1: Manufacturing Page Schema in Sanity",P1,3,"Backend Developer","Create Sanity schema for manufacturing content including process overview, steps, quality control highlights."
"Epic 4: Manufacturing Transparency","Story 4.2: Manufacturing Page Layout",P1,5,"Frontend Developer 1","Create manufacturing page with hero section and overview content."
"Epic 4: Manufacturing Transparency","Story 4.3: Manufacturing Process Steps Component",P1,6,"Frontend Developer 1","Create visual component displaying 3-5 manufacturing process steps with images and descriptions."
"Epic 4: Manufacturing Transparency","Story 4.4: Quality Control Highlights Section",P1,4,"Frontend Developer 2","Create section highlighting TWG's quality control measures and 100% cycle control."
"Epic 4: Manufacturing Transparency","Story 4.5: Equipment & Technology Showcase",P2,2,"Frontend Developer 2","Optional section showcasing manufacturing equipment and technology."
"Epic 5: Contact and Inquiry","Story 5.1: Contact Information Schema in Sanity",P0,2,"Backend Developer","Create or extend Sanity schema for contact information and form settings."
"Epic 5: Contact and Inquiry","Story 5.2: Footer Component with Contact Information",P0,4,"Frontend Developer 1","Create persistent footer component displaying contact information on all pages."
"Epic 5: Contact and Inquiry","Story 5.3: Contact Page with Inquiry Form",P0,6,"Frontend Developer 2","Create dedicated contact page with simple inquiry form (React island for form handling)."
"Epic 5: Contact and Inquiry","Story 5.4: Contact Form API Endpoint",P0,4,"Backend Developer","Create serverless API endpoint to handle contact form submissions and send email notifications."
```

---

## Summary Statistics

- **Total Epics:** 5
- **Total Stories:** 24
- **Total Effort:** 128 hours
- **Timeline:** 2 weeks (10 working days)
- **Recommended Team:** 5-6 developers, 3 QA testers

### Priority Breakdown
- **P0 (Critical):** 19 stories
- **P1 (High):** 4 stories
- **P2 (Medium):** 1 story

### Effort Breakdown by Epic
- Epic 1: 32 hours (4 days)
- Epic 2: 36 hours (4.5 days)
- Epic 3: 24 hours (3 days)
- Epic 4: 20 hours (2.5 days)
- Epic 5: 16 hours (2 days)

---

## Next Steps

1. **Import to Linear:**
   - Create 5 projects (one per epic) OR
   - Create 5 milestones (one per epic) OR
   - Use labels to tag stories by epic

2. **Set Up Workflow:**
   - States: Backlog → In Progress → In Review → QA → Done
   - Assign team members to stories
   - Set sprint dates (Week 1: Nov 11-15, Week 2: Nov 18-22)

3. **Configure Linear:**
   - Add custom fields for effort estimation
   - Set up automation for status transitions
   - Create views for sprint planning

4. **Begin Development:**
   - Start with Epic 1 (First Impression) on Day 1
   - Parallel work on Epic 2 starting Day 3
   - Epic 3-5 in Week 2

---

**Generated by:** Claude Code
**Source Documentation:** `/Users/ernestssmalikis/Projects/twg_landing/docs/stories/`
