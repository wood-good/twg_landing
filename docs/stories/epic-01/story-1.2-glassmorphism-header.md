# Story 1.2: Glassmorphism Header Navigation (Webflow)

**Story ID:** STORY-1.2
**Epic:** Epic 1 - First Impression
**Priority:** P0 - Critical
**Story Points:** 3
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As a** site visitor
**I want** persistent navigation that doesn't obstruct the hero video
**So that** I can navigate the site while enjoying the visual experience

---

## Description

Build persistent glassmorphism header using Webflow's Navbar component with backdrop-filter blur effects, sticky positioning, and smooth hover interactions. The header will be created as a reusable Symbol to maintain consistency across all pages.

---

## Acceptance Criteria

- [ ] Header persists across all pages (using Webflow Symbol)
- [ ] Glass effect with backdrop-filter blur
- [ ] Logo + company name on left
- [ ] Menu items: Home, Products, Manufacturing, Sustainability, Contact
- [ ] Smooth hover effects (200ms transition)
- [ ] Active page indication (underline or highlight)
- [ ] Sticky positioning (stays at top on scroll)
- [ ] Mobile hamburger menu (Webflow default behavior)
- [ ] Graceful fallback for browsers without backdrop-filter support

---

## Webflow Implementation

### Step 1: Create Navbar Component

1. Open Webflow Designer
2. From **Add Panel** (A key), drag **Navbar** element to page
3. Place at top of page (before hero section)
4. Set Navbar class: `glassmorphism-header`
5. Configure Navbar settings:
   - **Position:** Fixed
   - **Top:** 0px
   - **Left:** 0px
   - **Right:** 0px
   - **Z-index:** 100

---

### Step 2: Configure Logo Section

1. Inside Navbar → **Brand** element (left side):
   - Upload logo to Asset Manager (recommended: SVG or PNG with transparency)
   - Set logo class: `header-logo`
   - Logo dimensions: Width auto, Height 48px
2. Add **Text** element next to logo:
   - Text: "TWG" (or company name)
   - Class: `site-name`
   - Font size: 24px (1.5rem)
   - Font weight: 600 (Semi-bold)
   - Color: White

---

### Step 3: Add Navigation Links

1. Inside Navbar → **Nav Menu** (right side):
   - Link 1: "Home" → `/` (set as current page for homepage)
   - Link 2: "Products" → `/products`
   - Link 3: "Manufacturing" → `/manufacturing`
   - Link 4: "Sustainability" → `/sustainability`
   - Link 5: "Contact" → `/contact`
2. Set class for all nav links: `nav-link`
3. Configure link styling:
   - Color: White
   - Font size: 16px (1rem)
   - Text decoration: None
   - Padding: 8px vertical, 0px horizontal
   - Margin: 0 16px (gap between links)

---

### Step 4: Apply Glassmorphism Effect

1. Select `.glassmorphism-header` class
2. Set background styling:
   - **Background color:** White
   - **Opacity:** 10% (rgba(255, 255, 255, 0.1))
3. Add **Custom Code** for backdrop-filter:
   - Click **Settings Panel** (D key)
   - Navigate to **Custom Attributes**
   - Add attribute:
     - **Name:** `style`
     - **Value:** `backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);`

**Alternative Method (Custom CSS):**
If using Webflow's Custom Code section:

```css
/* Add to Site Settings → Custom Code → Head Code */
<style>
.glassmorphism-header {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Fallback for browsers without backdrop-filter support */
@supports not (backdrop-filter: blur(10px)) {
  .glassmorphism-header {
    background: rgba(255, 255, 255, 0.9) !important;
  }
}
</style>
```

---

### Step 5: Configure Sticky Behavior

1. Select `.glassmorphism-header` navbar
2. Set **Position:** Fixed (should already be set)
3. Ensure:
   - **Top:** 0px
   - **Width:** 100%
   - **Z-index:** 100

4. Add padding to page body:
   - Select **Body** element
   - Add **Padding Top:** 72px (to prevent content hiding under fixed header)

---

### Step 6: Add Hover Interactions

**Method A: Using Webflow Interactions 2.0 (Recommended)**

1. Select `.nav-link` class
2. Click **Interactions** panel
3. Create new **Mouse Hover** interaction:
   - **Trigger:** Mouse hover
   - **Hover Action:**
     - Opacity: 0.8
     - Transition: 200ms ease-in-out
   - **Hover Out Action:**
     - Opacity: 1
     - Transition: 200ms ease-in-out

**Method B: Using CSS (Faster)**

Add to Custom Code:
```css
.nav-link {
  transition: opacity 200ms ease-in-out;
}

.nav-link:hover {
  opacity: 0.8;
}
```

---

### Step 7: Active Page Indicator

1. Create combo class for active state: `.nav-link.w--current`
2. Webflow automatically adds `.w--current` to active page links
3. Style the active state:
   - Add **Border Bottom:** 2px solid White
   - Alternative: Add underline with 100% width
4. Set transition for smooth appearance:
   - Transition: border 200ms ease-in-out

**Custom CSS Method:**
```css
.nav-link.w--current {
  position: relative;
}

.nav-link.w--current::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: white;
}
```

---

### Step 8: Mobile Responsiveness

1. Switch to **Tablet** breakpoint (click breakpoint icon in top toolbar)
2. Webflow Navbar automatically includes hamburger menu for mobile
3. Customize mobile menu:
   - **Menu Icon:** White color
   - **Menu Background:** Same glassmorphism effect
   - **Menu Links:** Stacked vertically
4. Test in **Mobile Portrait** breakpoint:
   - Logo size: Reduce to 36px height
   - Site name: Reduce to 18px font size

---

### Step 9: Convert to Symbol (Reusable)

1. Select the entire Navbar element
2. Right-click → **Create Symbol**
3. Name: `Header - Global Navigation`
4. Click **Create Symbol**
5. Now the header can be added to all pages by dragging the Symbol from the **Symbols** panel

---

## Design Specifications

**Layout:**
- Height: 72px (desktop), 56px (mobile)
- Fixed positioning at top
- Z-index: 100
- Full width

**Glass Effect:**
- Backdrop blur: 10px
- Background: rgba(255, 255, 255, 0.1)
- Border bottom: 1px solid rgba(255, 255, 255, 0.2)
- Subtle shadow: 0 4px 6px rgba(0, 0, 0, 0.1)

**Typography:**
- Logo height: 48px (desktop), 36px (mobile)
- Site name: 24px (1.5rem), weight 600
- Nav links: 16px (1rem), weight 400
- Color: White (#FFFFFF)
- Hover transition: 200ms ease-in-out

**Spacing:**
- Navbar padding: 16px horizontal, 12px vertical
- Nav link gap: 32px (2rem)
- Logo to site name gap: 16px (1rem)

---

## Dependencies

**Blocked By:**
- Logo asset uploaded to Webflow Asset Manager
- Page structure created (Home, Products, Manufacturing, etc.)

**Blocks:**
- None (can be developed independently)

**External:**
- Logo file (SVG or PNG with transparency)
- Webflow account with Designer access

---

## Testing Checklist

### Webflow Preview Testing

- [ ] Preview in all breakpoints (Desktop, Tablet, Mobile Portrait, Mobile Landscape)
- [ ] Header remains fixed at top when scrolling
- [ ] Logo displays correctly
- [ ] All 5 navigation links visible and clickable
- [ ] Active page indicator shows on current page
- [ ] Glassmorphism effect visible (blur + transparency)
- [ ] Hover effect works on desktop (opacity change)
- [ ] Mobile menu icon appears on mobile breakpoint
- [ ] Mobile menu opens/closes correctly

### Browser Testing (Published Site)

Test glassmorphism support:
- **Chrome (Windows/Mac):** ✓ Full backdrop-filter support
- **Safari (Mac/iOS):** ✓ Support with -webkit- prefix
- **Firefox (Windows/Mac):** ✓ Support (version 103+)
- **Edge (Windows):** ✓ Full support
- **Older browsers (IE11, old Firefox):** ⚠️ Check fallback (solid background)

### Cross-Browser Checklist

- [ ] Backdrop blur displays in Chrome
- [ ] Backdrop blur displays in Safari (with -webkit- prefix)
- [ ] Backdrop blur displays in Firefox
- [ ] Fallback background (solid white 90% opacity) works in unsupported browsers
- [ ] Navigation links clickable in all browsers
- [ ] Mobile menu functional on iOS Safari
- [ ] Mobile menu functional on Chrome Mobile

### Accessibility Testing

- [ ] Navigation uses semantic `<nav>` element (Webflow default)
- [ ] Logo has alt text
- [ ] Links are keyboard navigable (Tab key)
- [ ] Focus indicators visible on links
- [ ] Color contrast meets WCAG AA (white text on blur background)
- [ ] Screen reader announces navigation correctly

---

## Browser Support

| Browser | Backdrop Filter | Fallback |
|---------|----------------|----------|
| Chrome 76+ | ✅ Full support | N/A |
| Safari 9+ | ✅ With -webkit- prefix | N/A |
| Firefox 103+ | ✅ Full support | N/A |
| Edge 79+ | ✅ Full support | N/A |
| Older browsers | ❌ Not supported | Solid background (rgba(255, 255, 255, 0.9)) |

**Fallback Strategy:**
Use `@supports` query in custom CSS to provide solid background for browsers without backdrop-filter support.

---

## Definition of Done

- [ ] Navbar created and styled in Webflow Designer
- [ ] Glassmorphism effect applied (backdrop-filter blur)
- [ ] Logo and site name displayed on left
- [ ] 5 navigation links configured with correct URLs
- [ ] Sticky positioning works (fixed at top)
- [ ] Hover effects functional (200ms transition)
- [ ] Active page indicator shows underline
- [ ] Mobile hamburger menu works on tablet/mobile
- [ ] Converted to Webflow Symbol for reusability
- [ ] Symbol added to all main pages
- [ ] Fallback styling works in unsupported browsers
- [ ] Cross-browser testing completed
- [ ] Accessibility requirements met
- [ ] Published to Webflow staging for review
- [ ] Client approval

---

## Troubleshooting Guide

### Issue: Backdrop blur not visible
**Solution:**
- Ensure backdrop-filter CSS is applied (check in Style panel or Custom Code)
- Check browser support (use Chrome/Safari for testing)
- Verify background opacity is set (<1.0, not solid)
- Ensure there is content behind header (hero video) to see blur effect

### Issue: Header overlaps content
**Solution:**
- Add padding-top to Body element (72px for desktop, 56px for mobile)
- Verify navbar position is set to Fixed
- Check z-index is 100 or higher

### Issue: Mobile menu not working
**Solution:**
- Ensure Navbar element is used (not custom div)
- Check Menu Button is visible on mobile breakpoint
- Verify Menu element is not hidden on mobile
- Publish site and test (sometimes preview differs from published)

### Issue: Active page indicator not showing
**Solution:**
- Webflow auto-adds `.w--current` class to active page links
- Style the `.nav-link.w--current` combo class
- Ensure links use relative URLs (e.g., `/products` not `https://example.com/products`)

### Issue: Glassmorphism looks different in Safari
**Solution:**
- Add `-webkit-backdrop-filter` prefix in addition to `backdrop-filter`
- Test specifically on Safari (desktop and iOS)
- Consider slightly adjusting blur amount for Safari (9px instead of 10px)

---

## Notes

- Webflow Navbar element handles responsive behavior automatically
- `.w--current` class is added by Webflow to the current page's nav link
- Backdrop-filter requires content behind it to show effect (hero video is perfect)
- Symbol can be edited once and updates across all pages
- For browsers without backdrop-filter support, fallback to solid background is recommended
- Consider using Webflow Interactions 2.0 for more advanced hover effects

---

## Resources

- [Webflow Navbar Element Documentation](https://university.webflow.com/lesson/navbar)
- [Webflow Symbols (Reusable Components)](https://university.webflow.com/lesson/symbols)
- [Webflow Interactions 2.0 Tutorial](https://university.webflow.com/lesson/interactions-2-0)
- [CSS Backdrop Filter (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter)
- [Webflow Custom Code Guide](https://university.webflow.com/lesson/custom-code-in-the-head-and-body-tags)

---

**Status:** Ready for Development ✅
**Review URL:** Will be Webflow staging domain
