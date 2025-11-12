# 7. Deployment Architecture

## 7.1 Build Pipeline

```yaml
# .github/workflows/deploy.yml
name: Deploy to Cloudflare Pages

on:
  push:
    branches: [main, development]
  workflow_dispatch: # Manual trigger for quarterly updates

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - uses: pnpm/action-setup@v2
        with:
          version: 8

      - name: Install dependencies
        run: pnpm install

      - name: Build Astro site
        run: pnpm build
        env:
          SANITY_PROJECT_ID: ${{ secrets.SANITY_PROJECT_ID }}

      - name: Run E2E tests
        run: pnpm test:e2e

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: twg-landing
          directory: dist
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```

## 7.2 Environments

| Environment | URL | Purpose | Deploy Trigger |
|-------------|-----|---------|----------------|
| Production | twg-landing.com | Live site | Push to main |
| Preview | preview.twg-landing.pages.dev | Testing | Push to development |
| PR Preview | pr-*.twg-landing.pages.dev | Review | Pull requests |

---
