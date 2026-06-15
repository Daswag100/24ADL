import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const categories = ['All', 'General', 'Services', 'Process', 'Engagement'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    // General Questions
    {
      category: 'General',
      question: 'What does 24ADL do?',
      answer: '24ADL helps businesses verify stock, inspect warehouse operations, identify inventory discrepancies, and improve inventory control across agricultural (agro) and non-agricultural (non-agro) sectors.',
    },
    {
      category: 'General',
      question: 'What kind of businesses do you work with?',
      answer: 'We work with agro businesses, wholesale distributors, retailers, warehouses, FMCG operators, pharmaceutical stockholders, electronics businesses, lubricants suppliers, and other inventory-based organizations.',
    },
    {
      category: 'General',
      question: 'Is 24ADL only for agro stock?',
      answer: 'No. Agro is one of our strongest areas, but we also serve non-agro businesses that need stock audit, warehouse inspection, and inventory verification.',
    },
    // Service Questions
    {
      category: 'Services',
      question: 'What services do you offer?',
      answer: 'We offer stock audit, stock verification, warehouse inspection, reconciliation, inventory control review, discrepancy analysis, and staff training.',
    },
    {
      category: 'Services',
      question: 'What is the difference between stock audit and stock verification?',
      answer: 'Stock audit is the broader process of checking inventory records, storage methods, and physical controls. Stock verification is the precise physical confirmation of what is actually on the ground.',
    },
    {
      category: 'Services',
      question: 'Do you work with manual records and digital records?',
      answer: 'Yes. We work with bin cards, stock sheets, Excel records, ERP reports, barcode systems, and other types of inventory records.',
    },
    // Process Questions
    {
      category: 'Process',
      question: 'How does a 24ADL audit work?',
      answer: 'We begin with an understanding of the site and stock type, then conduct physical verification, compare findings with records, identify discrepancies, and prepare a detailed report with recommendations.',
    },
    {
      category: 'Process',
      question: 'Do you provide a report after the audit?',
      answer: 'Yes. We provide a clear, professional report of findings, observations, variances, and practical recommendations to improve operations.',
    },
    {
      category: 'Process',
      question: 'Can you handle large warehouses?',
      answer: 'Yes. We regularly handle audits in small, medium, and large-scale warehouses depending on the scope of engagement.',
    },
    {
      category: 'Process',
      question: 'Will our information remain confidential?',
      answer: 'Yes. Confidentiality is taken extremely seriously. All client data and operational information are handled securely and shared only with authorized personnel.',
    },
    // Engagement Questions
    {
      category: 'Engagement',
      question: 'How do we book an audit?',
      answer: 'You can contact us through the website form, email us at info@24adlinspection.com, or call us at +234 8033179732 to discuss the scope, location, timeline, and stock category.',
    },
    {
      category: 'Engagement',
      question: 'Can you work with startups and small businesses?',
      answer: 'Yes. We work with businesses at different stages, including growing startups that need to establish clean, reliable stock control.',
    },
    {
      category: 'Engagement',
      question: 'Do you offer training?',
      answer: 'Yes. We provide practical training for staff on stock control, warehouse discipline, audit readiness, and inventory management.',
    },
  ];

  // Filter FAQ items
  const filteredFaq = activeCategory === 'All' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-14 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300 border-t border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold tracking-widest text-brand-purple-mid dark:text-brand-green-lemon uppercase block mb-3">
            QUESTIONS & ANSWERS
          </span>
          <h2 className="font-syne font-bold text-4xl lg:text-5xl text-gray-900 dark:text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-dmsans text-gray-500 dark:text-gray-400 font-light text-base max-w-xl mx-auto">
            Got questions about our audit process, services, or confidentiality? Find quick answers below.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setOpenIndex(null); // Reset open states
              }}
              className={`font-syne font-semibold text-xs sm:text-sm px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-brand-purple-primary border-brand-purple-primary text-white dark:bg-brand-green-lemon dark:border-brand-green-lemon dark:text-brand-black'
                  : 'bg-transparent border-gray-200 text-gray-600 dark:border-gray-800 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-4">
          <AnimatePresence initial={false}>
            {filteredFaq.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'border-brand-purple-primary/30 dark:border-brand-green-lemon/30 bg-brand-purple-light/10 dark:bg-purple-950/10'
                      : 'border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30'
                  }`}
                >
                  {/* Accordion Trigger Button */}
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-syne font-bold text-base text-gray-900 dark:text-white cursor-pointer select-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <HelpCircle className={`w-5 h-5 shrink-0 transition-colors ${isOpen ? 'text-brand-purple-primary dark:text-brand-green-lemon' : 'text-gray-400'}`} />
                      <span>{item.question}</span>
                    </div>
                    <div className="shrink-0 w-8 h-8 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-brand-purple-primary dark:text-brand-green-lemon" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Expandable Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ 
                          height: 'auto', 
                          opacity: 1,
                          transition: { height: { duration: 0.35, ease: [0.25, 1, 0.5, 1] }, opacity: { duration: 0.25 } } 
                        }}
                        exit={{ 
                          height: 0, 
                          opacity: 0,
                          transition: { height: { duration: 0.3, ease: [0.25, 1, 0.5, 1] }, opacity: { duration: 0.2 } } 
                        }}
                      >
                        <div className="px-5 pb-5 pt-0 font-dmsans text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300 font-light border-t border-gray-100 dark:border-gray-800/50 mt-1.5">
                          <div className="pt-3">
                            {item.answer}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
