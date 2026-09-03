'use client';

import React, { useEffect, useState } from 'react';

const galleryImages = [
  { key: 'gallery-01', src: '/images/gallery/gallery-01.jpg', size: 'large' },
  { key: 'gallery-02', src: '/images/gallery/gallery-02.jpg', size: 'medium' },
  { key: 'gallery-03', src: '/images/gallery/gallery-03.jpg', size: 'small' },
  { key: 'gallery-04', src: '/images/gallery/gallery-04.jpg', size: 'medium' },
  { key: 'gallery-05', src: '/images/gallery/gallery-05.jpg', size: 'medium' },
];

const sizeClasses: Record<string, string> = {
  large: 'md:col-span-2 md:row-span-2 h-[280px] md:h-full',
  medium: 'h-[280px] md:h-full',
  small: 'h-[280px] md:h-full',
};

const Gallery: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section id="gallery" className="bg-bone">
      <div className="mb-10 md:mb-14 max-w-xl">
        <p className="label-xs mb-4">The Studio</p>
        <h2>A space designed to slow you down.</h2>
      </div>

      {isMobile ? (
        <div
          className="flex gap-3 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {galleryImages.map((img) => (
            <div
              key={img.key}
              className="img-placeholder flex-shrink-0 w-[70vw] h-[300px] snap-start"
              style={{
                backgroundImage: `url('${img.src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-4 grid-rows-2 gap-3 h-[560px]">
          {galleryImages.map((img) => (
            <div
              key={img.key}
              className={`img-placeholder ${sizeClasses[img.size]}`}
              style={{
                backgroundImage: `url('${img.src}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Gallery;
