import aboutusHero from '../../public/aboutusHero.webp';
import bg from '../../public/bg.webp';
import bio from '../../public/bio.webp';
import contactHero from '../../public/contactHero.webp';
import donationsHero1 from '../../public/donationsHero1.webp';
import eventsHero from '../../public/eventsHero.webp';
import galleryImg from '../../public/gallery.webp';
import galleryHero from '../../public/galleryHero.webp';
import heroBio from '../../public/heroBio.webp';
import homeHer03 from '../../public/homeHer03.webp';
import homeHero from '../../public/homeHero.webp';
import homeHero2 from '../../public/homeHero2.webp';
import juma from '../../public/juma.webp';
import mission from '../../public/mission.webp';
import newsHero from '../../public/newsHero.webp';
import pic from '../../public/pic.webp';
import shirtHero from '../../public/shirtHero.webp';
import vision from '../../public/vision.webp';

export interface ImpactStat {
  id: string;
  number: string;
  label: string;
  description: string;
  positionClass: string;
}

export const impactData = {
  eyebrow: 'STUDIO IMPACT & EXPERIENCE',
  title: 'Dedicated to movement mastery.',
  watermark: 'REVIVAL IMPACT',
  image: bio.src,
  stats: [
    {
      id: 'stat-1',
      number: '325+ hours',
      label: 'One-on-One Studio Sessions',
      description: 'Of individual practical training, body alignment assessments, and solo Reformer instruction.',
      positionClass: 'lg:col-span-6 md:translate-y-0',
    },
    {
      id: 'stat-2',
      number: '500+ hours',
      label: 'Supervised Teaching',
      description: 'Of hands-on instruction in our Nairobi studio, guiding real clients under Maya’s mentorship.',
      positionClass: 'lg:col-span-6 md:translate-y-10',
    },
    {
      id: 'stat-3',
      number: '150+ hours',
      label: 'Anatomy & Breathwork',
      description: 'Of specialized studies in hypermobility care, spinal decompression, and controlled breathing.',
      positionClass: 'lg:col-span-6 md:-translate-y-4',
    },
  ],
};

export interface ClassItem {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  bulletPoints: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle?: string;
  image: string;
  aspect: string;
  offsetClass?: string;
}

export const classesData: ClassItem[] = [
  {
    id: 'reformer',
    stepNumber: '{01}',
    title: 'Reformer Pilates',
    subtitle: 'Spring Resistance & Precise Core Alignment',
    description:
      'Controlled movement using carriage springs to restore posture, lengthen muscles, and build deep core stability under expert guidance.',
    image: eventsHero.src,
    bulletPoints: [
      'Spring resistance customization',
      'Posture restoration & spinal alignment',
      'Low-impact, high-precision strength',
    ],
  },
  {
    id: 'mat',
    stepNumber: '{02}',
    title: 'Mat Pilates Flow',
    subtitle: 'Core Engagement & Breathwork',
    description:
      'Ground-based practice strengthening the powerhouse through deliberate breathwork, fluid transitions, and bodyweight control.',
    image: contactHero.src,
    bulletPoints: [
      'Deep abdominal & back strengthening',
      'Fluid movement & breath synchronisation',
      'Adaptable for all fitness levels',
    ],
  },
  {
    id: 'group',
    stepNumber: '{03}',
    title: 'Group Reformer',
    subtitle: 'Intimate Class (Max 6 Reformists)',
    description:
      'Shared energy in a boutique studio setting with hands-on instructor cues ensuring proper form for every participant.',
    image: shirtHero.src,
    bulletPoints: [
      'Boutique environment (max 6 per class)',
      'Hands-on posture corrections',
      'Motivating group atmosphere',
    ],
  },
  {
    id: 'private',
    stepNumber: '{04}',
    title: 'Private 1-on-1 Sessions',
    subtitle: 'Tailored Solo Instruction with Maya',
    description:
      'One-on-one movement sessions customized for injury recovery, hypermobility care, or personalized progression goals.',
    image: donationsHero1.src,
    bulletPoints: [
      'Personalised body assessment',
      'Dedicated instructor attention',
      'Flexible booking & custom pacing',
    ],
  },
];

export const reviewsData: ReviewItem[] = [
  {
    id: 'fathiya',
    name: 'Fathiya Jama',
    role: 'Nairobi Client',
    avatar: juma.src,
    quote:
      "It was my first time trying Pilates, and I had such a lovely experience! The trainer was very helpful, patient, and made me feel comfortable throughout.",
    rating: 5,
  },
  {
    id: 'morganne',
    name: 'Morganne Jumper',
    role: 'Regular Member',
    avatar: pic.src,
    quote:
      "I love Revival Pilates! It is so beautiful, serene, and restorative. Maya's classes have completely transformed how my body feels.",
    rating: 5,
  },
  {
    id: 'tanisha',
    name: 'Tanisha Robinson',
    role: 'Reformer Client',
    avatar: mission.src,
    quote:
      'Revival feels like a spa retreat the moment you enter. From the decor & lighting to the welcoming energy of the staff, it is my favorite space in Nairobi.',
    rating: 5,
  },
  {
    id: 'karyn',
    name: 'Karyn Rule',
    role: 'Private Client',
    avatar: vision.src,
    quote:
      'Pleasant ambience and staff. Intuitive trainer and good variety in sessions ensuring a full body workout that is both challenging and restorative.',
    rating: 5,
  },
];

export const galleryData: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Studio Interior',
    subtitle: 'Nairobi Sanctuary',
    image: galleryHero.src,
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'g2',
    title: 'Reformer Equipment',
    subtitle: 'Precision Hardware',
    image: galleryImg.src,
    aspect: 'aspect-[3/4]',
    offsetClass: 'md:translate-y-12',
  },
  {
    id: 'g3',
    title: 'Movement Room',
    subtitle: 'Sunlit Practice',
    image: newsHero.src,
    aspect: 'aspect-[16/9]',
  },
  {
    id: 'g4',
    title: 'Restorative Corner',
    subtitle: 'Post-Session Warmth',
    image: bg.src,
    aspect: 'aspect-[4/3]',
    offsetClass: 'md:-translate-y-8',
  },
];

export const galleryStripData = [
  { id: 's1', title: 'Reformer Flow', image: homeHer03.src },
  { id: 's2', title: 'Studio Practice', image: heroBio.src },
  { id: 's3', title: 'Mindful Pose', image: bio.src },
  { id: 's4', title: 'Core Alignment', image: aboutusHero.src },
  { id: 's5', title: 'Restorative Form', image: homeHero2.src },
];
