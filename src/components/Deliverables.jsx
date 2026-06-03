import { Check } from 'lucide-react';

export default function Deliverables() {
  const items = [
    'Comprehensive stock audit report',
    'Variance analysis — physical vs. recorded stock',
    'Inventory control assessment',
    'Shortage, excess & invalid stock detection',
    'Practical recommendations for improvement',
    'Detection of losses & wastage',
  ];

  return (
    <section id="deliverables" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left Column */}
          <div className="flex flex-col justify-center">
            {/* Section Header */}
            <span className="text-xs font-semibold tracking-widest text-brand-purple-mid uppercase block mb-3">
              WHAT YOU GET
            </span>
            <h2 className="font-syne font-bold text-4xl lg:text-5xl text-gray-900 tracking-tight mb-3">
              Every Audit Delivers
            </h2>
            <p className="font-dmsans text-gray-500 font-light text-lg mt-3">
              Clear documentation. Real numbers. Recommendations you can actually use.
            </p>

            {/* Deliverables List */}
            <div className="flex flex-col gap-3.5 mt-10">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center gap-4 shadow-sm hover:shadow transition-shadow duration-200"
                >
                  <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                    <Check className="h-3.5 w-3.5 text-black stroke-[3]" />
                  </div>
                  <span className="font-dmsans text-base font-medium text-gray-800">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Promotional Purple Card */}
          <div className="flex">
            <div className="bg-[#4C1D95] rounded-2xl pt-0 px-8 pb-8 sm:px-12 sm:pb-12 flex flex-col justify-between text-white w-full shadow-lg min-h-96 lg:min-h-full overflow-hidden">
              
              <div>
                {/* Edge-to-edge image at the top */}
                <div className="-mx-8 sm:-mx-12">
                  <img
                    src="/images/PHOTO-2026-04-06-23-48-31_11_jpg.jpeg"
                    className="w-full h-52 object-cover rounded-t-2xl rounded-b-none object-top"
                    alt="Deliverable audit"
                  />
                </div>

                <div className="mt-8">
                  <h3 className="font-syne font-bold text-2xl lg:text-3xl text-white leading-snug">
                    Not sure how accurate your stock is? <br />
                    <span className="text-[#22C55E]">Let's help you verify it.</span>
                  </h3>
                  
                  {/* Paragraph */}
                  <p className="font-dmsans text-white/55 font-light text-base leading-relaxed mt-4">
                    Most inventory losses go undetected until they become critical. An independent audit gives you the numbers you can trust — and a clear picture of where your controls need to improve.
                  </p>
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="mt-8">
                <a
                  href="#contact"
                  className="bg-[#22C55E] text-black font-syne font-bold px-7 py-4 rounded-md inline-block hover:bg-[#1cb054] transition-colors active:scale-[0.98]"
                >
                  Request an Audit &rarr;
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
