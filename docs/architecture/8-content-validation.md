# 8. Content Validation

## 8.1 Sanity Schema Validation

```javascript
// sanity/schemas/validation.js
export const imageValidation = Rule => Rule
  .required()
  .custom((image) => {
    if (!image?.asset) return 'Image is required';

    // Max 5MB
    if (image.asset.size > 5000000) {
      return 'Image must be under 5MB';
    }

    // Require alt text
    if (!image.alt) {
      return 'Alt text is required for accessibility';
    }

    return true;
  });

export const videoValidation = Rule => Rule
  .custom((file) => {
    if (!file?.asset) return true;

    // Max 10MB for videos
    if (file.asset.size > 10000000) {
      return 'Video must be under 10MB';
    }

    return true;
  });

export const slugValidation = Rule => Rule
  .required()
  .custom((slug) => {
    if (!/^[a-z0-9-]+$/.test(slug.current)) {
      return 'Slug must be lowercase with hyphens only';
    }
    return true;
  });
```

---
