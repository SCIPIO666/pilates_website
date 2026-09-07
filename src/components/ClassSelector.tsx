'use client';

import React, { useState, useEffect, useRef } from 'react';
import classReformer from '../../public/classes/classes (1).webp';
import classMat from '../../public/classes/classes (2).webp';
import classGroup from '../../public/classes/classes (3).webp';
import classPrivate from '../../public/classes/classes (4).webp';

interface ClassOption {
  key: string;
  title: string;
  description: string;
  image: string;
}

const classOptions: ClassOption[] = [
  {
    key: 'reformer',
    title: 'Reformer',
    description: 'Controlled resistance, precise movement',
    image: classReformer.src,
  },
  {
    key: 'mat',
    title: 'Mat',
    description: 'Core work, controlled breathing',
    image: classMat.src,
  },
  {
    key: 'group',
    title: 'Group',
    description: 'Stability work, shared energy',
    image: classGroup.src,
  },
  {
    key: 'private',
    title: 'Private',
    description: 'One-on-one, personalised guidance',
    image: classPrivate.src,
  },
];

const ClassSelector: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [revealed, setRevealed] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    classOptions.forEach((_, i) => {
      const t = setTimeout(() => {
        setRevealed((prev) => [...prev, i]);
      }, 120 * i);
      timers.push(t);
    });
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleSelect = (index: number) => {
    if (index !== activeIndex) setActiveIndex(index);
  };

  return (
    <div ref={containerRef} className="w-full">
      {/* mobile: full width cards,snap on click */}
      {isMobile ? (
        <div
          className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {classOptions.map((option) => (
            <div
              key={option.key}
              className="relative flex-shrink-0 w-[78vw] h-[360px] snap-start rounded-none overflow-hidden img-placeholder"
              style={{
                backgroundImage: `url('${option.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute left-0 right-0 bottom-0 p-5">
                <h3 className="text-white text-xl font-semibold mb-1">{option.title}</h3>
                <p className="text-white/80 text-sm leading-snug">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* desktop: interactive expand-on-click/hover  */
        <div className="flex w-full h-[460px] items-stretch overflow-hidden gap-1">
          {classOptions.map((option, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={option.key}
                onClick={() => handleSelect(index)}
                onMouseEnter={() => handleSelect(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') handleSelect(index);
                }}
                aria-pressed={isActive}
                aria-label={`${option.title} class`}
                className="img-placeholder relative flex flex-col justify-end overflow-hidden cursor-pointer transition-all duration-700 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-olive"
                style={{
                  backgroundImage: `url('${option.image}')`,
                  backgroundSize: isActive ? 'cover' : 'auto 130%',
                  backgroundPosition: 'center',
                  opacity: revealed.includes(index) ? 1 : 0,
                  transform: revealed.includes(index) ? 'translateY(0)' : 'translateY(24px)',
                  flex: isActive ? '5 1 0%' : '1 1 0%',
                  borderRight: index < classOptions.length - 1 ? '1px solid rgba(245,240,235,0.4)' : 'none',
                }}
              >
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-700"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 45%, transparent 70%)',
                    opacity: isActive ? 1 : 0.55,
                  }}
                />

                <div className="relative z-10 p-6 w-full">
                  <div
                    className="transition-all duration-500 ease-in-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateX(0)' : 'translateX(16px)',
                    }}
                  >
                    <h3 className="text-white text-2xl font-semibold mb-1 whitespace-nowrap">
                      {option.title}
                    </h3>
                    <p className="text-white/80 text-sm leading-snug max-w-[220px]">
                      {option.description}
                    </p>
                  </div>

                  {!isActive && (
                    <div
                      className="text-white text-sm font-semibold tracking-wide"
                      style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed',
                        transform: 'rotate(180deg)',
                      }}
                    >
                      {option.title}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ClassSelector;
