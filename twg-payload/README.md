# TWG Landing Page - TinaCMS + Next.js 15

A modern, Moooi-inspired landing page built with TinaCMS and Next.js 15 (App Router).

## Features

- **Modern Stack**: Next.js 15 (App Router) + TinaCMS
- **Visual Editing**: Edit content directly on the page with TinaCMS contextual editing
- **Block-Based Architecture**: Flexible page composition with reusable content blocks
- **Moooi-Inspired Design**: Sophisticated, minimal aesthetic with smooth animations
- **6 Pages**: Home, About, Products, Manufacturing, Sustainability, Contact
- **TypeScript**: Full type safety with auto-generated types
- **Tailwind CSS**: Utility-first styling with custom Moooi palette
- **Git-Based CMS**: Content stored as MDX files in version control
- **Responsive**: Mobile-first design that works everywhere

## Prerequisites

- Node.js 18+ and npm
- TinaCMS Cloud account (for visual editing) or local-only development

## Quick Start

### 1. Install Dependencies

```bash
cd twg-payload
npm install
```

### 2. Set Up Environment

Create `.env` file:

```env
# TinaCMS (required for visual editing)
NEXT_PUBLIC_TINA_CLIENT_ID=your-client-id
TINA_TOKEN=your-token
TINA_BRANCH=main
```

For local-only development without TinaCMS Cloud, you can skip the environment variables.

### 3. Run Development Server

```bash
npm run dev
```

Visit:
- **Frontend**: http://localhost:3000
- **TinaCMS Admin**: http://localhost:3000/admin

## Project Structure

```
twg-payload/
├── app/
│   ├── (frontend)/              # Public-facing pages
│   │   ├── page.tsx             # Home page (server component)
│   │   ├── about/page.tsx       # About page
│   │   ├── products/page.tsx    # Products page
│   │   ├── manufacturing/page.tsx
│   │   ├── sustainability/page.tsx
│   │   └── contact/page.tsx
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles + Tailwind
├── components/
│   ├── PageClient.tsx           # Reusable page wrapper with useTina hook
│   ├── Navigation.tsx           # Header navigation
│   ├── Footer.tsx               # Footer
│   ├── Hero.tsx                 # Hero section component
│   ├── FeatureGrid.tsx          # Feature grid component
│   └── blocks/                  # Block renderer system
│       ├── BlockRenderer.tsx    # Maps block types to components
│       ├── HeroBlock.tsx        # Hero block component
│       ├── FeaturesGridBlock.tsx
│       ├── EditorialTextBlock.tsx
│       ├── ImageSectionBlock.tsx
│       ├── CTABlock.tsx
│       ├── StatsBlock.tsx
│       └── TestimonialBlock.tsx
├── content/
│   ├── pages/                   # MDX content files
│   │   ├── home.mdx
│   │   ├── about.mdx
│   │   ├── products.mdx
│   │   ├── manufacturing.mdx
│   │   ├── sustainability.mdx
│   │   └── contact.mdx
│   └── settings/                # Global settings
│       └── global.json
├── lib/
│   └── tina.ts                  # TinaCMS client utilities
├── tina/
│   ├── config.ts                # TinaCMS schema configuration
│   └── __generated__/           # Auto-generated types and client
├── public/                      # Static assets
│   └── uploads/                 # TinaCMS media uploads
├── next.config.mjs              # Next.js configuration
├── tailwind.config.ts           # Tailwind CSS configuration
└── tsconfig.json                # TypeScript configuration
```

## Content Architecture

### Block-Based Pages

Each page is composed of reusable content blocks. Available block types:

| Block | Description | Fields |
|-------|-------------|--------|
| **Hero** | Full-screen hero section | heading, subheading, background, CTA, theme, size |
| **Features Grid** | Grid of feature cards | heading, columns (2-4), items with title/description |
| **Editorial Text** | Rich text content | heading, content, layout (single/two-column) |
| **Image Section** | Full-width image/video | image, video, overlay text, CTA |
| **CTA** | Call-to-action banner | heading, subheading, button text/link, theme |
| **Stats** | Statistics display | heading, stats with value/label |
| **Testimonial** | Quote section | quote, author, role, photo |

### Content File Example

```yaml
# content/pages/about.mdx
---
title: About Us
description: Our story of passion, innovation, and commitment
blocks:
  - _template: hero
    heading: About Us
    subheading: Our story of passion and excellence
    theme: light
    size: small
  - _template: featuresGrid
    heading: Our Values
    columns: '2'
    items:
      - title: Quality
        description: Every product is a testament to excellence
      - title: Sustainability
        description: Creating without compromising our planet
  - _template: cta
    heading: Want to Learn More?
    buttonText: Contact Us
    buttonLink: /contact
    theme: dark
seo:
  title: About TWG - Our Story
  description: Learn about our passion and commitment
---
```

## Visual Editing

TinaCMS provides real-time visual editing. The system uses the `useTina` hook to enable contextual editing.

### How It Works

1. **Server Component** fetches initial data:
```typescript
// app/(frontend)/about/page.tsx
import { getPageProps } from '@/lib/tina'
import PageClient from '@/components/PageClient'

export default async function AboutPage() {
  const props = await getPageProps('about')
  return <PageClient {...props} />
}
```

2. **Client Component** enables visual editing:
```typescript
// components/PageClient.tsx
'use client'
import { useTina } from 'tinacms/dist/react'

export default function PageClient(props) {
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  })
  return <BlockRenderer blocks={data.page.blocks} />
}
```

3. **Edit in Admin**: Visit `/admin` to open visual editor

## Editing Content

### Via TinaCMS Admin (Visual)

1. Go to http://localhost:3000/admin
2. Click on any page in the sidebar
3. Click directly on content to edit inline
4. Add/remove/reorder blocks using the sidebar
5. Changes save automatically to MDX files

### Via Code

Edit MDX files directly in `content/pages/`:
- Modify YAML frontmatter for structured content
- Changes are version-controlled in Git
- Full TypeScript support with generated types

## Design System

### Colors (Moooi-Inspired)

```css
--moooi-cream:    #F5F5F0  /* Background */
--moooi-charcoal: #2B2B2B  /* Text/Dark elements */
--moooi-sand:     #E8E4DC  /* Subtle backgrounds */
--moooi-gold:     #C9A961  /* Accents/Hover states */
--moooi-slate:    #6B7280  /* Secondary text */
```

### Typography

- **Headings**: DM Sans (display font)
- **Body**: Inter (sans-serif)

### Animation

Components feature:
- Smooth fade-in and slide-up animations
- Hover effects with scale/color transitions
- Framer Motion for advanced animations

## Deployment

### Option 1: Vercel (Recommended)

```bash
npm run build
vercel
```

Set environment variables in Vercel dashboard:
- `NEXT_PUBLIC_TINA_CLIENT_ID`
- `TINA_TOKEN`
- `TINA_BRANCH`

### Option 2: Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy .vercel/output/static
```

### Option 3: Self-Hosted

```bash
npm run build
npm run start
```

## Scripts

```bash
npm run dev              # Start development server (with TinaCMS)
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
```

## TinaCMS Cloud Setup

For collaborative editing and media management:

1. Create account at [tina.io](https://tina.io)
2. Create a new project
3. Get your Client ID and Token
4. Add to `.env` file
5. Connect your Git repository

## Troubleshooting

### Visual Editing Not Working

1. Ensure TinaCMS environment variables are set
2. Check browser console for errors
3. Verify `useTina` hook is properly integrated

### Build Errors

Regenerate TinaCMS types:
```bash
rm -rf tina/__generated__
npm run dev  # Types regenerate on startup
```

### Port Already in Use

```bash
PORT=3001 npm run dev
```

## Resources

- [TinaCMS Documentation](https://tina.io/docs/)
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT
