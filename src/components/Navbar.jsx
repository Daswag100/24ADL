import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [companyMenuOpen, setCompanyMenuOpen] = useState(false);
  const [companyMobileOpen, setCompanyMobileOpen] = useState(false);
  
  const timeoutRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setCompanyMenuOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setCompanyMenuOpen(false);
    }, 150);
  };

  const desktopLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Blog', href: '/blog' },
    { label: 'Clients', href: '/clients' },
    { label: 'Contact', href: '/contact' },
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
        
        {/* Logo Section */}
        <Link 
          id="nav-logo-link" 
          to="/" 
          className="flex items-center group"
        >
          <div className="flex items-center overflow-hidden">
            <img
              src="/24ADL_Logo__Coloured_.png"
              className="h-7 max-w-[140px] sm:h-8 sm:max-w-[180px] w-auto object-contain dark:brightness-0 dark:invert"
              alt="24ADL Inspection and Audit Services logo"
            />
          </div>
        </Link>

        {/* Center Links - Desktop (reduced gap from gap-8 to gap-6) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Home */}
          {desktopLinks.slice(0, 1).map((link) => {
            const isActive = location.pathname === '/';
            return (
              <Link
                key={link.label}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                to={link.href}
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
              </Link>
            );
          })}

          {/* About Us — standalone */}
          {desktopLinks.slice(1, 2).map((link) => {
            const isActive = location.pathname === '/about';
            return (
              <Link
                key={link.label}
                id={`nav-link-about-us`}
                to={link.href}
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
              </Link>
            );
          })}

          {/* Company Dropdown (before Services) */}
          <div
            className="relative py-4"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              id="nav-link-company"
              className={`flex items-center font-dmsans text-[14px] transition-colors duration-200 font-medium cursor-pointer ${
                ['/industries', '/approach', '/careers', '/faq'].includes(location.pathname)
                  ? 'text-brand-purple-primary dark:text-brand-green-lemon font-semibold'
                  : 'text-brand-gray-mid hover:text-brand-purple-primary dark:text-gray-400 dark:hover:text-white'
              }`}
            >
              <span>Company</span>
              <ChevronDown className="w-3.5 h-3.5 ml-1" />
            </button>

            {/* Dropdown panel */}
            {companyMenuOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg py-2 min-w-[160px] z-50">
                {[
                  { label: 'Industries', href: '/industries' },
                  { label: 'Approach', href: '/approach' },
                  { label: 'Careers', href: '/careers' },
                  { label: 'FAQ', href: '/faq' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    id={`nav-dropdown-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    to={item.href}
                    onClick={() => setCompanyMenuOpen(false)}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 font-dmsans transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services, Blog, Clients — after Company dropdown */}
          {desktopLinks.slice(2, 5).map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                to={link.href}
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
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">

          <Link
            id="nav-cta-contact"
            to="/contact"
            className="bg-brand-purple-primary text-white font-syne font-bold text-sm px-5 py-2.5 rounded-md hover:bg-[#3B1575] transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98]"
          >
            Get in Touch
          </Link>

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
            : '-top-[420px] opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-3">
          {/* Home + About Us */}
          {desktopLinks.slice(0, 2).map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                id={`nav-link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-dmsans text-[15px] py-2 transition-colors border-b border-gray-50 dark:border-gray-800/50 ${
                  isActive
                    ? 'text-brand-purple-primary dark:text-brand-green-lemon font-bold'
                    : 'text-brand-gray-dark dark:text-gray-300 font-medium hover:text-brand-purple-primary dark:hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          {/* Company Accordion Toggle on Mobile */}
          <div className="border-b border-gray-50 dark:border-gray-800/50 py-1">
            <button
              onClick={() => setCompanyMobileOpen(!companyMobileOpen)}
              className="flex items-center justify-between w-full font-dmsans text-[15px] py-2 text-brand-gray-dark dark:text-gray-300 font-medium hover:text-brand-purple-primary dark:hover:text-white cursor-pointer"
            >
              <span>Company</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${companyMobileOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {companyMobileOpen && (
              <div className="pl-4 flex flex-col gap-2.5 py-2 bg-gray-50/50 dark:bg-gray-800/20 rounded-lg mt-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-550 block mb-1">
                  Company
                </span>
                {[
                  { label: 'Industries', href: '/industries' },
                  { label: 'Approach', href: '/approach' },
                  { label: 'Careers', href: '/careers' },
                  { label: 'FAQ', href: '/faq' },
                ].map((item) => (
                  <Link
                    key={item.label}
                    id={`nav-link-mobile-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-dmsans text-[14px] py-1 transition-colors block ${
                      location.pathname === item.href
                        ? 'text-brand-purple-primary dark:text-brand-green-lemon font-bold'
                        : 'text-brand-gray-dark dark:text-gray-300 font-medium hover:text-brand-purple-primary dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services, Blog, Clients, Contact */}
          {desktopLinks.slice(2).map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                id={`nav-link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-dmsans text-[15px] py-2 transition-colors border-b border-gray-50 dark:border-gray-800/50 last:border-b-0 ${
                  isActive
                    ? 'text-brand-purple-primary dark:text-brand-green-lemon font-bold'
                    : 'text-brand-gray-dark dark:text-gray-300 font-medium hover:text-brand-purple-primary dark:hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            );
          })}


        </div>
      </div>
    </nav>
  );
}
