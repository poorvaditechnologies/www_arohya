export interface Service {
  glyph: string;
  title: string;
  desc: string;
  items: string[];
}

export interface WhyItem {
  title: string;
  desc: string;
}

export interface JourneyStep {
  num: string;
  title: string;
  desc: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  initials: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface NavLink {
  label: string;
  href: string;
}
