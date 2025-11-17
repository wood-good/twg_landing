# Technical Architecture Document
## B2B Luxury Table Maker Website

**Project:** Artisan Table Maker - B2B Brand Experience
**Version:** 1.0
**Date:** 2025-11-14
**Author:** BMad Builder (Technical Architecture) + Council
**Status:** Approved for Implementation

---

## Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [System Architecture](#system-architecture)
3. [Infrastructure](#infrastructure)
4. [Application Layer](#application-layer)
5. [Data Layer](#data-layer)
6. [Frontend Architecture](#frontend-architecture)
7. [Content Management](#content-management)
8. [Security Architecture](#security-architecture)
9. [Performance Optimization](#performance-optimization)
10. [Deployment Strategy](#deployment-strategy)
11. [Monitoring & Maintenance](#monitoring--maintenance)
12. [Scalability Considerations](#scalability-considerations)

---

## Architecture Overview

### Design Principles
1. **Simplicity First:** No over-engineering; appropriate technology for scale
2. **Performance Focused:** Fast loading despite rich media (video/images)
3. **Client Empowerment:** Non-technical content management
4. **Cost Effective:** Sustainable hosting costs for small business
5. **Reusability:** Template-based approach for E's future clients
6. **Maintainability:** Clear separation of concerns, documented code

### Technology Philosophy
- **Proven over cutting-edge:** Stable, well-documented technologies
- **Static where possible:** Minimize dynamic generation overhead
- **CDN-first delivery:** Cloudflare handles global distribution
- **Progressive enhancement:** Core functionality works without JavaScript
- **Mobile-first responsive:** Design for constraints, enhance for capabilities

---

## System Architecture

### High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────┐
│                    USER DEVICES                          │
│  Mobile (iOS/Android) | Tablet | Desktop (Mac/Win)      │
└──────────────────┬──────────────────────────────────────┘
                   │
                   │ HTTPS
                   ▼
┌─────────────────────────────────────────────────────────┐
│                  CLOUDFLARE CDN                          │
│  ┌──────────┬──────────┬──────────┬─────────────────┐   │
│  │   SSL    │  Cache   │  DDoS    │  Image/Video    │   │
│  │  Termination       Protection   Optimization       │   │
│  └──────────┴──────────┴──────────┴─────────────────┘   │
└──────────────────┬──────────────────────────────────────┘
                   │
                   │ Origin Server Request
                   ▼
┌─────────────────────────────────────────────────────────┐
│              HETZNER VPS (CX21)                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │              NGINX Web Server                     │   │
│  │  ┌────────────────┬──────────────────────────┐   │   │
│  │  │  Static Assets │   PHP-FPM (VVVeb CMS)    │   │   │
│  │  │  (HTML/CSS/JS) │   ┌──────────────────┐   │   │   │
│  │  │                │   │  Application     │   │   │   │
│  │  │                │   │  Logic           │   │   │   │
│  │  │                │   └────────┬─────────┘   │   │   │
│  │  └────────────────┴────────────┼─────────────┘   │   │
│  └───────────────────────────────┼─────────────────┘   │
│                                   │                      │
│  ┌────────────────────────────────▼─────────────────┐   │
│  │            MySQL 8.0 Database                     │   │
│  │  ┌──────────────┬──────────────┬──────────────┐  │   │
│  │  │   Pages      │   Media      │   Settings   │  │   │
│  │  └──────────────┴──────────────┴──────────────┘  │   │
│  └──────────────────────────────────────────────────┘   │
│                                                          │
│  ┌──────────────────────────────────────────────────┐   │
│  │         File System (Media Storage)               │   │
│  │  /var/www/vvveb/media/                            │   │
│  │    ├── videos/                                    │   │
│  │    ├── images/                                    │   │
│  │    └── uploads/                                   │   │
│  └──────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────┘
```

### Request Flow

**1. Initial Page Load:**
```
User → Cloudflare CDN → Check Cache
                       ↓
                  Cache HIT: Serve from edge
                       ↓
                  Cache MISS:
                       ↓
                  Hetzner VPS → Nginx → PHP-FPM (VVVeb)
                       ↓
                  MySQL (fetch page data)
                       ↓
                  Render HTML
                       ↓
                  Return to Cloudflare
                       ↓
                  Cache at edge
                       ↓
                  Serve to user
```

**2. Static Asset Delivery:**
```
User requests image/video
     ↓
Cloudflare CDN (cached)
     ↓
Serve from nearest edge location
(No origin server hit if cached)
```

**3. Form Submission:**
```
User submits contact form
     ↓
Cloudflare (passes through, no cache)
     ↓
Nginx → PHP-FPM (VVVeb form handler)
     ↓
Validate & sanitize input
     ↓
Send email notification (SMTP)
     ↓
Store submission (optional, MySQL)
     ↓
Return success response
```

---

## Infrastructure

### Hosting Provider: Hetzner
**VPS Specification: CX21**
- **CPU:** 2 vCPU (AMD EPYC or Intel Xeon)
- **RAM:** 4 GB
- **Storage:** 40 GB SSD
- **Network:** 20 TB traffic/month
- **Location:** Falkenstein, Germany (EU datacenter, GDPR-compliant)
- **Cost:** €5.83/month
- **IPv4:** 1 included
- **IPv6:** /64 subnet included

**Why Hetzner:**
- ✅ Cost-effective European hosting
- ✅ Excellent performance-to-price ratio
- ✅ GDPR-compliant (EU data residency)
- ✅ Reliable uptime (>99.9%)
- ✅ Strong community support
- ✅ Easy scalability (upgrade instance anytime)

**Alternative Considered:**
- DigitalOcean ($6/month, similar specs) - Rejected: More expensive, US-based
- Shared hosting ($3-5/month) - Rejected: Limited control, poor video performance
- Cloudflare Workers/Pages - Rejected: No PHP/MySQL support (VVVeb requirement)

---

### CDN: Cloudflare (Free Tier)
**Features Used:**
- Global CDN with 300+ edge locations
- SSL/TLS encryption (Universal SSL)
- DDoS protection (unmetered)
- Image optimization (Polish: Lossless mode)
- Video optimization (automatic transcoding)
- Caching rules & page rules (3 free rules)
- Analytics (basic traffic stats)
- DNS management

**Configuration:**
```yaml
SSL/TLS Mode: Full (Strict)
Auto HTTPS Rewrites: Enabled
Minimum TLS Version: 1.2
Brotli Compression: Enabled
Auto Minify: CSS, JS, HTML
Browser Cache TTL: 1 year (static assets)
Edge Cache TTL: 2 hours (HTML pages)
Always Online: Enabled (serves cached version if origin down)
```

**Page Rules:**
```
Rule 1: *.jpg, *.png, *.mp4, *.css, *.js
  - Cache Level: Cache Everything
  - Edge Cache TTL: 1 month
  - Browser Cache TTL: 1 year

Rule 2: /admin/*
  - Cache Level: Bypass
  - Security Level: High

Rule 3: /*
  - Cache Level: Standard
  - Edge Cache TTL: 2 hours
```

---

### Domain & DNS
**Requirements:**
- Client provides domain (e.g., studiocraftname.com)
- DNS managed through Cloudflare
- Subdomain for staging: staging.studiocraftname.com

**DNS Records:**
```
A     @              <Hetzner VPS IP>   (Proxied through Cloudflare)
A     staging        <Hetzner VPS IP>   (Proxied through Cloudflare)
CNAME www            @                  (Proxied through Cloudflare)
MX    @              mail.provider.com  (Email, not proxied)
TXT   @              "v=spf1..."        (SPF record for email)
```

---

### Email Configuration
**For Contact Form:**
- **Option A:** SMTP via client's existing email (Gmail, Outlook, etc.)
- **Option B:** SendGrid free tier (100 emails/day)
- **Option C:** Mailgun free tier (1000 emails/month)

**Recommended:** Option A (SMTP) for simplicity

**Configuration:**
```php
// VVVeb config/email.php
[
  'smtp_host' => 'smtp.gmail.com',
  'smtp_port' => 587,
  'smtp_user' => 'studio@clientdomain.com',
  'smtp_pass' => 'app-specific-password',
  'from_email' => 'studio@clientdomain.com',
  'from_name' => 'Studio Name - Website',
  'to_email' => 'owner@clientdomain.com'
]
```

---

## Application Layer

### Web Server: Nginx 1.24+
**Why Nginx:**
- ✅ Superior static file serving (vs Apache)
- ✅ Low memory footprint
- ✅ Excellent reverse proxy for PHP-FPM
- ✅ Built-in gzip/brotli compression
- ✅ Efficient handling of concurrent connections

**Configuration Highlights:**
```nginx
# /etc/nginx/sites-available/vvveb-site.conf

server {
    listen 80;
    listen [::]:80;
    server_name clientdomain.com www.clientdomain.com;

    # Redirect HTTP to HTTPS (handled by Cloudflare)
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name clientdomain.com www.clientdomain.com;

    root /var/www/vvveb;
    index index.php index.html;

    # Large uploads for video
    client_max_body_size 100M;
    client_body_timeout 300s;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css text/xml text/javascript
               application/json application/javascript application/xml+rss;
    gzip_min_length 1000;

    # Static asset caching
    location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2|ttf|svg|mp4)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    # PHP handling
    location ~ \.php$ {
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        include fastcgi_params;

        # Timeouts for slow operations
        fastcgi_read_timeout 300;
    }

    # VVVeb admin protection
    location /admin {
        # IP whitelist (optional)
        # allow 1.2.3.4;
        # deny all;

        try_files $uri $uri/ /admin/index.php?$query_string;
    }

    # Clean URLs
    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    # Deny access to hidden files
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
```

---

### PHP: 8.1+ (PHP-FPM)
**Required Extensions:**
```bash
php8.1-fpm        # FastCGI Process Manager
php8.1-mysql      # MySQL database connector
php8.1-gd         # Image manipulation
php8.1-xml        # XML parsing
php8.1-mbstring   # Multibyte string handling
php8.1-zip        # ZIP file operations
php8.1-curl       # HTTP requests
php8.1-json       # JSON handling
php8.1-intl       # Internationalization
```

**PHP Configuration (php.ini):**
```ini
; Performance
memory_limit = 256M
max_execution_time = 300
max_input_time = 300

; File uploads (for video/images)
upload_max_filesize = 100M
post_max_size = 100M

; Security
expose_php = Off
display_errors = Off
log_errors = On
error_log = /var/log/php/error.log

; Session
session.cookie_httponly = 1
session.cookie_secure = 1
session.cookie_samesite = Strict
```

**PHP-FPM Configuration:**
```ini
; /etc/php/8.1/fpm/pool.d/www.conf
pm = dynamic
pm.max_children = 10
pm.start_servers = 2
pm.min_spare_servers = 1
pm.max_spare_servers = 3
pm.max_requests = 500
```

---

## Data Layer

### Database: MySQL 8.0
**Schema Design (VVVeb Defaults + Custom):**

```sql
-- Core VVVeb tables
vvveb_pages          # Page content and metadata
vvveb_media          # Uploaded images/videos
vvveb_settings       # Site configuration
vvveb_users          # Admin users
vvveb_components     # Custom component definitions
vvveb_templates      # Page templates

-- Custom table for contact submissions (optional)
CREATE TABLE contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    space TEXT,
    gathering TEXT,
    feeling TEXT,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    ip_address VARCHAR(45),
    user_agent TEXT,
    status ENUM('new', 'read', 'replied') DEFAULT 'new',
    INDEX idx_submitted (submitted_at),
    INDEX idx_status (status)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```

**Database Configuration:**
```ini
# /etc/mysql/mysql.conf.d/mysqld.cnf

[mysqld]
# Performance
innodb_buffer_pool_size = 1G
innodb_log_file_size = 256M
max_connections = 50

# Character set (emoji support)
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci

# Security
bind-address = 127.0.0.1  # Only localhost connections
local-infile = 0
```

**Backup Strategy:**
```bash
# Daily automated backup
0 3 * * * mysqldump -u backup_user -p'password' \
  --single-transaction \
  --quick \
  --lock-tables=false \
  vvveb_db | gzip > /backups/mysql/vvveb_$(date +\%Y\%m\%d).sql.gz

# Retain 30 days of backups
find /backups/mysql/ -name "*.sql.gz" -mtime +30 -delete
```

---

### File Storage Structure
```
/var/www/vvveb/
├── public/                  # Web-accessible root
│   ├── index.php            # Entry point
│   ├── assets/
│   │   ├── css/
│   │   │   └── style.css    # Custom styles
│   │   ├── js/
│   │   │   └── main.js      # Custom scripts
│   │   └── fonts/
│   ├── media/
│   │   ├── videos/          # Video backgrounds
│   │   │   ├── hero.mp4
│   │   │   ├── process-1.mp4
│   │   │   └── ...
│   │   ├── images/          # Portfolio & content images
│   │   │   ├── portfolio/
│   │   │   └── posters/     # Video poster images
│   │   └── uploads/         # User uploads via CMS
│   └── admin/               # VVVeb CMS interface
│
├── config/                  # Configuration files
│   ├── database.php
│   ├── email.php
│   └── settings.php
│
├── templates/               # Page templates
│   ├── home.php
│   ├── philosophy.php
│   ├── process.php
│   ├── portfolio.php
│   └── contact.php
│
├── components/              # Custom components
│   ├── video-hero.php
│   ├── video-split.php
│   ├── process-timeline.php
│   ├── portfolio-grid.php
│   └── contact-form.php
│
└── vendor/                  # Dependencies (if using Composer)
```

---

## Frontend Architecture

### HTML Structure
**Semantic HTML5:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Studio Name | Where wood finds home</title>

    <!-- SEO Meta Tags -->
    <meta name="description" content="Three generations connecting wood's energy to the homes it belongs to.">
    <meta name="keywords" content="custom tables, luxury furniture, artisan woodworking, B2B furniture">

    <!-- Open Graph -->
    <meta property="og:title" content="Studio Name">
    <meta property="og:description" content="Where wood finds home">
    <meta property="og:image" content="https://domain.com/og-image.jpg">
    <meta property="og:url" content="https://domain.com">

    <!-- Preload critical assets -->
    <link rel="preload" href="/assets/fonts/CrimsonText-Regular.woff2" as="font" crossorigin>
    <link rel="preload" href="/assets/css/style.css" as="style">

    <!-- CSS -->
    <link rel="stylesheet" href="/assets/css/style.css">

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
</head>
<body>
    <!-- Header/Navigation -->
    <header class="header">
        <a href="/" class="logo">
            <img src="/logo.svg" alt="Studio Name">
        </a>
        <nav class="nav">
            <a href="/">Home</a>
            <a href="/philosophy">Philosophy</a>
            <a href="/process">Process</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/contact">Contact</a>
        </nav>
        <button class="nav-toggle" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </header>

    <!-- Main Content -->
    <main>
        <!-- Page-specific content -->
    </main>

    <!-- Footer -->
    <footer class="footer">
        <div class="footer__content">
            <div class="footer__contact">
                <p>Studio Address</p>
                <a href="mailto:studio@domain.com">studio@domain.com</a>
            </div>
            <div class="footer__tagline">
                <p>Where wood finds home</p>
            </div>
        </div>
        <div class="footer__copyright">
            <p>&copy; 2025 Studio Name. All rights reserved.</p>
        </div>
    </footer>

    <!-- JavaScript -->
    <script src="/assets/js/main.js" defer></script>
</body>
</html>
```

---

### CSS Architecture
**Methodology:** BEM (Block Element Modifier)
**Preprocessor:** None (vanilla CSS with custom properties)

**File Structure:**
```css
/* style.css */

/* 1. Custom Properties (CSS Variables) */
:root {
    /* Colors - Oak-based palette */
    --oak-dark: #3d2817;
    --oak-medium: #6b4423;
    --oak-honey: #b8956a;
    --oak-cream: #e8dcc8;
    --almost-black: #1a1410;
    --warm-white: #faf7f0;
    --oak-amber: #d4a574;

    /* Typography */
    --font-display: 'Crimson Text', Georgia, serif;
    --font-body: 'Spectral', Georgia, serif;
    --font-ui: 'Inter', -apple-system, sans-serif;

    /* Spacing */
    --space-xs: 20px;
    --space-sm: 40px;
    --space-md: 60px;
    --space-lg: 80px;
    --space-xl: 120px;
    --space-xxl: 160px;

    /* Timing */
    --duration-fast: 400ms;
    --duration-medium: 800ms;
    --duration-slow: 1200ms;

    /* Easing */
    --ease-gentle: cubic-bezier(0.4, 0.0, 0.2, 1);
    --ease-natural: cubic-bezier(0.33, 1, 0.68, 1);
}

/* 2. Reset & Base Styles */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    font-size: 16px;
    scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
    html {
        scroll-behavior: auto;
    }
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}

body {
    font-family: var(--font-body);
    font-size: 1.125rem;
    line-height: 1.9;
    color: var(--oak-cream);
    background-color: var(--oak-dark);
}

/* 3. Typography */
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-display);
    line-height: 1.3;
    font-weight: 600;
}

h1 { font-size: clamp(42px, 6vw, 72px); }
h2 { font-size: clamp(32px, 5vw, 48px); }
h3 { font-size: clamp(24px, 4vw, 36px); }

/* 4. Components */
/* (Individual component styles follow) */

/* 5. Utilities */
.visually-hidden { /* accessibility helper */ }
.container { /* max-width wrapper */ }
.section { /* consistent section spacing */ }

/* 6. Responsive Breakpoints */
@media (max-width: 767px) { /* Mobile */ }
@media (min-width: 768px) and (max-width: 1023px) { /* Tablet */ }
@media (min-width: 1024px) { /* Desktop */ }
```

---

### JavaScript Architecture
**Approach:** Vanilla JavaScript (no frameworks)
**Principles:** Progressive enhancement, performance-focused

**File Structure:**
```javascript
// main.js

// 1. Utility Functions
const utils = {
    debounce: (func, wait) => { /* ... */ },
    throttle: (func, limit) => { /* ... */ },
    isInViewport: (element) => { /* ... */ }
};

// 2. Navigation
const navigation = {
    init() {
        this.setupMobileMenu();
        this.setupSmoothScroll();
    },

    setupMobileMenu() {
        const toggle = document.querySelector('.nav-toggle');
        const nav = document.querySelector('.nav');

        toggle.addEventListener('click', () => {
            nav.classList.toggle('nav--open');
            toggle.setAttribute('aria-expanded',
                nav.classList.contains('nav--open'));
        });
    },

    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }
};

// 3. Video Handling
const videoHandler = {
    init() {
        this.setupVideoObserver();
        this.handleMobileVideos();
    },

    setupVideoObserver() {
        // Lazy load videos when they enter viewport
        const videos = document.querySelectorAll('video[data-src]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    video.src = video.dataset.src;
                    video.load();
                    observer.unobserve(video);
                }
            });
        }, { rootMargin: '100px' });

        videos.forEach(video => observer.observe(video));
    },

    handleMobileVideos() {
        // Disable autoplay on mobile to save bandwidth
        if (window.matchMedia('(max-width: 767px)').matches) {
            document.querySelectorAll('video[autoplay]').forEach(video => {
                video.removeAttribute('autoplay');
                video.pause();
            });
        }
    }
};

// 4. Form Handling
const contactForm = {
    init() {
        const form = document.querySelector('.contact-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitForm(form);
        });
    },

    async submitForm(form) {
        const formData = new FormData(form);
        const button = form.querySelector('button[type="submit"]');

        // UI feedback
        button.disabled = true;
        button.textContent = 'Sending...';

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                this.showSuccess(form);
            } else {
                this.showError(form);
            }
        } catch (error) {
            this.showError(form);
        }
    },

    showSuccess(form) {
        form.innerHTML = `
            <div class="form-success">
                <h3>Thank you.</h3>
                <p>We'll listen and respond within 3 business days.</p>
            </div>
        `;
    },

    showError(form) {
        const button = form.querySelector('button[type="submit"]');
        button.disabled = false;
        button.textContent = 'Begin the Listening';

        const error = document.createElement('p');
        error.className = 'form-error';
        error.textContent = 'Something went wrong. Please try again or email us directly.';
        form.prepend(error);
    }
};

// 5. Scroll Animations
const scrollAnimations = {
    init() {
        const elements = document.querySelectorAll('[data-animate]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => observer.observe(el));
    }
};

// 6. Portfolio Lightbox
const lightbox = {
    init() {
        this.createLightboxHTML();
        this.setupEventListeners();
    },

    createLightboxHTML() {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <button class="lightbox__close" aria-label="Close">&times;</button>
            <button class="lightbox__prev" aria-label="Previous">&larr;</button>
            <button class="lightbox__next" aria-label="Next">&rarr;</button>
            <img class="lightbox__image" src="" alt="">
        `;
        document.body.appendChild(lightbox);
    },

    setupEventListeners() {
        // Click portfolio images to open lightbox
        // Arrow keys for navigation
        // ESC to close
        // Touch swipe for mobile
    }
};

// 7. Initialize
document.addEventListener('DOMContentLoaded', () => {
    navigation.init();
    videoHandler.init();
    contactForm.init();
    scrollAnimations.init();
    lightbox.init();
});
```

---

## Content Management

### VVVeb CMS
**Version:** Latest stable (3.x)
**Installation:**
```bash
# Clone repository
cd /var/www
git clone https://github.com/givanz/VvvebJs.git vvveb

# Set permissions
chown -R www-data:www-data vvveb
chmod -R 755 vvveb

# Database setup
mysql -u root -p
CREATE DATABASE vvveb_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'vvveb_user'@'localhost' IDENTIFIED BY 'secure_password_here';
GRANT ALL PRIVILEGES ON vvveb_db.* TO 'vvveb_user'@'localhost';
FLUSH PRIVILEGES;

# Configure VVVeb
cp config/config.sample.php config/config.php
# Edit config.php with database credentials
```

### Custom Components for VVVeb

**1. Video Hero Component**
```javascript
// components/video-hero.js
Vvveb.Components.add("video-hero", {
    name: "Video Hero Section",
    image: "icons/video-hero.svg",
    html: `
        <section class="hero-video" data-component="video-hero">
            <video class="hero-video__bg" autoplay muted loop playsinline>
                <source src="/media/videos/hero.mp4" type="video/mp4">
            </video>
            <div class="hero-video__overlay">
                <h1 class="hero-video__title" contenteditable="true">
                    Wood carries energy.<br>
                    Homes carry stories.<br>
                    We connect them.
                </h1>
            </div>
        </section>
    `,
    properties: [{
        key: "video_source",
        inputtype: "FileInput",
        label: "Video File",
        data: {
            folder: "/media/videos/"
        }
    }, {
        key: "poster_image",
        inputtype: "FileInput",
        label: "Poster Image (Mobile)",
        data: {
            folder: "/media/images/posters/"
        }
    }]
});
```

**2. Portfolio Grid Component**
```javascript
// components/portfolio-grid.js
Vvveb.Components.add("portfolio-grid", {
    name: "Portfolio Grid",
    image: "icons/grid.svg",
    html: `
        <section class="portfolio-grid" data-component="portfolio-grid">
            <div class="portfolio-grid__item">
                <img src="/media/images/portfolio/project-1.jpg" alt="Project description">
                <p class="portfolio-grid__caption" contenteditable="true">
                    A gathering place in Amsterdam, 2023
                </p>
            </div>
            <!-- More items... -->
        </section>
    `,
    properties: [{
        key: "columns",
        inputtype: "SelectInput",
        label: "Columns",
        data: {
            options: [
                { value: "1", text: "1 Column" },
                { value: "2", text: "2 Columns" },
                { value: "3", text: "3 Columns" }
            ]
        }
    }, {
        key: "gap",
        inputtype: "RangeInput",
        label: "Gap Size",
        data: {
            min: 20,
            max: 120,
            step: 20,
            unit: "px"
        }
    }]
});
```

### Admin Access
**URL:** https://clientdomain.com/admin
**Default Credentials:** (Set during installation)
**User Roles:**
- Admin: Full access (E initially, then client)
- Editor: Content editing only
- Viewer: Read-only

**Admin Panel Features:**
- Page editor (WYSIWYG)
- Media manager (upload/organize images/videos)
- Settings (site title, contact info, SEO)
- User management
- Backup/export tools

---

## Security Architecture

### Server Hardening
```bash
# 1. Update system packages
apt update && apt upgrade -y

# 2. Configure UFW firewall
ufw default deny incoming
ufw default allow outgoing
ufw allow 22/tcp    # SSH
ufw allow 80/tcp    # HTTP
ufw allow 443/tcp   # HTTPS
ufw enable

# 3. Install fail2ban (brute force protection)
apt install fail2ban -y
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local

# Configure fail2ban for SSH and Nginx
# /etc/fail2ban/jail.local
[sshd]
enabled = true
maxretry = 3
bantime = 3600

[nginx-http-auth]
enabled = true

# 4. SSH hardening
# /etc/ssh/sshd_config
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
Port 22  # Consider changing to non-standard port

# 5. Automatic security updates
apt install unattended-upgrades -y
dpkg-reconfigure --priority=low unattended-upgrades
```

### Application Security

**1. Input Validation & Sanitization**
```php
// Form handler
function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

// Email validation
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die('Invalid email format');
}
```

**2. SQL Injection Prevention**
```php
// Always use prepared statements
$stmt = $pdo->prepare("INSERT INTO contact_submissions (name, email, message) VALUES (?, ?, ?)");
$stmt->execute([$name, $email, $message]);
```

**3. XSS Protection**
```php
// Escape output
echo htmlspecialchars($user_input, ENT_QUOTES, 'UTF-8');
```

**4. CSRF Protection**
```php
// Generate token
$_SESSION['csrf_token'] = bin2hex(random_bytes(32));

// Validate token
if (!hash_equals($_SESSION['csrf_token'], $_POST['csrf_token'])) {
    die('CSRF token validation failed');
}
```

**5. Honeypot Spam Prevention**
```html
<!-- Contact form -->
<input type="text" name="website" value="" style="display:none;" tabindex="-1" autocomplete="off">

<!-- Server-side check -->
if (!empty($_POST['website'])) {
    // Bot detected, silently reject
    http_response_code(200);
    exit;
}
```

### SSL/TLS Configuration
**Cloudflare handles SSL termination**
- TLS 1.2+ only
- Strong cipher suites
- HSTS enabled
- Certificate auto-renewal

---

## Performance Optimization

### Image Optimization
**Strategy:**
1. Use WebP format with JPEG fallback
2. Responsive images (`srcset`)
3. Lazy loading (native or JavaScript)
4. Compression (80-85% quality)

**Implementation:**
```html
<picture>
    <source type="image/webp" srcset="image.webp">
    <img src="image.jpg" alt="Description" loading="lazy">
</picture>
```

**Tools:**
- Cloudflare Polish (automatic optimization)
- ImageMagick for manual optimization:
```bash
convert input.jpg -quality 85 -strip output.jpg
convert input.jpg -quality 85 output.webp
```

### Video Optimization
**Compression Settings:**
```bash
ffmpeg -i input.mp4 \
    -vcodec h264 \
    -acodec aac \
    -vf "scale=1920:1080" \
    -b:v 2M \
    -maxrate 2M \
    -bufsize 4M \
    -movflags +faststart \
    output-optimized.mp4
```

**Delivery Strategy:**
- Desktop: Full video (MP4, 2-3 Mbps)
- Mobile: Poster image only (JPEG, <200KB)
- Lazy load: Videos load when entering viewport
- CDN delivery: Cloudflare caches and serves globally

### Caching Strategy

**1. Browser Caching (via Nginx):**
```nginx
location ~* \.(jpg|jpeg|png|gif|ico|css|js|woff|woff2|ttf|svg|mp4)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
}
```

**2. Cloudflare Edge Caching:**
- Static assets: 1 month edge cache
- HTML pages: 2 hours edge cache
- Admin panel: No caching

**3. PHP OpCache:**
```ini
; /etc/php/8.1/fpm/conf.d/10-opcache.ini
opcache.enable=1
opcache.memory_consumption=128
opcache.max_accelerated_files=10000
opcache.revalidate_freq=60
```

### Database Optimization
- Index frequently queried columns
- Use connection pooling (PHP-FPM)
- Regular OPTIMIZE TABLE maintenance
- Query result caching where appropriate

### Monitoring Performance
**Tools:**
- Google PageSpeed Insights (monthly check)
- Chrome DevTools (Lighthouse)
- Cloudflare Analytics (traffic patterns)
- Server monitoring (htop, iotop)

**Target Metrics:**
- Time to First Byte (TTFB): <600ms
- First Contentful Paint (FCP): <1.8s
- Largest Contentful Paint (LCP): <2.5s
- Time to Interactive (TTI): <3.8s
- Cumulative Layout Shift (CLS): <0.1

---

## Deployment Strategy

### Environments

**1. Local Development (E's machine)**
- MAMP/XAMPP or Docker
- Git repository initialized
- Test locally before pushing

**2. Staging (staging.clientdomain.com)**
- Subdomain on production server
- Identical to production environment
- Client review and testing
- Password protected (HTTP auth)

**3. Production (clientdomain.com)**
- Live site
- Deployed only after staging approval

### Deployment Process

**Initial Setup:**
```bash
# 1. On local machine
git init
git add .
git commit -m "Initial commit"
git remote add origin git@github.com:username/client-project.git
git push -u origin main

# 2. On server (staging)
cd /var/www/staging
git clone git@github.com:username/client-project.git .

# 3. Configure staging environment
cp config/config.sample.php config/config.php
# Edit database credentials for staging DB

# 4. Import database
mysql -u staging_user -p staging_db < database/schema.sql

# 5. Set permissions
chown -R www-data:www-data /var/www/staging
chmod -R 755 /var/www/staging
```

**Ongoing Deployments:**
```bash
# Local changes
git add .
git commit -m "Feature: Add new portfolio item"
git push origin main

# Deploy to staging
ssh user@server
cd /var/www/staging
git pull origin main
# Test on staging.clientdomain.com

# Deploy to production (after approval)
cd /var/www/production
git pull origin main
# Clear cache if needed
```

### Rollback Procedure
```bash
# View commit history
git log --oneline

# Rollback to specific commit
git checkout [commit-hash]

# Or rollback to previous commit
git reset --hard HEAD~1
```

---

## Monitoring & Maintenance

### Automated Backups

**1. Database Backups:**
```bash
#!/bin/bash
# /root/scripts/backup-db.sh

DATE=$(date +%Y%m%d)
BACKUP_DIR="/backups/mysql"
DB_NAME="vvveb_db"
DB_USER="backup_user"
DB_PASS="password"

# Create backup
mysqldump -u $DB_USER -p$DB_PASS \
    --single-transaction \
    --quick \
    --lock-tables=false \
    $DB_NAME | gzip > $BACKUP_DIR/$DB_NAME-$DATE.sql.gz

# Upload to remote storage (optional)
# rclone copy $BACKUP_DIR/$DB_NAME-$DATE.sql.gz remote:backups/

# Delete backups older than 30 days
find $BACKUP_DIR -name "*.sql.gz" -mtime +30 -delete
```

**2. File Backups:**
```bash
#!/bin/bash
# /root/scripts/backup-files.sh

DATE=$(date +%Y%m%d)
BACKUP_DIR="/backups/files"
SOURCE_DIR="/var/www/vvveb"

# Create tarball
tar -czf $BACKUP_DIR/vvveb-files-$DATE.tar.gz \
    --exclude='*.log' \
    --exclude='node_modules' \
    $SOURCE_DIR

# Upload to remote storage (optional)
# rclone copy $BACKUP_DIR/vvveb-files-$DATE.tar.gz remote:backups/

# Delete backups older than 7 days (weekly retention)
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete
```

**3. Cron Schedule:**
```cron
# /etc/crontab

# Database backup daily at 3 AM
0 3 * * * root /root/scripts/backup-db.sh

# File backup weekly on Sunday at 4 AM
0 4 * * 0 root /root/scripts/backup-files.sh
```

### Monitoring
**Server Health:**
```bash
# Install monitoring tools
apt install htop iotop nethogs -y

# Check resource usage
htop          # CPU, RAM, processes
iotop         # Disk I/O
nethogs       # Network bandwidth
df -h         # Disk space

# View logs
tail -f /var/log/nginx/error.log
tail -f /var/log/php8.1-fpm.log
tail -f /var/log/mysql/error.log
```

**Uptime Monitoring (Free Options):**
- UptimeRobot (50 monitors free, 5-min checks)
- Freshping by Freshworks (50 monitors, 1-min checks)
- StatusCake (10 monitors free, 5-min checks)

**Alert Setup:**
- Email notifications for downtime
- Slack/Discord webhook for alerts (optional)

### Maintenance Schedule

**Daily (Automated):**
- Database backup
- Security updates (unattended-upgrades)
- Log rotation

**Weekly:**
- Review server resources (disk space, RAM usage)
- Check error logs for issues
- File backup

**Monthly:**
- Performance review (PageSpeed Insights)
- Update WordPress/plugins if applicable
- Review Cloudflare analytics
- Security audit (check for suspicious activity)

**Quarterly:**
- Full system update (PHP, MySQL, Nginx versions)
- Database optimization (OPTIMIZE TABLE)
- Review and update documentation

---

## Scalability Considerations

### Current Architecture Capacity
**Hetzner CX21 can handle:**
- ~5,000-10,000 visitors/month
- ~500-1,000 concurrent visitors
- ~50 GB bandwidth/month (with Cloudflare CDN)

### Scaling Options

**1. Vertical Scaling (Upgrade VPS):**
```
CX21  → CX31 (2 vCPU, 8GB RAM)   €11.00/month
CX31  → CX41 (4 vCPU, 16GB RAM)  €21.00/month
CX41  → CX51 (8 vCPU, 32GB RAM)  €40.50/month
```

**2. Horizontal Scaling (Multiple Servers):**
- Load balancer (HAProxy or Nginx)
- Multiple web servers
- Separate database server
- Shared file storage (NFS or object storage)

**3. Database Scaling:**
- Read replicas for heavy read loads
- Database connection pooling
- Query optimization and indexing

**4. CDN Optimization:**
- Upgrade Cloudflare plan for more features
- Use Cloudflare Workers for edge computing
- Implement advanced caching strategies

### When to Scale?
**Indicators:**
- Consistent server CPU usage >70%
- Response time increasing (>3s average)
- Frequent 503 errors under load
- Traffic growth beyond 10K visitors/month

**For B2B Site:**
Unlikely to need scaling. B2B traffic is inherently low-volume. Focus on optimization over scaling.

---

## E's Reusability Strategy

### Template Repository Structure
```
vvveb-client-template/
├── README.md                    # Setup instructions
├── .gitignore
├── server-setup/
│   ├── hetzner-provision.sh     # Automated server setup
│   ├── vvveb-install.sh         # VVVeb installation script
│   ├── cloudflare-setup.md      # Cloudflare configuration guide
│   └── nginx-config-template    # Nginx config with placeholders
│
├── components/                  # Custom VVVeb components
│   ├── video-hero.js
│   ├── video-split.js
│   ├── portfolio-grid.js
│   └── contact-form.js
│
├── templates/                   # Page templates
│   ├── home.php
│   ├── about.php
│   └── contact.php
│
├── assets/
│   ├── css/
│   │   └── base-style.css       # Base styles (oak palette, typography)
│   └── js/
│       └── main.js              # Core JavaScript functionality
│
├── database/
│   └── schema.sql               # Initial database structure
│
└── docs/
    ├── deployment-guide.md
    ├── client-training.md
    └── maintenance-checklist.md
```

### Deployment Automation
```bash
#!/bin/bash
# deploy-new-client.sh

# Usage: ./deploy-new-client.sh clientname clientdomain.com

CLIENT_NAME=$1
CLIENT_DOMAIN=$2

echo "Deploying new client: $CLIENT_NAME"
echo "Domain: $CLIENT_DOMAIN"

# 1. Clone template
git clone git@github.com:e-username/vvveb-template.git /var/www/$CLIENT_NAME
cd /var/www/$CLIENT_NAME

# 2. Create database
mysql -u root -p <<EOF
CREATE DATABASE ${CLIENT_NAME}_db CHARACTER SET utf8mb4;
CREATE USER '${CLIENT_NAME}_user'@'localhost' IDENTIFIED BY '$(openssl rand -base64 16)';
GRANT ALL PRIVILEGES ON ${CLIENT_NAME}_db.* TO '${CLIENT_NAME}_user'@'localhost';
FLUSH PRIVILEGES;
EOF

# 3. Import schema
mysql -u root -p ${CLIENT_NAME}_db < database/schema.sql

# 4. Configure VVVeb
cp config/config.sample.php config/config.php
sed -i "s/DATABASE_NAME/${CLIENT_NAME}_db/g" config/config.php
sed -i "s/DATABASE_USER/${CLIENT_NAME}_user/g" config/config.php

# 5. Create Nginx config
cp server-setup/nginx-config-template /etc/nginx/sites-available/$CLIENT_NAME
sed -i "s/DOMAIN_NAME/$CLIENT_DOMAIN/g" /etc/nginx/sites-available/$CLIENT_NAME
ln -s /etc/nginx/sites-available/$CLIENT_NAME /etc/nginx/sites-enabled/
nginx -t && systemctl reload nginx

# 6. Setup Cloudflare (manual step reminder)
echo "MANUAL STEP: Add $CLIENT_DOMAIN to Cloudflare and point DNS to this server"

# 7. Set permissions
chown -R www-data:www-data /var/www/$CLIENT_NAME
chmod -R 755 /var/www/$CLIENT_NAME

echo "Deployment complete! Access admin at https://$CLIENT_DOMAIN/admin"
```

**Time Savings:**
- Manual setup: ~4-6 hours
- Automated deployment: ~30 minutes
- ROI: After 5 clients, template creation time is recovered

---

## Appendix

### Technology Decisions Summary

| Requirement | Technology | Rationale |
|-------------|------------|-----------|
| CMS | VVVeb | Visual editing, self-hosted, reusable |
| Web Server | Nginx | Performance, low memory, static file serving |
| PHP | 8.1 | Modern features, security, performance |
| Database | MySQL 8.0 | Reliability, VVVeb compatibility |
| Hosting | Hetzner CX21 | Cost-effective, EU-based, scalable |
| CDN | Cloudflare Free | Global delivery, security, optimization |
| Video Hosting | Vimeo Pro | Unlimited bandwidth, automatic optimization |
| Frontend | Vanilla JS | No dependencies, fast, simple |
| CSS | Custom Properties | Native browser support, maintainable |
| Version Control | Git | Industry standard, rollback capability |

### Useful Commands Reference

**Server Management:**
```bash
# Restart services
sudo systemctl restart nginx
sudo systemctl restart php8.1-fpm
sudo systemctl restart mysql

# View logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# Check disk space
df -h

# Check memory usage
free -h

# Check running processes
ps aux | grep nginx
```

**Database Operations:**
```bash
# Backup database
mysqldump -u user -p database_name > backup.sql

# Restore database
mysql -u user -p database_name < backup.sql

# Optimize tables
mysql -u user -p -e "OPTIMIZE TABLE table_name" database_name
```

**Git Operations:**
```bash
# Deploy latest changes
git pull origin main

# Rollback to previous commit
git reset --hard HEAD~1

# View commit history
git log --oneline --graph

# Create tag for release
git tag -a v1.0 -m "Initial release"
git push origin v1.0
```

---

**Document Version:** 1.0
**Last Updated:** 2025-11-14
**Author:** BMad Builder (Technical Architecture) + Council
**Status:** Ready for Implementation
**Next Phase:** Server Provisioning & Development
