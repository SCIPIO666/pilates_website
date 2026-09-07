'use client';

import React, { useState } from 'react';
import RevealSection from '@/components/RevealSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import CtaButton from '@/components/CtaButton';
import { classPacks, memberships } from '@/data/siteData';

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'packs' | 'memberships'>('packs');

  const currentTiers = activeTab === 'packs' ? classPacks : memberships;

  return (
    <section id="pricing" className="bg-warm-white py-20 px-6 md:px-12">
      <RevealSection className="max-w-xl mx-auto text-center mb-12">
        <p className="label-xs mb-3">Rates &amp; Subscriptions</p>
        <AnimatedHeading className="mb-4">Invest in your movement practice.</AnimatedHeading>
        <p className="text-ink/70 max-w-md mx-auto">
          Flexible options whether you are starting your journey or committing to a regular studio routine.
        </p>

        {/* tab*/}
        <div className="inline-flex p-1 mt-8 bg-bone/80 rounded-full border border-ink/10">
          <button
            onClick={() => setActiveTab('packs')}
            className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'packs' ? 'bg-olive text-white shadow-sm' : 'text-ink/70 hover:text-ink'
            }`}
          >
            Class Packs
          </button>
          <button
            onClick={() => setActiveTab('memberships')}
            className={`px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'memberships' ? 'bg-olive text-white shadow-sm' : 'text-ink/70 hover:text-ink'
            }`}
          >
            Memberships &amp; Privates
          </button>
        </div>
      </RevealSection>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-stretch">
        {currentTiers.map((tier, idx) => (
          <RevealSection key={tier.key} scale={0.6} y={30} delay={idx * 0.12}>
            <div
              className={`relative flex flex-col justify-between h-full p-8 rounded-none border transition-all duration-300 ${
                tier.popular
                  ? 'bg-bone/90 border-olive shadow-md'
                  : 'bg-bone/40 border-ink/10 hover:border-ink/30'
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-olive text-white label-xs px-3 py-1 rounded-full text-[10px]">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-xl font-semibold mb-2 text-ink">{tier.name}</h3>
                <p className="text-xs text-ink/60 mb-6">{tier.subtitle}</p>

                <div className="mb-8">
                  <span className="font-display text-3xl md:text-4xl font-bold text-ink">{tier.price}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-ink/80 leading-relaxed">
                      <span className="text-olive font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <CtaButton href="#book" variant={tier.popular ? 'olive' : 'outline'} className="w-full justify-center">
                {tier.ctaText}
              </CtaButton>
            </div>
          </RevealSection>
        ))}
      </div>
    </section>
  );
};

export default Pricing;