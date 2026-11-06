import type { NavLink } from '@/types';

// Site-wide content and settings. Edit here instead of hard-coding in components.
export const SITE = {
  name: 'Arohya Capital',
  tagline: 'One-Stop Financial Solutions',
} as const;

export const NAV_LINKS: NavLink[] = [
  { href: '#top', labelKey: 'navigation.home' },
  { href: '#services', labelKey: 'navigation.loans' },
  { href: '#journey', labelKey: 'navigation.howItWorks' },
  { href: '#calculator', labelKey: 'navigation.emiCalculator' },
  { href: '#why', labelKey: 'navigation.about' },
  { href: '#team', labelKey: 'navigation.team' },
  { href: '#apply', labelKey: 'navigation.contact' },
];
