'use client';

import React, { useEffect, useRef } from 'react';
import { initKenBurnsEffect } from '@/lib/animations';

const Hero: React.FC = () => {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    initKenBurnsEffect(imgRef.current);
  }, []);

  return (
    <section id="top" className="relative w-full h-screen min-h-[600px] p-0 overflow-hidden">
      <div
        ref={imgRef}
        className="img-placeholder absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/images/hero/hero-main.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/50" />

      <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 pb-20 md:pb-24">
        <p className="label-xs text-white/90 mb-4">Nairobi · Reformer &amp; Mat Pilates</p>
        <h1 className="text-white max-w-3xl mb-6">
          Strength, restored from the inside out.
        </h1>
        <div className="flex items-center gap-6">
          <a href="#book" className="cta cta-white">
            Book a Class
          </a>
          <a href="#philosophy" className="cta cta-white">
            Our Philosophy
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
