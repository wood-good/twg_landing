# Product Requirements Document (PRD)
## TWG Landing Page

**Version:** 1.0
**Date:** November 7, 2025
**Author:** Product Team
**Status:** Final
**Timeline:** 2 weeks (November 7-21, 2025)

---

## Executive Summary

TWG, a sustainable woodworking and furniture manufacturer, requires a premium web presence to attract B2B partnerships. This landing page will showcase their commitment to quality craftsmanship and environmental responsibility through an elegant, nature-inspired design that evokes peace and harmony.

The project emphasizes visual storytelling through glassmorphism aesthetics, smooth transitions, and immersive forest-themed video content, positioning TWG as a premium partner for businesses seeking sustainable wood products.

---

## Business Objectives

### Primary Goals

1. **Establish Premium Brand Identity**
   - Position TWG as a high-quality, sustainable woodworking partner
   - Differentiate from commodity lumber suppliers through design excellence
   - Target metric: 90% of visitors perceive TWG as premium (via exit survey)

2. **Generate Qualified B2B Leads**
   - Convert visitors into partnership inquiries
   - Target: 5% conversion rate from visitor to inquiry
   - Focus on quality over quantity (enterprise clients)

3. **Showcase Sustainability Commitment**
   - Highlight complete manufacturing cycle control
   - Demonstrate environmental responsibility
   - Target: Sustainability page has >40% visit rate

### Secondary Goals

4. **Product Education**
   - Clearly explain five product categories
   - Enable informed decision-making
   - Target: Average 2+ product pages viewed per session

5. **Build Trust Through Transparency**
   - Show manufacturing process
   - Demonstrate quality control
   - Target: Manufacturing page >30% visit rate

---

## Target Audience

### Primary Persona: Procurement Manager

**Demographics:**
- Role: Procurement/Supply Chain Manager
- Company Size: 50-500 employees
- Industry: Furniture retail, construction, interior design
- Age: 35-55
- Location: North America, Europe

**Needs:**
- Reliable, consistent quality suppliers
- Sustainable/ESG compliance for corporate goals
- Competitive pricing with premium quality
- Long-term partnership potential

**Behaviors:**
- Researches suppliers thoroughly online
- Values visual proof of quality
- Seeks sustainability certifications
- Compares 3-5 suppliers before contact

**Pain Points:**
- Difficulty finding sustainable suppliers
- Inconsistent quality from current vendors
- Lack of transparency in supply chain
- Poor web experiences from industrial suppliers

### Secondary Persona: Architect/Designer

**Demographics:**
- Role: Architect, Interior Designer, Product Designer
- Firm Size: 10-100 employees
- Age: 30-50

**Needs:**
- Custom fabrication capabilities
- High-quality materials for premium projects
- Sustainability story for clients
- Visual inspiration

**Behaviors:**
- Highly visual decision-making
- Shares interesting suppliers with colleagues
- Values aesthetics as much as specifications
- Active on LinkedIn, Pinterest

---

## Success Metrics

### Business KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Lead Generation** | 20 qualified inquiries/month | Contact form submissions |
| **Conversion Rate** | 5% visitor to lead | Analytics tracking |
| **Engagement Rate** | >3 pages per session | Analytics |
| **Bounce Rate** | <40% | Analytics |
| **Time on Site** | >2 minutes average | Analytics |

### Technical KPIs

| Metric | Target | Measurement |
|--------|--------|-------------|
| **Page Load Time** | <1.5s LCP | Lighthouse |
| **Performance Score** | >90 | Lighthouse |
| **SEO Score** | >95 | Lighthouse |
| **Accessibility** | WCAG 2.1 AA | axe DevTools |
| **Mobile Experience** | 100% responsive | Manual testing |

---

## User Stories

### Epic 1: First Impression

**As a** procurement manager
**I want** to immediately understand TWG's value proposition
**So that** I can quickly assess if they're worth investigating

**Acceptance Criteria:**
- Hero section loads in <1.5 seconds
- Catchphrase clearly communicates sustainability + quality
- Video creates emotional connection within 5 seconds
- Navigation is intuitive and visible

### Epic 2: Product Discovery

**As a** potential B2B client
**I want** to explore TWG's product categories
**So that** I can determine if they meet my needs

**Acceptance Criteria:**
- All 5 product categories visible on products page
- Each product has clear imagery (photo or illustration)
- Specifications easily accessible
- Clear CTA for more information
- A/B test: Photo vs illustration effectiveness

### Epic 3: Sustainability Verification

**As an** ESG-conscious buyer
**I want** to verify TWG's sustainability claims
**So that** I can meet my company's environmental goals

**Acceptance Criteria:**
- Dedicated sustainability page
- Clear explanation of tree-to-tree cycle
- Visual proof of practices
- Certifications displayed (if available)

### Epic 4: Manufacturing Transparency

**As a** quality-focused buyer
**I want** to understand TWG's manufacturing process
**So that** I can trust their quality control

**Acceptance Criteria:**
- Manufacturing page shows process overview
- Mix of text and visual content
- Highlights 100% control of cycle
- Builds trust through transparency

### Epic 5: Contact and Inquiry

**As a** interested buyer
**I want** to easily contact TWG
**So that** I can start a business conversation

**Acceptance Criteria:**
- Contact information visible on every page
- Simple inquiry form (name, company, email, message)
- Form submission confirmation
- Response time expectation set

---

## Functional Requirements

### 1. Navigation System

**Desktop Navigation:**
- Persistent glass-morphism header
- Logo + company name (left)
- Menu items: Home, Products, Manufacturing, Sustainability, Contact
- Smooth hover effects
- Active page indication

**Mobile Navigation:**
- Hamburger menu (React island)
- Full-screen overlay when open
- Touch-optimized spacing
- Smooth open/close animation

### 2. Hero Section

**Video Background:**
- 30-second forest scenery loop
- 3-5 different scenes (test with 3 first)
- Smooth, subtle transitions between scenes
- No audio (accessibility + performance)

**Fallback Strategy:**
- Static poster image for mobile <768px
- Reduced quality video for tablet
- Full quality for desktop >1024px

**Content Overlay:**
- Company logo
- Catchphrase text
- Glass-morphism effect on text container
- Optional: Subtle CTA button

### 3. Products Section

**Product Grid:**
- 5 product categories in organized layout
- Each card contains:
  - Product name
  - Featured image
  - Brief description (2-3 lines)
  - "Learn More" CTA

**Interaction Patterns:**
- Hover: Subtle scale (1.05) + shadow
- Click: Navigate to product detail
- Mobile: Tap to view details

**A/B Testing Requirement:**
- Version A: Real photos (scaled down)
- Version B: Illustrations
- Track: Click-through rate, engagement time

### 4. Product Detail Pages

**Content Structure:**
- Hero image (full width)
- Product name and description
- Specifications table
- Image gallery (3-5 images)
- Contact CTA

**Image Interactions:**
- Click to zoom (lightbox)
- Gallery navigation (previous/next)
- Mobile: Swipe gestures

### 5. Manufacturing Page

**Content Requirements:**
- Overview of process
- 3-5 process steps with descriptions
- Supporting images
- Quality control highlights
- Equipment/technology mentions

### 6. Sustainability Page

**Content Structure:**
- Hero statement about commitment
- Tree-to-tree cycle explanation
- Visual diagram/infographic
- Specific practices listed
- Environmental impact metrics (if available)
- Future commitments

### 7. Contact/Footer

**Footer Contents:**
- Company name and tagline
- Contact email
- Phone number (if applicable)
- Address
- Social media links (LinkedIn primary)
- Copyright notice
- Privacy/Terms links (if required)

---

## Non-Functional Requirements

### Performance Requirements

**Page Load Targets:**
- First Contentful Paint: <1.0s
- Largest Contentful Paint: <1.5s
- Time to Interactive: <2.0s
- Cumulative Layout Shift: <0.05

**Bundle Size Limits:**
- JavaScript: <10KB (excluding video player)
- CSS: <20KB
- Initial HTML: <15KB
- Hero video: <2.5MB

### Browser Support

| Browser | Minimum Version | Features |
|---------|----------------|----------|
| Chrome | Latest 2 versions | Full experience |
| Edge | Latest 2 versions | Full experience |
| Safari | 15+ | CSS fallbacks for glassmorphism |
| Firefox | Latest 2 versions | CSS fallbacks for View Transitions |
| Mobile Safari | 15+ | Static image for hero |
| Chrome Android | Latest | Optimized video |

### SEO Requirements

**Technical SEO:**
- Clean URL structure (/products/finger-joint)
- XML sitemap generation
- Robots.txt configured
- Meta tags on all pages
- Open Graph tags for social sharing
- Schema.org markup for business

**Content SEO:**
- Page titles: Company - Page Name
- Meta descriptions: 150-160 characters
- Alt text on all images
- Semantic HTML structure
- Fast loading times

### Accessibility Requirements

**WCAG 2.1 Level AA Compliance:**
- All images have descriptive alt text
- Color contrast ratio >4.5:1
- Keyboard navigation support
- Focus indicators visible
- Skip navigation link
- ARIA labels where needed
- Video has pause control

---

## Design Requirements

### Visual Design Principles

**Inspiration:** moooi.com

**Key Aesthetics:**
1. **Minimalist:** Clean, uncluttered layouts
2. **Natural:** Forest greens, wood browns, earth tones
3. **Premium:** High-quality imagery, generous whitespace
4. **Peaceful:** Smooth transitions, gentle animations
5. **Modern:** Glassmorphism effects, contemporary typography

### Glassmorphism Implementation

**Glass Effect Standards:**
- Backdrop blur: 10-15px
- Background opacity: 0.1-0.2
- Border: 1px rgba(255,255,255,0.2)
- Border radius: 12px
- Subtle shadow for depth

**Performance Considerations:**
- Maximum 3 glass elements visible
- Disable on scroll for performance
- Provide solid fallback for unsupported browsers

### Typography

**Font Hierarchy:**
- Display: Serif (Playfair Display or similar)
- Body: System font stack
- Sizes: Fluid typography (clamp function)
- Line height: 1.6 for body text

### Color Palette

```css
:root {
  --color-forest: #2C5530;      /* Primary green */
  --color-wood: #8B4513;         /* Wood brown */
  --color-earth: #D2B48C;        /* Light earth */
  --color-sky: #E6F3F7;          /* Light blue */
  --color-text: #2C3E50;         /* Dark gray text */
  --color-white: #FFFFFF;
  --color-glass: rgba(255,255,255,0.1);
}
```

### Motion Design

**Transition Principles:**
- Duration: 200-300ms for micro-interactions
- Easing: ease-out for natural feel
- Page transitions: 500ms with View Transitions API
- No motion for prefers-reduced-motion users

---

## Content Strategy

### Content Tone

**Voice Attributes:**
- Professional yet approachable
- Confident without arrogance
- Technically accurate but accessible
- Sustainability-focused

**Example Copy:**
- ❌ "We make wood products"
- ✅ "Crafting sustainable timber solutions with complete forest-to-finish control"

### Content Requirements

**Landing Page:**
- Hero catchphrase: 10-15 words maximum
- Product descriptions: 20-30 words each
- Clear value propositions

**Product Pages:**
- Detailed specifications
- Use cases/applications
- Quality differentiators
- Sustainability notes

**Manufacturing Page:**
- Process explanation: 200-300 words
- Technical capabilities
- Quality assurance measures

**Sustainability Page:**
- Mission statement: 50-75 words
- Specific practices: Bulleted list
- Future commitments

### Content Management

**Webflow CMS:**
- Site settings (global content)
- Page content (per page via Webflow Editor)
- Product categories (content only, linked to Shopify store)
- SEO metadata (built-in Webflow SEO panel)
- Image assets with alt text (Webflow Asset Manager)
- Visual editing interface (WYSIWYG)

**Content Update Frequency:**
- Quarterly updates expected
- Annual major revisions
- Changes publish instantly via Webflow Designer

---

## Launch Strategy

### Development Timeline

**Week 1 (Nov 7-14):**
- Days 1-2: Setup, design mockups
- Days 3-4: Hero section, navigation
- Day 5: Products page structure

**Week 2 (Nov 15-21):**
- Days 6-7: Product details, interactions
- Day 8: Manufacturing & Sustainability
- Days 9-10: Testing, optimization, deployment

### Testing Plan

**Development Testing:**
- Component unit tests
- Visual regression tests
- Performance testing (Lighthouse)
- Cross-browser testing

**QA Testing:**
- Functional testing all flows
- Mobile device testing
- Accessibility audit
- Content review

**UAT (Day 10):**
- Client walkthrough
- Feedback collection
- Final adjustments

### Deployment Strategy

**Environments:**
- Development: Webflow Designer (staging)
- Preview: Webflow staging domain
- Production: twg-landing.com (via Cloudflare proxy → Webflow hosting)

**Hosting Architecture:**
- Origin: Webflow hosting (Fastly CDN)
- Proxy: Cloudflare (DDoS protection, caching, analytics)
- E-commerce: Shopify (separate, shop.twg.com)

**Go-Live Checklist:**
- [ ] All content reviewed and approved
- [ ] Performance metrics met
- [ ] SEO setup complete (Webflow SEO panel)
- [ ] Analytics configured (Google Analytics via Webflow)
- [ ] SSL certificate active (Cloudflare + Webflow)
- [ ] DNS configured (Cloudflare proxy to Webflow)
- [ ] Cloudflare proxy rules configured
- [ ] Redirects in place (if needed)
- [ ] Backup plan ready

---

## Risks and Mitigations

### Technical Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| **Webflow learning curve** | Low | Low | Intuitive visual builder, extensive documentation |
| **Glassmorphism performance** | Medium | Low | Webflow optimization, browser fallbacks |
| **Video optimization** | Medium | Medium | Webflow video hosting, multiple formats |
| **Cloudflare proxy config** | Low | Low | Standard setup, well-documented |
| **Content delivery delays** | Low | Low | Client edits directly in Webflow |

### Business Risks

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| **Client feedback delays** | High | Medium | Daily preview deployments, clear deadlines |
| **Scope creep** | High | Medium | Documented requirements, change control |
| **Resource availability** | Medium | Low | Team buffer (6 devs vs 4 minimum) |

---

## Dependencies

### External Dependencies

1. **Webflow Account** - Development and hosting platform
2. **Cloudflare Account** - Proxy and security layer
3. **Shopify Store** - Existing e-commerce platform (separate, Phase 1.5 integration)
4. **Content Assets** - Product photos, videos, copy
5. **Brand Assets** - Logo, brand guidelines
6. **Domain Setup** - DNS configuration access

### Internal Dependencies

1. **Design Mockups** - 1-2 days from UI/UX team
2. **Video Assets** - Compressed and optimized
3. **Development Environment** - Team setup
4. **Testing Devices** - Mobile, tablet access

---

## Out of Scope

The following items are explicitly **NOT** included in Phase 1:

1. **E-commerce functionality** - No online ordering (Shopify integration reserved for Phase 1.5+)
2. **Customer portal** - No login/account system
3. **Blog/News section** - May be added later
4. **Multi-language support** - English only
5. **Advanced search** - Simple navigation only
6. **Live chat** - Contact form only
7. **Inventory management** - No real-time stock
8. **Price display** - B2B pricing on request
9. **Configurator tools** - No product customization
10. **Shopify integration** - Landing page remains separate from existing Shopify store

---

## Phase 1.5 (Integration Prototype)

**Objective:** Demonstrate Shopify integration potential to client

**Scope:**
- Prototype build (internal, not client-facing initially)
- Shopify Buy Button integration examples
- Featured product embeds on Webflow pages
- "Shop Now" CTA patterns and user flows
- Proof of concept for seamless e-commerce integration

**Deliverables:**
- Working prototype on staging domain
- Integration documentation
- Client presentation of enhanced capabilities
- Recommendation report for Phase 2 implementation

**Timeline:** 3-5 days post-Phase 1 delivery

**Purpose:**
- Show client the value of integrated experience
- Demonstrate technical feasibility
- Secure buy-in for Phase 2 enhancements
- Prove ROI of unified brand/commerce experience

---

## Future Enhancements (Phase 2)

For consideration after Phase 1.5 prototype approval:

1. **Shopify Integration** - Seamless e-commerce experience (based on Phase 1.5 prototype)
   - Featured products on landing page
   - Buy Now buttons embedded in content
   - Unified brand experience across marketing and commerce

2. **AI-Powered Features**
   - AI chatbot for customer guidance and support
   - AI-assisted site maintenance and content optimization
   - Personalized product recommendations

3. **Blog Integration** - Thought leadership content (Webflow CMS)
4. **Case Studies** - Customer success stories
5. **Dealer Locator** - Find local partners
6. **3D Product Viewer** - Interactive product exploration
7. **Sustainability Dashboard** - Real-time metrics
8. **Newsletter Integration** - Email marketing
9. **Advanced Analytics** - Heatmaps, session recording (via Cloudflare)

---

## Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Product Owner | | | |
| Technical Lead | | | |
| Client Representative | | | |
| Project Manager | | | |

---

## Appendix A: Reference Sites

1. **moooi.com** - Primary design inspiration
2. **interface.com** - Sustainability messaging
3. **hermanmiller.com** - B2B product presentation
4. **west-elm.com** - Product photography style

## Appendix B: Technical Specifications

See accompanying documents:
- `/docs/webflow-architecture.md` - Webflow + Cloudflare technical architecture
- `/docs/phase-1-5-integration.md` - Shopify integration prototype specifications
- `/docs/meeting_notes.md` - Original requirements

**Platform Details:**
- **Webflow Plan:** CMS Plan ($23/mo minimum)
- **Cloudflare:** Proxy with free or Pro plan
- **Shopify:** Existing store (client managed)
- **DNS Management:** Cloudflare
- **SSL/TLS:** Cloudflare Universal SSL + Webflow SSL

---

*This PRD is a living document. Updates require approval from Product Owner and Client Representative.*