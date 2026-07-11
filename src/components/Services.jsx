import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Wheat,
  FlaskConical,
  Warehouse,
  TrendingDown,
  Thermometer,
  Microscope,
  ShoppingCart,
  Factory,
  Truck,
  Package,
  Wrench,
  BarChart2,
  RefreshCcw,
  ShieldCheck,
  FileSearch,
  ChevronDown,
} from 'lucide-react';

export default function Services({ showPreviewLink = false }) {
  const [activeTab, setActiveTab] = useState('agro');
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const sectionRef = useRef(null);

  // Reset to collapsed when tab switches
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setHoveredIndex(null);
  };

  const agroServices = [
    {
      icon: Wheat,
      title: 'Farm Produce Verification',
      description: "We conduct independent physical verification and quantification of grains, crops, and livestock. This ensures that your records align perfectly with what is on the ground, minimizing shrinkage and reporting discrepancies.",
    },
    {
      icon: FlaskConical,
      title: 'Agricultural Input Audit',
      description: 'A detailed audit of seeds, fertilizers, chemical inputs, and agrochemicals. We verify quantities, analyze quality standards, and assess storage facility compliance to protect your agricultural investments.',
    },
    {
      icon: Warehouse,
      title: 'Warehouse & Silo Verification',
      description: 'Our team performs on-site verification of storage facilities, silos, and warehouses. We conduct capacity assessments, gauge volume levels, and reconcile physical findings with internal ledger systems.',
    },
    {
      icon: TrendingDown,
      title: 'Post-Harvest Loss Assessment',
      description: 'We identify, measure, and analyze losses at every stage of the post-harvest supply chain. By pinpointing issues like spoilage, damage, and pilferage, we help you implement corrective measures to preserve value.',
    },
    {
      icon: Thermometer,
      title: 'Storage Condition Monitoring',
      description: 'Continuous audit and monitoring of temperature, humidity, and ventilation controls within your storage areas. This prevents early spoilage, maintains product quality, and ensures strict adherence to international safety standards.',
    },
    {
      icon: Microscope,
      title: 'Quality Analysis & Inspection',
      description: 'Receiving the right quantity does not always mean receiving the right quality. In agro, poor handling, bad storage, or dishonest grading directly affects the value of your goods, even when the numbers on paper look fine. Moisture, contamination, and wrong grades are easy to miss without a proper check. We inspect your commodities at any point in the supply chain, checking grade, condition, and moisture levels, so you always know exactly what you are receiving and what it is truly worth.',
    },
  ];

  const nonAgroServices = [
    {
      icon: ShoppingCart,
      title: 'Retail Inventory Verification',
      description: 'Comprehensive retail audits across stores, supermarkets, and regional distribution networks. We perform physical counts of products, audit point-of-sale systems, and reconcile stock discrepancies immediately.',
    },
    {
      icon: Factory,
      title: 'Manufacturing Stock Audit',
      description: 'Independent audits of raw materials, work-in-progress (WIP), and finished goods in production plants. We trace production yields, analyze scrap rates, and audit material control registers for maximum precision.',
    },
    {
      icon: Truck,
      title: 'Warehouse & Logistics Inventory',
      description: 'End-to-end checks covering the receipt, dispatch, and handling of stock within your distribution hubs. We map process flows and audit logistics manifests to ensure every unit is accounted for in transit.',
    },
    {
      icon: Package,
      title: 'Raw Materials Verification',
      description: 'Independent count and verification of raw input stocks prior to manufacturing. This ensures production teams have accurate resource levels and prevents stock-outs or over-purchasing of materials.',
    },
    {
      icon: Wrench,
      title: 'Spare Parts & Equipment Audit',
      description: 'Audit of critical spare parts, machine components, maintenance tools, and active equipment registers. We help industrial operators prevent downtime and secure high-value maintenance assets.',
    },
  ];

  const additionalServices = [
    {
      icon: BarChart2,
      title: 'Inventory Control Assessment',
      description: 'We evaluate your internal inventory systems, custody chains, and warehouse security protocols. Our experts provide a roadmap of actionable recommendations to reduce shrinkage and tighten operational controls.',
    },
    {
      icon: RefreshCcw,
      title: 'Stock Reconciliation',
      description: 'A methodical, line-by-line reconciliation of physical audit counts against your book records. We identify the root causes of variances, locate missing entries, and adjust records to reflect reality.',
    },
    {
      icon: ShieldCheck,
      title: 'Compliance Verification',
      description: 'We verify that inventory management practices align with regulatory, contractual, or lender requirements. This provides third-party assurance for banks, trading houses, and financial institutions.',
    },
    {
      icon: FileSearch,
      title: 'Operational Audit Support',
      description: 'Customized support services to help your team prepare for external audits and improve internal control frameworks. We assist in structuring audit trails, documentation, and reporting templates.',
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
    <section id="services" ref={sectionRef} className="py-14 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
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
            className="text-xs font-semibold tracking-widest text-[#4C1D95] dark:text-brand-green-lemon uppercase block mb-3 font-dmsans"
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
              onClick={() => handleTabChange(tab.id)}
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
          <div className="relative w-full md:max-w-2xl mx-auto h-64 md:h-[380px] rounded-2xl mb-8 mt-6 overflow-hidden shadow-sm bg-gray-100 dark:bg-gray-800">
            <img
              src={getTabBanner()}
              className="w-full h-full object-cover object-[center_30%]"
              alt={`${activeTab} services banner`}
            />
            <div className="absolute inset-0 bg-purple-900/20 dark:bg-purple-950/40 rounded-2xl pointer-events-none" />
          </div>
        )}

        {/* Dynamic Card Grid (Accordion List style) */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-2 items-start"
        >
          {getActiveCards().map((service, index) => {
            const IconComponent = service.icon;
            const isOpen = hoveredIndex === index;

            return (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => setHoveredIndex(isOpen ? null : index)}
                variants={{
                  hidden: { y: 24, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
                className={`transition-colors duration-300 cursor-pointer border rounded-xl p-5 flex flex-col justify-between bg-white dark:bg-gray-800 ${
                  isOpen
                    ? 'border-purple-500 dark:border-brand-green-lemon shadow-sm bg-brand-purple-light/5 dark:bg-purple-950/10'
                    : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500'
                }`}
              >
                {/* Collapsed Header */}
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3.5">
                    {/* Icon Container */}
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 bg-violet-50 dark:bg-purple-950/50">
                      <IconComponent className="h-5 w-5 text-purple-700 dark:text-brand-green-lemon" />
                    </div>
                    <span className={`font-syne font-bold text-base transition-colors duration-300 ${
                      isOpen
                        ? 'text-brand-purple-primary dark:text-brand-green-lemon'
                        : 'text-gray-900 dark:text-white'
                    }`}>
                      {service.title}
                    </span>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform duration-300 shrink-0 ${
                      isOpen
                        ? 'rotate-180 text-brand-purple-primary dark:text-brand-green-lemon'
                        : 'text-gray-400'
                    }`}
                  />
                </div>

                {/* Expanded Detail */}
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
                  onClick={(e) => e.stopPropagation()}
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mt-3 pt-3 border-t border-gray-100 dark:border-gray-800 font-dmsans">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {showPreviewLink && (
          <div className="flex justify-center mt-12">
            <Link
              to="/services"
              className="bg-brand-green-lemon hover:bg-[#1fa950] text-brand-black font-syne font-bold py-3.5 px-8 rounded-md transition-all shadow-md active:scale-[0.98] inline-block text-center cursor-pointer shadow-brand-green-lemon/10"
            >
              View All Services
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
