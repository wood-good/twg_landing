/**
 * GSAP Animation System for The Wood and Good
 *
 * This file contains all cinematic animations using GSAP + ScrollTrigger.
 * Designed for easy handover - all animations are centralized here.
 *
 * Dependencies:
 * - GSAP Core (gsap.min.js)
 * - ScrollTrigger Plugin (ScrollTrigger.min.js)
 *
 * @author Development Team
 * @version 1.0.0
 */

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

/**
 * ============================================
 * CONFIGURATION
 * ============================================
 */
const AnimationConfig = {
  // Global easing curves (moooi-style smooth)
  easing: {
    smooth: 'power2.out',
    dramatic: 'power3.out',
    elastic: 'elastic.out(1, 0.5)',
    cinematic: 'power4.inOut'
  },

  // Default durations
  duration: {
    fast: 0.4,
    normal: 0.8,
    slow: 1.2,
    dramatic: 1.8
  },

  // Scroll trigger defaults
  scroll: {
    start: 'top 80%',
    end: 'bottom 20%',
    scrub: 1
  }
};

/**
 * ============================================
 * 1. HERO SECTION ANIMATIONS
 * ============================================
 */
function initHeroAnimations() {
  const hero = document.querySelector('.hero-cover');
  if (!hero) return;

  const heroContent = hero.querySelector('.hero-content');
  const heroTitle = hero.querySelector('h1');
  const heroText = hero.querySelectorAll('p');
  const heroButtons = hero.querySelectorAll('.btn-moooi');

  // Create hero entrance timeline
  const heroTL = gsap.timeline({
    defaults: {
      ease: AnimationConfig.easing.dramatic,
      duration: AnimationConfig.duration.slow
    }
  });

  // Animate hero elements on page load
  heroTL
    .from(heroTitle, {
      y: 60,
      opacity: 0,
      duration: 1.2
    })
    .from(heroText, {
      y: 40,
      opacity: 0,
      stagger: 0.15
    }, '-=0.6')
    .from(heroButtons, {
      y: 30,
      opacity: 0,
      stagger: 0.1
    }, '-=0.4');

  // Parallax effect on scroll
  gsap.to(heroContent, {
    y: 100,
    opacity: 0.3,
    ease: 'none',
    scrollTrigger: {
      trigger: hero,
      start: 'top top',
      end: 'bottom top',
      scrub: true
    }
  });
}

/**
 * ============================================
 * 2. SCROLL REVEAL ANIMATIONS
 * ============================================
 * Replace AOS with GSAP for smoother, more controlled reveals
 */
function initScrollReveals() {
  // Fade up reveals (most common)
  const fadeUpElements = document.querySelectorAll('[data-animate="fade-up"]');

  fadeUpElements.forEach((el) => {
    gsap.from(el, {
      y: 60,
      opacity: 0,
      duration: AnimationConfig.duration.normal,
      ease: AnimationConfig.easing.smooth,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Staggered reveals for groups (like product cards)
  const staggerGroups = document.querySelectorAll('[data-animate-group]');

  staggerGroups.forEach((group) => {
    const children = group.querySelectorAll('[data-animate-child]');

    gsap.from(children, {
      y: 50,
      opacity: 0,
      duration: AnimationConfig.duration.normal,
      ease: AnimationConfig.easing.smooth,
      stagger: 0.12,
      scrollTrigger: {
        trigger: group,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Slide in from left
  const slideLeftElements = document.querySelectorAll('[data-animate="slide-left"]');

  slideLeftElements.forEach((el) => {
    gsap.from(el, {
      x: -80,
      opacity: 0,
      duration: AnimationConfig.duration.normal,
      ease: AnimationConfig.easing.smooth,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Slide in from right
  const slideRightElements = document.querySelectorAll('[data-animate="slide-right"]');

  slideRightElements.forEach((el) => {
    gsap.from(el, {
      x: 80,
      opacity: 0,
      duration: AnimationConfig.duration.normal,
      ease: AnimationConfig.easing.smooth,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });

  // Scale reveal (good for images)
  const scaleElements = document.querySelectorAll('[data-animate="scale"]');

  scaleElements.forEach((el) => {
    gsap.from(el, {
      scale: 0.8,
      opacity: 0,
      duration: AnimationConfig.duration.slow,
      ease: AnimationConfig.easing.dramatic,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });
  });
}

/**
 * ============================================
 * 3. CONTENT BLOCK ANIMATIONS
 * ============================================
 * Alternating content blocks with image/text reveals
 */
function initContentBlockAnimations() {
  const contentBlocks = document.querySelectorAll('.content-block');

  contentBlocks.forEach((block, index) => {
    const image = block.querySelector('div:first-child');
    const text = block.querySelector('.content-block-text');
    const isReversed = block.classList.contains('reverse');

    // Create timeline for each block
    const blockTL = gsap.timeline({
      scrollTrigger: {
        trigger: block,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });

    // Animate image first
    blockTL.from(image, {
      x: isReversed ? 60 : -60,
      opacity: 0,
      duration: AnimationConfig.duration.normal,
      ease: AnimationConfig.easing.smooth
    });

    // Then text elements staggered
    const textElements = text.querySelectorAll('h2, p, a');
    blockTL.from(textElements, {
      x: isReversed ? -40 : 40,
      opacity: 0,
      duration: AnimationConfig.duration.normal,
      ease: AnimationConfig.easing.smooth,
      stagger: 0.1
    }, '-=0.4');
  });
}

/**
 * ============================================
 * 4. SECTION TITLES
 * ============================================
 * Dramatic reveals for section headers
 */
function initSectionTitleAnimations() {
  const sectionTitles = document.querySelectorAll('.section-title');

  sectionTitles.forEach((title) => {
    // Split text for character animation (optional advanced effect)
    gsap.from(title, {
      y: 40,
      opacity: 0,
      duration: AnimationConfig.duration.slow,
      ease: AnimationConfig.easing.dramatic,
      scrollTrigger: {
        trigger: title,
        start: 'top 85%',
        toggleActions: 'play none none none'
      }
    });

    // Animate subtitle if present
    const subtitle = title.nextElementSibling;
    if (subtitle && subtitle.classList.contains('section-subtitle')) {
      gsap.from(subtitle, {
        y: 30,
        opacity: 0,
        duration: AnimationConfig.duration.normal,
        ease: AnimationConfig.easing.smooth,
        scrollTrigger: {
          trigger: subtitle,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        delay: 0.2
      });
    }
  });
}

/**
 * ============================================
 * 5. PARALLAX BACKGROUNDS
 * ============================================
 * Depth effect for cinematic feel
 */
function initParallaxBackgrounds() {
  const parallaxSections = document.querySelectorAll('[data-parallax]');

  parallaxSections.forEach((section) => {
    const depth = section.getAttribute('data-parallax') || 0.3;
    const bg = section.querySelector('.parallax-bg');

    if (bg) {
      gsap.to(bg, {
        y: () => section.offsetHeight * depth,
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }
  });
}

/**
 * ============================================
 * 6. PINNED SECTION (Advanced)
 * ============================================
 * Section stays fixed while content animates
 */
function initPinnedSections() {
  const pinnedSections = document.querySelectorAll('[data-pin]');

  pinnedSections.forEach((section) => {
    const panels = section.querySelectorAll('.pin-panel');

    if (panels.length === 0) return;

    // Pin the section
    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: () => `+=${panels.length * 100}%`,
      pin: true,
      anticipatePin: 1
    });

    // Animate panels sequentially
    panels.forEach((panel, i) => {
      gsap.to(panel, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: section,
          start: () => `top+=${i * 100}% top`,
          end: () => `top+=${(i + 1) * 100}% top`,
          scrub: true
        }
      });
    });
  });
}

/**
 * ============================================
 * 7. NAVBAR ANIMATIONS
 * ============================================
 */
function initNavbarAnimations() {
  const navbar = document.querySelector('.navbar-moooi');
  if (!navbar) return;

  // Smooth background transition on scroll
  ScrollTrigger.create({
    start: 'top -50',
    onUpdate: (self) => {
      if (self.direction === 1 && window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else if (window.scrollY <= 50) {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // Hide/show on scroll direction (optional)
  let lastScrollY = 0;

  ScrollTrigger.create({
    onUpdate: (self) => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        // Scrolling down - hide navbar
        gsap.to(navbar, {
          y: -100,
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        // Scrolling up - show navbar
        gsap.to(navbar, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }

      lastScrollY = currentScrollY;
    }
  });
}

/**
 * ============================================
 * 8. BUTTON HOVER EFFECTS
 * ============================================
 */
function initButtonAnimations() {
  const buttons = document.querySelectorAll('.btn-moooi');

  buttons.forEach((btn) => {
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.02,
        duration: 0.3,
        ease: AnimationConfig.easing.smooth
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.3,
        ease: AnimationConfig.easing.smooth
      });
    });
  });
}

/**
 * ============================================
 * 9. IMAGE REVEAL ON SCROLL
 * ============================================
 * Cinematic image reveals with mask effect
 */
function initImageReveals() {
  const revealImages = document.querySelectorAll('[data-reveal-image]');

  revealImages.forEach((container) => {
    const img = container.querySelector('img');
    if (!img) return;

    // Set initial state
    gsap.set(container, { overflow: 'hidden' });
    gsap.set(img, { scale: 1.3 });

    // Animate on scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });

    tl.to(img, {
      scale: 1,
      duration: AnimationConfig.duration.dramatic,
      ease: AnimationConfig.easing.cinematic
    });
  });
}

/**
 * ============================================
 * SMOOTH SCROLL (Enhanced with ScrollToPlugin)
 * ============================================
 */
function initSmoothScroll() {
  // Handle anchor links with smooth GSAP scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));

      if (target) {
        gsap.to(window, {
          duration: 1,
          scrollTo: {
            y: target,
            offsetY: 80
          },
          ease: AnimationConfig.easing.cinematic
        });
      }
    });
  });
}

/**
 * ============================================
 * 10. VIDEO HERO BACKGROUND
 * ============================================
 * Cinematic video background with fallback
 */
function initVideoHero() {
  const videoContainers = document.querySelectorAll('[data-video-hero]');

  videoContainers.forEach((container) => {
    const videoSrc = container.getAttribute('data-video-hero');
    const posterSrc = container.getAttribute('data-video-poster');

    if (!videoSrc) return;

    // Create video element
    const video = document.createElement('video');
    video.className = 'hero-video-bg';
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.setAttribute('playsinline', '');

    if (posterSrc) {
      video.poster = posterSrc;
    }

    // Add source
    const source = document.createElement('source');
    source.src = videoSrc;
    source.type = 'video/mp4';
    video.appendChild(source);

    // Insert at beginning of container
    container.insertBefore(video, container.firstChild);

    // Fade in video when loaded
    gsap.set(video, { opacity: 0 });

    video.addEventListener('loadeddata', () => {
      gsap.to(video, {
        opacity: 1,
        duration: 1.5,
        ease: AnimationConfig.easing.smooth
      });
    });

    // Parallax effect on video
    gsap.to(video, {
      y: '20%',
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  });
}

/**
 * ============================================
 * 11. HORIZONTAL SCROLL GALLERY
 * ============================================
 * Cards scroll horizontally while section scrolls vertically
 */
function initHorizontalScroll() {
  const horizontalSections = document.querySelectorAll('[data-horizontal-scroll]');

  horizontalSections.forEach((section) => {
    const track = section.querySelector('.horizontal-track');
    const items = track ? track.querySelectorAll('.horizontal-item') : [];

    if (items.length === 0) return;

    // Calculate total scroll distance
    const totalWidth = track.scrollWidth - section.offsetWidth;

    gsap.to(track, {
      x: -totalWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => `+=${totalWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1
      }
    });

    // Animate items as they come into view
    items.forEach((item, i) => {
      gsap.from(item, {
        opacity: 0,
        scale: 0.9,
        scrollTrigger: {
          trigger: item,
          containerAnimation: gsap.getById('horizontal'),
          start: 'left center',
          toggleActions: 'play none none reverse'
        }
      });
    });
  });
}

/**
 * ============================================
 * 12. TEXT SPLIT ANIMATIONS
 * ============================================
 * Character-by-character or word-by-word reveals
 */
function initTextSplitAnimations() {
  const splitElements = document.querySelectorAll('[data-split-text]');

  splitElements.forEach((el) => {
    const splitType = el.getAttribute('data-split-text') || 'words';
    const text = el.textContent;
    el.innerHTML = '';

    if (splitType === 'chars') {
      // Split into characters
      text.split('').forEach((char) => {
        const span = document.createElement('span');
        span.className = 'split-char';
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        el.appendChild(span);
      });

      gsap.from(el.querySelectorAll('.split-char'), {
        y: 50,
        opacity: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: AnimationConfig.easing.smooth,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    } else {
      // Split into words
      text.split(' ').forEach((word, i) => {
        const span = document.createElement('span');
        span.className = 'split-word';
        span.textContent = word;
        span.style.display = 'inline-block';
        span.style.marginRight = '0.3em';
        el.appendChild(span);
      });

      gsap.from(el.querySelectorAll('.split-word'), {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: AnimationConfig.easing.smooth,
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    }
  });
}

/**
 * ============================================
 * 13. COUNTER ANIMATIONS
 * ============================================
 * Animate numbers counting up
 */
function initCounterAnimations() {
  const counters = document.querySelectorAll('[data-counter]');

  counters.forEach((counter) => {
    const target = parseInt(counter.getAttribute('data-counter'), 10);
    const duration = parseFloat(counter.getAttribute('data-counter-duration')) || 2;
    const suffix = counter.getAttribute('data-counter-suffix') || '';

    const obj = { value: 0 };

    gsap.to(obj, {
      value: target,
      duration: duration,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: counter,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      onUpdate: () => {
        counter.textContent = Math.round(obj.value) + suffix;
      }
    });
  });
}

/**
 * ============================================
 * 14. MAGNETIC BUTTONS
 * ============================================
 * Buttons that follow cursor within radius
 */
function initMagneticButtons() {
  const magneticElements = document.querySelectorAll('[data-magnetic]');

  magneticElements.forEach((el) => {
    const strength = parseFloat(el.getAttribute('data-magnetic')) || 0.3;

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.5)'
      });
    });
  });
}

/**
 * ============================================
 * 15. SCROLL PROGRESS INDICATOR
 * ============================================
 */
function initScrollProgress() {
  const progressBar = document.querySelector('[data-scroll-progress]');
  if (!progressBar) return;

  gsap.to(progressBar, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 0.3
    }
  });
}

/**
 * ============================================
 * 16. STAGGERED GRID REVEALS
 * ============================================
 * For product grids, galleries, etc.
 */
function initGridReveals() {
  const grids = document.querySelectorAll('[data-grid-reveal]');

  grids.forEach((grid) => {
    const items = grid.querySelectorAll('.grid-item');
    const columns = parseInt(grid.getAttribute('data-grid-reveal')) || 3;

    gsap.from(items, {
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: {
        amount: 0.6,
        grid: [Math.ceil(items.length / columns), columns],
        from: 'start'
      },
      ease: AnimationConfig.easing.smooth,
      scrollTrigger: {
        trigger: grid,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });
}

/**
 * ============================================
 * 17. MARQUEE / INFINITE SCROLL TEXT
 * ============================================
 */
function initMarquee() {
  const marquees = document.querySelectorAll('[data-marquee]');

  marquees.forEach((marquee) => {
    const speed = parseFloat(marquee.getAttribute('data-marquee-speed')) || 50;
    const direction = marquee.getAttribute('data-marquee-direction') || 'left';
    const content = marquee.querySelector('.marquee-content');

    if (!content) return;

    // Clone content for seamless loop
    const clone = content.cloneNode(true);
    marquee.appendChild(clone);

    const totalWidth = content.offsetWidth;
    const xPercent = direction === 'left' ? -100 : 100;

    gsap.to(marquee.children, {
      xPercent: xPercent,
      duration: totalWidth / speed,
      ease: 'none',
      repeat: -1
    });
  });
}

/**
 * ============================================
 * INITIALIZATION
 * ============================================
 * Call this when DOM is ready
 */
function initAllAnimations() {
  // Core animations
  initHeroAnimations();
  initScrollReveals();
  initContentBlockAnimations();
  initSectionTitleAnimations();
  initNavbarAnimations();
  initButtonAnimations();

  // Visual effects
  initParallaxBackgrounds();
  initImageReveals();
  initVideoHero();

  // Advanced interactions
  initPinnedSections();
  initHorizontalScroll();
  initTextSplitAnimations();
  initCounterAnimations();
  initMagneticButtons();
  initScrollProgress();
  initGridReveals();
  initMarquee();
  initSmoothScroll();

  console.log('GSAP Animations initialized - Full cinematic mode');
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initAllAnimations);

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});

/**
 * ============================================
 * UTILITY FUNCTIONS
 * ============================================
 */

// Kill all ScrollTriggers (useful for page transitions)
function killAllAnimations() {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
}

// Refresh animations (useful after dynamic content load)
function refreshAnimations() {
  ScrollTrigger.refresh();
}

// Export for potential module use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    initAllAnimations,
    killAllAnimations,
    refreshAnimations,
    AnimationConfig
  };
}
