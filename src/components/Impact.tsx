'use client';

import React from 'react';
import RevealSection from '@/components/RevealSection';
import { impactData } from '@/data/siteData';

const Impact: React.FC = () => {
  return (
    <section id="impact" className="bg-bone py-24 px-6 md:px-16 relative overflow-hidden">
      {/* background watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-5">
        <h2 className="text-[14vw] font-display font-bold text-ink whitespace-nowrap tracking-tighter uppercase">
          {impactData.watermark}
        </h2>
      </div>

      {/* header */}
      <RevealSection className="max-w-xl mb-16 relative z-10">
        <p className="label-xs text-olive mb-2">{impactData.eyebrow}</p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-ink">
          {impactData.title}
        </h2>
      </RevealSection>

      {/* asymmetric grid*/}
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10">
        {/* Left / Center: Asymmetric Stat Cards Grid */}
        <div className="lg:col-span-8 grid md:grid-cols-12 gap-6 md:gap-8">
          {impactData.stats.map((stat, idx) => (
            <RevealSection key={stat.id} className={stat.positionClass} y={30 + idx * 15}>
              {/* Uiverse.io corner-reveal card, retextured to site theme */}
              <div
                className="group relative z-0 overflow-hidden rounded-2xl border border-ink/10 shadow-lg
                  transition-shadow duration-500 hover:shadow-xl p-8 md:p-10 flex flex-col justify-between h-full
                  bg-gradient-to-b from-warm-white to-bone
                  before:content-[''] before:absolute before:-z-10 before:-top-4 before:-right-4
                  before:h-8 before:w-8 before:rounded-full before:origin-center
                  before:bg-gradient-to-br before:from-olive before:to-olive-mid
                  before:scale-100 before:transition-transform before:duration-500 before:ease-out
                  group-hover:before:scale-[28]"
              >
                {/* Corner arrow tab */}
                <div className="absolute top-0 right-0 flex items-center justify-center w-8 h-8 rounded-[0_4px_0_32px] bg-gradient-to-br from-olive-light to-olive">
                  <span className="font-mono text-warm-white text-sm -mt-1 -mr-1">→</span>
                </div>

                <div>
                  <span className="text-olive text-xs font-mono uppercase tracking-widest block mb-4 transition-colors duration-500 group-hover:text-warm-white">
                    {stat.label}
                  </span>
                  <h3 className="text-4xl md:text-5xl font-display font-bold text-ink mb-4 tracking-tight transition-colors duration-500 group-hover:text-warm-white">
                    {stat.number}
                  </h3>
                </div>
                <p className="text-ink/70 text-sm md:text-base leading-relaxed transition-colors duration-500 group-hover:text-warm-white/90">
                  {stat.description}
                </p>
              </div>
            </RevealSection>
          ))}
        </div>

        {/* Right: Portrait Image Card with Circular Mentor Stamp */}
        <RevealSection className="lg:col-span-4 relative flex justify-center" y={40}>
          <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-warm-white group">
            <div
              className="w-full aspect-[3/4] img-placeholder transition-transform duration-700 group-hover:scale-105"
              style={{
                backgroundImage: `url('${impactData.image}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />

            {/* Circular Mentor Watermark Badge */}
            <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-olive/90 backdrop-blur-sm text-warm-white p-2 border border-warm-white/30 flex items-center justify-center text-center shadow-lg transform rotate-12">
              <span className="text-[9px] font-mono uppercase font-bold tracking-tighter leading-tight">
                Certified • Mentor
              </span>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent flex items-end p-6">
              <p className="text-warm-white font-display text-lg font-medium">
                Mastery in motion.
              </p>
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default Impact;