# TWG Landing - E2E Test Suite

Comprehensive end-to-end tests for the TWG Landing website built with Playwright.

## Test Coverage

### Client-Side Tests (`client-side.spec.ts`)
- **Navigation Links**: All pages accessible, no 404s, no broken internal links
- **Button Functionality**: All buttons clickable, CTAs work, form submissions
- **Page Content**: Meta tags, image alts, no console errors, assets load
- **Interactive Elements**: Dropdowns, modals, scroll-to-top
- **Form Validation**: Required fields, email format validation
- **Responsive Design**: Mobile navigation, no horizontal overflow

### Admin Tests (`admin.spec.ts`)
- **Pathway Accessibility**: Admin URL accessible, redirects to login
- **Authentication**: Login form present, CSRF protection, credential validation
- **Session Management**: Persistence, logout functionality
- **Security Controls**: Protected routes, brute force protection, security headers

### CMS Tests (`cms.spec.ts`)
- **System Status**: Dashboard operational, version accessible
- **Content Management**: Pages list, editor, posts, create forms
- **Media Library**: Accessible, upload functionality
- **Visual Editor**: Page builder, component palette, preview
- **User Management**: Users list, user details
- **Settings**: General settings, themes, save functionality
- **Data Integrity**: Database connection, API endpoints, no PHP errors
- **E-commerce**: Products and orders management

## Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers
npm run install:playwright
```

## Running Tests

### All Tests
```bash
npm test
```

### Specific Test Suites
```bash
# Client-side tests only
npm run test:client

# Admin tests only
npm run test:admin

# CMS tests only
npm run test:cms
```

### Browser-Specific Tests
```bash
npm run test:chromium
npm run test:firefox
npm run test:webkit
npm run test:mobile
```

### Interactive Modes
```bash
# Run with visible browser
npm run test:headed

# Playwright UI mode
npm run test:ui

# Debug mode
npm run test:debug
```

### View Test Report
```bash
npm run test:report
```

## Configuration

### Environment Variables

Set these before running tests:

```bash
# Base URL (default: http://localhost:8080)
export BASE_URL=http://localhost:8080

# Admin credentials (default: admin/admin)
export ADMIN_USERNAME=admin
export ADMIN_PASSWORD=your_password
export ADMIN_EMAIL=admin@example.com
```

### Test Configuration

Edit `tests/e2e/fixtures/test-config.ts` to modify:
- Admin credentials
- Frontend pages to test
- Timeouts
- URLs

## Prerequisites

1. **Application Running**: Start the Docker environment
   ```bash
   ./start-dev.sh
   ```

2. **Admin Account**: Ensure you have valid admin credentials

3. **Database**: CMS database should be initialized

## Test Output

- **HTML Report**: `tests/results/html-report/`
- **JSON Results**: `tests/results/test-results.json`
- **Screenshots**: `tests/results/artifacts/` (on failure)
- **Videos**: `tests/results/artifacts/` (on failure)

## Writing New Tests

```typescript
import { test, expect } from '@playwright/test';

test.describe('My Feature', () => {
  test('should work correctly', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/TWG/);
  });
});
```

## CI/CD Integration

The test suite is configured for CI environments:
- Retries on failure
- Single worker for stability
- Screenshot/video on failure
- JSON output for parsing

Example GitHub Actions:

```yaml
- name: Run E2E Tests
  run: |
    npm ci
    npx playwright install --with-deps
    npm test
  env:
    BASE_URL: http://localhost:8080
    ADMIN_USERNAME: admin
    ADMIN_PASSWORD: ${{ secrets.ADMIN_PASSWORD }}
```

## Troubleshooting

### Tests Failing on Login
- Verify admin credentials in environment variables
- Check that the application is running
- Ensure database has admin user

### Timeouts
- Increase timeout in `playwright.config.ts`
- Check network conditions
- Verify application performance

### Missing Elements
- Update selectors in test files
- Check if CMS theme has changed
- Verify page structure

## Test Structure

```
tests/
├── e2e/
│   ├── client-side.spec.ts    # Frontend functionality tests
│   ├── admin.spec.ts          # Admin authentication tests
│   ├── cms.spec.ts            # CMS functionality tests
│   └── fixtures/
│       └── test-config.ts     # Shared configuration
├── results/                    # Test output (gitignored)
└── README.md                  # This file
```

## License

Same as parent project.
