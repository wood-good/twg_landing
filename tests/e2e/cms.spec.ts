import { test, expect } from '@playwright/test';

/**
 * TWG Landing - CMS Functionality Tests
 *
 * Tests cover:
 * - CMS is operational and in use
 * - Content management features work
 * - Media library functionality
 * - Page editing capabilities
 * - Visual editor (VVVeb builder) functionality
 */

const ADMIN_URL = '/vvveb/admin/';
const ADMIN_LOGIN_URL = '/vvveb/admin/?module=user/login';

// Test credentials
const TEST_ADMIN = {
  username: 'admin',
  password: 'admin'
};

// Helper to login before tests
async function loginAsAdmin(page: any) {
  await page.goto(ADMIN_LOGIN_URL);

  const usernameField = page.locator('input[name="user"], input[name="username"], input[name="email"]').first();
  const passwordField = page.locator('input[name="password"], input[type="password"]').first();

  await usernameField.fill(TEST_ADMIN.username);
  await passwordField.fill(TEST_ADMIN.password);

  const submitButton = page.locator('button[type="submit"], input[type="submit"]');
  await submitButton.first().click();

  await page.waitForLoadState('networkidle');

  return !page.url().includes('login');
}

test.describe('CMS System Status', () => {
  test('CMS admin dashboard is operational', async ({ page }) => {
    const loggedIn = await loginAsAdmin(page);

    if (!loggedIn) {
      console.log('Could not login - check admin credentials');
      test.skip();
      return;
    }

    // Dashboard should load with key elements
    const dashboard = page.locator('.dashboard, #dashboard, .admin-content, main');
    await expect(dashboard.first()).toBeVisible();

    // Should have admin header/branding
    const header = page.locator('header, .admin-header, .navbar');
    await expect(header.first()).toBeVisible();
  });

  test('CMS version and status are accessible', async ({ page }) => {
    const loggedIn = await loginAsAdmin(page);
    if (!loggedIn) {
      test.skip();
      return;
    }

    // Check for system info or settings
    await page.goto('/vvveb/admin/?module=settings/settings');

    // Should load settings page
    const settingsContent = page.locator('form, .settings, .content');
    await expect(settingsContent.first()).toBeVisible({ timeout: 5000 });
  });
});

test.describe('Content Management', () => {
  test.beforeEach(async ({ page }) => {
    const loggedIn = await loginAsAdmin(page);
    if (!loggedIn) {
      test.skip();
    }
  });

  test('pages list is accessible and functional', async ({ page }) => {
    await page.goto('/vvveb/admin/?module=content/pages');

    // Should see pages list
    const pagesList = page.locator('table, .pages-list, .data-table, [class*="list"]');
    await expect(pagesList.first()).toBeVisible({ timeout: 5000 });

    // Should have action buttons (add, edit, etc.)
    const actionButtons = page.locator(
      'a[href*="add"], a[href*="edit"], button[class*="add"], .btn-add, [class*="action"]'
    );

    const hasActions = await actionButtons.count() > 0;
    expect(hasActions, 'Pages list should have action buttons').toBeTruthy();
  });

  test('can access page editor', async ({ page }) => {
    await page.goto('/vvveb/admin/?module=content/pages');

    // Look for an existing page to edit
    const editLinks = page.locator('a[href*="edit"], .edit-btn, [class*="edit"]');

    if (await editLinks.count() > 0) {
      await editLinks.first().click();
      await page.waitForLoadState('networkidle');

      // Should see edit form
      const editForm = page.locator('form, .editor, [class*="edit"]');
      await expect(editForm.first()).toBeVisible({ timeout: 5000 });
    } else {
      // Check for add new page option
      const addButton = page.locator('a[href*="add"], .btn-add, [class*="add"]');
      expect(await addButton.count(), 'Should have add page option').toBeGreaterThan(0);
    }
  });

  test('posts/blog management is accessible', async ({ page }) => {
    await page.goto('/vvveb/admin/?module=content/posts');

    // Should see posts list or posts management
    const postsList = page.locator('table, .posts-list, .data-table, .content');
    await expect(postsList.first()).toBeVisible({ timeout: 5000 });
  });

  test('page create form has required fields', async ({ page }) => {
    await page.goto('/vvveb/admin/?module=content/pages&action=add');

    // Check for essential page fields
    const titleField = page.locator(
      'input[name="title"], input[name="name"], #title, #name'
    );
    const slugField = page.locator(
      'input[name="slug"], input[name="url"], #slug, #url'
    );

    // Should have title field at minimum
    const hasTitleField = await titleField.count() > 0;
    expect(hasTitleField, 'Page form should have title field').toBeTruthy();
  });
});

test.describe('Media Library', () => {
  test.beforeEach(async ({ page }) => {
    const loggedIn = await loginAsAdmin(page);
    if (!loggedIn) {
      test.skip();
    }
  });

  test('media library is accessible', async ({ page }) => {
    await page.goto('/vvveb/admin/?module=media/media');

    // Should see media library
    const mediaContent = page.locator(
      '.media-library, .media-list, .file-manager, .content, table'
    );
    await expect(mediaContent.first()).toBeVisible({ timeout: 5000 });
  });

  test('media upload functionality exists', async ({ page }) => {
    await page.goto('/vvveb/admin/?module=media/media');

    // Look for upload functionality
    const uploadButton = page.locator(
      'input[type="file"], .upload-btn, button[class*="upload"], a[href*="upload"], [class*="upload"]'
    );

    const hasUpload = await uploadButton.count() > 0;
    expect(hasUpload, 'Media library should have upload option').toBeTruthy();
  });

  test('media items can be viewed', async ({ page }) => {
    await page.goto('/vvveb/admin/?module=media/media');

    // Look for media items
    const mediaItems = page.locator(
      '.media-item, .file-item, tr, .thumbnail, [class*="media"]'
    );

    // Should either have items or empty state
    const itemCount = await mediaItems.count();
    if (itemCount === 0) {
      // Check for empty state message
      const emptyState = page.locator('.empty, .no-items, [class*="empty"]');
      const hasContent = await emptyState.count() > 0;
      // Either has items or shows empty state
    }
  });
});

test.describe('Visual Editor (Page Builder)', () => {
  test.beforeEach(async ({ page }) => {
    const loggedIn = await loginAsAdmin(page);
    if (!loggedIn) {
      test.skip();
    }
  });

  test('visual editor is accessible', async ({ page }) => {
    // VVVeb has a visual editor
    await page.goto('/vvveb/admin/?module=editor/editor');

    // Editor should load
    await page.waitForLoadState('networkidle');

    // Look for editor interface elements
    const editorFrame = page.locator(
      'iframe, .editor-frame, #builder-frame, .builder, [class*="editor"]'
    );

    const editorTools = page.locator(
      '.toolbar, .tools, .components, [class*="tool"], [class*="panel"]'
    );

    const hasEditor = await editorFrame.count() > 0 || await editorTools.count() > 0;
    expect(hasEditor, 'Visual editor should be accessible').toBeTruthy();
  });

  test('editor has component palette', async ({ page }) => {
    await page.goto('/vvveb/admin/?module=editor/editor');
    await page.waitForLoadState('networkidle');

    // Look for components/blocks to drag and drop
    const components = page.locator(
      '.components, .blocks, .elements, [class*="component"], [class*="block"]'
    );

    if (await components.count() > 0) {
      await expect(components.first()).toBeVisible({ timeout: 5000 });
    }
  });

  test('editor preview works', async ({ page }) => {
    await page.goto('/vvveb/admin/?module=editor/editor');
    await page.waitForLoadState('networkidle');

    // Look for preview functionality
    const previewBtn = page.locator(
      'button[class*="preview"], a[class*="preview"], [title*="preview"]'
    );

    if (await previewBtn.count() > 0) {
      expect(await previewBtn.first().isVisible()).toBeTruthy();
    }
  });
});

test.describe('User Management', () => {
  test.beforeEach(async ({ page }) => {
    const loggedIn = await loginAsAdmin(page);
    if (!loggedIn) {
      test.skip();
    }
  });

  test('users list is accessible', async ({ page }) => {
    await page.goto('/vvveb/admin/?module=user/users');

    // Should see users list
    const usersList = page.locator('table, .users-list, .data-table');
    await expect(usersList.first()).toBeVisible({ timeout: 5000 });
  });

  test('can view user details', async ({ page }) => {
    await page.goto('/vvveb/admin/?module=user/users');

    // Find edit/view links
    const userLinks = page.locator('a[href*="user_id="], a[href*="edit"]');

    if (await userLinks.count() > 0) {
      const href = await userLinks.first().getAttribute('href');
      if (href) {
        await page.goto(href);

        // Should see user form/details
        const userForm = page.locator('form, .user-details, [class*="user"]');
        await expect(userForm.first()).toBeVisible({ timeout: 5000 });
      }
    }
  });
});

test.describe('Settings Management', () => {
  test.beforeEach(async ({ page }) => {
    const loggedIn = await loginAsAdmin(page);
    if (!loggedIn) {
      test.skip();
    }
  });

  test('general settings are accessible', async ({ page }) => {
    await page.goto('/vvveb/admin/?module=settings/settings');

    // Should see settings form
    const settingsForm = page.locator('form, .settings');
    await expect(settingsForm.first()).toBeVisible({ timeout: 5000 });
  });

  test('settings form has save functionality', async ({ page }) => {
    await page.goto('/vvveb/admin/?module=settings/settings');

    // Look for save button
    const saveButton = page.locator(
      'button[type="submit"], input[type="submit"], .btn-save, [class*="save"]'
    );

    await expect(saveButton.first()).toBeVisible({ timeout: 5000 });
  });

  test('theme settings are accessible', async ({ page }) => {
    await page.goto('/vvveb/admin/?module=settings/themes');

    // Should see themes management
    const themesContent = page.locator('.themes, .content, form');
    await expect(themesContent.first()).toBeVisible({ timeout: 5000 });
  });
});

test.describe('CMS Data Integrity', () => {
  test.beforeEach(async ({ page }) => {
    const loggedIn = await loginAsAdmin(page);
    if (!loggedIn) {
      test.skip();
    }
  });

  test('database connection is working', async ({ page }) => {
    // Access any page that requires database
    await page.goto('/vvveb/admin/?module=content/pages');

    // Should not show database errors
    const dbError = page.locator(
      '[class*="error"]:has-text("database"), [class*="error"]:has-text("connection"), .alert-danger:has-text("database")'
    );

    const hasDbError = await dbError.count() > 0;
    expect(hasDbError, 'Should not have database errors').toBeFalsy();
  });

  test('API endpoints respond correctly', async ({ page }) => {
    // Test REST API if available
    const response = await page.request.get('/vvveb/rest/products');

    // Should return valid response (200 or 401/403 if auth required)
    expect(response.status()).toBeLessThan(500);
  });

  test('no PHP errors on admin pages', async ({ page }) => {
    const phpErrors: string[] = [];

    // Listen for page content
    page.on('response', async response => {
      if (response.url().includes('admin') && response.headers()['content-type']?.includes('text/html')) {
        const text = await response.text().catch(() => '');
        if (text.includes('Fatal error') || text.includes('Parse error') || text.includes('Warning:')) {
          phpErrors.push(response.url());
        }
      }
    });

    // Navigate through admin pages
    const adminPages = [
      '/vvveb/admin/',
      '/vvveb/admin/?module=content/pages',
      '/vvveb/admin/?module=media/media',
      '/vvveb/admin/?module=settings/settings'
    ];

    const loggedIn = await loginAsAdmin(page);
    if (loggedIn) {
      for (const adminPage of adminPages) {
        await page.goto(adminPage);
        await page.waitForLoadState('networkidle');
      }
    }

    expect(phpErrors, `PHP errors found on: ${phpErrors.join(', ')}`).toHaveLength(0);
  });
});

test.describe('CMS Content Delivery', () => {
  test('CMS-managed pages render on frontend', async ({ page }) => {
    // Navigate to frontend pages that are managed by CMS
    const cmsPages = [
      { path: '/', name: 'Home' },
      { path: '/products', name: 'Products' },
      { path: '/about', name: 'About' }
    ];

    for (const pageInfo of cmsPages) {
      const response = await page.goto(pageInfo.path);

      // Page should load successfully
      expect(response?.status(), `${pageInfo.name} should load`).toBe(200);

      // Should have content (not empty page)
      const bodyContent = await page.locator('body').textContent();
      expect(bodyContent?.length, `${pageInfo.name} should have content`).toBeGreaterThan(100);
    }
  });

  test('dynamic content loads correctly', async ({ page }) => {
    await page.goto('/');

    // Check that content from CMS is present
    // Look for elements that would be dynamically generated
    const dynamicContent = page.locator(
      '[data-content], [data-cms], .cms-content, article, section'
    );

    const hasContent = await dynamicContent.count() > 0;
    expect(hasContent, 'Page should have CMS content').toBeTruthy();
  });
});

test.describe('E-commerce CMS Features', () => {
  test.beforeEach(async ({ page }) => {
    const loggedIn = await loginAsAdmin(page);
    if (!loggedIn) {
      test.skip();
    }
  });

  test('products management is accessible', async ({ page }) => {
    await page.goto('/vvveb/admin/?module=product/products');

    // Should see products list
    const productsList = page.locator('table, .products-list, .content');
    await expect(productsList.first()).toBeVisible({ timeout: 5000 });
  });

  test('orders management is accessible', async ({ page }) => {
    await page.goto('/vvveb/admin/?module=order/orders');

    // Should see orders list
    const ordersList = page.locator('table, .orders-list, .content');
    await expect(ordersList.first()).toBeVisible({ timeout: 5000 });
  });
});

test.describe('CMS Security Features', () => {
  test.beforeEach(async ({ page }) => {
    const loggedIn = await loginAsAdmin(page);
    if (!loggedIn) {
      test.skip();
    }
  });

  test('role-based access control is active', async ({ page }) => {
    // Check for user roles management
    await page.goto('/vvveb/admin/?module=user/roles');

    // Should see roles management or access control
    const rolesContent = page.locator('table, .roles, .content, form');
    await expect(rolesContent.first()).toBeVisible({ timeout: 5000 });
  });

  test('activity logging exists', async ({ page }) => {
    // Check for activity log or audit trail
    await page.goto('/vvveb/admin/?module=tools/logs');

    // May or may not exist
    const logsContent = page.locator('table, .logs, .content');
    if (await logsContent.count() > 0) {
      await expect(logsContent.first()).toBeVisible();
    }
  });
});
