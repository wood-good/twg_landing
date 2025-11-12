# Story 2.3: Product Card Styling & Optimization (Webflow)

**Story ID:** STORY-2.3
**Epic:** Epic 2 - Product Discovery
**Priority:** P1
**Story Points:** 3
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As a** B2B client browsing products
**I want** to see clear, attractive product cards with smooth interactions
**So that** I can quickly understand each product offering

---

## Description

**Note:** In Webflow, product card design is handled within the Collection Item in Story 2.2. This story documents advanced styling refinements, performance optimizations, and analytics tracking that go beyond the basic implementation.

---

## Acceptance Criteria

- [ ] Glass effect applied to cards (using `.glass-card` class from Story 1.3)
- [ ] Advanced hover interactions with smooth transitions
- [ ] Text truncation for long descriptions (line-clamp)
- [ ] Accessible card links with proper ARIA labels
- [ ] Image lazy loading configured
- [ ] Aspect ratio preserved to prevent layout shift
- [ ] Analytics tracking on card clicks
- [ ] Reduced motion support

---

## Implementation Notes

### Card Design (Completed in Story 2.2)

The product card structure was designed in **Story 2.2, Steps 5-6**:
- Featured image with aspect ratio
- Product name (H3)
- Short description with line-clamp
- CTA button

### Additional Refinements (This Story)

This story covers enhancements beyond the basic implementation:

---

## Advanced Styling

### 1. Apply Glass Effect (Optional Enhancement)

If cards need glass effect background:

1. Select `.product-card` class
2. Add additional class: `glass-card` (from Story 1.3)
3. Adjust opacity to `glass-card light` for subtle effect

**Alternative:** Keep cards with solid white background for better image visibility.

---

### 2. Text Truncation (Line Clamp)

For product descriptions:

1. Select `.product-card-description` class
2. Add **Custom CSS** via Site Settings → Custom Code:

```html
<style>
.product-card-description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Mobile: 2 lines */
@media (max-width: 768px) {
  .product-card-description {
    -webkit-line-clamp: 2;
  }
}
</style>
```

**Purpose:** Prevents long descriptions from breaking card layout.

---

### 3. Enhanced Hover Effects

Beyond basic scale effect (from Story 2.2), add:

**Image Overlay on Hover:**
```html
<style>
.product-card-image::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 60%,
    rgba(0, 0, 0, 0.3) 100%
  );
  opacity: 0;
  transition: opacity 300ms ease;
  pointer-events: none;
}

.product-card:hover .product-card-image::after {
  opacity: 1;
}
</style>
```

**CTA Icon Animation:**
```html
<style>
.product-card-cta {
  position: relative;
  padding-right: 2.5rem;
}

.product-card-cta::after {
  content: '→';
  position: absolute;
  right: 1rem;
  transition: transform 200ms ease;
}

.product-card:hover .product-card-cta::after {
  transform: translateX(4px);
}
</style>
```

---

### 4. Reduced Motion Support

For users with motion sensitivity:

```html
<style>
@media (prefers-reduced-motion: reduce) {
  .product-card {
    transition: none !important;
  }

  .product-card:hover {
    transform: none !important;
  }
}
</style>
```

---

## Performance Optimization

### Image Lazy Loading

Webflow automatically lazy-loads images below the fold. To optimize further:

1. **First 3-4 Cards (Above Fold):**
   - In Collection List settings, these load immediately
   - Webflow handles this automatically

2. **Remaining Cards:**
   - Lazy-loaded by default
   - Uses native browser `loading="lazy"`

**Verification:**
- Publish site
- Open DevTools → Network tab
- Scroll page
- Images load only when approaching viewport

---

### Aspect Ratio to Prevent Layout Shift

Ensure images have explicit aspect ratio:

1. Select `.product-card-image` class
2. Set **Aspect Ratio:** 4:3 (or your preferred ratio)
3. Set **Object Fit:** Cover

**Benefit:** Prevents Cumulative Layout Shift (CLS), improves Core Web Vitals.

---

## Analytics Tracking

### Track Product Card Clicks

Add custom code to track when users click product cards:

**In Site Settings → Custom Code → Before `</body>` Tag:**

```html
<script>
// Track product card clicks
document.querySelectorAll('.product-card').forEach(function(card) {
  card.addEventListener('click', function(e) {
    // Get product name from card
    var productName = card.querySelector('.product-card-title')?.textContent;

    // Track with Google Analytics (if installed)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'select_item', {
        'item_name': productName,
        'content_type': 'product'
      });
    }

    // Track with custom analytics (optional)
    console.log('Product clicked:', productName);
  });
});
</script>
```

**Purpose:** Understand which products generate most interest.

---

## Accessibility Enhancements

### 1. Improved Focus Indicators

```html
<style>
.product-card:focus-within {
  outline: 2px solid var(--color-primary, #2C5530);
  outline-offset: 4px;
}

/* Remove default outline on Link Block */
.product-card a:focus {
  outline: none;
}
</style>
```

### 2. ARIA Labels for Cards

In Webflow Designer:
1. Select Link Block wrapping card
2. **Custom Attributes:**
   - **Name:** `aria-label`
   - **Value:** Bind to dynamic → "View {Product Name} details"

**Example:** `aria-label="View Premium Oak Furniture details"`

---

## Testing Checklist

### Visual Testing

- [ ] Cards display consistently across browsers
- [ ] Hover animations smooth (60fps)
- [ ] Text truncation works (3 lines desktop, 2 mobile)
- [ ] Glass effect renders correctly (if applied)
- [ ] No layout shift when images load
- [ ] Images maintain aspect ratio
- [ ] CTA button visible and styled correctly

### Interaction Testing

- [ ] Hover effect triggers smoothly
- [ ] Click navigates to correct product page
- [ ] Focus indicators visible on keyboard navigation
- [ ] Reduced motion disables animations when preferred
- [ ] Touch interactions work on mobile

### Performance Testing

- [ ] Images lazy load below fold
- [ ] First 3-4 images load immediately (above fold)
- [ ] Page load time <1.2 seconds
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Smooth scrolling (60fps)

### Accessibility Testing

- [ ] Keyboard navigation works (Tab, Enter)
- [ ] Screen reader announces product names
- [ ] Focus indicators meet WCAG 2.1 AA
- [ ] Color contrast sufficient (4.5:1 minimum)
- [ ] All images have alt text

---

## Dependencies

**Blocked By:**
- Story 2.2 (Products Grid Page - cards designed there)
- Story 1.3 (Glass Card styling - if using glass effect)

**Blocks:**
- None (enhancement story)

**External:**
- Google Analytics configured (for tracking)

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Advanced hover effects implemented (optional)
- [ ] Text truncation working with line-clamp
- [ ] Analytics tracking configured (if GA available)
- [ ] Reduced motion support added
- [ ] Aspect ratios prevent layout shift
- [ ] Image lazy loading verified
- [ ] Accessibility enhancements applied
- [ ] Cross-browser testing completed
- [ ] Performance metrics met (CLS < 0.1)
- [ ] Published to Webflow staging
- [ ] QA sign-off

---

## Troubleshooting Guide

### Issue: Text not truncating
**Solution:**
- Ensure Custom CSS includes `-webkit-box-orient: vertical`
- Check that `overflow: hidden` is set
- Verify `display: -webkit-box` is applied
- Some browsers may require vendor prefixes

### Issue: Hover animation laggy
**Solution:**
- Use `transform` instead of `top/left/width/height`
- Add `will-change: transform` to `.product-card`
- Limit shadow complexity
- Test on lower-end devices
- Consider disabling glass effect on mobile

### Issue: Analytics not tracking
**Solution:**
- Verify Google Analytics script installed
- Check `gtag` function exists in console
- Ensure Custom Code is in Footer (after gtag loads)
- Test in published site (not Webflow Designer)
- Check browser console for errors

### Issue: Layout shift on image load
**Solution:**
- Set explicit aspect ratio on image container
- Ensure width and height attributes set
- Use `object-fit: cover` to maintain aspect
- Test with slow 3G throttling in DevTools

---

## Notes

- **Webflow Native:** Most optimizations handled automatically by Webflow
- **Glass Effect:** Optional - consider readability vs aesthetics
- **Analytics:** Requires Google Analytics 4 or similar installed
- **Performance:** Test on real devices, not just DevTools
- **Line Clamp:** Widely supported, but may need fallback for very old browsers
- **Reduced Motion:** Important for accessibility compliance

---

## Resources

- [CSS Line Clamp (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp)
- [Prefers Reduced Motion (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [Google Analytics Event Tracking](https://developers.google.com/analytics/devguides/collection/ga4/events)
- [Web Vitals - CLS](https://web.dev/cls/)
- [WCAG 2.1 Focus Indicators](https://www.w3.org/WAI/WCAG21/Understanding/focus-visible.html)

---

**Status:** Ready for Development ✅
**Note:** Core card design completed in Story 2.2; this story covers enhancements only.
**Review URL:** Webflow staging domain (`[project].webflow.io/products`)
