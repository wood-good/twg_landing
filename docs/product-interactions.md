# Product Page Interaction Specifications
## TWG Landing Page

**Version:** 1.0
**Date:** November 7, 2025
**Framework:** Astro with React Islands
**Performance Budget:** <10KB JavaScript for interactions

---

## Table of Contents

1. [Overview](#overview)
2. [Products Listing Page](#products-listing-page)
3. [Product Detail Page](#product-detail-page)
4. [Image Gallery System](#image-gallery-system)
5. [A/B Testing Implementation](#ab-testing-implementation)
6. [Mobile Interactions](#mobile-interactions)
7. [Performance Optimizations](#performance-optimizations)
8. [Technical Implementation](#technical-implementation)
9. [Accessibility Requirements](#accessibility-requirements)

---

## Overview

Product pages require carefully balanced interactions that enhance the user experience without compromising the site's performance-first approach. All interactions should feel premium and smooth, aligning with the "peace and harmony" aesthetic while maintaining <10KB JavaScript budget.

### Interaction Principles

1. **Progressive Enhancement** - Core functionality works without JavaScript
2. **Subtle Elegance** - Small, refined animations over dramatic effects
3. **Performance First** - CSS-only where possible, React islands only when essential
4. **Touch Friendly** - All interactions work perfectly on mobile
5. **Accessible** - Keyboard navigable, screen reader friendly

---

## Products Listing Page

### Grid Layout

```
Desktop (≥1024px):  [□□□□□] - 5 columns
Tablet (768-1023px): [□□□]   - 3 columns
                     [□□]
Mobile (<768px):     [□]     - 1 column, vertical stack
                     [□]
                     [□]
                     [□]
                     [□]
```

### Product Card Structure

```html
<article class="product-card" data-product-id="finger-joint">
  <a href="/products/finger-joint" class="product-link">
    <div class="product-image-container">
      <img class="product-image"
           src="/images/products/finger-joint-400w.webp"
           alt="Finger joint wood boards showing interlocking grain pattern">
      <div class="product-overlay">
        <span class="view-details">View Details →</span>
      </div>
    </div>
    <div class="product-info">
      <h3 class="product-title">Finger Joint</h3>
      <p class="product-description">
        Premium interlocking wood joints for maximum strength and minimal waste
      </p>
    </div>
  </a>
</article>
```

### Hover Interactions (Desktop Only)

**Card Hover State:**

```css
/* Base state */
.product-card {
  transition: transform 200ms ease-out,
              box-shadow 200ms ease-out;
  cursor: pointer;
}

/* Hover state */
.product-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(44, 85, 48, 0.1);
}

/* Image zoom on hover */
.product-card:hover .product-image {
  transform: scale(1.05);
  transition: transform 300ms ease-out;
}

/* Overlay fade in */
.product-overlay {
  opacity: 0;
  transition: opacity 200ms ease-out;
  background: linear-gradient(
    to bottom,
    transparent,
    rgba(44, 85, 48, 0.7)
  );
}

.product-card:hover .product-overlay {
  opacity: 1;
}

/* Text reveal animation */
.view-details {
  transform: translateX(-10px);
  opacity: 0;
  transition: all 200ms ease-out 100ms;
}

.product-card:hover .view-details {
  transform: translateX(0);
  opacity: 1;
}
```

### Focus States (Keyboard Navigation)

```css
.product-card:focus-within {
  outline: 2px solid var(--color-forest);
  outline-offset: 4px;
  transform: translateY(-4px);
}

/* Remove outline on click for mouse users */
.product-card:focus:not(:focus-visible) {
  outline: none;
}
```

### Loading Animation

```css
/* Skeleton loading state */
.product-skeleton {
  background: linear-gradient(
    90deg,
    #f0f0f0 25%,
    #e0e0e0 50%,
    #f0f0f0 75%
  );
  background-size: 200% 100%;
  animation: loading 1.5s ease-in-out infinite;
}

@keyframes loading {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

---

## Product Detail Page

### Page Layout

```
┌─────────────────────────────────────┐
│          Navigation Bar             │
├─────────────┬───────────────────────┤
│             │                       │
│   Gallery   │   Product Info        │
│   (60%)     │   (40%)              │
│             │                       │
│  [Main Img] │  Title               │
│             │  Description         │
│  [◦][◦][◦]  │  Specifications     │
│  Thumbnails │  [Contact CTA]      │
│             │                       │
└─────────────┴───────────────────────┘
```

### Hero Image Interactions

**Click to Zoom (Lightbox):**

```typescript
// React Island: ProductLightbox.tsx
interface LightboxProps {
  images: Array<{
    src: string;
    srcset?: string;
    alt: string;
  }>;
  initialIndex: number;
}

const ProductLightbox: FC<LightboxProps> = ({ images, initialIndex }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  // Trap focus when open
  useFocusTrap(isOpen);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      {/* Trigger */}
      <button
        className="lightbox-trigger"
        onClick={() => setIsOpen(true)}
        aria-label="View larger image"
      >
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
        <div className="zoom-hint">
          <ZoomIcon /> Click to enlarge
        </div>
      </button>

      {/* Lightbox */}
      {isOpen && (
        <div className="lightbox-overlay" onClick={() => setIsOpen(false)}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="lightbox-image"
            />
            <button
              className="lightbox-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            {images.length > 1 && (
              <>
                <button
                  className="lightbox-prev"
                  onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
                  aria-label="Previous image"
                >
                  ←
                </button>
                <button
                  className="lightbox-next"
                  onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
                  aria-label="Next image"
                >
                  →
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
```

**Lightbox Styles:**

```css
.lightbox-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 200ms ease-out;
}

.lightbox-image {
  max-width: 90vw;
  max-height: 90vh;
  object-fit: contain;
  animation: scaleIn 300ms ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.lightbox-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--color-glass);
  backdrop-filter: blur(10px);
  border: 1px solid var(--color-glass-border);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  font-size: 24px;
  color: white;
  cursor: pointer;
  transition: transform 200ms ease-out;
}

.lightbox-close:hover {
  transform: rotate(90deg);
}
```

### Thumbnail Gallery Interactions

```css
/* Thumbnail grid */
.thumbnail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 8px;
  margin-top: 16px;
}

.thumbnail {
  aspect-ratio: 1;
  border: 2px solid transparent;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 200ms ease-out;
}

.thumbnail:hover {
  border-color: var(--color-forest);
  transform: scale(1.05);
}

.thumbnail.active {
  border-color: var(--color-forest);
  box-shadow: 0 0 0 3px rgba(44, 85, 48, 0.2);
}

/* Smooth image swap */
.main-image-container {
  position: relative;
  overflow: hidden;
}

.main-image {
  transition: opacity 300ms ease-out;
}

.main-image.transitioning {
  opacity: 0;
}
```

---

## Image Gallery System

### Gallery Component Architecture

```typescript
// ProductGallery.tsx (React Island)
interface GalleryProps {
  images: Array<{
    thumb: string;
    full: string;
    alt: string;
  }>;
  productName: string;
}

const ProductGallery: FC<GalleryProps> = ({ images, productName }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const handleThumbnailClick = (index: number) => {
    if (index === selectedIndex) return;

    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedIndex(index);
      setIsTransitioning(false);
    }, 150);
  };

  // Keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    switch(e.key) {
      case 'ArrowLeft':
        handleThumbnailClick(
          selectedIndex > 0 ? selectedIndex - 1 : images.length - 1
        );
        break;
      case 'ArrowRight':
        handleThumbnailClick(
          selectedIndex < images.length - 1 ? selectedIndex + 1 : 0
        );
        break;
      case 'Enter':
      case ' ':
        setIsLightboxOpen(true);
        break;
    }
  };

  return (
    <div className="product-gallery" onKeyDown={handleKeyDown}>
      {/* Main image */}
      <div className="main-image-container">
        <img
          src={images[selectedIndex].full}
          alt={images[selectedIndex].alt}
          className={`main-image ${isTransitioning ? 'transitioning' : ''}`}
          onClick={() => setIsLightboxOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Click to enlarge image"
        />

        {/* Zoom hint on hover */}
        <div className="zoom-hint">
          <svg>...</svg> Click to zoom
        </div>
      </div>

      {/* Thumbnails */}
      <div className="thumbnail-grid" role="tablist">
        {images.map((image, index) => (
          <button
            key={index}
            className={`thumbnail ${index === selectedIndex ? 'active' : ''}`}
            onClick={() => handleThumbnailClick(index)}
            role="tab"
            aria-selected={index === selectedIndex}
            aria-label={`View ${image.alt}`}
          >
            <img src={image.thumb} alt="" />
          </button>
        ))}
      </div>

      {/* Lightbox (portal) */}
      {isLightboxOpen && (
        <Lightbox
          images={images}
          currentIndex={selectedIndex}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </div>
  );
};
```

### Touch Gestures (Mobile)

```typescript
// useSwipeGesture.ts
const useSwipeGesture = (onSwipeLeft: () => void, onSwipeRight: () => void) => {
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e: TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e: TouchEvent) => {
    touchEnd.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;

    const distance = touchStart.current - touchEnd.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onSwipeLeft();
    } else if (isRightSwipe) {
      onSwipeRight();
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
  };
};
```

---

## A/B Testing Implementation

### Test Configuration

```typescript
// lib/abtest.ts
export interface ABTest {
  id: string;
  name: string;
  variants: {
    control: 'photo';
    test: 'illustration';
  };
  allocation: number; // 0.5 = 50/50 split
  metrics: string[];
}

export const productImageTest: ABTest = {
  id: 'product-image-style',
  name: 'Product Image: Photo vs Illustration',
  variants: {
    control: 'photo',
    test: 'illustration',
  },
  allocation: 0.5,
  metrics: ['click_through_rate', 'time_on_page', 'contact_form_submit']
};
```

### Variant Assignment

```typescript
// lib/abtest.ts
export function getVariant(testId: string): 'control' | 'test' {
  // Use stable assignment based on session ID
  const sessionId = getOrCreateSessionId();
  const hash = hashCode(sessionId + testId);
  const bucket = Math.abs(hash % 100);

  return bucket < 50 ? 'control' : 'test';
}

function getOrCreateSessionId(): string {
  const key = 'twg_session_id';
  let sessionId = localStorage.getItem(key);

  if (!sessionId) {
    sessionId = crypto.randomUUID();
    localStorage.setItem(key, sessionId);
  }

  return sessionId;
}
```

### Implementation in Astro

```astro
---
// ProductCard.astro
export interface Props {
  product: Product;
  variant?: 'photo' | 'illustration';
}

const { product, variant = 'photo' } = Astro.props;

const imageSource = variant === 'photo'
  ? product.photoImage
  : product.illustrationImage;
---

<article
  class="product-card"
  data-product-id={product.id}
  data-variant={variant}
>
  <img
    src={imageSource.url}
    alt={imageSource.alt}
    class="product-image"
  />
  <!-- Rest of card -->
</article>

<script>
  // Track interactions
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      const productId = card.dataset.productId;
      const variant = card.dataset.variant;

      // Send to analytics
      if (window.gtag) {
        window.gtag('event', 'product_click', {
          product_id: productId,
          ab_variant: variant,
          test_id: 'product-image-style'
        });
      }
    });
  });
</script>
```

### Metrics Tracking

```typescript
// components/ABTestTracker.astro
---
// This runs at build time
const variant = 'photo'; // Will be determined by A/B test logic
---

<script define:vars={{ variant }}>
  // Track page view with variant
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      ab_test: 'product-image-style',
      ab_variant: variant
    });
  }

  // Track time on page
  let startTime = Date.now();

  window.addEventListener('beforeunload', () => {
    const timeOnPage = Date.now() - startTime;

    // Use sendBeacon for reliability
    const data = JSON.stringify({
      test_id: 'product-image-style',
      variant: variant,
      metric: 'time_on_page',
      value: timeOnPage
    });

    navigator.sendBeacon('/api/track', data);
  });
</script>
```

---

## Mobile Interactions

### Touch-Optimized Product Cards

```css
@media (max-width: 768px) {
  .product-card {
    /* Larger touch targets */
    min-height: 120px;
    padding: 16px;

    /* Remove hover effects */
    transition: none;
  }

  .product-card:hover {
    transform: none;
  }

  /* Active state for touch feedback */
  .product-card:active {
    background: rgba(44, 85, 48, 0.05);
    transform: scale(0.98);
    transition: transform 100ms ease-out;
  }

  /* Simplified overlay - always visible */
  .product-overlay {
    opacity: 1;
    background: linear-gradient(
      to bottom,
      transparent 60%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }

  .view-details {
    transform: none;
    opacity: 1;
  }
}
```

### Mobile Gallery

```css
@media (max-width: 768px) {
  /* Stack layout */
  .product-detail-layout {
    grid-template-columns: 1fr;
  }

  /* Full-width gallery */
  .product-gallery {
    width: 100%;
    margin: 0 -16px;
    padding: 0;
  }

  /* Horizontal scroll for thumbnails */
  .thumbnail-grid {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    gap: 8px;
    padding: 8px 16px;
  }

  .thumbnail {
    flex: 0 0 80px;
    scroll-snap-align: start;
  }

  /* Hide scrollbar but keep functionality */
  .thumbnail-grid::-webkit-scrollbar {
    display: none;
  }

  /* Swipe hint */
  .swipe-hint {
    text-align: center;
    color: var(--color-text-muted);
    font-size: 14px;
    margin-top: 8px;
  }
}
```

### iOS-Specific Optimizations

```css
/* Prevent zoom on input focus */
@supports (-webkit-touch-callout: none) {
  input, textarea, select {
    font-size: 16px !important;
  }
}

/* Safe area handling */
.product-detail {
  padding-bottom: env(safe-area-inset-bottom);
}

/* Smooth scrolling with momentum */
.gallery-container {
  -webkit-overflow-scrolling: touch;
}

/* Prevent text selection on interactive elements */
.product-card, .thumbnail {
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
}
```

---

## Performance Optimizations

### Image Loading Strategy

```astro
---
// ProductGallery.astro
import { Image } from 'astro:assets';
---

<!-- Main image - eager load -->
<Image
  src={mainImage}
  alt={alt}
  loading="eager"
  fetchpriority="high"
  widths={[400, 800, 1200]}
  sizes="(max-width: 768px) 100vw, 60vw"
  format="webp"
/>

<!-- Thumbnails - lazy load -->
{thumbnails.map((thumb, i) => (
  <Image
    src={thumb}
    alt=""
    loading={i < 3 ? "eager" : "lazy"}
    width={80}
    height={80}
    format="webp"
  />
))}
```

### JavaScript Bundle Optimization

```typescript
// Only load lightbox when needed
const Lightbox = lazy(() => import('./Lightbox'));

// Intersection Observer for lazy hydration
const observerOptions = {
  rootMargin: '50px',
  threshold: 0.01
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Hydrate the React component
      hydrateComponent(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);
```

### CSS Containment

```css
/* Prevent layout recalculation */
.product-card {
  contain: layout style paint;
  content-visibility: auto;
  contain-intrinsic-size: 0 300px;
}

/* Isolate expensive effects */
.glass-card {
  will-change: backdrop-filter;
  transform: translateZ(0); /* Force GPU layer */
}

/* Reduce repaints during animations */
.product-image {
  will-change: transform;
  backface-visibility: hidden;
  transform: translateZ(0);
}
```

---

## Technical Implementation

### Astro Component Structure

```astro
---
// pages/products/[slug].astro
import Layout from '@/layouts/Layout.astro';
import ProductGallery from '@/components/islands/ProductGallery';
import { getProductBySlug } from '@/lib/sanity';

const { slug } = Astro.params;
const product = await getProductBySlug(slug);

if (!product) {
  return Astro.redirect('/404');
}

// Determine A/B test variant
const variant = Astro.cookies.get('ab-variant')?.value || 'control';
---

<Layout title={product.name}>
  <main class="product-detail">
    <div class="product-layout">
      <!-- Gallery - React Island for interactivity -->
      <ProductGallery
        client:visible
        images={product.gallery}
        productName={product.name}
      />

      <!-- Info - Static HTML -->
      <div class="product-info">
        <h1>{product.name}</h1>
        <div class="product-description" set:html={product.description} />

        <!-- Specifications Table -->
        <table class="specifications">
          {product.specifications.map(spec => (
            <tr>
              <td>{spec.label}</td>
              <td>{spec.value}</td>
            </tr>
          ))}
        </table>

        <!-- CTA -->
        <a href="/contact?product={slug}" class="cta-button glass-button">
          Request Information
        </a>
      </div>
    </div>
  </main>
</Layout>
```

### State Management

```typescript
// stores/gallery.ts
import { atom } from 'nanostores';

export const currentImageIndex = atom(0);
export const isLightboxOpen = atom(false);
export const isTransitioning = atom(false);

// Actions
export function selectImage(index: number) {
  isTransitioning.set(true);

  setTimeout(() => {
    currentImageIndex.set(index);
    isTransitioning.set(false);
  }, 150);
}

export function openLightbox() {
  isLightboxOpen.set(true);
  document.body.style.overflow = 'hidden';
}

export function closeLightbox() {
  isLightboxOpen.set(false);
  document.body.style.overflow = '';
}
```

---

## Accessibility Requirements

### Keyboard Navigation

| Key | Action |
|-----|--------|
| `Tab` | Move focus to next interactive element |
| `Shift + Tab` | Move focus to previous element |
| `Enter` / `Space` | Activate focused element |
| `Arrow Left/Right` | Navigate gallery images |
| `Escape` | Close lightbox |

### ARIA Labels

```html
<!-- Product card -->
<article
  class="product-card"
  role="article"
  aria-label="Finger Joint wood product"
>
  <a href="/products/finger-joint"
     aria-label="View Finger Joint product details">
    <!-- content -->
  </a>
</article>

<!-- Gallery -->
<div
  class="product-gallery"
  role="region"
  aria-label="Product image gallery"
>
  <div role="img" aria-label="Main product image">
    <img alt="Finger joint wood showing interlocking pattern" />
  </div>

  <div
    class="thumbnail-grid"
    role="tablist"
    aria-label="Gallery thumbnails"
  >
    <button
      role="tab"
      aria-selected="true"
      aria-label="View image 1 of 5"
    >
      <img alt="" /> <!-- Decorative -->
    </button>
  </div>
</div>
```

### Screen Reader Announcements

```typescript
// Announce image changes
function announceImageChange(index: number, total: number) {
  const message = `Viewing image ${index + 1} of ${total}`;

  // Create live region
  const announcement = document.createElement('div');
  announcement.setAttribute('role', 'status');
  announcement.setAttribute('aria-live', 'polite');
  announcement.classList.add('visually-hidden');
  announcement.textContent = message;

  document.body.appendChild(announcement);

  // Remove after announcement
  setTimeout(() => {
    document.body.removeChild(announcement);
  }, 1000);
}
```

---

## Testing Checklist

### Interaction Testing

- [ ] Product cards hover smoothly on desktop
- [ ] Touch feedback works on mobile
- [ ] Gallery navigation via thumbnails
- [ ] Gallery navigation via keyboard arrows
- [ ] Lightbox opens/closes properly
- [ ] Swipe gestures work on mobile
- [ ] A/B variant displays correctly
- [ ] Analytics events fire properly

### Performance Testing

- [ ] Total JS bundle <10KB
- [ ] Gallery images lazy load
- [ ] No layout shift on image load
- [ ] 60fps animations
- [ ] Lighthouse score >90

### Cross-Browser Testing

- [ ] Chrome/Edge: View Transitions work
- [ ] Safari: CSS fallbacks work
- [ ] Firefox: All interactions smooth
- [ ] iOS Safari: Touch gestures work
- [ ] Android Chrome: Performance acceptable

### Accessibility Testing

- [ ] Keyboard navigation complete
- [ ] Screen reader announces correctly
- [ ] Focus indicators visible
- [ ] Color contrast passes
- [ ] Touch targets ≥44px

---

## Implementation Priority

### Phase 1: Core Functionality (Day 1)
1. Product listing grid layout
2. Basic hover effects (CSS only)
3. Product detail page structure
4. Static image display

### Phase 2: Gallery System (Day 2)
1. React island for gallery
2. Thumbnail navigation
3. Image transitions
4. Mobile swipe gestures

### Phase 3: Enhanced Features (Day 3)
1. Lightbox implementation
2. A/B testing setup
3. Analytics tracking
4. Performance optimizations

### Phase 4: Polish (Day 4)
1. Loading states
2. Error handling
3. Accessibility refinements
4. Cross-browser fixes

---

*These specifications ensure product pages deliver a premium, performant experience that aligns with TWG's brand values while maintaining technical excellence.*