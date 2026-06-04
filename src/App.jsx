import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import WhyUs from './components/WhyUs';
import Services from './components/Services';
import Deliverables from './components/Deliverables';
import Approach from './components/Approach';
import Industries from './components/Industries';
import GlobalReach from './components/GlobalReach';
import Careers from './components/Careers';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Scroll-spy observer setup
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Triggers when the section crosses the upper/middle viewport area
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Select all section elements that have an ID attribute
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-white text-brand-black font-dmsans selection:bg-brand-purple-light selection:text-brand-purple-primary flex flex-col justify-between">
      <div>
        {/* Navigation Bar - tracks the scroll-spied active section */}
        <Navbar activeSection={activeSection} />

        {/* Sequential content flow */}
        <main>
          {/* 1. Hero Section */}
          <Hero />

          {/* 2. About Us Section */}
          <About />

          {/* 3. Why Us Section */}
          <WhyUs />

          {/* 4. Services Section */}
          <Services />

          {/* 5. Deliverables Section */}
          <Deliverables />

          {/* 6. Approach Section */}
          <Approach />

          {/* 7. Industries We Serve Section */}
          <Industries />

          {/* 8. Global Reach & Clients Section */}
          <GlobalReach />

          {/* 9. Careers Section */}
          <Careers />

          {/* 10. Contact Section */}
          <Contact />
        </main>
      </div>

      {/* 11. Footer Section */}
      <Footer />
    </div>
  );
}

export default App;
