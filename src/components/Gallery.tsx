'use client';

import React from 'react';
import RevealSection from '@/components/RevealSection';
import { galleryData } from '@/data/siteData';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="bg-bone py-24 px-6 md:px-16 overflow-hidden">
      {/* Header */}
      <RevealSection className="max-w-xl mb-16">
        <p className="label-xs text-olive mb-2">STUDIO ARCHITECTURE</p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-ink">
          Designed for quiet focus &amp; reflection.
        </h2>
      </RevealSection>

      {/* Atelier Gymnase Asymmetric Grid Layout */}
      <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {galleryData.map((item, idx) => {
          const colSpan = idx % 3 === 0 ? 'lg:col-span-7' : idx % 3 === 1 ? 'lg:col-span-5' : 'lg:col-span-12';

          return (
            <RevealSection
              key={item.id}
              className={`${colSpan} ${item.offsetClass || ''}`}
              y={30 + idx * 10}
              duration={1}
            >
              <div className="group relative overflow-hidden rounded-2xl border border-ink/10 shadow-md">
                <div
                  className={`w-full ${item.aspect} img-placeholder transition-transform duration-700 ease-out group-hover:scale-105`}
                  style={{
                    backgroundImage: `url('${item.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-xs font-mono text-warm-white/70 uppercase tracking-widest">{item.subtitle}</p>
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
