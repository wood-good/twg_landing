# Story 1.4: Hero Content Overlay (Webflow)

**Story ID:** STORY-1.4
**Epic:** Epic 1 - First Impression
**Priority:** P0 - Critical
**Story Points:** 3
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As a** site visitor
**I want** to see TWG's brand message overlaid on the hero video
**So that** I immediately understand their value proposition

---

## Description

Implement content overlay on hero section with company logo, catchphrase, and optional CTA button using Webflow's positioning and the glass-card styling. Content is positioned absolutely over the video background and centered using Flexbox.

---

## Acceptance Criteria

- [ ] Company logo centered and visible
- [ ] Catchphrase text clearly legible over video
- [ ] Glass effect on text container (using `.glass-card` class)
- [ ] Optional CTA button with hover effect
- [ ] Responsive typography (scales on mobile)
- [ ] Text remains readable even if video fails to load
- [ ] Centered both vertically and horizontally
- [ ] Text has shadow for legibility

---

## Webflow Implementation

### Step 1: Create Hero Content Container

1. Inside the **Hero Section** (from Story 1.1):
   - Add a **Div Block** (this will be the overlay container)
   - Set class: `hero-overlay`
   - Configure positioning:
     - **Position:** Absolute
     - **Top:** 0px
     - **Left:** 0px
     - **Right:** 0px
     - **Bottom:** 0px
     - **Z-index:** 2 (above video which is z-index: 1)
   - Configure layout:
     - **Display:** Flex
     - **Justify:** Center (horizontal centering)
     - **Align:** Center (vertical centering)

---

### Step 2: Create Glass Content Card

1. Inside `.hero-overlay`, add another **Div Block**
2. Apply classes: `glass-card` (from Story 1.3)
3. Add additional class: `hero-content-card`
4. Configure `.hero-content-card` styling:
   - **Max Width:** 800px
   - **Width:** 90% (for mobile responsiveness)
   - **Padding:** 48px (3rem) all sides
   - **Text Align:** Center

---

### Step 3: Add Logo

1. Inside `.hero-content-card`, add **Image** element
2. Upload logo to **Asset Manager**
3. Configure logo:
   - Class: `hero-logo`
   - **Max Width:** 200px (desktop)
   - **Width:** Auto
   - **Height:** Auto
   - **Margin Bottom:** 32px (2rem)
   - **Filter → Custom CSS:** Add drop-shadow

**Add to Custom Code for logo shadow:**
```html
<style>
.hero-logo {
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
}
</style>
```

---

### Step 4: Add Catchphrase (H1)

1. Below logo, add **Heading** element (H1)
2. Set class: `hero-catchphrase`
3. Type your catchphrase text (e.g., "Sustainable Wood Excellence")
4. Configure styling:
   - **Font Size:** 48px (3rem)
   - **Font Weight:** 700 (Bold)
   - **Color:** White (#FFFFFF)
   - **Line Height:** 1.2
   - **Margin:** 0 (top/left/right), 16px (bottom)
   - **Text Shadow:** Use Custom Code (below)

**Add to Custom Code for text shadows:**
```html
<style>
.hero-catchphrase {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subheading {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}
</style>
```

---

### Step 5: Add Subheading (Optional)

1. Below catchphrase, add **Paragraph** element
2. Set class: `hero-subheading`
3. Type subheading text (e.g., "Premium Quality for Discerning Buyers")
4. Configure styling:
   - **Font Size:** 24px (1.5rem)
   - **Color:** White (#FFFFFF)
   - **Opacity:** 90%
   - **Margin:** 0 (top/left/right), 32px (bottom)

---

### Step 6: Add CTA Button (Optional)

1. Below subheading, add **Link Block** or **Button**
2. Set class: `hero-cta`
3. Configure styling:
   - **Display:** Inline-block
   - **Padding:** 16px (top/bottom), 32px (left/right)
   - **Background:** White with 20% opacity
   - **Border:** 2px solid White
   - **Border Radius:** 8px
   - **Color:** White
   - **Font Size:** 18px (1.125rem)
   - **Font Weight:** 600 (Semi-bold)
   - **Text Decoration:** None
   - **Transition:** All 200ms ease-in-out

**Configure Link:**
- Set URL to `/products` or appropriate page
- Text: "Explore Products" or client's preferred CTA

---

### Step 7: Add Hover Effect to CTA

**Method A: Using Webflow Interactions**

1. Select `.hero-cta` button
2. Open **Interactions** panel
3. Create new **Mouse Hover** interaction:
   - **Hover Action:**
     - Background opacity: 30%
     - Transform: Move Y -2px
     - Box Shadow: 0 4px 12px rgba(0, 0, 0, 0.2)
     - Transition: 200ms ease-in-out
   - **Hover Out:**
     - Reset to original state
     - Transition: 200ms ease-in-out

**Method B: Using Custom CSS (Faster)**

```html
<style>
.hero-cta {
  transition: all 200ms ease-in-out;
}

.hero-cta:hover {
  background: rgba(255, 255, 255, 0.3) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>
```

---

### Step 8: Configure Responsive Breakpoints

**Tablet Breakpoint (768px):**

1. Switch to **Tablet** breakpoint
2. Select `.hero-content-card`:
   - Padding: 32px (2rem)
3. Select `.hero-logo`:
   - Max Width: 150px
4. Select `.hero-catchphrase`:
   - Font Size: 32px (2rem)
5. Select `.hero-subheading`:
   - Font Size: 18px (1.125rem)
6. Select `.hero-cta`:
   - Padding: 14px / 24px
   - Font Size: 16px (1rem)

**Mobile Portrait Breakpoint (480px):**

1. Switch to **Mobile Portrait**
2. Select `.hero-catchphrase`:
   - Font Size: 24px (1.5rem)
3. Select `.hero-subheading`:
   - Font Size: 16px (1rem)
4. Select `.hero-content-card`:
   - Padding: 24px (1.5rem)

---

## Complete Custom Code Reference

Add this to **Site Settings → Custom Code → Head Code**:

```html
<style>
/* Hero Content Overlay Styling */

/* Logo drop shadow */
.hero-logo {
  filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3));
}

/* Text shadows for legibility */
.hero-catchphrase {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subheading {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

/* CTA button styling and hover effect */
.hero-cta {
  background: rgba(255, 255, 255, 0.2);
  transition: all 200ms ease-in-out;
}

.hero-cta:hover {
  background: rgba(255, 255, 255, 0.3) !important;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .hero-logo {
    max-width: 150px;
  }
}

@media (max-width: 480px) {
  .hero-logo {
    max-width: 120px;
  }
}
</style>
```

---

## Design Specifications

**Layout:**
- Overlay: Absolute positioning, full coverage
- Content card: Max 800px width, centered
- Glass effect: Using `.glass-card` class (blur: 10px, opacity: 0.1)

**Typography (Desktop):**
- Catchphrase: 48px (3rem), weight 700, white
- Subheading: 24px (1.5rem), weight 400, white 90%
- CTA: 18px (1.125rem), weight 600, white

**Typography (Tablet 768px):**
- Catchphrase: 32px (2rem)
- Subheading: 18px (1.125rem)
- CTA: 16px (1rem)

**Typography (Mobile 480px):**
- Catchphrase: 24px (1.5rem)
- Subheading: 16px (1rem)

**Spacing:**
- Logo margin bottom: 32px
- Catchphrase margin bottom: 16px
- Subheading margin bottom: 32px
- Content card padding: 48px (desktop), 32px (tablet), 24px (mobile)

**Effects:**
- Logo: Drop shadow for depth
- Text: Shadow for legibility over video
- CTA: Lift on hover (2px), opacity increase

---

## Content Examples

**Catchphrase Options:**
- "Sustainable Wood Excellence"
- "Quality You Can Trust"
- "From Forest to Finished Product"
- "Premium Wood, Exceptional Service"

**Subheading Options:**
- "Premium quality for discerning buyers"
- "100% sustainably sourced, expertly crafted"
- "Complete control of the tree-to-product cycle"
- "Serving B2B clients since [year]"

**CTA Options:**
- "Explore Products"
- "View Our Collection"
- "Get Started"
- "Learn More"

---

## Dependencies

**Blocked By:**
- Story 1.1 (Hero Video) - needs video container
- Story 1.3 (Glass Card styling) - needs `.glass-card` class

**Blocks:**
- None

**External:**
- Logo asset (SVG or PNG with transparency)
- Final catchphrase copy from client
- CTA destination page created

---

## Testing Checklist

### Webflow Preview Testing

- [ ] Preview in all breakpoints (Desktop, Tablet, Mobile Portrait)
- [ ] Content is centered both horizontally and vertically
- [ ] Logo displays correctly and scales
- [ ] Catchphrase is legible over video
- [ ] Subheading is legible (if present)
- [ ] CTA button displays correctly (if present)
- [ ] Glass effect visible on content card
- [ ] Text shadows enhance readability

### Browser Testing (Published Site)

- [ ] Chrome (Windows/Mac): All elements visible ✅
- [ ] Safari (Mac/iOS): Text shadows render correctly ✅
- [ ] Firefox (Windows/Mac): Glass effect works ✅
- [ ] Edge (Windows): All styling correct ✅
- [ ] Mobile Safari (iOS): Content centered ✅
- [ ] Chrome Mobile (Android): Responsive typography works ✅

### Interaction Testing

- [ ] CTA button hover effect works (desktop)
- [ ] CTA button link goes to correct page
- [ ] CTA button tap works on mobile
- [ ] No layout shift when content loads
- [ ] Content remains centered when window resizes

### Accessibility Testing

- [ ] H1 catchphrase is first heading on page
- [ ] Logo has meaningful alt text
- [ ] Text contrast meets WCAG AA (4.5:1 minimum)
- [ ] CTA button is keyboard accessible (Tab key)
- [ ] Focus indicator visible on CTA
- [ ] Screen reader announces content in logical order

---

## Accessibility Requirements

- [ ] Proper heading hierarchy (H1 for catchphrase)
- [ ] Logo alt text: "TWG Logo" or company name
- [ ] Text contrast ratio ≥4.5:1 (white on video/poster)
- [ ] Text shadows enhance legibility
- [ ] CTA button keyboard accessible
- [ ] Focus indicator visible (Webflow default or custom)
- [ ] Content order logical for screen readers

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Hero overlay positioned correctly over video
- [ ] Logo uploaded and displaying
- [ ] Catchphrase text entered (client-provided copy)
- [ ] Subheading added (if requested)
- [ ] CTA button configured with correct link (if requested)
- [ ] Glass card effect applied
- [ ] Text shadows applied for legibility
- [ ] CTA hover effect working
- [ ] Responsive breakpoints configured
- [ ] All typography scales correctly
- [ ] Cross-browser testing completed
- [ ] Accessibility requirements met
- [ ] Published to Webflow staging
- [ ] Client approval

---

## Troubleshooting Guide

### Issue: Content not centered
**Solution:**
- Verify `.hero-overlay` has Display: Flex
- Check Justify: Center and Align: Center are set
- Ensure Position: Absolute with inset: 0
- Check z-index is higher than video (z-index: 2)

### Issue: Text not legible over video
**Solution:**
- Ensure glass card background has opacity (`.glass-card` applied)
- Add/increase text-shadow in Custom Code
- Consider increasing glass card opacity (0.15 or 0.2)
- Verify video poster has dark areas for contrast

### Issue: CTA hover effect not working
**Solution:**
- Check Custom Code is saved and published
- Ensure `.hero-cta:hover` CSS is present
- Clear browser cache and test again
- Try using Webflow Interaction instead of CSS

### Issue: Content overlaps on mobile
**Solution:**
- Reduce padding on `.hero-content-card` for mobile breakpoint
- Decrease font sizes for mobile (already specified)
- Ensure `.hero-overlay` width is 100%
- Check content card max-width allows margins

### Issue: Logo not scaling
**Solution:**
- Set logo **Width:** Auto, **Max-Width:** 200px
- Ensure **Height:** Auto (maintains aspect ratio)
- Configure different max-widths for breakpoints
- Use SVG format for best scaling

---

## Notes

- Content should be editable by client via Webflow Editor (text elements)
- CTA is optional - can be added in Phase 1.5 if linking to products
- Text shadows are critical for legibility over video
- Glass card provides background blur to help readability
- Consider A/B testing different catchphrases
- Logo should be high-resolution (2x for retina displays)

---

## Resources

- [Webflow Flexbox Centering](https://university.webflow.com/lesson/intro-to-flexbox)
- [Webflow Positioning](https://university.webflow.com/lesson/position)
- [Webflow Interactions 2.0](https://university.webflow.com/lesson/interactions-2-0)
- [CSS Text Shadow (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow)
- [Web Content Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Status:** Ready for Development ✅
**Review URL:** Will be Webflow staging domain
