# The Wood and Good - Landing Page

Premium oak furniture website built with VVVeb CMS.

---

## Quick Start

### Start Development Environment
```bash
./start-dev.sh
```

### Stop Development Environment
```bash
./stop-dev.sh
```

---

## Access URLs

| Service | URL | Purpose |
|---------|-----|---------|
| **Website** | http://localhost:8080/ | Public-facing site |
| **VVVeb Admin** | http://localhost:8080/admin/ | CMS dashboard |
| **phpMyAdmin** | http://localhost:8081 | Database management |
| **MySQL** | localhost:3306 | Direct database access |

---

## Database Credentials

```
Database: vvveb_db
Username: vvveb_user
Password: vvveb_pass
Root Password: root_password
```

---

## First Time Setup

1. **Start containers**:
   ```bash
   ./start-dev.sh
   ```

2. **Open VVVeb installer**:
   http://localhost:8080/vvveb-cms/install/

3. **Configure database** (use credentials above)

4. **Complete installation**

5. **Access admin panel**:
   http://localhost:8080/vvveb-cms/admin/

---

## Project Structure

```
.
├── docs/                           # All project documentation
│   ├── architecture/              # Architecture and design docs
│   ├── cms/                       # VVVeb CMS documentation
│   ├── content/                   # Brand copywriting content
│   ├── guides/                    # Operational guides
│   └── setup/                     # Setup and installation docs
├── docker/                         # Docker configuration
│   ├── nginx/default.conf         # Nginx config (CRITICAL - asset routing)
│   └── php/                       # PHP-FPM Dockerfile
├── public/                         # Web root
│   ├── index.php                  # Entry point (CRITICAL - VVVeb config)
│   └── vvveb/                     # VVVeb CMS installation
│       ├── app/                   # Controllers and application logic
│       ├── config/                # Site and database configuration
│       ├── env.php                # Environment settings
│       ├── index.php              # VVVeb bootstrap
│       ├── public/themes/landing/ # Theme HTML templates
│       └── storage/               # Cache and compiled templates
├── docker-compose.yml              # Container orchestration
├── start-dev.sh                    # Start script
└── stop-dev.sh                     # Stop script
```

---

## Architecture Overview (CRITICAL)

This project uses **VVVeb CMS for dynamic page rendering**. Every page request goes through PHP and the VVVeb template engine.

### Request Flow

```
Browser Request
      ↓
   nginx
      ↓
/public/index.php          ← Sets PUBLIC_PATH, V_SUBDIR_INSTALL
      ↓
/public/vvveb/index.php    ← VVVeb bootstrap
      ↓
Route Matching             ← Uses /vvveb/app/config/app-routes.php
      ↓
Controller                 ← e.g., /vvveb/app/controller/index.php
      ↓
Template Engine (vtpl)     ← Processes data-v-* attributes
      ↓
Rendered HTML
```

### Why This Structure Must Be Maintained

1. **Entry Point Configuration** - `public/index.php` defines critical constants:
   - `V_SUBDIR_INSTALL = ''` - Tells VVVeb it's at web root, not `/vvveb`
   - `PUBLIC_PATH = '/'` - Base path for page URLs
   - `PUBLIC_THEME_PATH` - Path for theme assets

2. **Nginx Asset Aliases** - `docker/nginx/default.conf` maps asset URLs:
   - `/themes/` → `/vvveb/public/themes/`
   - `/media/` → `/vvveb/public/media/`
   - `/js/` → `/vvveb/public/js/`

   Without these, CSS/JS/images return 404.

3. **VVVeb Subdirectory Detection** - `vvveb/index.php` auto-detects subdirectory from file path. Our override prevents it from incorrectly detecting `/vvveb`.

4. **Template Caching** - VVVeb compiles templates to `/vvveb/storage/compiled-templates/`. After config changes, clear this cache:
   ```bash
   docker exec twg_php rm -rf /var/www/html/vvveb/storage/compiled-templates/*
   ```

### What NOT to Change

| File | Why It's Critical |
|------|-------------------|
| `public/index.php` | Defines VVVeb configuration constants |
| `docker/nginx/default.conf` | Routes static assets correctly |
| `vvveb/index.php` (line 55) | Modified subdirectory detection |
| `vvveb/env.php` | V_SUBDIR_INSTALL must be false |

### Editing Theme Templates

Your page templates are in `/public/vvveb/public/themes/landing/`:
- `index.html` - Homepage
- `products.html` - Products page
- `about.html` - About page
- `manufacturing.html` - Manufacturing page
- `sustainability.html` - Sustainability page
- `contact.html` - Contact page

VVVeb processes `data-v-*` attributes in these files to inject dynamic content from the database.

---

## Tech Stack

- **CMS**: VVVeb (Open Source)
- **Web Server**: Nginx 1.29
- **Backend**: PHP 8.1-FPM
- **Database**: MySQL 8.0
- **Admin Tools**: phpMyAdmin
- **Containerization**: Docker Compose

---

## Development Workflow

### Creating Pages

1. Log into VVVeb admin
2. Use visual page builder
3. All pages auto-saved to `/public/`
4. Changes visible immediately at http://localhost:8080

### Adding Content

- Use VVVeb admin panel for content management
- Reference copywriting from `/docs/content/` directory
- Upload images/videos through VVVeb interface

### Database Access

- **Web UI**: http://localhost:8081 (phpMyAdmin)
- **CLI**: `docker exec -it twg_mysql mysql -u vvveb_user -p`

---

## Docker Commands

### View Running Containers
```bash
docker ps
```

### View Logs
```bash
docker logs twg_nginx
docker logs twg_php
docker logs twg_mysql
```

### Restart Container
```bash
docker restart twg_nginx
```

### Access Container Shell
```bash
docker exec -it twg_nginx sh
docker exec -it twg_php bash
```

### Clean Rebuild
```bash
./stop-dev.sh
docker-compose up -d --build --force-recreate
```

---

## Troubleshooting

### Port Conflicts
If ports 8080, 8081, or 3306 are in use:
1. Stop conflicting services
2. Or edit `docker-compose.yml` to use different ports

### Permission Issues
```bash
chmod +x start-dev.sh stop-dev.sh
```

### Reset Everything
```bash
./stop-dev.sh
docker-compose down -v  # Removes volumes (deletes database!)
./start-dev.sh
```

### VVVeb Not Loading
1. Check containers are running: `docker ps`
2. Check nginx logs: `docker logs twg_nginx`
3. Verify PHP-FPM: `docker logs twg_php`

### CSS/JS Not Loading (404 Errors)
Assets return 404 if nginx aliases are misconfigured. Check:
```bash
curl -I http://localhost:8080/themes/landing/css/style.bundle.css
```
Should return `200 OK`. If not, verify `docker/nginx/default.conf` has correct location aliases.

### Pages Show Wrong URLs (e.g., /vvveb/public/)
1. Clear compiled templates:
   ```bash
   docker exec twg_php rm -rf /var/www/html/vvveb/storage/compiled-templates/*
   docker exec twg_php rm -rf /var/www/html/vvveb/storage/cache/*
   ```
2. Clear PHP OPcache:
   ```bash
   docker exec twg_php php -r "opcache_reset();"
   ```
3. Verify `public/index.php` has correct constants

### Admin Navigation Bar Appearing on Site
This is caused by VVVeb editor session in browser localStorage:
1. Open site in incognito/private mode, OR
2. Clear localStorage in DevTools console:
   ```javascript
   localStorage.clear(); sessionStorage.clear(); location.reload();
   ```

---

## Brand Assets

All copywriting content is preserved in `/docs/content/`:
- Brand voice guidelines
- Product descriptions
- Page content drafts
- Marketing copy

---

## Next Steps

1. ✅ Complete VVVeb installation
2. ✅ Configure routing and asset paths
3. ✅ Build 6 pages (Home, About, Products, Manufacturing, Sustainability, Contact)
4. ⬜ Upload brand assets (logo, product images)
5. ⬜ Add video backgrounds
6. ⬜ Configure contact forms
7. ⬜ Test responsive design
8. ⬜ Launch!

---

## Support

- **VVVeb Docs**: https://www.vvveb.com/documentation
- **Docker Docs**: https://docs.docker.com/
- **Project Issues**: Create issue in repository

---

**Status**: ✅ VVVeb CMS operational with custom routing
**Environment**: Local development
**Last Updated**: November 17, 2025

🌲 **Where Forest Meets Forever** 🌲
