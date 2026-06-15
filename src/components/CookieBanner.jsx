import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a selection
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Show banner after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0, scale: 0.95 }}
          animate={{ 
            y: 0, 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } 
          }}
          exit={{ 
            y: 50, 
            opacity: 0, 
            scale: 0.95,
            transition: { duration: 0.3, ease: 'easeIn' } 
          }}
          className="fixed bottom-6 left-6 z-50 max-w-sm w-[calc(100vw-3rem)] bg-[#111827]/95 dark:bg-gray-950/95 backdrop-blur-md border border-white/10 dark:border-gray-800/80 text-white rounded-2xl p-5 shadow-2xl flex flex-col gap-4 font-dmsans"
        >
          {/* Close Icon */}
          <button
            onClick={handleDecline}
            className="absolute top-4 right-4 text-white/45 hover:text-white transition-colors cursor-pointer"
            aria-label="Close cookie consent banner"
          >
            <X className="w-4.5 h-4.5" />
          </button>

          {/* Icon & Title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-green-lemon/10 dark:bg-brand-green-lemon/5 border border-brand-green-lemon/20 flex items-center justify-center shrink-0">
              <Cookie className="w-5 h-5 text-brand-green-lemon" />
            </div>
            <h4 className="font-syne font-bold text-base text-white">
              Cookie Consent
            </h4>
          </div>

          {/* Description */}
          <p className="text-sm text-white/70 leading-relaxed font-light">
            We use cookies to improve your browsing experience and analyze our traffic. By clicking "Accept All", you agree to our use of cookies as detailed in our{' '}
            <a 
              href="#cookies" 
              className="text-brand-green-lemon hover:underline font-medium"
            >
              Cookie Policy
            </a>.
          </p>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-1.5 w-full">
            <button
              onClick={handleDecline}
              className="flex-1 bg-white/10 hover:bg-white/15 border border-white/10 text-white font-syne font-bold text-xs py-2.5 rounded-md transition-all active:scale-[0.98] cursor-pointer"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="flex-1 bg-brand-green-lemon hover:bg-[#1cb054] text-brand-black font-syne font-bold text-xs py-2.5 rounded-md transition-all active:scale-[0.98] cursor-pointer shadow-lg shadow-brand-green-lemon/10"
            >
              Accept All
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
