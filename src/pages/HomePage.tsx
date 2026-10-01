import {
  ApplyForm,
  EmiCalculator,
  Faq,
  Hero,
  Journey,
  Services,
  Testimonials,
  WhyUs,
} from '@/sections/home';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <EmiCalculator />
      <Journey />
      <Testimonials />
      <Faq />
      <ApplyForm />
    </>
  );
}
