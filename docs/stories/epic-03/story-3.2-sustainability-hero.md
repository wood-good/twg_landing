# Story 3.2: Sustainability Hero Section (Webflow)

**Story ID:** STORY-3.2
**Epic:** Epic 3 - Sustainability Verification
**Priority:** P0
**Story Points:** 5
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As an** ESG-conscious buyer
**I want** to immediately see TWG's sustainability commitment
**So that** I understand their environmental values align with mine

---

## Description

Create impactful hero section for the Sustainability page with a powerful statement overlaid on nature imagery. This section sets the emotional tone and communicates TWG's environmental commitment within seconds of page load.

---

## Acceptance Criteria

- [ ] Hero statement prominently displayed (H1)
- [ ] Background image related to nature/sustainability (forest, trees, etc.)
- [ ] Glass effect on text container (using Story 1.3 glass card class)
- [ ] Scroll indicator to encourage exploration (optional enhancement)
- [ ] Mobile-responsive typography (scales appropriately)
- [ ] Accessible heading structure (H1 for statement)
- [ ] Load time <1 second (optimized images)
- [ ] Optional: Parallax effect on scroll

---

## Webflow Implementation

### Step 1: Create Hero Section

1. On **Sustainability** page (from Story 3.1)
2. Add **Section** element at top of page
3. Set class: `sustainability-hero`
4. Configure:
   - **Position:** Relative
   - **Height:** 60vh (desktop), 50vh (mobile)
   - **Min Height:** 500px (desktop), 400px (mobile)
   - **Overflow:** Hidden
   - **Display:** Flex
   - **Align Items:** Center
   - **Justify Content:** Center

---

### Step 2: Add Background Image Layer

1. Inside hero section, add **Div Block**
2. Set class: `hero-background`
3. Configure:
   - **Position:** Absolute
   - **Inset:** 0 (top 0, right 0, bottom 0, left 0)
   - **Z-index:** 0

4. Inside background div, add **Image**:
   - Upload nature/forest image (1920x1080px)
   - Alt text: "Sustainable forest managed by TWG"
   - Set class: `hero-image`
   - Configure:
     - **Width:** 100%
     - **Height:** 100%
     - **Object Fit:** Cover
     - **Transform:** Scale 1.1 (slight zoom for parallax room)

5. Below image, add **Div Block** for overlay:
   - Set class: `hero-overlay`
   - Configure:
     - **Position:** Absolute
     - **Inset:** 0
     - **Background:** Linear gradient (to bottom, rgba(0,0,0,0.3) to rgba(0,0,0,0.5))

---

### Step 3: Add Hero Content with Glass Effect

1. After background layer, add **Div Block**
2. Set class: `hero-content-wrapper`
3. Configure:
   - **Position:** Relative
   - **Z-index:** 1
   - **Width:** 100%
   - **Max Width:** 900px
   - **Padding:** 2rem (all sides)

4. Inside wrapper, add **Div Block**
5. Set classes: `glass-card hero-content` (reuse glass effect from Story 1.3)
6. Configure:
   - **Text Align:** Center
   - **Padding:** 48px (desktop), 32px (mobile)

---

### Step 4: Add Hero Statement (H1)

1. Inside hero content, add **Heading** (H1)
2. Set class: `hero-statement`
3. **Text:** "From seed to product, we control every step of our environmental journey."
4. Configure:
   - **Font Size:** 40px (desktop), 24px (mobile)
   - **Font Weight:** 300 (light)
   - **Line Height:** 1.4
   - **Color:** White
   - **Text Shadow:** 0 2px 4px rgba(0,0,0,0.3)
   - **Margin Bottom:** 32px
   - **Letter Spacing:** -0.02em

**Note:** If using Static Page approach (Story 3.1), text is editable via Webflow Editor.

---

### Step 5: Add Scroll Indicator (Optional)

1. Below hero statement, add **Div Block**
2. Set class: `scroll-indicator`
3. Configure:
   - **Display:** Flex
   - **Flex Direction:** Column
   - **Align Items:** Center
   - **Gap:** 8px
   - **Color:** rgba(255, 255, 255, 0.8)
   - **Font Size:** 14px

4. Inside indicator, add **Text:** "Scroll to explore"

5. Below text, add **Embed** element for animated arrow:

```html
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="scroll-arrow">
  <path
    d="M7 10L12 15L17 10"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>
```

---

### Step 6: Add Custom Code for Animations

**In Site Settings → Custom Code → Head Code:**

```html
<style>
/* Hero Statement Animation */
.hero-content {
  animation: fadeInUp 1s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Scroll Indicator Bounce Animation */
.scroll-indicator {
  animation: bounce 2s infinite;
}

.scroll-arrow {
  animation: arrowBounce 2s infinite;
}

@keyframes bounce {
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
}

@keyframes arrowBounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(4px);
  }
}

/* Parallax Effect (Modern Browsers) */
@supports (animation-timeline: scroll()) {
  .hero-image {
    animation: parallax linear;
    animation-timeline: scroll();
    animation-range: 0 500px;
  }

  @keyframes parallax {
    to {
      transform: scale(1.1) translateY(10%);
    }
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  .hero-content,
  .scroll-indicator,
  .scroll-arrow,
  .hero-image {
    animation: none !important;
  }

  .hero-content {
    opacity: 1;
  }
}
</style>
```

**In Site Settings → Custom Code → Before `</body>` Tag:**

```html
<script>
// Hide scroll indicator after scrolling
(function() {
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (!scrollIndicator) return;

  let hasScrolled = false;

  window.addEventListener('scroll', function() {
    if (!hasScrolled && window.scrollY > 100) {
      hasScrolled = true;
      scrollIndicator.style.transition = 'opacity 300ms ease';
      scrollIndicator.style.opacity = '0';
      scrollIndicator.style.pointerEvents = 'none';
    }
  });
})();

// Smooth scroll for anchor links (if navigation added later)
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
</script>
```

---

## Design Specifications

**Hero Section:**
- Height: 60vh (desktop), 50vh (mobile)
- Min height: 500px (desktop), 400px (mobile)
- Background: Image with gradient overlay

**Hero Statement:**
- Font size: 40px (desktop), 24px (mobile)
- Font weight: 300 (light)
- Line height: 1.4
- Color: White with text shadow
- Max width: 900px

**Glass Card:**
- Background: rgba(255, 255, 255, 0.1) with backdrop blur
- Padding: 48px (desktop), 32px (mobile)
- Border radius: 12px
- Border: 1px solid rgba(255, 255, 255, 0.2)

**Scroll Indicator:**
- Font size: 14px
- Color: rgba(255, 255, 255, 0.8)
- Animated bounce effect
- Fades out after scroll

**Background Image:**
- Dimensions: 1920x1080px minimum
- File size: <1MB (optimized WebP or JPEG)
- Subject: Forest, trees, nature, sustainability
- Gradient overlay: Dark at bottom for text contrast

---

## Image Optimization

**Hero Background Image:**

1. **Prepare Image:**
   - Original: High-res nature photo (1920x1080px or larger)
   - Export at 80% JPEG quality or WebP
   - Target: <1MB file size

2. **Upload to Webflow:**
   - Webflow auto-optimizes images
   - Generates responsive variants
   - Serves WebP to supporting browsers

3. **Set Loading Priority:**
   - In Image Settings: **Loading:** Eager (for hero image)
   - This ensures fast LCP (Largest Contentful Paint)

---

## Alternative: Video Background (Phase 2)

For a premium feel, replace image with video:

1. Replace Image with **Video** element
2. Configure:
   - **Autoplay:** On
   - **Loop:** On
   - **Muted:** On
   - **Controls:** Hide
   - **Poster Image:** Fallback image

**Video Requirements:**
- Duration: 10-20 seconds (loopable)
- Codec: H.264 (MP4)
- Resolution: 1920x1080px
- File size: <5MB (heavily compressed)
- Frame rate: 24fps or 30fps

**Note:** Test performance on mobile before deploying video.

---

## Dependencies

**Blocked By:**
- Story 1.3 (Glass Card Component - reuse `.glass-card` class)
- Story 3.1 (Sustainability Page Setup)

**Blocks:**
- None (hero section is independent)

**External:**
- Hero background image (forest/nature, 1920x1080px, <1MB)
- Approved hero statement copy (50-200 characters)

---

## Testing Checklist

### Visual Testing

- [ ] Hero section displays at 60vh height (desktop)
- [ ] Background image covers full hero area
- [ ] Gradient overlay provides sufficient text contrast
- [ ] Glass effect visible on hero content
- [ ] Hero statement readable (white text with shadow)
- [ ] Scroll indicator displays and animates
- [ ] Responsive layout works (desktop, tablet, mobile)

### Interaction Testing

- [ ] Scroll indicator bounces/animates
- [ ] Scroll indicator fades after scrolling 100px
- [ ] Parallax effect works on hero image (modern browsers)
- [ ] Smooth scroll works for anchor links (if navigation present)
- [ ] No animation for users with `prefers-reduced-motion`

### Performance Testing

- [ ] Hero image loads quickly (LCP <1 second)
- [ ] Page load time <1.5 seconds
- [ ] No layout shift from hero content
- [ ] Animations run at 60fps
- [ ] Glass effect doesn't impact performance

### Accessibility Testing

- [ ] Hero statement is H1 (proper heading hierarchy)
- [ ] Text contrast meets WCAG AA (4.5:1 ratio)
- [ ] Scroll indicator hidden from screen readers (`aria-hidden="true"`)
- [ ] Background image has alt text
- [ ] Keyboard navigation works for any links

### Browser Testing

- [ ] Chrome (Windows/Mac)
- [ ] Safari (Mac/iOS)
- [ ] Firefox (Windows/Mac)
- [ ] Edge (Windows)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Hero section created on Sustainability page
- [ ] Background image uploaded and optimized
- [ ] Glass effect applied to hero content
- [ ] Hero statement displays as H1
- [ ] Scroll indicator implemented (with animation)
- [ ] Custom code added for animations
- [ ] Parallax effect implemented (progressive enhancement)
- [ ] Mobile responsive design verified
- [ ] Performance metrics met (LCP <1s)
- [ ] Accessibility requirements met
- [ ] All breakpoints tested
- [ ] Cross-browser testing completed
- [ ] Published to Webflow staging
- [ ] QA sign-off

---

## Troubleshooting Guide

### Issue: Hero statement text not readable

**Solution:**
- Increase gradient overlay opacity (darker background)
- Add text-shadow to hero statement (already included)
- Use bolder font weight (400 or 600)
- Test with different background images

### Issue: Glass effect not visible

**Solution:**
- Ensure `.glass-card` class is applied (from Story 1.3)
- Increase backdrop-filter blur (15px or 20px)
- Adjust glass card background opacity
- Check browser support for backdrop-filter (not supported in older browsers)

### Issue: Parallax effect not working

**Solution:**
- Parallax uses modern CSS `animation-timeline: scroll()`
- Only works in Chrome 115+, Edge 115+
- Gracefully degrades in unsupported browsers
- Test in Chrome/Edge latest versions
- Falls back to static image in Firefox/Safari

### Issue: Scroll indicator not hiding after scroll

**Solution:**
- Check JavaScript is placed before `</body>` tag
- Verify `.scroll-indicator` class exists on element
- Check browser console for JavaScript errors
- Test on published site (not Designer preview)

### Issue: Hero section too short/tall on mobile

**Solution:**
- Adjust min-height breakpoint (400px → 350px or 450px)
- Test on real devices (not just browser DevTools)
- Consider viewport height variations (iOS Safari)
- Set max-height if hero is too tall on landscape

### Issue: Background image loading slowly

**Solution:**
- Compress image to <1MB (use TinyPNG or Squoosh)
- Use WebP format with JPEG fallback
- Set image loading to "eager" (not lazy)
- Upload to Webflow Asset Manager for auto-optimization
- Consider using Cloudflare Image Optimization

---

## Notes

- **Glass Effect:** Reuses `.glass-card` class from Story 1.3
- **Hero Statement:** Editable via Webflow Editor (Static Page approach)
- **Video Background:** Consider for Phase 2 (premium feel)
- **Seasonal Updates:** Prepare multiple background images for seasonal variation
- **Parallax:** Progressive enhancement - degrades gracefully in unsupported browsers
- **Scroll Indicator:** Optional but recommended for engagement
- **LCP Optimization:** Hero image should be largest contentful paint element

---

## Resources

- [Webflow Image Optimization](https://university.webflow.com/lesson/image-optimization)
- [Webflow Custom Code](https://university.webflow.com/lesson/custom-code-in-the-head-and-body-tags)
- [CSS Parallax Effects](https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timeline)
- [Reduced Motion Media Query](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion)
- [WCAG Color Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

**Status:** Ready for Development ✅
**Review URL:** `[project].webflow.io/sustainability` after implementation
