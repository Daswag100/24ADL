import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check } from 'lucide-react';
import { useFormspark } from "@formspark/use-formspark";

export default function LeadPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [fullName, setFullName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [submit, submitting] = useFormspark({ formId: "qeypsxfRN" });

  useEffect(() => {
    // Check session storage
    const dismissed = sessionStorage.getItem('popupDismissed');
    if (dismissed === 'true') return;

    // Show popup after 10 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem('popupDismissed', 'true');
  };

  const onClose = handleClose;

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submit({ fullName, company, email, service });
    setSubmitted(true);
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
                <div className="text-center py-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center mx-auto mb-4">
                    <Check className="text-white" size={24} />
                  </div>
                  <h4 className="font-syne font-bold text-xl text-gray-900 dark:text-white mb-2">
                    Request Received
                  </h4>
                  <p className="font-dmsans text-gray-500 text-sm mb-6 max-w-xs mx-auto leading-relaxed">
                    We will review your details and be in touch within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="bg-green-500 text-black font-bold px-6 py-3 rounded-md w-full text-sm hover:bg-green-600 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
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
                      name="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
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
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={service}
                      onChange={(e) => setService(e.target.value)}
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
                    disabled={submitting}
                    className="w-full bg-[#22C55E] text-black font-syne font-bold py-3.5 rounded-md text-sm mt-2 hover:bg-[#1cb054] transition-colors active:scale-[0.99] cursor-pointer shadow-lg shadow-[#22C55E]/10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending..." : "Request an Audit"}
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
