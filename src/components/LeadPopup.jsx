import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function LeadPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Check session storage
    const dismissed = sessionStorage.getItem('popupDismissed');
    if (dismissed === 'true') return;

    // Show popup after 8 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('popupDismissed', 'true');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Lead form data submitted:', formData);
    setSubmitted(true);
    // Auto close after 2 seconds on success
    setTimeout(() => {
      handleClose();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Overlay - fades in (200ms) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Card - scales with cubic-bezier (300ms) */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.34, 1.56, 0.64, 1], // Overshoot cubic-bezier
            }}
            className="bg-white dark:bg-gray-900 rounded-2xl max-w-md w-full shadow-2xl relative z-10 overflow-hidden"
          >
            {/* Top Purple Header Strip */}
            <div className="bg-purple-900 px-8 py-6 text-white relative">
              <span className="text-xs font-semibold tracking-widest text-brand-green-lemon uppercase block mb-1">
                GET IN TOUCH
              </span>
              <h3 className="font-syne font-bold text-xl leading-snug">
                Request a Free Audit Consultation
              </h3>
              <p className="text-white/60 text-xs mt-1.5 leading-relaxed">
                Tell us about your inventory challenge and we'll be in touch within 24 hours.
              </p>

              {/* Close Button on Top Purple Header Strip */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors cursor-pointer p-1"
                aria-label="Close popup"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Form Content */}
            <div className="p-8">
              {submitted ? (
                <div className="py-8 text-center flex flex-col items-center justify-center">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                    <span className="text-green-500 text-lg font-bold">&check;</span>
                  </div>
                  <h4 className="font-syne font-bold text-lg text-brand-black dark:text-white mb-1">
                    Request Received!
                  </h4>
                  <p className="font-dmsans text-sm text-brand-gray-mid dark:text-gray-400 max-w-xs leading-relaxed">
                    We have logged your request and our audit specialists will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="popup-name" className="block font-dmsans text-xs text-brand-gray-mid dark:text-gray-400 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="popup-name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-3.5 py-2.5 text-sm text-brand-black dark:text-white placeholder-gray-400 outline-none focus:border-purple-500/60 dark:focus:border-brand-green-lemon/60 transition-colors font-dmsans"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="popup-company" className="block font-dmsans text-xs text-brand-gray-mid dark:text-gray-400 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="popup-company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company name"
                      required
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-3.5 py-2.5 text-sm text-brand-black dark:text-white placeholder-gray-400 outline-none focus:border-purple-500/60 dark:focus:border-brand-green-lemon/60 transition-colors font-dmsans"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="popup-email" className="block font-dmsans text-xs text-brand-gray-mid dark:text-gray-400 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="popup-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-3.5 py-2.5 text-sm text-brand-black dark:text-white placeholder-gray-400 outline-none focus:border-purple-500/60 dark:focus:border-brand-green-lemon/60 transition-colors font-dmsans"
                    />
                  </div>

                  {/* Service Dropdown */}
                  <div>
                    <label htmlFor="popup-service" className="block font-dmsans text-xs text-brand-gray-mid dark:text-gray-400 mb-1">
                      Service Interested In
                    </label>
                    <select
                      id="popup-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md px-3.5 py-2.5 text-sm text-brand-black dark:text-white outline-none focus:border-purple-500/60 dark:focus:border-brand-green-lemon/60 transition-colors font-dmsans cursor-pointer"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      <option value="Agro Audit Services">Agro Audit Services</option>
                      <option value="Non-Agro Inventory Verification">Non-Agro Inventory Verification</option>
                      <option value="Retail Stock Audit">Retail Stock Audit</option>
                      <option value="Manufacturing Audit">Manufacturing Audit</option>
                      <option value="Compliance Verification">Compliance Verification</option>
                      <option value="Stock Reconciliation">Stock Reconciliation</option>
                      <option value="Other / Not Sure Yet">Other / Not Sure Yet</option>
                    </select>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#22C55E] text-black font-syne font-bold py-3.5 rounded-md text-sm mt-2 hover:bg-[#1cb054] transition-colors active:scale-[0.99] cursor-pointer shadow-lg shadow-[#22C55E]/10"
                  >
                    Request an Audit
                  </button>
                </form>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
