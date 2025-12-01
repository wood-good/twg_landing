# TWG Landing Page - Development Sprint Plan

## Project Overview
**Objective**: Build a Moooi.com-inspired landing page with editable content (UI + Code)
**Timeline**: 3 hours development time
**Pages Required**: Home, About, Products, Manufacturing, Sustainability, Contact

## Technology Evaluation Phase

### Three Parallel Implementations (Branches):
1. `development/payload-nextjs` - Payload CMS + Next.js 14
2. `development/strapi-nextjs` - Strapi + Next.js 14
3. `development/directus-nextjs` - Directus + Next.js 14

### Shared Technology Stack:
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Typography**: Similar to Moooi (Inter/DM Sans)
- **Deployment**: Vercel/Railway ready

---

## Sprint Breakdown (3 Hours per Implementation)

### Sprint 1: Foundation (45 minutes)
**Goal**: Working local environment with CMS

#### Tasks:
- [ ] Initialize Next.js 14 project with TypeScript
- [ ] Install and configure CMS (Payload/Strapi/Directus)
- [ ] Set up Tailwind CSS with custom config
- [ ] Install shadcn/ui and configure
- [ ] Create basic folder structure
- [ ] Configure environment variables
- [ ] Verify admin panel access

**Deliverables**:
- Local dev server running at http://localhost:3000
- CMS admin accessible at /admin (or appropriate path)
- Tailwind working with hot reload

---

### Sprint 2: Content Architecture (30 minutes)
**Goal**: Define content types and relationships

#### Content Models:
1. **Page** (for all 6 pages)
   - Title
   - Slug
   - SEO metadata
   - Flexible content blocks

2. **Hero Section**
   - Heading
   - Subheading
   - Background image/video
   - CTA buttons

3. **Feature Grid** (for Products, Manufacturing)
   - Title
   - Description
   - Images
   - Icon/visual element

4. **Text Content Block**
   - Rich text editor
   - Images
   - Layout variants

5. **Contact Form**
   - Form fields configuration
   - Email integration ready

**Deliverables**:
- All content types defined in CMS
- Sample content populated
- Relationships configured

---

### Sprint 3: Page Structure & Routing (30 minutes)
**Goal**: All 6 pages accessible with proper routing

#### Pages to Create:
```
/                    → Home
/about              → About
/products           → Products
/manufacturing      → Manufacturing
/sustainability     → Sustainability
/contact            → Contact
```

#### Tasks:
- [ ] Create dynamic page routing
- [ ] Build page templates
- [ ] Implement layout components (Header, Footer)
- [ ] Add navigation menu
- [ ] Configure metadata per page

**Deliverables**:
- All 6 pages navigable
- Consistent header/footer across pages
- Mobile responsive structure

---

### Sprint 4: Moooi Design System (60 minutes)
**Goal**: Implement sophisticated, minimal aesthetic

#### Design Principles (from Moooi.com):
- **Color Palette**:
  - Neutral base (whites, light grays)
  - Accent colors (subtle, sophisticated)
  - High contrast for text

- **Typography**:
  - Large, bold headings
  - Generous whitespace
  - Clean, readable body text

- **Layout**:
  - Full-width hero sections
  - Grid-based product displays
  - Asymmetric compositions
  - Generous padding/margins

- **Interactions**:
  - Smooth scroll
  - Elegant hover states
  - Parallax effects
  - Fade-in animations

#### Tasks:
- [ ] Configure Tailwind with Moooi-inspired theme
- [ ] Create reusable component library
  - Hero component (full-width with image/video)
  - Feature cards
  - Image galleries
  - Text blocks with images
  - CTAs and buttons
- [ ] Implement Framer Motion animations
- [ ] Add smooth scroll behavior
- [ ] Create responsive navigation

**Deliverables**:
- Complete design system in Tailwind config
- 10+ reusable components
- Smooth animations throughout
- Fully responsive (mobile-first)

---

### Sprint 5: Content Integration & Polish (30 minutes)
**Goal**: Connect CMS content to frontend, final touches

#### Tasks:
- [ ] Fetch CMS data in pages
- [ ] Implement image optimization
- [ ] Add loading states
- [ ] Error handling
- [ ] SEO optimization (meta tags, Open Graph)
- [ ] Performance optimization
- [ ] Cross-browser testing
- [ ] Accessibility audit (WCAG AA)

**Deliverables**:
- All pages pulling from CMS
- Lighthouse score > 90
- No console errors
- Accessible navigation

---

## Evaluation Criteria

After completing all three implementations, evaluate based on:

### 1. Developer Experience (40%)
- Setup ease
- Documentation quality
- TypeScript support
- Hot reload reliability
- Debugging experience

### 2. Content Editor Experience (30%)
- Admin UI intuitiveness
- Content editing workflow
- Media management
- Preview functionality

### 3. Performance (15%)
- Page load times
- Build times
- Bundle size
- Runtime performance

### 4. Flexibility (15%)
- Custom field types
- API extensibility
- Deployment options
- Scalability

---

## Post-Sprint: Production Preparation

### Once CMS is selected:
1. **Database Setup**
   - PostgreSQL (recommended) or MongoDB
   - Connection pooling
   - Backup strategy

2. **Deployment**
   - Vercel (recommended for Next.js)
   - Railway (good for full-stack)
   - Environment variables
   - CI/CD pipeline

3. **Domain & SSL**
   - DNS configuration
   - SSL certificates
   - CDN setup

4. **Content Population**
   - Migrate any existing content
   - Optimize images
   - SEO audit

---

## Success Metrics

- ✅ All 6 pages functional and editable
- ✅ Content editable from both UI and code
- ✅ Moooi-inspired design implemented
- ✅ Mobile responsive
- ✅ Page load < 2 seconds
- ✅ No routing issues
- ✅ No need for constant reloads
- ✅ Clear winner selected for production

---

## Branch Strategy

```
main (current Vvveb implementation - preserved)
│
└── development (base branch for new implementation)
    │
    ├── development/payload-nextjs
    │   └── Complete Payload + Next.js implementation
    │
    ├── development/strapi-nextjs
    │   └── Complete Strapi + Next.js implementation
    │
    └── development/directus-nextjs
        └── Complete Directus + Next.js implementation
```

## Next Steps

1. Review and approve this plan
2. Commit to main branch
3. Create development branch
4. Create three sub-branches
5. Begin parallel implementation
6. Evaluate and select winner
7. Merge selected implementation to development
8. Deploy to staging for review
9. Deploy to production

---

**Estimated Total Time**: 3 hours per implementation (can be parallelized with AI assistance)
**Review Time**: 30 minutes to evaluate all three
**Decision & Deploy**: 1 hour

**Total Project Time**: ~4.5 hours from start to production-ready
