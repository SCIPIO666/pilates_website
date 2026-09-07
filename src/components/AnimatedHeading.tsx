'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedHeadingProps {
  as?: 'h1' | 'h2' | 'h3';
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ as = 'h2', children, className = '', delay = 0 }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const Tag = as as any;

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        { opacity: 0, letterSpacing: '0.5em' },
        {
          opacity: 1,
          letterSpacing: '0em',
          duration: 0.8,
          delay,
          ease: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
          scrollTrigger: { trigger: ref.current, start: 'top 85%', toggleActions: 'play reverse play reverse' },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, [delay]);

  return <Tag ref={ref} className={className}>{children}</Tag>;
};

export default AnimatedHeading;