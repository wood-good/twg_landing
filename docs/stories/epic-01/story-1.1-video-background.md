# Story 1.1: Hero Video Background (Webflow)

**Story ID:** STORY-1.1
**Epic:** Epic 1 - First Impression
**Priority:** P0
**Story Points:** 5
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As a** procurement manager
**I want** to see an immersive video background that loads quickly
**So that** I immediately understand TWG's connection to nature and sustainability

---

## Description

Implement responsive hero video with 30-second forest scenery loop using Webflow's native video element, including fallback strategies for mobile and tablet devices. The video should create an emotional connection within the first 5 seconds while maintaining excellent performance across all devices.

---

## Acceptance Criteria

- [ ] Video background plays automatically on desktop (>1024px)
- [ ] 3 different forest scenes with smooth transitions
- [ ] No audio (accessibility + performance)
- [ ] Static poster image for mobile (<768px)
- [ ] Reduced quality video for tablet (768px-1024px)
- [ ] Video loops seamlessly
- [ ] Poster image displays immediately while video loads
- [ ] Video element includes proper accessibility attributes
- [ ] Performance: LCP <1.5 seconds

---

## Webflow Implementation

### Step 1: Prepare Video Assets

**Before uploading to Webflow:**

```bash
# Desktop version (MP4)
ffmpeg -i source-video.mp4 -c:v libx264 -b:v 600k -vf scale=1920:1080 -an desktop-hero.mp4

# Tablet version (MP4)
ffmpeg -i source-video.mp4 -c:v libx264 -b:v 400k -vf scale=1280:720 -an tablet-hero.mp4

# Poster image
ffmpeg -i source-video.mp4 -vf "scale=1920:1080,select=eq(n\,0)" -vframes 1 poster.jpg

# Optimize poster for web
# Use ImageOptim or similar tool to compress poster.jpg
```

**Target File Sizes:**
- Desktop video: <2.5MB
- Tablet video: <1.5MB
- Poster image: <200KB

---

### Step 2: Upload Assets to Webflow

1. Open Webflow Designer
2. Navigate to Assets panel (A key)
3. Upload videos:
   - `desktop-hero.mp4`
   - `tablet-hero.mp4`
4. Upload poster image:
   - `poster.jpg`

---

### Step 3: Create Hero Section

1. Add **Section** element to page
2. Set section class: `hero-section`
3. Configure section settings:
   - Height: 100vh
   - Position: Relative
   - Overflow: Hidden

---

### Step 4: Add Video Element (Desktop)

1. Inside hero section, add **Video** element
2. Configure video settings:
   - **Source:** desktop-hero.mp4 (from Assets)
   - **Poster Image:** poster.jpg
   - **Autoplay:** Enabled
   - **Loop:** Enabled
   - **Muted:** Enabled
   - **Play Inline:** Enabled (critical for iOS)
3. Set video class: `hero-video-desktop`
4. Position & sizing:
   - Position: Absolute
   - Top: 0, Left: 0, Right: 0, Bottom: 0
   - Width: 100%
   - Height: 100%
   - Object Fit: Cover
   - Z-index: 1

---

### Step 5: Add Background Image (Mobile Fallback)

1. Add **Div** inside hero section
2. Set class: `hero-poster-mobile`
3. Set background image: poster.jpg
4. Position & sizing:
   - Position: Absolute
   - Top: 0, Left: 0, Right: 0, Bottom: 0
   - Background Size: Cover
   - Background Position: Center
   - Z-index: 1

---

### Step 6: Configure Responsive Display

**Desktop Breakpoint (>1024px):**
- `.hero-video-desktop`: Display: Block
- `.hero-poster-mobile`: Display: None

**Tablet Breakpoint (768px-1024px):**
- `.hero-video-desktop`: Display: Block (use tablet video if bandwidth concern)
- `.hero-poster-mobile`: Display: None

**Mobile Breakpoint (<768px):**
- `.hero-video-desktop`: Display: None
- `.hero-poster-mobile`: Display: Block

To configure in Webflow:
1. Select `.hero-video-desktop`
2. Click breakpoint selector (top toolbar)
3. Switch to Mobile breakpoint
4. Set Display: None
5. Repeat for other elements

---

### Step 7: Accessibility Attributes

1. Select video element
2. Open Settings panel (D key)
3. Add custom attributes:
   - `aria-label`: "Forest scenery background video"
   - `role`: "img" (since it's decorative)

OR use Webflow's custom code:

```html
<!-- Embed element if needed for additional attributes -->
<div style="position: absolute; clip: rect(1px, 1px, 1px, 1px);">
  <p>Decorative background video showing peaceful forest scenery</p>
</div>
```

---

### Step 8: Performance Optimization

**In Webflow Designer:**
1. Check video compression (should be <2.5MB)
2. Verify poster image loads first
3. Ensure video is set to lazy load (Webflow default)

**Performance Checklist:**
- [ ] Video file size under 2.5MB
- [ ] Poster image optimized (<200KB)
- [ ] Autoplay attribute enabled
- [ ] Muted attribute enabled (required for autoplay)
- [ ] Loop attribute enabled

---

## Video Specifications

| Device | Resolution | Bitrate | Max Size | Format |
|--------|-----------|---------|----------|--------|
| Desktop | 1920x1080 | 600kb/s | 2.5MB | MP4 (H.264) |
| Tablet | 1280x720 | 400kb/s | 1.5MB | MP4 (H.264) |
| Mobile | N/A (poster only) | N/A | 200KB | JPG/WebP |

**Codec:** H.264 (best browser support)
**Audio:** None (removed for performance and autoplay)
**Duration:** 30 seconds

---

## Dependencies

### Blocked By
- Video assets from creative team (3 forest scenes)
- Poster image design and optimization

### Blocks
- Story 1.4: Hero Content Overlay (needs video container)

### External
- FFmpeg for video compression (or online tools like HandBrake)
- Webflow account with asset storage

---

## Testing Checklist

### Webflow Preview Testing
- [ ] Preview in all breakpoints (Desktop, Tablet, Mobile Portrait, Mobile Landscape)
- [ ] Video plays automatically on desktop
- [ ] Video loops seamlessly
- [ ] Poster displays on mobile
- [ ] No layout shift when video loads

### Browser Testing (Published Site)
```
Test Matrix:
- Chrome (Windows/Mac): ✓ Video autoplay
- Safari (Mac/iOS): ✓ Video autoplay (requires muted + playsinline)
- Firefox (Windows/Mac): ✓ Video autoplay
- Edge (Windows): ✓ Video autoplay
- Chrome Mobile (Android): ✓ Video autoplay
- Safari Mobile (iOS): ✓ Check playsinline works
```

### Performance Testing
- [ ] Run Lighthouse on published staging URL
- [ ] LCP (Largest Contentful Paint) < 1.5s
- [ ] Poster image appears immediately
- [ ] Video doesn't cause layout shift (CLS < 0.05)
- [ ] Check on slow 3G connection (Webflow throttling)

### Accessibility Testing
- [ ] Screen reader announces video description (if using aria-label)
- [ ] Video doesn't interfere with keyboard navigation
- [ ] Users with reduced motion preferences see poster only (optional enhancement)

---

## Definition of Done

- [ ] Video assets compressed and uploaded to Webflow
- [ ] Video element configured in hero section
- [ ] Responsive behavior working on all breakpoints
- [ ] Poster image displays on mobile
- [ ] No audio in video files
- [ ] Autoplay works on all supported browsers
- [ ] Performance metrics met (LCP <1.5s)
- [ ] Published to Webflow staging for review
- [ ] Cross-browser testing completed
- [ ] Client approval

---

## Troubleshooting Guide

### Issue: Video doesn't autoplay on mobile
**Solution:**
- Ensure `muted` attribute is enabled
- Ensure `playsinline` attribute is enabled (Webflow adds this)
- Some mobile browsers block autoplay - this is expected; poster displays instead

### Issue: Video file too large
**Solution:**
- Reduce bitrate: Use 500kb/s instead of 600kb/s
- Reduce resolution: Use 1280x720 for desktop instead of 1920x1080
- Shorten duration: Use 20-second loop instead of 30 seconds

### Issue: Video causes layout shift
**Solution:**
- Set explicit height on hero section (100vh)
- Ensure poster image matches video aspect ratio
- Use `object-fit: cover` on video element

### Issue: Slow loading on mobile
**Solution:**
- Ensure video is hidden on mobile breakpoint
- Verify poster image is optimized (<200KB)
- Use WebP format for poster if browser support allows

---

## Notes

- Webflow handles most video optimization automatically
- `playsinline` attribute is required for iOS autoplay
- Video without audio can autoplay; with audio it will be blocked
- Consider using Intersection Observer in future phase to pause video when not visible (performance)
- Monitor Webflow asset usage (there are storage limits on plans)
- For Webflow's video hosting limits, consider using Vimeo/YouTube as background (Phase 2 option)

---

## Resources

- [Webflow Video Element Documentation](https://university.webflow.com/lesson/video)
- [Webflow Background Video Tutorial](https://university.webflow.com/lesson/background-video)
- [FFmpeg Video Compression Guide](https://trac.ffmpeg.org/wiki/Encode/H.264)
- [Autoplay Policy Changes (Chrome)](https://developer.chrome.com/blog/autoplay/)

---

**Status:** Ready for Development ✅
**Branch:** N/A (Webflow visual development)
**Review URL:** Will be Webflow staging domain
