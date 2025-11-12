# Epic 3: Sustainability Verification

**Epic ID:** EPIC-03
**Priority:** P1 - High
**Status:** Ready for Development
**Estimated Effort:** 13 story points (~2 days)
**Sprint:** Sprint 2 (Week 2)
**Platform:** Webflow (Static Page - No CMS needed)

---

## Epic Goal

Build trust with ESG-conscious buyers by creating a dedicated sustainability page that clearly explains TWG's tree-to-tree cycle, environmental practices, and certifications through visual storytelling and data-driven proof points.

---

## User Story

**As an** ESG-conscious buyer
**I want** to verify TWG's sustainability claims
**So that** I can meet my company's environmental goals

---

## Success Metrics

- Dedicated sustainability page accessible from main navigation
- Clear visual explanation of tree-to-tree cycle
- Visual proof of practices displayed
- Certifications prominently featured (if available)
- Page engagement time >45 seconds
- Sustainability page load time <1.0s

---

## User Stories Breakdown

### Story 3.1: Sustainability Page Schema in Sanity

**Priority:** P0
**Effort:** 3 hours
**Assignee:** Backend Developer

**Description:**
Create Sanity schema for sustainability content including hero statement, cycle explanation, practices, metrics, and certifications.

**Acceptance Criteria:**
- [ ] SustainabilityPage document type created (singleton)
- [ ] Fields: heroStatement, cycleSteps, practicesList, impactMetrics, certifications, futureCommitments
- [ ] Image support for cycle diagram and certification logos
- [ ] Rich text support for detailed explanations
- [ ] Validation for required fields

**Technical Implementation:**
```javascript
// sanity/schemas/documents/sustainabilityPage.js
{
  name: 'sustainabilityPage',
  type: 'document',
  fields: [
    { name: 'heroStatement', type: 'text', validation: required },
    { name: 'cycleSteps', type: 'array', of: [{ type: 'cycleStep' }] },
    { name: 'practicesList', type: 'array', of: [{ type: 'practice' }] },
    { name: 'impactMetrics', type: 'array', of: [{ type: 'metric' }] },
    { name: 'certifications', type: 'array', of: [{ type: 'certification' }] },
    { name: 'futureCommitments', type: 'blockContent' },
    { name: 'cycleDiagram', type: 'image' }
  ]
}
```

**Nested Object Types:**
```javascript
// Cycle Step
{
  name: 'cycleStep',
  type: 'object',
  fields: [
    { name: 'stepNumber', type: 'number' },
    { name: 'title', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'icon', type: 'image' }
  ]
}

// Practice
{
  name: 'practice',
  type: 'object',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'description', type: 'text' },
    { name: 'image', type: 'image' }
  ]
}

// Impact Metric
{
  name: 'metric',
  type: 'object',
  fields: [
    { name: 'value', type: 'string' },      // e.g., "1,500+"
    { name: 'label', type: 'string' },      // e.g., "Trees Planted"
    { name: 'unit', type: 'string' }        // e.g., "annually"
  ]
}

// Certification
{
  name: 'certification',
  type: 'object',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'logo', type: 'image' },
    { name: 'description', type: 'text' },
    { name: 'verificationUrl', type: 'url' }
  ]
}
```

**Dependencies:**
- Sanity studio running

---

### Story 3.2: Sustainability Hero Section

**Priority:** P0
**Effort:** 5 hours
**Assignee:** Frontend Developer 1

**Description:**
Create impactful hero section for sustainability page with statement and visual background.

**Acceptance Criteria:**
- [ ] Hero statement prominently displayed
- [ ] Background image or subtle video related to nature/sustainability
- [ ] Glass effect on text container
- [ ] Scroll indicator to encourage exploration
- [ ] Mobile-responsive typography
- [ ] Accessible heading structure

**Technical Implementation:**
```astro
// src/pages/sustainability.astro
---
import Layout from '@/layouts/Layout.astro';
import { getSustainabilityPage } from '@/lib/sanity';
import GlassCard from '@/components/Glass/GlassCard.astro';

const content = await getSustainabilityPage();
---

<Layout title="Sustainability | TWG">
  <section class="sustainability-hero">
    <div class="hero-background">
      <!-- Background image or subtle animation -->
    </div>
    <GlassCard class="hero-content">
      <h1>{content.heroStatement}</h1>
      <div class="scroll-indicator">↓</div>
    </GlassCard>
  </section>

  <!-- Rest of page content -->
</Layout>
```

**Design Specifications:**
- Hero height: 60vh
- Hero statement: 36px desktop, 28px mobile
- Scroll indicator: subtle bounce animation
- Background: Forest imagery with subtle overlay

**Dependencies:**
- Sustainability schema (Story 3.1)
- GlassCard component

---

### Story 3.3: Tree-to-Tree Cycle Visual Diagram

**Priority:** P0
**Effort:** 8 hours
**Assignee:** Frontend Developer 2 + UI/UX Designer

**Description:**
Create interactive or static visual diagram explaining TWG's tree-to-tree sustainability cycle.

**Acceptance Criteria:**
- [ ] 3-5 cycle steps visualized clearly
- [ ] Each step has icon, title, and description
- [ ] Visual flow showing circular nature
- [ ] Mobile-friendly layout (vertical on mobile, circular on desktop)
- [ ] Optional: Subtle animations on scroll
- [ ] Accessible for screen readers

**Technical Implementation:**

**Option A: Static Diagram (Recommended for MVP)**
```astro
// src/components/Sustainability/TreeCycleDiagram.astro
---
export interface Props {
  steps: Array<{
    stepNumber: number;
    title: string;
    description: string;
    icon: any;
  }>;
}

const { steps } = Astro.props;
---

<div class="cycle-diagram">
  {steps.map((step, index) => (
    <div class="cycle-step" data-step={step.stepNumber}>
      <div class="step-icon">
        <Image src={step.icon} alt="" />
      </div>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
      {index < steps.length - 1 && <div class="connector">→</div>}
    </div>
  ))}
</div>

<style>
  .cycle-diagram {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    position: relative;
  }

  @media (min-width: 1024px) {
    .cycle-diagram {
      /* Circular layout on desktop */
    }
  }

  .connector {
    position: absolute;
    /* Arrow connecting steps */
  }
</style>
```

**Option B: Infographic Image**
- Single SVG/PNG diagram created by designer
- Responsive scaling
- Faster to implement, less code

**Design Notes:**
- Use green color palette for sustainability theme
- Icons: tree, factory, product, recycling, planting
- Desktop: circular layout
- Mobile: vertical step-by-step flow

**Dependencies:**
- Cycle step data from Sanity
- Icons/illustrations from designer

---

### Story 3.4: Sustainability Practices Section

**Priority:** P0
**Effort:** 5 hours
**Assignee:** Frontend Developer 1

**Description:**
Display specific sustainability practices with supporting images and descriptions.

**Acceptance Criteria:**
- [ ] List of practices (3-5 items)
- [ ] Each practice has: title, description, supporting image
- [ ] Grid layout (2 columns desktop, 1 column mobile)
- [ ] Glass cards for each practice
- [ ] Optimized images with lazy loading

**Technical Implementation:**
```astro
// src/components/Sustainability/PracticesList.astro
---
export interface Props {
  practices: Array<{
    title: string;
    description: string;
    image: any;
  }>;
}

const { practices } = Astro.props;
---

<section class="practices-grid">
  {practices.map(practice => (
    <GlassCard class="practice-card">
      <div class="practice-image">
        <Image
          src={practice.image}
          alt={practice.title}
          width={400}
          height={300}
          loading="lazy"
        />
      </div>
      <div class="practice-content">
        <h3>{practice.title}</h3>
        <p>{practice.description}</p>
      </div>
    </GlassCard>
  ))}
</section>

<style>
  .practices-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin: 4rem 0;
  }
</style>
```

**Content Examples:**
- "Sustainable Sourcing: 100% responsibly harvested wood"
- "Zero Waste Manufacturing: All offcuts repurposed"
- "Carbon Neutral Shipping: Electric vehicles and carbon offsets"
- "Renewable Energy: Solar-powered facilities"

**Dependencies:**
- Practices data from Sanity
- Practice images optimized

---

### Story 3.5: Impact Metrics & Certifications

**Priority:** P1 - High
**Effort:** 3 hours
**Assignee:** Frontend Developer 1

**Description:**
Display environmental impact metrics and certification logos to build credibility.

**Acceptance Criteria:**
- [ ] Impact metrics displayed as cards (e.g., "1,500+ trees planted annually")
- [ ] Certification logos with descriptions
- [ ] Responsive grid layout
- [ ] Optional: Counter animation for metrics
- [ ] Certification logos link to verification URLs

**Technical Implementation:**
```astro
// src/components/Sustainability/ImpactMetrics.astro
---
export interface Props {
  metrics: Array<{
    value: string;
    label: string;
    unit: string;
  }>;
}

const { metrics } = Astro.props;
---

<div class="metrics-grid">
  {metrics.map(metric => (
    <GlassCard class="metric-card">
      <div class="metric-value">{metric.value}</div>
      <div class="metric-label">{metric.label}</div>
      <div class="metric-unit">{metric.unit}</div>
    </GlassCard>
  ))}
</div>

<style>
  .metric-value {
    font-size: 3rem;
    font-weight: bold;
    color: var(--color-primary);
  }

  .metric-label {
    font-size: 1rem;
    margin-top: 0.5rem;
  }

  .metric-unit {
    font-size: 0.875rem;
    color: var(--color-text-muted);
  }
</style>
```

**Certifications Component:**
```astro
// src/components/Sustainability/Certifications.astro
---
export interface Props {
  certifications: Array<{
    name: string;
    logo: any;
    description: string;
    verificationUrl?: string;
  }>;
}
---

<div class="certifications">
  {certifications.map(cert => (
    <div class="cert-card">
      {cert.verificationUrl ? (
        <a href={cert.verificationUrl} target="_blank" rel="noopener">
          <Image src={cert.logo} alt={cert.name} />
        </a>
      ) : (
        <Image src={cert.logo} alt={cert.name} />
      )}
      <p>{cert.description}</p>
    </div>
  ))}
</div>
```

**Dependencies:**
- Metrics and certifications data from Sanity
- Certification logos

---

## Technical Architecture Notes

### Content Strategy
- Work with client to gather real sustainability data
- If metrics not available, focus on practices and commitments
- Certifications section can be hidden if none available

### Performance Considerations
- Lazy load images below fold
- Use WebP for practice images
- Optimize certification logos (SVG preferred)
- Keep page lightweight (<50KB HTML+CSS)

### Accessibility Requirements
- Proper heading hierarchy (h1 → h2 → h3)
- Alt text for all images and icons
- ARIA labels for decorative elements
- High contrast for metrics text

---

## Definition of Done

- [ ] All 5 stories completed with acceptance criteria met
- [ ] Sustainability page accessible from navigation
- [ ] Tree-to-tree cycle clearly explained
- [ ] Practices section displays all content
- [ ] Impact metrics render correctly
- [ ] Certifications section (if applicable) displays logos
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
- Sustainability content (practices, metrics, commitments)
- Certification logos and descriptions
- Cycle diagram assets or data
- Supporting photography

**Internal:**
- Sanity schema deployed
- Navigation links updated
- GlassCard component available

---

## Risks & Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| Sustainability data not ready | High | Use placeholder content, mark as "Coming Soon" |
| No certifications available | Low | Hide certifications section, focus on practices |
| Diagram complex to implement | Medium | Fall back to static infographic from designer |
| Metrics not measurable yet | Medium | Focus on commitments rather than current metrics |

---

## Testing Checklist

**Unit Tests:**
- [ ] Cycle diagram renders with correct steps
- [ ] Practices grid displays all items
- [ ] Metrics cards format correctly

**E2E Tests (Playwright):**
- [ ] Sustainability page loads from navigation
- [ ] All sections visible and scrollable
- [ ] Certification links open in new tab
- [ ] Mobile layout switches correctly

**Visual Regression:**
- [ ] Hero section matches design
- [ ] Cycle diagram layout consistent
- [ ] Practices grid aligned properly

---

## Notes for Developers

- Keep sustainability page content-driven - no complex interactions needed
- If cycle diagram too complex, use static infographic from designer
- Certifications section should gracefully hide if no data available
- Focus on storytelling through visuals and clear copy
- Consider fade-in animations on scroll for practices section

---

**Ready for Sprint Planning:** ✅
**Dependencies Clear:** ✅ (Content dependency flagged)
**Acceptance Criteria Defined:** ✅
