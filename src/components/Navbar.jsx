import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Industries', href: '#industries' },
    { label: 'Approach', href: '#approach' },
    { label: 'Clients', href: '#clients' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 h-16 border-b z-50 transition-all duration-300 ${
        isScrolled
          ? 'shadow-md bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-800'
          : 'bg-white/95 border-gray-200/60 dark:bg-gray-900/95 dark:border-gray-800/60'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full px-6 lg:px-10 flex items-center justify-between">
        
        {/* Logo Section - Shows wide logo on all screens with appropriate sizing */}
        <a id="nav-logo-link" href="#" className="flex items-center group">
          <div className="flex items-center overflow-hidden">
            <img
              src="/24ADL_Logo__Coloured_.png"
              className="h-7 max-w-[140px] sm:h-8 sm:max-w-[180px] w-auto object-contain"
              alt="24ADL Logo"
            />
          </div>
        </a>

        {/* Center Links - Desktop (highlight matches spied section) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const targetSection = link.href === '#' ? 'home' : link.href.replace('#', '');
            const isActive = activeSection === targetSection;
            return (
              <a
                key={link.label}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                className={`font-dmsans text-[14px] transition-colors duration-200 relative ${
                  isActive
                    ? 'text-brand-purple-primary font-semibold dark:text-brand-green-lemon'
                    : 'text-brand-gray-mid font-medium hover:text-brand-purple-primary dark:text-gray-400 dark:hover:text-white'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-[22px] left-0 right-0 h-[2px] bg-brand-purple-primary dark:bg-brand-green-lemon rounded-full" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right CTA / Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            id="nav-cta-contact"
            href="#contact"
            className="bg-brand-purple-primary text-white font-syne font-bold text-sm px-5 py-2.5 rounded-md hover:bg-[#3B1575] transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
          >
            Get in Touch
          </a>

          {/* Mobile Menu Button */}
          <button
            id="nav-mobile-toggle-btn"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-gray-dark hover:text-brand-purple-primary dark:text-gray-400 dark:hover:text-white hover:bg-brand-purple-light/20 dark:hover:bg-gray-800 rounded-md transition-colors"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute left-0 right-0 bg-white border-b border-gray-200 dark:bg-gray-900 dark:border-gray-800 px-6 py-4 shadow-lg transition-all duration-300 ease-in-out ${
          isOpen
            ? 'top-16 opacity-100 pointer-events-auto'
            : '-top-[240px] opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const targetSection = link.href === '#' ? 'home' : link.href.replace('#', '');
            const isActive = activeSection === targetSection;
            return (
              <a
                key={link.label}
                id={`nav-link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-dmsans text-[15px] py-2 transition-colors border-b border-gray-50 dark:border-gray-800/50 last:border-b-0 ${
                  isActive
                    ? 'text-brand-purple-primary dark:text-brand-green-lemon font-bold'
                    : 'text-brand-gray-dark dark:text-gray-300 font-medium hover:text-brand-purple-primary dark:hover:text-white'
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

