# Epic 2: Product Discovery

**Epic ID:** EPIC-02
**Priority:** P0 - Critical
**Status:** Ready for Development
**Estimated Effort:** 34 story points (~4 days)
**Sprint:** Sprint 1-2 (Week 1-2)
**Platform:** Webflow + CMS

---

## Epic Goal

Enable B2B clients to explore TWG's 5 product categories through an elegant product grid with detailed product pages, supporting A/B testing between real photos and illustrations to optimize engagement.

---

## User Story

**As a** potential B2B client
**I want** to explore TWG's product categories
**So that** I can determine if they meet my needs

---

## Success Metrics

- All 5 product categories visible on products page
- Each product has clear imagery (photo or illustration)
- Specifications easily accessible
- Clear CTA for more information
- A/B test: Photo vs illustration click-through rate >15%
- Product detail page load time <1.2s

---

## User Stories Breakdown

### Story 2.1: Webflow CMS - Product Collection Setup

**Priority:** P0
**Story Points:** 3
**Assignee:** Developer

**Description:**
Create Webflow CMS Collection for product categories with all required fields for product display and detail pages.

**Acceptance Criteria:**
- [ ] "Products" CMS Collection created in Webflow
- [ ] Fields: Name, Slug, Description, Featured Image, Specifications, Gallery (multi-image), Order
- [ ] Collection Template Page created
- [ ] Dynamic routing configured: /products/[slug]
- [ ] 5 product categories added

**Webflow Implementation:**
1. In Webflow Designer → CMS → New Collection: "Products"
2. Add fields:
   - Name (Plain Text)
   - Slug (auto-generated from Name)
   - Description (Plain Text, multi-line)
   - Featured Image (Image field)
   - Gallery (Multi-image field, max 5)
   - Specifications (Rich Text or Plain Text)
   - Order (Number field)
3. Create Collection Template Page
4. Publish to staging

**Products to Add:**
1. Finger Joint
2. Edge-Glued Panels
3. Solid Wood
4. Laminated Timber
5. Custom Products

**Dependencies:**
- Webflow CMS plan activated

---

### Story 2.2: Products Grid Page (Webflow Collection List)

**Priority:** P0
**Story Points:** 8
**Assignee:** Developer

**Description:**
Create responsive product grid page displaying all 5 product categories using Webflow's Collection List, with hover effects and click navigation.

**Acceptance Criteria:**
- [ ] New page created: "/products"
- [ ] Collection List bound to Products CMS Collection
- [ ] Grid layout: 1 col mobile, 2 col tablet, 3 col desktop
- [ ] Each card shows: product name, featured image, description, "Learn More" CTA
- [ ] Hover effect: subtle scale + shadow elevation
- [ ] Click navigates to product detail page (dynamic link)
- [ ] Products sorted by Order field
- [ ] Responsive on all breakpoints

**Webflow Implementation:**
1. Create new page: "/products"
2. Add Collection List element
3. Bind to "Products" Collection
4. Sort by: Order (Ascending)
5. Design Collection Item:
   - Product Name (H3, bound to Name)
   - Featured Image (bound to Featured Image field)
   - Description (P, bound to Description, limit 150 chars)
   - Link Block (bound to Collection Item)
6. Apply glassmorphism styling
7. Add hover interactions:
   - Scale: 1.05
   - Shadow: increase
8. Configure responsive grid (1/2/3 columns)

**Dependencies:**
- Products Collection (Story 2.1)

---

### Story 2.3: Product Card Component

**Priority:** P0
**Effort:** 8 hours
**Assignee:** Frontend Developer 1

**Description:**
Reusable product card component with glassmorphism styling and smooth hover interactions.

**Acceptance Criteria:**
- [ ] Glass effect on card background
- [ ] Optimized image with srcset for responsive loading
- [ ] Text truncation for long descriptions (max 3 lines)
- [ ] Smooth hover animation (transform + shadow)
- [ ] Accessible link wrapping entire card
- [ ] Loading skeleton state
- [ ] Support for both photo and illustration variants (A/B testing)

**Technical Implementation:**
```astro
// src/components/Products/ProductCard.astro
---
import { Image } from 'astro:assets';
import GlassCard from '@/components/Glass/GlassCard.astro';

export interface Props {
  product: {
    name: string;
    slug: string;
    description: string;
    featuredImage: any;
    ctaText: string;
  };
  variant?: 'photo' | 'illustration';
}

const { product, variant = 'photo' } = Astro.props;
---

<a href={`/products/${product.slug.current}`} class="product-card-link">
  <GlassCard class="product-card">
    <div class="image-container">
      <Image
        src={product.featuredImage}
        alt={product.featuredImage.alt || product.name}
        width={400}
        height={300}
        loading="lazy"
      />
    </div>
    <div class="content">
      <h3>{product.name}</h3>
      <p class="description">{product.description}</p>
      <span class="cta">{product.ctaText}</span>
    </div>
  </GlassCard>
</a>

<style>
  .product-card {
    transition: transform 200ms, box-shadow 200ms;
  }

  .product-card-link:hover .product-card {
    transform: scale(1.05);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }

  .description {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
</style>
```

**Hover Animation:**
- Duration: 200ms
- Easing: ease-in-out
- Scale: 1.05
- Shadow: 0 8px 24px rgba(0, 0, 0, 0.15)

**Dependencies:**
- GlassCard component
- Astro Image component

---

### Story 2.4: Product Detail Page (Dynamic Route)

**Priority:** P0
**Effort:** 10 hours
**Assignee:** Frontend Developer 2

**Description:**
Create dynamic product detail page with hero image, specifications table, image gallery, and contact CTA.

**Acceptance Criteria:**
- [ ] Dynamic route `/products/[slug]`
- [ ] Hero image full-width at top
- [ ] Product name and description
- [ ] Specifications displayed as formatted table
- [ ] Image gallery (3-5 images)
- [ ] Contact CTA button
- [ ] SEO meta tags for each product
- [ ] 404 page for invalid slugs

**Technical Implementation:**
```astro
// src/pages/products/[slug].astro
---
import { getPageBySlug, getAllProducts } from '@/lib/sanity';

export async function getStaticPaths() {
  const products = await getAllProducts();
  return products.map(product => ({
    params: { slug: product.slug.current },
    props: { product }
  }));
}

const { product } = Astro.props;
---

<Layout title={product.name}>
  <article>
    <section class="hero-image">
      <Image src={product.featuredImage} alt={product.name} />
    </section>

    <section class="product-details">
      <h1>{product.name}</h1>
      <p>{product.description}</p>

      <div class="specifications">
        <h2>Specifications</h2>
        <table>
          {product.specifications.map(spec => (
            <tr>
              <th>{spec.label}</th>
              <td>{spec.value}</td>
            </tr>
          ))}
        </table>
      </div>

      <ImageGallery images={product.gallery} />

      <a href="/contact" class="cta-button">Contact Us</a>
    </section>
  </article>
</Layout>
```

**Dependencies:**
- ImageGallery component (Story 2.5)
- Product data from Sanity

---

### Story 2.5: Image Gallery with Lightbox

**Priority:** P1 - High
**Effort:** 4 hours
**Assignee:** Frontend Developer 2

**Description:**
Interactive image gallery with click-to-zoom lightbox and navigation (React island).

**Acceptance Criteria:**
- [ ] Grid of 3-5 thumbnail images
- [ ] Click opens lightbox modal
- [ ] Previous/Next navigation in lightbox
- [ ] Keyboard navigation (arrow keys, ESC to close)
- [ ] Swipe gestures on mobile
- [ ] Close button accessible
- [ ] Prevents body scroll when open

**Technical Implementation:**
```tsx
// src/components/Products/ImageGallery.tsx
import { useState } from 'react';

interface Props {
  images: Array<{ url: string; alt: string }>;
}

export default function ImageGallery({ images }: Props) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  // Navigation, keyboard handlers, swipe gestures...

  return (
    <div className="gallery-grid">
      {images.map((image, index) => (
        <button key={index} onClick={() => openLightbox(index)}>
          <img src={image.url} alt={image.alt} />
        </button>
      ))}

      {lightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={currentIndex}
          onClose={closeLightbox}
          onNavigate={setCurrentIndex}
        />
      )}
    </div>
  );
}
```

**Usage in Astro:**
```astro
<ImageGallery client:visible images={product.gallery} />
```

**Dependencies:**
- React island framework

---

## Technical Architecture Notes

### A/B Testing Strategy

**Implementation:**
- Use feature flag or URL parameter to switch between photo/illustration variants
- Track click-through rate using Cloudflare Analytics custom events
- Test duration: 2 weeks post-launch
- Success metric: CTR >15%

**Test Variants:**
- **Variant A:** Real product photos (scaled down)
- **Variant B:** Professional illustrations

### Performance Considerations
- Lazy load product images below fold
- Use srcset for responsive images
- Preload featured images for above-fold products
- Implement loading skeletons during fetch

### Accessibility Requirements
- Alt text for all product images
- Keyboard navigation for gallery
- ARIA labels for interactive elements
- Focus trap in lightbox modal
- Color contrast ratio ≥4.5:1

---

## Definition of Done

- [ ] All 5 stories completed with acceptance criteria met
- [ ] Product grid displays all 5 categories
- [ ] Product detail pages load in <1.2 seconds
- [ ] Image gallery fully functional with keyboard navigation
- [ ] A/B test variants implemented and trackable
- [ ] All images optimized (WebP + fallback)
- [ ] Hover animations smooth at 60fps
- [ ] Mobile swipe gestures working
- [ ] Unit tests for ProductCard component
- [ ] E2E tests for product navigation flow
- [ ] Lighthouse score: Performance >90
- [ ] Code review completed
- [ ] QA sign-off

---

## Dependencies

**External:**
- 5 product category descriptions
- Product images (both photos and illustrations)
- Product specifications for each category

**Internal:**
- Sanity CMS schemas created
- Base routing configured
- Image optimization pipeline

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Large image files slow load time | High | Implement Astro Image optimization, WebP format |
| A/B test implementation complex | Medium | Use simple feature flag, defer analytics integration |
| Lightbox adds too much JS | Medium | Only load on interaction, use lightweight library |
| Product content not ready | Low | Use placeholder content during development |

---

## Testing Checklist

**Unit Tests:**
- [ ] ProductCard renders with correct props
- [ ] Gallery displays correct number of images
- [ ] Specifications table formats correctly

**E2E Tests (Playwright):**
- [ ] Product grid displays all products
- [ ] Click on product card navigates to detail page
- [ ] Lightbox opens when gallery image clicked
- [ ] Keyboard navigation works in lightbox
- [ ] Swipe gestures work on mobile
- [ ] 404 page shows for invalid product slug

**Visual Regression:**
- [ ] Product cards match design
- [ ] Gallery layout consistent
- [ ] Hover states render correctly

---

## Notes for Developers

- Use Astro's `getStaticPaths()` to pre-render all product pages at build time
- Implement A/B test as simple variant prop on ProductCard - analytics integration can come later
- Focus on image optimization - use Astro Image component for automatic WebP conversion
- Keep lightbox lightweight - only ships JS when gallery is interacted with
- Test swipe gestures on actual mobile devices, not just Chrome DevTools

---

**Ready for Sprint Planning:** ✅
**Dependencies Clear:** ✅
**Acceptance Criteria Defined:** ✅
