import { ShieldCheck, Globe, Zap, Map } from 'lucide-react';

export default function WhyUs() {
  const cards = [
    {
      num: '01',
      bgClass: 'bg-[#111827] text-white',
      numClass: 'text-white/10',
      icon: <ShieldCheck className="h-7 w-7 text-green-400" />,
      title: 'Independent & Unbiased',
      titleClass: 'text-white',
      desc: 'We have no commercial interest in your stock figures. Our findings are objective, our methodology consistent, and our reports answer only to the facts — not to what anyone hopes to find.',
      descClass: 'text-white/55',
      photo: '/images/PHOTO-2026-04-06-23-48-31_13_jpg.jpeg',
      photoAlt: 'Independent auditor',
      photoClass: 'object-top'
    },
    {
      num: '02',
      bgClass: 'bg-[#EDE9FE] text-[#111827]',
      numClass: 'text-purple-900/10',
      icon: <Globe className="h-7 w-7 text-purple-700" />,
      title: 'Agro & Non-Agro Depth',
      titleClass: 'text-purple-900',
      desc: 'Sector knowledge that runs deep in both agricultural and non-agricultural operations — not a firm that retrofits one playbook for everything.',
      descClass: 'text-gray-600',
    },
    {
      num: '03',
      bgClass: 'bg-[#22C55E] text-[#111827]',
      numClass: 'text-black/10',
      icon: <Zap className="h-7 w-7 text-black/70" />,
      title: 'Actionable Insights',
      titleClass: 'text-black',
      desc: "The report doesn't end at the count. We deliver variance analysis, control assessments, and practical recommendations — so you can act on what we find, not just file it.",
      descClass: 'text-black/60',
      photo: '/images/PHOTO-2026-04-06-23-48-31_10_jpg.jpeg',
      photoAlt: 'Actionable Insights',
      photoClass: 'object-center'
    },
    {
      num: '04',
      bgClass: 'bg-white border border-gray-200 text-[#111827]',
      numClass: 'text-purple-900/10',
      icon: <Map className="h-7 w-7 text-purple-700" />,
      title: 'Global Exposure',
      titleClass: 'text-gray-900',
      desc: 'Clients across Malaysia, Netherlands, Switzerland, USA, Guinea, Dubai, and Nigeria. The experience to handle complex, cross-border audit engagements of any scale.',
      descClass: 'text-gray-500',
    },
  ];

  return (
    <section id="why-us" className="py-14 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-brand-purple-mid uppercase block mb-3">
            WHY 24ADL
          </span>
          <h2 className="font-syne font-bold text-4xl lg:text-5xl text-brand-black tracking-tight">
            What Sets Us Apart
          </h2>
        </div>

        {/* 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14">
          {cards.map((card) => (
            <div
              key={card.num}
              className={`rounded-2xl p-8 sm:p-9 relative overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between ${card.bgClass}`}
            >
              <div className="relative">
                {/* Giant Faded Number */}
                <span
                  className={`font-syne font-bold text-[100px] sm:text-[120px] absolute -top-8 right-4 select-none pointer-events-none leading-none ${card.numClass}`}
                >
                  {card.num}
                </span>

                {/* Optional Photo */}
                {card.photo && (
                  <img
                    src={card.photo}
                    className={`w-full h-44 object-cover rounded-xl mb-5 relative z-10 ${card.photoClass}`}
                    alt={card.photoAlt}
                  />
                )}

                {/* Icon Container */}
                <div className="mb-6 relative z-10">
                  {card.icon}
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col">
                  <h3 className={`font-syne font-bold text-xl mb-3 ${card.titleClass}`}>
                    {card.title}
                  </h3>
                  <p className={`font-dmsans font-light text-base leading-relaxed ${card.descClass}`}>
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
