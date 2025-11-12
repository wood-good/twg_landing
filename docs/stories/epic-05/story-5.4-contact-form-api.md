# Story 5.4: Contact Form Backend (Webflow)

**Story ID:** STORY-5.4
**Epic:** Epic 5 - Contact and Inquiry
**Priority:** P2
**Story Points:** 3
**Assignee:** Developer
**Platform:** Webflow + External Service (Optional)

---

## User Story

**As a** potential B2B client
**I want** my contact form submission to be sent to TWG
**So that** they can respond to my inquiry

---

## Description

Configure backend handling for contact form submissions. Webflow provides native form handling, but this story documents advanced options for custom requirements (rate limiting, CRM integration, custom email templates).

---

## Acceptance Criteria

- [ ] Form submissions processed successfully
- [ ] Email notifications sent to TWG contact email
- [ ] Appropriate response to user (success/error messages)
- [ ] Basic spam protection enabled
- [ ] Submissions logged/trackable
- [ ] (Optional) Rate limiting to prevent abuse
- [ ] (Optional) Integration with CRM or email service

---

## Implementation Approach Decision

### Option A: Webflow Native Forms (Recommended - Included in Plan)

**Pros:**
- Built into Webflow (no additional cost for Basic plan)
- Zero code setup
- Automatic email notifications
- Basic spam protection (reCAPTCHA)
- Submissions dashboard in Webflow
- Export submissions to CSV

**Cons:**
- Limited customization of email templates
- No advanced rate limiting
- No direct CRM integration
- Form submission limits on free/starter plans

**Use When:** Standard contact form, simple email notifications, small business

---

### Option B: Zapier Integration (No-Code Automation)

**Pros:**
- No code required
- Connect to 5000+ apps (CRM, email, sheets, etc.)
- Visual workflow builder
- Email notifications via Gmail, Outlook, SendGrid
- Conditional logic and filtering

**Cons:**
- Additional cost (Zapier starts at $20/month)
- Rate limits on free tier
- Slight delay in processing (not instant)

**Use When:** Need CRM integration, custom workflows, multiple notification recipients

---

### Option C: Make (formerly Integromat) Integration

**Pros:**
- Similar to Zapier but often cheaper
- More complex workflows possible
- Good for multi-step automation
- Connect to many services

**Cons:**
- Additional cost ($9/month+)
- More complex setup than Zapier
- Learning curve for advanced features

**Use When:** Complex workflows, budget-conscious, technical team

---

### Option D: Custom Serverless Function (Advanced)

**Pros:**
- Full control over logic
- Custom validation and rate limiting
- Advanced security features
- Integration with any service

**Cons:**
- Requires coding (JavaScript/TypeScript)
- Additional hosting (Cloudflare Workers, Vercel, Netlify)
- Maintenance overhead
- More complex debugging

**Use When:** Advanced requirements (rate limiting, custom logic, enterprise integration)

---

## Recommended Implementation: Option A + Option B (Hybrid)

**Strategy:**
1. **Phase 1:** Use Webflow Native Forms (Story 5.3 Option A) - Get working immediately
2. **Phase 2 (If needed):** Add Zapier for CRM integration - Keep Webflow as backup

**Why:** Start simple, scale when needed. Webflow handles basic needs, Zapier adds power.

---

## Option A: Webflow Native Form Setup (Completed in Story 5.3)

### Step 1: Form Notifications Already Configured

If you followed Story 5.3 (Option A), form notifications are already set up:
- Email sent to: contact@twg.com
- Subject: "New Contact Form Submission from {company}"
- Reply-to: {email} (submitter's email)

**No additional work needed.**

---

### Step 2: Access Form Submissions Dashboard

1. In **Webflow Designer** → **CMS & Forms** (left sidebar)
2. Click **Form Submissions**
3. Select **Contact Form**
4. View all submissions in dashboard

**Features:**
- View all submissions
- Export to CSV
- Mark as read/unread
- Delete spam submissions
- Search/filter submissions

---

### Step 3: Configure Spam Protection

Webflow includes reCAPTCHA automatically (invisible to users):

1. Go to **Site Settings** → **Forms**
2. Enable **reCAPTCHA** (should be on by default)
3. Adjust sensitivity if needed (Normal recommended)

**No API keys needed - Webflow handles this.**

---

### Step 4: Set Form Submission Limits (Optional)

Check your Webflow plan limits:
- **Free Plan:** 50 submissions/month
- **Basic Plan:** 500 submissions/month
- **CMS Plan:** 1,000 submissions/month
- **Business Plan:** 2,500 submissions/month

If you exceed limits, submissions will be rejected. Consider upgrading plan or using Option B/C.

---

## Option B: Zapier Integration Setup

### Step 1: Create Zapier Account

1. Sign up at zapier.com
2. Choose plan:
   - **Free:** 100 tasks/month (tasks = form submissions)
   - **Starter:** $20/month, 750 tasks
   - **Professional:** $50/month, 2,000 tasks

---

### Step 2: Create New Zap

1. In Zapier dashboard, click **Create Zap**
2. **Trigger App:** Search "Webflow"
3. **Trigger Event:** "New Form Submission"
4. Click **Continue**

---

### Step 3: Connect Webflow Account

1. Click **Sign in to Webflow**
2. Authorize Zapier to access your Webflow site
3. Select your site from dropdown
4. Select **Contact Form** as the form
5. Click **Continue**

6. **Test Trigger:**
   - Zapier will fetch a recent submission (or use sample data)
   - Verify fields are correct (name, company, email, message)
   - Click **Continue**

---

### Step 4: Add Action - Send Email

**Option B1: Gmail (Simple)**

1. **Action App:** Search "Gmail"
2. **Action Event:** "Send Email"
3. Connect your Gmail account
4. Configure email:
   - **To:** contact@twg.com
   - **Subject:** "New Contact Form: {{company}}"
   - **Body:**
     ```
     New contact form submission:

     Name: {{name}}
     Company: {{company}}
     Email: {{email}}
     Message: {{message}}

     ---
     Submitted at: {{submitted_at}}
     ```
5. **Reply To:** {{email}}
6. Click **Continue** and **Test**

**Option B2: SendGrid (Professional)**

1. **Action App:** Search "SendGrid"
2. **Action Event:** "Send Email"
3. Connect SendGrid account (requires API key)
4. Configure similar to Gmail but with:
   - Custom email templates
   - Tracking pixels
   - Unsubscribe handling

**Option B3: HubSpot / Salesforce (CRM)**

1. **Action App:** Search "HubSpot" or "Salesforce"
2. **Action Event:** "Create Contact" or "Create Lead"
3. Map form fields to CRM fields:
   - Name → Contact Name
   - Company → Company Name
   - Email → Email Address
   - Message → Notes/Description

---

### Step 5: Add Additional Actions (Optional)

**Action 2: Add to Google Sheets (Logging)**

1. Click **+ Add Action**
2. **App:** Google Sheets
3. **Event:** "Create Spreadsheet Row"
4. Select your tracking spreadsheet
5. Map fields to columns

**Action 3: Send Slack Notification**

1. **App:** Slack
2. **Event:** "Send Channel Message"
3. Select channel (#sales or #inquiries)
4. Message template:
   ```
   New contact form submission from *{{company}}*
   Name: {{name}}
   Email: {{email}}
   View details: [link to form submission]
   ```

---

### Step 6: Turn On Zap

1. Click **Publish** or **Turn On Zap**
2. Test by submitting form on your website
3. Verify email received and CRM updated

---

## Option C: Make.com Integration Setup

### Step 1: Create Make Account

1. Sign up at make.com
2. Choose plan:
   - **Free:** 1,000 operations/month
   - **Core:** $9/month, 10,000 operations
   - **Pro:** $16/month, 10,000 operations + priority

---

### Step 2: Create New Scenario

1. Click **Create a new scenario**
2. Search for **Webflow** module
3. Select **Watch Form Submissions** trigger

---

### Step 3: Configure Webflow Trigger

1. Add Webflow connection (API key from Webflow)
2. Select your site ID
3. Select form: **Contact Form**
4. Set polling interval: 15 minutes (or instant with webhooks)

---

### Step 4: Add Email Module

1. Click **+ Add module**
2. Search **Email**
3. Select **Send an Email**
4. Configure:
   - **To:** contact@twg.com
   - **Subject:** New Inquiry from {{1.company}}
   - **Content:** Map fields from Webflow trigger

---

### Step 5: Add Additional Modules (Optional)

Similar to Zapier, you can add:
- Google Sheets logging
- CRM integration
- Slack notifications
- SMS via Twilio

---

## Option D: Custom Serverless Function (Advanced)

### When to Use This Option

**Required for:**
- Rate limiting (5 submissions per IP per hour)
- Custom validation logic
- Advanced spam detection
- Enterprise CRM integration with authentication
- Custom email templates with complex logic
- GDPR compliance features (data encryption, retention policies)

**Implementation Platforms:**

1. **Cloudflare Workers** (Recommended)
   - Edge computing (fast globally)
   - Free tier: 100,000 requests/day
   - $5/month for paid plan
   - KV storage for rate limiting

2. **Vercel Edge Functions**
   - Similar to Cloudflare Workers
   - Free tier: 100GB bandwidth
   - Good TypeScript support

3. **Netlify Functions**
   - AWS Lambda under the hood
   - Free tier: 125k requests/month
   - Easy deployment

---

### Implementation Overview (Cloudflare Workers Example)

**Note:** This requires significant technical expertise. Only implement if you have specific advanced requirements.

**Architecture:**
```
Webflow Form → Custom JavaScript → Cloudflare Worker API → Email Service (Resend/SendGrid)
                                   ↓
                            Rate Limiting (KV Store)
```

**File Structure:**
```
/functions
  /api
    contact.js       # Cloudflare Worker
/src
  form-handler.js    # Custom form JavaScript (from Story 5.3 Option B)
```

**Basic Implementation:**

```javascript
// functions/api/contact.js (Cloudflare Worker)

export async function onRequest(context) {
  const { request, env } = context;

  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  // Handle CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  // Only accept POST
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }

  try {
    // Get client IP
    const clientIP = request.headers.get('CF-Connecting-IP') || 'unknown';

    // Rate limiting check
    const rateLimitKey = `rate_limit:${clientIP}`;
    const submissions = await env.RATE_LIMIT_KV.get(rateLimitKey);
    const submissionCount = submissions ? parseInt(submissions) : 0;

    if (submissionCount >= 5) {
      return new Response(
        JSON.stringify({ error: 'Too many submissions. Please try again in 1 hour.' }),
        { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Parse form data
    const body = await request.json();
    const { name, company, email, message } = body;

    // Validation
    if (!name || !company || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'All fields are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Send email using Resend API
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${env.RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'TWG Contact <noreply@twg.com>',
        to: env.CONTACT_EMAIL,
        replyTo: email,
        subject: `New Contact Form Submission from ${company}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
        `
      })
    });

    if (!emailResponse.ok) {
      throw new Error('Email send failed');
    }

    // Increment rate limit counter (expires in 1 hour)
    await env.RATE_LIMIT_KV.put(
      rateLimitKey,
      (submissionCount + 1).toString(),
      { expirationTtl: 3600 }
    );

    return new Response(
      JSON.stringify({ success: true, message: 'Thank you! We will respond within 24-48 hours.' }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error. Please try again or email us directly.' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
}
```

**Environment Variables (Cloudflare Dashboard):**
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxx
CONTACT_EMAIL=contact@twg.com
```

**KV Namespace Setup:**
1. Create KV namespace in Cloudflare dashboard: `RATE_LIMIT_KV`
2. Bind to Worker

---

## Recommendation Matrix

| Requirement | Option A (Webflow) | Option B (Zapier) | Option C (Make) | Option D (Custom) |
|-------------|-------------------|-------------------|-----------------|-------------------|
| Simple contact form | ✅ Best | ✅ Overkill | ❌ Overkill | ❌ Overkill |
| CRM integration | ❌ Manual | ✅ Best | ✅ Good | ⚠️ Possible |
| Rate limiting | ❌ None | ⚠️ Limited | ⚠️ Limited | ✅ Best |
| Custom email templates | ❌ Basic | ✅ Good | ✅ Good | ✅ Best |
| Cost (small business) | ✅ Included | ⚠️ $20/mo | ✅ $9/mo | ⚠️ $5/mo + dev time |
| Setup time | ✅ 5 min | ⚠️ 30 min | ⚠️ 45 min | ❌ 4+ hours |
| Maintenance | ✅ None | ✅ Low | ✅ Low | ❌ High |

**For TWG Landing Page: Use Option A (Webflow Native)**, add Option B (Zapier) if CRM integration needed.

---

## Dependencies

**Blocked By:**
- Story 5.3 (Contact Page Form)

**Blocks:**
- None (final story)

**External:**
- Webflow account with form submissions enabled
- (Optional) Zapier/Make account
- (Optional) Email service API keys (Resend, SendGrid)
- (Optional) CRM credentials (HubSpot, Salesforce)

---

## Testing Checklist

### Webflow Native Forms Testing

- [ ] Form submission sends email to correct address
- [ ] Email includes all form fields
- [ ] Reply-to address is submitter's email
- [ ] Submissions appear in Webflow dashboard
- [ ] reCAPTCHA blocks obvious spam
- [ ] Success message displays to user
- [ ] Check spam folder if email not received

### Zapier/Make Integration Testing

- [ ] Zap/Scenario triggers on form submission
- [ ] Email sent via chosen service (Gmail, SendGrid)
- [ ] CRM contact created (if applicable)
- [ ] Google Sheets row added (if applicable)
- [ ] Slack notification sent (if applicable)
- [ ] Test with invalid data (should handle gracefully)
- [ ] Check Zap history for errors

### Custom Function Testing (Option D)

- [ ] API endpoint returns 200 on success
- [ ] Validation rejects empty fields (400 error)
- [ ] Email format validation works
- [ ] Rate limiting prevents abuse (429 error after 5 submissions)
- [ ] Email sent via Resend/SendGrid
- [ ] CORS headers allow Webflow domain
- [ ] Error handling returns user-friendly messages
- [ ] Logs submission for debugging

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Form submissions processed successfully
- [ ] Email notifications working (test received)
- [ ] Spam protection enabled (reCAPTCHA or similar)
- [ ] Submissions trackable (Webflow dashboard or logs)
- [ ] (Optional) Rate limiting implemented
- [ ] (Optional) CRM integration working
- [ ] User receives appropriate success/error messages
- [ ] Testing completed end-to-end
- [ ] Documentation provided
- [ ] QA sign-off

---

## Troubleshooting Guide

### Issue: Not receiving form submission emails

**Solution:**
- Check spam/junk folder first
- Verify email address in Webflow Form Settings
- Ensure form is published (not just saved in Designer)
- Check Webflow account has active plan (free plan has limits)
- Test with different "To" email address
- Check Webflow Form Submissions dashboard (submissions still recorded)

### Issue: Zapier not triggering

**Solution:**
- Ensure Zap is turned ON (not paused)
- Check Zap filter conditions (may be filtering out submissions)
- Verify Webflow connection is authorized
- Check Zapier task history for errors
- Test trigger manually in Zapier editor
- Ensure form name matches Zap configuration

### Issue: Rate limiting on Webflow forms

**Solution:**
- Upgrade Webflow plan for higher limits
- Use Zapier/Make to route submissions to external service
- Implement custom function (Option D) with no Webflow limits
- Monitor submission counts in Webflow dashboard

### Issue: Custom function CORS errors

**Solution:**
- Add CORS headers to all responses (including errors)
- Include OPTIONS method handler for preflight requests
- Set `Access-Control-Allow-Origin` to Webflow domain or `*`
- Test API endpoint directly with curl/Postman first
- Check browser console for specific CORS error

---

## Notes

- **Start Simple:** Webflow native forms work for 90% of use cases
- **Scale When Needed:** Add Zapier/Make for CRM integration later
- **Custom Function:** Only for advanced requirements (rate limiting, enterprise features)
- **Cost Awareness:** Webflow forms included, Zapier starts at $20/month
- **Maintenance:** Webflow native = zero maintenance, custom function = ongoing updates
- **Spam Protection:** Webflow's reCAPTCHA is usually sufficient
- **GDPR Compliance:** Webflow handles basic requirements, custom function needed for advanced

---

## Resources

- [Webflow Forms Documentation](https://university.webflow.com/lesson/forms)
- [Zapier Webflow Integration](https://zapier.com/apps/webflow/integrations)
- [Make.com Webflow Module](https://www.make.com/en/integrations/webflow)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Resend Email API](https://resend.com/docs)
- [SendGrid API](https://docs.sendgrid.com/)

---

**Status:** Ready for Development ✅
**Recommended Approach:** Option A (Webflow Native Forms)
**Alternative:** Option B (Zapier) for CRM integration
**Advanced:** Option D (Custom Function) only if truly needed
**Next Steps:** All stories complete! Ready to begin Webflow implementation.
