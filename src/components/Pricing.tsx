'use client';

import React, { useState } from 'react';
import RevealSection from '@/components/RevealSection';

interface PricingTier {
  key: string;
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

const classPacks: PricingTier[] = [
  {
    key: 'drop-in',
    name: 'Single Class',
    price: 'KES 3,500',
    subtitle: 'Valid for 14 days',
    features: ['Access to Reformer or Mat class', 'Complimentary grip socks on first visit', 'Locker & amenities access'],
    ctaText: 'Book Single Class',
  },
  {
    key: 'pack-5',
    name: '5-Class Pack',
    price: 'KES 15,000',
    subtitle: 'Valid for 2 months',
    popular: true,
    features: [
      'KES 3,000 per class',
      'Priority booking window',
      'Mat & Reformer flexibility',
      'Transferable up to 1 guest session',
    ],
    ctaText: 'Buy 5-Pass',
  },
  {
    key: 'pack-10',
    name: '10-Class Pack',
    price: 'KES 28,000',
    subtitle: 'Valid for 4 months',
    features: [
      'KES 2,800 per class',
      '14-day advance booking',
      'Full access to all group sessions',
      '1 complimentary Private consultation',
    ],
    ctaText: 'Buy 10-Pass',
  },
];

const memberships: PricingTier[] = [
  {
    key: 'monthly-unlimited',
    name: 'Monthly Unlimited',
    price: 'KES 35,000',
    subtitle: 'Billed monthly · Cancel anytime',
    popular: true,
    features: [
      'Unlimited Mat & Reformer classes',
      'Dedicated locker reservation',
      '10% off private sessions & merch',
      'Guest passes (2 per month)',
    ],
    ctaText: 'Join Membership',
  },
  {
    key: 'private-pack',
    name: 'Private 1-on-1 (5 Sessions)',
    price: 'KES 40,000',
    subtitle: 'Valid for 3 months',
    features: [
      'Personalised Movement Assessment',
      'Dedicated 60-min solo instructor time',
      'Customised progression plan',
      'Flexible scheduling with Maya',
    ],
    ctaText: 'Book Privates',
  },
];

const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'packs' | 'memberships'>('packs');

  const currentTiers = activeTab === 'packs' ? classPacks : memberships;

  return (
    <section id="pricing" className="bg-warm-white py-20 px-6 md:px-12">
      <RevealSection className="max-w-xl mx-auto text-center mb-12">
        <p className="label-xs mb-3">Rates &amp; Abonnements</p>
        <h2 className="mb-4">Invest in your movement practice.</h2>
        <p className="text-ink/70 max-w-md mx-auto">
          Flexible options whether you are starting your journey or committing to a regular studio routine.
        </p>

        {/* Tab Selector */}
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

      <RevealSection className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 items-stretch" y={40}>
        {currentTiers.map((tier) => (
          <div
            key={tier.key}
            className={`relative flex flex-col justify-between p-8 rounded-none border transition-all duration-300 ${
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

            <a
              href="#book"
              className={`cta w-full justify-center text-center py-3 ${
                tier.popular ? 'cta-olive border-olive' : 'border-ink/30'
              }`}
            >
              {tier.ctaText}
            </a>
          </div>
        ))}
      </RevealSection>
    </section>
  );
};

export default Pricing;
