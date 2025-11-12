# 5. Component Architecture

## 5.1 Astro Components (Zero JavaScript)

### Glass Card Component
```astro
---
// GlassCard.astro
export interface Props {
  blur?: number;
  opacity?: number;
  class?: string;
}

const { blur = 10, opacity = 0.1, class: className = '' } = Astro.props;
---

<div class={`glass-card ${className}`} data-blur={blur} data-opacity={opacity}>
  <slot />
</div>

<style define:vars={{ blur, opacity }}>
  .glass-card {
    backdrop-filter: blur(calc(var(--blur) * 1px));
    background: rgba(255, 255, 255, var(--opacity));
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  @supports not (backdrop-filter: blur(1px)) {
    .glass-card {
      background: rgba(255, 255, 255, 0.9);
    }
  }
</style>
```

### Hero Video Component
```astro
---
// HeroVideo.astro
export interface Props {
  webm: string;
  mp4: string;
  poster: string;
  heading: string;
  subheading?: string;
}

const { webm, mp4, poster, heading, subheading } = Astro.props;
---

<section class="hero">
  <video
    autoplay
    loop
    muted
    playsinline
    poster={poster}
    class="hero-video"
  >
    <source src={webm} type="video/webm" />
    <source src={mp4} type="video/mp4" />
  </video>

  <div class="hero-content">
    <h1 class="hero-heading">{heading}</h1>
    {subheading && <p class="hero-subheading">{subheading}</p>}
  </div>
</section>

<style>
  .hero {
    position: relative;
    height: 100vh;
    overflow: hidden;
  }

  .hero-video {
    position: absolute;
    top: 50%;
    left: 50%;
    min-width: 100%;
    min-height: 100%;
    transform: translate(-50%, -50%);
    object-fit: cover;
  }

  .hero-content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-align: center;
    color: white;
  }

  @media (max-width: 768px) {
    .hero-video {
      display: none;
    }

    .hero {
      background-image: var(--poster-image);
      background-size: cover;
      background-position: center;
    }
  }
</style>
```

## 5.2 React Islands (Interactive Only)

### Mobile Navigation Island
```tsx
// MobileNav.tsx - Only component that ships JS for navigation
import { useState } from 'react';

interface Props {
  items: Array<{ label: string; href: string }>;
}

export default function MobileNav({ items }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="mobile-nav">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="menu-toggle"
        aria-label="Toggle menu"
      >
        <span className="hamburger" />
      </button>

      {isOpen && (
        <div className="menu-overlay">
          {items.map(item => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
```

Usage in Astro:
```astro
---
import MobileNav from '@/components/MobileNav';
const navItems = await getNavigation();
---

<!-- Only loads JS on mobile devices -->
<MobileNav client:media="(max-width: 768px)" items={navItems} />
```

## 5.3 Build-Time Data Fetching

```typescript
// lib/sanity.ts
import { createClient } from '@sanity/client';

const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // We're fetching at build time
});

export async function getSiteSettings() {
  return client.fetch(`
    *[_type == "siteSettings"][0]{
      siteName,
      catchphrase,
      logo,
      navigationItems[] | order(order asc),
      contactEmail,
      socialLinks
    }
  `);
}

export async function getPageBySlug(slug: string) {
  return client.fetch(
    `*[_type == "page" && slug.current == $slug][0]`,
    { slug }
  );
}

export async function getAllProducts() {
  return client.fetch(`
    *[_type == "productCategory"] | order(order asc)
  `);
}
```

---
