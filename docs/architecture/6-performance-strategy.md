# 6. Performance Strategy

## 6.1 Core Web Vitals Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| **LCP** | <1.5s | Optimized hero video, edge CDN |
| **FID** | <50ms | Minimal JavaScript |
| **CLS** | <0.05 | Font preloading, aspect ratios |
| **FCP** | <1s | Critical CSS inline |

## 6.2 Optimization Techniques

**Video Optimization:**
```bash
# FFmpeg compression for hero video
ffmpeg -i input.mp4 \
  -c:v libvpx-vp9 -b:v 600k \
  -vf scale=1920:1080 \
  -an output.webm

ffmpeg -i input.mp4 \
  -c:v libx264 -b:v 600k \
  -vf scale=1920:1080 \
  -preset slow -crf 28 \
  -an output.mp4
```

**Critical CSS:**
```astro
---
// Layout.astro
---
<style is:inline>
  /* Critical above-fold styles */
  .hero { ... }
  .glass-effect { ... }
</style>
```

## 6.3 Bundle Size Budget

| Resource | Budget | Actual |
|----------|--------|--------|
| HTML | <15KB | ~10KB |
| CSS | <20KB | ~15KB |
| JavaScript | <10KB | ~5KB (React island) |
| Hero Video | <2.5MB | ~2MB |
| Total First Load | <50KB | ~30KB (excluding video) |

---
