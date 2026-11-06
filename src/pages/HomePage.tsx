import {
  Apply,
  ContactBand,
  EmiCalculator,
  Faq,
  Hero,
  Journey,
  Services,
  Stats,
  Team,
  WhyUs,
} from '@/sections/home';

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <ContactBand />
      <Journey />
      <WhyUs />
      <Team />
      <EmiCalculator />
      <Faq />
      <Apply />
    </>
  );
}
