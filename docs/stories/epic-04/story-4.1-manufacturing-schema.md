# Story 4.1: Manufacturing Page Setup (Webflow)

**Story ID:** STORY-4.1
**Epic:** Epic 4 - Manufacturing Transparency
**Priority:** P1
**Story Points:** 3
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As a** content manager
**I want** to manage manufacturing content through Webflow
**So that** I can update process details without code changes

---

## Description

Set up the Manufacturing page in Webflow as a static page with Webflow Editor access. Similar to Sustainability page (Story 3.1), this uses a Static Page approach for simplicity and ease of content management.

---

## Acceptance Criteria

- [ ] Manufacturing page created at `/manufacturing` URL
- [ ] Page structure supports: hero, overview, process steps, quality control, equipment
- [ ] Content is editable by client via Webflow Editor
- [ ] SEO metadata configured
- [ ] Mobile-responsive layout
- [ ] Breadcrumb navigation

---

## Webflow Implementation

### Step 1: Create Manufacturing Static Page

1. In **Webflow Designer** → **Pages Panel**
2. Click **"+"** to add new page
3. Configure:
   - **Page Name:** Manufacturing
   - **Slug:** `manufacturing`
   - **SEO Title:** "Manufacturing | TWG - Quality & Transparency"
   - **SEO Description:** "Discover TWG's transparent manufacturing process, from raw timber to finished products. Complete quality control at every step."
4. Click **"Create Page"**

---

### Step 2: Plan Page Structure

The page will contain these sections (built in subsequent stories):

1. **Hero Section** (This Story)
   - Compelling title
   - Optional background image

2. **Overview Section** (This Story)
   - Rich text content
   - Introduction to manufacturing process

3. **Process Steps** (Story 4.3)
   - 3-5 manufacturing steps
   - Alternating image/text layout

4. **Quality Control** (Story 4.4)
   - Quality assurance content
   - Highlight cards

5. **Equipment Showcase** (Story 4.5 - Optional)
   - Equipment grid
   - Technology descriptions

---

### Step 3: Configure Page Settings

1. Select **Manufacturing** page
2. **Page Settings:**

**SEO Tab:**
- **Meta Title:** "Manufacturing | TWG - Quality & Transparency"
- **Meta Description:** "Discover TWG's transparent manufacturing process, from raw timber to finished products. Complete quality control at every step."
- **OG Image:** Upload manufacturing facility image (1200x630px)

**Settings Tab:**
- **Page Transitions:** Fade (300ms)
- **Custom Code:** (leave empty for now)

---

### Step 4: Add Hero Section

1. Add **Section** element at top of page
2. Set class: `manufacturing-hero`
3. Configure:
   - **Padding:** 80px (top/bottom), 32px (left/right)
   - **Text Align:** Center
   - **Background:** Optional light gray or subtle gradient

4. **Hero Title:**
   - Add **Heading (H1):** "Precision Manufacturing, Complete Transparency"
   - **Font Size:** 48px (desktop), 32px (mobile)
   - **Font Weight:** 700
   - **Margin Bottom:** 16px
   - **Color:** Dark (primary text color)

5. **Hero Subtitle (Optional):**
   - Add **Paragraph:** "From raw timber to finished product, we control every step of the manufacturing process"
   - **Font Size:** 20px (desktop), 18px (mobile)
   - **Color:** Gray/muted
   - **Max Width:** 700px
   - **Margin:** 0 auto

---

### Step 5: Add Overview Section

1. Below hero, add **Section** element
2. Set class: `manufacturing-overview`
3. Configure:
   - **Padding:** 64px (top/bottom), 32px (left/right)
   - **Max Width:** 1200px
   - **Margin:** 0 auto

4. **Section Header:**
   - Add **Heading (H2):** "Our Manufacturing Process"
   - **Font Size:** 32px (desktop), 24px (mobile)
   - **Margin Bottom:** 24px
   - **Text Align:** Center

5. **Overview Content:**
   - Add **Div Block**
   - Set classes: `glass-card overview-content` (reuse glass effect)
   - **Padding:** 32px
   - **Max Width:** 900px
   - **Margin:** 0 auto

6. **Rich Text Content:**
   - Inside glass card, add **Rich Text** element
   - **Content Example:**
     ```
     At TWG, transparency isn't just a value—it's our competitive advantage.

     Unlike typical wood suppliers who source from multiple locations, we
     maintain complete control from forest management through final production.
     This vertical integration ensures consistent quality, traceability, and
     allows us to guarantee the sustainability of every product we deliver.

     Our manufacturing facility combines traditional craftsmanship with modern
     precision equipment, resulting in products that meet the highest standards
     for B2B clients who demand excellence.
     ```
   - **Font Size:** 16px
   - **Line Height:** 1.6
   - **Color:** Dark gray

---

### Step 6: Add Breadcrumb Navigation (Optional)

At top of page (above hero):

1. Add **Div Block**
2. Set class: `breadcrumbs`
3. **Padding:** 16px 32px
4. **Font Size:** 14px

Inside breadcrumbs:
- **Link:** "Home" → `/`
- **Text:** " / "
- **Link:** "Manufacturing" (current page, not clickable)

**Style (Custom Code):**
```html
<style>
.breadcrumbs {
  padding: 16px 32px;
  font-size: 14px;
  color: #666;
}

.breadcrumbs a {
  color: #2C5530;
  text-decoration: none;
}

.breadcrumbs a:hover {
  text-decoration: underline;
}
</style>
```

---

## Design Specifications

**Hero Section:**
- Padding: 80px vertical, 32px horizontal
- Title: 48px (desktop), 32px (mobile), bold
- Subtitle: 20px, gray
- Background: Light gray or white
- Text align: Center

**Overview Section:**
- Max width: 1200px
- Padding: 64px vertical
- Glass card: Max width 900px, centered

**Rich Text Content:**
- Font size: 16px
- Line height: 1.6
- Color: Dark gray
- Supports: Bold, italic, lists, links

**Breadcrumbs:**
- Font size: 14px
- Color: Gray
- Links: Primary green with hover underline

---

## Content Preparation Checklist

**Required Copy:**
- [ ] Hero title (5-10 words)
- [ ] Hero subtitle (optional, 15-25 words)
- [ ] Overview content (200-400 words)

**Optional Assets:**
- [ ] Hero background image (1920x1080px, subtle)
- [ ] OG image for social sharing (1200x630px)

---

## Dependencies

**Blocked By:**
- Story 1.5 (Webflow project setup)
- Story 1.3 (Glass Card Component - for overview section)

**Blocks:**
- Story 4.2 (Manufacturing Page Layout - awaits this setup)
- Story 4.3 (Process Steps Component)
- Story 4.4 (Quality Control Section)
- Story 4.5 (Equipment Showcase)

**External:**
- Manufacturing overview copy from client
- Optional images

---

## Testing Checklist

### Visual Testing

- [ ] Manufacturing page accessible at `/manufacturing`
- [ ] Hero section displays correctly
- [ ] Hero title legible and prominent
- [ ] Overview section renders
- [ ] Glass effect visible on overview content
- [ ] Breadcrumbs display (if implemented)
- [ ] Responsive layout works (mobile, tablet, desktop)

### Content Testing

- [ ] All text editable via Webflow Editor
- [ ] Rich text formatting works (bold, italic, lists)
- [ ] Content saves correctly
- [ ] Client can update content without Designer access

### SEO Testing

- [ ] Meta title displays in browser tab
- [ ] Meta description set
- [ ] OG image displays when sharing URL
- [ ] H1 tag present (hero title)
- [ ] Proper heading hierarchy (H1 → H2)

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Manufacturing page created at `/manufacturing`
- [ ] Hero section with title (H1)
- [ ] Overview section with rich text content
- [ ] Glass effect applied to overview
- [ ] SEO metadata configured
- [ ] Breadcrumb navigation added (optional)
- [ ] Mobile responsive design verified
- [ ] Client has Webflow Editor access
- [ ] Content is editable by client
- [ ] Published to Webflow staging
- [ ] QA sign-off

---

## Troubleshooting Guide

### Issue: Should I use Static Page or CMS Collection?

**Decision:**
Use **Static Page** (recommended) for Manufacturing page because:
- Content structure is simple and consistent
- Manufacturing details don't change frequently
- Easier for client to edit via Webflow Editor
- No CMS item limits used
- Faster page load (no dynamic queries)

**Note:** This follows the same pattern as Sustainability page (Story 3.1).

### Issue: Client wants to change hero title frequently

**Solution:**
- Static Page with Webflow Editor access is sufficient
- Editor allows text updates without Designer access
- Changes can be made in seconds
- No need for CMS complexity

### Issue: How to add more sections later?

**Solution:**
- Webflow allows adding sections to static pages anytime
- Stories 4.3, 4.4, 4.5 will add more sections below overview
- Page structure is flexible and extensible
- All sections remain editable via Editor

---

## Notes

- **Static Page Approach:** Simpler than CMS, perfect for this use case
- **Webflow Editor:** Client can update all text content
- **Glass Effect:** Reuses `.glass-card` class from Story 1.3
- **Extensibility:** Easy to add more sections in future stories
- **Content Ownership:** Client owns all content, easy to export
- **SEO Ready:** Proper heading structure, meta tags configured

---

## Resources

- [Webflow Static Pages](https://university.webflow.com/lesson/pages)
- [Webflow Editor](https://university.webflow.com/lesson/intro-to-the-editor)
- [Webflow Rich Text](https://university.webflow.com/lesson/rich-text-element)
- [SEO Settings](https://university.webflow.com/lesson/seo-settings)

---

**Status:** Ready for Development ✅
**Approach:** Static Page with Editor Access
**Review URL:** Will be `[project].webflow.io/manufacturing` after setup
