# Story 5.1: Contact Information Setup (Webflow)

**Story ID:** STORY-5.1
**Epic:** Epic 5 - Contact and Inquiry
**Priority:** P1
**Story Points:** 2
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As a** content manager
**I want** to manage contact information through Webflow
**So that** I can update company contact details without code changes

---

## Description

Set up contact information management in Webflow. Two approaches available: Static approach (recommended for simple contact info) or CMS Collection approach (for complex multi-location scenarios).

---

## Acceptance Criteria

- [ ] Contact information stored in Webflow
- [ ] Fields: email, phone (optional), address, social links, response time expectation
- [ ] Client can update contact info easily
- [ ] Information accessible for Footer and Contact page
- [ ] Social links with proper URLs

---

## Webflow Implementation

### Approach Decision Matrix

| Use Static Approach | Use CMS Collection |
|---------------------|-------------------|
| Single location/contact | Multiple office locations |
| Simple contact info | Complex organizational structure |
| Infrequent updates | Frequent contact changes |
| 1-2 social platforms | Many social platforms (5+) |

**Recommendation:** **Static Approach** for TWG (single business location)

---

## Option A: Static Approach (Recommended)

### Step 1: Create Site-Wide Custom Attributes

**Method:** Use Webflow's Custom Attributes feature for site-wide data

1. In **Webflow Designer** → **Project Settings** → **Custom Code**
2. Add **Head Code** with site data:

```html
<script>
// Site-wide contact information
window.TWG_CONTACT = {
  email: 'contact@twg.com',
  phone: '+1 (555) 123-4567',
  address: '123 Woodworking Lane, Portland, OR 97201',
  responseTime: '24-48 hours',
  socialLinks: [
    { platform: 'LinkedIn', url: 'https://linkedin.com/company/twg' },
    { platform: 'Facebook', url: 'https://facebook.com/twg' },
    { platform: 'Instagram', url: 'https://instagram.com/twg' }
  ]
};
</script>
```

**Pros:**
- Simple to set up and maintain
- No CMS item limits used
- Fast page load (no dynamic queries)
- Easy for client to update via Custom Code panel

**Cons:**
- Requires editing Custom Code (but it's just copy-paste)
- Not editable via Webflow Editor (requires Designer access)

---

### Step 2: Make Contact Info Accessible

**Option A1: Direct HTML with Custom Attributes**

For footer email link:
1. Add **Link** element
2. Set **Custom Attribute:**
   - Name: `data-contact`
   - Value: `email`

3. Add **Custom Code** in **Site Settings → Footer Code:**
```html
<script>
// Auto-populate contact links
document.querySelectorAll('[data-contact="email"]').forEach(function(el) {
  el.href = 'mailto:' + window.TWG_CONTACT.email;
  el.textContent = window.TWG_CONTACT.email;
});

document.querySelectorAll('[data-contact="phone"]').forEach(function(el) {
  el.href = 'tel:' + window.TWG_CONTACT.phone;
  el.textContent = window.TWG_CONTACT.phone;
});

document.querySelectorAll('[data-contact="address"]').forEach(function(el) {
  el.textContent = window.TWG_CONTACT.address;
});
</script>
```

**Option A2: Manual Entry (Simplest)**

Just type contact information directly into Footer and Contact page elements. Client can edit via Webflow Editor.

**For most projects, this is the simplest and recommended approach.**

---

## Option B: CMS Collection Approach

### Step 1: Create Site Settings CMS Collection

1. In **Webflow Designer** → **CMS Collections**
2. Click **"+ New Collection"**
3. **Collection Name:** Site Settings
4. **Singular Name:** Site Setting
5. **Collection Type:** Singleton (only 1 item will exist)

---

### Step 2: Add Contact Info Fields

**Add these fields to Site Settings Collection:**

1. **Email Address:**
   - Field Type: **Email**
   - Required: Yes
   - Field Name: `email`

2. **Phone Number:**
   - Field Type: **Phone**
   - Required: No
   - Field Name: `phone`

3. **Physical Address:**
   - Field Type: **Plain Text**
   - Max Length: 200
   - Multi-line: Yes
   - Field Name: `address`

4. **Response Time Expectation:**
   - Field Type: **Plain Text**
   - Max Length: 50
   - Default: "24-48 hours"
   - Field Name: `response-time`

5. **LinkedIn URL:**
   - Field Type: **Link**
   - Field Name: `linkedin-url`

6. **Facebook URL:**
   - Field Type: **Link**
   - Field Name: `facebook-url`

7. **Instagram URL:**
   - Field Type: **Link**
   - Field Name: `instagram-url`

8. **Twitter URL:**
   - Field Type: **Link**
   - Field Name: `twitter-url`
   - Required: No

---

### Step 3: Create Singleton Item

1. Go to **CMS Collections** → **Site Settings**
2. Click **"+ New Site Setting"**
3. Fill in contact information:
   - Email: contact@twg.com
   - Phone: +1 (555) 123-4567
   - Address: 123 Woodworking Lane, Portland, OR 97201
   - Response Time: 24-48 hours
   - LinkedIn URL: https://linkedin.com/company/twg
   - (Other social links as needed)

4. **Publish**

---

### Step 4: Bind CMS Data to Footer/Contact Page

**For Footer Symbol:**
1. Open **Footer Symbol**
2. Add **Collection List Wrapper** around contact info section
3. Bind to **Site Settings** collection
4. Set **Limit:** 1 item
5. Inside Collection List, add **Collection Item**
6. Bind text/links to CMS fields:
   - Email link → Bind to `email` field
   - Phone link → Bind to `phone` field
   - Address text → Bind to `address` field
   - Social links → Bind to respective URL fields

**Note:** This approach is more complex but offers Editor-friendly updates.

---

## Design Specifications

**Contact Information Structure:**
- Email: Primary contact method (required)
- Phone: Secondary contact (optional)
- Address: Physical location for B2B credibility
- Response Time: Sets expectations (24-48 hours typical)
- Social Links: LinkedIn primary, others optional

**Data Validation:**
- Email: Valid email format
- Phone: International format supported
- Social URLs: Full URLs with https://

---

## Recommendation

**For TWG Landing Page: Use Option A2 (Manual Entry)**

**Why:**
1. **Simplicity:** Contact info changes infrequently for most B2B businesses
2. **Webflow Editor Access:** Client can update directly without Custom Code or CMS
3. **No CMS Limits:** Preserves CMS items for Products/Categories
4. **Fast:** No dynamic queries, instant page load

**When to Use Option B (CMS):**
- Multiple office locations with different contact info
- Frequent contact information changes
- Complex organizational structure
- Need for version history/audit trail

---

## Implementation Steps (Recommended Approach)

### Step 1: Document Contact Information

Create a simple text file or doc with TWG contact info:

```
Email: contact@twg.com
Phone: +1 (555) 123-4567
Address: 123 Woodworking Lane, Portland, OR 97201
Response Time: 24-48 hours
LinkedIn: https://linkedin.com/company/twg
Facebook: https://facebook.com/twg
Instagram: https://instagram.com/twg
```

### Step 2: Add to Footer (Story 5.2)

Manually type contact information into Footer Symbol elements.

### Step 3: Add to Contact Page (Story 5.3)

Manually type contact information into Contact page sidebar.

### Step 4: Client Updates

Show client how to:
1. Open Webflow Editor
2. Navigate to page with contact info
3. Click element and edit text
4. Publish changes

**Simple, fast, effective.**

---

## Dependencies

**Blocked By:**
- Story 1.5 (Webflow project setup)

**Blocks:**
- Story 5.2 (Footer Component - needs contact data)
- Story 5.3 (Contact Page - needs contact data)

**External:**
- TWG contact information (email, phone, address, social links)

---

## Testing Checklist

### Data Validation

- [ ] Email format valid
- [ ] Phone number formatted correctly
- [ ] Physical address accurate
- [ ] Social links open correctly
- [ ] All URLs use https://

### Access Testing

- [ ] Client can update contact info via Editor (if manual approach)
- [ ] Changes save and publish correctly
- [ ] Contact info displays correctly in Footer
- [ ] Contact info displays correctly on Contact page

### Functionality Testing

- [ ] Email links open mail client
- [ ] Phone links trigger phone call (mobile)
- [ ] Social links open in new tab
- [ ] No broken links

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Contact information documented
- [ ] Chosen approach implemented (Static/Manual/CMS)
- [ ] Contact info accessible for Footer and Contact page
- [ ] Client can update information easily
- [ ] All links functional
- [ ] Testing completed
- [ ] Documentation provided to client
- [ ] QA sign-off

---

## Troubleshooting Guide

### Issue: Which approach should I use?

**Decision:**
- **Small business, single location:** Manual entry (simplest)
- **Need client self-service:** Manual entry with Webflow Editor
- **Multiple locations:** CMS Collection approach
- **Tech-savvy client who likes code:** Custom attributes approach

**For 90% of small B2B businesses: Manual entry is the best choice.**

### Issue: How does client update contact info with manual approach?

**Solution:**
1. Client logs into Webflow Editor (not Designer)
2. Navigates to page with contact info (Footer or Contact)
3. Clicks element (e.g., email link)
4. Edits text in Settings panel
5. Publishes changes
6. Changes appear immediately on live site

This is simpler than CMS for infrequent updates.

### Issue: We need contact info in multiple places

**Solution:**
- Use Footer Symbol (appears on all pages automatically)
- For Contact page, duplicate info manually or use CMS approach
- If >3 locations need contact info, consider CMS Collection

---

## Notes

- **Simplicity First:** Don't over-engineer contact information management
- **Webflow Editor:** Most clients find Editor easier than CMS Collections panel
- **CMS Limits:** Webflow CMS Lite plan has 50 item limit - save for Products/Categories
- **Future Scaling:** Easy to migrate from Manual → CMS approach later if needed
- **Social Links:** LinkedIn most important for B2B, others optional

---

## Resources

- [Webflow Editor Guide](https://university.webflow.com/lesson/intro-to-the-editor)
- [Webflow CMS Collections](https://university.webflow.com/lesson/intro-to-cms-collections)
- [Custom Attributes](https://university.webflow.com/lesson/custom-attributes)

---

**Status:** Ready for Development ✅
**Recommended Approach:** Manual Entry (Option A2)
**Next:** Story 5.2 (Footer Component) will use this contact information
