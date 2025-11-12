# Story 1.3: Reusable Glass Card Styling (Webflow)

**Story ID:** STORY-1.3
**Epic:** Epic 1 - First Impression
**Priority:** P0 - Critical
**Story Points:** 2
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As a** developer
**I want** a reusable glassmorphism style
**So that** I can maintain consistent design throughout the site

---

## Description

Create reusable glassmorphism styling in Webflow using a global CSS class that can be applied to any div, section, or container element. This provides consistent glass effect styling throughout the site with configurable variations for different blur intensities and opacity levels.

---

## Acceptance Criteria

- [ ] Global `.glass-card` class created
- [ ] Configurable variations (light, medium, heavy blur)
- [ ] Fallback for browsers without backdrop-filter support
- [ ] Can be applied to any element via class
- [ ] Consistent padding and spacing
- [ ] Border and shadow effects included
- [ ] Reduced motion support (accessibility)
- [ ] Works across all breakpoints

---

## Webflow Implementation

### Step 1: Create Base Glass Card Class

1. Open Webflow Designer
2. Add a **Div Block** to any page (this is just for creating the class)
3. Select the div and create new class: `glass-card`
4. Configure base styling:
   - **Position:** Relative
   - **Padding:** 24px (1.5rem) all sides
   - **Border Radius:** 12px
   - **Border:** 1px solid rgba(255, 255, 255, 0.2)

**Note:** This creates a reusable class that can be applied to any element.

---

### Step 2: Add Glassmorphism Effect via Custom Code

Since Webflow doesn't have native backdrop-filter in the visual editor, use **Custom Code**:

1. Go to **Site Settings** (gear icon in left sidebar)
2. Navigate to **Custom Code** tab
3. In **Head Code** section, add:

```html
<style>
/* Base Glass Card Component */
.glass-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Glassmorphism for supported browsers */
@supports (backdrop-filter: blur(1px)) {
  .glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
}

/* Performance optimization */
.glass-card {
  will-change: backdrop-filter;
  transform: translateZ(0);
}

/* Accessibility: Respect reduced motion preference */
@media (prefers-reduced-motion: reduce) {
  .glass-card {
    backdrop-filter: none;
    -webkit-backdrop-filter: none;
    background: rgba(255, 255, 255, 0.95);
  }
}
</style>
```

4. Click **Save Changes**

---

### Step 3: Create Variations (Optional)

Create combo classes for different glass intensities:

**Light Glass (Less Blur):**
```html
<!-- Add to Custom Code -->
<style>
.glass-card.light {
  background: rgba(255, 255, 255, 0.05);
}

@supports (backdrop-filter: blur(1px)) {
  .glass-card.light {
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
  }
}
</style>
```

**Heavy Glass (More Blur):**
```html
<!-- Add to Custom Code -->
<style>
.glass-card.heavy {
  background: rgba(255, 255, 255, 0.2);
}

@supports (backdrop-filter: blur(1px)) {
  .glass-card.heavy {
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
}
</style>
```

**Dark Glass (For Light Backgrounds):**
```html
<!-- Add to Custom Code -->
<style>
.glass-card.dark {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.2);
  color: white;
}

@supports (backdrop-filter: blur(1px)) {
  .glass-card.dark {
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
}
</style>
```

---

### Step 4: Apply Glass Card Class to Elements

**To use the glass-card class:**

1. Select any element (Div, Section, Container)
2. In **Style Panel** → **Selector** field
3. Type `glass-card` (or select from dropdown)
4. The glassmorphism effect is now applied

**For variations:**
1. Apply base class: `glass-card`
2. Add combo class: `light`, `heavy`, or `dark`
3. In Webflow, this creates: `glass-card light` (combo class)

---

### Step 5: Create Webflow Symbol (Optional)

If you want a pre-styled reusable component with content structure:

1. Create a **Div Block**
2. Apply `glass-card` class
3. Add inner structure:
   - Heading element (h3)
   - Text paragraph
   - Optional button or link
4. Select the entire div
5. Right-click → **Create Symbol**
6. Name: `Glass Card Container`
7. Now drag this Symbol from **Symbols Panel** to reuse

**When to use Symbol vs Class:**
- **Class only:** When you just need styling (recommended)
- **Symbol:** When you need consistent structure + styling

---

## Usage Examples in Webflow

### Example 1: Hero Content Overlay
1. Add **Div Block** to hero section
2. Apply class: `glass-card`
3. Add content inside (heading, paragraph, button)
4. Position over video background

### Example 2: Product Card
1. Add **Div Block** to products grid
2. Apply class: `glass-card light`
3. Add product image, title, description inside
4. Style inner elements as needed

### Example 3: Contact Form Container
1. Add **Div Block** around form
2. Apply class: `glass-card heavy`
3. Form now has strong glassmorphism effect

### Example 4: Sustainability Stats Card
1. Add **Div Block**
2. Apply class: `glass-card`
3. Add metric content (number, label)
4. Repeat for multiple stats

---

## Design Specifications

**Base Glass Card:**
- Background: rgba(255, 255, 255, 0.1)
- Backdrop blur: 10px
- Border: 1px solid rgba(255, 255, 255, 0.2)
- Border radius: 12px
- Padding: 24px (1.5rem)
- Shadow: 0 4px 6px rgba(0, 0, 0, 0.1)

**Light Variation:**
- Background: rgba(255, 255, 255, 0.05)
- Backdrop blur: 5px
- Border: 1px solid rgba(255, 255, 255, 0.15)

**Heavy Variation:**
- Background: rgba(255, 255, 255, 0.2)
- Backdrop blur: 15px
- Border: 1px solid rgba(255, 255, 255, 0.3)

**Dark Variation:**
- Background: rgba(0, 0, 0, 0.1)
- Backdrop blur: 10px
- Border: 1px solid rgba(0, 0, 0, 0.2)
- Text color: White

**Fallback (older browsers):**
- Background: rgba(255, 255, 255, 0.9)
- Border: 1px solid rgba(255, 255, 255, 0.3)

---

## Complete Custom Code Reference

Here's the complete CSS to add to **Site Settings → Custom Code → Head Code**:

```html
<style>
/* ===================================
   Glass Card Component System
   =================================== */

/* Base Glass Card */
.glass-card {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Glassmorphism for supported browsers */
@supports (backdrop-filter: blur(1px)) {
  .glass-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }
}

/* Light variation (subtle effect) */
.glass-card.light {
  background: rgba(255, 255, 255, 0.05);
}

@supports (backdrop-filter: blur(1px)) {
  .glass-card.light {
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.15);
  }
}

/* Heavy variation (strong effect) */
.glass-card.heavy {
  background: rgba(255, 255, 255, 0.2);
}

@supports (backdrop-filter: blur(1px)) {
  .glass-card.heavy {
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
}

/* Dark variation (for light backgrounds) */
.glass-card.dark {
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(0, 0, 0, 0.3);
  color: white;
}

@supports (backdrop-filter: blur(1px)) {
  .glass-card.dark {
    background: rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(0, 0, 0, 0.2);
  }
}

/* Performance optimization */
.glass-card {
  will-change: backdrop-filter;
  transform: translateZ(0);
}

/* Accessibility: Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .glass-card {
    backdrop-filter: none !important;
    -webkit-backdrop-filter: none !important;
    background: rgba(255, 255, 255, 0.95);
  }

  .glass-card.dark {
    background: rgba(0, 0, 0, 0.95);
  }
}

/* Responsive padding adjustments */
@media (max-width: 768px) {
  .glass-card {
    padding: 1rem;
    border-radius: 8px;
  }
}
</style>
```

---

## Dependencies

**Blocked By:**
- None (foundational styling)

**Blocks:**
- Story 1.2 (Header uses glass effect)
- Story 1.4 (Hero content uses glass card)
- Most other stories use this styling

**External:**
- Webflow Designer access
- Custom Code access (requires Webflow account)

---

## Testing Checklist

### Webflow Preview Testing

- [ ] Preview in all breakpoints (Desktop, Tablet, Mobile)
- [ ] Glass effect visible behind transparent background
- [ ] Blur effect visible (test with content behind card)
- [ ] Border and shadow display correctly
- [ ] Padding applies to all sides
- [ ] Border radius displays correctly

### Browser Testing (Published Site)

**Glassmorphism Support:**
- [ ] Chrome (Windows/Mac): Full backdrop-filter support ✅
- [ ] Safari (Mac/iOS): Support with -webkit- prefix ✅
- [ ] Firefox (Windows/Mac): Support (v103+) ✅
- [ ] Edge (Windows): Full support ✅
- [ ] Older browsers: Fallback to solid background ⚠️

**Visual Testing:**
- [ ] Glass effect visible on video background
- [ ] Text inside card is readable
- [ ] Border visible against background
- [ ] Shadow adds depth
- [ ] Light variation is more subtle
- [ ] Heavy variation is more prominent
- [ ] Dark variation works on light backgrounds

### Variation Testing

- [ ] `.glass-card` alone works (default)
- [ ] `.glass-card light` applies light blur
- [ ] `.glass-card heavy` applies heavy blur
- [ ] `.glass-card dark` works on light backgrounds
- [ ] Combo classes don't conflict

### Accessibility Testing

- [ ] Reduced motion preference disables blur
- [ ] Content inside card is accessible
- [ ] Sufficient contrast with text
- [ ] No keyboard navigation issues

---

## Performance Considerations

**GPU Acceleration:**
- `will-change: backdrop-filter` - Hints browser for optimization
- `transform: translateZ(0)` - Forces GPU layer creation

**Browser Support:**
- Graceful degradation for older browsers
- Fallback to solid background (still functional)
- No JavaScript required (pure CSS)

**Reduced Motion:**
- Respects user preference
- Disables blur for users with motion sensitivity
- Maintains functionality with solid background

---

## Accessibility Requirements

- [ ] Component is purely visual (styling only)
- [ ] Does not affect screen reader navigation
- [ ] Content inside card must have sufficient contrast
- [ ] Respects `prefers-reduced-motion` setting
- [ ] Fallback maintains readability
- [ ] No functionality lost in fallback mode

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] `.glass-card` class created in Custom Code
- [ ] Variations created (light, heavy, dark)
- [ ] Applied to at least 3 different elements successfully
- [ ] Fallback works in older browsers
- [ ] Reduced motion support implemented
- [ ] Cross-browser testing completed
- [ ] Mobile responsive (padding adjusts)
- [ ] Published to Webflow staging
- [ ] Client approval
- [ ] Documented for team (this file serves as docs)

---

## Troubleshooting Guide

### Issue: Backdrop blur not visible
**Solution:**
- Ensure Custom Code is saved in Site Settings
- Check browser support (use Chrome/Safari for testing)
- Verify there is content behind the element (video, image)
- Publish site and test (sometimes preview doesn't show blur)

### Issue: Class not applying
**Solution:**
- Refresh Webflow Designer after adding Custom Code
- Check class name spelling: `glass-card` (no spaces)
- Ensure Custom Code is in **Head Code** (not Footer Code)
- Clear browser cache and test again

### Issue: Variations not working
**Solution:**
- Apply base class first: `glass-card`
- Add variation as combo class: `light`, `heavy`, `dark`
- Ensure Custom Code includes variation styles
- Check class name order in selector field

### Issue: Looks different across browsers
**Solution:**
- Add both `backdrop-filter` and `-webkit-backdrop-filter`
- Test in Safari specifically (needs -webkit- prefix)
- Check `@supports` query is working
- Verify fallback styles are defined

### Issue: Performance issues
**Solution:**
- Limit number of glass cards on one page (max 10-15)
- Use light variation for less GPU impact
- Test on mobile devices (blur is GPU-intensive)
- Consider disabling blur on mobile breakpoint if needed

---

## Notes

- This is a **foundational** styling pattern - test thoroughly
- Other developers/stories will depend on this class
- Pure CSS approach (no JavaScript) = better performance
- Variations provide flexibility without code duplication
- Fallback ensures functionality on all browsers
- Custom Code method is cleaner than inline styles

---

## Resources

- [CSS Backdrop Filter (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
- [Glassmorphism Design Trend](https://uxdesign.cc/glassmorphism-in-user-interfaces-1f39bb1308c9)
- [Webflow Custom Code Guide](https://university.webflow.com/lesson/custom-code-in-the-head-and-body-tags)
- [@supports Feature Queries (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports)
- [Prefers Reduced Motion (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)

---

**Status:** Ready for Development ✅
**Review URL:** Will be Webflow staging domain
