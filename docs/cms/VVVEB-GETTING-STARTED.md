# VVVeb CMS - Getting Started Guide for The Wood and Good

## What is VVVeb?

VVVeb is a visual page builder CMS. You can edit pages two ways:
1. **Visual Editor** - Drag and drop in the browser (like Wix/Webflow)
2. **Code Editor** - Direct HTML/CSS editing (what we've been doing)

## Current Status

✅ **Docker containers running**
✅ **Database populated with content** (5 pages created)
✅ **Moooi-inspired CSS created** (`custom.css`)
✅ **Design components documented** (`MOOOI-STYLE-GUIDE.md`)

## How to Access VVVeb

### 1. Admin Panel (Visual Editor)
**URL**: http://localhost:8080/admin

**Default credentials** (check these first):
- Username: `admin@example.com` or `admin`
- Password: `admin` or check VVVeb docs

### 2. Frontend (Public Website)
**URL**: http://localhost:8080

This shows what visitors see.

### 3. Database (phpMyAdmin)
**URL**: http://localhost:8081
- Username: `vvveb_user`
- Password: `vvveb_pass`
- Database: `vvveb_db`

---

## Understanding Your Pages

We've created 5 pages in the database:

| Page | Template | Status |
|------|----------|--------|
| Home | `index.html` | ✅ Created |
| About | `about.html` | ✅ Created |
| Products | `products.html` | ✅ Created |
| Manufacturing | `manufacturing.html` | ✅ Created |
| Sustainability | `sustainability.html` | ✅ Created |

**The Problem**: The content is in the database but the HTML templates need to be updated to use the Moooi design classes.

---

## Two Ways to Apply the Moooi Design

### Option A: Visual Editor (Recommended for Beginners)

1. **Open VVVeb Admin**
   ```
   http://localhost:8080/admin
   ```

2. **Login** with admin credentials

3. **Edit a Page**:
   - Click "Pages" in the sidebar
   - Find "Home - Where Forest Meets Forever"
   - Click "Edit"

4. **Visual Page Builder Opens**:
   - You'll see a drag-and-drop interface
   - Left sidebar: Components you can add
   - Center: Live preview
   - Right sidebar: Properties/settings

5. **Apply Moooi Classes**:
   - Click any element (text, section, button)
   - Right sidebar shows properties
   - Find "Class" or "CSS Class" field
   - Add Moooi classes like `btn-moooi`, `hero-cover`, etc.

### Option B: Direct Code Editing (What We've Been Doing)

1. **Edit HTML Template Files** in:
   ```
   /Users/ernestssmalikis/Projects/twg_landing/public/vvveb/public/themes/landing/
   ```

2. **Key files**:
   - `index.html` - Homepage template
   - `about.html` - About page template
   - `products.html` - Products page template
   - `content/` - Reusable content blocks

3. **How it works**:
   - Edit the HTML files with Moooi classes
   - Save the file
   - Refresh browser at http://localhost:8080
   - Changes appear immediately (Docker volume mounted)

---

## Quick Start: Let's Fix the Homepage

### Step 1: Check Current Homepage

Open in browser:
```
http://localhost:8080
```

You'll probably see the default VVVeb template (not Moooi design yet).

### Step 2: Apply Moooi Design to Homepage

We need to edit `/public/vvveb/public/themes/landing/index.html`

The file should include sections like:
```html
<!-- Hero Section with Video -->
<section class="hero-cover">
  <video class="hero-cover-video" autoplay muted loop playsinline>
    <source src="media/videos/oak-workshop.mp4" type="video/mp4">
  </video>
  <div class="hero-overlay-dark"></div>
  <div class="hero-content" data-aos="fade-up">
    <h1>Where Forest Meets Forever</h1>
    <p class="lead">The Wood and Good — Solid oak. Direct hands. No middlemen.</p>
    <div class="mt-4">
      <a href="#products" class="btn-moooi me-3">Explore Our Craft</a>
      <a href="/products" class="btn-moooi btn-moooi-gold">See Ready-Made Inventory</a>
    </div>
  </div>
</section>
```

---

## How VVVeb Templates Work

### Template Structure

```
public/vvveb/public/themes/landing/
├── index.html          ← Homepage
├── about.html          ← About page
├── products.html       ← Products page
├── contact.html        ← Contact page
├── header.html         ← Reusable header (navigation)
├── footer.html         ← Reusable footer
├── css/
│   ├── custom.css      ← Your Moooi styles ✅ DONE
│   └── style.bundle.css
└── js/
    └── theme.js
```

### How Pages Load

1. User visits `http://localhost:8080/`
2. VVVeb loads `index.html` template
3. Template includes `header.html` and `footer.html`
4. VVVeb injects content from database
5. CSS from `custom.css` applies styling

---

## Common VVVeb Concepts

### 1. **Dynamic Content Areas**

VVVeb uses special attributes to inject database content:

```html
<!-- This area can be edited in Visual Editor -->
<div data-v-component-content="main">
  <!-- Content from database goes here -->
</div>
```

### 2. **Reusable Components**

```html
<!-- Include header -->
<div data-v-component-header></div>

<!-- Include footer -->
<div data-v-component-footer></div>
```

### 3. **Editable Elements**

```html
<!-- This text can be edited in Visual Editor -->
<h1 data-v-component-text="heading">Default Heading</h1>
```

---

## Next Steps

### Immediate Actions:

1. **Access VVVeb Admin**:
   ```
   http://localhost:8080/admin
   ```

2. **Check if you can login** (find credentials in VVVeb docs or database)

3. **View the current homepage**:
   ```
   http://localhost:8080
   ```

### What Needs to Be Done:

- [ ] Update `index.html` with Moooi hero section
- [ ] Update `header.html` with Moooi navigation
- [ ] Update `footer.html` with Moooi footer
- [ ] Create product grid on products page
- [ ] Add video background files to `/media/videos/`
- [ ] Connect database content to templates

---

## Troubleshooting

### Can't Login to Admin?

**Option 1: Reset Admin Password via Database**
```bash
docker exec -i twg_mysql mysql -u vvveb_user -pvvveb_pass vvveb_db -e "SELECT * FROM user LIMIT 1;"
```

**Option 2: Check VVVeb Installation**
VVVeb might need initial setup. Check:
```
http://localhost:8080/install
```

### Page Shows Default VVVeb Theme?

The custom CSS exists but templates need updating. We'll do this together.

### Docker Containers Not Running?

```bash
cd /Users/ernestssmalikis/Projects/twg_landing
./start-dev.sh
```

---

## What I Can Help You With

1. **Edit template files directly** - I can update HTML files with Moooi classes
2. **Create new page templates** - Build custom layouts
3. **Debug CSS issues** - Fix styling problems
4. **Update database content** - Modify text/content via SQL
5. **Configure VVVeb** - Help with setup/configuration

---

## Your Decision Point

**Which approach do you prefer?**

### A) Visual Editor Approach
- Access http://localhost:8080/admin
- I guide you through the visual editor
- You can see changes live as you edit

### B) Code-First Approach
- I update the HTML template files directly
- You refresh browser to see changes
- Faster, more precise control

### C) Hybrid Approach
- I update templates with code
- You fine-tune using visual editor
- Best of both worlds

**Let me know which you'd like and I'll proceed!**

---

## Files Reference

- **Design System**: `MOOOI-STYLE-GUIDE.md` (HTML examples)
- **CSS Styles**: `public/vvveb/public/themes/landing/css/custom.css`
- **Content Source**: `copywriting/` folder
- **Database Content**: Already imported ✅

🌲 **The Wood and Good - Where Forest Meets Forever** 🌲
