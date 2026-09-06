'use client';

import React from 'react';
import RevealSection from '@/components/RevealSection';
import { galleryData } from '@/data/siteData';

type BlockSize = 'sm' | 'wide' | 'tall' | 'lg';

// Base (mobile) footprint keeps things simple two-up; md/lg pick up the packed sizing.
const sizeClasses: Record<BlockSize, string> = {
  sm: 'col-span-2 row-span-3 md:col-span-2 md:row-span-3 lg:col-span-3 lg:row-span-3',
  wide: 'col-span-2 row-span-3 md:col-span-4 md:row-span-3 lg:col-span-5 lg:row-span-3',
  tall: 'col-span-2 row-span-4 md:col-span-2 md:row-span-5 lg:col-span-3 lg:row-span-6',
  lg: 'col-span-2 row-span-5 md:col-span-4 md:row-span-5 lg:col-span-5 lg:row-span-6',
};

// Cycling pattern that echoes the packed/Packery look — small squares and wide
// bars filling in around the occasional tall or large block. Repeats for any
// number of images; give an item a `size` field in siteData later for manual control.
const sizePattern: BlockSize[] = ['sm', 'wide', 'tall', 'sm', 'wide', 'sm', 'tall', 'lg', 'wide', 'sm', 'sm', 'tall'];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="bg-bone py-24 px-6 md:px-16 overflow-hidden">
      {/* Header */}
      <RevealSection className="max-w-xl mb-16">
        <p className="label-xs text-olive mb-2">STUDIO</p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-ink">
          Designed for quiet focus &amp; reflection.
        </h2>
      </RevealSection>

      {/* Packed / Packery-style dense grid — CSS grid with dense auto-flow
          backfills gaps the way Packery's layout engine does. */}
      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 grid-flow-row-dense auto-rows-[56px] gap-4 md:gap-6">
        {galleryData.map((item, idx) => {
          const size = sizePattern[idx % sizePattern.length];

          return (
            <RevealSection
              key={item.id}
              className={sizeClasses[size]}
              y={30 + (idx % 5) * 10}
              duration={1}
            >
              <div className="group relative w-full h-full overflow-hidden rounded-2xl border border-ink/10 shadow-md">
                <div
                  className="absolute inset-0  transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${item.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-xs font-mono text-warm-white/70 uppercase tracking-widest">
                      {item.subtitle}
                    </p>
                    <h3 className="text-warm-white text-xl font-display font-semibold">{item.title}</h3>
                  </div>
                </div>
              </div>
            </RevealSection>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;