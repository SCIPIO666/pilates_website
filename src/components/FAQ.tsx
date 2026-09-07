'use client';

import React, { useState } from 'react';
import RevealSection from '@/components/RevealSection';
import AnimatedHeading from '@/components/AnimatedHeading';

interface FaqItem { q: string; a: string; }

const faqs: FaqItem[] = [
  { q: 'Should I start with a class or a membership?', a: 'A single class or 5-pack is the easiest way to try Reformer or Mat before committing — most clients switch after their third visit.' },
  { q: 'How often should I come to see results?', a: 'Most clients notice a shift in posture and core strength within 2–3 sessions per week over 4–6 weeks.' },
  { q: 'Can I switch from class packages to a membership later?', a: 'Yes — unused classes in a pack can be credited toward your first month of Monthly Unlimited.' },
  { q: 'Does a membership lock me in long term?', a: 'No. Monthly Unlimited is billed month to month and can be paused or cancelled anytime.' },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-warm-white py-24 px-6 md:px-16">
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