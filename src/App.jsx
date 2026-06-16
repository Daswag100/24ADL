import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import CookieBanner from './components/CookieBanner';
import LeadPopup from './components/LeadPopup';
import HomePage from './pages/HomePage';

// Lazy loaded page components
const AboutPage = lazy(() => import('./pages/AboutPage'));
const WhyUsPage = lazy(() => import('./pages/WhyUsPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage'));
const ApproachPage = lazy(() => import('./pages/ApproachPage'));
const ClientsPage = lazy(() => import('./pages/ClientsPage'));
const CareersPage = lazy(() => import('./pages/CareersPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const PrivacyPolicyPage = lazy(() => import('./pages/PrivacyPolicyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));

const loadingSpinner = (
  <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950">
    <div className="w-8 h-8 border-2 border-purple-900 border-t-transparent dark:border-brand-green-lemon dark:border-t-transparent rounded-full animate-spin" />
  </div>
);

// ScrollToTop scrolls the window to the top on every route change
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);
  return null;
}

// RouteTracker for Google Analytics 4 tracking on route change
function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-94HCB4H4C3', {
        page_path: location.pathname,
      });
    }
  }, [location]);

  return null;
}

// AppContent sets up navigation hooks and references
function AppContent() {
  const navigate = useNavigate();

  useEffect(() => {
    // Read and apply theme preference on mount to prevent white flash
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Expose global navigate handler for components using window.__navigate
    window.__navigate = (path) => {
      navigate(path);
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-brand-white dark:bg-gray-900 text-brand-black dark:text-white font-dmsans selection:bg-brand-purple-light selection:text-brand-purple-primary flex flex-col justify-between overflow-x-hidden w-full relative transition-colors duration-300">
      
      {/* Navigation Bar */}
      <Navbar />

      {/* Scroll to top indicator */}
      <ScrollToTop />

      {/* GA4 Route tracker */}
      <RouteTracker />

      {/* Routing system */}
      <Suspense fallback={loadingSpinner}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/why-us" element={<WhyUsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/approach" element={<ApproachPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/5-signs-your-business-is-losing-inventory" element={<ArticlePage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>

      {/* Footer */}
      <Footer />

      {/* Fixed Side Dark Mode Toggle */}
      <ThemeToggle />

      {/* Floating Cookie Consent Banner */}
      <CookieBanner />

      {/* Global Lead Capture Popup */}
      <LeadPopup />

      {/* Floating WhatsApp Button */}
      <a
        id="whatsapp-floating-btn"
        href="https://wa.me/2348033179732"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if (window.gtag) {
            window.gtag('event', 'whatsapp_click', {
              event_category: 'Engagement',
              event_label: 'WhatsApp Button',
            });
          }
        }}
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

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
