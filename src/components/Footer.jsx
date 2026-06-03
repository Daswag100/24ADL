export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/6 py-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4 text-center md:text-left">
        
        {/* Left - Logo & Name */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img
              src="/24ADL_Logo__Coloured_.png"
              className="h-7 w-auto object-contain"
              alt="24ADL Logo"
            />
          </a>
          <span className="font-dmsans text-sm text-white/50 font-normal">
            24ADL Inspection & Audit Services
          </span>
        </div>

        {/* Centre - Copyright */}
        <div className="font-dmsans text-sm text-white/25">
          &copy; 2025 24ADL. All rights reserved.
        </div>

        {/* Right - Tagline */}
        <div className="font-syne font-bold text-sm text-green-500">
          Ensuring Accuracy. Strengthening Control.
        </div>

      </div>
    </footer>
  );
}
