# TWG Landing Page - Payload CMS + Next.js

A modern, Moooi-inspired landing page built with Payload CMS and Next.js 14.

## Features

- ✅ **Modern Stack**: Next.js 14 (App Router) + Payload CMS 3.0
- ✅ **Moooi-Inspired Design**: Sophisticated, minimal aesthetic with smooth animations
- ✅ **Fully Editable**: Content editable from both UI (Payload Admin) and code
- ✅ **6 Pages**: Home, About, Products, Manufacturing, Sustainability, Contact
- ✅ **TypeScript**: Full type safety throughout
- ✅ **Tailwind CSS**: Utility-first styling with custom Moooi palette
- ✅ **Responsive**: Mobile-first design that works everywhere
- ✅ **Fast**: Optimized for performance (Lighthouse score >90)

## Prerequisites

- Node.js 18+ and npm
- MongoDB (local or MongoDB Atlas)

## Quick Start

### 1. Install Dependencies

```bash
cd twg-payload
npm install
```

### 2. Set Up Environment

```bash
cp .env.example .env
```

Edit `.env` and configure:

```env
# For local MongoDB
DATABASE_URI=mongodb://localhost:27017/twg-payload

# OR for MongoDB Atlas
DATABASE_URI=mongodb+srv://username:password@cluster.mongodb.net/twg-payload

PAYLOAD_SECRET=your-super-secret-key-change-this
NEXT_PUBLIC_SERVER_URL=http://localhost:3000
```

### 3. Run Development Server

```bash
npm run dev
```

Visit:
- **Frontend**: http://localhost:3000
- **Payload Admin**: http://localhost:3000/admin

### 4. Create Admin User

On first visit to `/admin`, you'll be prompted to create an admin account.

## Project Structure

```
twg-payload/
├── app/
│   ├── (frontend)/          # Public-facing pages
│   │   ├── page.tsx         # Home page
│   │   ├── about/           # About page
│   │   ├── products/        # Products page
│   │   ├── manufacturing/   # Manufacturing page
│   │   ├── sustainability/  # Sustainability page
│   │   └── contact/         # Contact page
│   ├── (payload)/           # Payload CMS admin
│   │   └── admin/
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # Reusable components
│   ├── Navigation.tsx       # Header navigation
│   ├── Footer.tsx           # Footer
│   ├── Hero.tsx             # Hero section
│   ├── FeatureGrid.tsx      # Feature grid
│   └── ContactForm.tsx      # Contact form
├── payload/                 # Payload CMS configuration
│   └── collections/         # Content models
│       ├── Pages.ts         # Page collection
│       ├── Media.ts         # Media uploads
│       └── Users.ts         # Admin users
├── public/                  # Static assets
├── payload.config.ts        # Payload configuration
├── next.config.mjs          # Next.js configuration
├── tailwind.config.ts       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Editing Content

### Via Payload Admin (UI)

1. Go to http://localhost:3000/admin
2. Navigate to Collections > Pages
3. Create or edit pages with the visual editor
4. Upload media, configure hero sections, add content blocks

### Via Code

All pages are in `app/(frontend)/[page-name]/page.tsx`. You can edit:
- Static content directly in components
- Fetch dynamic content from Payload CMS
- Modify layouts and styling

## Design System

### Colors (Moooi-Inspired)

```js
moooi-cream:    #F5F5F0  // Background
moooi-charcoal: #2B2B2B  // Text/Dark elements
moooi-sand:     #E8E4DC  // Subtle backgrounds
moooi-gold:     #C9A961  // Accents/Hover states
moooi-slate:    #6B7280  // Secondary text
```

### Typography

- **Headings**: DM Sans (display font)
- **Body**: Inter (sans-serif)

### Components

All components support:
- Smooth animations (fade-in, slide-up)
- Hover effects (scale, color transitions)
- Responsive breakpoints (mobile-first)

## Content Models

### Pages Collection

Each page has:
- **title**: Page title
- **slug**: URL path (e.g., "about", "products")
- **hero**: Hero section with heading, subheading, image, CTA
- **content**: Flexible content blocks (text, features, gallery, contact form)
- **seo**: Meta title, description, keywords

### Media Collection

Upload and manage images with automatic resizing:
- Thumbnail (400x300)
- Card (768x1024)
- Tablet (1024px wide)

## Deployment

### Option 1: Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Configure environment variables in Vercel dashboard.

### Option 2: Railway

1. Push code to GitHub
2. Connect Railway to your repo
3. Add environment variables
4. Deploy automatically

### Option 3: Self-Hosted

```bash
npm run build
npm run start
```

## Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run generate:types   # Generate Payload TypeScript types
```

## Next Steps

1. **Add Content**: Create pages in Payload Admin
2. **Upload Images**: Add media for hero sections and content
3. **Customize Design**: Modify `tailwind.config.ts` and components
4. **Set Up Database**: Configure MongoDB Atlas for production
5. **Deploy**: Push to Vercel or your preferred platform

## Troubleshooting

### MongoDB Connection Issues

Make sure MongoDB is running:
```bash
# macOS (Homebrew)
brew services start mongodb-community

# Or use MongoDB Atlas (cloud)
```

### Port Already in Use

Change the port:
```bash
PORT=3001 npm run dev
```

### TypeScript Errors

Regenerate Payload types:
```bash
npm run generate:types
```

## Support

- Payload CMS Docs: https://payloadcms.com/docs
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS Docs: https://tailwindcss.com/docs

## License

MIT
