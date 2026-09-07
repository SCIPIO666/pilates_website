'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import philosophyImg from '../../public/about/aboutusHero.jpg';
import AnimatedHeading from '@/components/AnimatedHeading';
import CtaButton from '@/components/CtaButton';

gsap.registerPlugin(ScrollTrigger);

const Philosophy: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play reverse play reverse' },
        defaults: { ease: 'power3.out' },
      });
      tl.fromTo(imageRef.current, { opacity: 0, x: -60, scale: 0.5 }, { opacity: 1, x: 0, scale: 1, duration: 1 })
        .fromTo(textRef.current, { opacity: 0, x: 60, scale: 0.5 }, { opacity: 1, x: 0, scale: 1, duration: 1 }, '-=0.5');
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="philosophy" className="grid md:grid-cols-2 gap-10 md:gap-16 items-center bg-warm-white">
      <div
        ref={imageRef}
        className="img-placeholder w-full h-[340px] md:h-[480px]"
        style={{ backgroundImage: `url('${philosophyImg.src}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div ref={textRef} className="max-w-md">
        <p className="label-xs mb-4">Our Philosophy</p>
        <AnimatedHeading className="mb-6">Movement that meets you where you are.</AnimatedHeading>
        <p className="mb-4">
          Revival was built on the belief that Pilates is not about pushing harder — it's about
          moving with intention. Every session is designed to restore alignment, build quiet
          strength, and leave you feeling more at home in your body.
        </p>
        <p className="mb-8">
          Our studio blends considered design with expert instruction, so the space itself
          becomes part of the practice — calm, warm, and unhurried.
        </p>
        <CtaButton href="#classes" variant="olive">Explore Our Classes</CtaButton>
      </div>
    </section>
  );
};

export default Philosophy;