import { EmiCalculator, Faq, Hero, Journey, Services, Team, WhyUs } from '@/sections/home';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Journey />
      <WhyUs />
      <Team />
      <EmiCalculator />
      <Faq />
    </>
  );
}
