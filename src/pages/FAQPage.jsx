import { useEffect } from 'react';
import { HelpCircle, ArrowLeft } from 'lucide-react';

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-20 md:pt-24 min-h-screen bg-brand-white dark:bg-gray-950 flex items-center justify-center px-6">
      <div className="max-w-md w-full bg-white dark:bg-gray-900 border border-gray-150 dark:border-gray-800 rounded-2xl shadow-xl p-8 md:p-10 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-purple-primary via-purple-700 to-brand-green-lemon" />
        
        <div className="w-16 h-16 rounded-full bg-brand-purple-light dark:bg-purple-950/40 flex items-center justify-center mx-auto mb-6 text-brand-purple-primary dark:text-brand-green-lemon">
          <HelpCircle size={32} />
        </div>

        <h1 className="font-syne font-bold text-3xl text-gray-900 dark:text-white tracking-tight mb-3">
          FAQ
        </h1>
        
        <h2 className="text-xs font-semibold tracking-widest text-brand-purple-primary dark:text-brand-green-lemon uppercase block mb-4 font-dmsans">
          Coming Soon
        </h2>

        <p className="font-dmsans text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-8">
          We are currently compiling our list of frequently asked questions to help you get quick answers about stock audits, logistics, and verification. Check back soon!
        </p>

        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            if (window.__navigate) window.__navigate('/');
          }}
          className="inline-flex items-center gap-2 justify-center bg-brand-purple-primary hover:bg-purple-700 dark:bg-brand-green-lemon dark:hover:bg-[#1cb054] text-white dark:text-black font-syne font-bold px-6 py-3 rounded-md text-sm transition-colors cursor-pointer w-full"
        >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </a>
      </div>
    </main>
  );
}
