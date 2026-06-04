import { motion } from 'framer-motion';
import { CheckCircle, Scale, ClipboardList, Clock } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <CheckCircle className="h-5 w-5 text-brand-purple-primary" />,
      title: 'Accuracy',
      text: 'We prioritize precision and reliable verification in every engagement.',
    },
    {
      icon: <Scale className="h-5 w-5 text-brand-purple-primary" />,
      title: 'Integrity',
      text: 'We maintain independence and professionalism — no conflict of interest, ever.',
    },
    {
      icon: <ClipboardList className="h-5 w-5 text-brand-purple-primary" />,
      title: 'Accountability',
      text: 'We support businesses in strengthening operational control and reporting reliability.',
    },
    {
      icon: <Clock className="h-5 w-5 text-brand-purple-primary" />,
      title: 'Reliability',
      text: 'Consistent, dependable audit support — delivered on time, every time.',
    },
  ];

  // Slick cubic-bezier for premium feel
  const transitionSettings = {
    duration: 0.85,
    ease: [0.16, 1, 0.3, 1], // Custom expo-out
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: transitionSettings,
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="about" className="py-14 md:py-24 bg-[#FAFAF9] overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        
        {/* Section Header */}
        <div className="mb-16">
          <motion.span
            variants={itemVariants}
            className="text-xs font-semibold tracking-widest text-brand-purple-mid uppercase block mb-3"
          >
            Who We Are
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="font-syne font-bold text-4xl lg:text-5xl text-brand-black tracking-tight"
          >
            Where Vision Meets Execution
          </motion.h2>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col">
            <motion.p
              variants={itemVariants}
              className="font-dmsans text-lg text-brand-gray-mid font-light leading-relaxed max-w-lg mb-10"
            >
              Established in 2022 and led by Louis Adun, 24ADL is a fast-growing audit and inspection firm providing independent stock audit and inventory verification services across agro and non-agro sectors worldwide.
            </motion.p>

            {/* Value Cards Vertical Stack */}
            <motion.div className="flex flex-col gap-4" variants={containerVariants}>
              {values.map((val, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-white border border-gray-200 rounded-xl p-5 flex items-start gap-4 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 bg-brand-purple-light rounded-lg flex items-center justify-center shrink-0">
                    {val.icon}
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-syne font-bold text-brand-black text-base mb-1">
                      {val.title}
                    </h4>
                    <p className="font-dmsans text-sm text-brand-gray-mid font-normal leading-relaxed">
                      {val.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <motion.img
              variants={imageVariants}
              src="/images/PHOTO-2026-04-06-23-48-31_5_jpg.jpeg"
              className="w-full h-72 object-cover rounded-2xl mb-6 object-center shadow-md"
              alt="Physical verification"
            />
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
                "Accurate information is the foundation of every successful business decision. At 24ADL, we are committed to delivering truth, clarity, and accountability in inventory management — because what you can verify, you can control."
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
                className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-sm"
              >
                <span className="font-syne font-bold text-xl sm:text-2xl text-brand-purple-primary">
                  2022
                </span>
                <span className="font-dmsans text-[11px] sm:text-xs text-brand-gray-mid uppercase tracking-wide mt-1">
                  Founded
                </span>
              </motion.div>

              {/* Stat 2 */}
              <motion.div
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-sm"
              >
                <span className="font-syne font-bold text-xl sm:text-2xl text-brand-purple-primary">
                  Agro +
                </span>
                <span className="font-dmsans text-[11px] sm:text-xs text-brand-gray-mid uppercase tracking-wide mt-1">
                  Non-Agro
                </span>
              </motion.div>

              {/* Stat 3 */}
              <motion.div
                variants={itemVariants}
                className="bg-white border border-gray-200 rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-sm"
              >
                <span className="font-syne font-bold text-xl sm:text-2xl text-brand-purple-primary">
                  Global
                </span>
                <span className="font-dmsans text-[11px] sm:text-xs text-brand-gray-mid uppercase tracking-wide mt-1">
                  Reach
                </span>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
