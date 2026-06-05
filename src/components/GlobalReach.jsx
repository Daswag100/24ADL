import { motion } from 'framer-motion';

export default function GlobalReach() {
  const clients = [
    { name: 'JB Cocoa Sdn Bhd', location: 'Malaysia' },
    { name: 'COAF Agri', location: 'Dubai, UAE' },
    { name: 'Sunbeth', location: 'Nigeria' },
    { name: 'Agroimpex', location: 'Conakry, Guinea' },
    { name: 'Cocoanect BV', location: 'Netherlands' },
    { name: 'TRC Cocoa SA', location: 'USA' },
    { name: 'Tiberius', location: 'Switzerland' },
    { name: 'Daarnhouwer & Co BV', location: 'Netherlands' },
    { name: 'Avista Resort', location: 'Lagos, Nigeria' },
  ];

  const regions = ['Africa', 'Europe', 'Asia', 'North America', 'Middle East'];

  return (
    <section id="clients" className="py-14 md:py-24 bg-brand-purple-primary text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header with Fade Up */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mb-10 md:mb-16"
        >
          <motion.span
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0 } }
            }}
            className="text-xs font-semibold tracking-widest text-white/50 uppercase block mb-3"
          >
            OUR ENGAGEMENT
          </motion.span>
          <motion.h2
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.1 } }
            }}
            className="font-syne font-bold text-4xl lg:text-5xl text-white tracking-tight mb-4"
          >
            Trusted by Businesses Across the World
          </motion.h2>
          <motion.p
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.2 } }
            }}
            className="font-dmsans text-base sm:text-lg text-white/55 font-light max-w-2xl leading-relaxed"
          >
            Serving clients across Europe, North America, Asia, and Africa. We have supported operations with some of the most respected names in agro-commodity and distribution.
          </motion.p>
        </motion.div>

        {/* Atmosphere Image with Purple Overlay */}
        <div className="relative w-full h-44 md:h-64 rounded-2xl mb-8 overflow-hidden shadow-md">
          <img
            src="/images/PHOTO-2026-04-06-23-48-31_8_jpg.jpeg"
            className="w-full h-full object-cover object-center"
            alt="Global operations warehouse"
          />
          <div className="absolute inset-0 bg-purple-900/30 rounded-2xl pointer-events-none" />
        </div>

        {/* Two-Column Grid: stacks vertically on mobile, splits on lg screens */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Column 1 (renders first on mobile) - Client Rows */}
          <motion.div
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.07,
                }
              }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col"
          >
            {clients.map((client, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { x: -24, opacity: 0 },
                  visible: {
                    x: 0,
                    opacity: 1,
                    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
                  }
                }}
                className="flex justify-between items-center bg-white/7 border border-white/10 rounded-xl px-5 py-4 mb-3 hover:bg-white/10 transition-colors duration-200"
              >
                <span className="font-syne font-bold text-sm text-white">
                  {client.name}
                </span>
                <span className="font-dmsans text-sm text-white/40">
                  {client.location}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Column 2 (renders second on mobile) - Narrative & Region Tags */}
          <div className="flex flex-col lg:sticky lg:top-24">
            {/* Tagline */}
            <h3 className="font-syne font-bold text-2xl sm:text-3xl text-white leading-snug">
              Serving clients across <span className="text-[#22C55E]">4 continents</span> and counting.
            </h3>

            {/* Paragraph */}
            <p className="font-dmsans text-white/50 font-light text-base leading-relaxed mt-4">
              Every engagement is handled with the same level of precision and professionalism — whether it's a warehouse in Lagos or a commodity trader in the Netherlands.
            </p>

            {/* Region Tags - flex-wrap gap-2 on mobile */}
            <div className="flex flex-wrap gap-2 mt-7">
              {regions.map((reg) => (
                <span
                  key={reg}
                  className="bg-white/10 border border-white/15 text-white/80 text-xs sm:text-sm px-4 py-1.5 rounded-full font-medium"
                >
                  {reg}
                </span>
              ))}
            </div>

            {/* CTA Button: full-width on mobile, w-auto on desktop */}
            <div className="mt-8 flex">
              <a
                href="#contact"
                className="w-full text-center sm:w-auto bg-[#22C55E] text-black font-syne font-bold text-sm sm:text-base px-7 py-3.5 rounded-md hover:bg-[#1cb054] transition-colors active:scale-[0.98] inline-block shadow-lg shadow-[#22C55E]/10"
              >
                Work With Us
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
