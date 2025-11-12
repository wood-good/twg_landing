# Webflow Architecture Documentation
## TWG Landing Page

**Version:** 1.0
**Date:** November 10, 2025
**Status:** Final

---

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         User Request                         │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                    Cloudflare Proxy Layer                    │
│  • DDoS Protection                                           │
│  • WAF (Web Application Firewall)                           │
│  • Caching Rules                                             │
│  • SSL/TLS Termination                                       │
│  • Analytics & Monitoring                                    │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                    Webflow Hosting (Origin)                  │
│  • Fastly CDN                                                │
│  • Global Edge Network                                       │
│  • Automatic SSL                                             │
│  • 99.99% Uptime SLA                                         │
└─────────────────────┬───────────────────────────────────────┘
                      │
                      ▼
┌─────────────────────────────────────────────────────────────┐
│                    Webflow Designer/CMS                      │
│  • Visual Editor (Client)                                    │
│  • CMS Collections                                           │
│  • Asset Management                                          │
│  • SEO Controls                                              │
└─────────────────────────────────────────────────────────────┘

                 Separate Architecture
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              Shopify Store (shop.twg.com)                    │
│  • Existing E-commerce Platform                              │
│  • Product Catalog                                           │
│  • Checkout & Orders                                         │
│  • Customer Management                                       │
│                                                              │
│  Phase 1: Completely Separate                                │
│  Phase 1.5: Integration Prototype                            │
│  Phase 2: Potential Buy Button Integration                   │
└─────────────────────────────────────────────────────────────┘
```

---

## Platform Specifications

### Webflow Configuration

**Plan Required:** CMS Plan ($23/mo minimum)

**Features Used:**
- Visual Designer (drag-and-drop interface)
- CMS Collections (for dynamic content)
- Asset Manager (images, videos)
- SEO Settings (per-page optimization)
- Form Builder (contact forms)
- Interactions & Animations (glassmorphism effects)
- Custom Code Embed (if needed for analytics)

**Content Structure:**
```
Webflow CMS Collections:
├── Pages
│   ├── Home
│   ├── Manufacturing
│   ├── Sustainability
│   └── Contact
├── Product Categories (reference only, no buy)
│   ├── Finger Joint
│   ├── Edge-Glued Panels
│   ├── Solid Wood
│   ├── Laminated Timber
│   └── Custom Products
├── Assets
│   ├── Hero Video (forest scenery)
│   ├── Product Images
│   ├── Process Photos
│   └── Brand Assets
└── Settings
    ├── Site Settings (global)
    ├── SEO Metadata
    └── Navigation
```

---

## Cloudflare Configuration

### DNS Setup

```
Domain: twg.com
Type: CNAME
Name: www
Target: proxy-ssl.webflow.com
Proxy: Enabled (Orange Cloud)
TTL: Auto
```

**Additional Records:**
```
shop.twg.com → Shopify (existing, managed separately)
```

### Cloudflare Settings

**SSL/TLS:**
- Mode: Full (strict)
- Edge Certificates: Universal SSL
- Always Use HTTPS: Enabled
- Automatic HTTPS Rewrites: Enabled
- Minimum TLS Version: 1.2

**Caching:**
- Caching Level: Standard
- Browser Cache TTL: 4 hours
- Always Online: Enabled

**Security:**
- Security Level: Medium
- WAF: Enabled (Free/Pro rules)
- Bot Fight Mode: Enabled
- Rate Limiting: As needed for forms

**Performance:**
- Auto Minify: HTML, CSS, JS
- Brotli Compression: Enabled
- HTTP/2: Enabled
- HTTP/3 (QUIC): Enabled

**Page Rules (Optional):**
```
Rule 1: www.twg.com/*
  - Cache Level: Cache Everything
  - Edge Cache TTL: 1 hour
  - Browser Cache TTL: 4 hours
```

---

## Performance Targets

| Metric | Target | Implementation |
|--------|--------|----------------|
| **First Contentful Paint** | <1.0s | Webflow optimization + Cloudflare CDN |
| **Largest Contentful Paint** | <1.5s | Image optimization, lazy loading |
| **Time to Interactive** | <2.0s | Minimal JS, Webflow interactions |
| **Cumulative Layout Shift** | <0.05 | Fixed dimensions, proper aspect ratios |
| **Lighthouse Performance** | >90 | Webflow best practices + optimization |
| **Lighthouse SEO** | >95 | Webflow SEO panel configuration |

---

## Content Management Workflow

### Client Content Updates

```
┌──────────────────────────────────────────────────────────┐
│ Step 1: Client logs into Webflow Designer                │
│         → webflow.com/dashboard                           │
└───────────────────┬──────────────────────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────────────────────────┐
│ Step 2: Navigate to Pages or CMS Collections             │
│         → Visual editing mode                             │
└───────────────────┬──────────────────────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────────────────────────┐
│ Step 3: Edit content directly (WYSIWYG)                  │
│         → Text, images, layout modifications              │
└───────────────────┬──────────────────────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────────────────────────┐
│ Step 4: Preview changes                                   │
│         → Check responsive breakpoints                    │
└───────────────────┬──────────────────────────────────────┘
                    │
                    ▼
┌──────────────────────────────────────────────────────────┐
│ Step 5: Publish to production                             │
│         → Instant deployment (no build process)           │
│         → Changes live in ~30 seconds                     │
└──────────────────────────────────────────────────────────┘
```

### Developer Updates

**For structural changes, custom code, or advanced interactions:**

1. Developer accesses Webflow Designer
2. Modifies structure, interactions, or custom code
3. Tests in staging environment
4. Publishes to production
5. Cloudflare automatically purges cache

---

## SEO Configuration

### Webflow SEO Settings (Per Page)

```
Page: Home
├── Title Tag: "TWG - Sustainable Woodworking & Timber Manufacturing"
├── Meta Description: "Premium wood products and sustainable timber solutions with complete forest-to-finish control. B2B partnerships for quality craftsmanship."
├── Open Graph Image: /assets/og-image.jpg
├── Schema Markup: Organization schema (JSON-LD)
└── Canonical URL: https://www.twg.com/

Page: Manufacturing
├── Title Tag: "Manufacturing Process | TWG"
├── Meta Description: "Discover TWG's complete manufacturing cycle control..."
└── ...

Page: Sustainability
├── Title Tag: "Sustainability Commitment | TWG"
├── Meta Description: "TWG's tree-to-tree cycle and environmental responsibility..."
└── ...
```

### Technical SEO

**Webflow Automatically Handles:**
- Clean URL structure
- Sitemap generation (sitemap.xml)
- Robots.txt
- Structured data (basic)
- Mobile-responsive meta tags
- Social media tags (Open Graph, Twitter Cards)

**Manual Configuration Needed:**
- Google Analytics integration (via custom code)
- Google Search Console verification
- Google Tag Manager (optional)

---

## Analytics & Monitoring

### Google Analytics 4

**Implementation:**
```html
<!-- Add to Webflow Project Settings → Custom Code → Head -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Cloudflare Analytics

**Built-in Metrics:**
- Page views
- Unique visitors
- Bandwidth usage
- Cache hit ratio
- Security events
- Performance metrics

**Access:** Cloudflare Dashboard → Analytics tab

---

## Security Considerations

### Webflow Security Features

✅ **Included by Default:**
- SSL/TLS encryption (Let's Encrypt)
- Automatic security updates
- DDoS protection (via hosting)
- Form spam protection (reCAPTCHA option)
- Input sanitization

### Cloudflare Security Layer

✅ **Additional Protection:**
- WAF (Web Application Firewall)
- DDoS mitigation (Layer 3, 4, 7)
- Bot management
- Rate limiting (API calls, forms)
- SSL/TLS encryption (edge to origin)

### Form Security

**Contact Form Configuration:**
- Enable reCAPTCHA v3 in Webflow
- Cloudflare rate limiting on form endpoint
- Email notifications to client
- Store submissions in Webflow (optional)

---

## Backup & Disaster Recovery

### Webflow Backup Strategy

**Automatic:**
- Webflow maintains version history
- Can restore previous versions from Designer
- Hosting infrastructure is redundant

**Manual Backups:**
- Export site code monthly (HTML/CSS/JS)
- Store exported code in version control
- Document custom configurations

### Disaster Recovery Plan

**Scenario 1: Webflow Outage**
- Cloudflare caching serves cached pages
- 99.99% uptime SLA from Webflow
- Fallback: Static export on backup hosting

**Scenario 2: DNS Issues**
- Cloudflare DNS redundancy
- Update DNS if needed (TTL: Auto)

**Scenario 3: Content Corruption**
- Restore from Webflow version history
- Rollback to previous published version

---

## Development Workflow

### Phase 1: Initial Build (2 weeks)

```
Week 1:
├── Day 1-2: Design in Webflow Designer
│            - Create page structures
│            - Implement glassmorphism
│            - Add hero video section
├── Day 3-4: Build content pages
│            - Manufacturing page
│            - Sustainability page
│            - Product category pages
└── Day 5:   Setup CMS collections
             - Product categories
             - Asset organization

Week 2:
├── Day 6-7: Responsive design
│            - Mobile optimization
│            - Tablet breakpoints
│            - Cross-browser testing
├── Day 8:   Content population
│            - Client content insertion
│            - Image optimization
│            - SEO configuration
├── Day 9:   Performance optimization
│            - Lighthouse audits
│            - Image compression
│            - Interaction optimization
└── Day 10:  Launch preparation
             - Cloudflare setup
             - DNS configuration
             - Final testing
             - Client handoff
```

---

## Maintenance & Updates

### Regular Maintenance Tasks

**Monthly:**
- Review Cloudflare analytics
- Check Lighthouse performance scores
- Update content as needed
- Review form submissions

**Quarterly:**
- Content updates (per PRD)
- SEO review and optimization
- Security audit (Cloudflare dashboard)
- Backup verification

**Annually:**
- Major content revisions
- Design refresh evaluation
- Platform review (Webflow updates)

---

## Cost Breakdown

| Service | Plan | Monthly Cost | Annual Cost |
|---------|------|--------------|-------------|
| **Webflow** | CMS Plan | $23 | $276 |
| **Cloudflare** | Free/Pro | $0-20 | $0-240 |
| **Shopify** | Existing | N/A | N/A |
| **Domain** | Existing | N/A | N/A |
| **Total** | | $23-43 | $276-516 |

**Note:** Shopify costs are separate and managed by client.

---

## Migration Path from Astro/Sanity (Original Plan)

### What Changed

**Removed:**
- ❌ Astro static site generator
- ❌ Sanity CMS setup
- ❌ Node.js build process
- ❌ API integration layer
- ❌ Custom deployment pipeline
- ❌ CMS hosting costs

**Added:**
- ✅ Webflow all-in-one platform
- ✅ Visual editing (no code)
- ✅ Instant publishing
- ✅ Built-in hosting
- ✅ Simpler architecture

### Benefits of Webflow Approach

| Aspect | Astro + Sanity | Webflow | Advantage |
|--------|---------------|---------|-----------|
| **Setup Time** | 1-2 days | 2-4 hours | **Webflow** |
| **Client Training** | 2-3 hours | 30 mins | **Webflow** |
| **Content Updates** | CMS + rebuild | Instant publish | **Webflow** |
| **Maintenance** | Manual | Automatic | **Webflow** |
| **Design Control** | Code-based | Visual | **Webflow** |
| **Hosting** | Separate | Included | **Webflow** |
| **Cost** | $10-50/mo | $23/mo | **Similar** |
| **Complexity** | High | Low | **Webflow** |

---

## Support & Resources

### Webflow Resources
- Documentation: https://university.webflow.com
- Community Forum: https://forum.webflow.com
- Support: support@webflow.com
- Video Tutorials: Webflow University

### Cloudflare Resources
- Documentation: https://developers.cloudflare.com
- Community: https://community.cloudflare.com
- Support: support@cloudflare.com
- Status: https://www.cloudflarestatus.com

---

## Appendix: Technical Specifications

### Browser Support

| Browser | Minimum Version | Support Level |
|---------|----------------|---------------|
| Chrome | Latest 2 | Full |
| Edge | Latest 2 | Full |
| Safari | 15+ | Full (with CSS fallbacks) |
| Firefox | Latest 2 | Full |
| Mobile Safari | 15+ | Full |
| Chrome Android | Latest | Full |

### Performance Specifications

**Target Metrics (Lighthouse):**
- Performance: >90
- Accessibility: >90 (WCAG 2.1 AA)
- Best Practices: >90
- SEO: >95

**Page Weight Targets:**
- HTML: <50KB
- CSS: <100KB (Webflow generates optimized CSS)
- JS: <150KB (Webflow + interactions)
- Images: WebP format, optimized
- Video: <5MB (compressed, multiple quality levels)

---

*This architecture document is maintained by the development team and updated as the platform evolves.*
