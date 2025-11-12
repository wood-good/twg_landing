# Story 4.4: Quality Control Highlights (Webflow)

**Story ID:** STORY-4.4
**Epic:** Epic 4 - Manufacturing Transparency
**Priority:** P1
**Story Points:** 4
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As a** quality-focused buyer
**I want** to see TWG's quality control measures
**So that** I can trust their product quality

---

## Description

Create section highlighting TWG's quality control measures with visual elements emphasizing complete tree-to-product cycle control.

---

## Acceptance Criteria

- [ ] Section with rich text about quality control
- [ ] Emphasizes complete control of tree-to-product cycle
- [ ] Visual highlight cards for key statistics
- [ ] Responsive layout
- [ ] Icons or visual elements supporting key points

---

## Webflow Implementation

### Step 1: Add Quality Control Section

1. Below process steps section on Manufacturing page (from Story 4.3)
2. Add **Section** element
3. Set class: `quality-control-section`
4. Configure:
   - **Padding:** 96px (top/bottom), 32px (left/right)
   - **Max Width:** 1200px
   - **Margin:** 0 auto
   - **Background:** Optional subtle gradient or light gray

---

### Step 2: Add Section Header

1. Inside section, add **Div Block**
2. Set class: `section-header`
3. **Text Align:** Center
4. **Margin Bottom:** 48px

5. **Section Title:**
   - Add **Heading (H2):** "Quality Control & Assurance"
   - **Font Size:** 40px (desktop), 32px (mobile)
   - **Margin Bottom:** 16px

6. **Section Subtitle:**
   - Add **Paragraph:** "Complete oversight from tree to final product"
   - **Font Size:** 18px
   - **Color:** Gray/muted

---

### Step 3: Create Two-Column Layout

1. Below header, add **Div Block**
2. Set class: `quality-grid`
3. Configure:
   - **Display:** Grid
   - **Grid Columns:** 2fr 1fr (desktop), 1fr (mobile)
   - **Gap:** 32px
   - **Align Items:** Start

---

### Step 4: Add Quality Content (Left Column)

1. In left column, add **Div Block**
2. Set classes: `glass-card quality-content`
3. **Padding:** 32px

4. Inside card, add **Rich Text** element:
   - **Content Example:**
     ```
     At TWG, quality control isn't an afterthought—it's integrated into every step of our manufacturing process.

     Our vertical integration means we control 100% of the journey from forest management through final production. This complete oversight allows us to guarantee consistent quality, full traceability, and adherence to the highest standards.

     Unlike suppliers who source from multiple locations with varying quality standards, every TWG product is backed by our comprehensive quality assurance process.
     ```
   - **Font Size:** 16px
   - **Line Height:** 1.6
   - **Color:** Dark gray

---

### Step 5: Add Highlight Cards (Right Column)

1. In right column, add **Div Block**
2. Set class: `quality-highlights`
3. Configure:
   - **Display:** Flex
   - **Flex Direction:** Column
   - **Gap:** 16px

4. **Build Highlight Card (Repeat 3 Times):**

   For each card:
   - Add **Div Block**
   - Set classes: `glass-card highlight-card`
   - **Padding:** 24px
   - **Text Align:** Center
   - **Transition:** Transform 200ms ease

   Inside each card:
   - **Icon/Emoji:**
     - Add **Div Block** with class `highlight-icon`
     - **Font Size:** 32px
     - **Margin Bottom:** 12px
     - Text: ✓, ⚡, or 🔍 (or upload icon image)

   - **Heading (H3):** Card title
     - Example: "100% Control"
     - **Font Size:** 18px
     - **Font Weight:** 600
     - **Margin Bottom:** 8px

   - **Paragraph:** Card description
     - Example: "Complete oversight from tree to final product"
     - **Font Size:** 14px
     - **Line Height:** 1.5
     - **Color:** Gray

---

### Step 6: Add Hover Effects (Custom Code)

**In Site Settings → Custom Code → Head Code:**

```html
<style>
/* Quality Control Grid */
.quality-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
  align-items: start;
}

/* Highlight Cards */
.quality-highlights {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.highlight-card {
  text-align: center;
  padding: 24px;
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.highlight-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
}

.highlight-icon {
  font-size: 32px;
  margin-bottom: 12px;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .quality-grid {
    grid-template-columns: 1fr !important;
  }

  .quality-content {
    order: 2;
  }

  .quality-highlights {
    order: 1;
    margin-bottom: 24px;
  }
}
</style>
```

---

## Design Specifications

**Section:**
- Padding: 96px vertical, 32px horizontal
- Max width: 1200px
- Background: Optional light gray

**Grid Layout:**
- Desktop: 2fr 1fr (content left, highlights right)
- Mobile: Stacked (highlights top, content bottom)
- Gap: 32px

**Quality Content:**
- Glass card background
- Padding: 32px
- Font size: 16px
- Line height: 1.6

**Highlight Cards:**
- Glass card background
- Padding: 24px
- Text align: Center
- Icon: 32px
- Title: 18px, semibold
- Description: 14px, gray
- Hover: Translate -4px, shadow elevation

---

## Sample Content

**Quality Content (Rich Text):**
```
At TWG, quality control isn't an afterthought—it's integrated into every step of our manufacturing process.

Our vertical integration means we control 100% of the journey from forest management through final production. This complete oversight allows us to guarantee consistent quality, full traceability, and adherence to the highest standards.

Unlike suppliers who source from multiple locations with varying quality standards, every TWG product is backed by our comprehensive quality assurance process.

Key aspects of our quality control:
• Material inspection at intake
• In-process quality checks at each manufacturing stage
• Final product inspection before shipping
• Full traceability from forest to customer
• Continuous improvement through feedback loops
```

**Highlight Card 1: 100% Control**
- Icon: ✓
- Title: "100% Control"
- Description: "Complete oversight from tree to final product"

**Highlight Card 2: Expert Craftsmen**
- Icon: ⚡
- Title: "Expert Craftsmen"
- Description: "Decades of woodworking experience"

**Highlight Card 3: Rigorous Testing**
- Icon: 🔍
- Title: "Rigorous Testing"
- Description: "Every piece inspected before shipping"

---

## Dependencies

**Blocked By:**
- Story 4.1 (Manufacturing Page Setup)
- Story 4.3 (Process Steps - quality section comes after)
- Story 1.3 (Glass Card Component)

**Blocks:**
- None

**External:**
- Quality control copy (200-400 words)
- Optional: Icon images or use emoji

---

## Testing Checklist

### Visual Testing

- [ ] Section displays below process steps
- [ ] Two-column layout on desktop
- [ ] Quality content renders in glass card
- [ ] Three highlight cards display correctly
- [ ] Icons/emojis visible
- [ ] Proper spacing and alignment

### Interaction Testing

- [ ] Highlight cards hover effect (lift -4px)
- [ ] Smooth transitions (200ms)
- [ ] Glass effect visible on cards
- [ ] No layout shift

### Responsive Testing

- [ ] Desktop: 2-column layout (content left, highlights right)
- [ ] Mobile: Stacked layout (highlights top, content bottom)
- [ ] Cards stack properly on mobile
- [ ] Text readable at all sizes

### Accessibility Testing

- [ ] Section title is H2
- [ ] Highlight titles are H3
- [ ] Color contrast meets WCAG AA
- [ ] Icons decorative (not critical info)
- [ ] Keyboard navigation works

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Quality control section added to Manufacturing page
- [ ] Rich text content in glass card
- [ ] Three highlight cards with icons, titles, descriptions
- [ ] Two-column layout (desktop), stacked (mobile)
- [ ] Hover effects on highlight cards
- [ ] Custom CSS added
- [ ] Mobile responsive design verified
- [ ] All breakpoints tested
- [ ] Cross-browser testing completed
- [ ] Accessibility requirements met
- [ ] Published to Webflow staging
- [ ] QA sign-off

---

## Troubleshooting Guide

### Issue: Grid not responsive on mobile

**Solution:**
- Ensure Custom CSS includes mobile media query
- Check media query uses `!important` to override
- Test `grid-template-columns: 1fr` on mobile
- Verify order properties (highlights top, content bottom)

### Issue: Highlight cards not equal height

**Solution:**
- Use flexbox on parent (`.quality-highlights`)
- Each card should have consistent padding (24px)
- Content should determine height naturally
- Test with varying text lengths

### Issue: Hover effect too subtle

**Solution:**
- Increase translateY offset (-4px → -8px)
- Enhance box-shadow elevation
- Add slight scale effect (scale(1.02))
- Test on actual devices

---

## Notes

- **Glass Effect:** Reuses `.glass-card` class from Story 1.3
- **Icons:** Use emoji for simplicity (✓, ⚡, 🔍)
- **Mobile Order:** Highlights appear before content for impact
- **Content:** Emphasizes competitive advantage (vertical integration)
- **Extensibility:** Easy to add more highlight cards

---

## Resources

- [Webflow Grid Layout](https://university.webflow.com/lesson/css-grid-layout)
- [CSS Flexbox](https://university.webflow.com/lesson/flex-layout)
- [Webflow Rich Text](https://university.webflow.com/lesson/rich-text-element)

---

**Status:** Ready for Development ✅
**Review URL:** `[project].webflow.io/manufacturing` after implementation
