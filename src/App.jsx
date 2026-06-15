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
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LeadPopup from './components/LeadPopup';
import ThemeToggle from './components/ThemeToggle';
import CookieBanner from './components/CookieBanner';
import LegalPages from './components/LegalPages';
import BlogPages from './components/BlogPages';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [currentPage, setCurrentPage] = useState('home'); // 'home', 'privacy', 'terms', 'cookies', 'disclaimer', 'blog', 'blog-detail'

  useEffect(() => {
    // Read and apply theme preference on mount to prevent white flash
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Path routing handler
    const handleRouteChange = () => {
      const path = window.location.pathname;
      const legalPages = ['/privacy', '/terms', '/cookies', '/disclaimer'];
      if (legalPages.includes(path)) {
        setCurrentPage(path.replace('/', ''));
      } else if (path === '/blog') {
        setCurrentPage('blog');
      } else if (path === '/blog/5-signs-your-business-is-losing-inventory') {
        setCurrentPage('blog-detail');
      } else {
        setCurrentPage('home');
        
        // If it's a section path, scroll to it
        if (path !== '/' && path.length > 1) {
          const targetId = path.replace('/', '');
          const element = document.getElementById(targetId);
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth' });
            }, 150);
          }
        } else {
          // Home route - scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    // Expose global navigate handler
    window.__navigate = (path) => {
      window.history.pushState(null, '', path);
      window.dispatchEvent(new Event('popstate'));
    };

    // Run once on load
    handleRouteChange();

    window.addEventListener('popstate', handleRouteChange);

    // Scroll-spy observer setup
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -50% 0px', // Triggers when the section crosses the upper/middle viewport area
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);

          // Update URL path silently as the user scrolls
          const targetPath = id === 'home' || id === 'faq' ? '/' : `/${id}`;
          if (window.location.pathname !== targetPath && window.location.pathname.match(/^(\/|\/about|\/why-us|\/services|\/deliverables|\/approach|\/industries|\/clients|\/careers|\/contact)?$/)) {
            window.history.replaceState(null, '', targetPath);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Select all section elements that have an ID attribute
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const isHome = currentPage === 'home';

  return (
    <div className="min-h-screen bg-brand-white dark:bg-gray-900 text-brand-black dark:text-white font-dmsans selection:bg-brand-purple-light selection:text-brand-purple-primary flex flex-col justify-between overflow-x-hidden w-full relative transition-colors duration-300">
      
      {isHome ? (
        <div>
          {/* Navigation Bar - tracks the scroll-spied active section */}
          <Navbar activeSection={activeSection} />

          {/* Sequential content flow */}
          <main className="pt-20 md:pt-24">
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

            {/* FAQ Accordion Section */}
            <FAQ />

            {/* 10. Contact Section */}
            <Contact />
          </main>

          {/* 11. Footer Section */}
          <Footer />

          {/* Lead Capture Popup */}
          <LeadPopup />
        </div>
      ) : currentPage === 'blog' || currentPage === 'blog-detail' ? (
        <BlogPages currentPage={currentPage} />
      ) : (
        <LegalPages currentPage={currentPage} />
      )}

      {/* Fixed Side Dark Mode Toggle */}
      <ThemeToggle />

      {/* Floating Cookie Consent Banner */}
      <CookieBanner />

      {/* Floating WhatsApp Button */}
      <a
        id="whatsapp-floating-btn"
        href="https://wa.me/2348033179732"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 bg-[#25D366] text-white p-3.5 hover:bg-[#128C7E] shadow-xl rounded-full transition-all duration-300 active:scale-95 group flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75 pointer-events-none group-hover:bg-[#128C7E]" />
        <svg
          className="h-6 w-6 fill-current relative z-10"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.793 1.451 5.467 0 9.911-4.441 9.914-9.911.001-2.652-1.02-5.145-2.876-7.003C16.562 1.83 14.075.81 11.424.81c-5.474 0-9.915 4.442-9.918 9.913-.001 1.957.513 3.865 1.49 5.567l-.978 3.57 3.652-.958zm12.333-6.11c-.328-.164-1.94-.957-2.24-1.066-.3-.11-.519-.164-.738.164-.219.328-.847 1.066-1.038 1.285-.19.219-.383.246-.71.082-.328-.164-1.385-.51-2.637-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.328-.02-.505.143-.668.147-.146.328-.383.492-.574.164-.19.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.738-1.777-1.01-2.434-.265-.637-.534-.55-.738-.56-.19-.01-.41-.01-.628-.01-.219 0-.574.082-.875.41-.3.328-1.148 1.12-1.148 2.733 0 1.612 1.175 3.17 1.339 3.388.164.219 2.312 3.53 5.598 4.95.782.338 1.393.54 1.868.692.787.25 1.5.214 2.065.13.629-.094 1.94-.794 2.213-1.56.274-.766.274-1.422.192-1.56-.082-.138-.3-.219-.629-.383z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
