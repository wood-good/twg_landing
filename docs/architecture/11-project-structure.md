# 11. Project Structure

```
twg-landing/
├── .github/
│   └── workflows/
│       ├── deploy.yml
│       └── test.yml
├── src/
│   ├── components/
│   │   ├── Glass/
│   │   │   ├── GlassCard.astro
│   │   │   ├── GlassButton.astro
│   │   │   └── GlassNav.astro
│   │   ├── Islands/
│   │   │   ├── MobileNav.tsx
│   │   │   └── ProductGallery.tsx
│   │   └── Layout/
│   │       ├── BaseLayout.astro
│   │       ├── Header.astro
│   │       └── Footer.astro
│   ├── content/           # Optional: local content
│   ├── layouts/
│   │   └── Layout.astro
│   ├── lib/
│   │   ├── sanity.ts      # Sanity client & queries
│   │   └── utils.ts       # Helper functions
│   ├── pages/
│   │   ├── index.astro    # Landing page
│   │   ├── products/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── manufacturing.astro
│   │   ├── sustainability.astro
│   │   └── contact.astro
│   └── styles/
│       └── global.css      # Global styles & Tailwind
├── public/
│   ├── fonts/
│   ├── images/
│   └── videos/
│       ├── hero.webm
│       └── hero.mp4
├── sanity/
│   ├── schemas/
│   │   ├── documents/
│   │   ├── objects/
│   │   └── index.ts
│   └── studio/
├── tests/
│   ├── e2e/
│   └── unit/
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---
