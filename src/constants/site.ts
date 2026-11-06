import type { NavLink } from '@/types';

// Site-wide content and settings. Edit here instead of hard-coding in components.
export const SITE = {
  name: 'Arohya Capital',
  tagline: 'One-Stop Financial Solutions',
} as const;

export const CONTACT = {
  phoneDisplay: '+91 816 220 0000',
  phoneHref: 'tel:+918162200000',
  whatsappHref: 'https://wa.me/918162200000',
  email: 'support@arohyacapital.com',
  address: 'B.H. Road, Ashok Nagar, Tumkur – 572102',
} as const;

export const NAV_LINKS: NavLink[] = [
  { href: '#services', labelKey: 'navigation.loans' },
  { href: '#journey', labelKey: 'navigation.howItWorks' },
  { href: '#calculator', labelKey: 'navigation.emiCalculator' },
  { href: '#why', labelKey: 'navigation.about' },
  { href: '#team', labelKey: 'navigation.team' },
  { href: '#apply', labelKey: 'navigation.contact' },
];
