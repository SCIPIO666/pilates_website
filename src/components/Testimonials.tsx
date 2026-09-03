'use client';

import React, { useState } from 'react';

const testimonials = [
  {
    key: 'fathiya',
    name: 'Fathiya Jama',
    avatar: '/images/testimonials/testimonial-fathiya.jpg',
    quote:
      "It was my first time trying Pilates, and I had such a lovely experience! Even though my session was short, I really enjoyed it. The trainer was very helpful, patient, and made me feel comfortable throughout. Both Maya and Leila were so … More",
  },
  {
    key: 'morganne',
    name: 'Morganne Jumper',
    avatar: '/images/testimonials/testimonial-morganne.jpg',
    quote: 'I love this Pilates place!!! It’s so beautiful!',
  },
  {
    key: 'tanisha',
    name: 'Tanisha Robinson',
    avatar: '/images/testimonials/testimonial-tanisha.jpg',
    quote:
      'Revival feels like a spa retreat the moment you enter. From the decor & lighting, to the ambiance & welcoming energy of the staff, it was everything I hoped it would be. To top it off, the Pilates class was the perfect balance of challenging and restorative. I’ve found my second home. ❤️',
  },
  {
    key: 'karyn',
    name: 'KARYN RULE',
    avatar: '/images/testimonials/testimonial-karyn.jpg',
    quote:
      'Pleasant ambience and staff. Intuitive trainer and good variety in sessions ensuring full body workout. Enjoyable and challenging.....',
  },
];

const Testimonials: React.FC = () => {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section id="testimonials" className="bg-warm-white">
      <div className="mb-10 md:mb-14 max-w-xl">
        <p className="label-xs mb-4">Reviews</p>
        <h2>What our clients say.</h2>
      </div>

      <div className="max-w-2xl">
        <div
          className="img-placeholder w-14 h-14 rounded-full mb-6"
          style={{
            backgroundImage: `url('${current.avatar}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <p className="text-lg md:text-xl text-ink leading-relaxed mb-6">
          {current.quote}
        </p>
        <p className="font-semibold text-ink">{current.name}</p>

        <div className="flex gap-2 mt-10">
          {testimonials.map((t, i) => (
            <button
              key={t.key}
              onClick={() => setActive(i)}
              aria-label={`Show review from ${t.name}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: active === i ? '28px' : '8px',
                backgroundColor: active === i ? '#5C6B3C' : '#D6CEC2',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
