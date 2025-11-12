# Story 3.3: Tree-to-Tree Cycle Visual Diagram (Webflow)

**Story ID:** STORY-3.3
**Epic:** Epic 3 - Sustainability Verification
**Priority:** P0
**Story Points:** 8
**Assignee:** Developer + UI/UX Designer
**Platform:** Webflow

---

## User Story

**As an** ESG-conscious buyer
**I want** to see TWG's tree-to-tree cycle visualized clearly
**So that** I can understand their complete environmental process

---

## Description

Create a visual representation of TWG's tree-to-tree sustainability cycle showing 3-5 steps. Two approaches supported: **Component-based** (built in Webflow Designer) or **Infographic** (static image from designer).

---

## Acceptance Criteria

- [ ] 3-5 cycle steps visualized clearly
- [ ] Each step has icon, title, and description
- [ ] Visual flow showing circular/continuous nature
- [ ] Mobile-friendly layout (vertical on mobile, enhanced on desktop)
- [ ] Optional: Subtle animations on scroll
- [ ] Accessible for screen readers
- [ ] Supports both component-based or infographic approach

---

## Approach A: Component-Based (Webflow Built)

### Step 1: Add Section to Sustainability Page

1. Below hero section on Sustainability page
2. Add **Section** element
3. Set class: `tree-cycle-section`
4. Configure:
   - **Padding:** 64px (top/bottom), 32px (left/right)
   - **Max Width:** 1200px
   - **Margin:** 0 auto

---

### Step 2: Add Section Header

1. Inside section, add **Div Block**
2. Set class: `section-header`
3. Configure:
   - **Text Align:** Center
   - **Margin Bottom:** 48px

4. Inside header, add **Heading (H2):** "Our Tree-to-Tree Cycle"
5. Below heading, add **Paragraph:**
   - Text: "A sustainable journey from forest to finished product, and back to nature"
   - Class: `section-subtitle`
   - **Font Size:** 18px
   - **Color:** Gray/muted
   - **Max Width:** 600px
   - **Margin:** 0 auto

---

### Step 3: Create Cycle Container

1. Below header, add **Div Block**
2. Set class: `cycle-diagram`
3. Configure:
   - **Max Width:** 800px
   - **Margin:** 0 auto
   - **Padding:** 32px

---

### Step 4: Build Cycle Step (Repeat 3-5 Times)

For each step in the cycle:

1. Add **Div Block** inside cycle diagram
2. Set class: `cycle-step`
3. Configure:
   - **Display:** Grid
   - **Grid Columns:** 80px 1fr (desktop), 1fr (mobile)
   - **Gap:** 32px
   - **Align Items:** Start
   - **Margin Bottom:** 48px
   - **Position:** Relative

4. **Step Number Badge:**
   - Add **Div Block**
   - Set class: `step-number`
   - Text: "1" (or 2, 3, etc.)
   - Configure:
     - **Position:** Absolute
     - **Top:** -16px
     - **Left:** 20px (desktop), 50% transform -50% (mobile)
     - **Width:** 40px
     - **Height:** 40px
     - **Background:** Primary green
     - **Color:** White
     - **Border Radius:** 50%
     - **Display:** Flex
     - **Align/Justify:** Center
     - **Font Size:** 20px
     - **Font Weight:** Bold
     - **Z-index:** 10
     - **Box Shadow:** 0 4px 12px rgba(0,0,0,0.15)

5. **Step Icon:**
   - Add **Div Block**
   - Set class: `step-icon`
   - Configure:
     - **Width:** 80px
     - **Height:** 80px
     - **Border Radius:** 50%
     - **Background:** Light gray
     - **Display:** Flex
     - **Align/Justify:** Center
     - **Padding:** 16px
   - Inside, add **Image** or **Embed** (icon/emoji)
     - Size: 48x48px

6. **Step Content:**
   - Add **Div Block**
   - Set classes: `glass-card step-content` (reuse glass effect)
   - **Padding:** 24px
   - Inside, add:
     - **Heading (H3):** Step title (e.g., "Sustainable Harvesting")
       - **Font Size:** 20px
       - **Margin Bottom:** 12px
     - **Paragraph:** Step description
       - **Font Size:** 14px
       - **Line Height:** 1.6
       - **Color:** Gray/muted

7. **Connector Arrow (Between Steps):**
   - After step content, add **Embed** element:
```html
<div class="connector" aria-hidden="true">
  <svg width="40" height="40" viewBox="0 0 40 40">
    <path
      d="M20 5 L20 35 M15 30 L20 35 L25 30"
      stroke="currentColor"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
    />
  </svg>
</div>
```
   - **Position:** Absolute
   - **Left:** 40px (desktop), 50% (mobile)
   - **Bottom:** -32px
   - **Color:** Primary green
   - **Opacity:** 0.5

---

### Step 5: Add "Continuous Cycle" Indicator

After all steps:

1. Add **Div Block**
2. Set class: `cycle-complete`
3. Configure:
   - **Text Align:** Center
   - **Margin Top:** 32px
   - **Color:** Primary green

4. Inside, add **Embed:**
```html
<svg width="80" height="80" viewBox="0 0 80 80">
  <path
    d="M 40 10 A 30 30 0 1 1 39.9 10"
    stroke="currentColor"
    stroke-width="2"
    fill="none"
    stroke-dasharray="5,5"
  />
  <path
    d="M 35 15 L 40 10 L 45 15"
    stroke="currentColor"
    stroke-width="2"
    fill="none"
    stroke-linecap="round"
  />
</svg>
```

5. Below SVG, add **Text:** "Continuous Cycle"
   - **Font Size:** 14px
   - **Font Weight:** 500
   - **Text Transform:** Uppercase
   - **Letter Spacing:** 0.05em

---

### Step 6: Add Scroll Animation (Optional)

**In Site Settings → Custom Code → Head Code:**

```html
<style>
/* Cycle step scroll animation */
@supports (animation-timeline: view()) {
  .cycle-step {
    opacity: 0;
    transform: translateY(20px);
    animation: slideIn linear forwards;
    animation-timeline: view();
    animation-range: entry 0% cover 30%;
  }

  @keyframes slideIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}

/* Mobile responsive adjustments */
@media (max-width: 768px) {
  .cycle-step {
    grid-template-columns: 1fr !important;
    gap: 16px !important;
    text-align: center;
  }

  .step-icon {
    margin: 0 auto;
  }

  .connector {
    left: 50% !important;
    transform: translateX(-50%);
  }
}
</style>
```

---

## Approach B: Infographic (Static Image)

If designer creates a custom infographic:

### Step 1-2: Same as Approach A (Section + Header)

### Step 3: Add Infographic Image

1. Below section header, add **Div Block**
2. Set class: `diagram-image-wrapper`
3. Configure:
   - **Max Width:** 900px
   - **Margin:** 0 auto

4. Inside, add **Image:**
   - Upload cycle infographic (PNG/SVG)
   - Alt text: "TWG Tree-to-Tree Sustainability Cycle Diagram"
   - Set class: `cycle-infographic`
   - Configure:
     - **Width:** 100%
     - **Height:** Auto
     - **Border Radius:** 16px

**Infographic Requirements:**
- Format: PNG (with transparency) or SVG
- Dimensions: 1200x800px minimum
- File size: <500KB
- Shows all 3-5 cycle steps
- Includes arrows/flow indicators
- Legible at mobile sizes

---

## Design Specifications

**Component-Based:**
- Step icon size: 80x80px circle
- Step number badge: 40x40px, primary green
- Glass card padding: 24px
- Grid gap: 32px (desktop), 16px (mobile)
- Connector arrows: Primary green, 50% opacity

**Typography:**
- Section title (H2): 40px (desktop), 32px (mobile)
- Subtitle: 18px, gray
- Step title (H3): 20px, semibold
- Step description: 14px, line-height 1.6

**Spacing:**
- Section padding: 64px vertical, 32px horizontal
- Step margin bottom: 48px
- Cycle complete margin top: 32px

---

## Sample Cycle Steps Content

1. **Sustainable Harvesting**
   - "We selectively harvest mature trees from responsibly managed forests, ensuring ecosystem balance and regeneration."
   - Icon: 🌲 or tree icon

2. **Efficient Processing**
   - "Every part of the tree is utilized in our zero-waste manufacturing process, minimizing environmental impact."
   - Icon: ⚙️ or factory icon

3. **Quality Products**
   - "Handcrafted wood products delivered to B2B clients who value sustainability and quality."
   - Icon: 📦 or product icon

4. **Reforestation**
   - "For every tree harvested, we plant three more, ensuring net positive environmental impact."
   - Icon: 🌱 or seedling icon

5. **Carbon Capture** (Optional 5th step)
   - "Our growing forests sequester carbon, actively fighting climate change."
   - Icon: 🌍 or earth icon

---

## Dependencies

**Blocked By:**
- Story 3.1 (Sustainability Page Setup)
- Story 3.2 (Hero Section - cycle section comes after)
- Story 1.3 (Glass Card Component)

**Blocks:**
- None

**External:**
- Cycle step icons/illustrations (5 images, 200x200px)
- OR full infographic from designer (1200x800px)
- Approved copy for each step title and description

---

## Testing Checklist

### Component-Based Testing

- [ ] All 3-5 steps display correctly
- [ ] Step numbers show 1-5 in order
- [ ] Icons/images load correctly
- [ ] Glass cards render with proper styling
- [ ] Connector arrows visible between steps
- [ ] "Continuous Cycle" indicator displays at end
- [ ] Responsive layout: vertical on mobile
- [ ] Scroll animations work (modern browsers)

### Infographic Testing

- [ ] Infographic image loads correctly
- [ ] Image scales properly on all screen sizes
- [ ] Text in image legible at mobile sizes
- [ ] File size optimized (<500KB)
- [ ] Alt text present for accessibility

### General Testing

- [ ] Section header displays correctly
- [ ] Content readable by screen readers
- [ ] No layout shift during load
- [ ] Works across all browsers
- [ ] Mobile responsive design verified

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Cycle section added to Sustainability page
- [ ] Approach chosen (Component-based OR Infographic)
- [ ] If Component: All 3-5 steps built with icons, titles, descriptions
- [ ] If Infographic: Image uploaded and optimized
- [ ] Visual flow clearly indicates circular/continuous nature
- [ ] Glass effect applied to step cards (Component approach)
- [ ] Connector arrows between steps (Component approach)
- [ ] Mobile responsive layout tested
- [ ] Scroll animations implemented (optional, Component approach)
- [ ] Accessibility requirements met
- [ ] Published to Webflow staging
- [ ] QA sign-off

---

## Troubleshooting Guide

### Issue: Should I use Component or Infographic?

**Decision Matrix:**

| Criteria | Component-Based | Infographic |
|----------|----------------|-------------|
| Content updates | Frequent (use Component) | Rare (use Infographic) |
| Designer availability | No custom graphics | Designer creates infographic |
| Complexity | Simple steps | Complex visualization |
| File size | Minimal (HTML/CSS) | Image file (<500KB) |
| Editability | Easy via Editor | Requires design tool |

**Recommendation:** Start with Component-based for flexibility. Use Infographic if designer creates compelling visual.

### Issue: Connector arrows not positioning correctly

**Solution:**
- Check parent `.cycle-step` has `position: relative`
- Adjust `bottom` value (-32px) based on margin
- On mobile, use `left: 50%; transform: translateX(-50%)`
- Test across breakpoints

### Issue: Step numbers overlapping content

**Solution:**
- Increase `z-index` on `.step-number` (set to 10)
- Adjust `top` offset (-16px) to move further up
- On mobile, center with `left: 50%; transform: translateX(-50%)`
- Add box-shadow for depth separation

### Issue: Glass cards not visible

**Solution:**
- Ensure `.glass-card` class applied (from Story 1.3)
- Increase backdrop-filter blur
- Adjust background opacity
- Check browser support for backdrop-filter

---

## Notes

- **Component-Based:** More flexible, easy to update, client can edit via Editor
- **Infographic:** Better for complex visualizations, requires designer
- **Icons:** Use emoji (🌲🌱⚙️) or upload icon images (200x200px)
- **Scroll Animation:** Progressive enhancement, degrades gracefully
- **Mobile Layout:** Automatically stacks vertically
- **Accessibility:** Connector arrows marked `aria-hidden="true"`

---

## Resources

- [Webflow Grid Layout](https://university.webflow.com/lesson/css-grid-layout)
- [Webflow Custom Code (SVG)](https://university.webflow.com/lesson/custom-code-embed)
- [CSS View Timeline Animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline)
- [ARIA Hidden Attribute](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)

---

**Status:** Ready for Development ✅
**Recommended Approach:** Component-Based (more flexible)
**Review URL:** `[project].webflow.io/sustainability` after implementation
