import { useState, useEffect } from 'react';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Small delay to trigger smooth transition after mounting
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

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
          <div
            className={`inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white rounded-full px-4 py-1.5 text-xs sm:text-sm w-fit mb-8 transform transition-all duration-700 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <span className="w-2 h-2 bg-brand-green-lemon rounded-full animate-pulse" />
            <span className="font-dmsans font-medium tracking-wide uppercase text-[11px] sm:text-xs">
              Independent Stock Audit & Verification
            </span>
          </div>

          {/* Headline H1 */}
          <h1
            className={`font-syne font-extrabold text-3xl sm:text-6xl lg:text-[80px] text-white tracking-tight leading-[1.05] mb-6 transform transition-all duration-700 delay-200 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            Ensuring Accuracy. <br />
            <span className="text-brand-green-lemon">Strengthening Control.</span>
          </h1>

          {/* Subheading */}
          <p
            className={`font-dmsans text-base sm:text-lg lg:text-xl text-white/70 max-w-xl leading-relaxed font-light mb-10 transform transition-all duration-700 delay-300 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            We help businesses prevent unnoticed inventory losses through independent verification — across agro and non-agro sectors, from Lagos to global markets.
          </p>

          {/* Buttons CTA */}
          <div
            className={`flex flex-row flex-wrap gap-4 mb-20 transform transition-all duration-700 delay-400 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
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
          </div>

          {/* Stats Bar */}
          <div
            className={`border-t border-white/10 pt-10 transform transition-all duration-700 delay-500 ${
              isMounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}
          >
            <div className="flex flex-row flex-wrap gap-8 sm:gap-16">
              
              {/* Stat 1 */}
              <div className="flex flex-col">
                <span className="font-syne font-bold text-3xl sm:text-4xl text-white mb-1.5">
                  2022
                </span>
                <span className="font-dmsans text-xs sm:text-sm text-white/55 tracking-wider uppercase">
                  Year Founded
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col">
                <span className="font-syne font-bold text-3xl sm:text-4xl text-white mb-1.5">
                  9+
                </span>
                <span className="font-dmsans text-xs sm:text-sm text-white/55 tracking-wider uppercase">
                  Global Partners
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col">
                <span className="font-syne font-bold text-3xl sm:text-4xl text-white mb-1.5">
                  4
                </span>
                <span className="font-dmsans text-xs sm:text-sm text-white/55 tracking-wider uppercase">
                  Continents Served
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
