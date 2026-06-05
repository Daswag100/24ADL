import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function useCountUp(target, duration, startTrigger = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startTrigger) return;
    let startTimestamp = null;
    let animationFrameId = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Quad easeOut: progress * (2 - progress)
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * target));
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };
    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [target, duration, startTrigger]);

  return count;
}

export default function Hero() {
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: '-80px' });

  const count2022 = useCountUp(2022, 1800, statsInView);
  const count9 = useCountUp(9, 1200, statsInView);
  const count4 = useCountUp(4, 800, statsInView);

  const headlineFirstLine = ["Ensuring", "Accuracy."];
  const headlineSecondLine = ["Strengthening", "Control."];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden flex flex-col justify-center pt-32 pb-24 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/PHOTO-2026-04-06-23-48-31_3_jpg.jpeg')"
      }}
    >
      {/* Dark Overlay for Readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-purple-950/90 via-purple-900/75 to-purple-900/40 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl w-full mx-auto px-6 lg:px-10 z-10 flex flex-col justify-center relative">
        <div className="max-w-3xl flex flex-col text-left">
          
          {/* Eyebrow Badge */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-4 py-1.5 text-xs sm:text-sm w-fit mb-8"
          >
            <span className="w-2 h-2 bg-brand-green-lemon rounded-full animate-pulse" />
            <span className="font-dmsans font-medium tracking-wide uppercase text-[11px] sm:text-xs">
              Independent Stock Audit & Verification
            </span>
          </motion.div>

          {/* Headline H1 with Word-by-Word Animation */}
          <h1 className="font-syne font-extrabold text-3xl sm:text-6xl lg:text-[76px] text-white tracking-tight leading-[1.05] mb-6 select-none">
            <span className="block mb-2">
              {headlineFirstLine.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.3 + idx * 0.06,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="inline-block mr-3 sm:mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </span>
            <span className="block text-brand-green-lemon">
              {headlineSecondLine.map((word, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: 16, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    delay: 0.3 + (idx + headlineFirstLine.length) * 0.06,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="inline-block mr-3 sm:mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Subheading */}
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-dmsans text-base sm:text-lg lg:text-xl text-white/70 max-w-xl leading-relaxed font-light mb-10"
          >
            We help businesses prevent unnoticed inventory losses through independent verification — across agro and non-agro sectors, from Lagos to global markets.
          </motion.p>

          {/* Buttons CTA */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-row flex-wrap gap-4 mb-20"
          >
            <a
              href="#contact"
              className="bg-brand-green-lemon text-brand-black font-syne font-bold text-sm sm:text-base px-7 py-4 rounded-md hover:bg-[#1cb054] transition-all duration-200 active:scale-[0.98] shadow-lg shadow-brand-green-lemon/10"
            >
              Request an Audit
            </a>
            <a
              href="#services"
              className="bg-transparent border border-white/30 text-white font-syne font-bold text-sm sm:text-base px-7 py-4 rounded-md hover:bg-white/10 hover:border-white/50 transition-all duration-200 active:scale-[0.98]"
            >
              Our Services
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            ref={statsRef}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="border-t border-white/10 pt-10"
          >
            <div className="flex flex-row flex-wrap gap-8 sm:gap-16">
              
              {/* Stat 1 */}
              <div className="flex flex-col">
                <span className="font-syne font-bold text-3xl sm:text-4xl text-white mb-1.5 min-w-[70px]">
                  {count2022}
                </span>
                <span className="font-dmsans text-xs sm:text-sm text-white/55 tracking-wider uppercase">
                  Year Founded
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col">
                <span className="font-syne font-bold text-3xl sm:text-4xl text-white mb-1.5 min-w-[50px]">
                  {count9 === 9 ? '9+' : count9}
                </span>
                <span className="font-dmsans text-xs sm:text-sm text-white/55 tracking-wider uppercase">
                  Global Partners
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col">
                <span className="font-syne font-bold text-3xl sm:text-4xl text-white mb-1.5 min-w-[30px]">
                  {count4}
                </span>
                <span className="font-dmsans text-xs sm:text-sm text-white/55 tracking-wider uppercase">
                  Continents Served
                </span>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
