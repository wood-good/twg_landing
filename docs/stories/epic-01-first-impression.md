# Epic 1: First Impression

**Epic ID:** EPIC-01
**Priority:** P0 - Critical
**Status:** Ready for Development
**Estimated Effort:** 21 story points (~3 days)
**Sprint:** Sprint 1 (Week 1)
**Platform:** Webflow + Cloudflare

---

## Epic Goal

Create an immersive hero section that immediately communicates TWG's value proposition through nature-inspired video content and elegant glassmorphism design, establishing emotional connection within the first 5 seconds of page load using Webflow's visual builder.

---

## User Story

**As a** procurement manager
**I want** to immediately understand TWG's value proposition
**So that** I can quickly assess if they're worth investigating

---

## Success Metrics

- Hero section loads in <1.5 seconds (LCP)
- Video creates emotional connection within 5 seconds
- Catchphrase clearly communicates sustainability + quality
- Navigation is intuitive and visible
- Core Web Vitals: LCP <1.5s, CLS <0.05
- Webflow Lighthouse score: Performance >90

---

## User Stories Breakdown

### Story 1.1: Hero Video Background (Webflow)

**Priority:** P0
**Story Points:** 5
**Assignee:** Developer

**Description:**
Implement responsive hero video with 30-second forest scenery loop using Webflow's native video element, including fallback strategies for mobile and tablet devices.

**Acceptance Criteria:**
- [ ] Video background plays automatically on desktop (>1024px)
- [ ] 3 different forest scenes with smooth transitions
- [ ] No audio (accessibility + performance)
- [ ] Static poster image for mobile (<768px)
- [ ] Reduced quality video for tablet (768px-1024px)
- [ ] Video loops seamlessly
- [ ] Poster image displays immediately while video loads

**Webflow Implementation:**
1. Upload video assets to Webflow Asset Manager
2. Add Video element to Hero section
3. Configure responsive settings:
   - Desktop: Full quality video (1920x1080, <2.5MB)
   - Tablet: Reduced quality (1280x720, <1.5MB)
   - Mobile: Static poster image only
4. Set video to autoplay, loop, muted
5. Add poster image as fallback

**Video Specifications:**
- Desktop: 1920x1080, MP4, <2.5MB
- Tablet: 1280x720, MP4, <1.5MB
- Mobile: Static poster (WebP + JPG fallback)

**Dependencies:**
- Video assets compressed via FFmpeg
- Poster images optimized

---

### Story 1.2: Glassmorphism Header Navigation (Webflow)

**Priority:** P0
**Story Points:** 5
**Assignee:** Developer

**Description:**
Build persistent glassmorphism header with desktop navigation menu using Webflow visual builder.

**Acceptance Criteria:**
- [ ] Header persists across all pages (Webflow Symbol)
- [ ] Glass effect with backdrop-filter blur
- [ ] Logo + company name on left
- [ ] Menu items: Home, Products, Manufacturing, Sustainability, Contact
- [ ] Smooth hover effects (200ms transition)
- [ ] Active page indication
- [ ] Graceful fallback for browsers without backdrop-filter support

**Webflow Implementation:**
1. Create Symbol: "Header"
2. Add Navbar element
3. Style with glassmorphism:
   - Backdrop blur: 10px (CSS: backdrop-filter)
   - Background: rgba(255, 255, 255, 0.1)
   - Border: 1px solid rgba(255, 255, 255, 0.2)
4. Add logo image (from CMS or static)
5. Create Nav Menu with links
6. Add hover interactions (Webflow Interactions)
7. Configure sticky positioning

**Design Specifications:**
- Height: 72px desktop, 60px mobile
- Backdrop blur: 10-15px
- Hover transition: 200ms ease-out

**Dependencies:**
- Logo asset uploaded to Webflow

---

### Story 1.3: Mobile Navigation Menu (Webflow)

**Priority:** P0
**Story Points:** 5
**Assignee:** Developer

**Description:**
Create responsive mobile hamburger menu using Webflow's native menu functionality.

**Acceptance Criteria:**
- [ ] Hamburger icon visible on mobile (<992px)
- [ ] Full-screen overlay when opened
- [ ] Touch-optimized spacing (44x44px tap targets)
- [ ] Smooth open/close animation
- [ ] Close on menu item selection
- [ ] Prevents body scroll when open

**Webflow Implementation:**
1. Use Webflow Navbar's built-in mobile menu
2. Style hamburger icon
3. Configure menu overlay (full-screen)
4. Add open/close animations using Webflow Interactions
5. Style menu items with proper spacing
6. Test on mobile devices

**Dependencies:**
- Header navigation (Story 1.2)

---

### Story 1.4: Hero Content Overlay (Webflow CMS)

**Priority:** P0
**Story Points:** 3
**Assignee:** Developer

**Description:**
Implement content overlay on hero section with company logo, catchphrase, and optional CTA using Webflow CMS.

**Acceptance Criteria:**
- [ ] Company logo centered and visible
- [ ] Catchphrase text clearly legible over video
- [ ] Glass effect on text container
- [ ] Optional CTA button with hover effect
- [ ] Responsive typography (scales on mobile)
- [ ] Text remains readable even if video fails to load

**Webflow Implementation:**
1. Add div to hero section for content overlay
2. Position absolutely over video
3. Add glassmorphism styling:
   - Backdrop blur: 10-15px
   - Background: rgba(255,255,255,0.1)
4. Add Text elements for catchphrase
5. Style typography:
   - Desktop: 48px heading
   - Mobile: 32px heading (use Webflow breakpoints)
6. Optional: Connect to Webflow CMS for editable content

**Typography:**
- Heading: Playfair Display (or similar serif)
- Fluid sizing using Webflow responsive typography
- Color: White with text-shadow for legibility
- Line height: 1.2

**Dependencies:**
- Hero video (Story 1.1)
- Glassmorphism effects (Story 1.2)

---

### Story 1.5: Webflow CMS Setup & Site Settings

**Priority:** P0
**Story Points:** 3
**Assignee:** Developer

**Description:**
Configure Webflow CMS collections for site-wide settings and dynamic content management.

**Acceptance Criteria:**
- [ ] Webflow project created
- [ ] CMS Plan activated ($23/mo)
- [ ] Site settings configured (if using CMS)
- [ ] Global content manageable via Webflow Editor
- [ ] Logo and branding uploaded to Asset Manager

**Webflow Implementation:**
1. Create Webflow account
2. New project: "TWG Landing Page"
3. Activate CMS plan
4. Configure site settings:
   - Site name
   - Favicon
   - SEO defaults
5. Upload logo to Asset Manager
6. Optional: Create CMS Collection "Site Settings" for:
   - Catchphrase (text)
   - Navigation items (if dynamic)

**Notes:**
- Webflow CMS is optional for Phase 1
- Most content can be static in Webflow Designer
- CMS useful for client-editable content later

**Dependencies:**
- Webflow account and payment

---

## Technical Architecture Notes

### Webflow Platform Advantages
- Visual builder eliminates custom code for hero section
- Built-in responsive breakpoints
- Automatic CSS optimization
- Native interactions for animations
- Integrated CDN (Fastly)

### Performance Considerations
- Upload optimized video directly to Webflow Asset Manager
- Webflow automatically handles responsive delivery
- Use Webflow's lazy loading for below-fold content
- Minimize custom code embeds

### Accessibility Requirements
- Alt text for logo image (Webflow enforces)
- Proper heading hierarchy (h1 for catchphrase)
- Keyboard navigation for menu (Webflow Navbar handles)
- ARIA labels configurable in Webflow
- Video pause control (Webflow video settings)

### Cross-Browser Testing
- Test backdrop-filter in all target browsers
- Test video autoplay on Safari iOS
- Verify glass effects on Edge
- Test mobile menu on iOS and Android

---

## Definition of Done

- [ ] All 5 stories completed with acceptance criteria met
- [ ] Hero section loads in <1.5 seconds (Lighthouse LCP)
- [ ] Video plays smoothly on desktop
- [ ] Glass effects render correctly across all browsers
- [ ] Mobile fallback (poster image) works correctly
- [ ] Navigation fully functional and accessible
- [ ] Webflow published to staging domain
- [ ] Manual testing on target devices
- [ ] Lighthouse score: Performance >90, Accessibility >90
- [ ] Client review and approval

---

## Dependencies

**External:**
- Video assets (forest scenery) - compressed and optimized
- Company logo and brand assets
- Catchphrase copy approved by stakeholders
- Webflow account with CMS plan

**Internal:**
- Webflow project created
- Cloudflare proxy configured (optional for Phase 1)
- Design system colors/fonts defined in Webflow

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Video files too large | High | Pre-compress with FFmpeg, target <2.5MB |
| Webflow learning curve | Low | Extensive documentation, intuitive interface |
| Backdrop-filter performance | Medium | Test on devices, implement solid color fallback |
| Video autoplay blocked | Medium | Ensure muted, show poster immediately |
| Content not ready | Low | Use placeholder text in Webflow Designer |

---

## Testing Checklist

**Manual Testing in Webflow:**
- [ ] Preview in all breakpoints (Desktop, Tablet, Mobile)
- [ ] Test interactions and hover states
- [ ] Verify video plays correctly
- [ ] Check navigation menu functionality
- [ ] Mobile menu opens/closes smoothly

**Cross-Browser Testing:**
- [ ] Chrome (latest)
- [ ] Safari (latest, including iOS)
- [ ] Firefox (latest)
- [ ] Edge (latest)

**Performance Testing:**
- [ ] Run Lighthouse on published staging site
- [ ] Check LCP is <1.5s
- [ ] Verify no layout shift (CLS <0.05)
- [ ] Test on slow 3G connection

**Accessibility Testing:**
- [ ] axe DevTools: 0 violations
- [ ] Keyboard navigation works
- [ ] Screen reader testing (basic)
- [ ] Color contrast >4.5:1

---

## Notes for Developers

- Webflow handles most responsive logic visually
- Use Webflow Symbols for reusable components (header, footer)
- Apply glassmorphism via custom CSS in Webflow (backdrop-filter)
- Test video on actual devices, not just browser dev tools
- Compress video assets before uploading to Webflow
- Use Webflow's built-in image optimization
- Webflow Interactions 2.0 for smooth animations

---

**Ready for Sprint Planning:** ✅
**Dependencies Clear:** ✅
**Acceptance Criteria Defined:** ✅
