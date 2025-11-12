# 9. Testing Strategy

## 9.1 Test Coverage

| Type | Tool | Coverage |
|------|------|----------|
| Unit Tests | Vitest | Component logic |
| Visual Regression | Percy | UI consistency |
| E2E Tests | Playwright | User journeys |
| Performance | Lighthouse CI | Core Web Vitals |
| Accessibility | axe-core | WCAG compliance |

## 9.2 E2E Test Example

```typescript
// tests/e2e/navigation.test.ts
import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('should navigate between pages smoothly', async ({ page }) => {
    await page.goto('/');

    // Check hero video loads
    const video = page.locator('video');
    await expect(video).toBeVisible();

    // Navigate to products
    await page.click('text=Products');

    // Verify View Transition (if supported)
    if (await page.evaluate(() => 'startViewTransition' in document)) {
      // Transition should be smooth
      await expect(page).toHaveURL('/products');
    }

    // Check glassmorphism effects
    const glassCard = page.locator('.glass-card').first();
    const backdrop = await glassCard.evaluate((el) => {
      return window.getComputedStyle(el).backdropFilter;
    });
    expect(backdrop).toContain('blur');
  });
});
```

---
