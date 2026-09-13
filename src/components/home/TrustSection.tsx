import React from 'react';
import { ShieldCheck, CheckCircle2, Lock, Eye, FileCheck2 } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Verified Companies',
      description: 'Every corporate entity undergoes rigorous validation including MCA registration and domain integrity before posting roles.',
      color: 'text-loop-indigo',
      bg: 'bg-loop-indigo/10',
    },
    {
      icon: FileCheck2,
      title: 'Reviewed Listings',
      description: 'Zero spam, ghost listings, or commission-based consultancies. Every job description is reviewed for genuine compensation & location details.',
      color: 'text-loop-violet',
      bg: 'bg-loop-violet/10',
    },
    {
      icon: Lock,
      title: 'Secure Profiles',
      description: 'Candidate contact details and resumes are safeguarded against unsolicited marketing and only accessible by authorized recruiters.',
      color: 'text-loop-pink',
      bg: 'bg-loop-pink/10',
    },
    {
      icon: Eye,
      title: 'Application Tracking',
      description: 'Real-time timeline feedback on whether your profile has been viewed, shortlisted, scheduled for interview, or closed.',
      color: 'text-loop-coral',
      bg: 'bg-loop-coral/10',
    },
  ];

  return (
    <section id="trust" className="py-20 bg-warm-100/50 border-b border-charcoal-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Integrity & Governance</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Built for opportunities you can trust.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 mt-2">
            No scams, no ghost openings. We built CareerLoop to replace the noise of generic job boards with guaranteed accountability.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-3xl bg-white border border-charcoal-200/80 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-2xl ${pillar.bg} flex items-center justify-center ${pillar.color} mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-charcoal-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-charcoal-100 flex items-center gap-1.5 text-[11px] font-semibold text-charcoal-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Platform Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
