# Quick Start Guide - The Wood and Good

## View Your Website

### 1. Start the development server

```bash
cd twg-payload
npm install
npm run dev
```

### 2. Open your browser

- **Website**: http://localhost:3000
- **CMS Admin**: http://localhost:3000/admin

---

## Available Pages

| Page | URL |
|------|-----|
| Home | http://localhost:3000 |
| About | http://localhost:3000/about |
| Products | http://localhost:3000/products |
| Manufacturing | http://localhost:3000/manufacturing |
| Sustainability | http://localhost:3000/sustainability |
| Contact | http://localhost:3000/contact |

---

## Edit Content

### Visual Editing (Recommended)

1. Go to http://localhost:3000/admin
2. Click on a page in the sidebar
3. Click directly on content to edit
4. Use the sidebar to add/remove/reorder blocks
5. Changes save automatically

### Code Editing

Edit MDX files in `twg-payload/content/pages/`:

```yaml
# content/pages/home.mdx
---
title: Home
blocks:
  - _template: hero
    heading: Where Forest Meets Forever
    subheading: Premium oak furniture
    theme: dark
  - _template: featuresGrid
    heading: Our Craft
    columns: '3'
    items:
      - title: Quality
        description: Every piece tells a story
---
```

---

## Content Blocks

Add these blocks to any page:

| Block | Use For |
|-------|---------|
| `hero` | Full-screen hero sections |
| `featuresGrid` | Grid of feature cards |
| `editorialText` | Rich text content |
| `imageSection` | Full-width images/videos |
| `cta` | Call-to-action banners |
| `stats` | Statistics display |
| `testimonial` | Customer quotes |

---

## Add Images

1. Place images in `twg-payload/public/uploads/`
2. Reference in content:
   ```yaml
   - _template: hero
     backgroundImage: /uploads/hero-bg.jpg
   ```

Or upload through TinaCMS admin interface.

---

## Design System

### Colors

| Name | Hex | Usage |
|------|-----|-------|
| Cream | `#F5F5F0` | Backgrounds |
| Charcoal | `#2B2B2B` | Text |
| Gold | `#C9A961` | Accents |

### Typography

- Headings: DM Sans
- Body: Inter

---

## Stop/Start

```bash
# Start
cd twg-payload
npm run dev

# Stop
Ctrl+C in terminal
```

---

## Common Tasks

### Change the homepage hero

Edit `twg-payload/content/pages/home.mdx`:

```yaml
blocks:
  - _template: hero
    heading: Your New Headline
    subheading: Your new description
```

### Add a new feature card

```yaml
- _template: featuresGrid
  items:
    - title: New Feature
      description: Feature description
```

### Change colors

Edit `twg-payload/tailwind.config.ts`:

```typescript
colors: {
  moooi: {
    cream: '#F5F5F0',
    gold: '#C9A961',
    // Change these values
  }
}
```

---

## What You Have

- 6 pages with Moooi-inspired design
- Visual content editing via TinaCMS
- Block-based page composition
- Mobile responsive design
- Smooth animations
- Git-versioned content

---

## Full Documentation

- [Detailed README](../../twg-payload/README.md) - Complete setup guide
- [TinaCMS Docs](https://tina.io/docs/) - TinaCMS documentation

---

**First step**: Run `npm run dev` and visit http://localhost:3000
