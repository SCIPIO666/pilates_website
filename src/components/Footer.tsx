import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="book" className="bg-olive text-warm-white">
      {/* <div className="max-w-2xl">
        <p className="label-xs text-white/70 mb-4">Ready to move?</p>
        <h2 className="text-white mb-8">Book your first class with Revival.</h2>
        <a href="#" className="cta cta-white mb-16 inline-flex">
          Book a Class
        </a>
      </div> */}

      <div className="flex flex-col md:flex-row justify-between gap-8 pt-10 border-t border-white/15 text-sm text-white/70">
        <p>Revival Pilates · Nairobi</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">WhatsApp</a>
          <a href="#" className="hover:text-white transition-colors">Directions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
