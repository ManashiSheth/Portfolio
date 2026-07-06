import type { Project, ExperienceEntry, StatItem } from '../types';

export const LOADING_WORDS = ['Design', 'Systematize', 'Convert'] as const;

export const HERO_ROLES = [
  'Founding Designer',
  'UI/UX Specialist',
  'Problem Solver',
  'Product Architect',
] as const;

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Work', href: '#works' },
  { label: 'Resume', href: '#experience' },
] as const;

export const HLS_VIDEO_SRC =
  'https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'amTop',
    subtitle: 'Agentic AI Marketing SaaS Dashboard',
    description:
      'Complex multi-step workflows & data visualization for AI-driven marketing automation.',
    colSpan: 'lg:col-span-7',
    image: '/projects/amtop.png',
  },
  {
    id: 2,
    title: 'E-Commerce Web Experience',
    subtitle: 'End-to-end Responsive UI',
    description:
      'Product customization flows with seamless checkout and immersive product exploration.',
    colSpan: 'lg:col-span-5',
    image: '/projects/ecommerce.png',
  },
  {
    id: 3,
    title: 'Parul PIERC',
    subtitle: 'High-conversion Community Landing Page',
    description:
      'Strategic layout and CTA placement driving maximum community sign-ups and engagement.',
    colSpan: 'lg:col-span-5',
    image: '/projects/pierc.png',
  },
  {
    id: 4,
    title: 'Growthkar',
    subtitle: 'Responsive Agency Website Layout',
    description:
      'Clean, conversion-focused agency site with bold typography and fluid responsiveness.',
    colSpan: 'lg:col-span-7',
    image: '/projects/growthkar.png',
  },
];

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: 'Founding Product Designer',
    company: 'amTop',
    dates: '07/2025 – Present',
    isCurrent: true,
  },
  {
    role: 'Graphic Design Intern',
    company: 'Parul University',
    dates: '03/2026 – 06/2026',
    isCurrent: false,
  },
  {
    role: 'UI/UX Designer',
    company: 'Growthkar',
    dates: '01/2025 – 05/2025',
    isCurrent: false,
  },
];

export const STATS: StatItem[] = [
  { value: '15+', label: 'SaaS Screens Designed' },
  { value: '7-Step', label: 'AI Workflows Built' },
  { value: '100%', label: 'Focused on Conversion' },
];

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Figma', href: 'https://figma.com', icon: 'figma' },
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
] as const;

export const EMAIL = 'manshishth@gmail.com';
