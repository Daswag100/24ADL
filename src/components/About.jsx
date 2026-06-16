import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Scale, Shield, Eye } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <CheckCircle className="h-5 w-5 text-brand-purple-primary dark:text-brand-green-lemon" />,
      title: 'Accuracy',
      text: 'We prioritize precision and reliable verification in every engagement.',
    },
    {
      icon: <Scale className="h-5 w-5 text-brand-purple-primary dark:text-brand-green-lemon" />,
      title: 'Integrity',
      text: 'Professional ethics and honest conduct are the foundation of everything we do.',
    },
    {
      icon: <Shield className="h-5 w-5 text-brand-purple-primary dark:text-brand-green-lemon" />,
      title: 'Independence',
      text: 'We maintain absolute autonomy and objectivity, with no conflict of interest, ever.',
    },
    {
      icon: <Eye className="h-5 w-5 text-brand-purple-primary dark:text-brand-green-lemon" />,
      title: 'Transparency',
      text: 'Clear, open communication and reporting backed by verifiable on-site evidence.',
    },
  ];

  const slideshowImages = [
    '/images/PHOTO-2026-04-06-23-48-31_5_jpg.jpeg',
    '/images/PHOTO-2026-04-06-23-48-31_3_jpg.jpeg',
    '/images/PHOTO-2026-04-06-23-48-31_jpg.jpeg',
    '/images/PHOTO-2026-04-06-23-48-31_13_jpg.jpeg',
    '/images/PHOTO-2026-04-06-23-48-32_jpg.jpeg',
  ];

  const slideshowAlts = [
    'Warehouse inspector checking stack levels',
    'Auditor verifying agricultural commodity bags in warehouse',
    'Supermarket shelf inventory inspection',
    'Retail store stock auditing on shelves',
    'Industrial packaging and inventory tracking',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slideshowImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Slick cubic-bezier for premium feel
  const transitionSettings = {
    duration: 0.85,
    ease: [0.22, 1, 0.36, 1], // Custom easeOutQuart
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitionSettings,
    },
  };

  return (
    <section id="about" className="py-14 md:py-24 bg-[#FAFAF9] dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-16"
        >
          <motion.span
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0 } }
            }}
            className="text-xs font-semibold tracking-widest text-brand-purple-mid dark:text-brand-green-lemon uppercase block mb-3"
          >
            Who We Are
          </motion.span>
          <motion.h2
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.1 } }
            }}
            className="font-syne font-bold text-4xl lg:text-5xl text-brand-black dark:text-white tracking-tight"
          >
            Where Vision Meets Execution
          </motion.h2>
        </motion.div>

        {/* Two-Column Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          
          {/* Left Column */}
          <div className="flex flex-col">
            <motion.p
              variants={itemVariants}
              className="font-dmsans text-lg text-brand-gray-mid dark:text-gray-400 font-light leading-relaxed max-w-lg mb-4"
            >
              Established in 2022, 24ADL is a fast-growing audit and inspection firm providing independent stock audit and inventory verification services across agro and non-agro sectors worldwide.
            </motion.p>
            <motion.p
              variants={itemVariants}
              className="font-dmsans text-lg text-brand-gray-mid dark:text-gray-400 font-light leading-relaxed max-w-lg mb-10"
            >
              We operate with strict adherence to international auditing standards, offering lenders, bank partners, and commodity trading houses the third-party assurance they need to verify inventory value and secure their global supply chains.
            </motion.p>

            {/* Value Cards Vertical Stack */}
            <motion.div className="flex flex-col gap-4" variants={containerVariants}>
              {values.map((val, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-brand-purple-light dark:bg-purple-950/40 rounded-lg flex items-center justify-center shrink-0">
                    {val.icon}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-syne font-bold text-brand-black dark:text-white text-base mb-1">
                      {val.title}
                    </h4>
                    <p className="font-dmsans text-sm text-brand-gray-mid dark:text-gray-400 font-normal leading-relaxed">
                      {val.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            
            {/* Auto-Rotating Image Slideshow */}
            <div className="relative w-full h-80 rounded-2xl mb-6 overflow-hidden shadow-md bg-gray-100 dark:bg-gray-800">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={slideshowImages[currentIndex]}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } }}
                  exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } }}
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  alt={slideshowAlts[currentIndex]}
                />
              </AnimatePresence>
              
              {/* Dot Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slideshowImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 cursor-pointer ${
                      currentIndex === idx ? 'bg-brand-green-lemon' : 'bg-white/30'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Philosophy Card */}
            <motion.div
              variants={itemVariants}
              className="bg-brand-purple-primary rounded-2xl p-8 sm:p-10 text-white relative overflow-hidden shadow-lg"
            >
              {/* Decorative Quote Mark */}
              <span className="absolute -top-6 -left-2 text-[180px] font-serif text-white/5 select-none pointer-events-none leading-none">
                “
              </span>
              
              <blockquote className="relative z-10 font-dmsans text-lg sm:text-xl font-light leading-relaxed italic mb-8">
                "Accurate information is the foundation of every successful business decision. At 24ADL, we are committed to delivering truth, clarity, and accountability in inventory management, because what you can verify, you can control."
              </blockquote>

              <span className="relative z-10 font-syne font-bold text-brand-green-lemon text-xs sm:text-sm tracking-widest uppercase block">
                Our Philosophy
              </span>
            </motion.div>

            {/* Stats Cards Grid */}
            <motion.div className="grid grid-cols-3 gap-3 mt-6" variants={containerVariants}>
              {/* Stat 1 */}
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-sm"
              >
                <span className="font-syne font-bold text-xl sm:text-2xl text-brand-purple-primary dark:text-brand-green-lemon">
                  2022
                </span>
                <span className="font-dmsans text-[11px] sm:text-xs text-brand-gray-mid dark:text-gray-400 uppercase tracking-wide mt-1">
                  Founded
                </span>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-sm"
              >
                <span className="font-syne font-bold text-xl sm:text-2xl text-brand-purple-primary dark:text-brand-green-lemon">
                  Agro +
                </span>
                <span className="font-dmsans text-[11px] sm:text-xs text-brand-gray-mid dark:text-gray-400 uppercase tracking-wide mt-1">
                  Non-Agro
                </span>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-sm"
              >
                <span className="font-syne font-bold text-xl sm:text-2xl text-brand-purple-primary dark:text-brand-green-lemon">
                  Global
                </span>
                <span className="font-dmsans text-[11px] sm:text-xs text-brand-gray-mid dark:text-gray-400 uppercase tracking-wide mt-1">
                  Reach
                </span>
              </motion.div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
