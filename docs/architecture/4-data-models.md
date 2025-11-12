# 4. Data Models

## 4.1 Content Architecture

Since content updates are quarterly, all data is fetched at build time and embedded into the static HTML. The following models define the content structure in Sanity.

### Site Settings
```typescript
interface SiteSettings {
  siteName: string;
  catchphrase: string;
  logo: SanityImage;
  navigationItems: NavigationItem[];
  contactEmail: string;
  socialLinks?: SocialLink[];
  seo: SEOMetadata;
}
```

### Page Model
```typescript
interface Page {
  _id: string;
  _type: 'page';
  title: string;
  slug: { current: string };
  heroSection: HeroSection;
  contentBlocks: ContentBlock[];
  seo: SEOMetadata;
}

interface HeroSection {
  heading: string;
  subheading?: string;
  backgroundMedia: {
    type: 'video' | 'image';
    video?: { url: string; poster: string };
    image?: SanityImage;
  };
}
```

### Product Category
```typescript
interface ProductCategory {
  _id: string;
  name: string;
  slug: { current: string };
  description: string;
  featuredImage: SanityImage;
  specifications: Specification[];
  gallery: SanityImage[];
  ctaText: string;
  order: number;
}
```

---
