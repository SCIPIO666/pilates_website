'use client';

import React, { useState,useRef } from 'react';
import RevealSection from '@/components/RevealSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import  {useTransitionReveal} from '@/lib/useTransitionReveal'
import {faqs} from '@/data/siteData'

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useRef<HTMLElement>(null);
  useTransitionReveal(sectionRef);
  return (
    <section
      id="faq"
      ref={sectionRef}
      data-transition-style="in:circle:hesitate"
      className="bg-olive py-24 px-6 md:px-16"
    >
      <RevealSection className="max-w-2xl mx-auto text-center mb-12">
        <AnimatedHeading className="text-4xl md:text-5xl font-display">FAQ</AnimatedHeading>
      </RevealSection>

      <RevealSection className="max-w-2xl mx-auto rounded-2xl border border-ink/10 shadow-md overflow-hidden bg-white" scale={0.7}>
        {faqs.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={idx !== faqs.length - 1 ? 'border-b border-ink/10' : ''}>
              <button onClick={() => setOpenIndex(isOpen ? null : idx)} className="w-full flex items-center justify-between text-left px-6 py-5">
                <span className="font-semibold text-ink text-sm md:text-base">{item.q}</span>
                <span className={`transition-transform duration-300 text-ink ${isOpen ? 'rotate-90' : ''}`}>›</span>
              </button>
              <div className="grid transition-[grid-template-rows] duration-400 ease-out" style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}>
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-ink/70 text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </RevealSection>
    </section>
  );
};

export default FAQ;