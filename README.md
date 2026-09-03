# Revival Pilates — Website

Next.js 14 + TypeScript + Tailwind CSS. Built from the approved wireframe, wired end-to-end —
the only thing missing is real photography.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## ⚠️ No network access when this was built

This project was generated in a sandboxed environment with no internet access, so
`npm install` was **not run or verified here**. The code follows standard Next.js 14
(pages router) + Tailwind conventions and should install cleanly, but please run
`npm install && npm run dev` as your first step and flag anything that errors.

## Deploy

```bash
git init
git add .
git commit -m "Initial commit — Revival Pilates"
git remote add origin <your-repo-url>
git push -u origin main
```

Then connect the repo to Vercel or Netlify — no config changes needed, both auto-detect Next.js.

---

## 🖼️ Image Manifest — drop files into `public/images/`

Paste your files into the matching subfolder using **these exact filenames**. Every component
already references these paths, so nothing else needs to change — just drop the image in and
refresh.

| Folder | Filename | Used for | Suggested size |
|---|---|---|---|
| `public/images/hero/` | `hero-main.jpg` | Full-bleed hero background | 1920×1080 min, landscape |
| `public/images/philosophy/` | `philosophy-hero.jpg` | Philosophy section image | 1000×1200, portrait-ish |
| `public/images/classes/` | `class-reformer.jpg` | Reformer class card | 800×1000, portrait |
| `public/images/classes/` | `class-mat.jpg` | Mat class card | 800×1000, portrait |
| `public/images/classes/` | `class-group.jpg` | Group class card | 800×1000, portrait |
| `public/images/classes/` | `class-private.jpg` | Private class card | 800×1000, portrait |
| `public/images/instructor/` | `instructor-maya.jpg` | Maya's portrait | 3:4 ratio, e.g. 900×1200 |
| `public/images/gallery/` | `gallery-01.jpg` | Studio wide shot (large tile) | 1200×1200 |
| `public/images/gallery/` | `gallery-02.jpg` | Equipment detail | 800×800 |
| `public/images/gallery/` | `gallery-03.jpg` | Mirror / light detail | 800×800 |
| `public/images/gallery/` | `gallery-04.jpg` | Studio corner, plants | 800×800 |
| `public/images/gallery/` | `gallery-05.jpg` | Window / interior light | 800×800 |
| `public/images/testimonials/` | `testimonial-fathiya.jpg` | Fathiya Jama avatar | 160×160, square |
| `public/images/testimonials/` | `testimonial-morganne.jpg` | Morganne Jumper avatar | 160×160, square |
| `public/images/testimonials/` | `testimonial-tanisha.jpg` | Tanisha Robinson avatar | 160×160, square |
| `public/images/testimonials/` | `testimonial-karyn.jpg` | Karyn Rule avatar | 160×160, square |

**11 image slots total** (1 hero + 1 philosophy + 4 classes + 1 instructor + 5 gallery) **+ 4 testimonial avatars.**

Until real images are added, every slot renders as a neutral placeholder block (`.img-placeholder`
in `globals.css`) so the layout stays correct and nothing looks broken in the meantime.

---

## Sections built

1. **Nav** — scroll-reveal (hides on scroll down, reappears on scroll up), mobile menu
2. **Hero** — full-bleed, subtle Ken Burns zoom (desktop only)
3. **Philosophy** — image + copy, verbatim brand language
4. **Classes** — Reformer / Mat / Group / Private
   - Desktop: interactive expand-on-click/hover selector
   - Mobile: horizontal scroll, snap-to-card
5. **Instructor** — Maya, Pilates Instructor (not owner — bio written accordingly)
6. **Gallery** — 5 images, masonry grid on desktop, horizontal scroll on mobile
7. **Testimonials** — 4 real reviews (Fathiya Jama, Morganne Jumper, Tanisha Robinson, Karyn Rule),
   wording kept verbatim from the client's Google reviews
8. **Footer** — booking CTA + contact links

## Notes

- All copy in the wireframe was kept verbatim except Maya's bio, which was rewritten to reflect
  she is the instructor, not the studio founder (per your instruction).
- Colors, type scale, and motion follow the studio's calm/premium tone — olive, bone, warm white,
  DM Sans + Bricolage Grotesque.
