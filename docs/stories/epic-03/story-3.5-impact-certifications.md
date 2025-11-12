# Story 3.5: Impact Metrics & Certifications (Webflow)

**Story ID:** STORY-3.5
**Epic:** Epic 3 - Sustainability Verification
**Priority:** P1
**Story Points:** 3
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As an** ESG-conscious buyer
**I want** to see quantifiable environmental impact and certifications
**So that** I can verify TWG's sustainability claims with data

---

## Description

Display environmental impact metrics (e.g., "1,500+ trees planted annually") and certification logos to build credibility through data and third-party verification.

---

## Acceptance Criteria

- [ ] Impact metrics displayed as cards (e.g., "1,500+ Trees Planted")
- [ ] Metrics grid: 3-4 columns (desktop), 2 columns (mobile)
- [ ] Certification logos with descriptions
- [ ] Certification logos link to verification URLs
- [ ] Responsive grid layout
- [ ] Glass effect on metric cards
- [ ] Optional: Counter animation for metrics
- [ ] Graceful handling if metrics/certifications not available

---

## Webflow Implementation

### Part A: Impact Metrics

### Step 1: Add Impact Metrics Section

1. Below practices section on Sustainability page
2. Add **Section** element
3. Set class: `impact-metrics-section`
4. Configure:
   - **Padding:** 64px (top/bottom), 32px (left/right)
   - **Max Width:** 1200px
   - **Margin:** 0 auto
   - **Text Align:** Center

---

### Step 2: Add Metrics Header

1. Inside section, add **Heading (H2):** "Our Environmental Impact"
   - **Font Size:** 40px (desktop), 32px (mobile)
   - **Margin Bottom:** 32px
   - **Text Align:** Center

---

### Step 3: Create Metrics Grid

1. Below header, add **Div Block**
2. Set class: `metrics-grid`
3. Configure:
   - **Display:** Grid
   - **Grid Columns:** 4 (large desktop), 3 (desktop), 2 (mobile)
   - **Gap:** 24px
   - **Max Width:** 900px
   - **Margin:** 0 auto

---

### Step 4: Build Metric Card (Repeat 3-6 Times)

For each metric:

1. Add **Div Block** inside grid
2. Set classes: `glass-card metric-card`
3. Configure:
   - **Padding:** 32px 24px
   - **Text Align:** Center

4. **Optional Icon:**
   - Add **Div Block**
   - Set class: `metric-icon`
   - **Font Size:** 32px
   - **Margin Bottom:** 8px
   - Text: Emoji (🌳, ♻️, 💧, ⚡, 🌍)

5. **Metric Value:**
   - Add **Div Block**
   - Set class: `metric-value`
   - Text: "1,500+" (or metric value)
   - Configure:
     - **Font Size:** 40px
     - **Font Weight:** Bold
     - **Color:** Primary green
     - **Margin Bottom:** 8px

6. **Metric Label:**
   - Add **Div Block**
   - Set class: `metric-label`
   - Text: "Trees Planted" (or metric label)
   - Configure:
     - **Font Size:** 16px
     - **Font Weight:** 500

7. **Optional Unit:**
   - Add **Div Block**
   - Set class: `metric-unit`
   - Text: "annually" (or time unit)
   - Configure:
     - **Font Size:** 14px
     - **Color:** Gray/muted
     - **Margin Top:** 4px

---

### Part B: Certifications

### Step 5: Add Certifications Section

1. Below impact metrics, add **Section** element
2. Set class: `certifications-section`
3. Configure:
   - **Padding:** 96px (top/bottom), 32px (left/right)
   - **Max Width:** 1200px
   - **Margin:** 0 auto
   - **Text Align:** Center

---

### Step 6: Add Certifications Header

1. Inside section:
   - Add **Heading (H2):** "Our Certifications"
     - **Font Size:** 40px (desktop), 32px (mobile)
     - **Margin Bottom:** 16px

   - Add **Paragraph:** "Verified by trusted third-party organizations"
     - **Font Size:** 18px
     - **Color:** Gray/muted
     - **Margin Bottom:** 48px

---

### Step 7: Create Certifications Grid

1. Below header, add **Div Block**
2. Set class: `certifications-grid`
3. Configure:
   - **Display:** Grid
   - **Grid Columns:** 3 (desktop), 2 (tablet), 1 (mobile)
   - **Gap:** 32px
   - **Max Width:** 900px
   - **Margin:** 0 auto

---

### Step 8: Build Certification Card (Repeat 2-4 Times)

For each certification:

1. Add **Div Block** inside grid
2. Set class: `cert-card`
3. Configure:
   - **Padding:** 32px
   - **Background:** Light gray or glass effect
   - **Border Radius:** 8px
   - **Transition:** Transform 200ms ease

**Hover Effect:**
```css
.cert-card:hover {
  transform: translateY(-4px);
}
```

4. **Certification Logo:**
   - Add **Image**
   - Upload certification logo (PNG with transparency)
   - Alt text: Certification name
   - Set class: `cert-logo`
   - Configure:
     - **Height:** 80px
     - **Width:** Auto
     - **Display:** Block
     - **Margin:** 0 auto 16px

5. **Certification Name:**
   - Add **Heading (H3):** "FSC Certified" (or cert name)
   - **Font Size:** 18px
   - **Margin Bottom:** 8px

6. **Certification Description:**
   - Add **Paragraph:** Brief explanation
   - **Font Size:** 15px
   - **Line Height:** 1.5
   - **Color:** Gray/muted
   - Max 200 characters

7. **Verification Link (Optional):**
   - Wrap card in **Link Block**
   - **Link URL:** Verification URL (e.g., https://fsc.org/verify/12345)
   - **Target:** New tab (_blank)
   - **Rel:** noopener noreferrer

   - Below description, add **Text:** "Verify →"
     - Set class: `verify-link`
     - **Font Size:** 14px
     - **Color:** Primary green
     - **Font Weight:** 500
     - **Margin Top:** 12px
     - **Display:** Inline-block

---

### Step 9: Add Custom CSS for Responsive Layout

**In Site Settings → Custom Code → Head Code:**

```html
<style>
/* Metrics grid responsive */
@media (min-width: 1024px) {
  .metrics-grid {
    grid-template-columns: repeat(4, 1fr) !important;
  }
}

@media (min-width: 768px) and (max-width: 1023px) {
  .metrics-grid {
    grid-template-columns: repeat(3, 1fr) !important;
  }
}

@media (max-width: 767px) {
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr) !important;
  }
}

/* Certifications grid responsive */
@media (max-width: 768px) {
  .certifications-grid {
    grid-template-columns: 1fr !important;
  }
}

/* Certification card hover */
.cert-card {
  transition: transform 200ms ease, box-shadow 200ms ease;
}

.cert-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Verify link hover */
.verify-link {
  transition: color 200ms ease;
}

.cert-card:hover .verify-link {
  text-decoration: underline;
}
</style>
```

---

## Optional: Counter Animation

For animated counting effect on metrics:

**In Site Settings → Custom Code → Before `</body>` Tag:**

```html
<script>
// Animated counter for metrics
function animateCounter(element, target, duration) {
  const start = 0;
  const increment = target / (duration / 16);
  let current = start;

  const timer = setInterval(function() {
    current += increment;
    if (current >= target) {
      element.textContent = target.toLocaleString() + '+';
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current).toLocaleString();
    }
  }, 16);
}

// Trigger animation when metric cards scroll into view
const metricCards = document.querySelectorAll('.metric-value');
const observer = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      const valueText = entry.target.textContent.replace(/[^0-9]/g, '');
      const targetValue = parseInt(valueText);
      if (!isNaN(targetValue)) {
        animateCounter(entry.target, targetValue, 1500);
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

metricCards.forEach(function(card) {
  observer.observe(card);
});
</script>
```

---

## Design Specifications

**Impact Metrics:**
- Grid: 4 columns (large), 3 (desktop), 2 (mobile)
- Gap: 24px
- Card padding: 32px 24px
- Icon size: 32px (emoji)
- Value font: 40px, bold, primary green
- Label font: 16px, medium weight
- Unit font: 14px, gray

**Certifications:**
- Grid: 3 columns (desktop), 2 (tablet), 1 (mobile)
- Gap: 32px
- Card padding: 32px
- Logo height: 80px, auto width
- Card background: Light gray or glass effect
- Hover: Translate -4px, shadow elevation

---

## Sample Content

**Impact Metrics:**

1. 🌳 **1,500+** Trees Planted / annually
2. ♻️ **95%** Waste Recycled / in production
3. 💧 **80%** Water Saved / vs industry average
4. ⚡ **100%** Renewable Energy / operations
5. 🌍 **0** Net Carbon / emissions
6. 🏆 **25 Years** Sustainability Leadership

**Certifications:**

1. **FSC Certified**
   - Logo: FSC logo (PNG)
   - Description: "Forest Stewardship Council certified for responsible forest management practices."
   - Verify: https://fsc.org/

2. **Carbon Neutral**
   - Logo: Carbon Neutral logo
   - Description: "Verified carbon-neutral operations through reforestation and renewable energy."
   - Verify: https://carbonneutral.com/

3. **ISO 14001**
   - Logo: ISO logo
   - Description: "Environmental Management System certified for systematic environmental impact reduction."
   - Verify: https://iso.org/

---

## Dependencies

**Blocked By:**
- Story 1.3 (Glass Card Component)
- Story 3.1 (Sustainability Page Setup)
- Story 3.4 (Practices Section - metrics come after)

**Blocks:**
- None (final sustainability section)

**External:**
- Impact metrics data (values, labels, units)
- Certification logos (PNG with transparency, 400x200px)
- Certification descriptions and verification URLs

---

## Testing Checklist

### Visual Testing

- [ ] Impact metrics display in grid (3-4 columns)
- [ ] Metric values large and prominent
- [ ] Metric labels clear and readable
- [ ] Icons/emojis display correctly
- [ ] Certification logos display at 80px height
- [ ] Certifications grid responsive
- [ ] Glass effect visible on metric cards

### Interaction Testing

- [ ] Certification cards hover effect (lift -4px)
- [ ] Verify links clickable and open in new tab
- [ ] Optional: Counter animation triggers on scroll
- [ ] Smooth transitions (200ms)
- [ ] No link underlines until hover

### Performance Testing

- [ ] Certification logos optimized (<100KB each)
- [ ] No layout shift from images
- [ ] Counter animation smooth (if used)
- [ ] Section loads quickly

### Accessibility Testing

- [ ] Metrics have proper semantic structure
- [ ] Certification logos have alt text
- [ ] Links have descriptive text ("Verify FSC Certification")
- [ ] External links open in new tab with rel="noopener"
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation works for links

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Impact metrics section added
- [ ] 3-6 metric cards built in grid
- [ ] Each metric has value, label, optional icon
- [ ] Certifications section added
- [ ] 2-4 certification cards built
- [ ] Each certification has logo, name, description
- [ ] Verification links functional (open in new tab)
- [ ] Glass effect applied to metric cards
- [ ] Hover effects implemented
- [ ] Responsive layouts tested (all breakpoints)
- [ ] Optional: Counter animation implemented
- [ ] Cross-browser testing completed
- [ ] Accessibility requirements met
- [ ] Published to Webflow staging
- [ ] QA sign-off

---

## Troubleshooting Guide

### Issue: Metrics grid not responsive

**Solution:**
- Use custom CSS (provided above) for breakpoints
- Test grid-template-columns at each breakpoint
- Ensure media queries have `!important` to override
- Check grid gap doesn't cause overflow

### Issue: Certification logos different sizes

**Solution:**
- Set consistent `height: 80px` and `width: auto`
- Ensure logos have transparent backgrounds
- Crop logos to similar proportions before upload
- Use `display: block` and `margin: 0 auto` to center

### Issue: Counter animation not triggering

**Solution:**
- Check script is in Footer (before `</body>`)
- Ensure `.metric-value` class exists
- Verify IntersectionObserver supported (modern browsers)
- Check metric values are numeric (remove commas/+ first)
- Test threshold value (0.5 = 50% visible)

### Issue: Verify links not opening in new tab

**Solution:**
- Ensure `target="_blank"` set on Link Block
- Add `rel="noopener noreferrer"` for security
- Test on published site (not Designer)
- Check link URL is complete (includes https://)

---

## Notes

- **Glass Effect:** Optional for metric cards (can use solid background)
- **Counter Animation:** Optional enhancement, test performance
- **Certification Logos:** Must be PNG with transparency
- **Verification Links:** Critical for credibility
- **Metrics Grid:** Adapts 4 → 3 → 2 columns based on screen size
- **Icons:** Use emoji for simplicity, or upload icon images

---

## Resources

- [Webflow Grid Layout](https://university.webflow.com/lesson/css-grid-layout)
- [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Webflow External Links](https://university.webflow.com/lesson/link-settings)
- [Counter Animation Tutorial](https://css-tricks.com/animating-number-counters/)

---

**Status:** Ready for Development ✅
**Review URL:** `[project].webflow.io/sustainability` after implementation
