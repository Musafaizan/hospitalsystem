import './App.css';
import  Navbar from './page/home/nav';
import HeroSection from './page/home/herosection';
import TrustSection from './page/home/trust';
import CtaSection from './page/home/cta1';
import AIModelSection from './page/home/aimodel';
import Features from './page/home/features';
import TestimonialsSection from './page/home/testimonials';
import WhoWeServeSection from './page/home/whowe';
import CtaSection2 from './page/home/cta2';
import HMSComparisonTable from './page/home/competitors';
import FAQSection from './page/home/faq';
import RequestDemoSection from './page/home/form';
import Footer from './page/home/footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <TrustSection />
      <CtaSection />
      <AIModelSection />
      <Features/>
      <TestimonialsSection/>
      <HMSComparisonTable/>
      <CtaSection2/>
      <WhoWeServeSection/>
      <FAQSection/>
      <RequestDemoSection/>
      <Footer />
    </div>
  );
}

export default App;
