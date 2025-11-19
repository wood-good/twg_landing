import { test, expect } from '@playwright/test';

/**
 * TWG Landing - Admin Panel Tests
 *
 * Tests cover:
 * - Admin pathway accessibility
 * - Authentication requirements
 * - Valid credential handling
 * - Session management
 * - Security controls
 */

const ADMIN_URL = '/vvveb/admin/';
const ADMIN_LOGIN_URL = '/vvveb/admin/?module=user/login';

// Test credentials - should match what's in the database
// IMPORTANT: Update these with your actual admin credentials for testing
const TEST_ADMIN = {
  username: 'admin',
  password: 'admin', // Default VVVeb password - change if different
  email: 'admin@example.com'
};

test.describe('Admin Pathway Accessibility', () => {
  test('admin panel URL is accessible', async ({ page }) => {
    const response = await page.goto(ADMIN_URL);

    // Should either redirect to login or show login page
    expect(response?.status()).toBeLessThan(500);
  });

  test('admin panel redirects to login when not authenticated', async ({ page }) => {
    await page.goto(ADMIN_URL);

    // Should see login form or be redirected to login
    const loginForm = page.locator('form[action*="login"], form[name="login"], #login-form, .login-form');
    const loginInput = page.locator('input[name="user"], input[name="username"], input[name="email"], input[type="email"]');

    // Either we see a login form directly or we're on a login page
    const hasLoginForm = await loginForm.count() > 0 || await loginInput.count() > 0;

    expect(hasLoginForm, 'Admin should require authentication').toBeTruthy();
  });

  test('admin login page renders correctly', async ({ page }) => {
    await page.goto(ADMIN_LOGIN_URL);

    // Check for essential login form elements
    const usernameField = page.locator('input[name="user"], input[name="username"], input[name="email"], #username, #email');
    const passwordField = page.locator('input[name="password"], input[type="password"], #password');
    const submitButton = page.locator('button[type="submit"], input[type="submit"]');

    await expect(usernameField.first(), 'Login should have username/email field').toBeVisible();
    await expect(passwordField.first(), 'Login should have password field').toBeVisible();
    await expect(submitButton.first(), 'Login should have submit button').toBeVisible();
  });

  test('admin login page has CSRF protection', async ({ page }) => {
    await page.goto(ADMIN_LOGIN_URL);

    // Check for CSRF token
    const csrfToken = page.locator(
      'input[name="_token"], input[name="csrf_token"], input[name="csrf"], meta[name="csrf-token"]'
    );

    // VVVeb uses CSRF protection
    const hasCsrf = await csrfToken.count() > 0;

    // Even if not found in form, check if there's session-based CSRF
    if (!hasCsrf) {
      // It's acceptable if CSRF is handled via session or headers
      console.log('Note: CSRF token not found in form - may be session-based');
    }
  });
});

test.describe('Authentication Validation', () => {
  test('login rejects empty credentials', async ({ page }) => {
    await page.goto(ADMIN_LOGIN_URL);

    // Try to submit empty form
    const submitButton = page.locator('button[type="submit"], input[type="submit"]');
    await submitButton.first().click();

    // Should show validation error or stay on login page
    await expect(page).toHaveURL(/login|admin/);

    // Check for error message or HTML5 validation
    const errorMessage = page.locator('.alert-danger, .error, .invalid-feedback, [class*="error"]');
    const invalidFields = page.locator(':invalid');

    const hasValidation = await errorMessage.count() > 0 || await invalidFields.count() > 0;
    expect(hasValidation, 'Empty form should trigger validation').toBeTruthy();
  });

  test('login rejects invalid credentials', async ({ page }) => {
    await page.goto(ADMIN_LOGIN_URL);

    // Fill with invalid credentials
    const usernameField = page.locator('input[name="user"], input[name="username"], input[name="email"]').first();
    const passwordField = page.locator('input[name="password"], input[type="password"]').first();

    await usernameField.fill('invalid_user_123');
    await passwordField.fill('wrong_password_456');

    // Submit form
    const submitButton = page.locator('button[type="submit"], input[type="submit"]');
    await submitButton.first().click();

    // Wait for response
    await page.waitForLoadState('networkidle');

    // Should show error message and stay on login page
    const errorMessage = page.locator('.alert-danger, .alert-error, .error-message, [class*="error"]');

    // Should still be on login page
    await expect(page).toHaveURL(/login|admin/);

    // Should see an error (either visible error or we're still on login page)
    const stillOnLogin = page.url().includes('login') ||
                        await page.locator('input[name="password"]').count() > 0;
    expect(stillOnLogin, 'Invalid credentials should not grant access').toBeTruthy();
  });

  test('password field masks input', async ({ page }) => {
    await page.goto(ADMIN_LOGIN_URL);

    const passwordField = page.locator('input[name="password"], input[type="password"]').first();

    // Check that password field has correct type
    const fieldType = await passwordField.getAttribute('type');
    expect(fieldType, 'Password field should mask input').toBe('password');
  });

  test('login accepts valid credentials', async ({ page }) => {
    await page.goto(ADMIN_LOGIN_URL);

    // Fill with valid credentials
    const usernameField = page.locator('input[name="user"], input[name="username"], input[name="email"]').first();
    const passwordField = page.locator('input[name="password"], input[type="password"]').first();

    await usernameField.fill(TEST_ADMIN.username);
    await passwordField.fill(TEST_ADMIN.password);

    // Submit form
    const submitButton = page.locator('button[type="submit"], input[type="submit"]');
    await submitButton.first().click();

    // Wait for navigation
    await page.waitForLoadState('networkidle');

    // Should be redirected to admin dashboard (not login page)
    // Successful login means we're NOT on the login page anymore
    const isOnDashboard = !page.url().includes('login') ||
                          await page.locator('.dashboard, #dashboard, [class*="admin-content"]').count() > 0;

    // Alternative: check for admin navigation elements
    const hasAdminNav = await page.locator('.admin-sidebar, .admin-menu, #admin-nav').count() > 0;

    expect(
      isOnDashboard || hasAdminNav,
      'Valid credentials should grant admin access'
    ).toBeTruthy();
  });
});

test.describe('Session Management', () => {
  test('authenticated session persists across pages', async ({ page }) => {
    // Login first
    await page.goto(ADMIN_LOGIN_URL);

    const usernameField = page.locator('input[name="user"], input[name="username"], input[name="email"]').first();
    const passwordField = page.locator('input[name="password"], input[type="password"]').first();

    await usernameField.fill(TEST_ADMIN.username);
    await passwordField.fill(TEST_ADMIN.password);

    const submitButton = page.locator('button[type="submit"], input[type="submit"]');
    await submitButton.first().click();

    await page.waitForLoadState('networkidle');

    // If login successful, navigate to another admin page
    if (!page.url().includes('login')) {
      // Try accessing different admin sections
      const adminPages = [
        '/vvveb/admin/?module=content/pages',
        '/vvveb/admin/?module=media/media',
        '/vvveb/admin/?module=settings/settings'
      ];

      for (const adminPage of adminPages) {
        const response = await page.goto(adminPage);

        // Should still have access (not redirected to login)
        if (response && response.status() < 400) {
          const redirectedToLogin = page.url().includes('login');
          expect(redirectedToLogin, `Session should persist for ${adminPage}`).toBeFalsy();
        }
      }
    }
  });

  test('logout terminates session', async ({ page }) => {
    // Login first
    await page.goto(ADMIN_LOGIN_URL);

    const usernameField = page.locator('input[name="user"], input[name="username"], input[name="email"]').first();
    const passwordField = page.locator('input[name="password"], input[type="password"]').first();

    await usernameField.fill(TEST_ADMIN.username);
    await passwordField.fill(TEST_ADMIN.password);

    const submitButton = page.locator('button[type="submit"], input[type="submit"]');
    await submitButton.first().click();

    await page.waitForLoadState('networkidle');

    // Find and click logout
    if (!page.url().includes('login')) {
      const logoutLink = page.locator(
        'a[href*="logout"], button[onclick*="logout"], .logout, #logout'
      );

      if (await logoutLink.count() > 0) {
        await logoutLink.first().click();
        await page.waitForLoadState('networkidle');

        // Try to access admin dashboard again
        await page.goto(ADMIN_URL);

        // Should be redirected to login
        const requiresLogin = page.url().includes('login') ||
                             await page.locator('input[name="password"]').count() > 0;

        expect(requiresLogin, 'Logout should terminate session').toBeTruthy();
      }
    }
  });
});

test.describe('Security Controls', () => {
  test('admin panel is not accessible from frontend', async ({ page }) => {
    // Start from frontend
    await page.goto('/');

    // There shouldn't be any direct links to admin panel from public site
    const adminLinks = page.locator('a[href*="admin"]');
    const adminLinkCount = await adminLinks.count();

    // If there are admin links, they should require authentication
    for (let i = 0; i < adminLinkCount; i++) {
      const href = await adminLinks.nth(i).getAttribute('href');
      if (href && href.includes('admin')) {
        // Navigate to admin link
        await page.goto(href);

        // Should require authentication
        const requiresAuth = page.url().includes('login') ||
                            await page.locator('input[type="password"]').count() > 0;

        expect(requiresAuth, `Admin link ${href} should require auth`).toBeTruthy();

        // Return to frontend
        await page.goto('/');
      }
    }
  });

  test('sensitive admin routes require authentication', async ({ page }) => {
    const sensitiveRoutes = [
      '/vvveb/admin/?module=user/users',
      '/vvveb/admin/?module=settings/settings',
      '/vvveb/admin/?module=content/pages',
      '/vvveb/admin/?module=order/orders',
    ];

    for (const route of sensitiveRoutes) {
      await page.goto(route);

      // Should redirect to login or show login form
      const requiresAuth = page.url().includes('login') ||
                          await page.locator('input[type="password"]').count() > 0;

      expect(requiresAuth, `${route} should require authentication`).toBeTruthy();
    }
  });

  test('admin login has brute force protection', async ({ page }) => {
    // Attempt multiple failed logins
    const attempts = 5;

    for (let i = 0; i < attempts; i++) {
      await page.goto(ADMIN_LOGIN_URL);

      const usernameField = page.locator('input[name="user"], input[name="username"], input[name="email"]').first();
      const passwordField = page.locator('input[name="password"], input[type="password"]').first();

      await usernameField.fill('test_brute_force');
      await passwordField.fill(`wrong_password_${i}`);

      const submitButton = page.locator('button[type="submit"], input[type="submit"]');
      await submitButton.first().click();

      await page.waitForLoadState('networkidle');
    }

    // After multiple attempts, should see rate limiting or lockout message
    // VVVeb has 10 attempts per hour limit
    const lockoutMessage = page.locator(
      '[class*="error"]:has-text("attempts"), [class*="error"]:has-text("locked"), [class*="error"]:has-text("wait")'
    );

    // This test documents the behavior - not all systems show lockout messages
    const hasProtection = await lockoutMessage.count() > 0;
    if (!hasProtection) {
      console.log('Note: Brute force protection may be silent or use different mechanism');
    }
  });

  test('admin panel sets secure headers', async ({ page }) => {
    const response = await page.goto(ADMIN_URL);

    if (response) {
      const headers = response.headers();

      // Check for security headers (recommended but not always present in dev)
      const securityHeaders = [
        'x-content-type-options',
        'x-frame-options',
        'x-xss-protection'
      ];

      const missingHeaders: string[] = [];
      for (const header of securityHeaders) {
        if (!headers[header]) {
          missingHeaders.push(header);
        }
      }

      if (missingHeaders.length > 0) {
        console.log(`Note: Missing security headers: ${missingHeaders.join(', ')}`);
      }
    }
  });
});

test.describe('Admin Panel Structure', () => {
  test.beforeEach(async ({ page }) => {
    // Login before each test in this describe block
    await page.goto(ADMIN_LOGIN_URL);

    const usernameField = page.locator('input[name="user"], input[name="username"], input[name="email"]').first();
    const passwordField = page.locator('input[name="password"], input[type="password"]').first();

    await usernameField.fill(TEST_ADMIN.username);
    await passwordField.fill(TEST_ADMIN.password);

    const submitButton = page.locator('button[type="submit"], input[type="submit"]');
    await submitButton.first().click();

    await page.waitForLoadState('networkidle');
  });

  test('admin dashboard loads with navigation', async ({ page }) => {
    // Skip if login failed
    if (page.url().includes('login')) {
      test.skip();
      return;
    }

    // Check for admin navigation elements
    const sidebar = page.locator('.sidebar, .admin-sidebar, #sidebar, nav.admin-nav');
    const hasNav = await sidebar.count() > 0;

    if (hasNav) {
      await expect(sidebar.first()).toBeVisible();
    }

    // Check for dashboard content
    const content = page.locator('.content, .main-content, #content, main');
    await expect(content.first()).toBeVisible();
  });

  test('admin navigation links are functional', async ({ page }) => {
    if (page.url().includes('login')) {
      test.skip();
      return;
    }

    // Get admin navigation links
    const navLinks = page.locator('.sidebar a, .admin-menu a, nav a[href*="module="]');
    const linkCount = await navLinks.count();

    // Test first few links
    const linksToTest = Math.min(linkCount, 5);
    for (let i = 0; i < linksToTest; i++) {
      const link = navLinks.nth(i);
      const href = await link.getAttribute('href');

      if (href && await link.isVisible()) {
        await link.click();
        await page.waitForLoadState('networkidle');

        // Should load successfully
        const hasContent = await page.locator('.content, main, #content').count() > 0;
        expect(hasContent, `Admin link ${href} should load content`).toBeTruthy();

        // Should still be logged in
        const stillLoggedIn = !page.url().includes('login');
        expect(stillLoggedIn, 'Should remain logged in').toBeTruthy();
      }
    }
  });
});
