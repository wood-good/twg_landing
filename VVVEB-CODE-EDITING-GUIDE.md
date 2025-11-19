# VVVeb Code Editing Guide

## ✅ YES - You Can Edit Code Directly!

VVVeb is **fully customizable** at the code level. You have complete control over layouts, themes, animations, and styling through direct file editing.

---

## 📁 Project Structure

```
public/vvveb/
├── public/themes/landing/          # Main theme files (editable)
│   ├── css/                        # Compiled CSS
│   │   ├── style.css              # Main compiled stylesheet
│   │   ├── style.bundle.css       # Bundled with Bootstrap
│   │   └── custom.css             # Your custom CSS additions
│   ├── scss/                       # SCSS source files (EDIT THESE!)
│   │   ├── style.scss             # Main SCSS entry point
│   │   ├── _base.scss             # Base styles
│   │   ├── _fonts.scss            # Typography
│   │   ├── _navbar.scss           # Navigation styles
│   │   ├── bootstrap/             # Bootstrap 5 customization
│   │   └── sections/              # Section-specific styles
│   │       ├── hero/              # Hero section styles
│   │       ├── features/          # Features section styles
│   │       ├── footer/            # Footer styles
│   │       └── ...
│   ├── js/                         # JavaScript files
│   │   ├── theme.js               # Main theme JS (sticky nav, dark mode)
│   │   ├── aos.js                 # Animate On Scroll library
│   │   ├── bootstrap.min.js       # Bootstrap 5
│   │   └── jquery.min.js          # jQuery
│   ├── sections/                   # Reusable HTML sections
│   │   ├── hero.html              # Hero sections
│   │   ├── footer/                # Footer variations
│   │   ├── team.html              # Team sections
│   │   └── ...
│   ├── index.html                  # Homepage template
│   ├── contact.html               # Contact page
│   ├── about.html                 # About page
│   └── theme.php                  # Theme configuration
├── admin/template/                 # Admin backend templates (.tpl)
└── storage/
    └── compiled-templates/         # Auto-generated (don't edit)
```

---

## 🎨 Editing Styles & Layouts

### 1. **CSS Customization**

VVVeb uses **Bootstrap 5 + SCSS**. You can customize everything:

**Option A: Quick Custom CSS** (No build process)
```bash
# Edit directly
nano public/vvveb/public/themes/landing/css/custom.css
```

```css
/* Example: Custom brand colors for TWG */
:root {
  --bs-primary: #b8956a;        /* Oak honey */
  --bs-secondary: #2a1810;      /* Oak darkest */
  --bs-body-bg: #faf7f0;        /* Warm white */
  --bs-font-headings: 'Playfair Display', serif;
}

/* Custom hero styling */
.hero-1 {
  background: linear-gradient(135deg, #2a1810 0%, #b8956a 100%);
  min-height: 100vh;
}

/* Glassmorphism effect */
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

**Option B: SCSS Development** (Professional approach)
```bash
# Navigate to theme
cd public/vvveb/public/themes/landing

# Edit SCSS files
nano scss/style.scss
nano scss/_base.scss
nano scss/sections/hero/_hero-1.scss

# Compile SCSS (requires Node.js)
npm install
npm run gulp

# Or use watch mode for auto-compilation
npm run gulp watch
```

### 2. **HTML Template Editing**

Edit HTML templates directly:

```bash
# Main homepage
nano public/vvveb/public/themes/landing/index.html

# Contact page
nano public/vvveb/public/themes/landing/contact.html

# Individual sections
nano public/vvveb/public/themes/landing/sections/hero.html
```

**Example: Add custom hero with video background**
```html
<header class="hero-custom" style="position: relative; height: 100vh; overflow: hidden;">
  <!-- Video Background -->
  <video autoplay muted loop playsinline
         style="position: absolute; width: 100%; height: 100%; object-fit: cover;">
    <source src="video/hero-background.mp4" type="video/mp4">
  </video>

  <!-- Glass Overlay Content -->
  <div class="container h-100" style="position: relative; z-index: 2;">
    <div class="row h-100 align-items-center">
      <div class="col-lg-6 glass-card p-5" data-aos="fade-up">
        <h1 class="display-1 mb-4">The Wood and Good</h1>
        <h2 class="fs-3 mb-4">Where Forest Meets Forever</h2>
        <a href="/products" class="btn btn-primary btn-lg">
          Explore Our Tables
        </a>
      </div>
    </div>
  </div>

  <!-- Gradient Overlay -->
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;
              background: linear-gradient(135deg, rgba(42,24,16,0.7) 0%, rgba(184,149,106,0.3) 100%);"></div>
</header>
```

### 3. **Animations**

VVVeb includes **AOS (Animate On Scroll)** library by default!

**Available Animation Attributes:**
```html
<!-- Fade animations -->
<div data-aos="fade-up">Fades in from bottom</div>
<div data-aos="fade-down">Fades in from top</div>
<div data-aos="fade-left">Fades in from right</div>
<div data-aos="fade-right">Fades in from left</div>

<!-- Zoom animations -->
<div data-aos="zoom-in">Zooms in</div>
<div data-aos="zoom-out">Zooms out</div>

<!-- Flip animations -->
<div data-aos="flip-left">Flips from left</div>
<div data-aos="flip-right">Flips from right</div>

<!-- Customization -->
<div data-aos="fade-up"
     data-aos-delay="200"           <!-- Delay in ms -->
     data-aos-duration="1000"       <!-- Animation duration -->
     data-aos-easing="ease-in-out"  <!-- Easing function -->
     data-aos-offset="100"          <!-- Trigger offset -->
     data-aos-once="true">          <!-- Animate only once -->
  Content here
</div>
```

**Example: Animated Product Cards**
```html
<div class="row">
  <div class="col-md-4" data-aos="fade-up" data-aos-delay="0">
    <div class="product-card glass-card">
      <img src="products/oak-table-1.jpg" alt="Oak Dining Table">
      <h3>Heritage Oak Dining Table</h3>
      <p>$2,499</p>
    </div>
  </div>

  <div class="col-md-4" data-aos="fade-up" data-aos-delay="200">
    <div class="product-card glass-card">
      <img src="products/oak-table-2.jpg" alt="Oak Coffee Table">
      <h3>Modern Oak Coffee Table</h3>
      <p>$899</p>
    </div>
  </div>

  <div class="col-md-4" data-aos="fade-up" data-aos-delay="400">
    <div class="product-card glass-card">
      <img src="products/oak-table-3.jpg" alt="Oak Side Table">
      <h3>Rustic Oak Side Table</h3>
      <p>$549</p>
    </div>
  </div>
</div>
```

### 4. **JavaScript Customization**

Edit theme JavaScript for custom interactions:

```bash
nano public/vvveb/public/themes/landing/js/theme.js
```

**Current features in theme.js:**
- ✅ Sticky navbar with color switching
- ✅ Dark/Light mode toggle
- ✅ Smooth scrolling
- ✅ Product quantity controls
- ✅ Image zoom on hover
- ✅ Password visibility toggle

**Example: Add custom parallax scroll effect**
```javascript
// Add to theme.js
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.parallax');

  parallaxElements.forEach(element => {
    const speed = element.dataset.speed || 0.5;
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});
```

Then in HTML:
```html
<div class="parallax" data-speed="0.3">
  <img src="img/oak-texture.jpg" alt="Oak texture">
</div>
```

---

## 🔧 Development Workflow

### Option 1: Direct File Editing (Simple)

```bash
# 1. Edit CSS directly
nano public/vvveb/public/themes/landing/css/custom.css

# 2. Edit HTML templates
nano public/vvveb/public/themes/landing/index.html

# 3. Refresh browser - changes are immediate!
```

### Option 2: SCSS Development (Professional)

```bash
# 1. Navigate to theme directory
cd public/vvveb/public/themes/landing

# 2. Install dependencies (one-time)
docker exec -it twg_php bash
apt-get update && apt-get install -y nodejs npm
npm install

# 3. Start watch mode for auto-compilation
npm run gulp watch

# 4. Edit SCSS files in another terminal
nano scss/_base.scss

# Changes compile automatically to css/style.css
```

### Option 3: Docker Volume Editing

Since `public/` is mounted as a Docker volume, you can edit files directly on your Mac:

```bash
# Use your favorite editor
code public/vvveb/public/themes/landing/  # VS Code
subl public/vvveb/public/themes/landing/  # Sublime
vim public/vvveb/public/themes/landing/   # Vim
```

Changes are **instantly reflected** in the Docker container!

---

## 🎯 Common Customizations for TWG

### 1. Brand Colors

**File:** `public/vvveb/public/themes/landing/css/custom.css`
```css
:root {
  --bs-primary: #b8956a;        /* Oak honey */
  --bs-primary-rgb: 184, 149, 106;

  --bs-secondary: #2a1810;      /* Oak darkest */
  --bs-secondary-rgb: 42, 24, 16;

  --bs-body-bg: #faf7f0;        /* Warm white */
  --bs-body-bg-rgb: 250, 247, 240;

  --bs-body-color: #2a1810;     /* Dark text */
}
```

### 2. Typography

**File:** `public/vvveb/public/themes/landing/css/custom.css`
```css
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Crimson+Text:wght@400;600&family=Inter:wght@300;400;500;600&display=swap');

:root {
  --bs-font-sans-serif: 'Inter', system-ui, -apple-system, sans-serif;
  --bs-font-serif: 'Crimson Text', Georgia, serif;
  --bs-font-headings: 'Playfair Display', serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--bs-font-headings);
  font-weight: 600;
}

body {
  font-family: var(--bs-font-serif);
  font-size: 1.125rem;
  line-height: 1.8;
}
```

### 3. Glassmorphism Components

**File:** `public/vvveb/public/themes/landing/css/custom.css`
```css
.glass-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px) saturate(180%);
  -webkit-backdrop-filter: blur(10px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 16px;
  box-shadow:
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  padding: 2rem;
  transition: all 0.3s ease;
}

.glass-card:hover {
  transform: translateY(-8px);
  box-shadow:
    0 16px 48px rgba(0, 0, 0, 0.15),
    inset 0 1px 0 rgba(255, 255, 255, 0.3);
}

.glass-nav {
  background: rgba(250, 247, 240, 0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(42, 24, 16, 0.1);
}
```

### 4. Video Background Hero

**File:** `public/vvveb/public/themes/landing/index.html`
```html
<section class="hero-video-bg" style="position: relative; height: 100vh; overflow: hidden;">
  <!-- Video Background -->
  <video autoplay muted loop playsinline class="hero-video"
         style="position: absolute; top: 50%; left: 50%;
                min-width: 100%; min-height: 100%;
                transform: translate(-50%, -50%);
                object-fit: cover; z-index: 0;">
    <source src="media/videos/oak-workshop.mp4" type="video/mp4">
  </video>

  <!-- Overlay -->
  <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;
              background: linear-gradient(135deg,
                rgba(42,24,16,0.8) 0%,
                rgba(184,149,106,0.4) 100%);
              z-index: 1;"></div>

  <!-- Content -->
  <div class="container h-100" style="position: relative; z-index: 2;">
    <div class="row h-100 align-items-center">
      <div class="col-lg-6" data-aos="fade-up">
        <div class="glass-card">
          <h1 class="display-1 text-white mb-4">The Wood and Good</h1>
          <p class="fs-3 text-white mb-5">Where Forest Meets Forever</p>
          <a href="#products" class="btn btn-primary btn-lg me-3">
            Explore Tables
          </a>
          <a href="#sustainability" class="btn btn-outline-light btn-lg">
            Our Story
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

## 📝 VVVeb Template System

VVVeb uses a **two-layer template system**:

1. **HTML Templates** (in `public/themes/landing/`) - The visual structure
2. **TPL Templates** (in `admin/template/`) - Dynamic data binding

### Example: Creating a Custom Product Page

**Step 1: HTML Template** - `public/themes/landing/product-custom.html`
```html
<div class="product-detail" data-v-component-product>
  <div class="row">
    <div class="col-md-6">
      <img data-v-product-image src="img/default.jpg" alt="" class="img-fluid">
    </div>
    <div class="col-md-6">
      <h1 data-v-product-name>Product Name</h1>
      <p class="price" data-v-product-price>$0.00</p>
      <div data-v-product-description>Description</div>

      <button class="btn btn-primary" data-v-product-cart>
        Add to Cart
      </button>
    </div>
  </div>
</div>
```

**Step 2: TPL Data Binding** - `admin/template/product.tpl`
```php
[data-v-product-name] = $this->product['name']
[data-v-product-price] = $this->product['price']
[data-v-product-description] = $this->product['description']
[data-v-product-image]|src = $this->product['image']
```

---

## 🚀 Performance Optimization

### 1. Minify CSS/JS

```bash
cd public/vvveb/public/themes/landing

# Install minification tools
npm install -g terser
npm install -g csso-cli

# Minify CSS
csso css/style.css -o css/style.min.css

# Minify JS
terser js/theme.js -o js/theme.min.js --compress --mangle
```

### 2. Optimize Images

```bash
# Install ImageMagick (if not installed)
brew install imagemagick  # macOS
apt-get install imagemagick  # Linux

# Optimize images
mogrify -strip -quality 85 -resize 1920x1080\> img/*.jpg
```

---

## 📦 File Permissions

After editing files, ensure proper permissions:

```bash
docker exec twg_php chown -R www-data:www-data /var/www/html/vvveb/public/themes
docker exec twg_php chmod -R 755 /var/www/html/vvveb/public/themes
```

---

## 🎓 Quick Reference

### Edit Locations Cheat Sheet

| What to Edit | File Location |
|--------------|---------------|
| **Quick CSS changes** | `public/themes/landing/css/custom.css` |
| **SCSS development** | `public/themes/landing/scss/*.scss` |
| **Homepage layout** | `public/themes/landing/index.html` |
| **Navigation** | Edit `index.html` nav section |
| **Footer** | `public/themes/landing/sections/footer/` |
| **Hero sections** | `public/themes/landing/sections/hero.html` |
| **JavaScript** | `public/themes/landing/js/theme.js` |
| **Animations** | Add `data-aos="..."` attributes to HTML |
| **Brand colors** | `:root` variables in `custom.css` |
| **Typography** | `custom.css` font imports and definitions |

---

## ✅ Summary

**YES, you can edit VVVeb code directly!**

- ✅ Full control over HTML templates
- ✅ Complete CSS/SCSS customization
- ✅ JavaScript modifications supported
- ✅ Built-in animation library (AOS)
- ✅ Bootstrap 5 framework
- ✅ No proprietary restrictions
- ✅ Files mounted as Docker volumes (instant changes)
- ✅ Open-source and fully documented

**Recommended Workflow:**
1. Start with `custom.css` for quick styling
2. Edit HTML templates directly for layout changes
3. Use `data-aos` attributes for animations
4. Develop with SCSS for complex theming
5. Test changes in browser (changes are immediate)

---

**Next Steps:** Ready to start customizing TWG landing pages! 🌲
