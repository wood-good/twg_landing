# Epic 5: Contact and Inquiry

**Epic ID:** EPIC-05
**Priority:** P0 - Critical
**Status:** Ready for Development
**Estimated Effort:** 8 story points (~1 day)
**Sprint:** Sprint 2 (Week 2)
**Platform:** Webflow Forms (Native form functionality)

---

## Epic Goal

Enable interested B2B buyers to easily contact TWG through a simple, accessible contact form and persistent footer with contact information on every page, setting clear response time expectations.

---

## User Story

**As an** interested buyer
**I want** to easily contact TWG
**So that** I can start a business conversation

---

## Success Metrics

- Contact information visible on every page (footer)
- Simple inquiry form accessible from all pages
- Form submission confirmation displayed
- Response time expectation clearly set
- Form submission success rate >95%
- Contact page load time <0.8s

---

## User Stories Breakdown

### Story 5.1: Contact Information Schema in Sanity

**Priority:** P0
**Effort:** 2 hours
**Assignee:** Backend Developer

**Description:**
Create or extend Sanity schema for contact information and form settings.

**Acceptance Criteria:**
- [ ] ContactInfo within SiteSettings schema
- [ ] Fields: email, phone (optional), address, social links (LinkedIn primary), response time expectation
- [ ] Validation for email format
- [ ] Phone number optional
- [ ] Social links with URL validation

**Technical Implementation:**
```javascript
// sanity/schemas/documents/siteSettings.js (extend existing)
{
  name: 'siteSettings',
  type: 'document',
  fields: [
    // ... existing fields
    {
      name: 'contactInfo',
      type: 'object',
      fields: [
        { name: 'email', type: 'string', validation: emailValidation },
        { name: 'phone', type: 'string' },
        { name: 'address', type: 'text' },
        { name: 'responseTime', type: 'string', initialValue: '24-48 hours' },
        {
          name: 'socialLinks',
          type: 'array',
          of: [{ type: 'socialLink' }]
        }
      ]
    }
  ]
}
```

**Social Link Object:**
```javascript
{
  name: 'socialLink',
  type: 'object',
  fields: [
    { name: 'platform', type: 'string', options: { list: ['LinkedIn', 'Facebook', 'Instagram', 'Twitter'] } },
    { name: 'url', type: 'url', validation: required }
  ]
}
```

**Dependencies:**
- Sanity studio running
- SiteSettings schema (from Epic 1)

---

### Story 5.2: Footer Component with Contact Information

**Priority:** P0
**Effort:** 4 hours
**Assignee:** Frontend Developer 1

**Description:**
Create persistent footer component displaying contact information on all pages.

**Acceptance Criteria:**
- [ ] Footer appears on all pages
- [ ] Displays: company name, tagline, contact email, phone (if available), address, social media links
- [ ] LinkedIn link prominently displayed
- [ ] Copyright notice with current year
- [ ] Privacy/Terms links (if required)
- [ ] Glass effect styling
- [ ] Mobile-responsive layout

**Technical Implementation:**
```astro
// src/components/Layout/Footer.astro
---
import { getSiteSettings } from '@/lib/sanity';
import GlassCard from '@/components/Glass/GlassCard.astro';

const settings = await getSiteSettings();
const { siteName, contactInfo } = settings;
const currentYear = new Date().getFullYear();
---

<footer class="site-footer">
  <GlassCard class="footer-content">
    <div class="footer-grid">
      <!-- Company Info -->
      <div class="footer-section">
        <h3>{siteName}</h3>
        <p class="tagline">Sustainable Woodworking Excellence</p>
      </div>

      <!-- Contact Info -->
      <div class="footer-section">
        <h4>Contact Us</h4>
        <ul class="contact-list">
          <li>
            <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
          </li>
          {contactInfo.phone && (
            <li>
              <a href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
            </li>
          )}
          {contactInfo.address && (
            <li>{contactInfo.address}</li>
          )}
        </ul>
      </div>

      <!-- Social Links -->
      <div class="footer-section">
        <h4>Follow Us</h4>
        <ul class="social-links">
          {contactInfo.socialLinks?.map(link => (
            <li>
              <a href={link.url} target="_blank" rel="noopener noreferrer">
                {link.platform}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="footer-bottom">
      <p>&copy; {currentYear} {siteName}. All rights reserved.</p>
      <div class="footer-links">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
    </div>
  </GlassCard>
</footer>

<style>
  .site-footer {
    margin-top: 4rem;
    padding: 2rem 0;
  }

  .footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
  }

  .footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 1rem;
    margin-top: 2rem;
  }

  .contact-list,
  .social-links {
    list-style: none;
    padding: 0;
  }

  .contact-list li,
  .social-links li {
    margin: 0.5rem 0;
  }

  .footer-links {
    display: flex;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    .footer-bottom {
      flex-direction: column;
      gap: 1rem;
      text-align: center;
    }
  }
</style>
```

**Integration:**
```astro
// src/layouts/Layout.astro
---
import Header from '@/components/Layout/Header.astro';
import Footer from '@/components/Layout/Footer.astro';
---

<!DOCTYPE html>
<html>
  <head>...</head>
  <body>
    <Header />
    <main>
      <slot />
    </main>
    <Footer />
  </body>
</html>
```

**Dependencies:**
- ContactInfo from Sanity
- GlassCard component

---

### Story 5.3: Contact Page with Inquiry Form

**Priority:** P0
**Effort:** 6 hours
**Assignee:** Frontend Developer 2

**Description:**
Create dedicated contact page with simple inquiry form (React island for form handling).

**Acceptance Criteria:**
- [ ] Contact page accessible from navigation
- [ ] Form fields: name, company, email, message
- [ ] Client-side validation
- [ ] Loading state during submission
- [ ] Success confirmation message
- [ ] Error handling with user-friendly messages
- [ ] Response time expectation displayed
- [ ] Accessible form with proper labels

**Technical Implementation:**
```tsx
// src/components/Contact/ContactForm.tsx
import { useState } from 'react';

interface FormData {
  name: string;
  company: string;
  email: string;
  message: string;
}

interface FormState {
  status: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    message: ''
  });

  const [formState, setFormState] = useState<FormState>({ status: 'idle' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ status: 'loading' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setFormState({
          status: 'success',
          message: 'Thank you! We will respond within 24-48 hours.'
        });
        setFormData({ name: '', company: '', email: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormState({
        status: 'error',
        message: 'Something went wrong. Please try again or email us directly.'
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (formState.status === 'success') {
    return (
      <div className="success-message">
        <h3>Message Sent Successfully!</h3>
        <p>{formState.message}</p>
        <button onClick={() => setFormState({ status: 'idle' })}>
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="name">Name *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={formState.status === 'loading'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Company *</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
          disabled={formState.status === 'loading'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={formState.status === 'loading'}
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Message *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          required
          disabled={formState.status === 'loading'}
        />
      </div>

      {formState.status === 'error' && (
        <div className="error-message">{formState.message}</div>
      )}

      <button
        type="submit"
        className="submit-button"
        disabled={formState.status === 'loading'}
      >
        {formState.status === 'loading' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
```

**Contact Page:**
```astro
// src/pages/contact.astro
---
import Layout from '@/layouts/Layout.astro';
import { getSiteSettings } from '@/lib/sanity';
import ContactForm from '@/components/Contact/ContactForm';
import GlassCard from '@/components/Glass/GlassCard.astro';

const settings = await getSiteSettings();
---

<Layout title="Contact Us | TWG">
  <article class="contact-page">
    <section class="contact-hero">
      <h1>Get in Touch</h1>
      <p>Interested in partnering with TWG? We'd love to hear from you.</p>
    </section>

    <div class="contact-grid">
      <GlassCard class="contact-form-container">
        <h2>Send us a message</h2>
        <ContactForm client:load />
        <p class="response-time">
          We typically respond within {settings.contactInfo.responseTime}
        </p>
      </GlassCard>

      <div class="contact-info-sidebar">
        <GlassCard>
          <h3>Contact Information</h3>
          <ul class="info-list">
            <li>
              <strong>Email:</strong>
              <a href={`mailto:${settings.contactInfo.email}`}>
                {settings.contactInfo.email}
              </a>
            </li>
            {settings.contactInfo.phone && (
              <li>
                <strong>Phone:</strong>
                <a href={`tel:${settings.contactInfo.phone}`}>
                  {settings.contactInfo.phone}
                </a>
              </li>
            )}
            {settings.contactInfo.address && (
              <li>
                <strong>Address:</strong>
                <p>{settings.contactInfo.address}</p>
              </li>
            )}
          </ul>
        </GlassCard>

        <GlassCard>
          <h3>Follow Us</h3>
          <ul class="social-list">
            {settings.contactInfo.socialLinks?.map(link => (
              <li>
                <a href={link.url} target="_blank" rel="noopener">
                  {link.platform}
                </a>
              </li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </div>
  </article>
</Layout>

<style>
  .contact-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .contact-hero {
    text-align: center;
    margin-bottom: 3rem;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }

  .response-time {
    margin-top: 1rem;
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }

  @media (max-width: 768px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
```

**Dependencies:**
- React for form handling
- API endpoint (Story 5.4)

---

### Story 5.4: Contact Form API Endpoint (Serverless Function)

**Priority:** P0
**Effort:** 4 hours
**Assignee:** Backend Developer

**Description:**
Create serverless API endpoint to handle contact form submissions and send email notifications.

**Acceptance Criteria:**
- [ ] API endpoint `/api/contact` accepts POST requests
- [ ] Validates form data (name, company, email, message)
- [ ] Sends email notification to TWG contact email
- [ ] Returns appropriate status codes (200, 400, 500)
- [ ] Rate limiting to prevent spam
- [ ] Logs submissions for tracking

**Technical Implementation:**

**Option A: Cloudflare Pages Functions**
```typescript
// functions/api/contact.ts
export async function onRequestPost(context) {
  const { request, env } = context;

  try {
    const body = await request.json();
    const { name, company, email, message } = body;

    // Validation
    if (!name || !company || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Send email using Cloudflare Email Workers or external service
    await sendEmail({
      to: env.CONTACT_EMAIL,
      from: 'noreply@twg-landing.com',
      subject: `New Contact Form Submission from ${company}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
```

**Option B: External Service (SendGrid, Mailgun, Resend)**
```typescript
// Use Resend API (recommended for simplicity)
import { Resend } from 'resend';

const resend = new Resend(env.RESEND_API_KEY);

await resend.emails.send({
  from: 'contact@twg-landing.com',
  to: env.CONTACT_EMAIL,
  subject: `New inquiry from ${company}`,
  html: emailTemplate
});
```

**Environment Variables:**
- `CONTACT_EMAIL`: TWG's contact email address
- `RESEND_API_KEY`: API key for email service (if using Resend)

**Dependencies:**
- Email service configured (Resend, SendGrid, or Cloudflare Email Workers)
- Environment variables set in Cloudflare Pages

---

## Technical Architecture Notes

### Email Service Options
1. **Resend** (Recommended): Simple API, generous free tier, great DX
2. **SendGrid**: More features, established provider
3. **Cloudflare Email Workers**: Native integration, no external dependencies
4. **Mailgun**: Good deliverability, flexible pricing

### Security Considerations
- Implement rate limiting (max 5 submissions per IP per hour)
- Validate all input server-side
- Sanitize message content before sending email
- Use CAPTCHA if spam becomes an issue (can be phase 2)

### Performance Considerations
- Keep form lightweight (<5KB JS)
- Optimistic UI updates
- Clear error messages
- Instant validation feedback

### Accessibility Requirements
- Proper form labels and ARIA attributes
- Keyboard navigation
- Error messages announced to screen readers
- Focus management after submission

---

## Definition of Done

- [ ] All 4 stories completed with acceptance criteria met
- [ ] Footer displays on all pages with correct contact info
- [ ] Contact page accessible from navigation
- [ ] Contact form submits successfully
- [ ] Email notifications received at TWG email
- [ ] Form validation works correctly
- [ ] Success and error states display properly
- [ ] Response time expectation clearly communicated
- [ ] Rate limiting prevents spam
- [ ] Mobile-responsive footer and form
- [ ] Unit tests for form validation
- [ ] E2E test for form submission flow
- [ ] Lighthouse score: Performance >90, Accessibility 100
- [ ] Code review completed
- [ ] QA sign-off

---

## Dependencies

**External:**
- TWG contact email address
- Social media links (LinkedIn primary)
- Physical address (if applicable)
- Email service account (Resend, SendGrid, etc.)

**Internal:**
- Footer integrated into Layout
- API endpoint configured
- Environment variables set

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Email deliverability issues | High | Use reputable email service, configure SPF/DKIM |
| Form spam submissions | Medium | Implement rate limiting, consider CAPTCHA later |
| API endpoint failures | Medium | Proper error handling, fallback to mailto link |
| Social links not provided | Low | Make social section optional in footer |

---

## Testing Checklist

**Unit Tests:**
- [ ] Form validation logic correct
- [ ] Footer renders with contact info
- [ ] Email template formats correctly

**E2E Tests (Playwright):**
- [ ] Contact page loads correctly
- [ ] Form submission succeeds with valid data
- [ ] Form shows errors with invalid data
- [ ] Success message displays after submission
- [ ] Footer appears on all pages

**Manual Testing:**
- [ ] Test email receipt at TWG email address
- [ ] Verify rate limiting works
- [ ] Test on various devices and browsers

---

## Notes for Developers

- Use Resend for email service - simplest integration for MVP
- Form should work without JavaScript (progressive enhancement), but use React island for better UX
- Consider adding honeypot field for spam prevention (invisible field that bots fill)
- Log all submissions to help track lead generation effectiveness
- Footer should be part of base Layout component for consistency

---

**Ready for Sprint Planning:** ✅
**Dependencies Clear:** ✅ (Email service dependency flagged)
**Acceptance Criteria Defined:** ✅
