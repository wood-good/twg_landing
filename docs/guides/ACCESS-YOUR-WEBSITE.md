# 🌐 Access Your Website

## ✅ Fixed! Website is Now Working

The redirect has been fixed. Your website is now live!

---

## 🚀 Open Your Website

**Click or type these URLs:**

### **Homepage (Main Website)**
```
http://localhost:8080
```
This will redirect to:
```
http://localhost:8080/vvveb/public/themes/landing/
```

**OR** you can access pages directly:

- **Homepage**: http://localhost:8080/vvveb/public/themes/landing/
- **About**: http://localhost:8080/vvveb/public/themes/landing/about.html
- **Products**: http://localhost:8080/vvveb/public/themes/landing/products.html
- **Manufacturing**: http://localhost:8080/vvveb/public/themes/landing/manufacturing.html
- **Sustainability**: http://localhost:8080/vvveb/public/themes/landing/sustainability.html

---

## 🔐 Admin Panel (Separate)

To access the VVVeb admin editor:
```
http://localhost:8080/vvveb/admin/
```

**Credentials:**
- Username: `johndoe@example.com`
- Password: (check VVVeb docs - usually `password` or `admin123`)

---

## ✅ What You'll See

When you open http://localhost:8080, you'll see:

1. **Moooi-inspired navigation** (minimal, elegant, sticky)
2. **Hero section** with "Where Forest Meets Forever" headline
3. **Product categories** section (5 categories)
4. **About preview sections** with alternating image/text blocks
5. **Call-to-action sections**
6. **Luxury footer** with company info and links

---

## 🎨 Design Features

Your website now has:
- ✅ Professional Moooi-inspired aesthetic
- ✅ Black, white, and gold color scheme
- ✅ Premium typography (Libre Baskerville + Montserrat)
- ✅ Smooth scroll animations
- ✅ Responsive mobile design
- ✅ All your copywriting content

---

## 🛠️ URLs Explained

**Public Website Files:**
```
/vvveb/public/themes/landing/
```
This is where all your HTML pages live.

**Admin Interface:**
```
/vvveb/admin/
```
This is the visual page builder (separate from public site).

**Root Redirect:**
```
/index.php
```
This redirects http://localhost:8080 → public site

---

## 📝 Navigation Links

The navigation menu links to:
- `/` → Homepage
- `/products.html` → Products page
- `/about.html` → About page
- `/manufacturing.html` → Manufacturing page
- `/sustainability.html` → Sustainability page
- `/contact.html` → Contact page (you can create this)

**Note:** These links currently use relative paths within the theme folder.

---

## 🔧 Troubleshooting

### Still seeing admin panel?
Clear your browser cache:
- **Mac**: Cmd + Shift + R
- **Windows**: Ctrl + Shift + R

### Page not loading?
Check Docker containers are running:
```bash
docker ps
```

Restart if needed:
```bash
cd /Users/ernestssmalikis/Projects/twg_landing
./stop-dev.sh
./start-dev.sh
```

---

## 🎉 You're All Set!

**Open now:** http://localhost:8080

You should see **The Wood and Good** homepage with your content and Moooi design!

---

🌲 **The Wood and Good - Where Forest Meets Forever** 🌲
