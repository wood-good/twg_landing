# Story 2.1: Webflow CMS - Products Collection Setup

**Story ID:** STORY-2.1
**Epic:** Epic 2 - Product Discovery
**Priority:** P0
**Effort:** 4 hours
**Assignee:** Developer
**Platform:** Webflow CMS

---

## User Story

**As a** content manager
**I want** to manage product information through Webflow CMS
**So that** I can easily update products without code changes

---

## Description

Create Webflow CMS Collection for products with all required fields for product cards and detail pages. This collection will serve as the foundation for all product-related content, enabling easy management through Webflow's visual CMS interface.

---

## Acceptance Criteria

- [ ] "Products" CMS Collection created in Webflow
- [ ] All required fields configured (name, description, images, specs, etc.)
- [ ] Collection Template Page created for product detail pages
- [ ] Field validation configured where applicable
- [ ] Collection settings optimized for SEO
- [ ] Sample products added for testing (3-5 items)
- [ ] Collection List displays products correctly
- [ ] URL slugs auto-generate from product names

---

## Webflow Implementation

### Step 1: Create Products CMS Collection

1. Open **Webflow Designer**
2. Click **CMS** icon in left sidebar
3. Click **"New Collection"**
4. Configure collection:
   - **Collection Name:** Products
   - **Singular Name:** Product
   - **Template Page:** ✅ Create Collection Template Page

5. Click **"Create Collection"**

**Note:** Webflow automatically creates a Collection Template Page at `/products/[slug]`

---

### Step 2: Configure Collection Fields

Webflow auto-creates some fields. Configure all fields as follows:

#### Default Fields (Auto-Created)

1. **Name** (Plain Text)
   - ✅ Required
   - Used for product title
   - Max 100 characters
   - Example: "Solid Oak Furniture Collection"

2. **Slug** (Generated from Name)
   - ✅ Auto-generated
   - URL-friendly version of name
   - Example: `solid-oak-furniture-collection`
   - Used in URL: `/products/solid-oak-furniture-collection`

#### Add Custom Fields

Click **"Add New Field"** and create the following:

3. **Short Description** (Plain Text, Multi-line)
   - Field Type: Plain Text
   - ✅ Multi-line
   - Max 300 characters
   - Help Text: "Brief description for product cards (50-300 characters)"
   - Example: "Premium sustainably sourced oak furniture handcrafted for lasting quality."

4. **Detailed Description** (Rich Text)
   - Field Type: Rich Text
   - Allows formatting (bold, italic, lists, links)
   - Used on product detail page
   - Help Text: "Full product description with features and benefits"

5. **Featured Image** (Image)
   - Field Type: Image
   - ✅ Required
   - Upload limit: 4MB (Webflow default)
   - Help Text: "Main product image for cards and detail page"
   - **Alt Text:** Required (Webflow prompts for this)

6. **Image Gallery** (Multi-Image)
   - Field Type: Multi-Image
   - Min: 3 images
   - Max: 5 images
   - Help Text: "Additional product images for lightbox gallery (3-5 images)"
   - **Alt Text:** Required for each image

7. **Specifications** (Plain Text, Multi-line)
   - Field Type: Plain Text
   - ✅ Multi-line
   - Help Text: "Product specifications (e.g., Material: Solid Oak | Dimensions: 120cm x 60cm | Weight: 25kg)"
   - Format: Use pipe | separator or new lines

8. **CTA Button Text** (Plain Text)
   - Field Type: Plain Text
   - Default Value: "Learn More"
   - Max 30 characters
   - Help Text: "Text for call-to-action button on product cards"

9. **Display Order** (Number)
   - Field Type: Number
   - Format: Integer
   - Help Text: "Order in which products appear (lower numbers first)"
   - Example: 1, 2, 3, 4, 5

10. **Active** (Switch/Boolean)
    - Field Type: Switch
    - Default: ON
    - Help Text: "Whether this product is currently available for display"

11. **Meta Title** (Plain Text)
    - Field Type: Plain Text
    - Max 60 characters
    - Help Text: "SEO title for product detail page (optional, defaults to product name)"

12. **Meta Description** (Plain Text)
    - Field Type: Plain Text
    - Max 160 characters
    - Help Text: "SEO description for product detail page"

---

### Step 3: Configure Collection Settings

1. Click **Collection Settings** (gear icon)
2. Configure:

**General:**
- **Collection Name:** Products
- **Slug:** products (for collection list page URL)
- **Template Page Name:** Product Template

**SEO:**
- **Default Meta Title:** `%title% | TWG Products`
- **Default Meta Description:** Use product's short description

**Template Page Settings:**
- **URL Structure:** `/products/[slug]`
- **404 Behavior:** Redirect to /products

---

### Step 4: Set Up Collection List Page

1. Create new **Static Page**: `/products`
2. **Page Settings:**
   - Name: Products
   - Slug: `products`
   - SEO Title: "Products | TWG - Sustainable Wood Products"
   - SEO Description: "Browse our premium sustainable wood product collection..."

This page will display all products using Collection List (Story 2.2).

---

### Step 5: Configure Collection Template Page

1. Navigate to **Pages Panel** → **Products** folder → **Product Template**
2. **Template Page Settings:**
   - This page auto-generates for each product
   - URL: `/products/[product-slug]`
   - SEO inherits from collection item fields

3. **Default Layout** (will be designed in Story 2.4):
   - Hero section with featured image
   - Product name (H1)
   - Detailed description
   - Specifications list
   - Image gallery with lightbox

---

### Step 6: Add Sample Products

Add 3-5 sample products to test the collection:

#### Sample Product 1: "Premium Oak Furniture Collection"
- **Name:** Premium Oak Furniture Collection
- **Short Description:** "Handcrafted solid oak furniture for discerning clients. Sustainably sourced, expertly finished."
- **Detailed Description:** "Our premium oak collection features..." (full rich text)
- **Featured Image:** Upload product photo
- **Gallery:** Upload 3-5 images
- **Specifications:**
  ```
  Material: Solid Oak
  Finish: Natural Oil
  Dimensions: Custom Available
  Lead Time: 4-6 weeks
  ```
- **CTA Text:** "Request Quote"
- **Display Order:** 1
- **Active:** ON

#### Sample Product 2: "Sustainable Pine Panels"
- **Name:** Sustainable Pine Panels
- **Short Description:** "Eco-friendly pine panels for construction and interior design projects."
- **Display Order:** 2
- **Active:** ON
- (Fill in other fields similarly)

#### Sample Product 3: "Custom Hardwood Flooring"
- **Name:** Custom Hardwood Flooring
- **Short Description:** "Premium hardwood flooring with complete customization options."
- **Display Order:** 3
- **Active:** ON

---

## Field Configuration Reference

Complete field list in order:

| Field Name | Type | Required | Validation | Example |
|------------|------|----------|------------|---------|
| Name | Plain Text | ✅ Yes | Max 100 chars | "Premium Oak Furniture" |
| Slug | Auto-generate | ✅ Yes | From name | `premium-oak-furniture` |
| Short Description | Plain Text (multi) | ✅ Yes | 50-300 chars | "Handcrafted solid oak..." |
| Detailed Description | Rich Text | ❌ Optional | - | Full product details |
| Featured Image | Image | ✅ Yes | Max 4MB | product-oak-1.jpg |
| Image Gallery | Multi-Image | ❌ Optional | 3-5 images | 3-5 photos |
| Specifications | Plain Text (multi) | ❌ Optional | - | "Material: Oak..." |
| CTA Button Text | Plain Text | ❌ Optional | Max 30 chars | "Learn More" |
| Display Order | Number | ✅ Yes | Integer | 1, 2, 3... |
| Active | Switch | ✅ Yes | Boolean | ON/OFF |
| Meta Title | Plain Text | ❌ Optional | Max 60 chars | "Oak Furniture | TWG" |
| Meta Description | Plain Text | ❌ Optional | Max 160 chars | SEO description |

---

## Specifications Field Format

Since Webflow doesn't have structured arrays like Sanity, use one of these formats for specifications:

**Option A: Pipe-separated (Recommended)**
```
Material: Solid Oak | Dimensions: 120cm x 60cm x 75cm | Weight: 25kg | Finish: Natural Oil | Origin: Sustainably Sourced EU Forests
```

**Option B: Line-separated**
```
Material: Solid Oak
Dimensions: 120cm x 60cm x 75cm
Weight: 25kg
Finish: Natural Oil
Origin: Sustainably Sourced EU Forests
```

**Option C: Rich Text with List** (Use Rich Text field instead)
- Material: Solid Oak
- Dimensions: 120cm x 60cm x 75cm
- Weight: 25kg
- Finish: Natural Oil

**Parsing in Frontend:**
Use JavaScript to split by `|` or newlines and display as structured list (Story 2.4).

---

## CMS Collection Best Practices

**Naming Conventions:**
- Use descriptive, unique product names
- Slugs auto-generate, but can be customized
- Keep names under 100 characters

**Image Optimization:**
- Upload high-quality images (1200px+ wide)
- Webflow auto-optimizes images
- Use WebP format when possible
- Include descriptive alt text for SEO

**Content Guidelines:**
- Short Description: 50-300 characters (for cards)
- Detailed Description: 200-500 words (for detail page)
- Specifications: List key technical details
- CTA Text: Action-oriented ("Learn More", "Request Quote", "View Details")

---

## Dependencies

**Blocked By:**
- Story 1.5 (Webflow project setup, CMS plan activated)

**Blocks:**
- Story 2.2 (Products Grid Page - needs collection to display)
- Story 2.3 (Product Card Component - needs product data structure)
- Story 2.4 (Product Detail Page - needs collection template)
- Story 2.5 (Image Gallery - needs gallery field)

**External:**
- Webflow CMS Plan activated ($23/month)
- Product images from client (3-5 per product)
- Product copy/descriptions from client
- Specifications data for each product

---

## Testing Checklist

### CMS Collection Testing

- [ ] Products collection appears in CMS panel
- [ ] Can create new product items
- [ ] Slug auto-generates from product name
- [ ] Can customize slug if needed
- [ ] Featured image uploads successfully
- [ ] Multi-image gallery accepts 3-5 images
- [ ] All fields save correctly
- [ ] Display order field accepts integers
- [ ] Active switch toggles on/off
- [ ] Can duplicate product items for faster creation

### Collection Template Testing

- [ ] Template page created at `/products/[slug]`
- [ ] Can access template page in Designer
- [ ] Product data binds to template elements
- [ ] Dynamic URL generates correctly for each product
- [ ] SEO title and description populate from fields

### Content Entry Testing

- [ ] Create at least 3 sample products
- [ ] Verify all required fields enforce validation
- [ ] Test rich text formatting in detailed description
- [ ] Upload multiple images to gallery
- [ ] Test display order sorting
- [ ] Verify active/inactive toggle affects visibility

---

## Collection Structure Overview

```
Products Collection
├── Product Item 1: "Premium Oak Furniture"
│   ├── Name: "Premium Oak Furniture Collection"
│   ├── Slug: premium-oak-furniture-collection
│   ├── Short Description: "..."
│   ├── Featured Image: oak-furniture.jpg
│   ├── Gallery: [img1.jpg, img2.jpg, img3.jpg]
│   ├── Specifications: "Material: Oak | ..."
│   ├── Display Order: 1
│   └── Active: ON
│
├── Product Item 2: "Sustainable Pine Panels"
│   └── (similar structure)
│
└── Product Item 3: "Custom Hardwood Flooring"
    └── (similar structure)

Template Page: /products/[slug]
Collection List Page: /products
```

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Products CMS Collection created with all fields
- [ ] Field types configured correctly
- [ ] Collection Template Page exists
- [ ] Collection List page `/products` created
- [ ] 3-5 sample products added and published
- [ ] Slug auto-generation working
- [ ] Image uploads working (featured + gallery)
- [ ] Display order field functional
- [ ] Active/inactive toggle working
- [ ] SEO fields configured
- [ ] Collection settings optimized
- [ ] Can access products in Webflow Editor
- [ ] Client can add/edit products via Editor
- [ ] Published to Webflow staging for testing

---

## Troubleshooting Guide

### Issue: Cannot create CMS Collection
**Solution:**
- Ensure Webflow CMS Plan is activated ($23/month)
- Free plan does not support CMS Collections
- Check Webflow plan in Site Settings → Billing

### Issue: Slug not auto-generating
**Solution:**
- Verify "Generate from Name" is enabled
- Click refresh icon next to slug field
- Manually set slug if auto-generation fails
- Slugs must be unique within collection

### Issue: Image upload fails
**Solution:**
- Check image file size (<4MB for CMS)
- Use supported formats (JPG, PNG, GIF, WebP, SVG)
- Try compressing image before upload
- Check Webflow asset storage limit

### Issue: Multi-image gallery not accepting images
**Solution:**
- Ensure field type is "Multi-Image" (not regular Image)
- Check you haven't exceeded 5-image limit
- Upload images one at a time if batch fails
- Verify asset storage hasn't reached limit

### Issue: Products not appearing in Collection List
**Solution:**
- Ensure "Active" toggle is ON
- Check products are published (not draft)
- Verify Collection List element is bound to "Products" collection
- Check filter settings on Collection List

---

## Notes

- **CMS Plan Required:** $23/month allows 2,000 CMS items
- **Specifications Format:** Use pipe `|` separator for easy parsing
- **Template vs List:** Template = individual product page, List = all products grid
- **Asset Storage:** CMS plan includes 2GB (plenty for 20-50 products)
- **Editor Access:** Client can manage products via Webflow Editor without Designer access
- **Future Fields:** Can add inventory, pricing fields in Phase 2 if needed

---

## Resources

- [Webflow CMS Collections Guide](https://university.webflow.com/lesson/intro-to-collections)
- [CMS Field Types](https://university.webflow.com/lesson/collection-fields)
- [Collection Template Pages](https://university.webflow.com/lesson/collection-template-page)
- [Dynamic Content Binding](https://university.webflow.com/lesson/bind-cms-content-to-elements)
- [Multi-Image Field Guide](https://university.webflow.com/lesson/multi-image-field)

---

**Status:** Ready for Development ✅
**Review URL:** Will be Webflow staging domain after CMS setup
