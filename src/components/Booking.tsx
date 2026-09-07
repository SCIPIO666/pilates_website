'use client';

import React, { useState, useRef } from 'react';
import RevealSection from '@/components/RevealSection';
import AnimatedHeading from '@/components/AnimatedHeading';
import CtaButton from '@/components/CtaButton';
import book from '../../public/book/book.webp';

const Booking: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', classType: 'Reformer', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const imageRef = useRef(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => setSubmitted(true);

  return (
    <section id="book" className="bg-bone py-24 px-6 md:px-16">
      <RevealSection className="max-w-xl mx-auto text-center mb-14">
        <p className="label-xs mb-3">Reserve Your Spot</p>
        <AnimatedHeading className="mb-4">Book your first session.</AnimatedHeading>
        <p className="text-ink/70 max-w-md mx-auto">
          Tell us a little about you and we'll confirm your class within 24 hours.
        </p>
      </RevealSection>

      <div className="max-w-5xl mx-auto grid md:grid-cols-5 gap-8 md:gap-12">
        <RevealSection className="md:col-span-3" scale={0.6} y={30}>
          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="bg-warm-white rounded-2xl border border-ink/10 shadow-md p-8 md:p-10 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="label-xs block mb-2">Full Name</label>
                <input required name="name" value={form.name} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ink/15 bg-white text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-olive" />
              </div>
              <div>
                <label className="label-xs block mb-2">Email</label>
                <input required type="email" name="email" value={form.email} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ink/15 bg-white text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-olive" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="label-xs block mb-2">Phone</label>
                <input required name="phone" value={form.phone} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ink/15 bg-white text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-olive" />
              </div>
              <div>
                <label className="label-xs block mb-2">Class Type</label>
                <select name="classType" value={form.classType} onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-ink/15 bg-white text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-olive">
                  <option>Reformer</option>
                  <option>Mat</option>
                  <option>Group</option>
                  <option>Private</option>
                </select>
              </div>
            </div>

            <div>
              <label className="label-xs block mb-2">Preferred Date</label>
              <input type="date" name="date" value={form.date} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-ink/15 bg-white text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-olive" />
            </div>

            <div>
              <label className="label-xs block mb-2">Message (optional)</label>
              <textarea name="message" rows={3} value={form.message} onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-ink/15 bg-white text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-olive" />
            </div>

            <CtaButton variant="olive" size="lg" className="w-full justify-center" onClick={handleSubmit}>
              {submitted ? 'Request Sent ✓' : 'Request Booking'}
            </CtaButton>
          </form>
        </RevealSection>

        <RevealSection className="md:col-span-2" scale={0.6} y={30} delay={0.15}>
          <div className="bg-olive text-warm-white rounded-2xl p-8 md:p-10 h-full flex flex-col justify-between">
            <div>
              <p className="label-xs text-olive-light mb-3">New Here?</p>
              <h3 className="font-display text-2xl md:text-3xl font-semibold mb-4">Start with an intro offer.</h3>
              <p className="text-warm-white/80 text-sm leading-relaxed mb-8">
                First class or first pack — beginners move better and build a routine that lasts.
              </p>
            </div>
            <div ref={imageRef} className="w-full h-[220px] md:h-[280px] overflow-hidden rounded-xl">
              <img
                src={book.src}
                alt="booking"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </RevealSection>
      </div>
    </section>
  );
};

export default Booking;