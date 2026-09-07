'use client';

import React from 'react';
import RevealSection from '@/components/RevealSection';
import { impactData } from '@/data/siteData';

const Impact: React.FC = () => {
  return (
    <section id="impact" className="bg-bone py-24 px-6 md:px-16 relative overflow-hidden">

      <RevealSection className="max-w-xl mb-16 relative z-10">
        <p className="label-xs text-olive mb-2">{impactData.eyebrow}</p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-ink">
          {impactData.title}
        </h2>
      </RevealSection>

      {/* grid*/}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">

        <div className="lg:col-span-8 grid md:grid-cols-12 gap-6 md:gap-8">
          {impactData.stats.map((stat, idx) => (
            <RevealSection key={stat.id} className={stat.positionClass} y={30 + idx * 15} scale={0.5} delay={idx * 0.15}>
              <div
                className="rounded-2xl bg-white/50 shadow-token-md border border-border
                  p-10 md:p-12 flex flex-col items-center text-center h-full"
              >
                <h3 className="font-heading font-bold text-ink text-5xl md:text-6xl mb-4 tracking-tight">
                  {stat.number}
                </h3>
                <p className="text-ink-muted text-sm md:text-base leading-relaxed max-w-[220px]">
                  {stat.description}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>


        {/* impact image */}
        <RevealSection className="lg:col-span-4 relative flex justify-center" y={40}>
          <div
            className="absolute -top-6 -right-6 w-full h-full rounded-2xl -z-10"
            style={{
              backgroundImage: 'radial-gradient(var(--color-border) 1.5px, transparent 1.5px)',
              backgroundSize: '14px 14px',
            }}
          />

          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-token-lg border-4 border-surface">
            <div
              className="w-full aspect-[3/4] img-placeholder"
              style={{
                backgroundImage: `url('${impactData.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            {/* subtle badge*/}
            <div
              className="absolute top-5 right-5 w-16 h-16 rounded-full bg-surface/90 backdrop-blur-sm
                border border-dashed border-ink/30 flex items-center justify-center text-center"
            >
              <span className="text-[9px] font-body uppercase font-semibold tracking-tight text-ink-muted leading-tight">
                Certified<br />Mentor
              </span>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default Impact;