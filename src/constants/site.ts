import type { NavLink } from '@/types';

// Site-wide content and settings. Edit here instead of hard-coding in components.
export const SITE = {
  name: 'Arohya Capital',
  tagline: 'One-Stop Financial Solutions',
} as const;

export const NAV_LINKS: NavLink[] = [
  { href: '#services', label: 'Services' },
  { href: '#why', label: 'Why Us' },
  { href: '#calculator', label: 'Calculators' },
  { href: '#journey', label: 'Process' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];
