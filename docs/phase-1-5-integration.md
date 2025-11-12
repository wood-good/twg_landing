# Phase 1.5: Shopify Integration Prototype
## TWG Landing Page Enhancement

**Version:** 1.0
**Date:** November 10, 2025
**Status:** Prototype Specification
**Timeline:** 3-5 days post-Phase 1 delivery

---

## Objective

Build an internal prototype demonstrating seamless integration between the Webflow landing page and the existing Shopify store to:

1. **Show client the value** of unified brand/commerce experience
2. **Prove technical feasibility** of integration approaches
3. **Secure buy-in** for Phase 2 full implementation
4. **Test user flows** before committing to architecture

---

## Integration Approaches

### Approach 1: Simple Link Integration (Baseline)

**Current State (Phase 1):**
```
Webflow Landing Page
└── Product Category Pages
    └── Text description only
    └── No CTAs to shop
```

**Phase 1.5 Enhancement:**
```
Webflow Landing Page
└── Product Category Pages
    ├── Enhanced product descriptions
    ├── High-quality product images
    └── "View This Product" CTA → shop.twg.com/products/[slug]
```

**Implementation:**
- Add CTA buttons to product category pages
- Link directly to corresponding Shopify product pages
- Track click-through rates (UTM parameters)
- Measure engagement increase

**Pros:**
- ✅ Zero technical complexity
- ✅ No API integration needed
- ✅ Instant implementation (1-2 hours)

**Cons:**
- ⚠️ User leaves Webflow experience
- ⚠️ Two separate brand experiences

**Best For:** Minimal risk demonstration

---

### Approach 2: Shopify Buy Button Integration (Recommended)

**Architecture:**
```
┌────────────────────────────────────────────────┐
│         Webflow Landing Page                   │
│                                                │
│  ┌──────────────────────────────────────┐    │
│  │   Product Category Page              │    │
│  │                                       │    │
│  │   [Product Description]               │    │
│  │   [Product Images]                    │    │
│  │                                       │    │
│  │   ┌─────────────────────────────┐    │    │
│  │   │  Shopify Buy Button Widget  │    │    │
│  │   │  • Product: Finger Joint    │    │    │
│  │   │  • Price: Contact for quote │    │    │
│  │   │  • [Add to Cart] Button     │    │    │
│  │   └─────────────────────────────┘    │    │
│  │                                       │    │
│  │   Cart opens in modal/sidebar         │    │
│  │   Checkout → shop.twg.com            │    │
│  └──────────────────────────────────────┘    │
└────────────────────────────────────────────────┘
```

**Implementation Steps:**

#### Step 1: Generate Buy Buttons in Shopify

1. Log into Shopify Admin
2. Navigate to: **Sales Channels → Online Store → Themes**
3. Add channel: **Buy Button**
4. Create Buy Button for each product:
   - Finger Joint
   - Edge-Glued Panels
   - Solid Wood
   - Laminated Timber
   - Custom Products

#### Step 2: Configure Buy Button Appearance

```javascript
// Shopify Buy Button Configuration
{
  product: {
    styles: {
      button: {
        "background-color": "#2C5530",  // TWG forest green
        "color": "#ffffff",
        "border-radius": "12px",
        "padding": "16px 32px",
        "font-family": "system-ui, sans-serif",
        ":hover": {
          "background-color": "#1e3b21"
        }
      },
      title: {
        "font-family": "Playfair Display, serif",
        "font-size": "24px",
        "color": "#2C3E50"
      },
      price: {
        "font-size": "18px",
        "color": "#2C5530"
      }
    },
    text: {
      button: "Add to Cart"
    }
  },
  cart: {
    styles: {
      button: {
        "background-color": "#2C5530",
        ":hover": {
          "background-color": "#1e3b21"
        }
      }
    },
    text: {
      title: "Your Cart",
      total: "Subtotal",
      button: "Checkout"
    }
  },
  toggle: {
    styles: {
      toggle: {
        "background-color": "#2C5530"
      }
    }
  }
}
```

#### Step 3: Embed in Webflow

1. In Webflow Designer, add **Embed** element to product page
2. Paste Shopify Buy Button code
3. Test responsiveness at all breakpoints
4. Style container to match glassmorphism aesthetic

**Sample Embed Code:**
```html
<div id="product-component-[product-id]"></div>
<script type="text/javascript">
(function () {
  var scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
  if (window.ShopifyBuy) {
    if (window.ShopifyBuy.UI) {
      ShopifyBuyInit();
    } else {
      loadScript();
    }
  } else {
    loadScript();
  }

  function loadScript() {
    var script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    var client = ShopifyBuy.buildClient({
      domain: 'twg.myshopify.com',
      storefrontAccessToken: '[YOUR_ACCESS_TOKEN]',
    });

    ShopifyBuy.UI.onReady(client).then(function (ui) {
      ui.createComponent('product', {
        id: '[PRODUCT_ID]',
        node: document.getElementById('product-component-[product-id]'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
        options: {
          "product": {
            "styles": {
              "button": {
                "background-color": "#2C5530",
                "color": "#ffffff",
                "border-radius": "12px",
                "padding": "16px 32px",
                ":hover": {
                  "background-color": "#1e3b21"
                }
              }
            }
          }
        }
      });
    });
  }
})();
</script>
```

**Pros:**
- ✅ Products visible on Webflow pages
- ✅ Users stay in Webflow experience
- ✅ Checkout still handled by Shopify
- ✅ Brand consistency maintained
- ✅ Easy to implement (4-6 hours)

**Cons:**
- ⚠️ Some styling limitations
- ⚠️ Additional JavaScript load
- ⚠️ Modal cart experience

**Best For:** Phase 1.5 prototype demonstration

---

### Approach 3: Headless Shopify (Future/Phase 2)

**Architecture:**
```
Webflow Landing Page
    ↓
Custom JavaScript
    ↓
Shopify Storefront API
    ↓ (Fetch products, cart, checkout)
Shopify Backend
```

**Implementation:**
- Use Shopify Storefront API
- Build custom product displays in Webflow
- Complete design control
- Custom cart experience

**Pros:**
- ✅ Full design control
- ✅ Unified experience
- ✅ Custom functionality
- ✅ No Buy Button limitations

**Cons:**
- ⚠️ Significant development time (2-3 weeks)
- ⚠️ Maintenance overhead
- ⚠️ Complex implementation
- ⚠️ Beyond Phase 1.5 scope

**Best For:** Phase 2 if Buy Button proves insufficient

---

## Prototype Scope

### What to Build (Phase 1.5)

#### 1. Featured Products Section on Homepage

**Location:** Below hero section, above manufacturing overview

**Content:**
```
Section: Featured Products
├── Heading: "Our Premium Wood Solutions"
├── Subheading: "Explore our sustainable product range"
├── Grid: 3 featured products
│   ├── Product 1: Finger Joint (Buy Button)
│   ├── Product 2: Edge-Glued Panels (Buy Button)
│   └── Product 3: Solid Wood (Buy Button)
└── CTA: "View All Products" → shop.twg.com/collections/all
```

#### 2. Enhanced Product Category Pages

**For Each Category:**
- Full product description (existing)
- Technical specifications (existing)
- High-quality images (existing)
- **NEW:** Shopify Buy Button embed
- **NEW:** "Or browse full catalog" link

**Example: Finger Joint Page**
```
/products/finger-joint

[Hero Image]

Finger Joint Wood Products
━━━━━━━━━━━━━━━━━━━━━━━━

[Description text]

┌─────────────────────────────────────┐
│   Shopify Buy Button                │
│   • Product details from Shopify    │
│   • Price (or "Contact for quote")  │
│   • Add to Cart button              │
│   • Modal cart integration          │
└─────────────────────────────────────┘

[Technical Specifications]

[Related Products]
```

#### 3. Cart Integration

**Behavior:**
- Add to cart → Modal/sidebar opens on Webflow page
- Continue shopping → User stays on Webflow
- Checkout → Redirects to shop.twg.com/cart

#### 4. Analytics Tracking

**Implement Tracking:**
```javascript
// Track Buy Button interactions
gtag('event', 'add_to_cart', {
  'currency': 'USD',
  'value': price,
  'items': [{
    'item_id': product_id,
    'item_name': product_name,
    'item_category': 'Wood Products'
  }]
});

// Track checkout initiation
gtag('event', 'begin_checkout', {
  'currency': 'USD',
  'value': cart_total
});
```

---

## User Journey Comparison

### Before (Phase 1 - Separate)

```
User lands on www.twg.com
    ↓
Browses products (descriptions only)
    ↓
No path to purchase
    ↓
Must manually navigate to shop.twg.com
    ↓
Search for product again
    ↓
Add to cart and checkout
```

**Friction Points:** 2 domain switches, product re-discovery

---

### After (Phase 1.5 - Integrated)

```
User lands on www.twg.com
    ↓
Browses products (descriptions + Buy Buttons)
    ↓
Clicks "Add to Cart" on Webflow page
    ↓
Modal cart opens (stays on www.twg.com)
    ↓
Reviews cart
    ↓
Clicks "Checkout"
    ↓
Redirects to shop.twg.com/checkout (secure)
    ↓
Completes purchase
```

**Friction Points:** 1 domain switch (only for checkout)

---

## Testing Plan

### A/B Testing Setup

**Control Group (A):** Phase 1 design (no integration)
**Test Group (B):** Phase 1.5 design (Buy Buttons)

**Metrics to Track:**

| Metric | Control (A) | Test (B) | Target Improvement |
|--------|-------------|----------|-------------------|
| Click-through to shop | 5% | ? | +50% (to 7.5%) |
| Add to cart rate | N/A | ? | >10% |
| Time on site | 2 min | ? | +30% (to 2.6 min) |
| Pages per session | 3 | ? | +1 page (to 4) |
| Bounce rate | 40% | ? | -10% (to 30%) |
| Conversion to inquiry | 5% | ? | +20% (to 6%) |

### User Testing Scenarios

**Test Case 1: Product Discovery**
```
Scenario: B2B buyer researching finger joint products
Task: Find product, view specs, add to cart
Success Criteria: Completes in <3 minutes, no confusion
```

**Test Case 2: Multiple Products**
```
Scenario: Buyer needs multiple product types
Task: Add 3 different products to cart
Success Criteria: Cart persists, no duplicate adds
```

**Test Case 3: Mobile Experience**
```
Scenario: Buyer browsing on mobile device
Task: Navigate, view product, add to cart
Success Criteria: Responsive, no horizontal scroll
```

---

## Technical Requirements

### Shopify Setup

**Required Shopify Plan:** Basic or higher (has Buy Button feature)

**Checklist:**
- [ ] Enable Buy Button sales channel in Shopify
- [ ] Generate Storefront API access token
- [ ] Create Buy Buttons for 5 main products
- [ ] Configure Buy Button styling to match TWG brand
- [ ] Test Buy Button on staging domain
- [ ] Set up conversion tracking

### Webflow Setup

**Checklist:**
- [ ] Create staging site for prototype
- [ ] Add Embed elements to product pages
- [ ] Implement responsive breakpoints
- [ ] Add glassmorphism styling to Buy Button containers
- [ ] Configure Google Analytics event tracking
- [ ] Test on all target browsers
- [ ] Mobile optimization

### Security Considerations

**Buy Button Security:**
- ✅ All transactions happen on Shopify (PCI compliant)
- ✅ No sensitive data stored on Webflow
- ✅ HTTPS enforced via Cloudflare + Webflow
- ✅ Shopify handles all payment processing

**Cloudflare Configuration:**
- Rate limiting on checkout redirects (prevent abuse)
- WAF rules for Buy Button endpoints
- Monitor for unusual traffic patterns

---

## Deliverables

### 1. Working Prototype (Staging)

**URL:** `staging.twg.com` or Webflow staging domain

**Pages to Enhance:**
- Homepage (featured products section)
- All 5 product category pages (Buy Buttons)

### 2. Analytics Dashboard

**Google Analytics 4 Report:**
- Buy Button interactions
- Add to cart events
- Checkout initiations
- Revenue tracking (Shopify side)
- User flow analysis

### 3. Client Presentation

**Presentation Deck Contents:**
1. Problem Statement (current disconnected experience)
2. Proposed Solution (integrated approach)
3. Live Demo (prototype walkthrough)
4. User Journey Comparison
5. Analytics and Projections
6. Implementation Costs (Phase 2)
7. Timeline for Full Rollout
8. ROI Analysis

**Supporting Materials:**
- Video recording of user flow
- Before/after comparison screenshots
- Mock analytics data (projected improvements)

### 4. Technical Documentation

**Documents to Deliver:**
- Shopify Buy Button configuration guide
- Webflow embed implementation instructions
- Analytics tracking setup
- Maintenance procedures
- Phase 2 full implementation plan

### 5. Recommendation Report

**Executive Summary:**
- Integration approach recommendation
- Cost-benefit analysis
- Risk assessment
- Timeline estimate for Phase 2
- Expected business impact

**Technical Recommendations:**
- Buy Button vs. Headless API decision
- Performance optimization strategies
- Security best practices
- Scalability considerations

---

## Timeline & Resources

### Phase 1.5 Timeline (3-5 days)

**Day 1: Setup**
- Configure Shopify Buy Buttons (2-3 hours)
- Create staging site in Webflow (1 hour)
- Set up analytics tracking (1-2 hours)

**Day 2: Implementation**
- Embed Buy Buttons on product pages (3-4 hours)
- Style integration (match glassmorphism) (2-3 hours)
- Responsive design adjustments (2 hours)

**Day 3: Testing**
- Cross-browser testing (2 hours)
- Mobile device testing (2 hours)
- User flow testing (2 hours)
- Bug fixes (2 hours)

**Day 4: Documentation**
- Write technical documentation (3 hours)
- Prepare client presentation (3 hours)
- Create demo video (2 hours)

**Day 5: Presentation**
- Client meeting (1-2 hours)
- Gather feedback (ongoing)
- Iterate if needed (flex time)

### Resource Requirements

**Team:**
- 1 Developer (front-end)
- 1 Designer (styling/UX review)
- 1 Product Manager (client presentation)

**Access Needed:**
- Shopify admin access
- Webflow project access
- Cloudflare dashboard
- Google Analytics

---

## Success Criteria

### Technical Success

- [ ] Buy Buttons render correctly on all breakpoints
- [ ] Cart functionality works on all target browsers
- [ ] Checkout redirect functions properly
- [ ] Analytics tracking captures all events
- [ ] Page performance remains >90 Lighthouse score
- [ ] No console errors or warnings

### Business Success

**Client Approval Factors:**
- Visual integration matches TWG brand
- User experience feels seamless
- Demonstration clearly shows value
- Implementation cost is justified
- Timeline for Phase 2 is acceptable

**Metrics for Go/No-Go Decision:**
- If prototype testing shows >15% improvement in engagement → Proceed to Phase 2
- If client feedback is positive → Proceed to Phase 2
- If technical implementation is stable → Proceed to Phase 2

---

## Phase 2 Full Implementation Plan (Preview)

**If Phase 1.5 prototype approved:**

### Scope:
- Implement Buy Buttons on production site
- Add featured products section to homepage
- Optimize all product category pages
- Comprehensive testing across all devices
- Client training on Shopify product updates
- Analytics dashboard setup
- Performance optimization

### Timeline: 1-2 weeks

### Cost Estimate: $3,000-5,000 (depending on customization level)

### Expected ROI:
- 20-30% increase in qualified leads
- 15-25% improvement in conversion rate
- Reduced customer support inquiries (clearer path to purchase)
- Better user engagement metrics

---

## Risk Assessment

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| **Buy Button styling limitations** | Medium | Medium | Test styling early, have fallback approaches |
| **Performance impact** | Low | Low | Async loading, optimize script loading |
| **Client rejects integration** | High | Low | Strong data-driven presentation, clear ROI |
| **Shopify API changes** | Low | Low | Use stable Buy Button SDK, monitor Shopify updates |
| **Browser compatibility** | Low | Low | Test early, provide fallbacks |

---

## Open Questions for Client

**Pre-Prototype Questions:**

1. **Product Pricing Strategy:**
   - Display prices on Buy Buttons?
   - Or "Contact for Quote" for B2B pricing?

2. **Cart Behavior:**
   - Modal cart (stays on Webflow)?
   - Or redirect to Shopify immediately?

3. **Product Selection:**
   - Which products to feature on homepage?
   - Priority order for integration?

4. **Success Metrics:**
   - What metrics matter most to client?
   - Revenue, leads, engagement?

5. **Budget for Phase 2:**
   - If prototype successful, budget available?
   - Timeline constraints?

---

## Appendix: Alternative Approaches

### Option: Zapier/Make.com Integration

**For Phase 2+ consideration:**
- Sync Webflow form submissions → Shopify customer creation
- Automate quote requests
- CRM integration possibilities

### Option: Shopify Headless (Full Custom)

**For future enterprise needs:**
- Complete design control
- Custom checkout flows
- Advanced personalization
- Multi-storefront capabilities

**Timeline:** 4-6 weeks
**Cost:** $15,000-30,000

---

*This Phase 1.5 specification is a living document and will be updated based on prototype findings and client feedback.*
