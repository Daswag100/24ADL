import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export default function Industries({ showPreviewLink = false }) {
  const [showAll, setShowAll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const industries = [
    {
      title: 'Agro-processing & Commodity Trade',
      description: 'We support businesses involved in raw commodity handling, processing, aggregation, storage, and trading. This includes grain dealers, produce aggregators, exporters, processors, and warehouse operators that need accurate stock visibility, quality control, and inventory verification.'
    },
    {
      title: 'Warehousing & Distribution',
      description: 'We work with warehouses and distribution centers that handle stock movement, storage, dispatch, and reconciliation. Our services help these businesses reduce discrepancies, improve stock accuracy, and maintain better control over goods in transit and storage.'
    },
    {
      title: 'Retail & Supermarkets',
      description: 'We serve retail businesses and supermarket chains that manage fast-moving stock across multiple shelves, branches, or storage points. Our focus is on reducing shrinkage, improving stock counts, and helping management understand where inventory losses may be occurring.'
    },
    {
      title: 'Manufacturing & Industrial Operations',
      description: 'We support manufacturers and industrial operators who rely on raw materials, work-in-progress items, spare parts, and finished goods. Our audit and verification approach helps ensure stock records reflect actual production and operational usage.'
    },
    {
      title: 'Logistics & Supply Chain',
      description: 'We work with logistics providers, fulfillment centers, and supply chain operators that move goods across different locations. We help improve accountability, traceability, and reconciliation between dispatched, received, and stored items.'
    },
    {
      title: 'Oil & Gas Operations',
      description: 'We support oil and gas businesses with inventory-related verification across consumables, equipment, spare parts, and operational stores. The goal is to improve accountability, reduce losses, and strengthen stock control in high-value operational environments.'
    },
    {
      title: 'Banks & Financial Institutions',
      description: 'We serve banks and financial institutions that maintain physical assets, branch supplies, records, consumables, and controlled items. Our support helps improve asset visibility, internal control, and operational accountability.'
    },
    {
      title: 'Inventory-Backed Lending Operations',
      description: 'We assist lenders, financiers, and institutions involved in inventory-backed financing. Our verification services help confirm stock existence, condition, and movement, supporting stronger lending decisions and risk management.'
    },
    {
      title: 'Pharmaceutical & Healthcare Supply Chains',
      description: 'We work with pharmaceutical distributors, hospitals, clinics, and healthcare supply chains that manage sensitive and high-value stock. Our services help improve stock accuracy, reduce expiry-related losses, and strengthen control over critical inventory.'
    },
    {
      title: 'Import & Export Operations',
      description: 'We support importers and exporters that handle goods across ports, bonded warehouses, and distribution channels. Our role is to help verify stock quantities, improve documentation, and reduce mismatch between expected and actual inventory.'
    },
    {
      title: 'FMCG Distribution Networks',
      description: 'We serve fast-moving consumer goods companies and distributors that deal with high-volume, high-turnover stock. Our services help improve stock movement tracking, warehouse accuracy, and distribution accountability.'
    },
    {
      title: 'NGOs & Donor-Funded Projects',
      description: 'We support NGOs, development agencies, and donor-funded projects that manage project materials, consumables, relief items, or inventory-based interventions. Our work helps ensure proper accountability, transparent record-keeping, and reliable stock reporting.'
    }
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-14">
          {industries.map((ind, index) => {
            const isHiddenOnMobile = index >= 6 && !showAll;
            const isOpen = hoveredIndex === index;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(isOpen ? null : index)}
                className={`bg-white dark:bg-gray-800 border rounded-xl px-5 py-4 flex flex-col justify-between hover:shadow-md transition-all duration-300 cursor-pointer group ${
                  isOpen
                    ? 'border-brand-purple-primary dark:border-brand-green-lemon bg-brand-purple-light/5 dark:bg-purple-950/10'
                    : 'border-gray-200 dark:border-gray-700 hover:border-brand-purple-primary dark:hover:border-brand-green-lemon'
                } ${
                  isHiddenOnMobile ? 'hidden sm:flex' : 'flex'
                }`}
              >
                {/* Header Row */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    {/* Purple/Green Dot */}
                    <span className={`w-2 h-2 rounded-full shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? 'bg-brand-purple-primary dark:bg-brand-green-lemon scale-125' 
                        : 'bg-purple-600 dark:bg-brand-green-lemon group-hover:scale-125'
                    }`} />
                    
                    {/* Industry Name */}
                    <span className={`font-dmsans text-sm font-medium transition-colors duration-300 ${
                      isOpen 
                        ? 'text-brand-purple-primary dark:text-brand-green-lemon font-semibold' 
                        : 'text-gray-800 dark:text-gray-200 group-hover:text-brand-purple-primary dark:group-hover:text-brand-green-lemon'
                    }`}>
                      {ind.title}
                    </span>
                  </div>

                  <ChevronDown className={`h-4.5 w-4.5 text-gray-400 dark:text-gray-550 transition-transform duration-300 shrink-0 ${
                    isOpen ? 'rotate-180 text-brand-purple-primary dark:text-brand-green-lemon' : ''
                  }`} />
                </div>

                {/* Description - Accordion style using Framer Motion */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="overflow-hidden w-full"
                >
                  <p className="font-dmsans text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-3 pt-3 border-t border-gray-100 dark:border-gray-750">
                    {ind.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>

        {showPreviewLink && (
          <div className="mt-10 flex justify-center">
            <Link
              to="/industries"
              className="inline-flex items-center text-purple-700 dark:text-brand-green-lemon font-semibold hover:underline group cursor-pointer"
            >
              See All Industries <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        )}

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
