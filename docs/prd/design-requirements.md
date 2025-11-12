# Design Requirements

## Visual Design Principles

**Inspiration:** moooi.com

**Key Aesthetics:**
1. **Minimalist:** Clean, uncluttered layouts
2. **Natural:** Forest greens, wood browns, earth tones
3. **Premium:** High-quality imagery, generous whitespace
4. **Peaceful:** Smooth transitions, gentle animations
5. **Modern:** Glassmorphism effects, contemporary typography

## Glassmorphism Implementation

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

## Typography

**Font Hierarchy:**
- Display: Serif (Playfair Display or similar)
- Body: System font stack
- Sizes: Fluid typography (clamp function)
- Line height: 1.6 for body text

## Color Palette

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

## Motion Design

**Transition Principles:**
- Duration: 200-300ms for micro-interactions
- Easing: ease-out for natural feel
- Page transitions: 500ms with View Transitions API
- No motion for prefers-reduced-motion users

---
