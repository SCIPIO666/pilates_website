'use client';

import React from 'react';
import RevealSection from '@/components/RevealSection';
import { classesData } from '@/data/siteData';

const Classes: React.FC = () => {
  return (
    <section id="classes" className="bg-olive text-warm-white py-24 px-6 md:px-16 overflow-hidden">
      {/* Section Header */}
      <RevealSection className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-warm-white/20">
        <div>
          <p className="label-xs text-olive-light mb-2">CLASSES &amp; PRACTICE</p>
          <h2 className="text-white text-3xl md:text-5xl font-display font-semibold">Four ways to move.</h2>
        </div>
        <p className="text-warm-white/80 text-sm max-w-sm mt-4 md:mt-0">
          Scroll through our offerings. Hover over any class to expand details &amp; explore session highlights.
        </p>
      </RevealSection>

      {/* Scrollable Class Cards Container */}
      <RevealSection className="w-full" y={30}>
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none -mx-6 px-6 md:mx-0 md:px-0">
          {classesData.map((cls) => (
            <div
              key={cls.id}
              className="group flex-shrink-0 w-[85vw] md:w-[480px] snap-start bg-bone text-ink rounded-2xl overflow-hidden border border-ink/10 shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 flex flex-col justify-between"
            >
              {/* Expandable Image Container */}
              <div className="relative w-full h-[260px] md:h-[300px] overflow-hidden img-placeholder">
                <div
                  className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${cls.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                
                {/* Step Number Badge */}
                <span className="absolute top-4 left-4 bg-olive text-warm-white font-mono text-xs px-3 py-1 rounded-full font-bold shadow-md">
                  {cls.stepNumber}
                </span>

                {/* Card Title Overlay on Image */}
                <div className="absolute bottom-4 left-6 right-6 transition-transform duration-500 group-hover:-translate-y-1">
                  <span className="text-olive-light text-xs font-mono uppercase tracking-widest block mb-1">
                    {cls.subtitle}
                  </span>
                  <h3 className="text-white text-2xl font-display font-semibold">{cls.title}</h3>
                </div>
              </div>

              {/* Card Body & Expanding Contents on Hover */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between bg-warm-white group-hover:bg-bone transition-colors duration-300">
                <p className="text-ink/80 text-sm leading-relaxed mb-6 group-hover:text-ink transition-colors">
                  {cls.description}
                </p>

                {/* Bullet Points Highlights (Expands on Hover) */}
                <div className="border-t border-ink/10 pt-4 mt-auto">
                  <ul className="space-y-2.5 mb-6">
                    {cls.bulletPoints.map((pt, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-ink/80 font-medium">
                        <span className="text-olive font-bold">✓</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>

                  <a href="#book" className="cta cta-olive w-full justify-between pt-2">
                    <span>Book {cls.title}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>
    </section>
  );
};

export default Classes;
