import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ currentHash }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Approach', href: '#approach' },
    { label: 'Clients', href: '#clients' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-16 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-sm bg-white' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 lg:px-10 flex items-center justify-between">
        
        {/* Logo Section */}
        <a href="#" className="flex items-center group">
          <div style={{ mixBlendMode: 'multiply' }} className="flex items-center">
            <img
              src="/24ADL_Logo__Coloured_.png"
              className="h-9 w-auto object-contain"
              alt="24ADL Logo"
            />
          </div>
          <span className="hidden sm:inline-block font-syne font-bold text-brand-black ml-3 text-base lg:text-lg tracking-tight transition-colors duration-200 group-hover:text-brand-purple-primary">
            24ADL Inspection & Audit
          </span>
        </a>

        {/* Center Links - Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentHash === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`font-dmsans text-[14px] transition-colors duration-200 relative ${
                  isActive
                    ? 'text-brand-purple-primary font-semibold'
                    : 'text-brand-gray-mid font-medium hover:text-brand-purple-primary'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-[22px] left-0 right-0 h-[2px] bg-brand-purple-primary rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="bg-brand-purple-primary text-white font-syne font-bold text-sm px-5 py-2.5 rounded-md hover:bg-[#3B1575] transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-gray-dark hover:text-brand-purple-primary hover:bg-brand-purple-light/20 rounded-md transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute left-0 right-0 bg-white border-b border-gray-200 px-6 py-4 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? 'top-16 opacity-100 pointer-events-auto'
            : '-top-[240px] opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = currentHash === link.href;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-dmsans text-[15px] py-2 transition-colors border-b border-gray-50 last:border-b-0 ${
                  isActive
                    ? 'text-brand-purple-primary font-bold'
                    : 'text-brand-gray-dark font-medium hover:text-brand-purple-primary'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
