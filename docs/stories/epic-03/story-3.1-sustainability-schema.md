# Story 3.1: Sustainability Page Setup (Webflow)

**Story ID:** STORY-3.1
**Epic:** Epic 3 - Sustainability Verification
**Priority:** P0
**Story Points:** 3
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As a** content manager
**I want** to manage sustainability content through Webflow
**So that** I can update environmental practices and certifications without code changes

---

## Description

Set up the Sustainability page in Webflow with all required sections for environmental storytelling. This story covers two approaches: **Static Page** (recommended for simplicity) and **CMS Collection** (if easy content management is required).

---

## Acceptance Criteria

- [ ] Sustainability page created at `/sustainability` URL
- [ ] Page structure supports: hero, cycle steps, practices, metrics, certifications
- [ ] Content is editable by client (via Webflow Editor or CMS)
- [ ] Hero section with background image
- [ ] Sections for cycle steps (3-5), practices (3-6), metrics (up to 6)
- [ ] Certifications section with logos
- [ ] SEO metadata configured
- [ ] Mobile-responsive layout

---

## Approach A: Static Page (Recommended)

### Why Static Page?

Sustainability content typically doesn't change frequently, making a static page with Webflow Editor access the simplest solution.

**Benefits:**
- ✅ Faster to build (no CMS configuration)
- ✅ No CMS item limits
- ✅ Content editable via Webflow Editor
- ✅ Better performance (no dynamic queries)
- ✅ Easier to maintain

**Use Static Page if:**
- Content updates are infrequent (quarterly or less)
- Client is comfortable with Webflow Editor
- Don't need structured data exports

---

### Step 1: Create Sustainability Static Page

1. In **Webflow Designer** → **Pages Panel**
2. Click **"+"** to add new page
3. Configure:
   - **Page Name:** Sustainability
   - **Slug:** `sustainability`
   - **SEO Title:** "Sustainability | TWG - Environmental Commitment"
   - **SEO Description:** "Discover TWG's complete tree-to-tree sustainability cycle, environmental practices, and certifications ensuring responsible forestry."
4. Click **"Create Page"**

---

### Step 2: Plan Page Structure

The page will contain these sections (built in subsequent stories):

1. **Hero Section** (Story 3.2)
   - Background image
   - Hero statement text
   - CTA button

2. **Tree-to-Tree Cycle** (Story 3.3)
   - 3-5 cycle steps with icons
   - Visual diagram (optional)

3. **Sustainability Practices** (Story 3.4)
   - 3-6 practice cards
   - Images and descriptions

4. **Impact Metrics** (Story 3.5)
   - Quantifiable metrics (e.g., "1,500+ Trees Planted")
   - Visual counters

5. **Certifications** (Story 3.5)
   - Certification logos
   - Descriptions and verification links

6. **Future Commitments** (Story 3.4)
   - Rich text content
   - Long-term goals

---

### Step 3: Configure Page Settings

1. Select **Sustainability** page
2. **Page Settings:**

**SEO Tab:**
- **Meta Title:** "Sustainability | TWG - Environmental Commitment"
- **Meta Description:** "Discover TWG's complete tree-to-tree sustainability cycle, environmental practices, and certifications ensuring responsible forestry."
- **OG Image:** Upload sustainability hero image (1200x630px)

**Settings Tab:**
- **Page Transitions:** Fade (300ms)
- **Custom Code:** (leave empty for now)

---

## Approach B: CMS Collection (Advanced)

### Why CMS Collection?

Use this approach if content needs frequent updates or structured management.

**Benefits:**
- ✅ Structured content fields
- ✅ Easy bulk updates
- ✅ Content export/import
- ✅ API access for integrations

**Use CMS if:**
- Content updates are frequent (monthly or more)
- Need structured data for future use
- Want to leverage Webflow CMS API

---

### Step 1: Create Sustainability CMS Collection

**Note:** This uses a singleton pattern (one item in collection).

1. Open **CMS Panel**
2. Click **"New Collection"**
3. Configure:
   - **Collection Name:** Sustainability Settings
   - **Singular Name:** Sustainability Setting
   - **Template Page:** ❌ Do NOT create template page
4. Click **"Create Collection"**

---

### Step 2: Configure Collection Fields

#### Default Fields (Auto-Created)

1. **Name** (Plain Text)
   - Default value: "Sustainability Content"
   - Not displayed on page (internal use only)

#### Add Custom Fields

Click **"Add New Field"** and create:

**Hero Section:**

2. **Hero Statement** (Plain Text, Multi-line)
   - Max 200 characters
   - Help Text: "Impactful statement about sustainability commitment"
   - Example: "From seed to product, we control every step of our environmental journey."

3. **Hero Background Image** (Image)
   - Required: Yes
   - Help Text: "Nature/forest imagery for hero background"
   - Recommended: 1920x1080px

**Cycle Steps:**

4. **Cycle Step 1 Title** (Plain Text)
5. **Cycle Step 1 Description** (Plain Text, Multi-line)
6. **Cycle Step 1 Icon** (Image)

7. **Cycle Step 2 Title** (Plain Text)
8. **Cycle Step 2 Description** (Plain Text, Multi-line)
9. **Cycle Step 2 Icon** (Image)

10. **Cycle Step 3 Title** (Plain Text)
11. **Cycle Step 3 Description** (Plain Text, Multi-line)
12. **Cycle Step 3 Icon** (Image)

13. **Cycle Step 4 Title** (Plain Text, optional)
14. **Cycle Step 4 Description** (Plain Text, Multi-line, optional)
15. **Cycle Step 4 Icon** (Image, optional)

16. **Cycle Step 5 Title** (Plain Text, optional)
17. **Cycle Step 5 Description** (Plain Text, Multi-line, optional)
18. **Cycle Step 5 Icon** (Image, optional)

**Practices:**

19. **Practice 1 Title** (Plain Text)
20. **Practice 1 Description** (Plain Text, Multi-line, max 300 chars)
21. **Practice 1 Image** (Image)

22. **Practice 2 Title** (Plain Text)
23. **Practice 2 Description** (Plain Text, Multi-line)
24. **Practice 2 Image** (Image)

25. **Practice 3 Title** (Plain Text)
26. **Practice 3 Description** (Plain Text, Multi-line)
27. **Practice 3 Image** (Image)

*(Continue for Practice 4, 5, 6 if needed)*

**Impact Metrics:**

28. **Metric 1 Value** (Plain Text, e.g., "1,500+")
29. **Metric 1 Label** (Plain Text, e.g., "Trees Planted")
30. **Metric 1 Unit** (Plain Text, e.g., "annually")
31. **Metric 1 Icon** (Plain Text, emoji like "🌳")

*(Continue for Metrics 2-6)*

**Certifications:**

32. **Certification 1 Name** (Plain Text)
33. **Certification 1 Logo** (Image)
34. **Certification 1 Description** (Plain Text, Multi-line)
35. **Certification 1 Verification URL** (Link)

*(Continue for additional certifications)*

**Future Commitments:**

36. **Future Commitments** (Rich Text)
   - Supports formatting, lists, links
   - Help Text: "Long-term sustainability goals and commitments"

**SEO:**

37. **Meta Title** (Plain Text, max 60 chars)
38. **Meta Description** (Plain Text, max 160 chars)

---

### Step 3: Create Single CMS Item

1. Click **"Add New Sustainability Setting"**
2. Fill in all fields with sustainability content
3. **Publish** the item

**Important:** Only create ONE item in this collection (singleton pattern).

---

### Step 4: Create Static Page Bound to CMS

1. Create **Static Page** at `/sustainability` (like Approach A)
2. On this page, bind elements to the **first item** in Sustainability Settings collection:
   - Use **Collection List** with **Limit: 1**
   - Or use **Custom Code** to fetch the singleton item

**Example: Bind Hero Statement**

1. Add **Text** element for hero statement
2. **Get text from:** Sustainability Settings → Hero Statement
3. Bind to first (and only) item in collection

---

## Recommended Approach Decision

**For TWG Landing Page, use Approach A (Static Page)** because:

1. ✅ **Simplicity:** Faster to build, no CMS complexity
2. ✅ **Performance:** No dynamic queries needed
3. ✅ **Cost:** No CMS items used (save for products)
4. ✅ **Editor Access:** Client can still edit via Webflow Editor
5. ✅ **Maintenance:** Easier to update and maintain

**Only use Approach B (CMS) if:**
- Client specifically requests structured CMS management
- Content needs frequent updates (weekly or more)
- Need to leverage Webflow CMS API

---

## Field Configuration Reference (CMS Approach)

| Field Name | Type | Required | Max Length | Example |
|------------|------|----------|-----------|---------|
| Hero Statement | Plain Text (multi) | Yes | 200 chars | "From seed to product..." |
| Hero Background | Image | Yes | - | 1920x1080px forest image |
| Cycle Step 1 Title | Plain Text | Yes | 50 chars | "Sustainable Harvesting" |
| Cycle Step 1 Description | Plain Text (multi) | Yes | 200 chars | "We selectively harvest..." |
| Cycle Step 1 Icon | Image | Optional | - | Icon/illustration |
| Practice 1 Title | Plain Text | Yes | 60 chars | "Zero Waste Manufacturing" |
| Practice 1 Description | Plain Text (multi) | Yes | 300 chars | "Every piece of wood..." |
| Practice 1 Image | Image | Yes | - | 800x600px minimum |
| Metric 1 Value | Plain Text | Yes | 20 chars | "1,500+" |
| Metric 1 Label | Plain Text | Yes | 50 chars | "Trees Planted" |
| Metric 1 Unit | Plain Text | Optional | 30 chars | "annually" |
| Certification 1 Name | Plain Text | Yes | 50 chars | "FSC Certified" |
| Certification 1 Logo | Image | Yes | - | PNG with transparency |
| Future Commitments | Rich Text | Optional | - | Rich formatted text |
| Meta Title | Plain Text | Optional | 60 chars | SEO title |
| Meta Description | Plain Text | Optional | 160 chars | SEO description |

---

## Content Preparation Checklist

**Required Assets:**

- [ ] Hero background image (1920x1080px, <1MB)
- [ ] Cycle step icons (3-5 images, 200x200px)
- [ ] Practice images (3-6 photos, 800x600px minimum)
- [ ] Certification logos (PNG with transparency, 400x200px)
- [ ] Impact metric icons (emoji or small icons)

**Required Copy:**

- [ ] Hero statement (50-200 characters)
- [ ] Cycle step titles and descriptions (3-5 steps)
- [ ] Practice titles and descriptions (3-6 practices)
- [ ] Impact metrics with values and labels (up to 6)
- [ ] Certification names and descriptions
- [ ] Future commitments text (200-500 words)
- [ ] SEO meta title and description

---

## Dependencies

**Blocked By:**
- Story 1.5 (Webflow project setup)

**Blocks:**
- Story 3.2 (Sustainability Hero Section)
- Story 3.3 (Tree-to-Tree Cycle Visual)
- Story 3.4 (Sustainability Practices Section)
- Story 3.5 (Impact Metrics & Certifications)

**External:**
- Sustainability content from client
- Images and icons from designer
- Certification logos from organizations
- Impact metrics data validated

---

## Testing Checklist

### Static Page Testing

- [ ] Sustainability page created at `/sustainability`
- [ ] Page accessible from navigation
- [ ] SEO metadata configured
- [ ] Page title displays correctly in browser tab
- [ ] OG image displays when sharing URL
- [ ] Webflow Editor access works for client
- [ ] Content is editable by client

### CMS Collection Testing (If Using)

- [ ] Sustainability Settings collection created
- [ ] All fields configured correctly
- [ ] Single CMS item created
- [ ] Cannot create duplicate items (singleton)
- [ ] Fields validate correctly (max lengths, required)
- [ ] Images upload successfully
- [ ] Rich text editor works for commitments
- [ ] Static page binds to CMS data correctly

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Sustainability page created at `/sustainability`
- [ ] Page structure planned (hero, cycle, practices, metrics, certifications)
- [ ] Approach decided (Static vs CMS)
- [ ] If Static: Page created with Editor access
- [ ] If CMS: Collection created with all fields
- [ ] Content preparation checklist provided to client
- [ ] SEO metadata configured
- [ ] Asset requirements documented
- [ ] Published to Webflow staging
- [ ] Client has Editor access for content updates

---

## Troubleshooting Guide

### Issue: Should I use Static or CMS?

**Decision Matrix:**

| Criteria | Use Static Page | Use CMS Collection |
|----------|----------------|-------------------|
| Update frequency | < Monthly | > Monthly |
| Client technical skill | Low (prefers Editor) | High (comfortable with CMS) |
| Content structure | Simple | Complex/Structured |
| Budget | Limited CMS items | CMS items available |
| Future API needs | No | Yes |

**Recommendation:** Start with Static Page. Can migrate to CMS later if needed.

### Issue: Client wants easy content editing

**Solution:**
- Static Page with Webflow Editor access is sufficient
- Editor allows text/image changes without Designer access
- Editor interface is simpler than CMS
- No CMS item limits used

### Issue: How to enforce singleton pattern in CMS?

**Solution:**
- Webflow doesn't have built-in singleton enforcement
- Document clearly: "Only create ONE item"
- Use Collection List with Limit: 1 to always fetch first item
- Delete extra items manually if created by mistake

### Issue: Too many CMS fields (50+ fields limit)

**Solution:**
- Webflow CMS has 40 fields per collection limit
- For Sustainability, consider splitting into multiple collections:
  - "Sustainability Settings" (hero, SEO)
  - "Cycle Steps" (separate collection with 3-5 items)
  - "Practices" (separate collection with 3-6 items)
- Or use Static Page approach (no field limits)

---

## Notes

- **Static Page Recommended:** Simpler, faster, no CMS limits
- **Webflow Editor:** Client can edit static pages without Designer access
- **CMS Migration:** Can migrate from static to CMS later if needed
- **Field Limits:** Webflow CMS has 40 fields per collection max
- **Singleton Pattern:** No native support, enforce manually
- **Content Ownership:** Client owns all content, easy to export
- **Future-Proof:** Both approaches support future enhancements

---

## Resources

- [Webflow Static Pages](https://university.webflow.com/lesson/pages)
- [Webflow CMS Collections](https://university.webflow.com/lesson/intro-to-collections)
- [Webflow Editor](https://university.webflow.com/lesson/intro-to-the-editor)
- [CMS Field Types](https://university.webflow.com/lesson/collection-fields)
- [Singleton Pattern in Webflow](https://university.webflow.com/forum/t/singleton-pattern-in-webflow-cms)

---

**Status:** Ready for Development ✅
**Recommended Approach:** Static Page (Approach A)
**Review URL:** Will be `[project].webflow.io/sustainability` after setup
