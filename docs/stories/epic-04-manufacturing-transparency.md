# Epic 4: Manufacturing Transparency

**Epic ID:** EPIC-04
**Priority:** P1 - High
**Status:** Ready for Development
**Estimated Effort:** 13 story points (~2 days)
**Sprint:** Sprint 2 (Week 2)
**Platform:** Webflow (Static Page - No CMS needed)

---

## Epic Goal

Build trust with quality-focused B2B buyers by transparently showcasing TWG's manufacturing process, quality control measures, and complete control of the tree-to-product cycle through visual storytelling and process documentation.

---

## User Story

**As a** quality-focused buyer
**I want** to understand TWG's manufacturing process
**So that** I can trust their quality control

---

## Success Metrics

- Manufacturing page shows clear process overview
- Mix of text and visual content (50/50 balance)
- Highlights 100% control of cycle
- Builds trust through transparency
- Page engagement time >40 seconds
- Manufacturing page load time <1.0s

---

## User Stories Breakdown

### Story 4.1: Manufacturing Page Schema in Sanity

**Priority:** P1
**Effort:** 3 hours
**Assignee:** Backend Developer

**Description:**
Create Sanity schema for manufacturing content including process overview, steps, quality control highlights, and equipment/technology mentions.

**Acceptance Criteria:**
- [ ] ManufacturingPage document type created (singleton)
- [ ] Fields: heroTitle, overview, processSteps, qualityControl, equipment, certifications
- [ ] Image support for process photos and equipment
- [ ] Rich text support for detailed descriptions
- [ ] Validation for required fields

**Technical Implementation:**
```javascript
// sanity/schemas/documents/manufacturingPage.js
{
  name: 'manufacturingPage',
  type: 'document',
  fields: [
    { name: 'heroTitle', type: 'string', validation: required },
    { name: 'overview', type: 'blockContent', validation: required },
    { name: 'processSteps', type: 'array', of: [{ type: 'processStep' }] },
    { name: 'qualityControl', type: 'blockContent' },
    { name: 'equipment', type: 'array', of: [{ type: 'equipmentItem' }] },
    { name: 'certifications', type: 'array', of: [{ type: 'string' }] }
  ]
}
```

**Nested Object Types:**
```javascript
// Process Step
{
  name: 'processStep',
  type: 'object',
  fields: [
    { name: 'stepNumber', type: 'number' },
    { name: 'title', type: 'string' },
    { name: 'description', type: 'blockContent' },
    { name: 'image', type: 'image' },
    { name: 'highlights', type: 'array', of: [{ type: 'string' }] }
  ]
}

// Equipment Item
{
  name: 'equipmentItem',
  type: 'object',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'image', type: 'image' }
  ]
}
```

**Dependencies:**
- Sanity studio running

---

### Story 4.2: Manufacturing Page Layout

**Priority:** P1
**Effort:** 5 hours
**Assignee:** Frontend Developer 1

**Description:**
Create manufacturing page with hero section and overview content.

**Acceptance Criteria:**
- [ ] Hero section with compelling title
- [ ] Overview section with rich text content
- [ ] Responsive layout (single column mobile, multi-column desktop)
- [ ] Glass effect containers for content sections
- [ ] Breadcrumb navigation
- [ ] SEO meta tags

**Technical Implementation:**
```astro
// src/pages/manufacturing.astro
---
import Layout from '@/layouts/Layout.astro';
import { getManufacturingPage } from '@/lib/sanity';
import GlassCard from '@/components/Glass/GlassCard.astro';
import ProcessSteps from '@/components/Manufacturing/ProcessSteps.astro';
import QualityControl from '@/components/Manufacturing/QualityControl.astro';
import Equipment from '@/components/Manufacturing/Equipment.astro';

const content = await getManufacturingPage();
---

<Layout title="Manufacturing | TWG">
  <article class="manufacturing-page">
    <!-- Hero Section -->
    <section class="hero">
      <h1>{content.heroTitle}</h1>
    </section>

    <!-- Overview -->
    <section class="overview">
      <GlassCard>
        <div class="prose">
          {@html content.overview}
        </div>
      </GlassCard>
    </section>

    <!-- Process Steps -->
    <ProcessSteps steps={content.processSteps} />

    <!-- Quality Control -->
    <QualityControl content={content.qualityControl} />

    <!-- Equipment (Optional) -->
    {content.equipment?.length > 0 && (
      <Equipment items={content.equipment} />
    )}
  </article>
</Layout>

<style>
  .manufacturing-page {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
  }

  .overview {
    margin: 3rem 0;
  }
</style>
```

**Design Specifications:**
- Max width: 1200px
- Section spacing: 3-4rem
- Typography: Clear, professional
- Images: High quality, showcasing craftsmanship

**Dependencies:**
- Manufacturing schema (Story 4.1)
- Component dependencies (Stories 4.3, 4.4)

---

### Story 4.3: Manufacturing Process Steps Component

**Priority:** P1
**Effort:** 6 hours
**Assignee:** Frontend Developer 1

**Description:**
Create visual component displaying 3-5 manufacturing process steps with images and descriptions.

**Acceptance Criteria:**
- [ ] Display 3-5 process steps in sequential order
- [ ] Each step shows: step number, title, description, image, key highlights
- [ ] Alternating layout (image left/right) on desktop
- [ ] Stacked layout on mobile
- [ ] Step numbers visually prominent
- [ ] Smooth transitions between steps

**Technical Implementation:**
```astro
// src/components/Manufacturing/ProcessSteps.astro
---
import { Image } from 'astro:assets';
import GlassCard from '@/components/Glass/GlassCard.astro';

export interface Props {
  steps: Array<{
    stepNumber: number;
    title: string;
    description: string;
    image: any;
    highlights?: string[];
  }>;
}

const { steps } = Astro.props;
---

<section class="process-steps">
  <h2>Our Manufacturing Process</h2>

  {steps.map((step, index) => (
    <div class={`process-step ${index % 2 === 0 ? 'image-left' : 'image-right'}`}>
      <div class="step-number">{step.stepNumber}</div>

      <div class="step-image">
        <Image
          src={step.image}
          alt={step.title}
          width={600}
          height={400}
          loading="lazy"
        />
      </div>

      <GlassCard class="step-content">
        <h3>{step.title}</h3>
        <div class="description">
          {@html step.description}
        </div>

        {step.highlights && step.highlights.length > 0 && (
          <ul class="highlights">
            {step.highlights.map(highlight => (
              <li>{highlight}</li>
            ))}
          </ul>
        )}
      </GlassCard>
    </div>
  ))}
</section>

<style>
  .process-steps {
    margin: 4rem 0;
  }

  .process-step {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    margin: 3rem 0;
    position: relative;
  }

  .step-number {
    position: absolute;
    top: -1rem;
    left: -1rem;
    width: 3rem;
    height: 3rem;
    background: var(--color-primary);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: bold;
    z-index: 10;
  }

  .image-right .step-image {
    order: 2;
  }

  @media (max-width: 768px) {
    .process-step {
      grid-template-columns: 1fr;
    }

    .step-number {
      position: static;
      margin-bottom: 1rem;
    }
  }
</style>
```

**Content Examples:**
1. **Sustainable Harvesting**: Responsibly sourced wood from managed forests
2. **Precision Milling**: State-of-the-art equipment for exact specifications
3. **Expert Craftsmanship**: Skilled artisans ensure quality at every stage
4. **Quality Inspection**: Rigorous testing before shipping
5. **Finishing Touches**: Eco-friendly finishes applied by hand

**Dependencies:**
- Process step data from Sanity
- High-quality process photography

---

### Story 4.4: Quality Control Highlights Section

**Priority:** P1
**Effort:** 4 hours
**Assignee:** Frontend Developer 2

**Description:**
Create section highlighting TWG's quality control measures and 100% cycle control.

**Acceptance Criteria:**
- [ ] Section with rich text content about quality control
- [ ] Emphasizes complete control of tree-to-product cycle
- [ ] Visual elements (icons or images) supporting key points
- [ ] Call-out boxes for key statistics or certifications
- [ ] Responsive layout

**Technical Implementation:**
```astro
// src/components/Manufacturing/QualityControl.astro
---
import GlassCard from '@/components/Glass/GlassCard.astro';

export interface Props {
  content: string; // Rich text HTML
}

const { content } = Astro.props;
---

<section class="quality-control">
  <h2>Quality Control & Assurance</h2>

  <div class="quality-grid">
    <GlassCard class="quality-content">
      <div class="prose">
        {@html content}
      </div>
    </GlassCard>

    <div class="quality-highlights">
      <GlassCard class="highlight-card">
        <div class="highlight-icon">✓</div>
        <h3>100% Control</h3>
        <p>Complete oversight from tree to final product</p>
      </GlassCard>

      <GlassCard class="highlight-card">
        <div class="highlight-icon">⚡</div>
        <h3>Expert Craftsmen</h3>
        <p>Decades of woodworking experience</p>
      </GlassCard>

      <GlassCard class="highlight-card">
        <div class="highlight-icon">🔍</div>
        <h3>Rigorous Testing</h3>
        <p>Every piece inspected before shipping</p>
      </GlassCard>
    </div>
  </div>
</section>

<style>
  .quality-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    margin-top: 2rem;
  }

  .quality-highlights {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .highlight-card {
    text-align: center;
    padding: 1.5rem;
  }

  .highlight-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 768px) {
    .quality-grid {
      grid-template-columns: 1fr;
    }
  }
</style>
```

**Key Messages:**
- 100% control of entire cycle (from forest to finished product)
- In-house quality inspections at every stage
- Experienced craftsmen with decades of expertise
- Sustainable practices without compromising quality

**Dependencies:**
- Quality control content from Sanity

---

### Story 4.5: Equipment & Technology Showcase (Optional)

**Priority:** P2 - Medium
**Effort:** 2 hours
**Assignee:** Frontend Developer 2

**Description:**
Optional section showcasing manufacturing equipment and technology (if content available).

**Acceptance Criteria:**
- [ ] Grid of equipment items with images
- [ ] Each item: name, description, image
- [ ] Responsive grid layout
- [ ] Section can be hidden if no content
- [ ] Lazy loaded images

**Technical Implementation:**
```astro
// src/components/Manufacturing/Equipment.astro
---
import { Image } from 'astro:assets';
import GlassCard from '@/components/Glass/GlassCard.astro';

export interface Props {
  items: Array<{
    name: string;
    description: string;
    image: any;
  }>;
}

const { items } = Astro.props;
---

<section class="equipment-section">
  <h2>Our Equipment & Technology</h2>

  <div class="equipment-grid">
    {items.map(item => (
      <GlassCard class="equipment-card">
        <div class="equipment-image">
          <Image
            src={item.image}
            alt={item.name}
            width={300}
            height={200}
            loading="lazy"
          />
        </div>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </GlassCard>
    ))}
  </div>
</section>

<style>
  .equipment-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
  }
</style>
```

**Dependencies:**
- Equipment data from Sanity (optional)
- Equipment photography (optional)

---

## Technical Architecture Notes

### Content Strategy
- Focus on visual storytelling - show, don't just tell
- Balance text and imagery (50/50)
- Highlight unique aspects (100% cycle control)
- Emphasize quality and craftsmanship

### Performance Considerations
- Lazy load process images below fold
- Optimize all manufacturing photography
- Keep page size <100KB (excluding images)
- Use WebP format for all photos

### Accessibility Requirements
- Clear heading hierarchy
- Alt text for all process images
- Sufficient color contrast
- Keyboard navigable

---

## Definition of Done

- [ ] All 5 stories completed with acceptance criteria met
- [ ] Manufacturing page accessible from navigation
- [ ] Process steps clearly displayed with images
- [ ] Quality control section emphasizes 100% control
- [ ] Equipment section (if applicable) displays correctly
- [ ] Page loads in <1.0 seconds
- [ ] Mobile-responsive layout tested
- [ ] Unit tests for components
- [ ] E2E test for page navigation
- [ ] Content approved by stakeholders
- [ ] Lighthouse score: Performance >90, Accessibility 100
- [ ] Code review completed
- [ ] QA sign-off

---

## Dependencies

**External:**
- Manufacturing process descriptions
- Process photography (3-5 high-quality images)
- Quality control content
- Equipment details (optional)

**Internal:**
- Sanity schema deployed
- Navigation links updated
- GlassCard component available

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Process photos not available | High | Use placeholder images, mark for later update |
| Content too technical | Medium | Work with stakeholders to simplify language |
| Too text-heavy | Low | Emphasize visual content, condense text |
| Equipment section not needed | Low | Make section optional, hide if no content |

---

## Testing Checklist

**Unit Tests:**
- [ ] Process steps render with correct data
- [ ] Quality highlights display correctly
- [ ] Equipment grid (if used) renders properly

**E2E Tests (Playwright):**
- [ ] Manufacturing page loads from navigation
- [ ] All sections visible and scrollable
- [ ] Images load correctly
- [ ] Mobile layout switches correctly

**Visual Regression:**
- [ ] Process steps layout consistent
- [ ] Quality highlights aligned properly
- [ ] Equipment grid (if used) displays correctly

---

## Notes for Developers

- Keep this page content-focused - no complex interactions needed
- Equipment section is optional - can be phase 2 if content not ready
- Focus on professional, trustworthy presentation
- Use high-quality photography to showcase craftsmanship
- Consider subtle scroll animations for process steps

---

**Ready for Sprint Planning:** ✅
**Dependencies Clear:** ✅ (Content dependency flagged)
**Acceptance Criteria Defined:** ✅
