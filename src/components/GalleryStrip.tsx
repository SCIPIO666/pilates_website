'use client';

import React from 'react';
import RevealSection from '@/components/RevealSection';
import { galleryStripData } from '@/data/siteData';

// Left-only, right-only, both-top, and a soft full-round variant — cycled so
// no two neighbouring cards share the same arch, echoing varied archway widths.
const shapeClasses = [
  'rounded-tl-[100px]',
  'rounded-t-[100px]',
  'rounded-tr-[100px]',
  'rounded-tl-[60px] rounded-br-[60px]',
];

const GalleryStrip: React.FC = () => {
  // Duplicate the set once so the track can loop seamlessly: animating the
  // combined (200%-wide) track by exactly -50% always lines the second copy
  // up perfectly where the first one started.
  const loopItems = [...galleryStripData, ...galleryStripData];
  const trackDuration = `${galleryStripData.length * 4}s`;

  return (
    <section className="bg-olive py-16 px-4 md:px-12 overflow-hidden border-t border-warm-white/10 text-warm-white">
      {/* Header */}
      <RevealSection className="text-center mb-10">
        <p className="font-display text-2xl md:text-4xl text-warm-white tracking-wide font-light">
          @revival <span className="text-olive-light">· studio</span>
        </p>
      </RevealSection>

      {/* Infinite horizontal marquee of arch-shaped cards */}
      <RevealSection className="w-full" y={30}>
        <div className="overflow-hidden w-full">
          <div
            className="flex gap-4 md:gap-6 w-max [will-change:transform] hover:[animation-play-state:paused]"
            style={{ animation: `marquee-x ${trackDuration} linear infinite` }}
          >
            {loopItems.map((item, idx) => {
              const shape = shapeClasses[idx % shapeClasses.length];
              const isTall = idx % 2 === 1;

              return (
                <div
                  key={`${item.id}-${idx}`}
                  className={`group relative flex-shrink-0 w-[220px] md:w-[300px] overflow-hidden border border-warm-white/20 shadow-xl transition-all duration-500 hover:-translate-y-3 ${shape} ${
                    isTall ? 'h-[320px] md:h-[420px]' : 'h-[280px] md:h-[360px]'
                  }`}
                >
                  <div
                    className="w-full h-full img-placeholder transition-transform duration-700 ease-out group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${item.image}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-center justify-center">
                    <span className="text-warm-white text-xs font-mono uppercase tracking-wider">
                      {item.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </RevealSection>
    </section>
  );
};

export default GalleryStrip;