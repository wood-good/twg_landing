# Story 2.2: Products Grid Page (Webflow)

**Story ID:** STORY-2.2
**Epic:** Epic 2 - Product Discovery
**Priority:** P0
**Story Points:** 8
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As a** potential B2B client
**I want** to browse all available product categories in an organized grid
**So that** I can quickly assess TWG's product range

---

## Description

Create responsive products grid page (`/products`) using Webflow Collection List to display all products from the Products CMS Collection. The page includes a header section and uses responsive grid layout with hover effects on product cards.

---

## Acceptance Criteria

- [ ] Products page created at `/products` URL
- [ ] Collection List displays all active products sorted by Display Order
- [ ] Grid layout: 2 columns mobile, 3 columns tablet/desktop, 4 columns large desktop
- [ ] Each card shows: product name, featured image, short description, CTA button
- [ ] Hover effect: subtle scale + shadow (using Webflow Interactions)
- [ ] Click navigates to product detail page
- [ ] Page header with title and introductory text
- [ ] Optional CTA section below grid
- [ ] SEO meta tags configured
- [ ] Page loads quickly with optimized images

---

## Webflow Implementation

### Step 1: Create Products Page

1. In **Webflow Designer** → **Pages Panel**
2. Click **"+"** to add new page
3. Configure:
   - **Page Name:** Products
   - **Slug:** `products`
   - **SEO Title:** "Our Products | TWG - Sustainable Wood Products"
   - **SEO Description:** "Explore TWG's range of sustainable wood products, from furniture to construction materials. 100% eco-friendly, quality guaranteed."
4. Click **"Create Page"**

---

### Step 2: Create Page Header

1. On the Products page, add **Section** element
2. Set class: `page-header`
3. Configure:
   - **Padding:** 80px (top), 40px (bottom), 32px (left/right)
   - **Text Align:** Center
   - **Background:** Optional subtle background color

4. Inside section, add **Heading** (H1)
   - Text: "Our Products"
   - Class: `page-title`
   - **Font Size:** 48px (desktop), 32px (mobile)
   - **Font Weight:** 700
   - **Margin Bottom:** 16px

5. Below heading, add **Paragraph**
   - Text: "Discover our range of sustainable wood products, crafted with care from forest to finish."
   - Class: `lead-text`
   - **Font Size:** 20px (desktop), 18px (mobile)
   - **Color:** Muted/gray
   - **Max Width:** 600px
   - **Margin:** 0 auto

---

### Step 3: Add Collection List Wrapper

1. Below page header, add **Section** element
2. Set class: `products-section`
3. Configure:
   - **Max Width:** 1400px
   - **Margin:** 0 auto
   - **Padding:** 64px (top/bottom), 32px (left/right)

4. Inside section, add **Collection List Wrapper**
5. **Bind to Collection:** Products
6. **Sort:** Display Order (Ascending)
7. **Filter:** Active = ON

---

### Step 4: Configure Collection List Layout

1. Select **Collection List** (inside wrapper)
2. Set class: `products-grid`
3. Configure grid layout:
   - **Display:** Grid
   - **Grid Template Columns:** 2 (Mobile), 3 (Tablet), 3 (Desktop), 4 (Desktop Large)
   - **Gap:** 32px (2rem) desktop, 16px (1rem) mobile

**Responsive Settings:**

**Desktop (>1400px):**
- Grid Columns: 4
- Gap: 32px

**Desktop (1024px-1400px):**
- Grid Columns: 3
- Gap: 32px

**Tablet (768px-1024px):**
- Grid Columns: 3
- Gap: 24px

**Mobile (<768px):**
- Grid Columns: 2
- Gap: 16px

---

### Step 5: Design Collection Item (Product Card)

The **Collection Item** automatically repeats for each product. Design it once:

1. Select **Collection Item**
2. Set class: `product-card`
3. Configure:
   - **Background:** White or glass effect
   - **Border Radius:** 12px
   - **Overflow:** Hidden
   - **Position:** Relative
   - **Transition:** All 300ms ease
   - **Cursor:** Pointer

4. Make entire card a link:
   - Wrap Collection Item in **Link Block**
   - **Link Settings:** Set to dynamic → Product Slug
   - URL: `/products/[dynamic-slug]`

---

### Step 6: Add Product Card Content

Inside **Collection Item**, build structure:

#### 1. Featured Image
- Add **Image** element
- **Bind to:** Featured Image (from collection)
- Set class: `product-card-image`
- Configure:
  - **Width:** 100%
  - **Aspect Ratio:** 4:3 or 1:1
  - **Object Fit:** Cover
  - **Loading:** Lazy (default for images below fold)

#### 2. Card Content Container
- Add **Div Block** below image
- Set class: `product-card-content`
- Configure:
  - **Padding:** 24px all sides

#### 3. Product Name
- Add **Heading** (H3)
- **Bind to:** Name (from collection)
- Set class: `product-card-title`
- Configure:
  - **Font Size:** 20px (desktop), 18px (mobile)
  - **Font Weight:** 600
  - **Margin Bottom:** 12px
  - **Line Clamp:** 2 lines (prevent overflow)

#### 4. Short Description
- Add **Paragraph**
- **Bind to:** Short Description (from collection)
- Set class: `product-card-description`
- Configure:
  - **Font Size:** 14px
  - **Line Height:** 1.5
  - **Color:** Gray/muted
  - **Margin Bottom:** 16px
  - **Line Clamp:** 3 lines

#### 5. CTA Button
- Add **Link** or **Button**
- **Bind Text to:** CTA Button Text (from collection)
- Set class: `product-card-cta`
- Configure:
  - **Padding:** 12px (top/bottom), 24px (left/right)
  - **Background:** Primary color or transparent
  - **Border:** 2px solid primary color
  - **Border Radius:** 8px
  - **Font Size:** 14px
  - **Font Weight:** 600
  - **Transition:** All 200ms ease

---

### Step 7: Add Hover Effect (Webflow Interactions)

1. Select `.product-card` class
2. Open **Interactions** panel
3. Create new **Mouse Hover** interaction

**Hover Trigger:**
- Element: .product-card
- Trigger: Mouse hover (Mouse enter & Mouse leave)

**Mouse Enter Action:**
- **Transform:** Scale 1.05
- **Box Shadow:** 0 8px 24px rgba(0, 0, 0, 0.15)
- **Transition:** 300ms ease-out

**Mouse Leave Action:**
- **Transform:** Scale 1.0
- **Box Shadow:** 0 2px 8px rgba(0, 0, 0, 0.1)
- **Transition:** 300ms ease-out

**Alternative (CSS Method):**
```html
<!-- In Site Settings → Custom Code → Head -->
<style>
.product-card {
  transition: all 300ms ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.product-card:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}
</style>
```

---

### Step 8: Configure Collection List Settings

1. Select **Collection List Wrapper**
2. **Collection List Settings:**
   - **Items:** All Items
   - **Limit:** None (show all products)
   - **Pagination:** Not needed (assuming <20 products)
   - **Filter:** Active = ON (only show active products)
   - **Sort:** Display Order → Ascending

---

### Step 9: Add Empty State

1. Select **Collection List Wrapper**
2. Find **Empty State** section
3. Design empty message:
   - Add **Div Block**
   - Add **Heading:** "No products found"
   - Add **Paragraph:** "Check back soon for new products"
   - Center align text

---

### Step 10: Add CTA Section (Optional)

Below Collection List Wrapper, add:

1. **Section** element
2. Set class: `products-cta-section`
3. Configure:
   - **Padding:** 64px (top/bottom), 32px (left/right)
   - **Background:** Light gray or glass effect
   - **Border Radius:** 12px
   - **Text Align:** Center

4. Add content:
   - **Heading (H2):** "Can't find what you're looking for?"
   - **Paragraph:** "We also offer custom solutions tailored to your needs."
   - **Link Button:** "Contact Us" → /contact

---

## Design Specifications

**Page Layout:**
- Max width: 1400px
- Padding: 64px (top/bottom), 32px (left/right)
- Background: White or subtle pattern

**Page Header:**
- Title: 48px (desktop), 32px (mobile), weight 700
- Lead text: 20px, muted color
- Centered alignment
- Margin bottom: 64px

**Products Grid:**
- Columns: 4 (large desktop), 3 (desktop/tablet), 2 (mobile)
- Gap: 32px (desktop), 16px (mobile)
- Grid auto-flow: Row

**Product Card:**
- Background: White
- Border radius: 12px
- Shadow (default): 0 2px 8px rgba(0, 0, 0, 0.1)
- Shadow (hover): 0 8px 24px rgba(0, 0, 0, 0.15)
- Transform (hover): Scale 1.05
- Transition: 300ms ease

**Card Content:**
- Padding: 24px
- Image aspect: 4:3
- Title: 20px, weight 600, 2-line clamp
- Description: 14px, 3-line clamp
- CTA: 14px, primary border, 8px radius

**CTA Section:**
- Background: rgba(0, 0, 0, 0.02)
- Padding: 64px
- Border radius: 12px
- Button: Primary background, white text

---

## Responsive Breakpoints

| Breakpoint | Columns | Gap | Card Padding | Title Size |
|------------|---------|-----|--------------|------------|
| Mobile (<768px) | 2 | 16px | 16px | 18px |
| Tablet (768-1024px) | 3 | 24px | 20px | 20px |
| Desktop (1024-1400px) | 3 | 32px | 24px | 20px |
| Large (>1400px) | 4 | 32px | 24px | 20px |

---

## Dependencies

**Blocked By:**
- Story 2.1 (Products CMS Collection - must have products data)
- Story 1.5 (Webflow project setup)

**Blocks:**
- None (product detail page is separate story)

**External:**
- Products Collection with at least 3-5 sample products
- Product images uploaded and optimized
- Product descriptions written

---

## Testing Checklist

### Webflow Preview Testing

- [ ] Preview in all breakpoints (Desktop, Tablet, Mobile)
- [ ] Collection List displays all products
- [ ] Products sorted by Display Order
- [ ] Grid layout adjusts correctly per breakpoint
- [ ] Hover effect works on product cards (desktop only)
- [ ] Card images display correctly (aspect ratio maintained)
- [ ] Product names and descriptions display
- [ ] CTA buttons show correct text from CMS
- [ ] Empty state displays if no products

### Browser Testing (Published Site)

- [ ] Chrome (Windows/Mac): Grid displays correctly ✅
- [ ] Safari (Mac/iOS): Hover effects work ✅
- [ ] Firefox (Windows/Mac): Layout consistent ✅
- [ ] Edge (Windows): All features functional ✅
- [ ] Mobile Safari (iOS): 2-column grid ✅
- [ ] Chrome Mobile (Android): Touch interactions work ✅

### Interaction Testing

- [ ] Hover effect triggers on mouse enter
- [ ] Hover effect reverses on mouse leave
- [ ] Clicking card navigates to product detail page
- [ ] Back button returns to products page
- [ ] Scroll performance smooth (60fps)
- [ ] Images lazy load below fold

### Responsive Testing

- [ ] Large Desktop (1400px+): 4 columns
- [ ] Desktop (1024-1400px): 3 columns
- [ ] Tablet (768-1024px): 3 columns
- [ ] Mobile Portrait (375-768px): 2 columns
- [ ] Mobile Landscape: Layout adapts correctly

### Accessibility Testing

- [ ] Page title is H1
- [ ] Product names are H3 (proper hierarchy)
- [ ] All images have alt text (from CMS)
- [ ] Product cards keyboard accessible
- [ ] Focus indicators visible
- [ ] Color contrast meets WCAG AA
- [ ] Screen reader announces products correctly

---

## SEO Configuration

**Page Settings:**
- **URL:** /products
- **Meta Title:** "Our Products | TWG - Sustainable Wood Products"
- **Meta Description:** "Explore TWG's range of sustainable wood products, from furniture to construction materials. 100% eco-friendly, quality guaranteed."
- **OG Image:** Hero image or products collage

**On-Page SEO:**
- H1: "Our Products"
- Semantic HTML (section, article structure)
- Alt text for all images
- Internal links to product detail pages
- Schema markup (optional): Product aggregate

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Products page created at `/products`
- [ ] Collection List configured and bound to Products collection
- [ ] Responsive grid layout implemented (2/3/3/4 columns)
- [ ] Product cards designed with all required content
- [ ] Hover interactions working (scale + shadow)
- [ ] Cards link to product detail pages correctly
- [ ] Page header section styled
- [ ] CTA section added (optional)
- [ ] Empty state designed
- [ ] SEO meta tags configured
- [ ] All breakpoints tested
- [ ] Cross-browser testing completed
- [ ] Accessibility requirements met
- [ ] Published to Webflow staging
- [ ] Client approval

---

## Troubleshooting Guide

### Issue: Products not displaying
**Solution:**
- Ensure Products Collection has items with Active = ON
- Check Collection List is bound to "Products" collection
- Verify products are published (not drafts)
- Check filter settings on Collection List

### Issue: Grid layout not responsive
**Solution:**
- Verify breakpoint settings for each device
- Ensure grid-template-columns set per breakpoint
- Check no fixed widths preventing responsive behavior
- Test in actual device (not just Designer resize)

### Issue: Hover effect not working
**Solution:**
- Ensure interaction is set on `.product-card` class
- Check interaction trigger is "Mouse Hover"
- Verify "Mouse Enter" and "Mouse Leave" actions configured
- Interactions don't work in Webflow Designer preview (test on published site)

### Issue: Cards linking incorrectly
**Solution:**
- Ensure Link Block wraps Collection Item
- Link settings: Set to "Collection Page"
- Verify Collection Template Page exists
- Check slug generation working on products

### Issue: Images not lazy loading
**Solution:**
- Webflow auto-lazy-loads images below fold
- Ensure images aren't set to "eager" loading
- Check first 3-4 products load immediately (above fold)
- Verify asset optimization enabled in Webflow

### Issue: Empty state not showing
**Solution:**
- Delete all products temporarily to test
- Ensure Empty State section designed in Collection List
- Check Empty State isn't hidden by filter settings
- Publish site to test (may not show in Designer)

---

## Notes

- **Performance:** Webflow auto-optimizes images (responsive images, WebP)
- **Pagination:** Not needed if <20 products; add in Phase 2 if catalog grows
- **Filtering:** Can add filter buttons in Phase 2 (e.g., by material, category)
- **Sorting:** Currently by Display Order; can add user sorting later
- **A/B Testing:** Consider testing 3 vs 4 column layout for conversions
- **CTA Section:** Optional but recommended for engagement

---

## Resources

- [Webflow Collection Lists Guide](https://university.webflow.com/lesson/collection-list)
- [Webflow Grid Layout](https://university.webflow.com/lesson/css-grid-layout)
- [Collection List Filtering](https://university.webflow.com/lesson/filter-collection-lists)
- [Webflow Interactions 2.0](https://university.webflow.com/lesson/interactions-2-0)
- [Dynamic Links in Collections](https://university.webflow.com/lesson/link-to-collection-pages)

---

**Status:** Ready for Development ✅
**Review URL:** Will be Webflow staging domain (`[project].webflow.io/products`)
