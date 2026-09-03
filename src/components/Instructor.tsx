import React from 'react';

const Instructor: React.FC = () => {
  return (
    <section id="instructor" className="grid md:grid-cols-2 gap-10 md:gap-16 items-center bg-warm-white">
      <div className="order-2 md:order-1 max-w-md">
        <p className="label-xs mb-4">Meet Your Instructor</p>
        <h2 className="mb-2">Maya</h2>
        <p className="label-xs mb-6 text-ink/50 normal-case tracking-normal font-medium">
          Pilates Instructor
        </p>
        <p className="mb-4">
          Maya brings a calm, attentive presence to every session, guiding each client with the
          patience to meet them exactly where they are. Clients often mention how comfortable and
          well cared for she makes them feel — especially in a first class.
        </p>
        <p className="mb-8">
          Whether it's a first Reformer session or a long-standing private client, Maya's approach
          stays the same: precise, encouraging, and fully present.
        </p>
        <a href="#book" className="cta cta-olive">
          Book with Maya
        </a>
      </div>
      <div
        className="order-1 md:order-2 img-placeholder w-full aspect-[3/4] max-w-sm mx-auto"
        style={{
          backgroundImage: "url('/images/instructor/instructor-maya.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
    </section>
  );
};

export default Instructor;
