import { motion } from 'framer-motion';
import { Briefcase, Mail, Award, Globe, ShieldCheck } from 'lucide-react';

export default function Careers() {
  const benefits = [
    {
      icon: <Award className="h-6 w-6 text-brand-purple-primary dark:text-brand-green-lemon" />,
      title: 'Growth Opportunities',
      description: 'Develop your career with continuous learning and advancement opportunities.',
    },
    {
      icon: <Globe className="h-6 w-6 text-brand-purple-primary dark:text-brand-green-lemon" />,
      title: 'Global Exposure',
      description: 'Work on projects across multiple countries and diverse industrial environments.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand-purple-primary dark:text-brand-green-lemon" />,
      title: 'Professional Integrity',
      description: 'Collaborate with a team dedicated to truth, accuracy, and independent verification.',
    },
  ];

  const transitionSettings = {
    duration: 0.85,
    ease: [0.22, 1, 0.36, 1], // premium easeOutQuart
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
    <section id="careers" className="py-14 md:py-24 bg-[#FAFAF9] dark:bg-gray-900 transition-colors duration-300 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        
        {/* Page Header with Fade Up */}
        <motion.div
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0 } }
          }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <motion.span
            className="text-xs font-semibold tracking-widest text-brand-purple-mid dark:text-brand-green-lemon uppercase block mb-3"
          >
            Careers at 24ADL
          </motion.span>
          <h2
            className="font-syne font-bold text-4xl lg:text-5xl text-brand-black dark:text-white tracking-tight mb-4"
          >
            Build Your Future With Us
          </h2>
          <p
            className="font-dmsans text-base sm:text-lg text-brand-gray-mid dark:text-gray-400 leading-relaxed"
          >
            Join a dynamic, fast-growing audit and inspection team delivering trust and transparency to global business operations.
          </p>
        </motion.div>

        {/* Central Application Call-To-Action Card */}
        <motion.div
          variants={itemVariants}
          className="max-w-xl mx-auto bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700 rounded-2xl p-8 sm:p-12 shadow-sm text-center mb-10 md:mb-20 relative overflow-hidden"
        >
          {/* Briefcase Icon Container */}
          <div className="w-16 h-16 bg-brand-purple-light/60 dark:bg-purple-950/40 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-purple-primary dark:text-brand-green-lemon">
            <Briefcase className="h-7 w-7" />
          </div>

          <h3 className="font-syne font-bold text-2xl sm:text-3xl text-brand-black dark:text-white tracking-tight mb-6">
            Interested in joining our team?
          </h3>

          <p className="font-dmsans text-base text-brand-gray-mid dark:text-gray-400 leading-relaxed mb-6">
            If your skills match the role, email your CV to{' '}
            <a
              href="mailto:recruitment@24adlinspection.com"
              className="text-brand-purple-primary dark:text-brand-green-lemon font-bold hover:underline"
            >
              recruitment@24adlinspection.com
            </a>.
          </p>

          <p className="font-dmsans text-sm text-brand-gray-mid/80 dark:text-gray-500 leading-relaxed mb-8 border-t border-gray-100 dark:border-gray-750 pt-6">
            Please include the job title in the subject line and a brief cover note highlighting your relevant experience.
          </p>

          {/* Email row action */}
          <a
            href="mailto:recruitment@24adlinspection.com"
            className="inline-flex items-center gap-3 bg-brand-purple-light/30 dark:bg-purple-950/20 border border-brand-purple-primary/10 dark:border-brand-green-lemon/10 text-brand-purple-primary dark:text-brand-green-lemon font-dmsans font-medium text-sm px-6 py-3 rounded-full hover:bg-brand-purple-primary dark:hover:bg-brand-green-lemon hover:text-white dark:hover:text-black transition-all duration-300"
          >
            <Mail className="h-4 w-4" />
            <span>recruitment@24adlinspection.com</span>
          </a>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-200/60 dark:border-gray-800 my-10 md:my-16 max-w-5xl mx-auto" />

        {/* Perks / Benefits Grid */}
        <div className="max-w-5xl mx-auto">
          <motion.h4
            variants={itemVariants}
            className="font-syne font-bold text-2xl text-brand-black dark:text-white text-center mb-12"
          >
            Why Professional Auditors Choose 24ADL
          </motion.h4>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700 rounded-xl p-6 text-center shadow-sm hover:shadow-md dark:hover:shadow-gray-950/30 transition-all duration-300 flex flex-col items-center"
              >
                <div className="w-12 h-12 bg-brand-purple-light dark:bg-purple-950/40 rounded-lg flex items-center justify-center mb-5 shrink-0">
                  {benefit.icon}
                </div>
                <h5 className="font-syne font-bold text-lg text-brand-black dark:text-white mb-3">
                  {benefit.title}
                </h5>
                <p className="font-dmsans text-sm text-brand-gray-mid dark:text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </motion.div>
    </section>
  );
}
