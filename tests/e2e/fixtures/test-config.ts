/**
 * Test Configuration and Fixtures
 *
 * Update these values to match your environment
 */

export const testConfig = {
  // Base URL for the application
  baseUrl: process.env.BASE_URL || 'http://localhost:8080',

  // Admin credentials
  admin: {
    username: process.env.ADMIN_USERNAME || 'admin',
    password: process.env.ADMIN_PASSWORD || 'admin',
    email: process.env.ADMIN_EMAIL || 'admin@example.com'
  },

  // URLs
  urls: {
    admin: '/vvveb/admin/',
    adminLogin: '/vvveb/admin/?module=user/login',
    pages: '/vvveb/admin/?module=content/pages',
    posts: '/vvveb/admin/?module=content/posts',
    media: '/vvveb/admin/?module=media/media',
    settings: '/vvveb/admin/?module=settings/settings',
    users: '/vvveb/admin/?module=user/users',
    products: '/vvveb/admin/?module=product/products',
    orders: '/vvveb/admin/?module=order/orders',
    editor: '/vvveb/admin/?module=editor/editor'
  },

  // Frontend pages to test
  frontendPages: [
    { path: '/', name: 'Home', title: 'TWG' },
    { path: '/products', name: 'Products', title: 'Products' },
    { path: '/about', name: 'About', title: 'About' },
    { path: '/manufacturing', name: 'Manufacturing', title: 'Manufacturing' },
    { path: '/sustainability', name: 'Sustainability', title: 'Sustainability' },
    { path: '/contact', name: 'Contact', title: 'Contact' }
  ],

  // Timeouts
  timeouts: {
    page: 30000,
    element: 5000,
    network: 10000
  }
};

export default testConfig;
