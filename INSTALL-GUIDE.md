# VVVeb Installation Guide

**Fresh installation completed!** Follow these steps to set up your website.

---

## ✅ What's Ready

- ✅ Docker containers running
- ✅ VVVeb CMS installed
- ✅ MySQL database ready
- ✅ PHP extensions enabled (GD, mbstring, PDO, zip)
- ✅ Nginx web server configured

---

## 📋 Step-by-Step Installation

### Step 1: Open the Installer

Open your browser and go to:
```
http://localhost:8080/vvveb/install/
```

You should see the VVVeb installation wizard.

---

### Step 2: System Requirements Check

VVVeb will check if your system meets the requirements. You should see:
- ✅ PHP version (8.1)
- ✅ GD extension
- ✅ mbstring extension
- ✅ PDO MySQL extension
- ✅ File permissions

**If any checks fail**, the issue is already fixed. Just refresh the page.

---

### Step 3: Database Configuration

Enter **EXACTLY** these credentials:

```
Database Type:     MySQL/MariaDB
Database Host:     mysql
Database Name:     vvveb
Database Username: vvveb_user
Database Password: vvveb_pass
Table Prefix:      (leave default or use "twg_")
```

⚠️ **IMPORTANT**:
- Database host is `mysql` (NOT `localhost`)
- Use underscore in `vvveb_db` (NOT dot)

**Click "Continue" or "Next"**

---

### Step 4: Create Admin Account

Set up your admin credentials:

```
Admin Username: admin (or your preferred username)
Admin Email:    your-email@example.com
Admin Password: (choose a strong password)
```

**Write these down!** You'll need them to log in.

**Click "Install" or "Continue"**

---

### Step 5: Wait for Installation

VVVeb will:
- Create database tables
- Set up default content
- Configure the system

This takes **30-60 seconds**. Don't refresh!

---

### Step 6: Complete Installation

When you see "Installation Complete":

**Click "Go to Admin Panel"** or manually navigate to:
```
http://localhost:8080/vvveb/admin/
```

---

### Step 7: Log In

Use the credentials you created in Step 4:
- Username: (what you chose)
- Password: (what you chose)

**Click "Login"**

---

## 🎉 You're In!

You should now see the VVVeb admin dashboard.

### What to Do Next:

1. **Explore the Dashboard**
   - See the main menu on the left
   - Browse available options

2. **Create Your First Page**
   - Click "Pages" → "Add New Page"
   - Use the visual page builder
   - Drag and drop elements

3. **Configure Settings**
   - Click "Settings" → "General"
   - Set site name: "The Wood and Good"
   - Set tagline: "Where Forest Meets Forever"

4. **Add Media**
   - Click "Media" → "Upload"
   - Upload logo, product images
   - Organize in folders

---

## 🔧 Access Information

| Resource | URL | Credentials |
|----------|-----|-------------|
| **VVVeb Admin** | http://localhost:8080/vvveb/admin/ | (your admin account) |
| **Website** | http://localhost:8080/vvveb/ | (public site) |
| **phpMyAdmin** | http://localhost:8081 | user: root, pass: root_password |

---

## 📁 Database Access (Advanced)

### Via phpMyAdmin (GUI)
1. Open http://localhost:8081
2. Login:
   - Server: `mysql`
   - Username: `root`
   - Password: `root_password`
3. Select database: `vvveb_db`

### Via Command Line
```bash
docker exec -it twg_mysql mysql -u vvveb_user -pvvveb_pass vvveb_db
```

---

## 🚨 Troubleshooting

### "Template not found" or "Page not found" after installation

**Problem**: Admin template HTML files are missing because Git submodules weren't initialized.

**Solution**:
```bash
# Navigate to VVVeb directory
cd public/vvveb

# Initialize and update all submodules (includes admin template)
git submodule init
git submodule update --init --recursive

# Fix permissions
docker exec twg_php chown -R www-data:www-data /var/www/html/vvveb/public/admin/default
docker exec twg_php chown -R www-data:www-data /var/www/html/vvveb/storage

# Clear cache and restart
docker exec twg_php rm -rf /var/www/html/vvveb/storage/cache/*
docker restart twg_php twg_nginx

# Wait 5 seconds
sleep 5

# Try logging in again
```

### "Database connection failed"

**Solution**:
```bash
# Restart MySQL container
docker restart twg_mysql

# Wait 10 seconds
sleep 10

# Try installer again
```

### "PHP extensions missing"

**Solution**:
```bash
# Restart PHP container
docker restart twg_php

# Wait 5 seconds
sleep 5

# Refresh installer page
```

### "Permission denied" errors

**Solution**:
```bash
# Fix permissions
docker exec twg_php chown -R www-data:www-data /var/www/html/vvveb

# Restart nginx
docker restart twg_nginx
```

### Can't access installer

**Check containers are running**:
```bash
docker ps
```

You should see 4 containers: `twg_nginx`, `twg_php`, `twg_mysql`, `twg_phpmyadmin`

**If any are missing**:
```bash
./stop-dev.sh
./start-dev.sh
```

---

## 📞 Need Help?

### Check Logs

**Nginx logs**:
```bash
docker logs twg_nginx
```

**PHP logs**:
```bash
docker logs twg_php
```

**MySQL logs**:
```bash
docker logs twg_mysql
```

### Verify Database

```bash
# Test connection
docker exec twg_mysql mysql -u vvveb_user -pvvveb_pass vvveb_db -e "SELECT 'OK' as status;"
```

Should output: `OK`

### Complete Reset (Nuclear Option)

⚠️ **WARNING**: This deletes everything!

```bash
./stop-dev.sh
docker-compose down -v
rm -rf public/vvveb/storage/*
./start-dev.sh
```

Then start from Step 1 again.

---

## ✅ Installation Checklist

- [ ] Step 1: Opened installer
- [ ] Step 2: Passed system requirements
- [ ] Step 3: Entered database credentials
- [ ] Step 4: Created admin account
- [ ] Step 5: Waited for installation
- [ ] Step 6: Saw "Installation Complete"
- [ ] Step 7: Logged into admin panel
- [ ] Step 8: Explored dashboard
- [ ] Step 9: Created first page
- [ ] Step 10: Configured site settings

---

## 🎯 Next Steps After Installation

### 1. Plan Your Pages

Create these 6 pages:
1. **Home** - Hero with video, brand story
2. **About** - Three generations story
3. **Products** - Oak table catalog
4. **Manufacturing** - 4-step process
5. **Sustainability** - Tree-to-tree cycle
6. **Contact** - Inquiry form

### 2. Use Your Copywriting

Reference content from `/copywriting/` directory:
- `/copywriting/hero/` - Homepage hero content
- `/copywriting/about/` - About page copy
- `/copywriting/products/` - Product descriptions
- `/copywriting/manufacturing/` - Process details
- `/copywriting/sustainability/` - Environmental commitment

### 3. Upload Assets

Prepare and upload:
- Logo (SVG or high-res PNG)
- Product photos
- Video backgrounds (hero, manufacturing, sustainability)
- Team photos
- Certification badges

### 4. Configure Theme

- Choose or create oak-inspired color scheme
- Set typography (Playfair Display, Crimson Text)
- Configure navigation menu
- Set up footer

### 5. Test

- Check all pages on desktop
- Test on mobile devices
- Verify forms work
- Check image loading
- Test navigation

---

## 🌲 Brand Guidelines

**Company**: The Wood and Good
**Tagline**: Where Forest Meets Forever
**Philosophy**: We don't sell tables—we create spaces where life happens

**Colors**:
- Primary: Oak honey #b8956a
- Dark: Oak darkest #2a1810
- Light: Warm white #faf7f0

**Typography**:
- Headings: Playfair Display
- Body: Crimson Text
- UI: Inter

---

**Last Updated**: November 17, 2025
**Status**: ✅ Ready for setup
**Next**: Complete installation steps above

🌲 **Where Forest Meets Forever** 🌲
