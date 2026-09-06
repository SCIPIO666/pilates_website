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
          Hover a row to see the full class breakdown.
        </p>
      </RevealSection>

      {/* Full-width Class Rows */}
      <div className="flex flex-col divide-y divide-warm-white/15 border-t border-b border-warm-white/15">
        {classesData.map((cls, idx) => (
          <RevealSection key={cls.id} y={30} delay={idx * 0.06}>
            <div className="group grid grid-cols-1 md:grid-cols-[minmax(90px,140px)_1.1fr_1fr] items-center gap-6 md:gap-12 py-10 md:py-12 hover:py-16 transition-[padding] duration-500 ease-out">
              {/* Step Number */}
              <span className="font-display font-bold text-7xl md:text-8xl leading-none text-warm-white/15 group-hover:text-olive-light transition-colors duration-500 select-none">
                {cls.stepNumber}
              </span>

              {/* Image */}
              <div className="relative w-full h-[240px] md:h-[300px] overflow-hidden rounded-2xl img-placeholder">
                <div
                  className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{
                    backgroundImage: `url('${cls.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
              </div>

              {/* Title, CTA + reveal-on-hover description */}
              <div className="flex flex-col">
                <span className="text-olive-light text-xs font-mono uppercase tracking-widest mb-1">
                  {cls.subtitle}
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-display font-semibold mb-4">
                  {cls.title}
                </h3>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="overflow-hidden">
                    <p className="text-warm-white/80 text-sm leading-relaxed mb-4 max-w-md">
                      {cls.description}
                    </p>
                    <ul className="space-y-2.5 mb-6">
                      {cls.bulletPoints.map((pt, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-xs md:text-sm text-warm-white/70 font-medium"
                        >
                          <span className="text-olive-light font-bold">✓</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a href="#book" className="cta cta-white w-fit">
                  <span>Book {cls.title}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>
              </div>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
};

export default Classes;