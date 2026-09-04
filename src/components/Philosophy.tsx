import React from 'react';
import philosophyImg from '../../public/aboutusHero.webp';

const Philosophy: React.FC = () => {
  return (
    <section id="philosophy" className="grid md:grid-cols-2 gap-10 md:gap-16 items-center bg-warm-white">
      <div
        className="img-placeholder w-full h-[340px] md:h-[480px]"
        style={{
          backgroundImage: `url('${philosophyImg.src}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="max-w-md">
        <p className="label-xs mb-4">Our Philosophy</p>
        <h2 className="mb-6">Movement that meets you where you are.</h2>
        <p className="mb-4">
          Revival was built on the belief that Pilates is not about pushing harder — it's about
          moving with intention. Every session is designed to restore alignment, build quiet
          strength, and leave you feeling more at home in your body.
        </p>
        <p className="mb-8">
          Our studio blends considered design with expert instruction, so the space itself
          becomes part of the practice — calm, warm, and unhurried.
        </p>
        <a href="#classes" className="cta cta-olive">
          Explore Our Classes
        </a>
      </div>
    </section>
  );
};

export default Philosophy;
