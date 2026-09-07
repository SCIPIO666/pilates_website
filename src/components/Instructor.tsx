'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import instructorImg from '../../public/instructor/instructor.jpg';
import CtaButton from './CtaButton';
gsap.registerPlugin(ScrollTrigger);

const Instructor: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
          onEnter: () => frameRef.current?.classList.add('is-active'),
          onLeaveBack: () => frameRef.current?.classList.remove('is-active'),
        },
        defaults: { ease: 'power3.out' },
      });

      tl.fromTo(textRef.current, { opacity: 0, x: -60 }, { opacity: 1, x: 0, duration: 0.9 })
        .fromTo(imageWrapRef.current, { opacity: 0, x: 60 }, { opacity: 1, x: 0, duration: 0.9 }, '-=0.5');
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="instructor"
      className="grid md:grid-cols-2 gap-10 md:gap-16 items-center bg-warm-white overflow-hidden py-16 px-6 md:px-12"
    >
      <div ref={textRef} className="order-2 md:order-1 max-w-md">
        <p className="label-xs mb-4">Meet Your Instructor</p>
        <h2 className="mb-2">Maya</h2>
        <p className="label-xs mb-6 text-ink/50 normal-case tracking-normal font-medium">
          Pilates Instructor
        </p>
        <p className="mb-4">
          Maya brings a calm, attentive presence to every session, guiding each client with the
          patience to meet them exactly where they are. Clients often mention how comfortable and
          well cared for she makes them feel — especially in a first class.
        </p>
        <p className="mb-8">
          Whether it's a first Reformer session or a long-standing private client, Maya's approach
          stays the same: precise, encouraging, and fully present.
        </p>
        <CtaButton href="#book" variant="olive">Book with Maya</CtaButton>
      </div>

      <div
        ref={imageWrapRef}
        className="order-1 md:order-2 relative flex items-center justify-center py-6"
      >
        <svg
          className="absolute -top-6 right-4 md:right-8 w-36 h-36 md:w-48 md:h-48 text-clay/50 pointer-events-none transform rotate-12"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M44.7,-64.8C57.4,-57.6,67.1,-44.6,73.1,-29.9C79.1,-15.2,81.4,1.2,77.5,16.5C73.6,31.8,63.5,46,50.7,55.9C37.9,65.8,22.4,71.4,5.9,72.6C-10.6,73.8,-28.1,70.6,-42.6,61.9C-57.1,53.2,-68.6,39,-73.7,22.7C-78.8,6.4,-77.5,-12,-70.5,-27.6C-63.5,-43.2,-50.8,-56,-36.5,-62.7C-22.2,-69.4,-6.3,-70,8.8,-68.7C23.9,-67.4,32,-72,44.7,-64.8Z" transform="translate(100 100)" />
        </svg>

        <svg
          className="absolute -bottom-8 left-4 md:left-10 w-44 h-44 md:w-56 md:h-56 text-bone pointer-events-none transform -rotate-45"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M38.1,-53.4C49.7,-44.8,59.7,-34.2,65.4,-21.2C71.1,-8.2,72.5,7.2,67.8,21C63.1,34.8,52.3,47,39.3,55.5C26.3,64,11.1,68.8,-3.8,74C-18.7,79.2,-33.3,84.8,-45.1,77.8C-56.9,70.8,-65.9,51.2,-70.4,32.3C-74.9,13.4,-74.9,-4.8,-69.1,-20.9C-63.3,-37,-51.7,-51,-37.9,-58.9C-24.1,-66.8,-8.1,-68.6,4.6,-74.9C17.3,-81.2,26.5,-62,38.1,-53.4Z" transform="translate(100 100)" />
        </svg>

        <svg
          className="absolute top-1/3 -left-4 md:-left-8 w-16 h-16 md:w-24 md:h-24 text-olive/30 pointer-events-none"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <path d="M48.1,-57.3C61.4,-47.1,70.5,-30.9,72.9,-13.6C75.3,3.7,71,22.1,61.7,37.2C52.4,52.3,38.1,64.1,21.8,69.5C5.5,74.9,-12.8,73.9,-28.7,66.8C-44.6,59.7,-58.1,46.5,-65.8,30.3C-73.5,14.1,-75.4,-5.1,-70.3,-22.1C-65.2,-39.1,-53.1,-53.9,-38.5,-63.4C-23.9,-72.9,-6.8,-77.1,7.8,-76.3C22.4,-75.5,34.8,-67.5,48.1,-57.3Z" transform="translate(100 100)" />
        </svg>

        <div
          ref={frameRef}
          data-transition-style="in:circle:hesitate"
          className="img-placeholder relative z-10 w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-bone shadow-lg mx-auto"
          style={{
            backgroundImage: `url('${instructorImg.src}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>
    </section>
  );
};

export default Instructor;