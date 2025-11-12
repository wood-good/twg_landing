# Story 1.5: Webflow Project Setup & Site Settings

**Story ID:** STORY-1.5
**Epic:** Epic 1 - First Impression
**Priority:** P0 - Critical
**Story Points:** 2
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As a** content manager
**I want** to manage site-wide settings in Webflow
**So that** I can update logo, navigation, and branding without code changes

---

## Description

Set up the Webflow project, configure site-wide settings including site name, SEO metadata, logo upload to Asset Manager, and establish project structure for TWG Landing Page development.

---

## Acceptance Criteria

- [ ] Webflow account created and CMS plan activated
- [ ] New project created: "TWG Landing Page"
- [ ] Logo uploaded to Asset Manager with proper naming
- [ ] Site name and SEO settings configured
- [ ] Favicon uploaded and configured
- [ ] Custom domain settings ready (for later)
- [ ] Project shared with team members
- [ ] Webflow CMS plan activated (if needed for products)
- [ ] Default fonts configured
- [ ] Color variables defined (if using Webflow variables)

---

## Webflow Implementation

### Step 1: Create Webflow Account & Project

1. Go to [webflow.com](https://webflow.com)
2. Sign up for account (or log in)
3. Click **"New Project"**
4. Select **"Blank Site"**
5. Name project: `TWG Landing Page`
6. Click **"Create Project"**

**Account Plan:**
- Start with **Free** plan for development
- Upgrade to **CMS Plan** ($23/month) when ready to publish
- Upgrade to **Business Plan** ($39/month) if using CMS Collections

---

### Step 2: Configure Site Settings

1. In Webflow Designer, click **Settings** (gear icon in left sidebar)
2. Navigate to **General** tab
3. Configure:
   - **Site Name:** TWG - Sustainable Wood Products
   - **Short Name:** TWG
   - **Time Zone:** (select appropriate timezone)
   - **Language:** English

---

### Step 3: Upload Logo to Asset Manager

1. Click **Assets** panel (A key shortcut)
2. Click **Upload** button
3. Upload files:
   - **Primary Logo:** `twg-logo.svg` or `twg-logo.png`
   - **Logo variants** (if available):
     - `twg-logo-white.svg` (for dark backgrounds)
     - `twg-logo-dark.svg` (for light backgrounds)
   - **Favicon:** `favicon.ico` (or PNG, 32x32px minimum)

**Logo Naming Convention:**
- Use lowercase, hyphens for spaces
- Include descriptive names: `twg-logo-primary.svg`
- Group related assets in folders (if Webflow Business plan)

**Recommended Logo Specs:**
- Format: SVG (scalable) or PNG with transparency
- Size: Original should be at least 400px wide
- File size: <200KB
- Color mode: RGB

---

### Step 4: Configure Favicon

1. In **Settings → General** tab
2. Scroll to **Favicon Image** section
3. Click **Choose Image**
4. Upload favicon:
   - **Format:** PNG (32x32px or 64x64px) or ICO
   - **Recommended:** 64x64px PNG with transparency
5. Webflow will auto-generate apple-touch-icon and other sizes

**Favicon Best Practices:**
- Simple, recognizable at small sizes
- Solid background or transparency
- Test at 16x16px to ensure readability

---

### Step 5: Configure SEO Settings

1. In **Settings → SEO** tab
2. Configure **General** settings:
   - **Meta Title Template:** `%s | TWG - Sustainable Wood Products`
   - **Meta Description:** "Premium sustainable wood products for discerning B2B buyers. Complete tree-to-product control ensures exceptional quality."
   - **Meta Keywords:** (optional, not critical for SEO)

3. **Open Graph Settings** (for social sharing):
   - **OG Title:** TWG - Sustainable Wood Products
   - **OG Description:** Same as meta description
   - **OG Image:** Upload hero image or logo (1200x630px recommended)

4. **Twitter Card Settings:**
   - **Twitter Card Type:** Summary Large Image
   - **Twitter Image:** Same as OG image
   - **Twitter Handle:** @twg (if available)

---

### Step 6: Configure Publishing Settings

1. In **Settings → Publishing** tab
2. Note the **Webflow subdomain:** `twg-landing-page.webflow.io` (auto-generated)
3. Configure **Custom Domain** (for later deployment):
   - Click **"Add Custom Domain"**
   - Enter: `www.twg.com` (or client's domain)
   - Follow DNS instructions (CNAME record)
   - **Note:** Don't publish to custom domain yet (staging first)

**Staging URL Structure:**
- Development: `twg-landing-page.webflow.io`
- Staging: `staging.twg.com` (configure later)
- Production: `www.twg.com` (after client approval)

---

### Step 7: Set Up CMS Plan (If Using Products)

1. In **Settings → Hosting** tab
2. Click **"Upgrade Site Plan"**
3. Select **CMS Plan** ($23/month)
   - Allows 2,000 CMS items
   - Includes hosting
   - Required for product pages (Epic 2)
4. Activate plan

**When to Upgrade:**
- Immediately if building products page (Epic 2)
- Can wait if only building hero section (Epic 1)
- Free plan allows design, paid plan required for publishing

---

### Step 8: Configure Typography

1. In **Webflow Designer**, open **Style Panel**
2. Click **Fonts** tab
3. Add fonts:
   - **Primary Font:** (e.g., Inter, Open Sans from Google Fonts)
   - **Heading Font:** (e.g., Poppins, Montserrat)
4. Set **Body Font** default:
   - Select `<body>` element (navigator)
   - Set font family, size (16px), line height (1.5)

**Recommended Font Pairings:**
- **Modern:** Inter (body) + Poppins (headings)
- **Professional:** Open Sans (body) + Montserrat (headings)
- **Classic:** Lato (body) + Roboto (headings)

**Add Custom Fonts (if needed):**
```html
<!-- In Site Settings → Custom Code → Head Code -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Poppins:wght@600;700&display=swap" rel="stylesheet">
```

---

### Step 9: Define Color Variables (Optional)

**Method A: Using Webflow Variables (Recommended)**

1. Open **Style Panel → Variables**
2. Create color variables:
   - **Primary:** `#2C5530` (Forest Green)
   - **Secondary:** `#8B4513` (Wood Brown)
   - **Accent:** `#F0E68C` (Light Gold)
   - **Text:** `#333333` (Dark Gray)
   - **Background:** `#FFFFFF` (White)
   - **Glass:** `rgba(255, 255, 255, 0.1)` (for glassmorphism)

**Method B: Using Custom CSS (Alternative)**

```html
<!-- In Site Settings → Custom Code → Head Code -->
<style>
:root {
  --color-primary: #2C5530;
  --color-secondary: #8B4513;
  --color-accent: #F0E68C;
  --color-text: #333333;
  --color-background: #FFFFFF;
  --color-glass: rgba(255, 255, 255, 0.1);
}
</style>
```

---

### Step 10: Team Access & Collaboration

1. In **Settings → Team** tab
2. Click **"Invite Team Member"**
3. Add team members:
   - **Email:** team@example.com
   - **Role:** Editor (can design) or Designer (full access)
4. Send invitations

**Access Levels:**
- **Designer:** Full access (recommended for developers)
- **Editor:** Can edit content, limited design changes
- **Client:** Content editing only (for client team)

---

### Step 11: Project Organization

1. **Create Pages:**
   - Homepage (created by default)
   - Products (create new page)
   - Manufacturing (create new page)
   - Sustainability (create new page)
   - Contact (create new page)

2. **Page Settings for Each:**
   - **SEO Title:** e.g., "Products | TWG"
   - **SEO Description:** Page-specific description
   - **URL Slug:** `/products`, `/manufacturing`, etc.

---

## Asset Checklist

**Required Assets to Upload:**

- [ ] Primary logo (SVG or PNG)
- [ ] Logo white version (for dark backgrounds)
- [ ] Favicon (32x32px or 64x64px PNG)
- [ ] OG image for social sharing (1200x630px)
- [ ] Hero video (from Story 1.1) - can be uploaded in Story 1.1
- [ ] Hero poster image (from Story 1.1)

**Asset Organization:**
- Name assets clearly: `logo-primary.svg`, `hero-video.mp4`
- Use folders if on Business plan
- Delete unused assets to save storage

---

## SEO Best Practices

**Meta Title Template:**
- Format: `Page Name | Company Name - Brief Description`
- Example: `%s | TWG - Sustainable Wood Products`
- Max 60 characters

**Meta Description:**
- 150-160 characters
- Include primary keyword
- Compelling call-to-action
- Example: "Premium sustainable wood products for discerning B2B buyers. Complete tree-to-product control ensures exceptional quality."

**Open Graph Image:**
- 1200x630px (Facebook/LinkedIn recommended)
- Include logo or hero image
- Text-free (shows on small previews)

---

## Dependencies

**Blocked By:**
- None (first story in Epic 01)

**Blocks:**
- Story 1.1 (needs project to add video)
- Story 1.2 (needs project and logo for header)
- Story 1.4 (needs logo uploaded)

**External:**
- Webflow account credentials
- Logo files from client/designer
- Domain name (if ready)
- Client approval for site name/branding

---

## Testing Checklist

### Webflow Designer Testing

- [ ] Project opens in Webflow Designer
- [ ] Site name displayed correctly
- [ ] Logo appears in Asset Manager
- [ ] Favicon visible in browser tab (after publish)
- [ ] All pages created and accessible
- [ ] Team members can access project

### SEO & Metadata Testing

- [ ] Meta title template working on all pages
- [ ] Meta descriptions unique per page
- [ ] OG image displays when sharing URL
- [ ] Twitter card preview correct
- [ ] Favicon appears in browser tabs

### Publishing Testing

- [ ] Can publish to Webflow subdomain
- [ ] Published site accessible at `[project].webflow.io`
- [ ] Custom domain DNS configured (if ready)
- [ ] SSL certificate active (Webflow auto-provisions)

---

## Webflow Account Structure

**Recommended Setup:**

```
Webflow Account
├── Workspace: "TWG Projects"
│   ├── Project: "TWG Landing Page"
│   │   ├── Pages: Homepage, Products, Manufacturing, etc.
│   │   ├── CMS: Products Collection (if using)
│   │   └── Assets: Logos, images, videos
│   └── (Future projects)
└── Team Members: Developers, Client contacts
```

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Webflow project created and accessible
- [ ] CMS plan activated (if building products)
- [ ] Logo uploaded to Asset Manager
- [ ] Favicon configured
- [ ] SEO settings configured (meta title, description, OG)
- [ ] Typography configured (fonts selected)
- [ ] Color variables defined (optional but recommended)
- [ ] All main pages created (Home, Products, Manufacturing, Sustainability, Contact)
- [ ] Team members invited and have access
- [ ] Can publish to Webflow staging subdomain
- [ ] DNS instructions documented (for custom domain)
- [ ] Asset naming conventions documented
- [ ] Client has Editor access to update content

---

## Troubleshooting Guide

### Issue: Cannot publish site
**Solution:**
- Upgrade to CMS or Site plan ($23/month minimum)
- Free plan allows design only, not publishing
- Choose plan based on CMS needs

### Issue: Logo appears pixelated
**Solution:**
- Use SVG format (scalable vector)
- If PNG, upload 2x size (e.g., 400px for 200px display)
- Check original file quality

### Issue: Favicon not showing
**Solution:**
- Clear browser cache (Ctrl+Shift+R)
- Ensure favicon is 32x32px or 64x64px
- Publish site (favicon only shows on published sites)
- Wait 5-10 minutes for browser cache refresh

### Issue: Team member cannot access project
**Solution:**
- Check invitation was sent and accepted
- Ensure correct email address used
- Verify team member role (Editor vs Designer)
- Re-send invitation if needed

### Issue: Custom domain not connecting
**Solution:**
- Verify CNAME record points to `proxy-ssl.webflow.com`
- Check DNS propagation (can take 24-48 hours)
- Ensure domain registrar allows CNAME for www
- Use Webflow's DNS checker in Settings

---

## Notes

- **Start with Free plan** during development, upgrade before publishing
- **CMS plan required** for products page (Epic 2)
- **Custom domain** can be configured later (not critical for Phase 1)
- **Webflow Editor** allows client to update content without Designer access
- **Asset Manager** has storage limits (2GB on CMS plan, 50GB on Business)
- **Staging subdomain** (`[project].webflow.io`) is free and unlimited
- Keep **asset names descriptive** for team collaboration

---

## Resources

- [Webflow Getting Started Guide](https://university.webflow.com/lesson/webflow-quickstart)
- [Webflow Site Settings](https://university.webflow.com/lesson/site-settings)
- [Webflow SEO Settings](https://university.webflow.com/lesson/seo-settings)
- [Webflow Asset Manager](https://university.webflow.com/lesson/assets-panel)
- [Webflow CMS Plans](https://webflow.com/pricing)
- [Custom Domain Setup](https://university.webflow.com/lesson/add-a-custom-domain)

---

**Status:** Ready for Development ✅
**Review URL:** Will be `[project-name].webflow.io` after setup
