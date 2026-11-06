export type LoanProduct = {
  icon: string;
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  rateLabel: string;
  rate: string;
  action: string;
  featured?: boolean;
};

export const services: LoanProduct[] = [
  {
    icon: '▧',
    title: 'Education Loan',
    badge: 'High Approval',
    subtitle: 'India & Overseas Studies',
    description:
      '100% financing for tuition fees, accommodation, living expenses, and laptops. Collateral and co-lateral options available with partner banks.',
    rateLabel: 'Interest starting at',
    rate: '8.50% p.a.',
    action: 'Check Education Offers',
  },
  {
    icon: '⌂',
    title: 'Home & Plot Loan',
    badge: 'Most Popular',
    subtitle: 'Purchase, Ready Plot & Construction',
    description:
      'Finance for ready flats, construction, and approved plots, or transfer your existing home loan to access a lower interest rate.',
    rateLabel: 'Interest starting at',
    rate: '8.40% p.a.',
    action: 'Check Home Loan Offers',
  },
  {
    icon: '▣',
    title: 'Vehicle Loan',
    badge: 'Fast Sanction',
    subtitle: 'Cars, Commercial & Tractors',
    description:
      'Financing for two-wheelers, new and used cars, agricultural tractors, and commercial transport vehicles for Tumkur businesses.',
    rateLabel: 'Interest starting at',
    rate: '8.85% p.a.',
    action: 'Check Vehicle Offers',
  },
  {
    icon: '♙',
    title: 'Personal Loan',
    badge: 'Minimal Docs',
    subtitle: 'Salaried, Self-Employed & Medical',
    description:
      'Quick liquidity for weddings, medical emergencies, home renovation, or debt consolidation with no collateral requirement.',
    rateLabel: 'Interest starting at',
    rate: '10.49% p.a.',
    action: 'Check Personal Loan Offers',
  },
  {
    icon: '♧',
    title: 'SHG (ಸ್ತ್ರೀ ಶಕ್ತಿ) Loan',
    badge: 'Special Focus',
    subtitle: 'Joint Liability Group Micro-Enterprise',
    description:
      'Official bank finance assistance for rural women’s self-help groups, dairy initiatives, tailoring units, and small businesses across Tumkur district.',
    rateLabel: 'Subsidized government schemes',
    rate: 'From 7.00% p.a.',
    action: 'Inquire for SHG Group',
    featured: true,
  },
  {
    icon: '▤',
    title: 'Business & MSME Loan',
    badge: 'Mudra & MSME',
    subtitle: 'Working Capital & Machinery',
    description:
      'Unsecured business loans, OD/CC credit limits, machinery finance, and CGTMSE-covered credit for manufacturers and retail merchants.',
    rateLabel: 'Interest starting at',
    rate: '9.25% p.a.',
    action: 'Check Business Offers',
  },
];
