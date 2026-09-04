'use client';

import React, { useEffect, useRef, useState } from 'react';

const navLinks = [
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'Classes', href: '#classes' },
  { label: 'Instructor', href: '#instructor' },
  { label: 'Studio', href: '#gallery' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Reviews', href: '#testimonials' },
];

const Nav: React.FC = () => {
  const navRef = useRef<HTMLElement>(null);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);

      if (currentY > lastScrollY.current && currentY > 120) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-warm-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
      style={{
        transform: hidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.35s ease, background-color 0.3s ease',
      }}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-5">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-ink">
          Revival Pilates
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/80 hover:text-olive transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="#book" className="cta cta-olive">
            Book a Class
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className="block w-6 h-0.5 bg-ink transition-transform"
            style={{ transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }}
          />
          <span
            className="block w-6 h-0.5 bg-ink transition-opacity"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-6 h-0.5 bg-ink transition-transform"
            style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }}
          />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col gap-1 px-6 pb-6 bg-warm-white">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 text-base font-medium text-ink border-b border-ink/10"
            >
              {link.label}
            </a>
          ))}
          <a href="#book" onClick={() => setMenuOpen(false)} className="cta cta-olive mt-4">
            Book a Class
          </a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
