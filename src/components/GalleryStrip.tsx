'use client';

import React from 'react';
import RevealSection from '@/components/RevealSection';
import { galleryStripData } from '@/data/siteData';

const GalleryStrip: React.FC = () => {
  return (
    <section className="bg-olive py-16 px-4 md:px-12 overflow-hidden border-t border-warm-white/10 text-warm-white">
      {/* Header */}
      <RevealSection className="text-center mb-10">
        <p className="font-display text-2xl md:text-4xl text-warm-white tracking-wide font-light">
          @revival <span className="text-olive-light">· studio</span>
        </p>
      </RevealSection>

      {/* Mindoora Arch-Shaped Gallery Strip */}
      <RevealSection className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 items-end max-w-7xl mx-auto" y={30}>
        {galleryStripData.map((item, idx) => (
          <div
            key={item.id}
            className={`group relative overflow-hidden rounded-t-[100px] border border-warm-white/20 shadow-xl transition-all duration-500 hover:-translate-y-3 ${
              idx % 2 === 1 ? 'h-[320px] md:h-[420px]' : 'h-[280px] md:h-[360px]'
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
              <span className="text-warm-white text-xs font-mono uppercase tracking-wider">{item.title}</span>
            </div>
          </div>
        ))}
      </RevealSection>
    </section>
  );
};

export default GalleryStrip;
