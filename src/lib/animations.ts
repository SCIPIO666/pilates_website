import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Ken Burns zoom effect (Hero)
 * Subtle 2% zoom over 20 seconds on desktop only
 */
export const initKenBurnsEffect = (element: HTMLElement | null) => {
  if (!element || typeof window === 'undefined') return;

  // Desktop only (1024px+)
  if (window.innerWidth < 1024) return;

  gsap.to(element, {
    scale: 1.02,
    duration: 20,
    ease: 'none',
    repeat: -1,
    yoyo: true,
  });
};

/**
 * Scroll-reveal navigation bar
 * Hide on scroll down, show on scroll up
 */
export const initScrollRevealNav = (element: HTMLElement | null) => {
  if (!element) return;

  let lastScrollY = 0;
  let direction = 'up';

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      direction = 'down';
      gsap.to(element, { y: -element.offsetHeight, duration: 0.3, overwrite: 'auto' });
    } else {
      direction = 'up';
      gsap.to(element, { y: 0, duration: 0.3, overwrite: 'auto' });
    }
    lastScrollY = currentScrollY;
  };

  window.addEventListener('scroll', handleScroll, false);

  return () => window.removeEventListener('scroll', handleScroll);
};

/**
 * Class selector expand/collapse animation
 */
export const initClassSelectorAnimation = (items: HTMLElement[]) => {
  items.forEach((item) => {
    item.addEventListener('click', () => {
      const siblings = Array.from(item.parentElement?.children || []) as HTMLElement[];
      siblings.forEach((sibling) => {
        if (sibling === item) {
          gsap.to(sibling, { flex: 5, duration: 0.5, ease: 'power2.inOut' });
        } else {
          gsap.to(sibling, { flex: 1, duration: 0.5, ease: 'power2.inOut' });
        }
      });
    });
  });
};

/**
 * Revival Way steps scroll reveal
 * Fade in steps as they enter the viewport
 */
export const initRevivalWaySteps = (steps: HTMLElement[]) => {
  steps.forEach((step, index) => {
    gsap.set(step, { opacity: 0.35 });

    ScrollTrigger.create({
      trigger: step,
      start: 'top center+=100px',
      end: 'center center',
      onEnter: () => {
        gsap.to(step, { opacity: 1, duration: 0.6 });
      },
      onLeaveBack: () => {
        gsap.to(step, { opacity: 0.35, duration: 0.6 });
      },
    });
  });
};

/**
 * Gallery parallax on scroll (subtle)
 * 10-20px offset between rows
 */
export const initGalleryParallax = (rows: HTMLElement[]) => {
  if (typeof window === 'undefined' || window.innerWidth < 1024) return;

  rows.forEach((row, index) => {
    const offset = (index + 1) * 15;
    gsap.to(row, {
      y: offset,
      scrollTrigger: {
        trigger: row,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
      },
    });
  });
};

/**
 * Testimonial carousel
 * Fade between quotes
 */
export const initTestimonialCarousel = (
  dots: HTMLElement[],
  onchange?: (index: number) => void
) => {
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      dots.forEach((d) => d.classList.remove('active'));
      dot.classList.add('active');
      onchange?.(index);
    });
  });
};

/**
 * Intersection observer for fade-in elements
 */
export const initIntersectionObserver = (elements: HTMLElement[], className = 'fade-in') => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((el) => {
    gsap.set(el, { opacity: 0, y: 20 });
    observer.observe(el);
  });

  return observer;
};
