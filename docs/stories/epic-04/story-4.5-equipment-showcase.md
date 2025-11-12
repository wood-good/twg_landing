# Story 4.5: Equipment & Technology Showcase (Webflow)

**Story ID:** STORY-4.5
**Epic:** Epic 4 - Manufacturing Transparency
**Priority:** P2
**Story Points:** 2
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As a** quality-focused buyer
**I want** to see the equipment TWG uses
**So that** I can assess their manufacturing capabilities

---

## Description

Optional section showcasing manufacturing equipment and technology. This section can be hidden if content is not available or client chooses not to display equipment details.

---

## Acceptance Criteria

- [ ] Grid of equipment items with images
- [ ] Each item: name, description, image
- [ ] Responsive grid layout (3 columns desktop, 2 tablet, 1 mobile)
- [ ] Section can be easily hidden if no content
- [ ] Lazy loaded images
- [ ] Glass effect cards

---

## Webflow Implementation

### Step 1: Add Equipment Section (Optional)

1. Below quality control section on Manufacturing page (from Story 4.4)
2. Add **Section** element
3. Set class: `equipment-section`
4. Configure:
   - **Padding:** 96px (top/bottom), 32px (left/right)
   - **Max Width:** 1200px
   - **Margin:** 0 auto

**Note:** This section is optional. Hide entire section if equipment content unavailable.

---

### Step 2: Add Section Header

1. Inside section, add **Div Block**
2. Set class: `section-header`
3. **Text Align:** Center
4. **Margin Bottom:** 48px

5. **Section Title:**
   - Add **Heading (H2):** "Our Equipment & Technology"
   - **Font Size:** 40px (desktop), 32px (mobile)
   - **Margin Bottom:** 16px

6. **Section Subtitle:**
   - Add **Paragraph:** "Modern precision equipment for superior results"
   - **Font Size:** 18px
   - **Color:** Gray/muted

---

### Step 3: Create Equipment Grid

1. Below header, add **Div Block**
2. Set class: `equipment-grid`
3. Configure:
   - **Display:** Grid
   - **Grid Columns:** 3 (desktop), 2 (tablet), 1 (mobile)
   - **Gap:** 32px
   - **Grid Auto Rows:** Auto

---

### Step 4: Build Equipment Card (Repeat 2-6 Times)

For each equipment item:

1. Add **Div Block** inside grid
2. Set classes: `glass-card equipment-card`
3. Configure:
   - **Display:** Flex
   - **Flex Direction:** Column
   - **Overflow:** Hidden
   - **Transition:** Transform 200ms ease

4. **Equipment Image:**
   - Add **Div Block** with class `equipment-image-wrapper`
   - Configure:
     - **Position:** Relative
     - **Width:** 100%
     - **Aspect Ratio:** 4:3
     - **Overflow:** Hidden

   - Inside wrapper, add **Image:**
     - Upload equipment photo (600x450px minimum)
     - Alt text: Equipment name
     - **Loading:** Lazy
     - Configure:
       - **Width:** 100%
       - **Height:** 100%
       - **Object Fit:** Cover

5. **Equipment Content:**
   - Below image, add **Div Block** with class `equipment-content`
   - **Padding:** 24px

   - Inside content:
     - **Heading (H3):** Equipment name
       - Example: "CNC Precision Router"
       - **Font Size:** 20px
       - **Margin Bottom:** 12px

     - **Paragraph:** Equipment description
       - Example: "Computer-controlled routing for ±0.1mm precision cutting and complex pattern work."
       - **Font Size:** 14px
       - **Line Height:** 1.6
       - **Color:** Gray
       - Max 200 characters

---

### Step 5: Add Hover Effects (Custom Code)

**In Site Settings → Custom Code → Head Code:**

```html
<style>
/* Equipment Grid */
.equipment-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
  grid-auto-rows: auto;
}

/* Equipment Card */
.equipment-card {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.equipment-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

/* Equipment Image */
.equipment-image-wrapper {
  position: relative;
  width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.equipment-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 400ms ease;
}

.equipment-card:hover .equipment-image-wrapper img {
  transform: scale(1.05);
}

/* Equipment Content */
.equipment-content {
  padding: 24px;
  flex: 1;
}

/* Tablet: 2 columns */
@media (min-width: 768px) and (max-width: 1023px) {
  .equipment-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

/* Mobile: 1 column */
@media (max-width: 767px) {
  .equipment-grid {
    grid-template-columns: 1fr !important;
  }
}

/* Hide section if no content */
.equipment-section:empty {
  display: none;
}
</style>
```

---

## Design Specifications

**Section:**
- Padding: 96px vertical, 32px horizontal
- Max width: 1200px
- Background: White or light gray

**Equipment Grid:**
- Columns: 3 (desktop), 2 (tablet), 1 (mobile)
- Gap: 32px
- Auto rows: Equal height cards

**Equipment Card:**
- Glass card background
- Overflow: Hidden
- Hover: Translate -4px, shadow elevation

**Equipment Image:**
- Aspect ratio: 4:3
- Object fit: Cover
- Lazy loading enabled
- Hover: Scale 1.05

**Equipment Content:**
- Padding: 24px
- Title (H3): 20px
- Description: 14px, line-height 1.6, max 200 chars

---

## Sample Content

**Equipment 1: CNC Precision Router**
- Image: CNC machine in operation
- Description: "Computer-controlled routing for ±0.1mm precision cutting and complex pattern work."

**Equipment 2: Industrial Thickness Planer**
- Image: Planer machine
- Description: "High-capacity planer for uniform thickness and smooth surface finish across all wood types."

**Equipment 3: Wide Belt Sander**
- Image: Belt sander
- Description: "Multi-stage sanding system for perfectly smooth surfaces and consistent finish preparation."

**Equipment 4: Dust Collection System**
- Image: Dust collection equipment
- Description: "Industrial air filtration maintains clean workspace and protects craftsmen health."

**Equipment 5: Climate Control**
- Image: Climate control system
- Description: "Precision humidity and temperature control prevents wood movement and ensures stability."

**Equipment 6: Quality Testing Station**
- Image: Testing equipment
- Description: "Advanced measurement tools verify dimensional accuracy and structural integrity."

---

## Conditional Display

**To Hide Section if No Content:**

1. **Option A:** Delete entire section in Webflow Designer
2. **Option B:** Add Custom Attribute to section:
   - **Name:** `data-cms-content`
   - **Value:** `equipment`
   - Use Custom Code to hide if empty (CSS provided above)

3. **Option C:** Use Webflow CMS conditional visibility (if using CMS approach)

---

## Dependencies

**Blocked By:**
- Story 4.1 (Manufacturing Page Setup)
- Story 4.4 (Quality Control - equipment section comes after)
- Story 1.3 (Glass Card Component)

**Blocks:**
- None (final manufacturing section)

**External:**
- Equipment images (2-6 photos, 600x450px, <300KB each)
- Equipment names and descriptions
- Optional: Equipment specifications

---

## Testing Checklist

### Visual Testing

- [ ] Equipment grid displays correctly
- [ ] 3-column layout on desktop
- [ ] 2-column layout on tablet
- [ ] 1-column layout on mobile
- [ ] Glass effect visible on cards
- [ ] Images display with correct aspect ratio
- [ ] Text readable and properly formatted

### Interaction Testing

- [ ] Card hover effect (lift -4px)
- [ ] Image zoom on hover (scale 1.05)
- [ ] Smooth transitions (200-400ms)
- [ ] No layout shift when images load

### Responsive Testing

- [ ] Desktop: 3 columns
- [ ] Tablet: 2 columns
- [ ] Mobile: 1 column
- [ ] Cards equal height across rows
- [ ] Proper spacing at all breakpoints

### Conditional Display

- [ ] Section can be easily hidden
- [ ] No empty section displayed if content removed
- [ ] No layout issues when section hidden

### Accessibility Testing

- [ ] Equipment names are H3
- [ ] All images have alt text
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation works

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Equipment section added to Manufacturing page (optional)
- [ ] 2-6 equipment cards in grid
- [ ] Each card has image, name, description
- [ ] Glass effect applied to cards
- [ ] Hover effects implemented
- [ ] Images optimized and lazy loaded
- [ ] Custom CSS added for grid and effects
- [ ] Mobile responsive: 1 column layout
- [ ] Conditional display functional
- [ ] All breakpoints tested
- [ ] Cross-browser testing completed
- [ ] Accessibility requirements met
- [ ] Published to Webflow staging
- [ ] QA sign-off

---

## Troubleshooting Guide

### Issue: Should we include this section?

**Decision Matrix:**

| Include If | Skip If |
|------------|---------|
| Equipment is competitive advantage | Equipment is standard/generic |
| Client wants to showcase tech | Client prefers not to share |
| High-quality photos available | No good photos available |
| B2B buyers care about capabilities | Focus on craftsmanship instead |

**Recommendation:** Include if equipment showcases competitive advantage or technological investment.

### Issue: Not enough equipment to fill grid

**Solution:**
- Minimum 2 items required for visual balance
- Ideal: 3-6 items for full grid
- If <2 items, skip this section entirely
- Consider combining equipment categories (e.g., "CNC Equipment Suite")

### Issue: Equipment cards uneven heights

**Solution:**
- Grid auto-rows handles this automatically
- Ensure consistent padding (24px) on all cards
- Use similar description lengths (150-200 chars)
- Test with shortest and longest content

---

## Notes

- **Optional Section:** P2 priority, can be skipped
- **Glass Effect:** Reuses `.glass-card` class from Story 1.3
- **Images:** Client must provide equipment photos (2-6)
- **Lazy Loading:** Images load only when scrolling into view
- **Conditional Display:** Easy to hide entire section
- **Future Enhancement:** Add equipment specifications or capabilities

---

## Resources

- [Webflow Grid Layout](https://university.webflow.com/lesson/css-grid-layout)
- [Image Lazy Loading](https://university.webflow.com/lesson/image-lazy-loading)
- [Conditional Visibility](https://university.webflow.com/lesson/conditional-visibility)

---

**Status:** Ready for Development (Optional) ✅
**Priority:** P2 - Can be skipped if content unavailable
**Review URL:** `[project].webflow.io/manufacturing` after implementation
