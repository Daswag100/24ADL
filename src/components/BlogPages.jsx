import { useEffect, useState } from 'react';
import { ArrowLeft, TrendingDown, Clock, Calendar, ArrowRight, CheckSquare, Square, ShieldCheck, Mail, MessageSquare, MessageCircle } from 'lucide-react';

export default function BlogPages({ currentPage }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentPage]);

  const handleLinkClick = (e, path) => {
    e.preventDefault();
    if (window.__navigate) {
      window.__navigate(path);
    } else {
      window.location.pathname = path;
    }
  };

  if (currentPage === 'blog') {
    return <BlogListing onNavigate={handleLinkClick} />;
  }

  if (currentPage === 'blog-detail') {
    return <BlogPostDetail onNavigate={handleLinkClick} />;
  }

  return null;
}

// ==========================================
// BLOG LISTING COMPONENT
// ==========================================
function BlogListing({ onNavigate }) {
  const articles = [
    {
      id: '5-signs-your-business-is-losing-inventory',
      title: '5 Signs Your Business Is Losing Inventory Without Knowing It',
      excerpt: 'Inventory shrinkage is costing Nigerian businesses millions every year, and most don\'t realise it\'s happening until significant damage is done.',
      category: 'Inventory Management',
      date: 'June 2026',
      readTime: '8 min read',
      author: 'Mmesoma Ejiogu',
      authorInitials: 'ME',
      icon: <TrendingDown className="h-20 w-20 text-white/15" />,
      tagColor: 'bg-green-500 text-black',
      featured: true,
    },
    {
      id: 'collateral-management-agreement-cma',
      title: 'Understanding Collateral Management Agreements (CMA) in Warehousing',
      excerpt: 'How commercial lenders and commodity traders secure trade financing through independent collateral inspection and third-party control.',
      category: 'Risk Mitigation',
      date: 'Coming Soon',
      readTime: '6 min read',
      author: 'Audit Team',
      authorInitials: 'AD',
      icon: <ShieldCheck className="h-20 w-20 text-white/15" />,
      tagColor: 'bg-brand-purple-primary/20 text-brand-purple-primary dark:bg-purple-950/40 dark:text-purple-300',
      featured: false,
      isPlaceholder: true,
    },
    {
      id: 'fmcg-warehouse-shrinkage-steps',
      title: 'How to Reduce FMCG Warehouse Shrinkage: A 5-Step Checklist',
      excerpt: 'A practical guide for factory managers and logistics leads to tighten audit trails, establish dual custody, and stop stock pilferage.',
      category: 'Best Practices',
      date: 'Coming Soon',
      readTime: '10 min read',
      author: 'Operations Lead',
      authorInitials: 'OL',
      icon: <MessageSquare className="h-20 w-20 text-white/15" />,
      tagColor: 'bg-brand-purple-primary/20 text-brand-purple-primary dark:bg-purple-950/40 dark:text-purple-300',
      featured: false,
      isPlaceholder: true,
    }
  ];

  return (
    <div className="min-h-screen bg-brand-white dark:bg-gray-950 text-brand-black dark:text-white font-dmsans transition-colors duration-300">
      
      {/* Blog Mini Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => onNavigate(e, '/')}
            className="flex items-center"
          >
            <img
              src="/24ADL_Logo__Coloured_.png"
              className="h-7 max-w-[140px] sm:h-8 sm:max-w-[180px] w-auto object-contain"
              alt="24ADL Inspection and Audit Services logo"
            />
          </a>
          <a
            href="/"
            onClick={(e) => onNavigate(e, '/')}
            className="flex items-center gap-2 font-syne font-bold text-sm text-brand-purple-primary dark:text-brand-green-lemon hover:opacity-85 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </a>
        </div>
      </header>

      {/* Hero Header Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16 sm:py-20 border-b border-gray-200 dark:border-gray-800 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs font-semibold tracking-widest text-brand-purple-primary dark:text-brand-green-lemon uppercase block mb-3 font-dmsans">
            INSIGHTS & RESOURCES
          </span>
          <h1 className="font-syne font-bold text-4xl lg:text-5xl text-gray-900 dark:text-white tracking-tight">
            From the 24ADL Blog
          </h1>
          <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 font-light mt-3 max-w-2xl leading-relaxed">
            Practical guidance on inventory accuracy, stock audits, and operational control.
          </p>
        </div>
      </section>

      {/* Grid Content Section */}
      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((art) => {
            if (art.isPlaceholder) {
              return (
                <div
                  key={art.id}
                  className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden opacity-75 relative group flex flex-col justify-between"
                >
                  <div>
                    {/* Header Image Area (mobile optimized h-40 md:h-48) */}
                    <div className="h-40 md:h-48 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative overflow-hidden">
                      {art.icon}
                      <span className="absolute top-4 right-4 bg-gray-500/10 text-gray-500 dark:text-gray-400 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border border-gray-500/20">
                        Coming Soon
                      </span>
                      <div className="bg-gray-500/20 text-gray-700 dark:text-gray-300 text-xs font-bold px-3 py-1 rounded-full absolute top-4 left-4">
                        {art.category}
                      </div>
                    </div>

                    {/* Content padding */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                        <span>{art.date}</span>
                        <span>•</span>
                        <span>{art.readTime}</span>
                      </div>
                      <h3 className="font-syne font-bold text-lg text-gray-400 dark:text-gray-500 mb-2 leading-snug">
                        {art.title}
                      </h3>
                      <p className="font-dmsans text-sm text-gray-400 dark:text-gray-500 leading-relaxed">
                        {art.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 pt-0">
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 text-xs font-bold">
                        {art.authorInitials}
                      </div>
                      <span className="text-sm font-medium text-gray-400">
                        {art.author}
                      </span>
                    </div>
                  </div>
                </div>
              );
            }

            return (
              <a
                key={art.id}
                href={`/blog/${art.id}`}
                onClick={(e) => onNavigate(e, `/blog/${art.id}`)}
                className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:border-brand-purple-primary dark:hover:border-brand-green-lemon transition-all duration-200 hover:-translate-y-1 flex flex-col justify-between group"
              >
                <div>
                  {/* Header Image Area (mobile optimized h-40 md:h-48) */}
                  <div className="h-40 md:h-48 bg-gradient-to-br from-brand-purple-dark to-brand-purple-primary flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand-green-lemon/10 via-transparent to-transparent opacity-60"></div>
                    {art.icon}
                    <div className="bg-brand-green-lemon text-brand-black text-xs font-bold px-3 py-1 rounded-full absolute top-4 left-4">
                      {art.category}
                    </div>
                  </div>

                  {/* Content padding */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>
                    <h3 className="font-syne font-bold text-lg text-gray-900 dark:text-white mb-2 leading-snug group-hover:text-brand-purple-primary dark:group-hover:text-brand-green-lemon transition-colors">
                      {art.title}
                    </h3>
                    <p className="font-dmsans text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {art.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                    <div className="w-8 h-8 rounded-full bg-brand-purple-light dark:bg-purple-950 flex items-center justify-center text-brand-purple-primary dark:text-brand-green-lemon text-xs font-bold">
                      {art.authorInitials}
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {art.author}
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </main>

      {/* Footer copyright */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 bg-gray-50 dark:bg-gray-900 text-center text-xs text-gray-400 dark:text-gray-500">
        <p>© 2026 24ADL Inspection & Audit Services | 24adlinspection.com</p>
      </footer>

    </div>
  );
}

// ==========================================
// BLOG POST DETAIL COMPONENT (With TOC & Progress bar)
// ==========================================
function BlogPostDetail({ onNavigate }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTocSection, setActiveTocSection] = useState('');

  // Handle scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle active TOC tracking with IntersectionObserver
  useEffect(() => {
    const sectionIds = [
      'what-is-loss',
      'warning-signs',
      'ignore-signs',
      'audit-involves',
      'self-assessment',
      'next-step'
    ];

    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTocSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const handleTocClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const steps = [
    {
      num: '1',
      title: 'Pre-audit planning',
      desc: 'We review your existing inventory records, count procedures, documentation systems, and physical layout before the audit begins.'
    },
    {
      num: '2',
      title: 'Physical count',
      desc: 'Our team conducts an independent physical count using structured counting sheets, barcode scanning where applicable, and multi-layer verification for high-value items.'
    },
    {
      num: '3',
      title: 'Reconciliation',
      desc: 'We compare the physical count against your system records, purchase orders, GRNs, and dispatch records, identifying every variance and its likely source.'
    },
    {
      num: '4',
      title: 'Reporting',
      desc: 'You receive a detailed report documenting the verified inventory position, all variances identified, root cause analysis, and specific recommendations for process improvement.'
    },
    {
      num: '5',
      title: 'Follow-up verification',
      desc: 'For clients who want ongoing assurance, we offer periodic verification cycles to track whether corrective actions are working.'
    }
  ];

  const checklistItems = [
    'Gross margins have declined without an obvious external cause',
    'Physical counts consistently differ from system records by more than 1%',
    'You\'re reordering more frequently than sales volumes suggest',
    'Delivery and warehouse documentation is incomplete or informal',
    'You have never had an independent stock audit conducted',
    'You operate in a sector with high shrinkage risk (agro, FMCG, pharma, manufacturing)',
    'You are preparing for investor due diligence or a financing round',
    'You have recently experienced staff turnover in your warehouse or procurement team'
  ];

  const tocLinks = [
    { id: 'what-is-loss', label: 'What Is Inventory Loss?' },
    { id: 'warning-signs', label: 'The 5 Warning Signs' },
    { id: 'ignore-signs', label: 'What Happens When You Ignore the Signs?' },
    { id: 'audit-involves', label: 'What an Independent Audit Involves' },
    { id: 'self-assessment', label: 'Self-Assessment' },
    { id: 'next-step', label: 'Taking the Next Step' }
  ];

  return (
    <div className="min-h-screen bg-brand-white dark:bg-gray-950 text-brand-black dark:text-white font-dmsans transition-colors duration-300">
      
      {/* 1 — Reading Progress Bar (Fixed above navbar, z-60) */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-800 z-[60] w-full">
        <div
          className="bg-green-500 h-full transition-all"
          style={{ width: `${scrollProgress}%`, transition: 'width 0.1s linear' }}
        />
      </div>

      {/* Blog Mini Header */}
      <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => onNavigate(e, '/')}
            className="flex items-center"
          >
            <img
              src="/24ADL_Logo__Coloured_.png"
              className="h-7 max-w-[140px] sm:h-8 sm:max-w-[180px] w-auto object-contain"
              alt="24ADL Inspection and Audit Services logo"
            />
          </a>
          <a
            href="/blog"
            onClick={(e) => onNavigate(e, '/blog')}
            className="flex items-center gap-2 font-syne font-bold text-sm text-brand-purple-primary dark:text-brand-green-lemon hover:opacity-85 transition-opacity"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Blog</span>
          </a>
        </div>
      </header>

      {/* Header Block (mobile responsive font-size and padding px-5) */}
      <div className="bg-gray-50 dark:bg-gray-900 py-16 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-3xl mx-auto px-5 sm:px-6">
          <span className="bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
            Inventory Management
          </span>
          
          <h1 className="font-syne font-bold text-3xl md:text-5xl text-gray-900 dark:text-white leading-tight mb-4">
            5 Signs Your Business Is Losing Inventory Without Knowing It
          </h1>
          
          <p className="font-dmsans text-lg text-gray-500 dark:text-gray-400 font-light leading-relaxed mb-6">
            Inventory shrinkage is costing Nigerian businesses millions every year, and most don't realise it's happening until significant damage is done.
          </p>

          <div className="flex items-center gap-3 text-sm text-gray-500 dark:text-gray-400">
            <div className="w-8 h-8 rounded-full bg-brand-purple-light dark:bg-purple-950 flex items-center justify-center text-brand-purple-primary dark:text-brand-green-lemon text-xs font-bold shrink-0">
              ME
            </div>
            <span>
              By <strong>Mmesoma Ejiogu</strong>, 24ADL Inspection & Audit Services · June 2026 · 8 min read
            </span>
          </div>
        </div>
      </div>

      {/* 2 — Layout Wrapper (desktop lg grid: 1fr_240px) */}
      <div className="max-w-5xl mx-auto px-5 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_240px] gap-12 items-start">
          
          {/* Main Content Column */}
          <div className="max-w-3xl w-full text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            
            <p className="mb-5 md:mb-6">
              You reconciled your records. Your team ran the numbers. On paper, everything balances. But your profits are quietly shrinking, your reorder cycles feel off, and there's a nagging feeling that the stock on the shelf doesn't quite match what your system says should be there.
            </p>

            <p className="mb-5 md:mb-6">
              If any of that sounds familiar, you may be experiencing one of the most common and most damaging challenges in inventory management: undetected inventory loss.
            </p>

            <p className="mb-5 md:mb-6">
              Across industries, from agro-commodity warehouses to FMCG distribution, from pharmaceutical stores to manufacturing plants, businesses in Nigeria are losing inventory without knowing it. The loss compounds silently over months, often only surfacing when cash flow tightens or a major discrepancy forces a physical count.
            </p>

            {/* Stat Callout Box (mobile responsive p-6/p-8 and text-4xl/text-5xl) */}
            <div className="bg-brand-purple-dark text-center rounded-2xl p-6 md:p-8 my-10 shadow-sm border border-brand-purple-primary/10">
              <div className="font-syne font-bold text-4xl md:text-5xl text-brand-green-lemon mb-2">
                2-3%
              </div>
              <div className="text-white/70 text-sm font-dmsans max-w-lg mx-auto leading-relaxed">
                The average inventory shrinkage rate globally, but for businesses without independent verification, the figure is routinely far higher and far less visible.
              </div>
            </div>

            <p className="mb-5 md:mb-6">
              In this article, we walk through five clear warning signs that your business may be losing inventory you don't know about, and what you can do to take back control.
            </p>

            <h2 id="what-is-loss" className="font-syne font-bold text-2xl text-gray-900 dark:text-white mt-12 mb-4 scroll-mt-20">
              What Is Inventory Loss, And Why Does It Go Unnoticed?
            </h2>

            <p className="mb-5 md:mb-6">
              Inventory loss, often called shrinkage, refers to the gap between the stock your records say you have and the stock that physically exists. It happens for several reasons:
            </p>

            {/* Bullet List */}
            <ul className="space-y-2 my-6">
              {[
                'Theft, employee pilferage, vendor short-delivery, shoplifting in retail environments.',
                'Administrative errors, miscounting, incorrect data entry, unrecorded write-offs.',
                'Supplier fraud: deliveries that are short on quantity or quality but signed off in full.',
                'Spoilage and damage, particularly acute in agro and perishable goods sectors.',
                'Process failures: goods leaving the warehouse without being properly recorded.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-purple-primary dark:bg-brand-green-lemon mt-2 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mb-5 md:mb-6">
              The reason most inventory loss goes unnoticed is simple: the people counting the stock are also responsible for it. Internal teams have inherent blind spots, intentional or otherwise. Without an independent eye, discrepancies get absorbed, explained away, or never questioned at all.
            </p>

            {/* Pull Quote (mobile responsive text-lg/text-xl) */}
            <blockquote className="border-l-4 border-brand-green-dark dark:border-brand-green-lemon pl-6 py-2 my-10 italic text-lg md:text-xl text-gray-700 dark:text-gray-300 font-syne font-medium">
              "The most dangerous inventory problem is not the one you've found. It's the one you haven't looked for."
            </blockquote>

            <h2 id="warning-signs" className="font-syne font-bold text-2xl text-gray-900 dark:text-white mt-12 mb-8 border-b border-gray-100 dark:border-gray-800 pb-3 scroll-mt-20">
              The 5 Warning Signs
            </h2>

            {/* Five Numbered Warning Sign Blocks */}
            
            {/* Sign 1 */}
            <div className="mb-12">
              <div className="w-12 h-12 rounded-full bg-brand-purple-dark text-white flex items-center justify-center font-bold text-xl mb-4 font-syne">
                1
              </div>
              <h3 className="font-syne font-bold text-lg md:text-xl text-gray-900 dark:text-white mb-3">
                Your Gross Margins Are Shrinking Without a Clear Explanation
              </h3>
              <p className="mb-5 md:mb-6">
                If your revenue is holding steady or even growing, but your gross margins are quietly declining, the culprit is often invisible inventory loss. When stock disappears without being recorded, it inflates your cost of goods sold artificially, compresses margins in ways that look like pricing problems or supplier cost increases.
              </p>
              <p className="mb-5 md:mb-6">
                Business owners and finance teams often spend weeks re-examining supplier contracts and pricing structures when the real answer lies in the warehouse, not the spreadsheet.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mt-4">
                <div className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide mb-1">
                  WATCH FOR:
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  Gross margin erosion of more than 0.5% over two consecutive quarters with no identifiable cost driver. This is a strong signal that a physical stock count and reconciliation is overdue.
                </div>
              </div>
            </div>

            {/* Sign 2 */}
            <div className="mb-12">
              <div className="w-12 h-12 rounded-full bg-brand-purple-dark text-white flex items-center justify-center font-bold text-xl mb-4 font-syne">
                2
              </div>
              <h3 className="font-syne font-bold text-lg md:text-xl text-gray-900 dark:text-white mb-3">
                Your Stock Records and Physical Counts Never Quite Agree
              </h3>
              <p className="mb-5 md:mb-6">
                Every business that runs periodic stock counts expects some variance. But when the gap between your system records and your physical count is consistently above 1-2%, and the discrepancy keeps appearing in the same product lines or locations, you have a pattern, and patterns have causes.
              </p>
              <p className="mb-5 md:mb-6">
                Many businesses normalise these gaps over time. 'We always come up short on Product X' becomes an accepted part of operations rather than a signal to investigate. That normalisation is exactly how chronic theft, systematic under-delivery, or recording failures become embedded in day-to-day operations.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mt-4">
                <div className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide mb-1">
                  WATCH FOR:
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  Recurring variances on specific SKUs, product categories, or warehouse bays. Consistency in where variances occur is a strong indicator of a systemic issue rather than random counting error.
                </div>
              </div>
            </div>

            {/* Sign 3 */}
            <div className="mb-12">
              <div className="w-12 h-12 rounded-full bg-brand-purple-dark text-white flex items-center justify-center font-bold text-xl mb-4 font-syne">
                3
              </div>
              <h3 className="font-syne font-bold text-lg md:text-xl text-gray-900 dark:text-white mb-3">
                You're Reordering Faster Than Your Sales Volumes Justify
              </h3>
              <p className="mb-5 md:mb-6">
                If your sales data shows consistent volume but your purchasing team is placing reorders more frequently than the numbers suggest is necessary, there is stock disappearing somewhere between delivery and sale. This is one of the most reliable early signals of inventory loss in distribution and retail businesses.
              </p>
              <p className="mb-5 md:mb-6">
                In Nigeria's FMCG and agro sectors, this pattern is especially common in businesses that rely on manual handoff processes between suppliers, warehouse staff, and sales teams, each transition point is a moment where discrepancies can be created and buried.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mt-4">
                <div className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide mb-1">
                  WATCH FOR:
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  Your reorder cycle shortening without a corresponding increase in documented sales. If you're buying more but not selling more, stock is going somewhere else.
                </div>
              </div>
            </div>

            {/* Sign 4 */}
            <div className="mb-12">
              <div className="w-12 h-12 rounded-full bg-brand-purple-dark text-white flex items-center justify-center font-bold text-xl mb-4 font-syne">
                4
              </div>
              <h3 className="font-syne font-bold text-lg md:text-xl text-gray-900 dark:text-white mb-3">
                Your Team Can't Produce Clean Documentation for Deliveries
              </h3>
              <p className="mb-5 md:mb-6">
                A healthy supply chain is a documented supply chain. When goods are delivered, there should be a delivery note. When they're received into the warehouse, there should be a goods-received note (GRN) signed off by a responsible party. When they're dispatched to a customer or branch, there should be a dispatch note. When stock is written off due to damage or expiry, there should be an authorised write-off form.
              </p>
              <p className="mb-5 md:mb-6">
                If any link in that documentation chain is weak, missing, or inconsistently applied, you have a governance gap that inventory loss can and will flow through. In businesses where documentation is informal or verbal, there is no audit trail, and without an audit trail, loss is nearly impossible to trace.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mt-4">
                <div className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide mb-1">
                  WATCH FOR:
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  Delivery documentation that is incomplete, unsigned, or backdated. GRNs that don't match purchase orders. Write-off records that are vague or authorised by the same person who manages the stock.
                </div>
              </div>
            </div>

            {/* Sign 5 */}
            <div className="mb-12">
              <div className="w-12 h-12 rounded-full bg-brand-purple-dark text-white flex items-center justify-center font-bold text-xl mb-4 font-syne">
                5
              </div>
              <h3 className="font-syne font-bold text-lg md:text-xl text-gray-900 dark:text-white mb-3">
                You've Never Had an Independent Stock Audit
              </h3>
              <p className="mb-5 md:mb-6">
                This is, perhaps, the most significant warning sign of all, not a symptom, but a structural vulnerability. If every stock count your business has ever done has been conducted by internal staff, you have never had an objective, independent assessment of whether your inventory position is accurate.
              </p>
              <p className="mb-5 md:mb-6">
                Internal audits are valuable, but they carry inherent limitations: the same people who manage the stock are verifying it, the same systems that may have recording errors are being used to confirm those records, and there is no independent check on whether the process itself is sound.
              </p>
              <p className="mb-5 md:mb-6">
                An independent stock audit breaks all three of those constraints. It introduces a fresh, objective perspective, uses independent counting methodology, and produces findings that are not shaped by internal relationships, pressures, or blind spots.
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 mt-4">
                <div className="text-xs font-bold text-green-700 dark:text-green-400 uppercase tracking-wide mb-1">
                  WATCH FOR:
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300">
                  If your answer to 'when did you last have an independent stock verification?' is 'never' or 'I can't remember,' it's time. The longer independent verification is absent, the more opportunity exists for undetected loss to accumulate.
                </div>
              </div>
            </div>

            <h2 id="ignore-signs" className="font-syne font-bold text-2xl text-gray-900 dark:text-white mt-12 mb-4 scroll-mt-20">
              What Happens When You Ignore the Signs?
            </h2>

            <p className="mb-5 md:mb-6">
              Unaddressed inventory loss compounds. What starts as a manageable 1% shrinkage rate can, over 24-36 months without intervention, grow into a structural problem that distorts financial reporting, erodes lender confidence, causes stockouts that damage customer relationships, and in the most serious cases, funds fraud that becomes very difficult to untangle.
            </p>

            <p className="mb-5 md:mb-6">
              We have worked with businesses across agro, retail, manufacturing, and distribution sectors where the cumulative inventory loss, once properly quantified through an independent audit, ran into tens of millions of naira. In almost every case, the warning signs had been present for months or years, they simply hadn't been acted on.
            </p>

            {/* Pull Quote 2 */}
            <blockquote className="border-l-4 border-brand-green-dark dark:border-brand-green-lemon pl-6 py-2 my-10 italic text-lg md:text-xl text-gray-700 dark:text-gray-300 font-syne font-medium">
              "Independent verification is not an accusation, it is a standard of professional management. The businesses that do it regularly are the ones that catch problems early, while the cost of correction is still manageable."
            </blockquote>

            <h2 id="audit-involves" className="font-syne font-bold text-2xl text-gray-900 dark:text-white mt-12 mb-6 scroll-mt-20">
              What an Independent Stock Audit Actually Involves
            </h2>

            <p className="mb-5 md:mb-6">
              A professional independent stock audit is not simply a recount of your existing stock records. It is a systematic, methodical process designed to give you an accurate, unbiased picture of your true inventory position. At 24ADL, our process typically involves:
            </p>

            {/* Steps block styled like Approach steps */}
            <div className="space-y-6 my-10">
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-purple-primary text-white dark:bg-brand-green-lemon dark:text-brand-black flex items-center justify-center font-bold font-syne text-sm shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h4 className="font-syne font-bold text-gray-900 dark:text-white text-base">
                      {step.title}
                    </h4>
                    <p className="font-dmsans text-sm text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Self-Assessment Checklist Box (mobile p-5, item alignment start) */}
            <div id="self-assessment" className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-5 md:p-8 my-10 scroll-mt-20">
              <h3 className="font-syne font-bold text-xl text-gray-900 dark:text-white mb-4">
                Quick Self-Assessment: Do You Need an Independent Audit?
              </h3>
              
              <div className="space-y-3">
                {checklistItems.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="text-gray-400 dark:text-gray-500 shrink-0 mt-0.5">
                      <Square className="w-5 h-5" />
                    </span>
                    <span className="font-dmsans text-sm text-gray-650 dark:text-gray-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="text-sm italic text-gray-500 dark:text-gray-400 mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                If you checked three or more of the above, an independent audit is strongly recommended.
              </div>
            </div>

            <h2 id="next-step" className="font-syne font-bold text-2xl text-gray-900 dark:text-white mt-12 mb-4 scroll-mt-20">
              Taking the Next Step
            </h2>

            <p className="mb-5 md:mb-6">
              Inventory confidence is not a luxury, it is a foundation of sound business management. The businesses that invest in independent verification are the ones that can present clean, credible inventory figures to investors, banks, and boards. They're the ones that catch problems while they're still correctable. And they're the ones that build the kind of operational culture where inventory discipline becomes self-reinforcing over time.
            </p>

            <p className="mb-5 md:mb-6">
              Whether you're a manufacturing business in Lagos, an agro-commodity trader serving multiple states, or a retail chain managing multiple locations, the principles are the same: independent eyes see what internal teams cannot.
            </p>

            <p className="mb-5 md:mb-6">
              If you recognise any of the five signs in this article in your own business, the time to act is now, not after the next quarterly close, and not after you've tried one more internal reconciliation that comes back inconclusive.
            </p>

            {/* CTA Block (mobile flex-col, button full-width) */}
            <div className="bg-purple-50 dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl p-10 mt-12 text-center border border-gray-200 dark:border-gray-850 relative overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-brand-green-lemon/5 via-transparent to-transparent opacity-40"></div>
              
              <div className="relative z-10 max-w-xl mx-auto">
                <h3 className="font-syne font-bold text-2xl mb-2">
                  Ready to Secure Your Inventory?
                </h3>
                <p className="text-gray-650 dark:text-gray-400 text-sm font-light mb-8">
                  Contact 24ADL today to schedule your independent stock verification.
                </p>

                <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center mt-6">
                  <a
                    href="/contact"
                    onClick={(e) => onNavigate(e, '/contact')}
                    className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-black font-bold px-8 py-4 rounded-md transition-colors w-full md:w-auto text-center"
                    style={{ fontFamily: 'Syne' }}
                  >
                    Request a Stock Audit
                  </a>
                  <a 
                    href="https://wa.me/2348033179732" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 justify-center border-2 border-purple-900 text-purple-900 dark:border-white dark:text-white font-bold px-8 py-4 rounded-md hover:bg-purple-900 hover:text-white dark:hover:bg-white dark:hover:text-purple-900 transition-colors w-full md:w-auto text-center"
                    style={{ fontFamily: 'Syne' }}
                  >
                    <MessageCircle size={18} />
                    Message us on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Footer Note */}
            <div className="text-center text-sm text-gray-400 dark:text-gray-500 mt-8 font-dmsans">
              Independent Stock Audit & Inventory Verification | Nigeria & World
            </div>

          </div>

          {/* 2 — Table of Contents Sidebar (desktop only, hidden on mobile) */}
          <aside className="hidden lg:block sticky top-24 self-start w-[240px]">
            <div className="border border-gray-200 dark:border-gray-700 rounded-xl p-5 bg-white dark:bg-gray-900">
              <h4 className="font-syne text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">
                On This Page
              </h4>
              <nav className="space-y-2.5 text-sm">
                {tocLinks.map((item) => {
                  const isActive = activeTocSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleTocClick(e, item.id)}
                      className={`block transition-colors cursor-pointer text-left leading-snug ${
                        isActive
                          ? 'text-purple-700 dark:text-green-400 font-semibold'
                          : 'text-gray-500 hover:text-purple-700 dark:hover:text-green-400'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>

        </div>
      </div>

      {/* Footer copyright */}
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 bg-gray-50 dark:bg-gray-900 text-center text-xs text-gray-400 dark:text-gray-500">
        <p>© 2026 24ADL Inspection & Audit Services | 24adlinspection.com</p>
      </footer>

    </div>
  );
}
