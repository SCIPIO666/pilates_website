'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import { reviewsData } from '@/data/siteData';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const cardThemes = [
  { bg: 'bg-olive', border: 'border-warm-white/20', text: 'text-warm-white', sub: 'text-warm-white/70', star: 'text-clay', meta: 'text-warm-white/60' },
  { bg: 'bg-bone', border: 'border-ink/10', text: 'text-ink', sub: 'text-ink/60', star: 'text-olive', meta: 'text-ink/40' },
];

const Testimonials: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const stage = stageRef.current;
    const cards = cardRefs.current.filter((el): el is HTMLDivElement => el !== null);
    if (!stage || cards.length === 0) return;

    const ctx = gsap.context(() => {
      // Animista "tilt-in-fwd-tr" start pose for every card: rotated back in
      // 3D space, flung up-and-right, skewed, invisible. Card 0 snaps
      // straight to its settled pose so the section doesn't open empty.
      cards.forEach((card, i) => {
        gsap.set(card, {
          rotationY: 20,
          rotationX: 35,
          x: 300,
          y: -300,
          skewX: -35,
          skewY: 10,
          opacity: 0,
          xPercent: 0,
          yPercent: 0,
          scale: 1,
          rotation: 0,
          zIndex: i + 1,
        });
      });
      gsap.set(cards[0], { rotationY: 0, rotationX: 0, x: 0, y: 0, skewX: 0, skewY: 0, opacity: 1 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stage,
          start: 'top top',
          end: () => `+=${(cards.length - 1) * window.innerHeight}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      for (let i = 1; i < cards.length; i++) {
        const label = `card-${i}`;

        // Card entry: tilt-in-fwd-tr — settles from its rotated/skewed
        // off-pose into flat, centered, and fully visible.
        tl.to(
          cards[i],
          {
            rotationY: 0,
            rotationX: 0,
            x: 0,
            y: 0,
            skewX: 0,
            skewY: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
          },
          label
        );

        // Every card already on stage gets nudged one notch deeper into the
        // side-stack at the same time.
        for (let j = 0; j < i; j++) {
          const depth = i - j;
          tl.to(
            cards[j],
            {
              xPercent: depth * 16,
              yPercent: depth * 8,
              scale: 1 - depth * 0.05,
              rotation: -depth * 5,
              duration: 1,
              ease: 'power2.inOut',
            },
            label
          );
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="testimonials" ref={sectionRef} className="bg-warm-white relative overflow-hidden">
      <div ref={stageRef} className="relative h-screen flex flex-col justify-center px-6 md:px-16 py-16">
        {/* watermark — infinite x-axis marquee (reuses the marquee-x keyframe from globals.css) */}
        <div className="absolute inset-0 flex items-center pointer-events-none select-none overflow-hidden opacity-10">
          <div className="flex w-max animate-[marquee-x_28s_linear_infinite]">
            <h2 className="text-[12vw] font-display font-bold text-ink whitespace-nowrap tracking-tighter pr-12">
              REVIVAL . PILATES . REVIVAL . PILATES
            </h2>
            <h2 className="text-[12vw] font-display font-bold text-ink whitespace-nowrap tracking-tighter pr-12">
              REVIVAL . PILATES . REVIVAL . PILATES
            </h2>
          </div>
        </div>

        {/* Top Bar Header & Stat */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 relative z-10">
          <div>
            <p className="label-xs text-olive mb-2">REVIEWS &amp; FEEDBACK</p>
            <h2 className="text-3xl md:text-5xl font-display text-ink font-semibold">What our community says.</h2>
          </div>

          <div className="mt-6 md:mt-0 text-left md:text-right">
            <div className="text-4xl md:text-6xl font-display font-bold text-olive">98%</div>
            <p className="text-xs font-mono uppercase tracking-widest text-ink/60">Client Retention</p>
          </div>
        </div>

        {/* card stack */}
        <div
          className="relative w-full max-w-lg mx-auto h-[440px] md:h-[400px]"
          style={{ perspective: 1200 }}
        >
          {reviewsData.map((rev, idx) => {
            const theme = cardThemes[idx % cardThemes.length];

            return (
              <div
                key={rev.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className={`absolute inset-0 p-8 md:p-10 rounded-2xl border shadow-2xl ${theme.bg} ${theme.border}`}
                style={{ willChange: 'transform, opacity' }}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`flex gap-1 text-sm ${theme.star}`}>
                    {Array.from({ length: rev.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className={`text-xs font-mono ${theme.meta}`}>
                    0{idx + 1} / 0{reviewsData.length}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-xl overflow-hidden border-2 border-warm-white/20 img-placeholder flex-shrink-0"
                    style={{
                      backgroundImage: `url('${rev.avatar}')`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}
                  />
                  <div>
                    <h4 className={`font-semibold text-lg ${theme.text}`}>{rev.name}</h4>
                    <p className={`text-xs ${theme.sub}`}>{rev.role}</p>
                  </div>
                </div>

                <p className={`text-sm md:text-base leading-relaxed ${theme.sub}`}>"{rev.quote}"</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;