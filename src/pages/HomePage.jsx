import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import WhyUs from '../components/WhyUs';
import Services from '../components/Services';
import Deliverables from '../components/Deliverables';
import Approach from '../components/Approach';
import Industries from '../components/Industries';
import GlobalReach from '../components/GlobalReach';
import Contact from '../components/Contact';
import LeadPopup from '../components/LeadPopup';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Check if the current path maps to a section (e.g. /about, /services, etc.)
    const path = location.pathname;
    if (path && path !== '/') {
      const sectionId = path.replace('/', '');
      const element = document.getElementById(sectionId);
      if (element) {
        // Delay slightly to ensure component has mounted and rendered
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main className="pt-20 md:pt-24">
      <Hero />
      <About />
      <WhyUs />
      <Services />
      <Deliverables />
      <Approach />
      <Industries />
      <GlobalReach />
      <Contact />
      <LeadPopup />
    </main>
  );
}
