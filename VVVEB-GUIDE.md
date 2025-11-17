# VVVeb CMS - Development Guide

**The Wood and Good Landing Site**
**Last Updated**: November 17, 2025

---

## Overview

This project uses **VVVeb CMS** - a powerful open-source platform with:
- Visual drag & drop page builder
- Component-based theme system
- MySQL database backend
- PHP 8.1+ runtime

**Primary Codebase**: `/vvveb-theme-landing/` - All theme development happens here.

---

## Quick Access

### Development Environment
- **Main Site**: http://localhost:8080/
- **VVVeb Admin**: http://localhost:8080/cms/admin/
  - Email: `admin@thewoodandgood.com`
  - Password: `TWGAdmin2024`
- **VVVeb Builder**: http://localhost:8080/vvveb-builder/editor.html
- **phpMyAdmin**: http://localhost:8081/
  - User: `root`
  - Password: `root_password`
  - Database: `vvveb`

### Start/Stop Environment
```bash
./start-dev.sh    # Start Docker services
./stop-dev.sh     # Stop Docker services
```

---

## Architecture

### Directory Structure

```
/
├── public/                    # Web root (nginx serves from here)
│   ├── cms/                  # VVVeb CMS installation
│   │   ├── admin/           # Admin panel
│   │   ├── config/          # CMS configuration
│   │   └── storage/         # Media uploads
│   │
│   ├── vvveb-builder/       # Standalone page builder
│   │   └── editor.html      # Visual editor
│   │
│   └── assets/              # Public assets
│       └── videos/          # Optimized video files
│
├── vvveb-theme-landing/      # PRIMARY CODEBASE - Theme development
│   ├── blocks/              # Reusable content blocks
│   ├── sections/            # Page sections (hero, footer, etc.)
│   ├── css/                # Compiled theme styles
│   ├── scss/               # Source Sass files
│   ├── js/                 # Theme JavaScript
│   ├── video/              # Theme video assets
│   ├── content/            # Page templates
│   └── src/                # Source templates
│
├── docker/                   # Docker configuration
│   ├── nginx/              # Nginx web server config
│   ├── php/                # PHP-FPM config
│   └── mysql/              # MySQL init scripts
│
└── docs/                     # Project documentation
    ├── architecture.md      # Technical architecture
    ├── brief.md            # Project brief
    └── prd.md              # Product requirements
```

---

## VVVeb Theme Development

### Where to Work

**All development happens in** `/vvveb-theme-landing/`

This is the active theme directory that VVVeb loads.

### Key Directories

#### `/vvveb-theme-landing/sections/`
Page sections like hero, footer, navigation, features, etc.

**Example**: Creating a new section
```html
<!-- sections/custom-section/custom-section.html -->
<section class="custom-section">
    <div class="container">
        <h2>Custom Section</h2>
    </div>
</section>
```

#### `/vvveb-theme-landing/blocks/`
Reusable content blocks (posts, products, contact forms).

#### `/vvveb-theme-landing/scss/`
Source Sass files for styling.

**Workflow**:
1. Edit `.scss` files
2. Compile to CSS (VVVeb handles this automatically)
3. Changes appear in `/vvveb-theme-landing/css/`

#### `/vvveb-theme-landing/js/`
Theme JavaScript files.

**Key Files**:
- `theme.js` - Main theme logic
- `aos.js` - Scroll animations
- `cart.js` - Shopping cart (if using e-commerce)

---

## Using VVVeb CMS

### Admin Panel

**URL**: http://localhost:8080/cms/admin/

**Main Features**:
- **Pages**: Create/edit pages with visual builder
- **Posts**: Blog functionality
- **Products**: E-commerce catalog
- **Media**: Upload images/videos
- **Settings**: Site configuration
- **Themes**: Theme management

### Creating a New Page

1. Go to Admin → Pages → Add New
2. Enter page title and URL slug
3. Click "Edit with Builder"
4. Drag sections and blocks from left sidebar
5. Customize content inline
6. Save and publish

### Using the Visual Builder

**URL**: http://localhost:8080/vvveb-builder/editor.html

**Features**:
- Drag & drop interface
- Live preview
- Component library
- Responsive preview modes
- HTML/CSS editor

---

## Database

### Connection Details
- **Host**: `mysql` (Docker container name)
- **Database**: `vvveb`
- **User**: `root`
- **Password**: `root_password`
- **Port**: 3306 (internal), 3307 (external)

### Access via phpMyAdmin
http://localhost:8081/

### Backup Database
```bash
docker exec twg_mysql mysqldump -u root -proot_password vvveb > backup.sql
```

### Restore Database
```bash
docker exec -i twg_mysql mysql -u root -proot_password vvveb < backup.sql
```

---

## Docker Services

### Containers

Defined in `/docker-compose.yml`:

1. **twg_nginx** - Web server (port 8080)
2. **twg_php** - PHP 8.1-FPM processor
3. **twg_mysql** - MySQL 8.0 database (port 3307)
4. **phpmyadmin** - Database GUI (port 8081)

### Common Commands

```bash
# Start environment
./start-dev.sh

# Stop environment
./stop-dev.sh

# View logs
docker logs twg_nginx
docker logs twg_php
docker logs twg_mysql

# Restart a service
docker restart twg_nginx

# Access container shell
docker exec -it twg_php bash
docker exec -it twg_mysql mysql -u root -proot_password vvveb
```

---

## Theme Customization

### Modifying Styles

**Edit**: `/vvveb-theme-landing/scss/style.scss`

VVVeb automatically compiles Sass to CSS.

### Adding Custom Fonts

1. Add font files to `/vvveb-theme-landing/fonts/`
2. Import in `scss/_variables.scss`:
```scss
@font-face {
    font-family: 'CustomFont';
    src: url('../fonts/customfont.woff2') format('woff2');
}

$font-family-primary: 'CustomFont', sans-serif;
```

### Adding Custom JavaScript

1. Create file in `/vvveb-theme-landing/js/custom.js`
2. Register in theme configuration
3. VVVeb includes it automatically

---

## Media Assets

### Videos

**Location**: `/public/assets/videos/`

**Current Videos**:
- `hero.mp4` (9.0MB) - Homepage hero background
- `philosophy.mp4` (580KB) - Philosophy section
- `process-1.mp4` through `process-4.mp4` - Process steps

**Optimization**: Videos are pre-optimized for web delivery.

### Images

**Upload via**:
- Admin panel → Media
- Direct upload to `/public/cms/storage/media/`

**Best Practices**:
- Use WebP format for modern browsers
- Provide JPG fallback
- Optimize before upload (max 2000px width)

---

## Performance

### Caching

VVVeb includes built-in page caching.

**Enable in**: `/public/cms/config/cache.php`

### CDN Integration

For production, configure CDN:
1. Upload media to CDN
2. Update media URLs in admin settings
3. Enable CDN in VVVeb config

### Optimization Checklist

- [ ] Enable page cache
- [ ] Minify CSS/JS
- [ ] Optimize images (WebP)
- [ ] Enable gzip compression (nginx)
- [ ] Configure CDN for media
- [ ] Set up browser caching headers

---

## Troubleshooting

### CMS Admin Not Loading

**Check**:
```bash
docker ps  # Verify containers running
docker logs twg_nginx  # Check nginx logs
docker logs twg_php    # Check PHP errors
```

**Solution**: Restart containers
```bash
./stop-dev.sh && ./start-dev.sh
```

### Database Connection Failed

**Check**: `/public/cms/config/db.php`

Should contain:
```php
return [
    'host' => 'mysql',
    'database' => 'vvveb',
    'username' => 'root',
    'password' => 'root_password',
];
```

### Page Builder Not Saving

**Check**:
- File permissions on `/public/cms/storage/`
- PHP error logs: `docker logs twg_php`
- Browser console for JavaScript errors

---

## Content Strategy

See **[CONTENT-STRATEGY.md](CONTENT-STRATEGY.md)** for:
- Brand voice guidelines
- Copywriting standards
- Tone and messaging
- Content structure

---

## Development Workflow

### Typical Development Session

1. **Start environment**
   ```bash
   ./start-dev.sh
   ```

2. **Work on theme**
   - Edit files in `/vvveb-theme-landing/`
   - Changes reflect immediately (CSS/JS)
   - Template changes may require cache clear

3. **Test in browser**
   - View site: http://localhost:8080/
   - Use admin: http://localhost:8080/cms/admin/

4. **Commit changes**
   ```bash
   git add vvveb-theme-landing/
   git commit -m "Update theme: [description]"
   ```

### Creating New Components

1. **Create section file**
   `/vvveb-theme-landing/sections/my-section/my-section.html`

2. **Add styles**
   `/vvveb-theme-landing/scss/sections/_my-section.scss`

3. **Import in main stylesheet**
   Edit `/vvveb-theme-landing/scss/style.scss`:
   ```scss
   @import 'sections/my-section';
   ```

4. **Add JavaScript (if needed)**
   `/vvveb-theme-landing/js/my-section.js`

5. **Register in VVVeb**
   Component appears in builder automatically

---

## Resources

### VVVeb Documentation
- **Official Docs**: https://docs.vvveb.com
- **Developer Docs**: https://dev.vvveb.com
- **Live Demo**: https://demo.vvveb.com
- **GitHub**: https://github.com/givanz/VvvebJs

### Project Documentation
- **README**: [README.md](README.md) - Project overview
- **Development**: [DEVELOPMENT-GUIDE.md](DEVELOPMENT-GUIDE.md) - Setup and workflows
- **Content**: [CONTENT-STRATEGY.md](CONTENT-STRATEGY.md) - Brand voice
- **Architecture**: [docs/architecture.md](docs/architecture.md) - Technical details

---

## Getting Help

### Common Issues

**Issue**: Can't login to admin
**Solution**: Reset password via phpMyAdmin or database

**Issue**: Theme changes not appearing
**Solution**: Clear cache in admin settings

**Issue**: Database error on startup
**Solution**: Check MySQL container logs, verify credentials

### Debug Mode

Enable debug mode for detailed error messages:

Edit `/public/cms/config/app.php`:
```php
'debug' => true,
```

**Remember**: Turn off debug mode in production!

---

**Last Updated**: November 17, 2025
**VVVeb Version**: Latest (installed November 2025)
**Theme**: TWG Landing Theme (custom)
