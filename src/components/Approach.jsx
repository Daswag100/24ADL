import { ClipboardList, AlertTriangle, Eye, BarChart2, FileText } from 'lucide-react';

export default function Approach() {
  const steps = [
    {
      num: '01',
      icon: <ClipboardList className="h-5 w-5 text-white/60" />,
      title: 'Planning',
      description: 'Scoping the engagement, defining audit objectives, and aligning with client expectations before fieldwork begins.',
    },
    {
      num: '02',
      icon: <AlertTriangle className="h-5 w-5 text-white/60" />,
      title: 'Risk Assessment',
      description: 'Identifying high-risk inventory areas and prioritizing audit focus based on value, volume, and vulnerability.',
    },
    {
      num: '03',
      icon: <Eye className="h-5 w-5 text-white/60" />,
      title: 'Physical Verification',
      description: 'On-site physical count and direct observation — the core of every 24ADL engagement.',
    },
    {
      num: '04',
      icon: <BarChart2 className="h-5 w-5 text-white/60" />,
      title: 'Analysis',
      description: 'Comparing physical findings with book records, detecting variances, shortages, excesses, and invalid stock.',
    },
    {
      num: '05',
      icon: <FileText className="h-5 w-5 text-white/60" />,
      title: 'Reporting',
      description: 'Clear, comprehensive reports with variance analysis, control assessments, and practical recommendations.',
    },
  ];

  return (
    <section
      id="approach"
      className="relative py-24 bg-gray-900 text-white overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/images/PHOTO-2026-04-06-23-48-31_6_jpg.jpeg')" }}
    >
      {/* Heavy dark overlay */}
      <div 
        className="absolute inset-0 bg-gray-900/88 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold tracking-widest text-[#22C55E] uppercase block mb-3">
            HOW WE WORK
          </span>
          <h2 className="font-syne font-bold text-4xl lg:text-5xl text-white tracking-tight mb-4">
            Our Approach
          </h2>
          <p className="font-dmsans text-lg text-white/50 font-light max-w-2xl leading-relaxed">
            A structured five-stage process designed to ensure accuracy, transparency, and results you can act on.
          </p>
        </div>

        {/* Steps Grid Container */}
        <div className="mt-16 border-t border-white/10 pt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-12 lg:gap-y-0">
            {steps.map((step, index) => (
              <div
                key={step.num}
                className="px-6 flex flex-col items-start border-white/10 border-r-0 lg:border-r last:lg:border-r-0"
              >
                {/* Step Number */}
                <span className="font-syne font-bold text-xs tracking-widest text-green-400 uppercase mb-4 block">
                  {step.num}
                </span>

                {/* Icon Circle */}
                <div className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center mb-5 bg-white/5 shadow-inner">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="font-syne font-bold text-base text-white mb-2.5">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-dmsans text-sm text-white/45 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
