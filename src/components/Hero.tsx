'use client';

import React, { useState, useEffect } from 'react';
import CtaButton from '@/components/CtaButton';
import {heroSlides} from '@/data/siteData'
import AnimatedHeading from './AnimatedHeading';


// import hero1 from '../../public/heroCarousel/hero1.webp';
// import hero2 from '../../public/heroCarousel/hero2.webp';
// import hero3 from '../../public/heroCarousel/hero3.webp';



const Hero: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIdx((prev) => (prev + 1) % heroSlides.length);
        setIsTransitioning(false);
      }, 300);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[currentIdx];

  return (
    <section id="top" className="relative w-full h-screen min-h-[640px] p-0 overflow-hidden bg-ink">
      {/* Background Slides with Ken Burns animations */}
      {heroSlides.map((slide, idx) => {
        const isActive = idx === currentIdx;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
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
        {/* Eyebrow Label with fade animation */}
        <p 
          key={`eyebrow-${currentIdx}`}
          className="label-xs text-olive-light mb-4 font-mono tracking-widest transition-all duration-700 ease-in-out"
        >
          {currentSlide.eyebrow}
        </p>

        {/* Dynamic Title with slide animation */}
        <AnimatedHeading
          key={`title-${currentIdx}`}
          className="text-warm-white text-4xl md:text-6xl font-display font-bold leading-tight mb-4 max-w-3xl transition-all duration-700 ease-in-out"
          // style={{
          //   transform: isTransitioning ? 'translateY(-20px)' : 'translateY(0)',
          //   opacity: isTransitioning ? 0 : 1,
          // }}
        >
          {currentSlide.title}
       </AnimatedHeading>

        {/* Subtitle Description */}
        <p 
          key={`subtitle-${currentIdx}`}
          className="text-warm-white/80 text-base md:text-lg max-w-xl mb-8 leading-relaxed transition-all duration-700 ease-in-out delay-100"
          style={{
            transform: isTransitioning ? 'translateY(-15px)' : 'translateY(0)',
            opacity: isTransitioning ? 0 : 1,
          }}
        >
          {currentSlide.subtitle}
        </p>

        {/* CTAs */}
        <div 
          key={`ctas-${currentIdx}`}
          className="flex items-center gap-6 mb-12 transition-all duration-700 ease-in-out delay-200"
          style={{
            transform: isTransitioning ? 'translateY(-10px)' : 'translateY(0)',
            opacity: isTransitioning ? 0 : 1,
          }}
        >
          <CtaButton href={currentSlide.primaryCta.href} variant="white" size="md">
            {currentSlide.primaryCta.text}
          </CtaButton>
          <CtaButton href={currentSlide.secondaryCta.href} variant="white" size="md">
            {currentSlide.secondaryCta.text}
          </CtaButton>
        </div>

        {/* Slide Indicators & Controls */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIdx(idx);
                    setIsTransitioning(false);
                  }, 300);
                }}
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