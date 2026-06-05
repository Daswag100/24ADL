import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Industries() {
  const [showAll, setShowAll] = useState(false);

  const industries = [
    'Agro-processing & Commodity Trade',
    'Warehousing & Distribution',
    'Retail & Supermarkets',
    'Manufacturing & Industrial Operations',
    'Logistics & Supply Chain',
    'Oil & Gas Operations',
    'Banks & Financial Institutions',
    'Inventory-Backed Lending Operations',
    'Pharmaceutical & Healthcare Supply Chains',
    'Import & Export Operations',
    'FMCG Distribution Networks',
    'NGOs & Donor-Funded Projects',
  ];

  return (
    <section id="industries" className="py-14 md:py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header with Fade Up */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-left"
        >
          <motion.span
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0 } }
            }}
            className="text-xs font-semibold tracking-widest text-[#7C3AED] dark:text-brand-green-lemon uppercase block mb-3"
          >
            INDUSTRIES WE SERVE
          </motion.span>
          <motion.h2
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.1 } }
            }}
            className="font-syne font-bold text-4xl lg:text-5xl text-brand-black dark:text-white tracking-tight mb-6"
          >
            Built for Every Sector That Holds Stock
          </motion.h2>
          
          {/* Paragraphs */}
          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } }
            }}
            className="font-dmsans text-lg text-gray-500 dark:text-gray-400 font-light max-w-2xl leading-relaxed"
          >
            24ADL Inspection & Audit Services supports organizations across multiple sectors that rely on accurate inventory management, operational accountability, and independent verification systems.
          </motion.p>
          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.3 } }
            }}
            className="font-dmsans text-lg text-gray-500 dark:text-gray-400 font-light max-w-2xl leading-relaxed mt-3"
          >
            We work with businesses ranging from small enterprises to large-scale operations, with the aim of strengthening inventory accuracy, operational control, and reporting reliability through professional stock audit and verification services.
          </motion.p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-14">
          {industries.map((ind, index) => {
            const isHiddenOnMobile = index >= 6 && !showAll;
            return (
              <div
                key={index}
                className={`bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-5 py-4 items-center gap-3 hover:bg-brand-purple-light/25 dark:hover:bg-purple-950/20 hover:border-brand-purple-primary dark:hover:border-brand-green-lemon hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 cursor-pointer active:scale-[0.99] group ${
                  isHiddenOnMobile ? 'hidden sm:flex' : 'flex'
                }`}
              >
                {/* Purple Dot */}
                <span className="w-2 h-2 rounded-full bg-purple-600 dark:bg-brand-green-lemon shrink-0 group-hover:bg-brand-purple-primary dark:group-hover:bg-brand-green-lemon group-hover:scale-125 transition-all duration-200" />
                
                {/* Industry Name */}
                <span className="font-dmsans text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-brand-purple-primary dark:group-hover:text-brand-green-lemon transition-colors duration-200">
                  {ind}
                </span>
              </div>
            );
          })}
        </div>

        {/* Mobile Toggle Button - Only displays on screens < 640px */}
        <div className="sm:hidden mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="font-syne font-bold text-sm text-brand-purple-primary dark:text-brand-green-lemon bg-brand-purple-light/40 dark:bg-purple-950/40 border border-brand-purple-primary/10 dark:border-brand-green-lemon/10 px-6 py-3 rounded-full hover:bg-brand-purple-primary hover:text-white dark:hover:bg-brand-green-lemon dark:hover:text-black transition-all duration-300 cursor-pointer"
          >
            {showAll ? 'Show Less Sectors' : 'Show All Sectors'}
          </button>
        </div>

        {/* Footnote */}
        <p className="font-dmsans text-sm text-gray-400 dark:text-gray-500 mt-8 text-center font-normal">
          We work with businesses ranging from small enterprises to large-scale operations.
        </p>

      </div>
    </section>
  );
}
