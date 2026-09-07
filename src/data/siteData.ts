import aboutusHero from '../../public/aboutusHero.jpg';
// import bg from '../../public/bg.webp';
import impact from '../../public/impact/impact (1).jpg'


// hero
import hero1 from '../../public/heroCarousel/hero1.jpg'
import hero2 from '../../public/heroCarousel/hero2.jpg'
import hero3 from '../../public/heroCarousel/hero3.jpg'

// classes
import class1 from '../../public/classes/classes (1).jpg'
import class2 from '../../public/classes/classes (2).jpg'
import class3 from '../../public/classes/classes (3).jpg'
import class4 from '../../public/classes/classes (4).jpg'
import class5 from '../../public/classes/classes (5).jpg'
import class6 from '../../public/classes/classes (6).jpg'
import class7 from '../../public/classes/classes (7).jpg'


// impact


// gallery
import gallery1 from '../../public/gallery/gallery.jpg'
import gallery2 from '../../public/gallery/gallery2.jpg'
import gallery3 from '../../public/gallery/gallery3.jpg'
import gallery4 from '../../public/gallery/gallery4.jpg'

// reviews
import avatar1 from '../../public/avatars/avatar (1).jpg'
import avatar2 from '../../public/avatars/avatar (2).jpg'
import avatar3 from '../../public/avatars/avatar (3).jpg'
import avatar4 from '../../public/avatars/avatar (4).jpg'
// import avatar5 from '../../public/avatars/avatar (5).jpg'
// import avatar6 from '../../public/avatars/avatar (6).jpg'


// gallery outro
import outro1 from '../../public/galleryOutro/outro.jpg'
import outro2 from '../../public/galleryOutro/outro2.jpg'
import outro3 from '../../public/galleryOutro/outro3.jpg'
import outro4 from '../../public/galleryOutro/outro4.jpg'
import outro5 from '../../public/galleryOutro/outro5.jpg'
import outro6 from '../../public/galleryOutro/outro6.jpg'
import outro7 from '../../public/galleryOutro/outro7.jpg'
import outro8 from '../../public/galleryOutro/outro8.jpg'

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
  image: impact.src,
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
      description: 'Of hands-on instruction in our Nairobi studio, guiding real clients under Maya’s mentorship.',
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
    stepNumber: '01',
    title: 'Reformer Pilates',
    subtitle: 'Spring Resistance & Precise Core Alignment',
    description:
      'Controlled movement using carriage springs to restore posture, lengthen muscles, and build deep core stability under expert guidance.',
    image: class1.src,
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
    image: class2.src,
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
    image: class3.src,
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
    image: class4.src,
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
    avatar: avatar1.src,
    quote:
      "It was my first time trying Pilates, and I had such a lovely experience! The trainer was very helpful, patient, and made me feel comfortable throughout.",
    rating: 5,
  },
  {
    id: 'morganne',
    name: 'Morganne Jumper',
    role: 'Regular Member',
    avatar: avatar2.src,
    quote:
      "I love Revival Pilates! It is so beautiful, serene, and restorative. Maya's classes have completely transformed how my body feels.",
    rating: 5,
  },
  {
    id: 'tanisha',
    name: 'Tanisha Robinson',
    role: 'Reformer Client',
    avatar: avatar3.src,
    quote:
      'Revival feels like a spa retreat the moment you enter. From the decor & lighting to the welcoming energy of the staff, it is my favorite space in Nairobi.',
    rating: 5,
  },
  {
    id: 'karyn',
    name: 'Karyn Rule',
    role: 'Private Client',
    avatar: avatar4.src,
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
    image: gallery1.src,
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'g2',
    title: 'Core-Led Control',
    subtitle: 'Precision Movement',
    image: gallery2.src,
    aspect: 'aspect-[3/4]',
    offsetClass: 'md:translate-y-12',
  },
  {
    id: 'g3',
    title: 'Balanced Stretch',
    subtitle: 'Mat Practice',
    image: gallery3.src,
    aspect: 'aspect-[16/9]',
  },
  {
    id: 'g4',
    title: 'Strength in Stillness',
    subtitle: 'Breath & Form',
    image: gallery4.src,
    aspect: 'aspect-[4/3]',
    offsetClass: 'md:-translate-y-8',
  },
  {
    id: 'g5',
    title: 'Rooted Alignment',
    subtitle: 'Guided Sequence',
    image: class5.src,
    aspect: 'aspect-[4/3]',
    offsetClass: 'md:-translate-y-8',
  },
  {
    id: 'g6',
    title: 'Controlled Flow',
    subtitle: 'Studio Session',
    image: class6.src,
    aspect: 'aspect-[4/3]',
    offsetClass: 'md:-translate-y-8',
  },
  {
    id: 'g7',
    title: 'Mindful Movement',
    subtitle: 'Full-Body Focus',
    image: class7.src,
    aspect: 'aspect-[4/3]',
    offsetClass: 'md:-translate-y-8',
  },
];

export const galleryStripData = [
  { id: 's1', title: 'Reformer Flow', image: outro1.src },
  { id: 's2', title: 'Studio Practice', image: outro2.src },
  { id: 's3', title: 'Mindful Pose', image: outro3.src },
  { id: 's4', title: 'Core Alignment', image: outro4.src },
  { id: 's5', title: 'Restorative Form', image: outro5.src },
  { id: 's6', title: 'Restorative Form', image: outro6.src },
  { id: 's7', title: 'Restorative Form', image: outro7.src },
  { id: 's8', title: 'Restorative Form', image: outro8.src },
];

interface PricingTier {
  key: string;
  name: string;
  price: string;
  subtitle: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
}

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
