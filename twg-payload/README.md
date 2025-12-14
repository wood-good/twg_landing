# TWG Landing Page - Sanity CMS + Next.js 15

A modern, Moooi-inspired landing page for The Wood and Good (TWG) built with Sanity CMS and Next.js 15 (App Router).

## Live Site

- **Production**: https://twg-payload.vercel.app
- **Sanity Studio**: https://twg-landing.sanity.studio

## Features

- **Modern Stack**: Next.js 15 (App Router) + Sanity CMS
- **Headless CMS**: Sanity Studio for content management (no exposed /admin path)
- **Block-Based Architecture**: Flexible page composition with reusable content blocks
- **Moooi-Inspired Design**: Sophisticated, minimal aesthetic with smooth animations
- **6 Pages**: Home, About, Products, Manufacturing, Sustainability, Contact
- **Lucide Icons**: Dynamic icon system with 22+ icons for feature grids
- **TypeScript**: Full type safety
- **Tailwind CSS**: Utility-first styling with custom Moooi palette
- **Responsive**: Mobile-first design that works everywhere

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router, Turbopack) |
| CMS | Sanity CMS v3 |
| Styling | Tailwind CSS |
| Icons | Lucide React |
| Animation | Framer Motion |
| Deployment | Vercel |
| Language | TypeScript |

## Prerequisites

- Node.js 18+ and npm
- Sanity account (for content editing)

## Quick Start

### 1. Install Dependencies

```bash
cd twg-payload
npm install
```

### 2. Set Up Environment

Create `.env.local` file:

```env
# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=6pfau3iy
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_USE_SANITY=true

# Optional: For content migration scripts
SANITY_API_WRITE_TOKEN=your-write-token
```

### 3. Run Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

## Project Structure

```
twg-payload/
├── app/
│   ├── (frontend)/              # Public-facing pages
│   │   ├── page.tsx             # Home page
│   │   ├── about/page.tsx
│   │   ├── products/page.tsx
│   │   ├── manufacturing/page.tsx
│   │   ├── sustainability/page.tsx
│   │   └── contact/page.tsx
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles + Tailwind
├── components/
│   ├── PageClient.tsx           # Page wrapper component
│   ├── Navigation.tsx           # Header navigation
│   ├── Footer.tsx
│   └── blocks/                  # Block renderer system
│       ├── BlockRenderer.tsx    # Maps block types to components
│       ├── HeroBlock.tsx
│       ├── FeaturesGridBlock.tsx  # With dynamic icon support
│       ├── EditorialTextBlock.tsx
│       ├── ImageSectionBlock.tsx
│       ├── CTABlock.tsx
│       ├── StatsBlock.tsx
│       └── TestimonialBlock.tsx
├── lib/
│   ├── tina.ts                  # Content fetching (supports MDX fallback)
│   └── sanity.ts                # Sanity query functions
├── sanity/
│   ├── lib/
│   │   └── client.ts            # Sanity client configuration
│   └── schemas/                 # Sanity schema definitions
│       ├── page.ts
│       └── blocks/
│           ├── hero.ts
│           ├── featuresGrid.ts
│           ├── editorialText.ts
│           ├── imageSection.ts
│           ├── cta.ts
│           ├── stats.ts
│           └── testimonial.ts
├── content/
│   └── pages/                   # MDX content files (fallback)
├── scripts/
│   ├── update-sanity-content.ts # Content migration script
│   └── update-contact-email.ts  # Contact page update script
├── public/
│   └── uploads/                 # Static assets
├── next.config.mjs
├── tailwind.config.ts
└── tsconfig.json
```

## Content Architecture

### Block-Based Pages

Each page is composed of reusable content blocks. Available block types:

| Block | Description | Key Fields |
|-------|-------------|------------|
| **Hero** | Full-screen hero section | heading, subheading, background, CTA, theme, size |
| **Features Grid** | Grid of feature cards | heading, columns (2-4), items with title/description/icon/link |
| **Editorial Text** | Rich text content | heading, content, layout (single/two-column) |
| **Image Section** | Full-width image/video | image, video, overlay text, CTA |
| **CTA** | Call-to-action banner | heading, subheading, button text/link, theme |
| **Stats** | Statistics display | heading, stats with value/label |
| **Testimonial** | Quote section | quote, author, role, photo |

### Icon Support (Features Grid)

The Features Grid block supports Lucide icons. Available icons:

**Products**: Grid3x3, Armchair, Layers, Cpu, Square
**Sustainability**: TreePine, Infinity, CheckCircle, Leaf
**Contact**: MapPin, Mail, Phone
**About**: Shield, History, Heart
**Home**: Handshake, TreeDeciduous
**Manufacturing**: Clock, Maximize, Wallet
**Fallback**: HelpCircle, Box

To add an icon, set the `icon` field in Sanity to the icon name (e.g., "MapPin").

## Content Management

### Via Sanity Studio

1. Go to https://twg-landing.sanity.studio
2. Log in with your Sanity account
3. Navigate to "Pages" in the sidebar
4. Select a page to edit
5. Add/edit/reorder blocks
6. Publish changes

### Via Migration Scripts

For bulk content updates:

```bash
# Set write token
export SANITY_API_WRITE_TOKEN=your-token

# Run migration script
npx ts-node --esm scripts/update-sanity-content.ts
```

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

- Smooth fade-in and slide-up animations
- Hover effects with scale/color transitions
- Framer Motion for advanced animations

## Deployment

### Vercel (Current Setup)

The site auto-deploys from `main` branch:

```bash
git push origin main
```

Or manual deploy:

```bash
npm run build
npx vercel --prod
```

### Environment Variables (Vercel)

Set in Vercel dashboard:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`: 6pfau3iy
- `NEXT_PUBLIC_SANITY_DATASET`: production
- `NEXT_PUBLIC_USE_SANITY`: true

## Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
```

## Data Flow

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│  Sanity Studio  │────▶│  Sanity API     │────▶│  Next.js App    │
│  (Content Edit) │     │  (GROQ Queries) │     │  (SSR/Pages)    │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                         │
                                                         ▼
                                                ┌─────────────────┐
                                                │  Vercel CDN     │
                                                │  (Production)   │
                                                └─────────────────┘
```

## Feature Flag: Content Source

The `NEXT_PUBLIC_USE_SANITY` environment variable controls the content source:
- `true`: Fetches content from Sanity CMS
- `false` or unset: Falls back to local MDX files in `content/pages/`

## Troubleshooting

### Content Not Updating

1. Ensure `NEXT_PUBLIC_USE_SANITY=true` in environment
2. Check Sanity client has `useCdn: false` for fresh content
3. Clear Vercel cache and redeploy

### Icons Not Rendering

1. Ensure icon name matches exactly (case-sensitive)
2. Check icon is imported in `FeaturesGridBlock.tsx`
3. Add new icons to the `iconMap` if needed

### Build Errors

```bash
rm -rf .next
npm run build
```

## Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js 15 Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/icons)

## License

MIT
