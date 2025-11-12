# Story 5.2: Footer Component with Contact Information (Webflow)

**Story ID:** STORY-5.2
**Epic:** Epic 5 - Contact and Inquiry
**Priority:** P1
**Story Points:** 3
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As a** visitor on any page
**I want** to see contact information in the footer
**So that** I can easily reach TWG regardless of which page I'm on

---

## Description

Create persistent footer component as a Webflow Symbol displaying contact information on all pages with glassmorphism styling.

---

## Acceptance Criteria

- [ ] Footer appears on all pages automatically
- [ ] Displays: company name, tagline, contact email, phone, address, social links
- [ ] LinkedIn link prominently displayed
- [ ] Copyright notice with current year (auto-updated)
- [ ] Glass effect styling
- [ ] Mobile-responsive layout (stacks on small screens)

---

## Webflow Implementation

### Step 1: Create Footer Symbol

1. In **Webflow Designer** → **Pages Panel**
2. Scroll to bottom of any page
3. Add **Section** element at bottom
4. Set class: `site-footer`
5. Right-click section → **Create Symbol**
6. **Symbol Name:** "Site Footer"
7. Click **"Create Symbol"**

**Result:** Footer now appears on all pages automatically

---

### Step 2: Add Footer Container

Inside Footer Symbol:

1. Add **Div Block**
2. Set classes: `glass-card footer-content` (reuse glass effect from Story 1.3)
3. Configure:
   - **Max Width:** 1200px
   - **Margin:** 0 auto
   - **Padding:** 48px 32px

---

### Step 3: Create Footer Grid

1. Inside footer content, add **Div Block**
2. Set class: `footer-grid`
3. Configure:
   - **Display:** Grid
   - **Grid Columns:** repeat(auto-fit, minmax(250px, 1fr))
   - **Gap:** 32px
   - **Margin Bottom:** 32px

---

### Step 4: Add Company Section (Column 1)

1. Inside grid, add **Div Block**
2. Set class: `footer-section company-info`

3. **Company Name:**
   - Add **Heading (H3):** "TWG"
   - **Font Size:** 24px
   - **Font Weight:** 700
   - **Margin Bottom:** 8px
   - **Color:** Primary green or dark

4. **Tagline:**
   - Add **Paragraph:** "Sustainable Woodworking Excellence"
   - **Font Size:** 14px
   - **Color:** Gray/muted
   - **Line Height:** 1.5

---

### Step 5: Add Contact Section (Column 2)

1. Inside grid, add **Div Block**
2. Set class: `footer-section contact-section`

3. **Section Title:**
   - Add **Heading (H4):** "Contact Us"
   - **Font Size:** 18px
   - **Font Weight:** 600
   - **Margin Bottom:** 16px

4. **Contact List:**
   - Add **Unordered List**
   - Set class: `contact-list`
   - **List Style:** None
   - **Padding:** 0

5. **Email Link (List Item 1):**
   - Add **List Item**
   - Inside, add **Link:**
     - **Text:** "contact@twg.com"
     - **Link Settings:** `mailto:contact@twg.com`
     - **Font Size:** 14px
     - **Color:** Primary green
     - **Hover:** Underline

6. **Phone Link (List Item 2):**
   - Add **List Item**
   - Inside, add **Link:**
     - **Text:** "+1 (555) 123-4567"
     - **Link Settings:** `tel:+15551234567`
     - **Font Size:** 14px
     - **Color:** Primary green
     - **Hover:** Underline

7. **Address (List Item 3):**
   - Add **List Item**
   - Add **Paragraph:**
     - **Text:** "123 Woodworking Lane, Portland, OR 97201"
     - **Font Size:** 14px
     - **Color:** Gray
     - **Line Height:** 1.5

---

### Step 6: Add Social Links Section (Column 3)

1. Inside grid, add **Div Block**
2. Set class: `footer-section social-section`

3. **Section Title:**
   - Add **Heading (H4):** "Follow Us"
   - **Font Size:** 18px
   - **Font Weight:** 600
   - **Margin Bottom:** 16px

4. **Social Links List:**
   - Add **Unordered List**
   - Set class: `social-links`
   - **Display:** Flex
   - **Flex Direction:** Column
   - **Gap:** 8px
   - **List Style:** None
   - **Padding:** 0

5. **LinkedIn Link (Primary):**
   - Add **List Item**
   - Inside, add **Link:**
     - **Text:** "LinkedIn" (or use icon)
     - **Link Settings:** https://linkedin.com/company/twg
     - **Target:** New Tab (_blank)
     - **Font Size:** 14px
     - **Color:** Primary green
     - **Hover:** Underline

6. **Facebook Link (Optional):**
   - Add **List Item**
   - Inside, add **Link:**
     - **Text:** "Facebook"
     - **Link Settings:** https://facebook.com/twg
     - **Target:** New Tab
     - Configure styling same as LinkedIn

7. **Instagram Link (Optional):**
   - Add **List Item**
   - Inside, add **Link:**
     - **Text:** "Instagram"
     - **Link Settings:** https://instagram.com/twg
     - **Target:** New Tab
     - Configure styling same as LinkedIn

---

### Step 7: Add Footer Bottom (Copyright)

1. Below footer grid, add **Div Block**
2. Set class: `footer-bottom`
3. Configure:
   - **Border Top:** 1px solid rgba(255, 255, 255, 0.2)
   - **Padding Top:** 24px
   - **Text Align:** Center

4. **Copyright Text:**
   - Add **Paragraph:**
     - **Text:** "© 2025 TWG. All rights reserved."
     - **Font Size:** 14px
     - **Color:** Gray

**Note:** Year can be auto-updated with JavaScript (see Custom Code below)

---

### Step 8: Add Custom CSS for Styling

**In Site Settings → Custom Code → Head Code:**

```html
<style>
/* Site Footer */
.site-footer {
  margin-top: 4rem;
  padding: 2rem 0;
  background: rgba(255, 255, 255, 0.05);
}

/* Footer Grid */
.footer-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  margin-bottom: 32px;
}

/* Footer Sections */
.footer-section h4 {
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 18px;
}

/* Contact List */
.contact-list,
.social-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.contact-list li,
.social-links li {
  margin-bottom: 8px;
}

.contact-list a,
.social-links a {
  color: #2C5530;
  text-decoration: none;
  font-size: 14px;
  transition: text-decoration 200ms ease;
}

.contact-list a:hover,
.social-links a:hover {
  text-decoration: underline;
}

/* Footer Bottom */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 24px;
  text-align: center;
  font-size: 14px;
  color: #666;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr !important;
    text-align: center;
  }

  .contact-list,
  .social-links {
    text-align: center;
  }
}
</style>
```

---

### Step 9: Auto-Update Copyright Year (Optional)

**In Site Settings → Custom Code → Footer Code:**

```html
<script>
// Auto-update copyright year
document.addEventListener('DOMContentLoaded', function() {
  var currentYear = new Date().getFullYear();
  var footerText = document.querySelector('.footer-bottom p');

  if (footerText) {
    footerText.textContent = '© ' + currentYear + ' TWG. All rights reserved.';
  }
});
</script>
```

**Alternative:** Use Webflow's built-in dynamic year by adding HTML Embed element with `© <span id="year"></span> TWG` and script to populate year.

---

## Design Specifications

**Footer Section:**
- Margin top: 4rem (creates gap from page content)
- Padding: 2rem vertical
- Background: Subtle light overlay
- Glass card effect applied

**Footer Grid:**
- Columns: Auto-fit with 250px minimum
- Desktop: 3 columns (company, contact, social)
- Tablet: 2 columns
- Mobile: 1 column (stacked)
- Gap: 32px

**Company Info:**
- Company name: 24px, bold
- Tagline: 14px, gray, muted

**Contact Section:**
- Section title: 18px, semibold
- Links: 14px, primary green
- Hover: Underline
- Email/phone links functional

**Social Links:**
- Primary: LinkedIn (B2B focus)
- Optional: Facebook, Instagram
- Open in new tab
- 14px font size

**Footer Bottom:**
- Border top: 1px, subtle
- Text align: Center
- Font size: 14px
- Copyright year auto-updated

**Mobile (<768px):**
- Single column layout
- Text align: Center
- Increased spacing between sections

---

## Content Preparation

**Required Information:**
- [ ] Company name (TWG)
- [ ] Tagline (e.g., "Sustainable Woodworking Excellence")
- [ ] Contact email
- [ ] Contact phone number
- [ ] Physical address
- [ ] LinkedIn URL
- [ ] (Optional) Facebook URL
- [ ] (Optional) Instagram URL

---

## Dependencies

**Blocked By:**
- Story 1.3 (Glass Card Component - for footer styling)
- Story 5.1 (Contact Information Setup)

**Blocks:**
- None

**External:**
- Contact information from Story 5.1

---

## Testing Checklist

### Visual Testing

- [ ] Footer appears on all pages
- [ ] Glass effect visible
- [ ] Footer grid displays correctly
- [ ] Company name and tagline visible
- [ ] Contact information displays properly
- [ ] Social links visible
- [ ] Copyright text displays with current year
- [ ] Proper spacing and alignment

### Interaction Testing

- [ ] Email link opens mail client
- [ ] Phone link triggers phone call (on mobile)
- [ ] Social links open in new tab
- [ ] All links functional (no 404s)
- [ ] Hover effects work on links

### Responsive Testing

- [ ] Desktop: 3-column layout
- [ ] Tablet: 2-column layout
- [ ] Mobile: 1-column, centered
- [ ] Text readable at all sizes
- [ ] No horizontal scroll
- [ ] Touch targets adequate (44x44px minimum)

### Symbol Testing

- [ ] Footer appears on all pages automatically
- [ ] Edits to footer symbol propagate to all pages
- [ ] Symbol can be detached if needed (per-page customization)

### Accessibility Testing

- [ ] Section titles are H4 (proper hierarchy)
- [ ] Links have proper text (not "click here")
- [ ] Social links have `rel="noopener noreferrer"` for security
- [ ] Color contrast meets WCAG AA
- [ ] Keyboard navigation works

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Footer Symbol created
- [ ] Footer displays on all pages
- [ ] Company info, contact details, social links added
- [ ] Glass effect applied
- [ ] Custom CSS added
- [ ] Copyright year auto-updates (optional)
- [ ] Mobile responsive design verified
- [ ] All links functional
- [ ] Cross-browser testing completed
- [ ] Accessibility requirements met
- [ ] Published to Webflow staging
- [ ] QA sign-off

---

## Troubleshooting Guide

### Issue: Footer not appearing on all pages

**Solution:**
- Ensure footer is created as a **Symbol**, not just a regular section
- Check that Symbol is placed in a page template (if using custom templates)
- Verify Symbol is not hidden on specific pages
- Test on published site (not just Designer preview)

### Issue: Footer grid not responsive on mobile

**Solution:**
- Ensure Custom CSS includes mobile media query
- Check media query breakpoint matches Webflow's (max-width: 768px)
- Test `grid-template-columns: 1fr !important` on mobile
- Verify no conflicting styles in Designer

### Issue: Social links not opening in new tab

**Solution:**
- For each social link, click **Link Settings**
- Set **Open in:** New Tab (_blank)
- Manually add `rel="noopener noreferrer"` for security (Custom Attribute)

### Issue: Copyright year not updating

**Solution:**
- Check JavaScript is added to **Footer Code**, not Head Code
- Verify selector `.footer-bottom p` matches your HTML structure
- Test on published site (JavaScript may not run in Designer preview)
- Alternative: Use `<%= new Date().getFullYear() %>` if using Webflow's dynamic features

### Issue: Footer too tall on mobile

**Solution:**
- Reduce padding on mobile: `padding: 32px 16px` in media query
- Reduce gap between sections: `gap: 24px` on mobile
- Consider hiding optional sections (like social links) on mobile if space is tight

---

## Notes

- **Symbol Power:** Footer automatically appears on all pages, easy to update
- **Glass Effect:** Reuses `.glass-card` class from Story 1.3
- **Mobile First:** Test mobile layout first, then scale up
- **Social Focus:** LinkedIn most important for B2B, others optional
- **Contact Info:** Uses data from Story 5.1 (manual entry approach)
- **Year Auto-Update:** Small JavaScript makes footer maintenance-free
- **Accessibility:** Proper heading hierarchy, functional links, color contrast

---

## Resources

- [Webflow Symbols](https://university.webflow.com/lesson/symbols)
- [CSS Grid Layout](https://university.webflow.com/lesson/css-grid-layout)
- [Link Settings](https://university.webflow.com/lesson/link-settings)
- [Custom Code](https://university.webflow.com/lesson/custom-code)

---

**Status:** Ready for Development ✅
**Review URL:** Footer will appear on all pages after implementation
**Next:** Story 5.3 (Contact Page Form)
