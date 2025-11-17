# The Wood and Good - Landing Site

> **"Where Forest Meets Forever"**
> Premium B2B website for TWG - artisanal oak table makers inspiring people to live differently through timeless craftsmanship.

---

## Overview

**TWG (The Wood and Good)** is a luxury oak table manufacturer with three generations of craftsmanship experience. This website embodies their philosophy of mindful, intentional living through carefully crafted digital experiences.

### Design Philosophy
- **Inspirational, not transactional** - We inspire perspective, not push products
- **Premium aesthetics** - Creative luxury for curated living
- **Timeless over trendy** - Built to endure
- **Generous whitespace** - Space signals value and intentionality

### Technology Platform
- **VVVeb CMS** - Visual page builder and content management
- **Custom Theme** - Premium TWG landing theme
- **Docker** - Containerized development environment
- **PHP 8.1 + MySQL** - Modern stack

---

## Quick Start

### Prerequisites
- Docker Desktop
- Git

### Installation

```bash
# Clone repository
git clone <repository-url>
cd twg_landing

# Start environment
./start-dev.sh

# Access the site
open http://localhost:8080
```

### Access Points
- **Website**: http://localhost:8080/
- **VVVeb Admin**: http://localhost:8080/cms/admin/
  - Email: `admin@thewoodandgood.com`
  - Password: `TWGAdmin2024`
- **phpMyAdmin**: http://localhost:8081/
  - User: `root`, Password: `root_password`

### Stop Environment
```bash
./stop-dev.sh
```

---

## Project Structure

```
/
├── public/                    # Web root
│   ├── cms/                  # VVVeb CMS
│   ├── vvveb-builder/        # Visual page builder
│   └── assets/
│       └── videos/          # Optimized video assets
│
├── vvveb-theme-landing/      # PRIMARY CODEBASE
│   ├── blocks/              # Reusable content blocks
│   ├── sections/            # Page sections
│   ├── css/                # Theme styles
│   ├── scss/               # Sass source files
│   ├── js/                 # Theme JavaScript
│   └── content/            # Page templates
│
├── docker/                   # Docker configuration
│   ├── nginx/              # Web server config
│   ├── php/                # PHP-FPM config
│   └── mysql/              # Database init
│
├── docs/                     # Project documentation
│   ├── architecture.md      # Technical architecture
│   ├── brief.md            # Project brief
│   └── prd.md              # Product requirements
│
├── archive/                  # Archived legacy code
│   ├── static-website/      # Old static PHP site
│   └── docs/               # Obsolete documentation
│
├── docker-compose.yml
├── start-dev.sh
├── stop-dev.sh
├── README.md               # This file
├── VVVEB-GUIDE.md          # VVVeb development guide
├── DEVELOPMENT-GUIDE.md    # Technical setup & workflows
└── CONTENT-STRATEGY.md     # Brand voice & copywriting
```

---

## Development

### Primary Codebase

**All development happens in** `/vvveb-theme-landing/`

This is the active VVVeb theme that powers the website.

### Quick Development Workflow

1. **Edit theme files**
   ```bash
   cd vvveb-theme-landing/
   # Edit sections, styles, or scripts
   ```

2. **View changes**
   - Frontend: http://localhost:8080/
   - Admin: http://localhost:8080/cms/admin/

3. **Commit changes**
   ```bash
   git add vvveb-theme-landing/
   git commit -m "Update: [description]"
   ```

### Key Directories

- **`/vvveb-theme-landing/sections/`** - Page components (hero, footer, etc.)
- **`/vvveb-theme-landing/scss/`** - Sass source files
- **`/vvveb-theme-landing/js/`** - Theme JavaScript
- **`/vvveb-theme-landing/blocks/`** - Reusable content blocks

---

## Documentation

### Essential Guides
1. **[VVVEB-GUIDE.md](VVVEB-GUIDE.md)** - VVVeb CMS & theme development
2. **[DEVELOPMENT-GUIDE.md](DEVELOPMENT-GUIDE.md)** - Technical setup & workflows
3. **[CONTENT-STRATEGY.md](CONTENT-STRATEGY.md)** - Brand voice & copywriting guidelines

### Project Documents
- **[docs/architecture.md](docs/architecture.md)** - Technical architecture
- **[docs/brief.md](docs/brief.md)** - Project brief
- **[docs/prd.md](docs/prd.md)** - Product requirements

### Archived Documentation
Legacy documentation from the static website phase has been moved to `/archive/docs/` for reference.

---

## Technology Stack

### Platform
- **VVVeb CMS** - Content management & visual builder
- **PHP 8.1** - Server-side runtime
- **MySQL 8.0** - Database
- **Nginx** - Web server

### Frontend
- **Custom Theme** - Premium TWG design
- **Sass** - CSS preprocessing
- **JavaScript** - Theme interactions
- **Video Assets** - Optimized web video

### DevOps
- **Docker Compose** - Local development
- **Git** - Version control

---

## Design System

### Typography
- **Display**: Playfair Display (headlines)
- **Body**: Crimson Text (content)
- **UI**: Inter (navigation, forms)

### Color Palette
```css
--oak-darkest: #2a1810;    /* Deep heartwood */
--oak-dark: #3d2817;        /* Primary dark */
--oak-honey: #b8956a;       /* Accent */
--oak-cream: #e8dcc8;       /* Light text */
--warm-white: #faf7f0;      /* Backgrounds */
```

### Spacing
- **Base unit**: 8px
- **Section padding**: Generous (192-256px)
- **Content width**: 45-60rem (optimal readability)

---

## Target Audience

### Primary
- **B2B Premium Buyers**: Interior designers, architects, boutique hotels
- **Discerning Individuals**: People valuing craftsmanship and philosophy
- **Age**: 35-65, established professionals
- **Values**: Sustainability, authenticity, heritage, mindful living

### Positioning
Not selling tables — inspiring people to see new perspectives in life through the philosophy of mindful, intentional living.

---

## Roadmap

### Current Phase: VVVeb Platform Development
- [x] VVVeb CMS installed and configured
- [x] Theme structure established
- [x] Docker environment setup
- [ ] Theme components development
- [ ] Content migration
- [ ] Professional photography
- [ ] Performance optimization

### Future Enhancements
- Blog integration
- Product catalog
- Client testimonials
- Portfolio showcase
- Newsletter signup

---

## Browser Support

- **Modern browsers**: Full support (Chrome, Firefox, Safari, Edge)
- **Mobile**: iOS Safari 12+, Chrome Android
- **IE11**: Basic functionality (graceful degradation)

---

## Contributing

### Code Standards
- Follow existing code style
- Test on multiple browsers
- Optimize for performance
- Document changes

### Design Principles
- Maintain generous whitespace
- Use premium typography system
- Follow brand guidelines (see CONTENT-STRATEGY.md)

---

## Support

### Common Issues
See [VVVEB-GUIDE.md](VVVEB-GUIDE.md) troubleshooting section

### Development Help
See [DEVELOPMENT-GUIDE.md](DEVELOPMENT-GUIDE.md)

### Content Questions
See [CONTENT-STRATEGY.md](CONTENT-STRATEGY.md)

---

## Philosophy

> "We don't make tables. We create spaces where families gather, decisions are made, and memories take root."

This project embodies TWG's values:
- **Intentionality over speed** - Every element earns its place
- **Timeless over trendy** - Built to endure
- **Inspiration over transaction** - We inspire, not sell
- **Connection to nature** - Forest to forever

---

**Built with intention**
🌲 Where Forest Meets Forever 🌲
