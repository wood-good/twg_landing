# Story 4.3: Manufacturing Process Steps (Webflow)

**Story ID:** STORY-4.3
**Epic:** Epic 4 - Manufacturing Transparency
**Priority:** P1
**Story Points:** 6
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As a** quality-focused buyer
**I want** to see TWG's step-by-step manufacturing process
**So that** I can verify their quality control at each stage

---

## Description

Create a visual section displaying 3-5 manufacturing process steps with images and descriptions. Uses alternating image/text layout on desktop (similar to Sustainability cycle diagram from Story 3.3).

---

## Acceptance Criteria

- [ ] Display 3-5 process steps in sequential order
- [ ] Each step shows: step number, title, description, image, key highlights
- [ ] Alternating layout (image left/right) on desktop
- [ ] Stacked layout on mobile
- [ ] Step numbers visually prominent
- [ ] Smooth transitions and hover effects

---

## Webflow Implementation

### Step 1: Add Process Steps Section

1. Below overview section on Manufacturing page (from Story 4.1)
2. Add **Section** element
3. Set class: `process-steps-section`
4. Configure:
   - **Padding:** 96px (top/bottom), 32px (left/right)
   - **Max Width:** 1200px
   - **Margin:** 0 auto

---

### Step 2: Add Section Header

1. Inside section, add **Div Block**
2. Set class: `section-header`
3. Configure:
   - **Text Align:** Center
   - **Margin Bottom:** 64px

4. **Section Title:**
   - Add **Heading (H2):** "Our Manufacturing Process"
   - **Font Size:** 40px (desktop), 32px (mobile)
   - **Margin Bottom:** 16px

5. **Section Subtitle:**
   - Add **Paragraph:** "Quality control and precision at every stage"
   - **Font Size:** 18px
   - **Color:** Gray/muted

---

### Step 3: Create Container for Steps

1. Below header, add **Div Block**
2. Set class: `process-steps-container`
3. Configure:
   - **Display:** Flex
   - **Flex Direction:** Column
   - **Gap:** 64px

---

### Step 4: Build Process Step (Repeat 3-5 Times)

For each step:

1. Add **Div Block** inside container
2. Set class: `process-step` and `step-[odd/even]` (for alternating)
   - Example: `process-step step-odd` for steps 1, 3, 5
   - Example: `process-step step-even` for steps 2, 4
3. Configure:
   - **Display:** Grid
   - **Grid Columns:** 1fr 1fr (desktop), 1fr (mobile)
   - **Gap:** 32px
   - **Align Items:** Center
   - **Position:** Relative

4. **Step Number Badge:**
   - Add **Div Block**
   - Set class: `step-number-badge`
   - Text: "1" (or 2, 3, etc.)
   - Configure:
     - **Position:** Absolute
     - **Top:** -20px
     - **Left:** -20px (desktop)
     - **Width:** 60px
     - **Height:** 60px
     - **Background:** Primary green
     - **Color:** White
     - **Border Radius:** 50%
     - **Display:** Flex
     - **Align/Justify:** Center
     - **Font Size:** 24px
     - **Font Weight:** Bold
     - **Z-index:** 10
     - **Box Shadow:** 0 4px 12px rgba(0,0,0,0.2)

5. **Step Image:**
   - Add **Div Block**
   - Set class: `step-image-wrapper`
   - Configure:
     - **Position:** Relative
     - **Aspect Ratio:** 4:3
     - **Overflow:** Hidden
     - **Border Radius:** 12px
     - **Order:** 1 (for odd steps), 2 (for even steps)

   - Inside wrapper, add **Image:**
     - Upload process photo (800x600px minimum)
     - Alt text: Step title
     - **Loading:** Lazy
     - Configure:
       - **Width:** 100%
       - **Height:** 100%
       - **Object Fit:** Cover

6. **Step Content:**
   - Add **Div Block**
   - Set classes: `glass-card step-content`
   - **Padding:** 32px
   - **Order:** 2 (for odd steps), 1 (for even steps)

   - Inside content:
     - **Heading (H3):** Step title
       - Example: "Precision Cutting"
       - **Font Size:** 24px
       - **Margin Bottom:** 16px

     - **Paragraph:** Step description
       - Example: "Every piece is precision-cut using state-of-the-art CNC equipment, ensuring exact specifications and minimal waste."
       - **Font Size:** 16px
       - **Line Height:** 1.6
       - **Color:** Gray
       - **Margin Bottom:** 16px

     - **Highlights List (Optional):**
       - Add **Div Block** with class `step-highlights`
       - Inside, add **Unordered List:**
         - List items: Key points (e.g., "±0.1mm tolerance", "Zero waste cutting")
         - **Font Size:** 14px
         - Custom bullet: Checkmark (✓) via Custom Code

---

### Step 5: Alternating Layout with Custom Code

**In Site Settings → Custom Code → Head Code:**

```html
<style>
/* Process Steps Layout */
.process-step {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  align-items: center;
  margin-bottom: 64px;
  position: relative;
}

/* Step Number Badge */
.step-number-badge {
  position: absolute;
  top: -20px;
  left: -20px;
  width: 60px;
  height: 60px;
  background: #2C5530;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

/* Alternating Layout - Even Steps (Image Right) */
.process-step.step-even .step-image-wrapper {
  order: 2;
}

.process-step.step-even .step-content {
  order: 1;
}

/* Image Hover Effect */
.step-image-wrapper img {
  transition: transform 400ms ease;
}

.process-step:hover .step-image-wrapper img {
  transform: scale(1.05);
}

/* Highlights List Styling */
.step-highlights ul {
  list-style: none;
  padding: 0;
  margin-top: 16px;
}

.step-highlights li {
  padding-left: 24px;
  position: relative;
  margin-bottom: 8px;
  font-size: 14px;
  color: #666;
}

.step-highlights li::before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #2C5530;
  font-weight: bold;
  font-size: 16px;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .process-step {
    grid-template-columns: 1fr !important;
    gap: 24px;
    text-align: center;
  }

  .process-step.step-even .step-image-wrapper {
    order: 1 !important;
  }

  .process-step.step-even .step-content {
    order: 2 !important;
  }

  .step-number-badge {
    left: 50%;
    transform: translateX(-50%);
  }
}

/* Scroll Animation */
@supports (animation-timeline: view()) {
  .process-step {
    opacity: 0;
    transform: translateY(30px);
    animation: slideInStep linear forwards;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
  }

  @keyframes slideInStep {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
```

---

## Design Specifications

**Section:**
- Padding: 96px vertical, 32px horizontal
- Max width: 1200px
- Background: White or subtle gray

**Step Layout:**
- Grid: 2 columns (desktop), 1 column (mobile)
- Gap: 32px
- Alternating: Image left/right on desktop
- Mobile: Always image top, content bottom

**Step Number Badge:**
- Size: 60x60px
- Background: Primary green (#2C5530)
- Font: 24px, bold, white
- Position: Top-left corner (-20px offset)
- Shadow: 0 4px 12px rgba(0,0,0,0.2)

**Step Image:**
- Aspect ratio: 4:3
- Border radius: 12px
- Hover: Scale 1.05
- Transition: 400ms ease

**Step Content:**
- Glass card background
- Padding: 32px
- Title (H3): 24px
- Description: 16px, line-height 1.6
- Highlights: 14px with checkmark bullets

---

## Sample Content

**Step 1: Material Selection**
- Image: Timber inspection
- Description: "We personally inspect and select every log, ensuring only premium-grade timber enters our facility. Each piece is traced back to its forest of origin."
- Highlights:
  - "Forest-to-factory traceability"
  - "Quality grade verification"
  - "Moisture content testing"

**Step 2: Precision Cutting**
- Image: CNC cutting equipment
- Description: "State-of-the-art CNC equipment cuts each piece with ±0.1mm tolerance, maximizing material efficiency and ensuring perfect fits."
- Highlights:
  - "±0.1mm cutting precision"
  - "Zero-waste optimization"
  - "Computer-aided design"

**Step 3: Expert Craftsmanship**
- Image: Craftsmen working
- Description: "Master craftsmen with decades of experience refine each piece, combining traditional techniques with modern precision."
- Highlights:
  - "30+ years average experience"
  - "Hand-finished details"
  - "Quality inspection at every stage"

**Step 4: Quality Assurance**
- Image: Quality inspection
- Description: "Every product undergoes rigorous quality checks including structural integrity, finish quality, and dimensional accuracy before approval."
- Highlights:
  - "Multi-point inspection process"
  - "Structural load testing"
  - "100% quality guarantee"

**Step 5: Final Finishing** (Optional)
- Image: Finishing application
- Description: "Eco-friendly finishes are hand-applied and cured in controlled environments, ensuring durability and beauty that lasts generations."
- Highlights:
  - "Non-toxic, water-based finishes"
  - "UV-resistant coatings"
  - "Controlled curing environment"

---

## Dependencies

**Blocked By:**
- Story 4.1 (Manufacturing Page Setup)
- Story 1.3 (Glass Card Component)

**Blocks:**
- None

**External:**
- Process step images (3-5 photos, 800x600px, <500KB each)
- Process step copy (title + description for each)
- Optional: Highlight points for each step

---

## Testing Checklist

### Visual Testing

- [ ] All 3-5 steps display correctly
- [ ] Step numbers show 1-5 in sequence
- [ ] Images load and display properly
- [ ] Glass effect visible on content cards
- [ ] Alternating layout works (image left/right on desktop)
- [ ] Mobile: Image always on top
- [ ] Step badges positioned correctly

### Interaction Testing

- [ ] Hover effect: Image zooms (scale 1.05)
- [ ] Smooth transitions (400ms)
- [ ] Scroll animation works (if browser supports)
- [ ] No layout shift when images load

### Responsive Testing

- [ ] Desktop: 2-column alternating layout
- [ ] Tablet: Proper spacing and sizing
- [ ] Mobile: Stacked layout (image top, content bottom)
- [ ] Badge position adjusts on mobile (centered)

### Accessibility Testing

- [ ] Step titles are H3 (proper hierarchy)
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA
- [ ] Highlight bullets visible and readable
- [ ] Keyboard navigation works

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Process steps section added to Manufacturing page
- [ ] 3-5 steps built with alternating layout
- [ ] Each step has number, image, title, description, highlights
- [ ] Glass effect applied to content cards
- [ ] Hover effects implemented
- [ ] Images optimized and lazy loaded
- [ ] Custom CSS added for alternating layout
- [ ] Mobile responsive: stacked layout
- [ ] Scroll animations (optional, progressive enhancement)
- [ ] All breakpoints tested
- [ ] Cross-browser testing completed
- [ ] Accessibility requirements met
- [ ] Published to Webflow staging
- [ ] QA sign-off

---

## Troubleshooting Guide

### Issue: Alternating layout not working

**Solution:**
- Ensure Custom CSS is added to Site Settings → Head Code
- Check step has both classes: `process-step` and `step-odd`/`step-even`
- Verify CSS uses correct selectors (`.process-step.step-even`)
- Test on published site (not just Designer preview)

### Issue: Step badges overlapping content

**Solution:**
- Adjust badge position offsets (top: -20px, left: -20px)
- Increase z-index on badge (should be 10+)
- Check parent `.process-step` has `position: relative`
- Test at different screen sizes

### Issue: Images different aspect ratios

**Solution:**
- Set consistent `aspect-ratio: 4/3` on image wrapper
- Use `object-fit: cover` on images
- Ensure all images are minimum 800x600px
- Crop/resize images before upload

---

## Notes

- **Similar to Story 3.3:** Uses same alternating layout pattern
- **Glass Effect:** Reuses `.glass-card` class from Story 1.3
- **Images:** Client must provide process photos (3-5)
- **Highlights:** Optional but recommended for credibility
- **Scroll Animation:** Progressive enhancement, degrades gracefully
- **Mobile-First:** Always test mobile layout first

---

## Resources

- [Webflow Grid Layout](https://university.webflow.com/lesson/css-grid-layout)
- [CSS Order Property](https://developer.mozilla.org/en-US/docs/Web/CSS/order)
- [View Timeline Animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline)

---

**Status:** Ready for Development ✅
**Review URL:** `[project].webflow.io/manufacturing` after implementation
