import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Wheat,
  FlaskConical,
  Warehouse,
  TrendingDown,
  Thermometer,
  ShoppingCart,
  Factory,
  Truck,
  Package,
  Wrench,
  BarChart2,
  RefreshCcw,
  ShieldCheck,
  FileSearch,
} from 'lucide-react';

export default function Services() {
  const [activeTab, setActiveTab] = useState('agro');
  const [activeCard, setActiveCard] = useState(null);

  const agroServices = [
    {
      icon: Wheat,
      title: 'Farm Produce Verification',
      description: "Physical verification and quantification of grains, crops, and livestock, ensuring what's recorded matches what's on the ground.",
    },
    {
      icon: FlaskConical,
      title: 'Agricultural Input Audit',
      description: 'Independent audit of fertilizers, seeds, and chemical inputs to verify quantities, quality, and storage compliance.',
    },
    {
      icon: Warehouse,
      title: 'Warehouse & Silo Verification',
      description: 'On-site stock verification for storage facilities including silo capacity checks and comparison with warehouse records.',
    },
    {
      icon: TrendingDown,
      title: 'Post-Harvest Loss Assessment',
      description: 'Identifying and quantifying post-harvest losses across the supply chain, including spoilage, waste, and shrinkage detection.',
    },
    {
      icon: Thermometer,
      title: 'Storage Condition Monitoring',
      description: 'Monitoring and reporting on storage conditions that affect stock quality, such as temperature, humidity, and facility standards.',
    },
  ];

  const nonAgroServices = [
    {
      icon: ShoppingCart,
      title: 'Retail Inventory Verification',
      description: 'Retail stock audits across shops, supermarkets, and distribution centers, where physical counts are reconciled against system records.',
    },
    {
      icon: Factory,
      title: 'Manufacturing Stock Audit',
      description: 'Audit of raw materials, work-in-progress, and finished goods across factories and production facilities.',
    },
    {
      icon: Truck,
      title: 'Warehouse & Logistics Inventory',
      description: 'End-to-end inventory checks across warehousing and logistics operations, from receipt to dispatch reconciliation.',
    },
    {
      icon: Package,
      title: 'Raw Materials Verification',
      description: 'Independent verification of raw material stocks and finished goods, ensuring recorded values reflect actual physical holdings.',
    },
    {
      icon: Wrench,
      title: 'Spare Parts & Equipment Audit',
      description: 'Audit of spare parts inventories and equipment registers, which is critical for manufacturers and industrial operators.',
    },
  ];

  const additionalServices = [
    {
      icon: BarChart2,
      title: 'Inventory Control Assessment',
      description: 'Evaluating your existing inventory control systems and recommending improvements to reduce losses and improve accuracy.',
    },
    {
      icon: RefreshCcw,
      title: 'Stock Reconciliation',
      description: 'Systematic reconciliation of physical stock counts against book records to identify variances, excesses, and shortages.',
    },
    {
      icon: ShieldCheck,
      title: 'Compliance Verification',
      description: 'Verifying inventory compliance with regulatory, contractual, or lender requirements, supporting banks and financiers.',
    },
    {
      icon: FileSearch,
      title: 'Operational Audit Support',
      description: 'Broader operational audit support to help organizations strengthen internal controls and reporting frameworks.',
    },
  ];

  const getActiveCards = () => {
    switch (activeTab) {
      case 'agro':
        return agroServices;
      case 'non-agro':
        return nonAgroServices;
      case 'additional':
        return additionalServices;
      default:
        return agroServices;
    }
  };

  const tabs = [
    { id: 'agro', label: 'Agro Services' },
    { id: 'non-agro', label: 'Non-Agro Services' },
    { id: 'additional', label: 'Additional Services' },
  ];

  const getTabBanner = () => {
    switch (activeTab) {
      case 'agro':
        return '/images/PHOTO-2026-04-06-23-48-31_jpg.jpeg';
      case 'non-agro':
        return '/images/PHOTO-2026-04-06-23-48-32_jpg.jpeg';
      case 'additional':
        return '/images/PHOTO-2026-04-06-23-48-31_2_jpg.jpeg';
      default:
        return null;
    }
  };

  return (
    <section id="services" className="py-14 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-12"
        >
          <motion.span
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0 } }
            }}
            className="text-xs font-semibold tracking-widest text-[#4C1D95] dark:text-brand-green-lemon uppercase block mb-3"
          >
            WHAT WE DO
          </motion.span>
          <motion.h2
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.1 } }
            }}
            className="font-syne font-bold text-4xl lg:text-5xl text-brand-black dark:text-white tracking-tight mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } }
            }}
            className="font-dmsans text-base sm:text-lg text-gray-500 dark:text-gray-400 font-light max-w-xl"
          >
            End-to-end stock audit solutions covering both agricultural and non-agricultural operations.
          </motion.p>
        </motion.div>

        {/* Tab Buttons Switcher */}
        <div className="flex flex-wrap gap-2 mt-8 border-b border-gray-100 dark:border-gray-800 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setActiveCard(null); // Reset selected card index
              }}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold font-syne transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#4C1D95] text-white border-transparent'
                  : 'bg-white dark:bg-gray-850 border-gray-200 dark:border-gray-700 border-[1.5px] text-gray-500 dark:text-gray-400 hover:border-purple-500 dark:hover:border-purple-500'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Banner */}
        {getTabBanner() && (
          <div className="relative w-full h-64 md:h-80 rounded-2xl mb-8 mt-10 overflow-hidden shadow-sm bg-gray-100 dark:bg-gray-800">
            <img
              src={getTabBanner()}
              className="w-full h-full object-cover object-top"
              alt={`${activeTab} services banner`}
            />
            <div className="absolute inset-0 bg-purple-900/20 dark:bg-purple-950/40 rounded-2xl pointer-events-none" />
          </div>
        )}

        {/* Dynamic Card Grid */}
        <motion.div
          key={activeTab}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              }
            }
          }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2"
        >
          {getActiveCards().map((service, index) => {
            const IconComponent = service.icon;
            const isSelected = activeCard === index;

            return (
              <motion.div
                key={index}
                onClick={() => setActiveCard(index)}
                variants={{
                  hidden: { y: 24, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`transition-all duration-200 cursor-pointer rounded-2xl p-7 flex flex-col h-full group ${
                  isSelected
                    ? 'bg-[#4C1D95] border border-transparent scale-[1.02] shadow-md'
                    : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-500 dark:hover:border-purple-500 hover:shadow-sm'
                }`}
              >
                {/* Icon Container */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 shrink-0 transition-colors duration-200 ${
                    isSelected ? 'bg-white/15' : 'bg-violet-50 dark:bg-purple-950/50'
                  }`}
                >
                  <IconComponent
                    className={`h-5 w-5 transition-colors duration-200 ${
                      isSelected ? 'text-white' : 'text-purple-700 dark:text-brand-green-lemon'
                    }`}
                  />
                </div>

                {/* Title & Description */}
                <h3
                  className={`font-syne font-bold text-base mb-2 transition-colors duration-200 ${
                    isSelected ? 'text-white' : 'text-gray-900 dark:text-white'
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`font-dmsans text-sm leading-relaxed font-normal flex-grow transition-colors duration-200 ${
                    isSelected ? 'text-white/70' : 'text-gray-500 dark:text-gray-400'
                  }`}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
