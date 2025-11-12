# Story 3.4: Sustainability Practices Section (Webflow)

**Story ID:** STORY-3.4
**Epic:** Epic 3 - Sustainability Verification
**Priority:** P0
**Story Points:** 5
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As an** ESG-conscious buyer
**I want** to see specific sustainability practices TWG implements
**So that** I can verify their environmental commitment is authentic

---

## Description

Display 3-6 specific sustainability practices with supporting images and descriptions in a responsive grid layout on the Sustainability page.

---

## Acceptance Criteria

- [ ] List of practices (3-6 items) displayed in grid
- [ ] Each practice has: title, description, supporting image
- [ ] Grid layout: 2 columns (desktop), 1 column (mobile)
- [ ] Glass cards for each practice
- [ ] Optimized images with lazy loading
- [ ] Optional icons for visual appeal
- [ ] Hover effects on cards

---

## Webflow Implementation

### Step 1: Add Practices Section

1. Below cycle diagram on Sustainability page
2. Add **Section** element
3. Set class: `practices-section`
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
   - **Margin Bottom:** 48px

4. Inside header:
   - Add **Heading (H2):** "Our Sustainability Practices"
     - **Font Size:** 40px (desktop), 32px (mobile)
     - **Margin Bottom:** 16px
   - Add **Paragraph:** "Real actions we take every day to protect our environment"
     - **Font Size:** 18px
     - **Color:** Gray/muted

---

### Step 3: Create Practices Grid

1. Below header, add **Div Block**
2. Set class: `practices-grid`
3. Configure:
   - **Display:** Grid
   - **Grid Columns:** 2 (desktop), 1 (mobile)
   - **Gap:** 32px
   - **Grid Auto Rows:** Auto (equal height cards)

---

### Step 4: Build Practice Card (Repeat 3-6 Times)

For each practice:

1. Add **Div Block** inside grid
2. Set classes: `glass-card practice-card`
3. Configure:
   - **Display:** Flex
   - **Flex Direction:** Column
   - **Overflow:** Hidden
   - **Transition:** Transform 200ms ease
   - **Cursor:** Default

**Hover Effect:**
```css
.practice-card:hover {
  transform: translateY(-4px);
}
```

---

### Step 5: Add Practice Image

1. Inside practice card, add **Div Block**
2. Set class: `practice-image`
3. Configure:
   - **Position:** Relative
   - **Width:** 100%
   - **Aspect Ratio:** 4/3
   - **Overflow:** Hidden

4. Inside image div, add **Image:**
   - Upload practice photo (800x600px minimum)
   - Alt text: Practice title
   - **Loading:** Lazy
   - Configure:
     - **Width:** 100%
     - **Height:** 100%
     - **Object Fit:** Cover

---

### Step 6: Add Optional Icon Badge

1. Inside practice-image div, add **Div Block**
2. Set class: `practice-icon`
3. Configure:
   - **Position:** Absolute
   - **Bottom:** 16px
   - **Right:** 16px
   - **Width:** 48px
   - **Height:** 48px
   - **Background:** White
   - **Border Radius:** 50%
   - **Display:** Flex
   - **Align/Justify:** Center
   - **Font Size:** 24px
   - **Box Shadow:** 0 2px 8px rgba(0,0,0,0.15)

4. Inside icon div, add **Text:** Emoji (🌲, ♻️, 🌱, 💧, ⚡, 🌍)

---

### Step 7: Add Practice Content

1. Below practice-image, add **Div Block**
2. Set class: `practice-content`
3. Configure:
   - **Padding:** 24px
   - **Flex:** 1 (fills remaining space)

4. Inside content div:
   - Add **Heading (H3):** Practice title
     - **Font Size:** 20px
     - **Font Weight:** 600
     - **Margin Bottom:** 12px
     - Example: "Zero Waste Manufacturing"

   - Add **Paragraph:** Practice description
     - **Font Size:** 14px
     - **Line Height:** 1.6
     - **Color:** Gray/muted
     - Max 300 characters
     - Example: "Every piece of wood is utilized in our manufacturing process. Sawdust becomes biofuel, offcuts become smaller products, and bark returns to the forest as mulch."

---

### Step 8: Add Hover Effects (Custom Code)

**In Site Settings → Custom Code → Head Code:**

```html
<style>
/* Practice card hover effect */
.practice-card {
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.practice-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

/* Subtle image zoom on hover */
.practice-image img {
  transition: transform 400ms ease;
}

.practice-card:hover .practice-image img {
  transform: scale(1.05);
}

/* Mobile: single column */
@media (max-width: 768px) {
  .practices-grid {
    grid-template-columns: 1fr !important;
  }
}
</style>
```

---

## Design Specifications

**Section:**
- Padding: 96px vertical, 32px horizontal
- Max width: 1200px
- Margin: Centered

**Grid:**
- Columns: 2 (desktop), 1 (mobile)
- Gap: 32px
- Auto rows: Equal height cards

**Practice Card:**
- Glass effect background
- Border radius: 12px
- Overflow: Hidden
- Hover: Translate -4px, shadow elevation

**Practice Image:**
- Aspect ratio: 4/3
- Object fit: Cover
- Lazy loading enabled
- Hover: Scale 1.05

**Icon Badge:**
- Size: 48x48px
- Background: White
- Border radius: 50%
- Shadow: 0 2px 8px rgba(0,0,0,0.15)
- Position: Bottom-right corner

**Content:**
- Padding: 24px
- Title (H3): 20px, semibold
- Description: 14px, line-height 1.6

---

## Sample Practices Content

1. **Zero Waste Manufacturing** ♻️
   - "Every piece of wood is utilized in our manufacturing process. Sawdust becomes biofuel, offcuts become smaller products, and bark returns to the forest as mulch."
   - Image: Manufacturing facility, wood processing

2. **Renewable Energy Operations** ⚡
   - "Our facilities run on 100% renewable energy, combining solar panels and wood-waste biofuel generators to achieve carbon-neutral operations."
   - Image: Solar panels, green facility

3. **Water Conservation** 💧
   - "Closed-loop water systems recycle 95% of water used in processing. Rainwater harvesting supplements our needs, reducing municipal water dependency."
   - Image: Water treatment, sustainability equipment

4. **Biodiversity Protection** 🌍
   - "We maintain wildlife corridors and protect endangered species habitats within and around our forest operations."
   - Image: Forest wildlife, natural habitat

5. **Local Community Partnership** 🤝
   - "We employ local communities, providing training and fair wages while supporting regional economic development."
   - Image: Team members, community engagement

6. **Continuous Reforestation** 🌱
   - "For every tree harvested, we plant three more, ensuring net positive forest growth and carbon sequestration."
   - Image: Tree planting, seedlings

---

## Dependencies

**Blocked By:**
- Story 1.3 (Glass Card Component)
- Story 3.1 (Sustainability Page Setup)
- Story 3.3 (Tree Cycle Diagram - practices section comes after)

**Blocks:**
- None

**External:**
- Practice images (3-6 photos, 800x600px minimum, <500KB each)
- Practice copy (title + description for each)
- Optional: Icon emojis or images

---

## Testing Checklist

### Visual Testing

- [ ] All 3-6 practices display in grid
- [ ] Grid responsive: 2 columns desktop, 1 mobile
- [ ] Glass effect visible on cards
- [ ] Images display correctly with 4:3 aspect ratio
- [ ] Icon badges positioned bottom-right
- [ ] Typography readable and consistent
- [ ] Spacing and alignment correct

### Interaction Testing

- [ ] Hover effect: Card lifts -4px
- [ ] Hover effect: Shadow elevates
- [ ] Hover effect: Image zooms slightly (scale 1.05)
- [ ] Cards have equal height (flex layout)
- [ ] Smooth transitions (200-400ms)

### Performance Testing

- [ ] Images lazy load (not visible above fold)
- [ ] Images optimized (<500KB each)
- [ ] No layout shift when images load
- [ ] Smooth hover animations (60fps)
- [ ] Total section load <2 seconds

### Accessibility Testing

- [ ] Practice titles are H3 (proper hierarchy)
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation works (if cards are links)
- [ ] Icon badges decorative only (no critical info)

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Practices section added to Sustainability page
- [ ] 3-6 practice cards built in grid
- [ ] Each card has image, title, description
- [ ] Glass effect applied to cards
- [ ] Optional icon badges added
- [ ] Hover effects implemented
- [ ] Images optimized and lazy loaded
- [ ] Mobile responsive: 1 column layout
- [ ] Custom CSS added for hover effects
- [ ] All breakpoints tested
- [ ] Cross-browser testing completed
- [ ] Accessibility requirements met
- [ ] Published to Webflow staging
- [ ] QA sign-off

---

## Troubleshooting Guide

### Issue: Cards not equal height

**Solution:**
- Ensure grid uses `grid-auto-rows: auto`
- Each card should have `display: flex; flex-direction: column`
- Content div should have `flex: 1` to fill space
- Test with varying description lengths

### Issue: Images different sizes/ratios

**Solution:**
- Set consistent `aspect-ratio: 4/3` on image container
- Use `object-fit: cover` on images
- Ensure all images are minimum 800x600px
- Crop images to 4:3 ratio before upload

### Issue: Hover animation laggy

**Solution:**
- Use `transform` instead of `margin/padding` (GPU accelerated)
- Add `will-change: transform` to `.practice-card`
- Reduce shadow complexity
- Test on lower-end devices
- Consider disabling on mobile

### Issue: Icon badges hard to see

**Solution:**
- Increase box-shadow depth
- Add white background (already specified)
- Position further from corner (20px instead of 16px)
- Increase size (64px instead of 48px)
- Add subtle border

---

## Notes

- **Glass Effect:** Reuses `.glass-card` class from Story 1.3
- **Images:** Client must provide practice photos (3-6)
- **Icons:** Optional but recommended for visual interest
- **Equal Height:** Flexbox ensures cards align properly
- **Lazy Loading:** Images load only when scrolling into view
- **Hover Effects:** Provide tactile feedback, enhance engagement

---

## Resources

- [Webflow Grid Layout](https://university.webflow.com/lesson/css-grid-layout)
- [Webflow Image Lazy Loading](https://university.webflow.com/lesson/image-lazy-loading)
- [CSS Transform Performance](https://web.dev/animations-guide/)
- [Flexbox Equal Heights](https://css-tricks.com/equal-height-columns-flexbox/)

---

**Status:** Ready for Development ✅
**Review URL:** `[project].webflow.io/sustainability` after implementation
