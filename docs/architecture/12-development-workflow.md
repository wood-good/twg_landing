# 12. Development Workflow

## 12.1 Local Setup

```bash
# Prerequisites
node >= 18.0.0
pnpm >= 8.0.0

# Clone and install
git clone https://github.com/twg/landing.git
cd landing
pnpm install

# Environment setup
cp .env.example .env.local
# Add Sanity project ID and dataset

# Start development
pnpm dev

# Build for production
pnpm build
pnpm preview
```

## 12.2 Development Commands

```json
{
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "test": "vitest",
    "test:e2e": "playwright test",
    "lint": "eslint src",
    "format": "prettier --write .",
    "sanity": "cd sanity && sanity dev"
  }
}
```

---
