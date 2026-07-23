import React from 'react';
import HeroSection from '../../section/herosection';
import TrustSection from '../../section/trust';
import CtaSection from '../../section/cta1';
import AIModelSection from '../../section/aimodel';
import Features from '../../section/features';
import ClientsMarquee from '../../section/client';
import TestimonialsSection from '../../section/testimonials';
import WhoWeServeSection from '../../section/whowe';
import CtaSection2 from '../../section/cta2';
import HMSComparisonTable from '../../section/competitors';
import FAQSection from '../../section/faq';
import RequestDemoSection from '../../section/form';

function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <CtaSection />
      <AIModelSection />
      <Features />
      <ClientsMarquee />
      <TestimonialsSection />
      <HMSComparisonTable />
      <CtaSection2 />
      <WhoWeServeSection />
      <FAQSection />
      <RequestDemoSection />
    </>
  );
}

export default Home;
