# Revival Pilates — Rework Changelog

## New components
- `RevealSection.tsx` — reusable scroll-triggered fade/slide/scale wrapper (GSAP + ScrollTrigger)
- `AnimatedHeading.tsx` — reusable letter-spacing "tracking-in" heading reveal
- `CtaButton.tsx` — single button component (`variant`: white/olive/dark/outline), replaces raw `<a className="cta ...">` markup site-wide
- `Booking.tsx` — new booking form section (`id="book"`), intro-offer side panel
- `FAQ.tsx` — new accordion section
- `useTransitionReveal.ts` — hook that toggles `.is-active` on scroll, drives `section-transitions.css`


## Signature transitions (`section-transitions.css`)
Attribute-driven section entrances via `data-transition-style`:
`in:circle`, `in:circle:hesitate`, `in:blob`, `in:wipe:diagonal`, `out:circle`
- `in:circle` / `in:blob` / `in:wipe:diagonal` references  CSS vars (`--duration-slow`, `--ease-out`, etc.) — added a `:root` block defining them at the top of the file. `in:circle:hesitate` .

## Section-by-section
- **Philosophy** — now a coordinated GSAP timeline: image slides in from left, text from right, both with scale+opacity
- **Instructor** —  left/right timeline pattern + circular photo frame revealed via `in:circle:hesitate` clip-path + organic blob SVGs
- **Impact** — designed stat cards (centered, minimal, `font-heading` numerals) 

- **Pricing** — each tier card wrapped individually ;
- **Booking** — new section, `id="book"` moved here from `Footer` (all existing `#book` links now land here)--the primary goal of the site
- **FAQ** — new accordion, with signature reveal

## Design tokens
- site still runs the original olive/bone/warm-white palette from `tailwind.config.js`. 

## Fixes
- `tailwind.config.js` — added `./src/data/**/*.{js,ts,jsx,tsx}` to `content`; without it, any class name living only in `siteData.ts` (e.g. `positionClass`, `offsetClass`) was never generated, so cards/gallery items silently ignored their  styling


## Still open
- **Booking form doesn't send anywhere yet** — `handleSubmit` only sets local state. Needs email wired in before it's a real lead capture.
- All photos added anew ,can change  these and the wording of any section at will.