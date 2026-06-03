import { Info, ShieldCheck, Database, GitMerge, Globe, Mail, ArrowRight } from 'lucide-react';

export default function HomeHub() {
  const cards = [
    {
      title: 'About Our Mission',
      description: 'Learn about our commitment to independent inspection, core ethics, and dedicated audit team.',
      icon: Info,
      href: '#about',
      tag: 'Who We Are',
      bgColor: 'bg-brand-purple-light/10',
      borderColor: 'border-brand-purple-primary/10',
      hoverBorderColor: 'hover:border-brand-purple-primary',
      iconColor: 'text-brand-purple-primary',
    },
    {
      title: 'Audit & Inspection',
      description: 'Explore our specialized services across Agro, Non-Agro, and customized collateral inspections.',
      icon: ShieldCheck,
      href: '#services',
      tag: 'Core Services',
      bgColor: 'bg-green-500/5',
      borderColor: 'border-green-500/10',
      hoverBorderColor: 'hover:border-brand-green-dark',
      iconColor: 'text-brand-green-dark',
    },
    {
      title: 'Industries We Serve',
      description: 'Review the 12 key industry sectors where we verify inventory assets and mitigate trade risks.',
      icon: Database,
      href: '#industries',
      tag: 'Market Focus',
      bgColor: 'bg-blue-500/5',
      borderColor: 'border-blue-500/10',
      hoverBorderColor: 'hover:border-blue-500',
      iconColor: 'text-blue-600',
    },
    {
      title: 'Our 5-Step Approach',
      description: 'See the systematic, independent workflow we follow to guarantee reporting precision.',
      icon: GitMerge,
      href: '#approach',
      tag: 'Methodology',
      bgColor: 'bg-purple-500/5',
      borderColor: 'border-purple-500/10',
      hoverBorderColor: 'hover:border-purple-500',
      iconColor: 'text-purple-600',
    },
    {
      title: 'Clients & Global Reach',
      description: 'Check our bank partners, commodity trading clients, and active operational footprint.',
      icon: Globe,
      href: '#clients',
      tag: 'Our Reach',
      bgColor: 'bg-emerald-500/5',
      borderColor: 'border-emerald-500/10',
      hoverBorderColor: 'hover:border-emerald-600',
      iconColor: 'text-emerald-600',
    },
    {
      title: 'Get in Touch',
      description: 'Request a custom audit quote, get in touch with our office, or ask about our operations.',
      icon: Mail,
      href: '#contact',
      tag: 'Get Started',
      bgColor: 'bg-orange-500/5',
      borderColor: 'border-orange-500/10',
      hoverBorderColor: 'hover:border-orange-500',
      iconColor: 'text-orange-600',
    },
  ];

  return (
    <section className="py-24 bg-[#FAFAF9] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="font-dmsans text-xs font-bold tracking-wider uppercase text-brand-purple-primary mb-3 block">
            Capabilities Directory
          </span>
          <h2 className="font-syne font-bold text-4xl sm:text-5xl text-brand-black tracking-tight mb-4">
            How We Protect Your Interests
          </h2>
          <p className="font-dmsans text-base sm:text-lg text-brand-gray-mid leading-relaxed">
            Select a section below to learn more about our independent verification systems, industrial compliance audit workflows, and global inspection capacity.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <a
                key={index}
                href={card.href}
                className={`group flex flex-col justify-between p-8 bg-white border ${card.borderColor} rounded-xl shadow-sm hover:shadow-md ${card.hoverBorderColor} transition-all duration-300 transform hover:-translate-y-1.5`}
              >
                <div>
                  {/* Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-dmsans text-[11px] font-semibold text-brand-gray-mid/70 bg-brand-gray-light/40 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {card.tag}
                    </span>
                    <div className={`p-2.5 rounded-lg ${card.bgColor} ${card.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <h3 className="font-syne font-bold text-xl text-brand-black mb-3 group-hover:text-brand-purple-primary transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="font-dmsans text-sm text-brand-gray-mid leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Bottom CTA Arrow */}
                <div className="flex items-center gap-2 text-brand-purple-primary font-syne font-bold text-sm">
                  <span>Explore Section</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              </a>
            );
          })}
        </div>

      </div>
    </section>
  );
}
