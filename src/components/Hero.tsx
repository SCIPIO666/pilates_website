'use client';

import React, { useState, useEffect } from 'react';
import homeHero from '../../public/homeHero.webp';
import homeHero2 from '../../public/homeHero2.webp';
import homeHer03 from '../../public/homeHer03.webp';

interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: string;
  animationClass: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
}

const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    eyebrow: 'Nairobi · Boutique Pilates Studio',
    title: 'Strength, restored from the inside out.',
    subtitle: 'Reformer, Mat, Group & Private sessions tailored to meet you exactly where you are.',
    image: homeHero.src,
    animationClass: 'kenburns-right',
    primaryCta: { text: 'Book a Class', href: '#book' },
    secondaryCta: { text: 'Our Philosophy', href: '#philosophy' },
  },
  {
    id: 'slide-2',
    eyebrow: 'Precision & Alignment',
    title: 'Move with intention. Live with balance.',
    subtitle: 'Building quiet power and postural alignment through expert, unhurried instruction.',
    image: homeHero2.src,
    animationClass: 'kenburns-left',
    primaryCta: { text: 'Explore Classes', href: '#classes' },
    secondaryCta: { text: 'Rates & Packs', href: '#pricing' },
  },
  {
    id: 'slide-3',
    eyebrow: 'Restorative Sanctuary',
    title: 'A space designed to slow you down.',
    subtitle: 'Experience considered design, warm light, and personalized movement care in Nairobi.',
    image: homeHer03.src,
    animationClass: 'kenburns-top',
    primaryCta: { text: 'Meet Instructor', href: '#instructor' },
    secondaryCta: { text: 'Studio Gallery', href: '#gallery' },
  },
];

const Hero: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[currentIdx];

  return (
    <section id="top" className="relative w-full h-screen min-h-[640px] p-0 overflow-hidden bg-ink">
      {/* Background Slides with Animista Ken Burns animations */}
      {heroSlides.map((slide, idx) => {
        const isActive = idx === currentIdx;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            {/* Ken Burns Animated Background Image Container */}
            <div
              className={`w-full h-full img-placeholder ${isActive ? slide.animationClass : ''}`}
              style={{
                backgroundImage: `url('${slide.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/20 pointer-events-none" />
          </div>
        );
      })}

      {/* Hero Content Overlay */}
      <div className="relative z-20 h-full flex flex-col justify-end px-6 md:px-16 pb-20 md:pb-24 max-w-5xl">
        {/* Eyebrow Label */}
        <p className="label-xs text-olive-light mb-4 font-mono tracking-widest">
          {currentSlide.eyebrow}
        </p>

        {/* Dynamic Title */}
        <h1 className="text-warm-white text-4xl md:text-6xl font-display font-bold leading-tight mb-4 max-w-3xl transition-all duration-700">
          {currentSlide.title}
        </h1>

        {/* Subtitle Description */}
        <p className="text-warm-white/80 text-base md:text-lg max-w-xl mb-8 leading-relaxed">
          {currentSlide.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex items-center gap-6 mb-12">
          <a href={currentSlide.primaryCta.href} className="cta cta-white text-sm">
            {currentSlide.primaryCta.text}
          </a>
          <a href={currentSlide.secondaryCta.href} className="cta cta-white text-sm opacity-80 hover:opacity-100">
            {currentSlide.secondaryCta.text}
          </a>
        </div>

        {/* Slide Indicators & Controls */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  currentIdx === idx ? 'w-10 bg-olive-light' : 'w-3 bg-warm-white/30 hover:bg-warm-white/60'
                }`}
              />
            ))}
          </div>

          <span className="text-xs font-mono text-warm-white/60">
            0{currentIdx + 1} / 0{heroSlides.length}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
