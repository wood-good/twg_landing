# Non-Functional Requirements

## Performance Requirements

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

## Browser Support

| Browser | Minimum Version | Features |
|---------|----------------|----------|
| Chrome | Latest 2 versions | Full experience |
| Edge | Latest 2 versions | Full experience |
| Safari | 15+ | CSS fallbacks for glassmorphism |
| Firefox | Latest 2 versions | CSS fallbacks for View Transitions |
| Mobile Safari | 15+ | Static image for hero |
| Chrome Android | Latest | Optimized video |

## SEO Requirements

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

## Accessibility Requirements

**WCAG 2.1 Level AA Compliance:**
- All images have descriptive alt text
- Color contrast ratio >4.5:1
- Keyboard navigation support
- Focus indicators visible
- Skip navigation link
- ARIA labels where needed
- Video has pause control

---
