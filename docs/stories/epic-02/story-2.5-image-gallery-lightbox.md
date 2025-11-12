# Story 2.5: Image Gallery with Lightbox (Webflow)

**Story ID:** STORY-2.5
**Epic:** Epic 2 - Product Discovery
**Priority:** P1
**Story Points:** 2
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As a** B2B client viewing product details
**I want** to view multiple product images in a gallery with full-screen preview
**So that** I can see the product from different angles and contexts

---

## Description

Configure Webflow's native lightbox feature for the Multi-Image gallery field on product detail pages. Webflow provides built-in lightbox functionality with navigation, keyboard support, and mobile-friendly interactions - no custom code required.

---

## Acceptance Criteria

- [ ] Multi-Image field displays as responsive grid (3 columns desktop, 2 mobile)
- [ ] Click opens native Webflow lightbox
- [ ] Lightbox supports previous/next navigation
- [ ] Keyboard navigation works (arrow keys, ESC to close)
- [ ] Touch/swipe gestures work on mobile
- [ ] Image counter displays current position
- [ ] Smooth transitions between images
- [ ] Body scroll prevented when lightbox open
- [ ] Focus returns to thumbnail after close

---

## Webflow Implementation

### Step 1: Configure Multi-Image Field (Already Done)

This was completed in **Story 2.1** and **Story 2.4**:
- Multi-Image field created in Products Collection
- Field bound to product detail page

**Skip to Step 2** if Multi-Image field already configured.

---

### Step 2: Enable Native Lightbox

1. Open **Product Template** page (from Story 2.4)
2. Select the **Multi-Image** element
3. **Settings Panel → Lightbox:**
   - ✅ **Enable Lightbox**
4. Publish site

**That's it!** Webflow's native lightbox is now active.

**Features Included:**
- ✅ Full-screen image viewer
- ✅ Previous/Next navigation arrows
- ✅ Keyboard support (arrow keys, ESC)
- ✅ Touch/swipe on mobile
- ✅ Image counter (e.g., "2 / 5")
- ✅ Close button
- ✅ Background click to close
- ✅ Prevents body scroll
- ✅ Responsive design

---

### Step 3: Style Gallery Grid

Style the **Multi-Image** element for better thumbnail presentation:

1. Select **Multi-Image** element
2. **Layout Settings:**
   - **Display:** Grid
   - **Grid Columns:** 3 (desktop), 2 (mobile)
   - **Gap:** 16px
   - **Aspect Ratio:** 4:3 (or maintain original)

3. **Add class:** `product-gallery`

4. **Optional: Add hover effect via Custom Code**

```html
<!-- In Site Settings → Custom Code → Head Code -->
<style>
/* Gallery Grid Enhancement */
.product-gallery {
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

/* Thumbnail hover effect */
.product-gallery img {
  transition: transform 300ms ease, box-shadow 300ms ease;
  border-radius: 8px;
  cursor: pointer;
}

.product-gallery img:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

/* Mobile: 2 columns */
@media (max-width: 768px) {
  .product-gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}
</style>
```

---

### Step 4: Customize Lightbox Appearance (Optional)

Webflow's lightbox styling is managed internally, but you can add custom CSS:

```html
<!-- In Site Settings → Custom Code → Head Code -->
<style>
/* Custom Lightbox Styling (if needed) */

/* Darken background overlay */
.w-lightbox-backdrop {
  background: rgba(0, 0, 0, 0.95) !important;
}

/* Style navigation arrows */
.w-lightbox-control {
  background: rgba(255, 255, 255, 0.1) !important;
  border: 1px solid rgba(255, 255, 255, 0.2) !important;
  transition: background 200ms ease;
}

.w-lightbox-control:hover {
  background: rgba(255, 255, 255, 0.2) !important;
}

/* Style close button */
.w-lightbox-close {
  background: rgba(255, 255, 255, 0.1) !important;
  border-radius: 50% !important;
}

/* Image counter styling */
.w-lightbox-caption {
  background: rgba(0, 0, 0, 0.7) !important;
  padding: 8px 16px !important;
  border-radius: 20px !important;
  font-size: 14px !important;
}
</style>
```

**Note:** Webflow uses `.w-lightbox-*` classes for lightbox elements. Inspect published site to see exact class names.

---

### Step 5: Add Zoom Icon Overlay (Optional Enhancement)

Add visual indicator that images are clickable:

```html
<!-- In Site Settings → Custom Code → Head Code -->
<style>
/* Zoom icon overlay on thumbnails */
.product-gallery {
  position: relative;
}

.product-gallery a {
  position: relative;
  display: block;
  overflow: hidden;
  border-radius: 8px;
}

.product-gallery a::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 300ms ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-gallery a:hover::after {
  opacity: 1;
}

/* Optional: Add zoom icon using SVG data URI */
.product-gallery a:hover::before {
  content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>');
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  pointer-events: none;
  opacity: 0;
  transition: opacity 300ms ease;
}

.product-gallery a:hover::before {
  opacity: 1;
}
</style>
```

---

## Alternative: Third-Party Lightbox (Advanced)

If Webflow's native lightbox doesn't meet requirements, integrate third-party libraries:

### Option A: PhotoSwipe (Popular Choice)

1. **Add PhotoSwipe via CDN** (Site Settings → Custom Code → Head):

```html
<!-- PhotoSwipe CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/photoswipe@5.3.7/dist/photoswipe.css">
```

2. **Add PhotoSwipe JS** (Before `</body>` tag):

```html
<!-- PhotoSwipe JS -->
<script src="https://cdn.jsdelivr.net/npm/photoswipe@5.3.7/dist/umd/photoswipe.umd.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/photoswipe@5.3.7/dist/umd/photoswipe-lightbox.umd.min.js"></script>

<script>
// Initialize PhotoSwipe
document.addEventListener('DOMContentLoaded', function() {
  const lightbox = new PhotoSwipeLightbox({
    gallery: '.product-gallery',
    children: 'a',
    pswpModule: PhotoSwipe
  });

  lightbox.init();
});
</script>
```

3. **Disable Webflow native lightbox** on Multi-Image element

**Benefits:**
- More customization options
- Better mobile experience
- Zoom/pinch gestures
- Custom UI elements

---

### Option B: GLightbox (Lightweight)

1. **Add GLightbox via CDN** (Head Code):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/glightbox@3.2.0/dist/css/glightbox.min.css">
```

2. **Add GLightbox JS** (Footer Code):

```html
<script src="https://cdn.jsdelivr.net/npm/glightbox@3.2.0/dist/js/glightbox.min.js"></script>
<script>
document.addEventListener('DOMContentLoaded', function() {
  const lightbox = GLightbox({
    selector: '.product-gallery a',
    touchNavigation: true,
    loop: true,
    autoplayVideos: true
  });
});
</script>
```

**Benefits:**
- Smaller file size than PhotoSwipe
- Supports videos
- Simple configuration

---

## Design Specifications

**Gallery Grid:**
- Desktop: 3 columns, 16px gap
- Tablet: 3 columns, 12px gap
- Mobile: 2 columns, 12px gap
- Aspect ratio: 4:3 or maintain original

**Thumbnails:**
- Border radius: 8px
- Hover effect: Scale 1.05, shadow elevation
- Cursor: Pointer
- Min touch target: 44x44px (mobile)

**Lightbox (Native Webflow):**
- Background: rgba(0, 0, 0, 0.95)
- Navigation arrows: White, 48x48px
- Close button: Top-right, 48x48px
- Image counter: Bottom center
- Transitions: 300ms ease

---

## Dependencies

**Blocked By:**
- Story 2.1 (Multi-Image field in Products Collection)
- Story 2.4 (Product Detail Page template)

**Blocks:**
- None (enhancement story)

**External:**
- Product gallery images uploaded to CMS (3-5 per product)
- Images optimized (<500KB each)

---

## Testing Checklist

### Webflow Preview Testing

- [ ] Multi-Image grid displays thumbnails
- [ ] Grid responsive (3 cols desktop, 2 mobile)
- [ ] Click thumbnail opens lightbox
- [ ] Lightbox displays full-size image
- [ ] Navigation arrows functional
- [ ] Image counter displays (e.g., "2 / 5")
- [ ] Close button works
- [ ] Click outside image closes lightbox
- [ ] ESC key closes lightbox

### Published Site Testing

- [ ] All thumbnails load correctly
- [ ] Lightbox opens on first click (no double-click)
- [ ] Arrow keys navigate between images
- [ ] Swipe gestures work on mobile
- [ ] Pinch-to-zoom works (if using PhotoSwipe)
- [ ] Back button doesn't break lightbox
- [ ] Body scroll prevented when lightbox open
- [ ] Focus returns to thumbnail after close

### Browser Testing

- [ ] Chrome (Windows/Mac)
- [ ] Safari (Mac/iOS)
- [ ] Firefox (Windows/Mac)
- [ ] Edge (Windows)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

### Accessibility Testing

- [ ] Keyboard navigation fully functional
- [ ] Focus indicators visible
- [ ] ARIA labels present (if custom lightbox)
- [ ] Screen reader announces image changes
- [ ] Touch targets meet minimum 44x44px
- [ ] Color contrast sufficient

### Performance Testing

- [ ] Images lazy load below fold
- [ ] Lightbox doesn't cause layout shift
- [ ] Smooth animations (60fps)
- [ ] Images optimized (<500KB each)
- [ ] Total gallery load time <2 seconds

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Multi-Image field configured with lightbox enabled
- [ ] Gallery grid styled (3 cols desktop, 2 mobile)
- [ ] Native lightbox functional with all features
- [ ] Optional: Custom styling applied
- [ ] Optional: Zoom icon overlay added
- [ ] Hover effects smooth and performant
- [ ] Keyboard navigation working
- [ ] Touch/swipe gestures working
- [ ] All breakpoints tested
- [ ] Cross-browser testing completed
- [ ] Accessibility requirements met
- [ ] Images optimized for web
- [ ] Published to Webflow staging
- [ ] QA sign-off

---

## Troubleshooting Guide

### Issue: Lightbox not opening

**Solution:**
- Ensure lightbox is **enabled** in Multi-Image settings
- Check that Multi-Image field has images uploaded in CMS
- Verify images are published (not drafts)
- Publish site (lightbox may not work in Designer preview)
- Clear browser cache and test again

### Issue: Images not displaying in lightbox

**Solution:**
- Verify images uploaded to CMS have valid URLs
- Check image file sizes (<10MB for Webflow)
- Ensure images aren't blocked by ad blockers
- Test with different image formats (JPG, PNG, WebP)
- Check browser console for errors

### Issue: Lightbox works but styling is wrong

**Solution:**
- Inspect lightbox elements to find correct CSS classes
- Webflow uses `.w-lightbox-*` classes
- Ensure Custom Code is in **Head** (not Footer) for CSS
- Use `!important` to override Webflow defaults
- Clear CDN cache if using Cloudflare

### Issue: Keyboard navigation not working

**Solution:**
- This is a Webflow native feature - should work automatically
- Test on published site (not Designer)
- Check no JavaScript errors in console
- Ensure lightbox is in focus (click inside first)
- Test with different browsers

### Issue: Mobile swipe not working

**Solution:**
- Native Webflow lightbox supports swipe by default
- Test on actual device (not browser DevTools)
- Ensure no conflicting JavaScript
- If using custom lightbox, verify touch events configured
- Check viewport meta tag present in site settings

### Issue: Gallery grid not responsive

**Solution:**
- Verify grid breakpoint settings (3 cols → 2 cols)
- Check grid-template-columns set per breakpoint
- Use Webflow responsive preview mode
- Test on actual devices
- Ensure no fixed widths preventing responsive behavior

---

## Notes

- **Webflow Native Lightbox:** Simplest option, works out-of-the-box
- **No Code Required:** Just enable lightbox in Multi-Image settings
- **Third-Party Libraries:** Use only if native doesn't meet requirements
- **Performance:** Webflow auto-optimizes images (responsive images, WebP)
- **Asset Limits:** 2GB storage on CMS plan (plenty for product galleries)
- **Lightbox Customization:** Limited with native, extensive with third-party
- **SEO:** Lightbox doesn't affect SEO (images indexed normally)

---

## Resources

- [Webflow Lightbox Documentation](https://university.webflow.com/lesson/lightbox)
- [Multi-Image Field Guide](https://university.webflow.com/lesson/multi-image-field)
- [PhotoSwipe Documentation](https://photoswipe.com/)
- [GLightbox Documentation](https://github.com/biati-digital/glightbox)
- [Image Optimization Best Practices](https://web.dev/fast/#optimize-your-images)

---

**Status:** Ready for Development ✅
**Review URL:** Webflow staging domain (`[project].webflow.io/products/[sample-product-slug]`)
