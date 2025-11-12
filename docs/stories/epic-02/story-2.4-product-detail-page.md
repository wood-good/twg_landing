# Story 2.4: Product Detail Page - Collection Template (Webflow)

**Story ID:** STORY-2.4
**Epic:** Epic 2 - Product Discovery
**Priority:** P0
**Story Points:** 8
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As a** B2B client interested in a specific product
**I want** to view detailed product information
**So that** I can make an informed purchasing decision

---

## Description

Design the Collection Template Page for individual products using Webflow's dynamic content binding. This page auto-generates for each product in the Products Collection, displaying hero image, detailed description, specifications, image gallery, and contact CTA.

---

## Acceptance Criteria

- [ ] Collection Template Page designed at `/products/[slug]`
- [ ] Hero section with featured image
- [ ] Product name (H1) and detailed description
- [ ] Specifications displayed as formatted list/table
- [ ] Image gallery (3-5 images with lightbox)
- [ ] Contact CTA section
- [ ] SEO meta tags dynamically populated
- [ ] Breadcrumb navigation
- [ ] Mobile-responsive layout

---

## Webflow Implementation

### Step 1: Access Collection Template Page

1. **Navigate to** Pages Panel → Products folder → **Product Template**
2. This page was auto-created when Products Collection was set up (Story 2.1)
3. URL pattern: `/products/[product-slug]`

---

### Step 2: Hero Section with Featured Image

1. Add **Section** element at top
2. Set class: `product-hero`
3. Configure:
   - **Height:** 60vh (desktop), 40vh (mobile)
   - **Position:** Relative
   - **Overflow:** Hidden

4. Inside section, add **Image**:
   - **Bind to:** Featured Image (from Products Collection)
   - **Width:** 100%
   - **Height:** 100%
   - **Object Fit:** Cover
   - **Position:** Absolute

5. Add overlay div with gradient (optional):
   - **Background:** `linear-gradient(to bottom, transparent, rgba(0,0,0,0.4))`

---

### Step 3: Product Name & Description

Below hero, add **Section** with class `product-content`:

1. **Container** div (max-width 1200px, centered)

2. **Heading (H1)**:
   - **Bind to:** Name (from collection)
   - Font Size: 48px (desktop), 32px (mobile)
   - Margin: 48px bottom

3. **Rich Text** element:
   - **Bind to:** Detailed Description (from collection)
   - Use `.prose` class for nice typography
   - Max Width: 800px

---

### Step 4: Specifications Section

1. Add **Heading (H2):** "Specifications"
2. Add **Rich Text** or **Plain Text** element:
   - **Bind to:** Specifications (from collection)

**Format Specifications:**

Since specifications are stored as pipe-separated text (from Story 2.1), use Custom Code to parse:

```html
<!-- Add as Embed element -->
<div class="specifications-list"></div>

<script>
// Get specifications text
var specsText = document.querySelector('[data-specs]')?.textContent || '';

// Split by pipe separator
var specs = specsText.split('|').map(s => s.trim()).filter(s => s);

// Create list
var listHTML = '<ul class="specs-list">';
specs.forEach(function(spec) {
  listHTML += '<li>' + spec + '</li>';
});
listHTML += '</ul>';

// Inject
document.querySelector('.specifications-list').innerHTML = listHTML;
</script>

<style>
.specs-list {
  list-style: none;
  padding: 0;
}

.specs-list li {
  padding: 12px;
  border-bottom: 1px solid rgba(0,0,0,0.1);
}

.specs-list li:before {
  content: '✓';
  margin-right: 12px;
  color: #2C5530;
}
</style>
```

**Simpler Alternative:** Just bind Rich Text to Specifications field and format manually in CMS.

---

### Step 5: Image Gallery

1. Add **Heading (H2):** "Gallery"
2. Add **Multi-Image** field binding:
   - **Bind to:** Image Gallery (from collection)
   - This creates a grid of images

3. Configure grid:
   - **Display:** Grid
   - **Columns:** 3 (desktop), 2 (mobile)
   - **Gap:** 16px

4. Wrap each image in **Lightbox** (Webflow native):
   - Select Multi-Image element
   - **Settings → Lightbox:** Enable
   - Clicking images opens lightbox automatically

---

### Step 6: Contact CTA Section

1. Add **Section** with class `product-cta`
2. Configure:
   - **Background:** Light gray or glass effect
   - **Padding:** 64px
   - **Text Align:** Center
   - **Border Radius:** 12px

3. Add content:
   - **Heading (H2):** "Interested in this product?"
   - **Paragraph:** "Contact us for pricing, custom orders, or more information."
   - **Link Button:** "Contact Us" → `/contact`
     - **Style:** Primary background, white text
     - **Padding:** 16px 32px
     - **Border Radius:** 8px

---

### Step 7: Breadcrumb Navigation

At top of page (before hero):

1. Add **Div Block** with class `breadcrumbs`
2. Add **Link:** "Home" → `/`
3. Add **Text:** " / "
4. Add **Link:** "Products" → `/products`
5. Add **Text:** " / "
6. Add **Text** (dynamic): Bind to Product Name

**Style:**
```css
.breadcrumbs {
  padding: 16px 32px;
  font-size: 14px;
  color: #666;
}

.breadcrumbs a {
  color: #2C5530;
  text-decoration: none;
}

.breadcrumbs a:hover {
  text-decoration: underline;
}
```

---

### Step 8: Configure SEO Settings

1. Select **Product Template** page
2. **Page Settings → SEO:**
   - **Meta Title:** Bind to "Meta Title" field (or use Name as fallback)
   - **Meta Description:** Bind to "Meta Description" field
   - **OG Image:** Bind to Featured Image

**Dynamic SEO:**
- Title format: "{Product Name} | TWG Products"
- Description from product's Meta Description field

---

## Design Specifications

**Hero Section:**
- Height: 60vh (desktop), 40vh (mobile)
- Image: Full-width, cover fit
- Optional gradient overlay

**Content Layout:**
- Max width: 1200px
- Padding: 64px (top/bottom), 32px (left/right)
- Two-column layout (desktop): Content left, specs right
- Single column (mobile)

**Typography:**
- Product Name (H1): 48px (desktop), 32px (mobile), weight 700
- Section Headings (H2): 32px, weight 600
- Body Text: 16px, line-height 1.6
- Specifications: 14px

**Specifications:**
- List style with checkmarks
- Border between items
- Padding: 12px per item
- Checkmark color: Primary green

**Gallery:**
- Grid: 3 columns (desktop), 2 (mobile)
- Gap: 16px
- Lightbox on click
- Image aspect: Maintain original

**CTA Section:**
- Background: rgba(0,0,0,0.02)
- Padding: 64px
- Border radius: 12px
- Button: Primary color, 16px 32px padding

---

## Dependencies

**Blocked By:**
- Story 2.1 (Products Collection - data source)
- Story 2.5 (Image Gallery Lightbox - if using custom implementation)

**Blocks:**
- None

**External:**
- Product content entered in CMS (descriptions, specs, gallery images)

---

## Testing Checklist

### Webflow Preview Testing

- [ ] Template page displays sample product correctly
- [ ] Featured image loads and displays properly
- [ ] Product name bound to H1
- [ ] Detailed description displays with formatting
- [ ] Specifications list formatted correctly
- [ ] Image gallery shows 3-5 images
- [ ] Gallery lightbox opens on image click
- [ ] Contact CTA button links to /contact
- [ ] Breadcrumbs display and link correctly

### Published Site Testing

- [ ] Visit `/products/[actual-product-slug]`
- [ ] SEO meta tags populate with product info
- [ ] Page title in browser tab shows product name
- [ ] All CMS content displays
- [ ] Gallery lightbox functional
- [ ] Mobile layout responsive
- [ ] Back button works from products grid

### SEO & Metadata

- [ ] Meta title unique per product
- [ ] Meta description from product field
- [ ] OG image displays product featured image
- [ ] URL slug SEO-friendly
- [ ] H1 tag contains product name
- [ ] Proper heading hierarchy (H1 → H2)

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Collection Template Page designed
- [ ] Hero section with featured image
- [ ] Product name (H1) and description bound
- [ ] Specifications section formatted
- [ ] Image gallery with lightbox
- [ ] Contact CTA section styled
- [ ] Breadcrumb navigation functional
- [ ] SEO settings configured dynamically
- [ ] Mobile-responsive layout tested
- [ ] All breakpoints verified
- [ ] Published to Webflow staging
- [ ] Client approval

---

## Troubleshooting Guide

### Issue: Template page not displaying product data
**Solution:**
- Ensure you're viewing the template page (not static page)
- Check Products Collection has items published
- Verify field bindings are correct (purple dynamic text)
- Publish site to see live data

### Issue: Gallery images not displaying
**Solution:**
- Ensure Multi-Image field has images uploaded in CMS
- Check Multi-Image element is bound to correct field
- Verify images are published (not drafts)
- Check Webflow asset storage limit

### Issue: Lightbox not working
**Solution:**
- Ensure Lightbox is enabled in Multi-Image settings
- Publish site (lightbox may not work in preview)
- Check no JavaScript errors in console
- Verify images have proper URLs

### Issue: SEO meta tags not populating
**Solution:**
- Check dynamic field bindings in Page Settings → SEO
- Ensure products have Meta Title/Description filled in CMS
- Use fallback: Product Name if Meta Title is empty
- Publish and test with social media preview tools

### Issue: Specifications not formatting
**Solution:**
- If using Custom Code, check script placement (after specs element)
- Ensure specifications field uses pipe `|` separator
- Alternative: Use Rich Text field with bullet list in CMS
- Check CSS for `.specs-list` is loaded

---

## Notes

- **Template automatically generates** a page for each product in collection
- **URL structure:** `/products/premium-oak-furniture` (slug-based)
- **404 handling:** Webflow shows 404 for invalid slugs automatically
- **Related products:** Can add in Phase 2 using CMS references
- **Custom fields:** Easy to add more fields (e.g., price, dimensions) in Phase 2

---

## Resources

- [Webflow Collection Template Pages](https://university.webflow.com/lesson/collection-template-page)
- [Dynamic Content Binding](https://university.webflow.com/lesson/bind-cms-content-to-elements)
- [Webflow Lightbox](https://university.webflow.com/lesson/lightbox)
- [Multi-Image Field](https://university.webflow.com/lesson/multi-image-field)
- [Dynamic SEO](https://university.webflow.com/lesson/dynamic-seo)

---

**Status:** Ready for Development ✅
**Review URL:** `[project].webflow.io/products/[sample-product-slug]`
