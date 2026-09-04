'use client';

import React, { useState } from 'react';
import RevealSection from '@/components/RevealSection';
import { reviewsData } from '@/data/siteData';

const Testimonials: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const handleNext = () => {
    setActiveIdx((prev) => (prev + 1) % reviewsData.length);
  };

  const handlePrev = () => {
    setActiveIdx((prev) => (prev - 1 + reviewsData.length) % reviewsData.length);
  };

  return (
    <section id="testimonials" className="bg-warm-white py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Background Watermark Headline */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-10">
        <h2 className="text-[12vw] font-display font-bold text-ink whitespace-nowrap tracking-tighter">
          CALM ✦ BODY &amp; MIND
        </h2>
      </div>

      {/* Top Bar Header & Stat */}
      <RevealSection className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 relative z-10">
        <div>
          <p className="label-xs text-olive mb-2">REVIEWS &amp; FEEDBACK</p>
          <h2 className="text-3xl md:text-5xl font-display text-ink font-semibold">What our community says.</h2>
        </div>

        <div className="mt-6 md:mt-0 text-left md:text-right">
          <div className="text-4xl md:text-6xl font-display font-bold text-olive">98%</div>
          <p className="text-xs font-mono uppercase tracking-widest text-ink/60">Client Retention</p>
        </div>
      </RevealSection>

      {/* 3D Stacked Cards Layout using Token Classes */}
      <RevealSection className="max-w-4xl mx-auto relative z-10 flex flex-col items-center" y={40}>
        <div className="relative w-full h-[440px] md:h-[380px] flex items-center justify-center">
          {reviewsData.map((rev, idx) => {
            const offset = (idx - activeIdx + reviewsData.length) % reviewsData.length;
            const isFront = offset === 0;

            return (
              <div
                key={rev.id}
                onClick={() => setActiveIdx(idx)}
                className={`absolute top-0 w-full max-w-lg p-8 md:p-10 rounded-2xl border shadow-xl cursor-pointer transition-all duration-700 ease-out origin-center ${
                  isFront
                    ? 'bg-olive text-warm-white border-warm-white/20 shadow-2xl z-30 scale-100 translate-y-0 rotate-0'
                    : offset === 1
                    ? 'bg-bone text-ink border-ink/10 z-20 scale-95 translate-x-8 translate-y-4 -rotate-3 opacity-90'
                    : offset === 2
                    ? 'bg-warm-white text-ink border-ink/10 z-10 scale-90 translate-x-16 translate-y-8 -rotate-6 opacity-75'
                    : 'bg-bone text-ink border-ink/10 z-0 scale-85 translate-x-24 translate-y-12 -rotate-12 opacity-0'
                }`}
              >
                {/* Rating & Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`flex gap-1 text-sm ${isFront ? 'text-clay' : 'text-olive'}`}>
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className={`text-xs font-mono ${isFront ? 'text-warm-white/60' : 'text-ink/40'}`}>
                    0{idx + 1} / 0{reviewsData.length}
                  </span>
                </div>

                {/* Avatar & Author Info */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl overflow-hidden border-2 border-warm-white/20 img-placeholder flex-shrink-0"
                    style={{
                      backgroundImage: `url('${rev.avatar}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div>
                    <h4 className={`font-semibold text-lg ${isFront ? 'text-warm-white' : 'text-ink'}`}>
                      {rev.name}
                    </h4>
                    <p className={`text-xs ${isFront ? 'text-warm-white/70' : 'text-ink/60'}`}>{rev.role}</p>
                  </div>
                </div>

                {/* Quote */}
                <p className={`text-sm md:text-base leading-relaxed ${isFront ? 'text-warm-white/90' : 'text-ink/80'}`}>
                  "{rev.quote}"
                </p>
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Buttons */}
        <div className="flex items-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            aria-label="Previous review"
            className="w-12 h-12 rounded-full border border-ink/20 flex items-center justify-center text-ink hover:bg-olive hover:text-warm-white transition-all"
          >
            ←
          </button>
          <div className="flex gap-2">
            {reviewsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIdx(idx)}
                aria-label={`Go to review ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIdx === idx ? 'w-8 bg-olive' : 'w-2 bg-ink/20'
                }`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            aria-label="Next review"
            className="w-12 h-12 rounded-full border border-ink/20 flex items-center justify-center text-ink hover:bg-olive hover:text-warm-white transition-all"
          >
            →
          </button>
        </div>
      </RevealSection>
    </section>
  );
};

export default Testimonials;
