import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About Us', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Industries', href: '/industries' },
    { label: 'Approach', href: '/approach' },
    { label: 'Clients', href: '/clients' },
    { label: 'Blog', href: '/blog' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    if (window.__navigate) {
      window.__navigate(href);
    } else {
      window.location.pathname = href;
    }
  };

  return (
    <footer className="bg-[#050505] text-white border-t border-white/8 pt-16 pb-12 pb-safe">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/5">
          
          {/* Column 1 - Brand Info & Socials */}
          <div className="flex flex-col gap-5">
            <a 
              href="/" 
              onClick={(e) => handleLinkClick(e, '/')}
              className="flex items-center group w-fit"
            >
              <img
                src="/24ADL_Logo__Coloured_.png"
                className="h-8 w-auto object-contain"
                alt="24ADL Inspection and Audit Services logo"
              />
            </a>
            <p className="font-dmsans text-sm text-white/40 leading-relaxed max-w-sm">
              Independent stock audit and inventory verification services across agricultural and non-agricultural sectors worldwide.
            </p>
            {/* Social Icons row */}
            <div className="flex items-center gap-3 mt-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/24adl.ng"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors"
                aria-label="Instagram Profile"
              >
                {/* SVG for Instagram */}
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/24adl-inspection-audit-services/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors"
                aria-label="LinkedIn Profile"
              >
                {/* SVG for LinkedIn */}
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/2348033179732"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors"
                aria-label="WhatsApp Channel"
              >
                {/* SVG for WhatsApp */}
                <svg className="h-4.5 w-4.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.793 1.451 5.467 0 9.911-4.441 9.914-9.911.001-2.652-1.02-5.145-2.876-7.003C16.562 1.83 14.075.81 11.424.81c-5.474 0-9.915 4.442-9.918 9.913-.001 1.957.513 3.865 1.49 5.567l-.978 3.57 3.652-.958zm12.333-6.11c-.328-.164-1.94-.957-2.24-1.066-.3-.11-.519-.164-.738.164-.219.328-.847 1.066-1.038 1.285-.19.219-.383.246-.71.082-.328-.164-1.385-.51-2.637-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.328-.02-.505.143-.668.147-.146.328-.383.492-.574.164-.19.219-.328.328-.547.11-.219.055-.41-.027-.574-.082-.164-.738-1.777-1.01-2.434-.265-.637-.534-.55-.738-.56-.19-.01-.41-.01-.628-.01-.219 0-.574.082-.875.41-.3.328-1.148 1.12-1.148 2.733 0 1.612 1.175 3.17 1.339 3.388.164.219 2.312 3.53 5.598 4.95.782.338 1.393.54 1.868.692.787.25 1.5.214 2.065.13.629-.094 1.94-.794 2.213-1.56.274-.766.274-1.422.192-1.56-.082-.138-.3-.219-.629-.383z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="flex flex-col gap-4">
            <span className="font-syne font-bold text-xs tracking-widest text-white/45 uppercase">
              Quick Links
            </span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="font-dmsans text-sm text-white/50 hover:text-brand-purple-mid transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3 - Contact details */}
          <div className="flex flex-col gap-4">
            <span className="font-syne font-bold text-xs tracking-widest text-white/45 uppercase">
              Get In Touch
            </span>
            <div className="flex flex-col gap-3">
              {/* Phone */}
              <a
                href="tel:+2348033179732"
                className="flex items-center gap-3 font-dmsans text-sm text-white/50 hover:text-brand-purple-mid transition-colors duration-200 w-fit"
              >
                <Phone className="h-4 w-4 text-[#22C55E]" />
                <span>+234 8033179732</span>
              </a>

              {/* Email */}
              <a
                href="mailto:info@24adlinspection.com"
                className="flex items-center gap-3 font-dmsans text-sm text-white/50 hover:text-brand-purple-mid transition-colors duration-200 w-fit break-all"
              >
                <Mail className="h-4 w-4 text-[#22C55E]" />
                <span>info@24adlinspection.com</span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 font-dmsans text-sm text-white/40">
                <MapPin className="h-4 w-4 text-white/30 shrink-0 mt-0.5" />
                <span>22b Happy-home Avenue, Kirikiri Industrial Estate, Lagos, Nigeria</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-8 pt-8 border-t border-white/5 text-center md:text-left">
          {/* Copyright & Legal Links */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs text-white/30 font-dmsans">
            <span>&copy; 2026 24ADL. All rights reserved.</span>
            <div className="flex flex-wrap gap-x-4 gap-y-1 justify-center">
              <a href="/privacy" onClick={(e) => handleLinkClick(e, '/privacy')} className="hover:text-brand-green-lemon transition-colors">Privacy Policy</a>
              <a href="/terms" onClick={(e) => handleLinkClick(e, '/terms')} className="hover:text-brand-green-lemon transition-colors">Terms & Conditions</a>
              <a href="/cookies" onClick={(e) => handleLinkClick(e, '/cookies')} className="hover:text-brand-green-lemon transition-colors">Cookie Policy</a>
              <a href="/disclaimer" onClick={(e) => handleLinkClick(e, '/disclaimer')} className="hover:text-brand-green-lemon transition-colors">Disclaimer</a>
            </div>
          </div>
          {/* Tagline */}
          <div className="font-syne font-bold text-xs text-brand-green-lemon tracking-wide uppercase">
            Ensuring Accuracy. Strengthening Control.
          </div>
        </div>

      </div>
    </footer>
  );
}
