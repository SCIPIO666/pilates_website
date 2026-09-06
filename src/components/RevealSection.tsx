'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

interface RevealSectionProps {
  children: React.ReactNode;
  y?: number;
  scale?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

const RevealSection: React.FC<RevealSectionProps> = ({
  children,
  y = 40,
  scale = 1,
  duration = 1,
  delay = 0,
  className = '',
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y, scale },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration,
          delay,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: "play reverse play reverse"
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [y, scale, duration, delay]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default RevealSection;