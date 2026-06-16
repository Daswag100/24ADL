import { motion } from 'framer-motion';
import { ShieldCheck, Globe, Zap, Map } from 'lucide-react';

export default function WhyUs() {
  const cards = [
    {
      num: '01',
      bgClass: 'bg-[#111827] text-white border border-transparent',
      numClass: 'text-white/10',
      icon: <ShieldCheck className="h-7 w-7 text-green-400" />,
      title: 'Independent & Unbiased',
      titleClass: 'text-white',
      desc: 'We have no commercial interest in your stock figures. Our findings are objective, our methodology consistent, and our reports answer only to the facts, not to what anyone hopes to find.',
      descClass: 'text-white/55',
      photo: '/images/PHOTO-2026-04-06-23-48-31_13_jpg.jpeg',
      photoAlt: 'Independent auditor performing stock inventory count',
      photoClass: 'object-top'
    },
    {
      num: '02',
      bgClass: 'bg-[#EDE9FE] text-[#111827] border border-transparent dark:bg-purple-950/30 dark:text-white',
      numClass: 'text-purple-900/10 dark:text-white/5',
      icon: <Globe className="h-7 w-7 text-purple-700 dark:text-brand-green-lemon" />,
      title: 'Agro & Non-Agro Depth',
      titleClass: 'text-purple-900 dark:text-white',
      desc: 'Sector knowledge that runs deep in both agricultural and non-agricultural operations, rather than a firm that retrofits one playbook for everything.',
      descClass: 'text-gray-600 dark:text-gray-300',
      photo: '/images/warehouse.jpg',
      photoAlt: 'Agro and Non-Agro inventory depth auditing',
      photoClass: 'object-top'
    },
    {
      num: '03',
      bgClass: 'bg-[#22C55E] text-[#111827] border border-transparent',
      numClass: 'text-black/10',
      icon: <Zap className="h-7 w-7 text-black/70" />,
      title: 'Actionable Insights',
      titleClass: 'text-black',
      desc: "The report doesn't end at the count. We deliver variance analysis, control assessments, and practical recommendations, allowing you to act on what we find rather than just filing it.",
      descClass: 'text-black/60',
      photo: '/images/PHOTO-2026-04-06-23-48-31_10_jpg.jpeg',
      photoAlt: 'Actionable Insights graph and data metrics representation',
      photoClass: 'object-center'
    },
    {
      num: '04',
      bgClass: 'bg-white border border-gray-200 text-[#111827] dark:bg-gray-800 dark:border-gray-700 dark:text-white',
      numClass: 'text-purple-900/10 dark:text-white/5',
      icon: <Map className="h-7 w-7 text-purple-700 dark:text-brand-green-lemon" />,
      title: 'Global Exposure',
      titleClass: 'text-gray-900 dark:text-white',
      desc: 'Clients across Malaysia, Netherlands, Switzerland, USA, Guinea, Dubai, and Nigeria. The experience to handle complex, cross-border audit engagements of any scale.',
      descClass: 'text-gray-500 dark:text-gray-400',
      photo: '/images/warehouse2.jpg',
      photoAlt: 'Global exposure and cross-border audit scale',
      photoClass: 'object-center'
    },
  ];

  return (
    <section id="why-us" className="py-14 md:py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
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
            className="text-xs font-semibold tracking-widest text-brand-purple-mid dark:text-brand-green-lemon uppercase block mb-3"
          >
            WHY 24ADL
          </motion.span>
          <motion.h2
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.1 } }
            }}
            className="font-syne font-bold text-4xl lg:text-5xl text-brand-black dark:text-white tracking-tight"
          >
            What Sets Us Apart
          </motion.h2>
        </motion.div>

        {/* 2x2 Grid */}
        <motion.div
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14"
        >
          {cards.map((card) => (
            <motion.div
              key={card.num}
              variants={{
                hidden: { scale: 0.96, opacity: 0 },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
                }
              }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`rounded-2xl p-8 sm:p-9 relative overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between ${card.bgClass}`}
            >
              <div className="relative h-full flex flex-col justify-between">
                <div>
                  {/* Giant Faded Number */}
                  <span
                    className={`font-syne font-bold text-[100px] sm:text-[120px] absolute -top-8 right-4 select-none pointer-events-none leading-none ${card.numClass}`}
                  >
                    {card.num}
                  </span>

                  {/* Optional Photo */}
                  {card.photo && (
                    <img
                      src={card.photo}
                      className={`w-full h-44 object-cover rounded-xl mb-5 relative z-10 ${card.photoClass}`}
                      alt={card.photoAlt}
                    />
                  )}

                  {/* Icon Container */}
                  <div className="mb-6 relative z-10">
                    {card.icon}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col">
                    <h3 className={`font-syne font-bold text-xl mb-3 ${card.titleClass}`}>
                      {card.title}
                    </h3>
                    <p className={`font-dmsans font-light text-base leading-relaxed ${card.descClass}`}>
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
