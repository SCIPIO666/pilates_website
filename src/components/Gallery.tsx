'use client';

import React from 'react';
import Image from 'next/image';
import RevealSection from '@/components/RevealSection';
import { galleryData } from '@/data/siteData';

type BlockSize = 'sm' | 'wide' | 'tall' | 'lg';

const sizeClasses: Record<BlockSize, string> = {
  sm: 'col-span-2 row-span-3 md:col-span-2 md:row-span-3 lg:col-span-3 lg:row-span-3',
  wide: 'col-span-2 row-span-3 md:col-span-4 md:row-span-3 lg:col-span-5 lg:row-span-3',
  tall: 'col-span-2 row-span-4 md:col-span-2 md:row-span-5 lg:col-span-3 lg:row-span-6',
  lg: 'col-span-2 row-span-5 md:col-span-4 md:row-span-5 lg:col-span-5 lg:row-span-6',
};

const sizePattern: BlockSize[] = ['sm', 'wide', 'tall', 'sm', 'wide', 'sm', 'tall', 'lg', 'wide', 'sm', 'sm', 'tall'];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="bg-bone py-24 px-6 md:px-16 overflow-hidden">
      <RevealSection className="max-w-xl mb-16">
        <p className="label-xs text-olive mb-2">STUDIO</p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-ink">
          Designed for quiet focus &amp; reflection.
        </h2>
      </RevealSection>

      <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 grid-flow-row-dense auto-rows-[56px] gap-4 md:gap-6">
        {galleryData.map((item, idx) => {
          const size = sizePattern[idx % sizePattern.length];
          return (
            <RevealSection
              key={item.id}
              className={sizeClasses[size]}
              y={30 + (idx % 5) * 10}
              scale={0.4}
              duration={1}
              delay={(idx % 6) * 0.08}
            >
              <div className="group relative w-full h-full overflow-hidden rounded-2xl border border-ink/10 shadow-md">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  placeholder="blur"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 15vw"
                  loading="lazy"
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