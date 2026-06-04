import { useState } from 'react';

export default function Industries() {
  const [showAll, setShowAll] = useState(false);

  const industries = [
    'Agro-processing & Commodity Trade',
    'Warehousing & Distribution',
    'Retail & Supermarkets',
    'Manufacturing & Industrial Operations',
    'Logistics & Supply Chain',
    'Oil & Gas Operations',
    'Banks & Financial Institutions',
    'Inventory-Backed Lending Operations',
    'Pharmaceutical & Healthcare Supply Chains',
    'Import & Export Operations',
    'FMCG Distribution Networks',
    'NGOs & Donor-Funded Projects',
  ];

  return (
    <section id="industries" className="py-14 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-left">
          <span className="text-xs font-semibold tracking-widest text-[#7C3AED] uppercase block mb-3">
            INDUSTRIES WE SERVE
          </span>
          <h2 className="font-syne font-bold text-4xl lg:text-5xl text-brand-black tracking-tight mb-4">
            Built for Every Sector That Holds Stock
          </h2>
          <p className="font-dmsans text-base sm:text-lg text-brand-gray-mid font-light max-w-2xl leading-relaxed">
            From agro-commodity traders to pharmaceutical distributors — if inventory accuracy matters to your business, we can help.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-14">
          {industries.map((ind, index) => {
            const isHiddenOnMobile = index >= 6 && !showAll;
            return (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-xl px-5 py-4 items-center gap-3 hover:bg-brand-purple-light/25 hover:border-brand-purple-primary hover:-translate-y-0.5 hover:shadow-md transition-all duration-200 cursor-pointer active:scale-[0.99] group ${
                  isHiddenOnMobile ? 'hidden sm:flex' : 'flex'
                }`}
              >
                {/* Purple Dot */}
                <span className="w-2 h-2 rounded-full bg-purple-600 shrink-0 group-hover:bg-brand-purple-primary group-hover:scale-125 transition-all duration-200" />
                
                {/* Industry Name */}
                <span className="font-dmsans text-sm font-medium text-gray-800 group-hover:text-brand-purple-primary transition-colors duration-200">
                  {ind}
                </span>
              </div>
            );
          })}
        </div>

        {/* Mobile Toggle Button - Only displays on screens < 640px */}
        <div className="sm:hidden mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="font-syne font-bold text-sm text-brand-purple-primary bg-brand-purple-light/40 border border-brand-purple-primary/10 px-6 py-3 rounded-full hover:bg-brand-purple-primary hover:text-white transition-all duration-300 cursor-pointer"
          >
            {showAll ? 'Show Less Sectors' : 'Show All Sectors'}
          </button>
        </div>

        {/* Footnote */}
        <p className="font-dmsans text-sm text-gray-400 mt-8 text-center font-normal">
          We work with businesses ranging from small enterprises to large-scale operations.
        </p>

      </div>
    </section>
  );
}
