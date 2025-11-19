# Quick Start Guide - The Wood and Good

## 🚀 View Your Website NOW

Open your browser and go to:
```
http://localhost:8080
```

You should see **The Wood and Good** homepage with Moooi design!

---

## 📄 Available Pages

Click these links or type in browser:

- **Homepage**: http://localhost:8080
- **About**: http://localhost:8080/about
- **Products**: http://localhost:8080/products
- **Manufacturing**: http://localhost:8080/manufacturing
- **Sustainability**: http://localhost:8080/sustainability

---

## ✏️ Edit Content (Super Easy!)

### Step 1: Open the file you want to edit
```bash
# Homepage
open -a "TextEdit" /Users/ernestssmalikis/Projects/twg_landing/public/vvveb/public/themes/landing/index.html

# Or use your favorite code editor (VS Code, Sublime, etc.)
```

### Step 2: Change the text
Find the text you want to change and edit it directly in the HTML.

### Step 3: Save and refresh browser
- Save the file (Cmd + S)
- Refresh browser (Cmd + R)
- See your changes instantly!

---

## 🎨 Change Colors/Fonts

Edit this file:
```
/Users/ernestssmalikis/Projects/twg_landing/public/vvveb/public/themes/landing/css/custom.css
```

**Colors** are defined at the top (lines 7-23):
```css
--twg-gold: #d4af37;    /* Change this color */
--twg-black: #000000;   /* Or this one */
```

**Fonts** are at lines 36-85.

---

## 🖼️ Add Images

### Where to put images:
```
/Users/ernestssmalikis/Projects/twg_landing/public/vvveb/public/themes/landing/media/images/
```

### How to use in HTML:
```html
<!-- Replace placeholder with: -->
<img src="media/images/workshop.jpg" alt="Our Workshop">
```

---

## 🔧 Stop/Start Website

### Stop
```bash
cd /Users/ernestssmalikis/Projects/twg_landing
./stop-dev.sh
```

### Start
```bash
cd /Users/ernestssmalikis/Projects/twg_landing
./start-dev.sh
```

Then go to: http://localhost:8080

---

## ❓ Common Questions

**Q: How do I change the homepage hero text?**
A: Edit `index.html`, find the `<h1>` tag around line 72, change the text.

**Q: How do I add my logo?**
A: Replace "The Wood and Good" text in navigation with:
```html
<a class="navbar-brand" href="/">
  <img src="media/images/logo.png" alt="The Wood and Good" style="height: 40px;">
</a>
```

**Q: How do I change footer links?**
A: Edit the footer section at the bottom of each HTML file.

**Q: Can I use the VVVeb visual editor?**
A: Yes! Go to http://localhost:8080/admin and login.

---

## 📚 Full Documentation

For detailed guides, see:
- [WEBSITE-READY.md](WEBSITE-READY.md) - Complete setup summary
- [MOOOI-STYLE-GUIDE.md](MOOOI-STYLE-GUIDE.md) - Design system reference
- [VVVEB-CODE-EDITING-GUIDE.md](VVVEB-CODE-EDITING-GUIDE.md) - Editing guide

---

## ✅ What You Have

- ✅ 5 pages with professional design
- ✅ Moooi-inspired aesthetic
- ✅ Your copywriting content
- ✅ Mobile responsive
- ✅ Smooth animations
- ✅ Ready to add images/videos

---

🌲 **Enjoy your new website!** 🌲

**First step**: Open http://localhost:8080 right now!
