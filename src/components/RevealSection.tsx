'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface RevealSectionProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  y?: number;
  duration?: number;
  delay?: number;
}

const RevealSection: React.FC<RevealSectionProps> = ({
  children,
  className = '',
  style,
  y = 30,
  duration = 1,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if element is already inside viewport on mount
    const rect = el.getBoundingClientRect();
    const isInViewport = rect.top < window.innerHeight * 0.9;

    if (isInViewport) {
      gsap.set(el, { opacity: 1, y: 0 });
    } else {
      gsap.set(el, { opacity: 0, y });
    }

    const trigger = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      once: true,
      onEnter: () => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: 'power2.out',
        });
      },
    });

    // Refresh ScrollTrigger to ensure accurate positions after DOM renders
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      trigger.kill();
    };
  }, [y, duration, delay]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};

export default RevealSection;
