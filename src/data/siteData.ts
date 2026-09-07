import type { StaticImageData } from 'next/image';


import aboutusHero from '../../public/aboutusHero.webp';
import impact from '../../public/impact/impact (1).webp';

// hero
import hero1 from '../../public/heroCarousel/hero1.webp';
import hero2 from '../../public/heroCarousel/hero2.webp';
import hero3 from '../../public/heroCarousel/hero3.webp';

// classes
import class1 from '../../public/classes/classes (1).webp';
import class2 from '../../public/classes/classes (2).webp';
import class3 from '../../public/classes/classes (3).webp';
import class4 from '../../public/classes/classes (4).webp';
import class5 from '../../public/classes/classes (5).webp';
import class6 from '../../public/classes/classes (6).webp';
import class7 from '../../public/classes/classes (7).webp';

// gallery
import gallery1 from '../../public/gallery/gallery.webp';
import gallery2 from '../../public/gallery/gallery2.webp';
import gallery3 from '../../public/gallery/gallery3.webp';
import gallery4 from '../../public/gallery/gallery4.webp';

// reviews
import avatar1 from '../../public/avatars/avatar (1).webp';
import avatar2 from '../../public/avatars/avatar (2).webp';
import avatar3 from '../../public/avatars/avatar (3).webp';
import avatar4 from '../../public/avatars/avatar (4).webp';

// gallery outro
import outro1 from '../../public/galleryOutro/outro.webp';
import outro2 from '../../public/galleryOutro/outro2.webp';
import outro3 from '../../public/galleryOutro/outro3.webp';
import outro4 from '../../public/galleryOutro/outro4.webp';
import outro5 from '../../public/galleryOutro/outro5.webp';
import outro6 from '../../public/galleryOutro/outro6.webp';
import outro7 from '../../public/galleryOutro/outro7.webp';
import outro8 from '../../public/galleryOutro/outro8.webp';

// INTERFACES 

export interface HeroSlide {
  id: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  image: StaticImageData;
  animationClass: string;
  primaryCta: { text: string; href: string };
  secondaryCta: { text: string; href: string };
}

export interface ImpactStat {
  id: string;
  number: string;
  label: string;
  description: string;
  positionClass: string;
}

export interface ClassItem {
  id: string;
  stepNumber: string;
  title: string;
  subtitle: string;
  description: string;
  image: StaticImageData;
  bulletPoints: string[];
}

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  avatar: StaticImageData;
  quote: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  subtitle?: string;
  image: StaticImageData;
  aspect: string;
  offsetClass?: string;
}

export interface PricingTier {
  key: string;
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

export interface FaqItem { 
  q: string; 
  a: string; 
}

//  DATA 

export const heroSlides: HeroSlide[] = [
  {
    id: 'slide-1',
    eyebrow: 'Nairobi · Boutique Pilates Studio',
    title: 'Strength, restored from the inside out.',
    subtitle: 'Reformer, Mat, Group & Private sessions tailored to meet you exactly where you are.',
    image: hero1, 
    animationClass: 'kenburns-right',
    primaryCta: { text: 'Book a Class', href: '#book' },
    secondaryCta: { text: 'Our Philosophy', href: '#philosophy' },
  },
  {
    id: 'slide-2',
    eyebrow: 'Precision & Alignment',
    title: 'Move with intention. Live with balance.',
    subtitle: 'Building quiet power and postural alignment through expert, unhurried instruction.',
    image: hero2, 
    animationClass: 'kenburns-left',
    primaryCta: { text: 'Explore Classes', href: '#classes' },
    secondaryCta: { text: 'Rates & Packs', href: '#pricing' },
  },
  {
    id: 'slide-3',
    eyebrow: 'Restorative Sanctuary',
    title: 'A space designed to slow you down.',
    subtitle: 'Experience considered design, warm light, and personalized movement care in Nairobi.',
    image: hero3, 
    animationClass: 'kenburns-top',
    primaryCta: { text: 'Meet Instructor', href: '#instructor' },
    secondaryCta: { text: 'Studio Gallery', href: '#gallery' },
  },
];

export const impactData = {
  eyebrow: 'STUDIO IMPACT & EXPERIENCE',
  title: 'Dedicated to movement mastery.',
  image: impact, 
  stats: [
    {
      id: 'stat-1',
      number: '325+ hours',
      label: 'One-on-One Studio Sessions',
      description: 'Of individual practical training, body alignment assessments, and solo Reformer instruction.',
      positionClass: 'md:col-span-6',
    },
    {
      id: 'stat-2',
      number: '500+ hours',
      label: 'Supervised Teaching',
      description: 'Of hands-on instruction in our Nairobi studio, guiding real clients under Maya\'s mentorship.',
      positionClass: 'md:col-span-6 md:mt-24',
    },
    {
      id: 'stat-3',
      number: '150+ hours',
      label: 'Anatomy & Breathwork',
      description: 'Of specialized studies in hypermobility care, spinal decompression, and controlled breathing.',
      positionClass: 'md:col-span-6 md:mt-12',
    },
  ],
};

export const classesData: ClassItem[] = [
  {
    id: 'reformer',
    stepNumber: '01',
    title: 'Reformer Pilates',
    subtitle: 'Spring Resistance & Precise Core Alignment',
    description:
      'Controlled movement using carriage springs to restore posture, lengthen muscles, and build deep core stability under expert guidance.',
    image: class1, 
    bulletPoints: [
      'Spring resistance customization',
      'Posture restoration & spinal alignment',
      'Low-impact, high-precision strength',
    ],
  },
  {
    id: 'mat',
    stepNumber: '02',
    title: 'Mat Pilates Flow',
    subtitle: 'Core Engagement & Breathwork',
    description:
      'Ground-based practice strengthening the powerhouse through deliberate breathwork, fluid transitions, and bodyweight control.',
    image: class2, 
    bulletPoints: [
      'Deep abdominal & back strengthening',
      'Fluid movement & breath synchronisation',
      'Adaptable for all fitness levels',
    ],
  },
  {
    id: 'group',
    stepNumber: '03',
    title: 'Group Reformer',
    subtitle: 'Intimate Class (Max 6 Reformists)',
    description:
      'Shared energy in a boutique studio setting with hands-on instructor cues ensuring proper form for every participant.',
    image: class3, 
    bulletPoints: [
      'Boutique environment (max 6 per class)',
      'Hands-on posture corrections',
      'Motivating group atmosphere',
    ],
  },
  {
    id: 'private',
    stepNumber: '04',
    title: 'Private 1-on-1 Sessions',
    subtitle: 'Tailored Solo Instruction with Maya',
    description:
      'One-on-one movement sessions customized for injury recovery, hypermobility care, or personalized progression goals.',
    image: class4, // Removed .src
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
    avatar: avatar1, 
    quote:
      "It was my first time trying Pilates, and I had such a lovely experience! The trainer was very helpful, patient, and made me feel comfortable throughout.",
    rating: 5,
  },
  {
    id: 'morganne',
    name: 'Morganne Jumper',
    role: 'Regular Member',
    avatar: avatar2, 
    quote:
      "I love Revival Pilates! It is so beautiful, serene, and restorative. Maya's classes have completely transformed how my body feels.",
    rating: 5,
  },
  {
    id: 'tanisha',
    name: 'Tanisha Robinson',
    role: 'Reformer Client',
    avatar: avatar3, 
    quote:
      'Revival feels like a spa retreat the moment you enter. From the decor & lighting to the welcoming energy of the staff, it is my favorite space in Nairobi.',
    rating: 5,
  },
  {
    id: 'karyn',
    name: 'Karyn Rule',
    role: 'Private Client',
    avatar: avatar4, 
    quote:
      'Pleasant ambience and staff. Intuitive trainer and good variety in sessions ensuring a full body workout that is both challenging and restorative.',
    rating: 5,
  },
];

export const galleryData: GalleryItem[] = [
  {
    id: 'g1',
    title: 'Full-Body Extension',
    subtitle: 'Reformer Flow',
    image: gallery1, 
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'g2',
    title: 'Core-Led Control',
    subtitle: 'Precision Movement',
    image: gallery2, 
    aspect: 'aspect-[3/4]',
    offsetClass: 'md:translate-y-12',
  },
  {
    id: 'g3',
    title: 'Balanced Stretch',
    subtitle: 'Mat Practice',
    image: gallery3, 
    aspect: 'aspect-[16/9]',
  },
  {
    id: 'g4',
    title: 'Strength in Stillness',
    subtitle: 'Breath & Form',
    image: gallery4, 
    aspect: 'aspect-[4/3]',
    offsetClass: 'md:-translate-y-8',
  },
  {
    id: 'g5',
    title: 'Rooted Alignment',
    subtitle: 'Guided Sequence',
    image: class5, 
    aspect: 'aspect-[4/3]',
    offsetClass: 'md:-translate-y-8',
  },
  {
    id: 'g6',
    title: 'Controlled Flow',
    subtitle: 'Studio Session',
    image: class6, 
    aspect: 'aspect-[4/3]',
    offsetClass: 'md:-translate-y-8',
  },
  {
    id: 'g7',
    title: 'Mindful Movement',
    subtitle: 'Full-Body Focus',
    image: class7, 
    aspect: 'aspect-[4/3]',
    offsetClass: 'md:-translate-y-8',
  },
];

export const galleryStripData = [
  { id: 's1', title: 'Reformer Flow', image: outro1 }, 
  { id: 's2', title: 'Studio Practice', image: outro2 }, 
  { id: 's3', title: 'Mindful Pose', image: outro3 }, 
  { id: 's4', title: 'Core Alignment', image: outro4 }, 
  { id: 's5', title: 'Restorative Form', image: outro5 }, 
  { id: 's6', title: 'Restorative Form', image: outro6 }, 
  { id: 's7', title: 'Restorative Form', image: outro7 }, 
  { id: 's8', title: 'Restorative Form', image: outro8 }, 
];

export const classPacks: PricingTier[] = [
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

export const memberships: PricingTier[] = [
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

export const faqs: FaqItem[] = [
  { 
    q: 'Should I start with a class or a membership?', 
    a: 'A single class or 5-pack is the easiest way to try Reformer or Mat before committing — most clients switch after their third visit.' 
  },
  { 
    q: 'How often should I come to see results?', 
    a: 'Most clients notice a shift in posture and core strength within 2–3 sessions per week over 4–6 weeks.' 
  },
  { 
    q: 'Can I switch from class packages to a membership later?', 
    a: 'Yes — unused classes in a pack can be credited toward your first month of Monthly Unlimited.' 
  },
  { 
    q: 'Does a membership lock me in long term?', 
    a: 'No. Monthly Unlimited is billed month to month and can be paused or cancelled anytime.' 
  },
];