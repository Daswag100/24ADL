import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeHub from './components/HomeHub';
import About from './components/About';
import Services from './components/Services';
import Approach from './components/Approach';
import Industries from './components/Industries';
import WhyUs from './components/WhyUs';
import GlobalReach from './components/GlobalReach';
import Deliverables from './components/Deliverables';
import Contact from './components/Contact';
import Careers from './components/Careers';
import Footer from './components/Footer';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#';
      setCurrentHash(hash);
      
      // Instantly reset scroll height to top on route change
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Trigger scroll-to-top on initial mount if hash is present
    if (window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Determine what components to render based on URL hash
  const renderActivePage = () => {
    switch (currentHash) {
      case '#about':
        return (
          <>
            <About />
            <WhyUs />
          </>
        );
      case '#services':
        return (
          <>
            <Services />
            <Deliverables />
          </>
        );
      case '#industries':
        return <Industries />;
      case '#approach':
        return <Approach />;
      case '#clients':
        return <GlobalReach />;
      case '#contact':
        return <Contact />;
      case '#careers':
        return <Careers />;
      case '#home':
      case '#':
      default:
        return (
          <>
            <Hero />
            <HomeHub />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-brand-white text-brand-black font-dmsans selection:bg-brand-purple-light selection:text-brand-purple-primary flex flex-col justify-between">
      <div>
        {/* Navigation Bar - receives active hash to handle menu state highlights */}
        <Navbar currentHash={currentHash} />

        {/* Dynamic page content */}
        <main className="pt-16">
          {renderActivePage()}
        </main>
      </div>

      {/* Footer is constant across all views */}
      <Footer />
    </div>
  );
}

export default App;
