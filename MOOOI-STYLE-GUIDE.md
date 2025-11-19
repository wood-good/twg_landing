# The Wood and Good - Moooi-Inspired Design Guide

## 🎨 Design System Overview

I've created a complete Moooi-inspired design system for The Wood and Good! Here's everything you need to know.

---

## ✅ What's Been Implemented

### 1. **Color Palette**
- **Black & White** - Primary neutrals (#000000, #ffffff)
- **Off-White** - Backgrounds (#eeece7)
- **Gold** - Premium accent (#d4af37)
- **Charcoal** - Text (#2a2a2a)
- **Grey Tones** - Supporting colors

### 2. **Typography**
- **Headings** - Libre Baskerville (editorial serif)
- **Body** - Montserrat (clean sans-serif)
- **Uppercase labels** - 12px with 1.5px letter-spacing

### 3. **Components**
✅ Full-width hero sections with video/image backgrounds
✅ Minimal sticky navigation
✅ 3-column product grid with hover effects
✅ Premium button styles with slide-in animation
✅ Alternating content blocks
✅ Luxury footer
✅ Smooth scroll animations

---

## 📝 HTML Examples

### 1. Full-Width Hero Section (Moooi Style)

```html
<!-- Hero with Video Background -->
<section class="hero-cover">
  <!-- Video Background -->
  <video class="hero-cover-video" autoplay muted loop playsinline>
    <source src="media/videos/oak-workshop.mp4" type="video/mp4">
  </video>

  <!-- Dark Overlay -->
  <div class="hero-overlay-dark"></div>

  <!-- Content -->
  <div class="hero-content" data-aos="fade-up">
    <h1>The Wood and Good</h1>
    <p>Creative Luxury for a Well Curated Life</p>
    <div>
      <a href="#products" class="btn-moooi me-3">Explore Tables</a>
      <a href="#sustainability" class="btn-moooi btn-moooi-gold">Our Story</a>
    </div>
  </div>
</section>

<!-- Or with Image Background -->
<section class="hero-cover">
  <img src="img/hero-oak-table.jpg" alt="Oak Table" class="hero-cover-image">
  <div class="hero-overlay-dark"></div>
  <div class="hero-content" data-aos="fade-up">
    <h1>Where Forest Meets Forever</h1>
    <p>Handcrafted oak tables that tell stories</p>
    <a href="#products" class="btn-moooi">Discover Collection</a>
  </div>
</section>
```

---

### 2. Minimal Navigation (Moooi Style)

```html
<nav class="navbar navbar-expand-lg navbar-moooi">
  <div class="container">
    <!-- Logo/Brand -->
    <a class="navbar-brand" href="/">The Wood and Good</a>

    <!-- Mobile Toggle -->
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Nav Links -->
    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#products">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#manufacturing">Manufacturing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#sustainability">Sustainability</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

---

### 3. Product Grid (3-Column Moooi Style)

```html
<section class="section-moooi bg-off-white">
  <div class="container">
    <!-- Section Header -->
    <h2 class="section-title" data-aos="fade-up">Our Collection</h2>
    <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
      Handcrafted oak tables designed to become family heirlooms
    </p>

    <!-- Product Grid -->
    <div class="product-grid">

      <!-- Product Card 1 -->
      <article class="product-card-moooi" data-aos="fade-up" data-aos-delay="0">
        <div class="product-image-wrapper">
          <img src="img/products/heritage-dining-table.jpg" alt="Heritage Dining Table">
          <!-- Hover Overlay with Button -->
          <div class="product-overlay">
            <a href="/products/heritage-dining-table" class="btn-moooi">View Details</a>
          </div>
        </div>
        <div class="product-info">
          <p class="product-category">Dining Tables</p>
          <h3 class="product-title">Heritage Oak Dining Table</h3>
          <p class="product-price">$2,499</p>
        </div>
      </article>

      <!-- Product Card 2 -->
      <article class="product-card-moooi" data-aos="fade-up" data-aos-delay="200">
        <div class="product-image-wrapper">
          <img src="img/products/modern-coffee-table.jpg" alt="Modern Coffee Table">
          <div class="product-overlay">
            <a href="/products/modern-coffee-table" class="btn-moooi">View Details</a>
          </div>
        </div>
        <div class="product-info">
          <p class="product-category">Coffee Tables</p>
          <h3 class="product-title">Modern Oak Coffee Table</h3>
          <p class="product-price">$899</p>
        </div>
      </article>

      <!-- Product Card 3 -->
      <article class="product-card-moooi" data-aos="fade-up" data-aos-delay="400">
        <div class="product-image-wrapper">
          <img src="img/products/rustic-side-table.jpg" alt="Rustic Side Table">
          <div class="product-overlay">
            <a href="/products/rustic-side-table" class="btn-moooi">View Details</a>
          </div>
        </div>
        <div class="product-info">
          <p class="product-category">Side Tables</p>
          <h3 class="product-title">Rustic Oak Side Table</h3>
          <p class="product-price">$549</p>
        </div>
      </article>

    </div>
  </div>
</section>
```

---

### 4. Alternating Content Blocks

```html
<section class="section-moooi">
  <div class="container">

    <!-- Block 1: Image Left, Text Right -->
    <div class="content-block" data-aos="fade-up">
      <div>
        <img src="img/three-generations.jpg" alt="Three Generations" class="content-block-image">
      </div>
      <div class="content-block-text">
        <h2>Three Generations of Craftsmanship</h2>
        <p>Since 1952, our family has been crafting oak furniture with passion and precision. Each piece carries the wisdom of generations, combining traditional techniques with modern design sensibilities.</p>
        <a href="#about" class="btn-moooi">Read Our Story</a>
      </div>
    </div>

    <!-- Block 2: Text Left, Image Right (Reversed) -->
    <div class="content-block reverse" data-aos="fade-up">
      <div>
        <img src="img/sustainability-forest.jpg" alt="Sustainable Forest" class="content-block-image">
      </div>
      <div class="content-block-text">
        <h2>From Forest to Forever</h2>
        <p>We plant three trees for every one we use. Our sustainable forestry practices ensure that future generations can enjoy the beauty of oak, just as we do today.</p>
        <a href="#sustainability" class="btn-moooi btn-moooi-gold">Learn About Sustainability</a>
      </div>
    </div>

  </div>
</section>
```

---

### 5. Premium Buttons

```html
<!-- Black Button -->
<a href="#" class="btn-moooi">Explore Collection</a>

<!-- Gold Button -->
<a href="#" class="btn-moooi btn-moooi-gold">Our Story</a>

<!-- Combination -->
<div>
  <a href="#products" class="btn-moooi me-3">Shop Now</a>
  <a href="#contact" class="btn-moooi btn-moooi-gold">Get in Touch</a>
</div>
```

---

### 6. Luxury Footer

```html
<footer class="footer-moooi">
  <div class="container">
    <div class="row">

      <!-- Column 1: About -->
      <div class="col-md-3 mb-4">
        <h5>About Us</h5>
        <p style="font-size: 14px; line-height: 1.7;">
          Three generations of oak craftsmanship, creating tables that become family heirlooms.
        </p>
      </div>

      <!-- Column 2: Products -->
      <div class="col-md-3 mb-4">
        <h5>Products</h5>
        <a href="#dining-tables">Dining Tables</a>
        <a href="#coffee-tables">Coffee Tables</a>
        <a href="#side-tables">Side Tables</a>
        <a href="#custom-orders">Custom Orders</a>
      </div>

      <!-- Column 3: Company -->
      <div class="col-md-3 mb-4">
        <h5>Company</h5>
        <a href="#about">About</a>
        <a href="#manufacturing">Manufacturing</a>
        <a href="#sustainability">Sustainability</a>
        <a href="#contact">Contact</a>
      </div>

      <!-- Column 4: Connect -->
      <div class="col-md-3 mb-4">
        <h5>Connect</h5>
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
        <a href="#">Pinterest</a>
        <a href="#">LinkedIn</a>
      </div>

    </div>

    <!-- Footer Bottom -->
    <div class="footer-bottom text-center">
      <p class="mb-0">© 2025 The Wood and Good. Where Forest Meets Forever.</p>
    </div>
  </div>
</footer>
```

---

## 🎯 Complete Page Example

Here's a full homepage template combining all elements:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Wood and Good - Where Forest Meets Forever</title>

  <!-- Bootstrap 5 -->
  <link href="css/style.bundle.css" rel="stylesheet">

  <!-- Custom Moooi-Inspired Styles -->
  <link href="css/custom.css" rel="stylesheet">

  <!-- AOS Animations -->
  <link href="js/aos.css" rel="stylesheet">
</head>
<body>

  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-moooi">
    <div class="container">
      <a class="navbar-brand" href="/">The Wood and Good</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item"><a class="nav-link active" href="/">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#products">Products</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#sustainability">Sustainability</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero-cover">
    <video class="hero-cover-video" autoplay muted loop playsinline>
      <source src="media/videos/oak-workshop.mp4" type="video/mp4">
    </video>
    <div class="hero-overlay-dark"></div>
    <div class="hero-content" data-aos="fade-up">
      <h1>The Wood and Good</h1>
      <p>Creative Luxury for a Well Curated Life</p>
      <div class="mt-4">
        <a href="#products" class="btn-moooi me-3">Explore Collection</a>
        <a href="#about" class="btn-moooi btn-moooi-gold">Our Story</a>
      </div>
    </div>
  </section>

  <!-- Products Section -->
  <section id="products" class="section-moooi bg-off-white">
    <div class="container">
      <h2 class="section-title" data-aos="fade-up">Our Collection</h2>
      <p class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
        Handcrafted oak tables designed to become family heirlooms
      </p>

      <div class="product-grid">
        <!-- Products here -->
      </div>
    </div>
  </section>

  <!-- About Section (Alternating Blocks) -->
  <section id="about" class="section-moooi">
    <div class="container">
      <div class="content-block" data-aos="fade-up">
        <div>
          <img src="img/three-generations.jpg" alt="Three Generations" class="content-block-image">
        </div>
        <div class="content-block-text">
          <h2>Three Generations of Craftsmanship</h2>
          <p>Since 1952, our family has been crafting oak furniture with passion and precision.</p>
          <a href="#" class="btn-moooi">Read Our Story</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer-moooi">
    <!-- Footer content here -->
  </footer>

  <!-- Scripts -->
  <script src="js/bootstrap.min.js"></script>
  <script src="js/aos.js"></script>
  <script>
    AOS.init({
      duration: 800,
      easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
      once: true,
      offset: 100
    });
  </script>
</body>
</html>
```

---

## 🎨 CSS Classes Reference

### Buttons
- `.btn-moooi` - Black button with slide animation
- `.btn-moooi-gold` - Gold variant

### Sections
- `.section-moooi` - Standard section (8rem padding)
- `.section-moooi-sm` - Small section (5rem padding)
- `.section-moooi-lg` - Large section (12rem padding)

### Heroes
- `.hero-cover` - Full-width hero container
- `.hero-cover-video` - Video background
- `.hero-cover-image` - Image background
- `.hero-overlay-dark` - Dark overlay
- `.hero-content` - Centered content

### Products
- `.product-grid` - 3-column grid
- `.product-card-moooi` - Product card
- `.product-image-wrapper` - Image container
- `.product-overlay` - Hover overlay
- `.product-info` - Product details

### Navigation
- `.navbar-moooi` - Minimal nav style

### Footer
- `.footer-moooi` - Luxury footer

### Utilities
- `.bg-off-white` - Off-white background
- `.bg-charcoal` - Charcoal background
- `.text-gold` - Gold text color
- `.border-gold` - Gold border

---

## 🚀 Next Steps

1. **Replace placeholder images** with actual TWG product photos
2. **Add video files** to `/media/videos/`
3. **Customize text** with copywriting from `/copywriting/` directory
4. **Test all pages** for responsive design
5. **Optimize images** for web performance

---

🌲 **The Wood and Good - Where Forest Meets Forever** 🌲
