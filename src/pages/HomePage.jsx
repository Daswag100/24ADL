import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Building2, 
  ClipboardList, 
  Globe, 
  ShieldCheck, 
  Users, 
  MessageSquare,
  Award,
  HelpCircle
} from 'lucide-react';
import Hero from '../components/Hero';
import About from '../components/About';

export default function HomePage() {
  const cards = [
    {
      title: 'Our Services',
      route: '/services',
      icon: ShieldCheck,
      description: 'Agro, non-agro, and customized collateral verification and reconciliation support.',
    },
    {
      title: 'Industries We Serve',
      route: '/industries',
      icon: Building2,
      description: 'From agro-commodity to FMCG, pharma, and manufacturing — see every sector we cover.',
    },
    {
      title: 'Our Approach',
      route: '/approach',
      icon: ClipboardList,
      description: 'A structured, five-step audit process built for accuracy and transparency.',
    },
    {
      title: 'Global Reach',
      route: '/clients',
      icon: Globe,
      description: 'Trusted by businesses across Africa, Europe, Asia, and North America.',
    },
    {
      title: 'Why Choose 24ADL',
      route: '/why-us',
      icon: Award,
      description: 'Independent, experienced, and built on a foundation of zero conflict of interest.',
    },
    {
      title: 'Careers',
      route: '/careers',
      icon: Users,
      description: 'Join a growing audit firm working across sectors and borders.',
    },
    {
      title: 'Frequently Asked Questions',
      route: '/faq',
      icon: HelpCircle,
      description: 'Find answers to common questions about our audit fees, timelines, and compliance.',
    },
    {
      title: 'Contact Us',
      route: '/contact',
      icon: MessageSquare,
      description: 'Tell us about your inventory challenge and we\'ll be in touch within 24 hours.',
    },
  ];

  const transitionSettings = {
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1], // easeOutQuart
  };

  return (
    <main className="min-h-screen bg-brand-white dark:bg-gray-955">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. About Us Section (preview only) */}
      <About />

      {/* 3. Explore 24ADL Navigation Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 border-t border-b border-gray-100 dark:border-gray-800/40 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Section Header with Fade Up */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                }
              }
            }}
            className="mb-12 text-left"
          >
            <motion.span
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
              }}
              className="text-xs font-bold tracking-widest text-[#22C55E] uppercase block mb-3 font-dmsans"
            >
              EXPLORE MORE
            </motion.span>
            <motion.h2
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
              }}
              className="font-syne font-bold text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4 tracking-tight"
            >
              Everything You Need to Know About 24ADL
            </motion.h2>
            <motion.p
              variants={{
                hidden: { y: 20, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
              }}
              className="font-dmsans text-lg text-gray-550 dark:text-gray-400 font-light max-w-2xl leading-relaxed"
            >
              Navigate to any section to learn more about how we work, who we serve, and how to get started.
            </motion.p>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08,
                }
              }
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { y: 24, opacity: 0 },
                    visible: {
                      y: 0,
                      opacity: 1,
                      transition: transitionSettings,
                    }
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="w-full h-full flex"
                >
                  <Link
                    to={card.route}
                    className="group flex flex-col justify-between w-full border border-gray-200 dark:border-gray-700 rounded-2xl p-6 transition-all duration-200 bg-white dark:bg-gray-800 cursor-pointer shadow-sm hover:shadow-md hover:border-purple-400 dark:hover:border-purple-500"
                  >
                    <div>
                      {/* Icon Container */}
                      <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/40 flex items-center justify-center mb-4 text-purple-700 dark:text-purple-300 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-5 w-5" />
                      </div>

                      {/* Card Title */}
                      <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mb-2 group-hover:text-brand-purple-primary dark:group-hover:text-brand-green-lemon transition-colors duration-200">
                        {card.title}
                      </h3>

                      {/* Card Description */}
                      <p className="font-dmsans text-sm text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    {/* Bottom Link CTA */}
                    <div className="flex items-center gap-1 text-sm font-semibold text-purple-700 dark:text-purple-400 group-hover:text-green-500 transition-colors duration-200 mt-2">
                      <span>Explore</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>
    </main>
  );
}
