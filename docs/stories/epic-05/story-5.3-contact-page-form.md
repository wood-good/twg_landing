# Story 5.3: Contact Page with Inquiry Form (Webflow)

**Story ID:** STORY-5.3
**Epic:** Epic 5 - Contact and Inquiry
**Priority:** P1
**Story Points:** 5
**Assignee:** Developer
**Platform:** Webflow

---

## User Story

**As an** interested buyer
**I want** to submit an inquiry through a contact form
**So that** I can start a business conversation with TWG

---

## Description

Create dedicated contact page with inquiry form using Webflow native form or custom JavaScript implementation. Includes client-side validation, loading states, success/error messages.

---

## Acceptance Criteria

- [ ] Contact page accessible at `/contact`
- [ ] Form fields: name, company, email, message
- [ ] Client-side validation (required fields, email format)
- [ ] Loading state during submission
- [ ] Success confirmation message
- [ ] Error handling with user-friendly messages
- [ ] Response time expectation displayed
- [ ] Accessible form with proper labels
- [ ] Glass effect styling consistent with site

---

## Webflow Implementation

### Approach Decision

**Option A: Webflow Native Form (Recommended for Simplicity)**
- Built-in form handling
- Email notifications configured in Webflow
- No custom backend required
- Limitations: Basic email only, no advanced logic

**Option B: Custom JavaScript Form with External Service**
- Full control over validation and UX
- Integration with services like Zapier, Make, or custom API
- More complex but more flexible
- Required for advanced features (rate limiting, CRM integration)

**Recommendation:** Start with **Option A (Webflow Native)**, upgrade to Option B if needed.

---

## Option A: Webflow Native Form Implementation

### Step 1: Create Contact Page

1. In **Webflow Designer** → **Pages Panel**
2. Click **"+ New Page"**
3. Configure:
   - **Page Name:** Contact
   - **Slug:** `contact`
   - **SEO Title:** "Contact Us | TWG"
   - **SEO Description:** "Get in touch with TWG for inquiries about our sustainable wood products."
4. Click **"Create Page"**

---

### Step 2: Add Hero Section

1. Add **Section** element at top
2. Set class: `contact-hero`
3. Configure:
   - **Padding:** 80px (top/bottom), 32px (left/right)
   - **Text Align:** Center
   - **Background:** Optional light gradient

4. **Hero Title:**
   - Add **Heading (H1):** "Get in Touch"
   - **Font Size:** 48px (desktop), 32px (mobile)
   - **Font Weight:** 700
   - **Margin Bottom:** 16px

5. **Hero Subtitle:**
   - Add **Paragraph:** "Interested in partnering with TWG? We'd love to hear from you."
   - **Font Size:** 18px
   - **Color:** Gray/muted
   - **Max Width:** 600px
   - **Margin:** 0 auto

---

### Step 3: Create Two-Column Layout

1. Below hero, add **Section** element
2. Set class: `contact-section`
3. Configure:
   - **Padding:** 64px (top/bottom), 32px (left/right)
   - **Max Width:** 1200px
   - **Margin:** 0 auto

4. Inside section, add **Div Block**
5. Set class: `contact-grid`
6. Configure:
   - **Display:** Grid
   - **Grid Columns:** 2fr 1fr (desktop), 1fr (mobile)
   - **Gap:** 32px
   - **Align Items:** Start

---

### Step 4: Add Form Container (Left Column)

1. In left column, add **Div Block**
2. Set classes: `glass-card contact-form-container`
3. **Padding:** 32px

4. **Form Title:**
   - Add **Heading (H2):** "Send us a message"
   - **Font Size:** 28px
   - **Margin Bottom:** 24px

---

### Step 5: Add Webflow Form Block

1. Inside form container, add **Form Block**
2. Set class: `contact-form`
3. Webflow automatically creates: Form, Success Message, Error Message

**Configure Form:**
- **Name:** Contact Form
- **Action:** Leave default (Webflow handles submission)
- **Method:** POST

---

### Step 6: Build Form Fields

**Field 1: Name**

1. Inside Form Block, add **Div Block** (form group)
2. Set class: `form-group`
3. **Margin Bottom:** 20px

4. Add **Label:**
   - **For:** `name`
   - **Text:** "Name *"
   - **Font Size:** 14px
   - **Font Weight:** 600
   - **Margin Bottom:** 8px

5. Add **Text Input:**
   - **Name:** `name`
   - **ID:** `name`
   - **Placeholder:** "John Doe"
   - **Required:** Yes
   - Configure styling:
     - **Width:** 100%
     - **Padding:** 12px 16px
     - **Border:** 1px solid #ddd
     - **Border Radius:** 8px
     - **Font Size:** 16px
     - **Background:** White
     - **Transition:** Border 200ms ease

**Field 2: Company**

1. Add **Div Block** (form group)
2. Set class: `form-group`

3. Add **Label:**
   - **For:** `company`
   - **Text:** "Company *"

4. Add **Text Input:**
   - **Name:** `company`
   - **ID:** `company`
   - **Placeholder:** "ACME Corporation"
   - **Required:** Yes
   - Apply same styling as Name field

**Field 3: Email**

1. Add **Div Block** (form group)
2. Set class: `form-group`

3. Add **Label:**
   - **For:** `email`
   - **Text:** "Email *"

4. Add **Email Input:**
   - **Name:** `email`
   - **ID:** `email`
   - **Placeholder:** "john@acme.com"
   - **Required:** Yes
   - **Input Type:** Email (validates format)
   - Apply same styling

**Field 4: Message**

1. Add **Div Block** (form group)
2. Set class: `form-group`

3. Add **Label:**
   - **For:** `message`
   - **Text:** "Message *"

4. Add **Textarea:**
   - **Name:** `message`
   - **ID:** `message`
   - **Placeholder:** "Tell us about your project..."
   - **Required:** Yes
   - **Rows:** 6
   - Apply same styling with increased height

---

### Step 7: Add Submit Button

1. Below form fields, add **Submit Button**
2. **Text:** "Send Message"
3. Configure styling:
   - **Width:** 100%
   - **Padding:** 16px 32px
   - **Background:** Primary green (#2C5530)
   - **Color:** White
   - **Font Size:** 16px
   - **Font Weight:** 600
   - **Border:** None
   - **Border Radius:** 8px
   - **Cursor:** Pointer
   - **Transition:** Background 200ms ease

4. **Hover State:**
   - **Background:** Darker green (#1E3B21)

5. **Disabled State (Loading):**
   - **Background:** Gray
   - **Cursor:** Not-allowed
   - **Opacity:** 0.6

---

### Step 8: Configure Success/Error Messages

**Success Message:**

Webflow automatically creates a success message. Edit it:

1. Click **Form Success State** in Webflow Navigator
2. Edit success message:
   - Add **Div Block** with class `success-message`
   - **Background:** Light green (#E8F5E9)
   - **Border:** 1px solid green
   - **Border Radius:** 8px
   - **Padding:** 24px
   - **Text Align:** Center

3. Inside, add:
   - **Heading (H3):** "Message Sent Successfully!"
   - **Paragraph:** "Thank you for contacting us. We will respond within 24-48 hours."

**Error Message:**

1. Click **Form Error State**
2. Edit error message:
   - Add **Div Block** with class `error-message`
   - **Background:** Light red (#FFEBEE)
   - **Border:** 1px solid red
   - **Border Radius:** 8px
   - **Padding:** 24px

3. Inside, add:
   - **Paragraph:** "Something went wrong. Please try again or email us directly at contact@twg.com"

---

### Step 9: Add Response Time Notice

1. Below form (but inside form container), add **Paragraph**
2. Set class: `response-time`
3. **Text:** "We typically respond within 24-48 hours"
4. Configure:
   - **Font Size:** 14px
   - **Color:** Gray
   - **Margin Top:** 16px
   - **Text Align:** Center

---

### Step 10: Add Contact Info Sidebar (Right Column)

1. In right column, add **Div Block**
2. Set classes: `glass-card contact-info-sidebar`
3. **Padding:** 32px

4. **Sidebar Title:**
   - Add **Heading (H3):** "Contact Information"
   - **Font Size:** 20px
   - **Margin Bottom:** 20px

5. **Info List:**
   - Add **Unordered List**
   - Set class: `info-list`
   - **List Style:** None
   - **Padding:** 0

6. **Email (List Item 1):**
   - Add **List Item**
   - Add **Strong:** "Email:"
   - Add **Link:**
     - **Text:** "contact@twg.com"
     - **Link:** `mailto:contact@twg.com`
     - **Color:** Primary green
     - **Margin Left:** 8px

7. **Phone (List Item 2):**
   - Add **List Item**
   - Add **Strong:** "Phone:"
   - Add **Link:**
     - **Text:** "+1 (555) 123-4567"
     - **Link:** `tel:+15551234567`
     - **Color:** Primary green

8. **Address (Optional List Item 3):**
   - Add **List Item**
   - Add **Strong:** "Address:"
   - Add **Paragraph:** "123 Woodworking Lane, Portland, OR 97201"

---

### Step 11: Configure Form Notifications

1. Select Form Block
2. Click **Form Settings** (gear icon)
3. Configure:
   - **Form Name:** Contact Form
   - **Redirect on Success:** None (show success message)
   - **Email Notification:** Enabled

4. **Email Settings:**
   - **Send to:** contact@twg.com
   - **Subject:** "New Contact Form Submission from {company}"
   - **From:** noreply@webflow.com
   - **Reply To:** {email} (submitter's email)

5. **Email Template:**
   Webflow sends an email with all form fields automatically.

---

### Step 12: Add Custom CSS for Enhanced Styling

**In Site Settings → Custom Code → Head Code:**

```html
<style>
/* Contact Hero */
.contact-hero {
  padding: 80px 32px;
  text-align: center;
}

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 32px;
  align-items: start;
}

/* Form Fields */
.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 16px;
  font-family: inherit;
  background: white;
  transition: border-color 200ms ease, box-shadow 200ms ease;
}

.form-group input:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #2C5530;
  box-shadow: 0 0 0 3px rgba(44, 85, 48, 0.1);
}

.form-group input:invalid:not(:placeholder-shown),
.form-group textarea:invalid:not(:placeholder-shown) {
  border-color: #d32f2f;
}

/* Submit Button */
.contact-form .w-button {
  width: 100%;
  padding: 16px 32px;
  background: #2C5530;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 200ms ease, transform 100ms ease;
}

.contact-form .w-button:hover {
  background: #1E3B21;
  transform: translateY(-1px);
}

.contact-form .w-button:active {
  transform: translateY(0);
}

.contact-form .w-button:disabled {
  background: #ccc;
  cursor: not-allowed;
  opacity: 0.6;
}

/* Success Message */
.success-message {
  background: #E8F5E9;
  border: 2px solid #4CAF50;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  margin-top: 24px;
}

.success-message h3 {
  color: #2E7D32;
  margin-bottom: 12px;
}

.success-message p {
  color: #1B5E20;
  line-height: 1.5;
}

/* Error Message */
.error-message {
  background: #FFEBEE;
  border: 2px solid #F44336;
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  margin-top: 24px;
  color: #C62828;
}

/* Response Time Notice */
.response-time {
  font-size: 14px;
  color: #666;
  margin-top: 16px;
  text-align: center;
}

/* Info List */
.info-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.info-list li {
  margin-bottom: 16px;
  line-height: 1.6;
}

.info-list strong {
  display: inline-block;
  min-width: 70px;
  color: #333;
}

.info-list a {
  color: #2C5530;
  text-decoration: none;
  transition: text-decoration 200ms ease;
}

.info-list a:hover {
  text-decoration: underline;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr !important;
  }

  .contact-info-sidebar {
    order: 2;
  }

  .contact-form-container {
    order: 1;
  }
}
</style>
```

---

## Option B: Custom Form with JavaScript (Advanced)

For advanced scenarios requiring custom backend (Story 5.4), you can replace Webflow's native form handling with custom JavaScript:

**Custom Form Submission Handler:**

```html
<!-- Add to Site Settings → Footer Code -->
<script>
document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('.contact-form');

  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();

      var submitButton = form.querySelector('button[type="submit"]');
      var originalText = submitButton.textContent;

      // Show loading state
      submitButton.textContent = 'Sending...';
      submitButton.disabled = true;

      // Get form data
      var formData = {
        name: form.querySelector('[name="name"]').value,
        company: form.querySelector('[name="company"]').value,
        email: form.querySelector('[name="email"]').value,
        message: form.querySelector('[name="message"]').value
      };

      try {
        // Call custom API endpoint (Story 5.4)
        var response = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          // Show success message
          form.style.display = 'none';
          document.querySelector('.w-form-done').style.display = 'block';

          // Reset form
          form.reset();
        } else {
          throw new Error('Submission failed');
        }
      } catch (error) {
        // Show error message
        document.querySelector('.w-form-fail').style.display = 'block';
        console.error('Form submission error:', error);
      } finally {
        // Restore button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
      }
    });
  }
});
</script>
```

**Note:** Option B requires implementing Story 5.4 (Contact Form API) for backend handling.

---

## Design Specifications

**Contact Hero:**
- Padding: 80px vertical, 32px horizontal
- Text align: Center
- Title: 48px (desktop), 32px (mobile)
- Subtitle: 18px, gray

**Contact Grid:**
- Desktop: 2fr 1fr (form left, info right)
- Mobile: Stacked (form top, info bottom)
- Gap: 32px

**Form Container:**
- Glass card background
- Padding: 32px
- Max width: 100% of grid column

**Form Fields:**
- Padding: 12px 16px
- Border: 1px solid #ddd
- Border radius: 8px
- Font size: 16px
- Focus: Primary green border + shadow
- Invalid: Red border

**Submit Button:**
- Width: 100%
- Padding: 16px 32px
- Background: Primary green
- Hover: Darker green + lift -1px
- Disabled: Gray, not-allowed cursor

**Success/Error Messages:**
- Padding: 24px
- Border radius: 8px
- Text align: Center
- Color-coded backgrounds (green/red)

**Info Sidebar:**
- Glass card background
- Padding: 32px
- Contact details with links

---

## Dependencies

**Blocked By:**
- Story 5.1 (Contact Information Setup)
- Story 5.2 (Footer Component - optional, for consistency)
- Story 1.3 (Glass Card Component)

**Blocks:**
- Story 5.4 (Contact Form API - only if using Option B)

**External:**
- Contact email for form notifications
- Response time expectation text

---

## Testing Checklist

### Visual Testing

- [ ] Contact page accessible at `/contact`
- [ ] Hero section displays correctly
- [ ] Two-column layout on desktop
- [ ] Form fields display properly
- [ ] Labels aligned with inputs
- [ ] Submit button styled correctly
- [ ] Sidebar info displays
- [ ] Glass effects visible

### Form Functionality Testing

- [ ] All fields accept input
- [ ] Required validation works (prevents empty submission)
- [ ] Email field validates format
- [ ] Submit button shows loading state
- [ ] Success message displays after submission
- [ ] Error message shows if submission fails
- [ ] Form resets after successful submission
- [ ] Email notification received (check spam folder)

### Responsive Testing

- [ ] Desktop: 2-column layout
- [ ] Mobile: Stacked layout (form top, info bottom)
- [ ] Form fields full width on mobile
- [ ] Text readable at all sizes
- [ ] Touch targets adequate (44x44px minimum)
- [ ] No horizontal scroll

### Accessibility Testing

- [ ] All inputs have labels
- [ ] Labels use `for` attribute matching input `id`
- [ ] Required fields marked with * or aria-required
- [ ] Focus indicators visible
- [ ] Keyboard navigation works (Tab through fields)
- [ ] Error messages announced to screen readers
- [ ] Color contrast meets WCAG AA

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Contact page created at `/contact`
- [ ] Form with name, company, email, message fields
- [ ] Client-side validation working
- [ ] Success/error messages display correctly
- [ ] Loading state during submission
- [ ] Response time expectation shown
- [ ] Contact info sidebar added
- [ ] Email notifications configured in Webflow
- [ ] Custom CSS added
- [ ] Mobile responsive design verified
- [ ] Form submission tested (received email)
- [ ] Accessibility requirements met
- [ ] Published to Webflow staging
- [ ] QA sign-off

---

## Troubleshooting Guide

### Issue: Form submissions not receiving emails

**Solution:**
- Check Webflow Form Settings: Email notification enabled
- Verify "Send to" email address is correct
- Check spam/junk folder
- Confirm form has been published (not just saved)
- Test with different email addresses
- Check Webflow account email quotas (free plan has limits)

### Issue: Validation not working

**Solution:**
- Ensure inputs have `required` attribute
- Email field should have `type="email"`
- Check browser support (HTML5 validation)
- Test in different browsers
- Add custom JavaScript validation if needed (Option B)

### Issue: Success message not showing

**Solution:**
- Check Webflow Form Block includes Success State
- Verify success message is not hidden (display: none)
- Ensure form has proper `action` attribute (or none for Webflow default)
- Test form submission completes successfully
- Check browser console for JavaScript errors

### Issue: Form looks broken on mobile

**Solution:**
- Ensure Custom CSS includes mobile media query
- Check `grid-template-columns: 1fr !important` on mobile
- Verify form fields have `width: 100%`
- Test on actual mobile device, not just browser DevTools
- Check for conflicting styles in Webflow Designer

---

## Notes

- **Webflow Native First:** Start with Webflow's built-in form handling (simplest)
- **Email Quotas:** Free Webflow accounts have form submission limits
- **Spam Protection:** Webflow includes basic spam protection (reCAPTCHA)
- **Custom Backend:** Only needed for advanced features (rate limiting, CRM integration)
- **Glass Effect:** Reuses `.glass-card` class from Story 1.3
- **Mobile UX:** Form appears before sidebar on mobile (priority)
- **Response Time:** Sets customer expectations (24-48 hours)

---

## Resources

- [Webflow Forms](https://university.webflow.com/lesson/forms)
- [Form Validation](https://university.webflow.com/lesson/form-validation)
- [Form Notifications](https://university.webflow.com/lesson/form-notifications)
- [Custom Form Handling with JavaScript](https://university.webflow.com/lesson/custom-form-handling)

---

**Status:** Ready for Development ✅
**Recommended Approach:** Option A (Webflow Native Form)
**Review URL:** `[project].webflow.io/contact` after implementation
**Next:** Story 5.4 (Contact Form API - optional for custom backend)
