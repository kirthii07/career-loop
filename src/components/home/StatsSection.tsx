import React from 'react';
import { Counter } from '../shared/Counter';
import { Sparkles } from 'lucide-react';

export const StatsSection: React.FC = () => {
  const stats = [
    { label: 'Opportunities', value: 10000, suffix: '+', note: 'Active jobs & internships' },
    { label: 'Students & Freshers', value: 5000, suffix: '+', note: 'Registered candidates' },
    { label: 'Companies', value: 500, suffix: '+', note: 'Verified hiring partners' },
    { label: 'Colleges', value: 100, suffix: '+', note: 'Campuses connected' },
  ];

  return (
    <section className="py-14 bg-white border-b border-charcoal-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Demo Indicator */}
        <div className="flex items-center justify-center gap-1.5 mb-8 text-[11px] font-semibold text-charcoal-500 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-loop-indigo" />
          <span>Demo Metrics Strip (Projected Growth Across Tamil Nadu & India)</span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-charcoal-100">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`text-center flex flex-col items-center justify-center ${
                idx !== 0 ? 'pt-6 sm:pt-0 sm:px-6' : 'sm:pr-6'
              }`}
            >
              <div className="font-display text-3xl sm:text-5xl font-black text-charcoal-900 tracking-tight mb-1">
                <Counter end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-bold text-charcoal-800">{stat.label}</div>
              <div className="text-xs text-charcoal-400 mt-0.5">{stat.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
