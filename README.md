# The Wood and Good - Landing Page

Premium oak furniture website built with TinaCMS + Next.js 15.

---

## Quick Start

```bash
cd twg-payload
npm install
npm run dev
```

Visit:
- **Website**: http://localhost:3000
- **CMS Admin**: http://localhost:3000/admin

---

## Access URLs

| Service | URL | Purpose |
|---------|-----|---------|
| **Website** | http://localhost:3000 | Public-facing site |
| **TinaCMS Admin** | http://localhost:3000/admin | Visual content editor |

---

## Project Overview

This project uses **TinaCMS** with **Next.js 15** for a modern, Git-based CMS approach:

- **Visual Editing**: Edit content directly on the page
- **Block-Based Pages**: Compose pages from reusable content blocks
- **Git-Backed**: All content stored as MDX files in version control
- **Type-Safe**: Full TypeScript support with auto-generated types

---

## Project Structure

```
.
├── docs/                           # Project documentation
│   ├── architecture/              # Architecture docs
│   ├── content/                   # Brand copywriting content
│   └── guides/                    # Operational guides
├── twg-payload/                    # Main application (Next.js + TinaCMS)
│   ├── app/                       # Next.js App Router pages
│   │   └── (frontend)/            # Public pages
│   ├── components/                # React components
│   │   ├── blocks/                # Block renderer components
│   │   └── PageClient.tsx         # Visual editing wrapper
│   ├── content/                   # Content files (MDX)
│   │   ├── pages/                 # Page content
│   │   └── settings/              # Global settings
│   ├── lib/                       # Utilities
│   ├── tina/                      # TinaCMS configuration
│   └── public/                    # Static assets
└── README.md
```

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **CMS**: TinaCMS (Git-based, visual editing)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Content**: MDX (Markdown + JSX)

---

## Available Pages

| Page | URL | Content File |
|------|-----|--------------|
| Home | / | `content/pages/home.mdx` |
| About | /about | `content/pages/about.mdx` |
| Products | /products | `content/pages/products.mdx` |
| Manufacturing | /manufacturing | `content/pages/manufacturing.mdx` |
| Sustainability | /sustainability | `content/pages/sustainability.mdx` |
| Contact | /contact | `content/pages/contact.mdx` |

---

## Content Blocks

Pages are composed of reusable blocks:

| Block | Description |
|-------|-------------|
| **Hero** | Full-screen hero section with heading, CTA, background |
| **Features Grid** | 2-4 column grid of feature cards |
| **Editorial Text** | Rich text content (single or two-column) |
| **Image Section** | Full-width image/video with overlay |
| **CTA** | Call-to-action banner with button |
| **Stats** | Statistics display section |
| **Testimonial** | Quote with author |

---

## Editing Content

### Visual Editing (Recommended)

1. Run `npm run dev` in `twg-payload/`
2. Visit http://localhost:3000/admin
3. Click any page to edit
4. Edit content inline on the page
5. Changes save automatically to MDX files

### Code Editing

Edit MDX files directly in `twg-payload/content/pages/`:

```yaml
---
title: About Us
blocks:
  - _template: hero
    heading: About Us
    theme: light
  - _template: featuresGrid
    heading: Our Values
    columns: '2'
    items:
      - title: Quality
        description: Excellence in every detail
---
```

---

## Development Commands

```bash
cd twg-payload

npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

---

## Environment Variables

Create `twg-payload/.env`:

```env
# TinaCMS Cloud (optional - for collaborative editing)
NEXT_PUBLIC_TINA_CLIENT_ID=your-client-id
TINA_TOKEN=your-token
TINA_BRANCH=main
```

Local development works without these variables.

---

## Design System

### Colors (Moooi-Inspired)

| Color | Hex | Usage |
|-------|-----|-------|
| Cream | `#F5F5F0` | Background |
| Charcoal | `#2B2B2B` | Text, dark elements |
| Sand | `#E8E4DC` | Subtle backgrounds |
| Gold | `#C9A961` | Accents, hover states |
| Slate | `#6B7280` | Secondary text |

### Typography

- **Headings**: DM Sans
- **Body**: Inter

---

## Deployment

### Vercel (Recommended)

```bash
cd twg-payload
vercel
```

### Cloudflare Pages

```bash
cd twg-payload
npm run build
npx wrangler pages deploy .vercel/output/static
```

---

## Brand Assets

All copywriting content is preserved in `/docs/content/`:
- Brand voice guidelines
- Product descriptions
- Page content drafts
- Marketing copy

---

## Status

- ✅ Next.js 15 + TinaCMS setup
- ✅ 6 pages with block-based content
- ✅ Visual editing enabled
- ✅ Moooi-inspired design system
- ✅ Responsive design
- ⬜ Upload brand assets (logo, product images)
- ⬜ Add video backgrounds
- ⬜ Configure contact form submission
- ⬜ Production deployment

---

## Documentation

- [Full Documentation](./twg-payload/README.md) - Detailed setup and architecture
- [TinaCMS Docs](https://tina.io/docs/) - TinaCMS documentation
- [Next.js Docs](https://nextjs.org/docs) - Next.js documentation

---

**Last Updated**: December 2025

🌲 **Where Forest Meets Forever** 🌲
