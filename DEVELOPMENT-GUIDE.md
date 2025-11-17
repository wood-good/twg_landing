# TWG Landing - Development Guide

Complete guide for developers working on the TWG landing page project.

---

## 📋 Table of Contents

1. [Getting Started](#getting-started)
2. [Project Architecture](#project-architecture)
3. [Development Workflow](#development-workflow)
4. [Code Standards](#code-standards)
5. [Component Library](#component-library)
6. [Adding New Pages](#adding-new-pages)
7. [Working with Videos](#working-with-videos)
8. [CMS Integration](#cms-integration)
9. [Testing](#testing)
10. [Troubleshooting](#troubleshooting)

---

## 🚀 Getting Started

### Prerequisites

```bash
# Required
- Docker Desktop 20.10+
- Git 2.30+
- Modern terminal (bash/zsh)

# Optional but recommended
- VSCode with extensions:
  - PHP Intelephense
  - ESLint
  - Prettier
  - Live Server
```

### First-Time Setup

```bash
# 1. Clone repository
git clone <repository-url>
cd twg_landing

# 2. Start Docker environment
./start-dev.sh

# 3. Verify services running
docker-compose ps

# Should show:
# - twg_nginx (port 8080)
# - twg_php
# - twg_mysql (port 3307)
# - twg_phpmyadmin (port 8081)

# 4. Access site
open http://localhost:8080

# 5. Access CMS (optional)
open http://localhost:8080/cms/admin/
# Login: admin / admin123
```

### Daily Development

```bash
# Start
./start-dev.sh

# Stop
./stop-dev.sh

# View logs
docker-compose logs -f

# Restart specific service
docker-compose restart twg_nginx
```

---

## 🏗️ Project Architecture

### Directory Structure

```
twg_landing/
├── public/              # Web root - NEVER commit sensitive data here
│   ├── *.php           # Page files
│   ├── assets/         # Static assets
│   ├── components/     # Reusable PHP includes
│   ├── api/            # Backend endpoints
│   └── cms/            # Vvveb CMS (gitignored)
│
├── docker/             # Docker configuration
│   ├── nginx/
│   │   └── default.conf    # Nginx routing rules
│   ├── php/
│   │   └── Dockerfile      # PHP-FPM image
│   └── mysql/
│       └── init.sql        # Database initialization
│
├── copywriting/        # Content library (original copy)
├── raw-videos/         # Source videos (pre-optimization)
└── docs/              # Project documentation
```

### Technology Stack

**Frontend:**
- HTML5 (semantic markup)
- CSS3 (custom properties, no preprocessor)
- Vanilla JavaScript (ES5 for compatibility)

**Backend:**
- PHP 8.1-FPM
- Nginx 1.21
- MySQL 8.0

**Tooling:**
- Docker Compose (orchestration)
- ffmpeg (video optimization)
- Git (version control)

---

## 🔄 Development Workflow

### Adding a New Feature

```bash
# 1. Create feature branch
git checkout -b feature/new-feature-name

# 2. Make changes
# - Edit files in public/
# - Add CSS to public/assets/css/
# - Add JS to public/assets/js/

# 3. Test locally
open http://localhost:8080

# 4. Commit changes
git add .
git commit -m "Add new feature: description"

# 5. Push to remote
git push origin feature/new-feature-name

# 6. Create pull request
```

### File Naming Conventions

```
CSS Files:
- design-system.css        (core design tokens)
- components.css           (shared components)
- [page-name].css          (page-specific styles)
- premium-enhancements.css (premium design system)

JS Files:
- [component-name].js      (e.g., header.js, portfolio.js)
- premium-interactions.js  (scroll reveals, animations)

PHP Files:
- [page-name].php          (e.g., index.php, philosophy.php)
- components/[name].php    (e.g., components/footer.php)
```

---

## 📏 Code Standards

### HTML

```html
<!-- ✅ Good: Semantic, accessible -->
<section class="story-section section-padding-premium">
  <div class="story-content">
    <h2 class="headline-section">Headline</h2>
    <p class="text-lead">Lead paragraph</p>
  </div>
</section>

<!-- ❌ Bad: Divitis, no semantics -->
<div class="section">
  <div class="content">
    <div class="title">Headline</div>
    <div class="text">Lead paragraph</div>
  </div>
</div>
```

**Rules:**
- Use semantic HTML5 elements (`<section>`, `<article>`, `<nav>`)
- Include alt text on all images
- Add ARIA labels to interactive elements
- Use proper heading hierarchy (h1 → h2 → h3)

### CSS

```css
/* ✅ Good: Custom properties, clear naming */
.story-section {
  padding: var(--space-section-premium);
  display: grid;
  gap: var(--space-6xl);
}

.story-section--image-left .story-image {
  order: 1;
}

/* ❌ Bad: Magic numbers, unclear names */
.section {
  padding: 200px;
  display: grid;
  gap: 128px;
}

.left .img {
  order: 1;
}
```

**Rules:**
- Use CSS custom properties for values
- BEM-inspired naming (block__element--modifier)
- Mobile-first media queries
- Group related properties

### JavaScript

```javascript
// ✅ Good: Clear, documented, ES5
/**
 * Reveal elements on scroll using Intersection Observer
 */
(function() {
  'use strict';

  const revealElements = document.querySelectorAll('.reveal-fade-up');

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.15 });

  revealElements.forEach(function(element) {
    observer.observe(element);
  });
})();

// ❌ Bad: No IIFE, ES6 without transpilation
const revealElements = document.querySelectorAll('.reveal-fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
});
```

**Rules:**
- Wrap in IIFE for encapsulation
- Use 'use strict'
- ES5 syntax for broad compatibility
- Add JSDoc comments for functions
- Use `var` or `const/let` (no mixing)

### PHP

```php
<?php
// ✅ Good: Secure, validated
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

$name = sanitize_input($_POST['name']);

// ❌ Bad: Direct use of user input
$name = $_POST['name'];
echo $name; // XSS vulnerability!
```

**Rules:**
- Always sanitize user input
- Use prepared statements for SQL
- Validate on client AND server
- Follow PSR-12 coding standards

---

## 🧩 Component Library

### Typography Classes

```html
<!-- Headlines -->
<h1 class="headline-hero">Hero Headline</h1>
<h2 class="headline-statement">Statement Headline</h2>
<h2 class="headline-section">Section Headline</h2>

<!-- Body Text -->
<p class="text-lead">Lead paragraph - larger, attention-grabbing</p>
<p class="text-body-premium">Standard body copy</p>

<!-- Metadata -->
<p class="metadata">
  <span>Category</span>
  <span class="metadata-separator"></span>
  <span>Detail</span>
</p>

<!-- Quotes -->
<blockquote class="quote-premium">
  <p class="quote-text">"Quote content"</p>
  <footer class="quote-attribution">— Source</footer>
</blockquote>
```

### Layout Components

```html
<!-- Asymmetrical Story Section -->
<section class="story-section story-section--image-left section-padding-premium">
  <div class="story-image reveal-fade-up">
    <div class="aspect-portrait">
      <img src="..." alt="...">
    </div>
  </div>

  <div class="story-content stagger-children">
    <p class="metadata">...</p>
    <h2 class="headline-section">...</h2>
    <p class="text-lead">...</p>
    <p class="text-body-premium">...</p>
    <a href="..." class="btn-premium">...</a>
  </div>
</section>

<!-- Card Component -->
<div class="card-premium">
  <div class="card-header">
    <p class="card-subtitle">Subtitle</p>
    <h3 class="card-title">Title</h3>
  </div>
  <p class="text-body-premium">Content</p>
  <a href="..." class="link-premium">Link</a>
</div>
```

### Interactive Elements

```html
<!-- Primary Button -->
<a href="..." class="btn-premium">Button Text</a>

<!-- Secondary Button (text link) -->
<a href="..." class="btn-text">Link Text →</a>

<!-- Inline Link -->
<a href="..." class="link-premium">link text</a>

<!-- Scroll Reveal -->
<div class="reveal-fade-up">
  <!-- Fades up when scrolled into view -->
</div>

<!-- Staggered Children -->
<div class="stagger-children">
  <h2>First</h2>   <!-- 0ms delay -->
  <p>Second</p>    <!-- 100ms delay -->
  <p>Third</p>     <!-- 200ms delay -->
</div>
```

---

## 📄 Adding New Pages

### 1. Create Page File

```php
<!-- public/new-page.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - The Wood and Good</title>
    <meta name="description" content="Page description">

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">

    <!-- Styles -->
    <link rel="stylesheet" href="/assets/css/design-system.css">
    <link rel="stylesheet" href="/assets/css/components.css">
    <link rel="stylesheet" href="/assets/css/premium-enhancements.css">
    <link rel="stylesheet" href="/assets/css/new-page.css">
</head>
<body>
    <!-- Header -->
    <?php include 'components/header.php'; ?>

    <!-- Page Content -->
    <main>
        <!-- Your content here -->
    </main>

    <!-- Footer -->
    <?php include 'components/footer.php'; ?>

    <!-- Scripts -->
    <script src="/assets/js/premium-interactions.js" defer></script>
    <script src="/assets/js/new-page.js" defer></script>
</body>
</html>
```

### 2. Create Page-Specific CSS

```css
/* public/assets/css/new-page.css */

/**
 * New Page Styles
 */

.new-page-section {
  padding: var(--space-section-premium);
}

/* Mobile first */
@media (min-width: 768px) {
  /* Tablet styles */
}

@media (min-width: 1024px) {
  /* Desktop styles */
}
```

### 3. Create Page-Specific JS (if needed)

```javascript
/* public/assets/js/new-page.js */

(function() {
  'use strict';

  // Page-specific functionality

})();
```

### 4. Add to Navigation

```php
<!-- components/header.php -->
<nav class="main-nav">
  <ul class="nav-list">
    <!-- ... existing links ... -->
    <li><a href="/new-page.php" class="nav-link">New Page</a></li>
  </ul>
</nav>
```

---

## 🎬 Working with Videos

### Adding New Videos

```bash
# 1. Place raw video in raw-videos/
cp ~/Downloads/my-video.mp4 raw-videos/my-video-raw.mp4

# 2. Edit optimize-videos.sh to include new video
# Add section for your video

# 3. Run optimization
./optimize-videos.sh

# 4. Video placed in public/assets/videos/
# Poster image in public/assets/images/posters/
```

### Video Optimization Guidelines

```bash
# Target specifications:
- Resolution: 1920x1080 (or 1080x1920 for portrait)
- Codec: H.264 (broad compatibility)
- CRF: 28-30 (balance quality/size)
- Frame rate: 25-30fps
- Audio: Remove (muted anyway)
- File size: <5MB ideal, <10MB maximum
```

### Using Videos in Pages

```html
<section class="video-section">
  <video
    id="myVideo"
    autoplay
    muted
    loop
    playsinline
    poster="/assets/images/posters/my-video-poster.jpg"
  >
    <source src="/assets/videos/my-video.mp4" type="video/mp4">
  </video>
</section>
```

**Best Practices:**
- Always include poster image
- Use `playsinline` for mobile
- Implement lazy loading (see hero-video.js)
- Pause when out of viewport

---

## 🎨 CMS Integration

### Vvveb CMS Overview

- **URL**: http://localhost:8080/cms/admin/
- **Login**: admin / admin123
- **Purpose**: Visual page builder for client

### Current Integration Strategy

**Hybrid Approach:**
1. **TWG Pages** (custom-built) - index.php, philosophy.php, etc.
2. **CMS Pages** (Vvveb-managed) - Blog, news, etc.

**Why Hybrid?**
- TWG pages: Full control, premium design, performance
- CMS pages: Client can edit without developer

### Editing CMS Settings

```php
// public/cms/config/config.php
define('DB_HOST', 'twg_mysql');
define('DB_NAME', 'vvveb');
define('DB_USER', 'root');
define('DB_PASS', 'root_password');
```

### Resetting CMS Password

```bash
docker exec twg_php php -r "echo password_hash('newpassword', PASSWORD_DEFAULT);"
# Copy hash

docker exec twg_mysql mysql -uroot -proot_password -e \
  "UPDATE vvveb.admin SET password = 'PASTE_HASH_HERE' WHERE admin_id = 1;"
```

---

## 🧪 Testing

### Manual Testing Checklist

```markdown
## Desktop Testing
- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)

## Mobile Testing
- [ ] iOS Safari (iPhone)
- [ ] Chrome Android
- [ ] Responsive (resize browser)

## Functionality
- [ ] All links work
- [ ] Forms submit successfully
- [ ] Videos play/pause correctly
- [ ] Lightbox opens/closes
- [ ] Animations smooth (60fps)
- [ ] No console errors

## Accessibility
- [ ] Keyboard navigation works
- [ ] Screen reader compatible
- [ ] Sufficient color contrast
- [ ] Respects prefers-reduced-motion

## Performance
- [ ] Page load <3 seconds
- [ ] Images lazy-load
- [ ] Videos don't autoplay on mobile
- [ ] No layout shifts
```

### Performance Testing

```bash
# Using Chrome DevTools
1. Open DevTools → Lighthouse
2. Run audit (Mobile + Desktop)
3. Target scores:
   - Performance: >85
   - Accessibility: >95
   - Best Practices: >90
   - SEO: >90
```

### Cross-Browser Testing

```bash
# Local testing
- Chrome: Default browser
- Safari: Built-in macOS
- Firefox: Download from Mozilla

# Online testing
- BrowserStack (paid)
- LambdaTest (paid)
- Responsive Design Mode (Chrome DevTools)
```

---

## 🐛 Troubleshooting

### Docker Issues

```bash
# Services won't start
docker-compose down
docker-compose up -d

# Port already in use
lsof -ti:8080 | xargs kill -9
./start-dev.sh

# Database connection failed
docker-compose restart twg_mysql
# Wait 10 seconds, then restart PHP
docker-compose restart twg_php

# View logs
docker-compose logs twg_nginx
docker-compose logs twg_php
docker-compose logs twg_mysql
```

### Video Issues

```bash
# Video won't play
- Check console for errors
- Verify file exists: ls public/assets/videos/
- Check file size: du -h public/assets/videos/video.mp4
- Test direct access: http://localhost:8080/assets/videos/video.mp4

# Video too large
- Re-optimize with higher CRF: -crf 32
- Reduce resolution: scale=1280:720
- Trim duration: -t 10 (10 seconds)
```

### CSS/JS Not Loading

```bash
# Hard refresh
Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

# Check file path
- Verify file exists: ls public/assets/css/file.css
- Check <link> tag in HTML
- Look for typos in filename

# Cache issue
- Clear browser cache
- Use incognito/private window
```

### Form Submission Issues

```bash
# Check PHP logs
docker-compose logs twg_php | grep -i error

# Test API endpoint directly
curl -X POST http://localhost:8080/api/contact-submit.php \
  -d "name=Test&email=test@example.com"

# Common issues:
- CSRF token mismatch
- Missing required fields
- Email function not configured
```

---

## 📊 Performance Optimization

### Image Optimization

```bash
# Install tools
brew install imagemagick
brew install cwebp

# Optimize JPEG
convert input.jpg -strip -quality 85 -sampling-factor 4:2:0 output.jpg

# Create WebP
cwebp -q 80 input.jpg -o output.webp

# Responsive images
convert input.jpg -resize 400x output-400.jpg
convert input.jpg -resize 800x output-800.jpg
convert input.jpg -resize 1200x output-1200.jpg
```

### CSS Optimization

```bash
# Minify CSS (production)
npx clean-css-cli -o public/assets/css/min.css public/assets/css/*.css

# Remove unused CSS
npx purgecss --css public/assets/css/*.css --content public/*.php
```

### JavaScript Optimization

```bash
# Minify JS (production)
npx terser public/assets/js/script.js -o public/assets/js/script.min.js

# Bundle multiple files
cat file1.js file2.js > bundle.js
npx terser bundle.js -o bundle.min.js
```

---

## 🔐 Security Best Practices

### Input Validation

```php
// Always sanitize user input
$email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die('Invalid email');
}

// Use prepared statements
$stmt = $pdo->prepare("SELECT * FROM users WHERE email = :email");
$stmt->execute(['email' => $email]);
```

### File Upload Security

```php
// Validate file type
$allowed = ['image/jpeg', 'image/png', 'image/webp'];
if (!in_array($_FILES['file']['type'], $allowed)) {
    die('Invalid file type');
}

// Validate file size (5MB max)
if ($_FILES['file']['size'] > 5 * 1024 * 1024) {
    die('File too large');
}

// Generate random filename
$ext = pathinfo($_FILES['file']['name'], PATHINFO_EXTENSION);
$filename = uniqid() . '.' . $ext;
```

### Environment Variables

```bash
# Never commit sensitive data
# Use .env file (add to .gitignore)

# .env
DB_PASSWORD=secure_password_here
SMTP_PASSWORD=email_password_here
API_KEY=secret_key_here

# Load in PHP
$db_pass = getenv('DB_PASSWORD');
```

---

## 📚 Additional Resources

### Documentation
- [README.md](README.md) - Project overview
- [PREMIUM-DESIGN-PRINCIPLES.md](PREMIUM-DESIGN-PRINCIPLES.md) - Design system
- [PREMIUM-IMPLEMENTATION-GUIDE.md](PREMIUM-IMPLEMENTATION-GUIDE.md) - Implementation guide

### External Resources
- [MDN Web Docs](https://developer.mozilla.org/) - Web standards reference
- [PHP Manual](https://www.php.net/manual/) - PHP documentation
- [Docker Docs](https://docs.docker.com/) - Docker reference
- [Nginx Docs](https://nginx.org/en/docs/) - Nginx configuration

---

**Happy Coding! 🌲**
