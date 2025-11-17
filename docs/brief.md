# Project Brief: B2B Luxury Table Maker Website

**Project Name:** Artisan Table Maker - B2B Brand Experience Website
**Client:** Premium table craftsmanship studio (B2B focus)
**Budget:** €2,000 (excluding hosting/services)
**Timeline:** 2-3 weeks development
**Developer:** E

---

## Executive Summary

This project delivers a philosophy-driven, cinematic web presence for a three-generation table craftsmanship studio transitioning to elevated B2B positioning. The website serves as a digital manifesto and portfolio, attracting architects, interior designers, and project specifiers who value authentic craft, spiritual connection to materials, and generational expertise.

**Core Differentiator:** "We don't sell tables, we connect the wood's strong energy to the home it belongs to."

---

## Business Context

### Client Background
- **Industry:** Luxury custom table manufacturing
- **Experience:** Three generations of woodworking expertise
- **Product:** Custom tables €1,000+ per piece
- **Target Market:** B2B (architects, interior designers, hospitality projects, high-end residential)
- **Business Stage:** Elevating brand positioning and expanding B2B relationships

### Market Position
The client operates in a unique space between traditional furniture manufacturing and artisan craft studios. They differentiate through:
- Spiritual/philosophical approach to material selection
- Generational knowledge and craft mastery
- Focus on "connection" and "belonging" over transactions
- Premium positioning targeting discerning B2B clients

### Strategic Objectives
1. Establish credible, sophisticated brand presence for B2B audience
2. Communicate philosophy and values before product/price
3. Qualify leads through emotional resonance and shared values
4. Enable future content management without developer dependency
5. Create replicable platform model for future client projects (E's business goal)

---

## Brand Philosophy & Voice

### Core Philosophy
**"We don't sell tables, we connect the wood's strong energy to the home it belongs to"**

This foundational belief informs every aspect of the website:
- Tables are not products but "completions" of journeys
- Wood carries memory and energy from its forest origins
- The craft is about listening and connecting, not manufacturing
- Each piece seeks and finds its rightful home

### Brand Personality
- **Subtle:** Never loud, always present; quality whispers
- **Honest:** Truth over marketing; authentic storytelling
- **Heartfelt:** Earned emotion, not manufactured sentiment
- **Generational:** Legacy lived through three generations of knowledge
- **Spiritual:** Connection to material, energy, and belonging
- **Selective:** For those who already understand quality; repels wrong-fit clients

### Tone of Voice
- Poetic but not flowery
- Confident but not arrogant
- Philosophical but accessible
- Warm but professional
- Invitational, never sales-focused

---

## Target Audience

### Primary: B2B Decision Makers
1. **Architects** designing high-end residential and commercial spaces
2. **Interior Designers** specifying custom furniture for premium projects
3. **Hospitality Project Managers** sourcing for boutique hotels/restaurants
4. **Design-Conscious Business Owners** seeking statement pieces for offices

### Audience Characteristics
- Sophisticated visual literacy; have seen everything
- Value authenticity, craft, and story over trends
- Decision-makers with budget authority (€10K-100K+ projects)
- Seek partnerships, not vendors
- Appreciate philosophy and values alignment
- Understand quality pricing; don't need justification

### User Intent
Visitors arrive seeking:
- Credibility validation: "Can they execute at the level I need?"
- Aesthetic alignment: "Does their sensibility match my vision?"
- Values fit: "Do we share a philosophy about craft and quality?"
- Process transparency: "How do they work? What's the collaboration like?"

**Success Metric:** Not traffic volume, but inquiry quality and values alignment.

---

## Design Direction

### Visual Philosophy
**"Earthen Spirituality"** - Calm, natural, connected to material origins

**NOT:** Theatrical luxury (Moooi-style drama)
**BUT:** Grounded, natural, meditative presence

**References:**
- Kinfolk magazine (calm, authentic, natural)
- Aesop (minimal, material-focused, philosophical)
- Patagonia (values-first, honest, connected to nature)

### Key Design Elements

**Color Palette: Oak-Based Monochrome**
- Solid oak tones throughout (from dark heartwood to light sapwood)
- Warm, natural, monochromatic
- Avoids pure black/white; everything has warmth

**Typography: Organic & Readable**
- Elegant serif for headlines (Crimson Text) - traditional, rooted
- Readable serif for body (Spectral) - warm, inviting
- Clean sans for UI (Inter) - modern functionality

**Imagery & Video**
- **Cinematic video backgrounds** as primary design feature
- Slow, looping footage: wood grain, hands crafting, natural light
- Focus on process, materials, connection (not posed glamour shots)
- Natural settings, lived spaces (not sterile showrooms)
- Mobile: Static poster images (bandwidth consideration)

**Spatial Design**
- Generous whitespace (breathing room reflects "calm and peace")
- One idea per screen; no clutter
- Slow, subtle animations (800-1200ms ease curves)
- Vertical rhythm matches human reading pace

---

## Content Strategy

### 5-Page Structure

#### 1. HOME - The Invitation
- Full-screen cinematic video hero
- Minimal text: Core philosophy statement
- Emotional hook; establishes tone immediately

#### 2. PHILOSOPHY / STORY - The Belief
- Three-generation narrative
- Why they do this work (purpose beyond profit)
- Connection between wood, craft, and home
- Establishes credibility and values

#### 3. PROCESS / CRAFT - The Method
- Four-stage journey: Selection → Understanding → Preparing → Connecting
- Video + text for each stage
- Transparency builds B2B trust
- Demonstrates mastery and intentionality

#### 4. PORTFOLIO / COLLABORATIONS - The Proof
- Completed installations (not isolated product shots)
- Tables in context: restaurants, offices, homes
- Minimal captions focusing on "home" language
- B2B signal: "Collaborations with architects and designers"

#### 5. CONTACT - The Invitation
- Not transactional; conversational
- Form asks about space, use, energy (not budget)
- Studio visit invitation
- Sets expectation: "Not every inquiry becomes a table"

### Content Principles
- **Show, don't sell:** No pricing, no "add to cart," no urgency tactics
- **Story over specs:** Narrative about connection, not technical features
- **Qualification over conversion:** Attract right clients, repel wrong ones
- **Emotion over information:** Feel quality before discussing it

---

## Technical Approach

### Platform Selection: VVVeb
**Why VVVeb:**
- Open source, self-hosted (client owns code)
- Visual WYSIWYG editing (non-technical client can manage)
- Drag-and-drop page building (flexibility without developer dependency)
- Full code access (E can customize infinitely)
- Cost-effective (no licensing, no SaaS fees)
- Replicable for E's future client projects

**Why NOT:**
- ❌ Custom CMS (Payload/Directus): Creates unique schema per client = 10,000 versions problem
- ❌ Headless WordPress: Heavy, legacy code
- ❌ Static generators: No client-friendly editing interface

### Hosting Architecture
- **Hetzner VPS** (€5-8/month): Cost-effective European hosting, PHP/MySQL compatible
- **Cloudflare CDN** (free tier): Global delivery, SSL, image/video optimization, security
- **Cloudflare R2 or Vimeo**: Video hosting (bandwidth efficiency)

### Key Technical Requirements
- Video background capability (optimized for performance)
- Mobile-responsive (with video fallbacks)
- Fast loading despite rich media (Cloudflare optimization)
- Simple contact form with custom B2B fields
- Content editing through visual interface (VVVeb)
- No e-commerce, no user accounts, no complex backend

---

## Success Criteria

### Launch Goals
1. Website communicates brand philosophy clearly and emotionally
2. Non-technical client can edit text/images through VVVeb interface
3. Page load time <3 seconds on 4G (despite video)
4. Mobile experience matches desktop quality (with appropriate adaptations)
5. Contact form submissions include qualified, values-aligned inquiries

### Business Impact (6-12 months)
1. **Quality over quantity:** 5-10 high-value B2B inquiries > 100 random contacts
2. **Project scale increase:** Avg. project value rises from single table to multi-piece contracts
3. **Relationship depth:** Inquiries from architects/designers for ongoing collaborations
4. **Brand perception:** Positioned as premium partner, not commodity supplier

### Technical Success (E's Platform Goal)
1. Deployment time for next client: <4 hours (reusable VVVeb setup)
2. Client handoff is clean; no ongoing developer dependency
3. Template/component library is reusable across future projects
4. Documentation enables client self-service for common tasks

---

## Project Constraints

### Budget
- **Total:** €2,000 for development
- **Separate:** Client handles hosting (€5-8/month), domain, stock footage if needed

### Timeline
- **Development:** 2-3 weeks
- **Content gathering:** Parallel (E sources stock video, client provides photos)
- **Revisions:** 1 round included

### Scope Boundaries
**In Scope:**
- 5 static/semi-static pages
- Custom video components
- Contact form
- Mobile optimization
- Client training on VVVeb

**Out of Scope:**
- E-commerce functionality
- Product database/catalog
- Customer accounts
- Payment processing
- Ongoing maintenance (unless separately contracted)
- Professional videography (client sources or uses stock)

---

## Risk Assessment

### Technical Risks
- **Video file sizes:** Mitigated by compression guidelines and CDN delivery
- **VVVeb learning curve:** Mitigated by training documentation and intuitive visual interface
- **Browser compatibility:** Mitigated by modern stack and testing

### Business Risks
- **Low traffic concern:** Not a risk—B2B model requires quality leads, not volume
- **Client editing mistakes:** Mitigated by VVVeb's visual preview and undo capability
- **Generic stock footage:** Mitigated by careful curation and mixing with client photos

### Project Risks
- **Scope creep:** Clear documentation prevents feature additions
- **Content delays:** Parallel work tracks reduce blocking
- **Approval cycles:** Single revision round agreed upfront

---

## Next Steps

### Documentation Phase (Current)
- ✅ Brief complete
- ⏳ PRD (Product Requirements Document)
- ⏳ Architecture document

### Execution Phase (After Documentation)
1. Server provisioning and VVVeb installation
2. Custom component development (video hero, galleries, forms)
3. Content integration (copy, video, images)
4. Testing and optimization
5. Client training and handoff

---

## Appendix: Key Decisions Log

| Decision | Rationale |
|----------|-----------|
| VVVeb over custom CMS | Reusability, client editability, cost-effectiveness |
| Cinematic video backgrounds | Matches "calm" philosophy, premium positioning |
| Oak-based color palette | Authentic to material, warm, monochromatic sophistication |
| B2B-only focus | Higher value, lower volume, better project quality |
| Philosophy-first content | Qualifies leads, differentiates from competitors |
| No pricing/e-commerce | Maintains premium positioning, encourages conversation |
| Hetzner + Cloudflare hosting | Cost-effective, performant, EU-based (GDPR) |

---

**Document Version:** 1.0
**Last Updated:** 2025-11-14
**Author:** Victor (Strategy) + Council Input
**Status:** Approved for PRD Development
