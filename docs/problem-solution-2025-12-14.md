# Problem Solving Session: TWG Landing Page Launch Readiness

**Date:** 2025-12-14
**Problem Solver:** E
**Problem Category:** Technical/Project Delivery

---

## 🎯 PROBLEM DEFINITION

### Initial Problem Statement

The TWG Landing Page needs to launch by end of day for the client to share with potential investors, customers, and a marketing agency (SEO). However, the build fails, there are no brand assets, and deployment isn't configured.

### Refined Problem Statement

The TWG Landing Page must be **live and professional-looking by end of day** so the client can share a working URL with stakeholders. The critical blocker is the **absence of brand assets** (logo, product images), combined with a **build failure** that prevents deployment. The contact form is secondary—a placeholder is acceptable.

### Problem Context

- Client is TWG (wood products company)
- Audience: Investors, customers, marketing agency for SEO
- Tech stack: Next.js 15 + TinaCMS + Payload CMS
- 6 pages exist with placeholder content
- Build fails due to Payload CMS admin page incompatibility
- No logo, no product images, no hero visuals
- No deployment configuration yet

### Success Criteria

1. ✅ Site is deployed and accessible via public URL
2. ✅ Site looks professional with real brand assets (logo, images)
3. ✅ All 6 pages load without errors
4. ⚪ Contact form can be placeholder ("Coming Soon" or basic)
5. ✅ SEO-ready structure for marketing agency handoff

---

## 🔍 DIAGNOSIS AND ROOT CAUSE ANALYSIS

### Problem Boundaries (Is/Is Not)

| Dimension | IS | IS NOT |
|-----------|-----|--------|
| **What** | Build failure, missing brand assets, no deployment | Performance issues, content problems, design system issues |
| **Where** | Payload CMS admin page, `twg-payload/` directory, asset folders | TinaCMS config, page components, styling |
| **When** | At build time (`npm run build`), when deploying | During development (`npm run dev`), at runtime |
| **Who** | E (developer), client (waiting for URL) | End users (site not live yet) |

**Pattern Identified**: Problem is concentrated in three distinct blockers: Technical (Payload), Content (assets), Infrastructure (deployment). These are independent—fixing one doesn't fix the others.

### Root Cause Analysis

**Blocker 1: Build Fails**
- Why? → Payload admin page throws error about `generatePageMetadata`
- Why? → The export doesn't exist in `@payloadcms/next/utilities`
- Why? → Version mismatch between Payload CMS beta packages
- **Root Cause**: Unstable beta dependency versions

**Blocker 2: No Brand Assets**
- Why? → Site uses placeholder images
- Why? → Real assets were never added
- **Root Cause**: Missing client deliverables OR need to source/create

**Blocker 3: No Deployment**
- Why? → Site only runs locally
- Why? → No deployment configuration exists
- **Root Cause**: Deployment phase not yet executed

### Contributing Factors

- Beta software instability (Payload CMS 3.0-beta)
- Dual CMS approach adds complexity (TinaCMS + Payload)
- Asset pipeline not established with client

### System Dynamics

- Build failure blocks everything downstream
- Brand assets are independent of technical fixes
- Deployment requires successful build first

---

## 📊 ANALYSIS

### Force Field Analysis

**Driving Forces (Supporting Solution):**
- ✅ Clear deadline creates urgency
- ✅ Pages and design system already complete
- ✅ TinaCMS works independently of Payload
- ✅ Vercel deployment is straightforward for Next.js
- ✅ Stock images can substitute for missing assets

**Restraining Forces (Blocking Solution):**
- ❌ Payload CMS beta instability
- ❌ Missing brand assets from client
- ❌ Time constraint (end of day)
- ❌ Dual CMS complexity

### Constraint Identification

- **Primary constraint**: Build must pass before deployment
- **Secondary constraint**: Need professional images
- **Assumed constraint**: Must use Payload CMS (can we bypass it?)

### Key Insights

1. **Payload CMS admin is NOT needed for launch** — TinaCMS handles content editing
2. **We can disable/remove Payload admin route** to fix build
3. **Stock images from Unsplash/Pexels** can make site look professional
4. **Vercel auto-detects Next.js** — deployment is simple once build works

---

## 💡 SOLUTION GENERATION

### Methods Used

- Assumption Busting (Do we need Payload?)
- SCAMPER (Eliminate: Payload admin, Substitute: stock images)

### Generated Solutions

| # | Solution | Type |
|---|----------|------|
| 1 | Remove Payload CMS admin routes entirely | Eliminate blocker |
| 2 | Downgrade Payload packages to stable versions | Fix blocker |
| 3 | Keep Payload but stub out the failing admin page | Workaround |
| 4 | Use high-quality stock images (Unsplash) for wood/manufacturing | Substitute assets |
| 5 | Request emergency assets from client | Get real assets |
| 6 | Generate AI images for products | Create assets |
| 7 | Deploy to Vercel with environment variables | Standard deployment |
| 8 | Deploy to Cloudflare Pages | Alternative deployment |
| 9 | Replace contact form with mailto: link | Simple placeholder |
| 10 | Replace contact form with Calendly/TypeForm embed | Professional placeholder |

### Creative Alternatives

- **Hybrid approach**: Remove Payload admin (not needed), use stock images, deploy to Vercel
- **Minimal viable launch**: Disable anything broken, ship what works

---

## ⚖️ SOLUTION EVALUATION

### Evaluation Criteria

| Criteria | Weight |
|----------|--------|
| Fixes build | Critical |
| Speed to implement | High |
| Professional appearance | High |
| Risk of breaking other things | Medium |
| Maintainability | Low (can fix later) |

### Solution Analysis

| Solution | Fixes Build | Speed | Professional | Risk | Score |
|----------|-------------|-------|--------------|------|-------|
| Remove Payload admin routes | ✅ | Fast | N/A | Low | ⭐⭐⭐⭐⭐ |
| Stock images (Unsplash) | N/A | Fast | High | None | ⭐⭐⭐⭐⭐ |
| Deploy to Vercel | ✅ | Fast | N/A | Low | ⭐⭐⭐⭐⭐ |
| Contact form → mailto link | N/A | Fast | Medium | None | ⭐⭐⭐⭐ |

### Recommended Solution

**Combined approach:**
1. **Remove or stub Payload CMS admin routes** — fixes build immediately
2. **Source stock images** from Unsplash for wood/manufacturing themes
3. **Deploy to Vercel** with TinaCMS cloud or local fallback
4. **Replace contact form** with simple mailto: or placeholder

### Rationale

- Payload admin is NOT required for launch (TinaCMS handles editing)
- Stock images are professional and free
- Vercel is the fastest path to a live URL
- This approach has lowest risk and fastest execution

---

## 🚀 IMPLEMENTATION PLAN

### Implementation Approach

**Strategy**: Sequential fixes, deploy after each verification

### Action Steps

| # | Action | Owner | Dependencies |
|---|--------|-------|--------------|
| 1 | Remove/stub Payload admin routes in `app/(payload)/` | E | None |
| 2 | Run `npm run build` to verify fix | E | Step 1 |
| 3 | Source 10-15 stock images (wood, manufacturing, sustainability) | E | None |
| 4 | Replace placeholder images in content/components | E | Step 3 |
| 5 | Update contact form to mailto: or placeholder | E | None |
| 6 | Configure Vercel project | E | Step 2 |
| 7 | Set environment variables in Vercel | E | Step 6 |
| 8 | Deploy and verify all pages | E | Step 7 |
| 9 | Share URL with client | E | Step 8 |

### Timeline and Milestones

Sequential execution — no time estimates per BMAD policy. Milestones:
- ✓ Build passes
- ✓ Images replaced
- ✓ Site deployed
- ✓ URL shared

### Resource Requirements

- Vercel account (free tier works)
- Unsplash/Pexels for stock images
- Client's email for contact form mailto:

### Responsible Parties

- **E**: All technical implementation
- **Client**: Provide real assets post-launch (enhancement)

---

## 📈 MONITORING AND VALIDATION

### Success Metrics

| Metric | Target |
|--------|--------|
| Build passes | ✅ No errors |
| All 6 pages load | ✅ 200 status |
| Images display | ✅ No broken images |
| Site accessible | ✅ Public URL works |
| Mobile responsive | ✅ Renders correctly |

### Validation Plan

1. Run `npm run build` locally — must pass
2. Run Playwright tests (if configured) — all pass
3. Deploy to Vercel preview — verify all pages
4. Test on mobile device — verify responsiveness
5. Share URL — confirm client can access

### Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Build still fails after Payload removal | Check for other Payload imports, remove all |
| Vercel deployment fails | Check build logs, verify env vars |
| Images don't load | Use absolute URLs, verify paths |
| TinaCMS cloud fails | Use local/git-based content as fallback |

### Adjustment Triggers

- If build fails after 2 attempts → escalate to different approach
- If Vercel fails → try Cloudflare Pages or Netlify
- If client rejects stock images → promise asset swap post-launch

---

## 📝 LESSONS LEARNED

### Key Learnings

*To be completed post-implementation*

### What Worked

*To be completed post-implementation*

### What to Avoid

*To be completed post-implementation*

---

_Generated using BMAD Creative Intelligence Suite - Problem Solving Workflow_
