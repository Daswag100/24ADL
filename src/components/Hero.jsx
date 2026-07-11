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

  // Typewriter implementation (PitchMatter Style)
  const typewriterPhrases = ["Strengthening Control.", "Reducing Losses.", "Built on Verification."];
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cursorOpacity, setCursorOpacity] = useState(1);

  // Blinking cursor | effect toggling opacity between 0 and 1 every 530ms
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorOpacity((prev) => (prev === 1 ? 0 : 1));
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Typewriter logic: typing 62ms, deleting 38ms, pause 2200ms
  useEffect(() => {
    if (isPaused) return;

    const activePhrase = typewriterPhrases[phraseIndex];
    const speed = isDeleting ? 38 : 62;

    const handleTick = () => {
      if (!isDeleting) {
        if (displayText.length < activePhrase.length) {
          setDisplayText(activePhrase.substring(0, displayText.length + 1));
        } else {
          setIsPaused(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(activePhrase.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
        }
      }
    };

    const intervalId = setInterval(handleTick, speed);
    return () => clearInterval(intervalId);
  }, [displayText, isDeleting, phraseIndex, isPaused]);

  // Handle the 2200ms pause timer when isPaused becomes true
  useEffect(() => {
    if (!isPaused) return;

    const timeoutId = setTimeout(() => {
      setIsDeleting(true);
      setIsPaused(false);
    }, 2200);

    return () => clearTimeout(timeoutId);
  }, [isPaused]);

  return (
    <section
      id="home"
      className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center pt-20 pb-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/PHOTO-2026-04-06-23-48-31_3_jpg.jpeg')",
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
            className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-4 py-1.5 text-xs sm:text-sm w-fit mb-4 lg:mb-3"
          >
            <span className="w-2 h-2 bg-brand-green-lemon rounded-full animate-pulse" />
            <span className="font-dmsans font-medium tracking-wide uppercase text-[11px] sm:text-xs">
              Independent Stock Audit & Verification
            </span>
          </motion.div>

          {/* Headline H1 with Word-by-Word Animation & Typewriter */}
          {/* Headline H1 — Static, large, white */}
          <h1 
            className="font-syne font-bold text-white tracking-tight select-none leading-[1.05]"
            style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)' }}
          >
            <span className="block">Ensuring</span>
            <span className="block">Accuracy.</span>
          </h1>

          {/* Line 3 — Typewriter, smaller, green */}
          <div 
            className="mb-4 lg:mb-3 w-full select-none"
          >
            <span
              className="inline-block font-syne font-bold"
              style={{
                color: '#22C55E',
                fontSize: 'clamp(1.6rem, 4.5vw, 2.5rem)',
                lineHeight: '1.3',
              }}
            >
              {displayText}
              <span 
                style={{ 
                  color: '#22C55E', 
                  opacity: cursorOpacity,
                  marginLeft: '2px',
                  display: 'inline'
                }}
              >
                |
              </span>
            </span>
          </div>

          {/* Subheading */}
          <motion.p
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="font-dmsans text-lg sm:text-xl lg:text-2xl text-white max-w-2xl leading-relaxed font-light mb-6 lg:mb-5"
          >
            We help businesses prevent unnoticed inventory losses by checking stock, through a trusted, neutral source, separate from the business's own records, across agro and non-agro sectors, from Lagos to global markets.
          </motion.p>

          {/* Buttons CTA */}
          <motion.div
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-row flex-wrap gap-4 mb-6 lg:mb-6"
          >
            <a
              href="#contact"
              onClick={() => {
                if (window.gtag) {
                  window.gtag('event', 'cta_click', {
                    event_category: 'Hero',
                    event_label: 'Request an Audit',
                  });
                }
              }}
              className="bg-brand-green-lemon text-brand-black font-syne font-bold text-sm sm:text-base px-7 py-4 rounded-md hover:bg-[#1cb054] transition-all duration-200 active:scale-[0.98] shadow-lg shadow-brand-green-lemon/10"
            >
              Request an Audit
            </a>
            <a
              href="#services"
              onClick={() => {
                if (window.gtag) {
                  window.gtag('event', 'cta_click', {
                    event_category: 'Hero',
                    event_label: 'Our Services',
                  });
                }
              }}
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
            className="border-t border-white/10 pt-8 pb-4 mt-10 lg:mt-12"
          >
            <div className="flex flex-row flex-wrap gap-8 sm:gap-16">
              
              {/* Stat 1 */}
              <div className="flex flex-col">
                <span className="font-syne font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-2 block min-w-[120px] lg:min-w-[150px]">
                  {count2022}
                </span>
                <span className="font-dmsans text-xs sm:text-sm text-white/55 tracking-wider uppercase">
                  Year Founded
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col">
                <span className="font-syne font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-2 block min-w-[80px] lg:min-w-[100px]">
                  {count9 === 9 ? '9+' : count9}
                </span>
                <span className="font-dmsans text-xs sm:text-sm text-white/55 tracking-wider uppercase">
                  Global Partners
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col">
                <span className="font-syne font-bold text-4xl sm:text-5xl lg:text-6xl text-white mb-2 block min-w-[50px] lg:min-w-[70px]">
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
