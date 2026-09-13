import React from 'react';
import { Compass, Sparkles, ShieldCheck, Briefcase, ChevronRight } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const steps = [
    {
      title: 'Career Discovery',
      subtitle: 'Cognitive & market alignment',
      icon: Compass,
      tag: '01 Discover',
    },
    {
      title: 'Skill Development',
      subtitle: 'Dynamic micro-sprints',
      icon: Sparkles,
      tag: '02 Build',
    },
    {
      title: 'Placement Readiness',
      subtitle: 'Live panels & ATS tests',
      icon: ShieldCheck,
      tag: '03 Prepare',
    },
    {
      title: 'Career Opportunities',
      subtitle: 'Direct recruiter pipelines',
      icon: Briefcase,
      tag: '04 Connect',
    },
  ];

  return (
    <section className="border-y border-charcoal-200/70 bg-white py-10 sm:py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          {/* Label / Heading */}
          <div className="lg:max-w-xs shrink-0">
            <div className="text-[11px] font-bold uppercase tracking-wider text-brand-600 mb-1">
              Unified Career Architecture
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-charcoal-900 tracking-tight leading-snug">
              One platform. <br className="hidden sm:inline" />
              <span className="text-charcoal-500">Every step of the career journey.</span>
            </h2>
          </div>

          {/* 4 Pillars Horizontal Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 flex-1">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="group p-4 rounded-2xl bg-charcoal-50/50 border border-charcoal-100 hover:border-brand-200 hover:bg-white hover:shadow-subtle transition-all duration-300 relative"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-charcoal-400 group-hover:text-brand-600 transition-colors">
                      {step.tag}
                    </span>
                    <div className="p-2 rounded-xl bg-white border border-charcoal-200/60 text-charcoal-700 group-hover:bg-brand-50 group-hover:text-brand-600 group-hover:border-brand-200 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="text-sm font-bold text-charcoal-900 group-hover:text-brand-600 transition-colors">
                    {step.title}
                  </div>
                  <div className="text-xs text-charcoal-500 mt-0.5">
                    {step.subtitle}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
