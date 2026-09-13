import React from 'react';
import { Quote, Sparkles, CheckCircle2, Award } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-4">
            <Award className="w-3.5 h-3.5 text-brand-600" />
            <span>VERIFIED STUDENT OUTCOMES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight leading-[1.15] mb-5">
            Clarity Changes Everything.
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
            Read how focused diagnostics and rigorous mock preparation transformed candidate confidence and placement clearance across our cohort.
          </p>
        </div>

        {/* Testimonials 3 Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="bg-charcoal-50/60 rounded-3xl p-6 sm:p-8 border border-charcoal-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-9 h-9 rounded-xl bg-white border border-charcoal-200 flex items-center justify-center text-brand-600 shadow-subtle">
                    <Quote className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono font-semibold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-full border border-brand-200/50">
                    {t.metrics}
                  </span>
                </div>

                <p className="text-sm sm:text-base text-charcoal-700 leading-relaxed italic mb-8 font-normal">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-6 border-t border-charcoal-200/60 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-charcoal-900 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-xs font-bold text-charcoal-900">{t.name}</div>
                    <div className="text-[11px] text-charcoal-500">{t.role}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-[10px] text-charcoal-400 uppercase font-semibold">Offer Secured</div>
                  <div className="text-xs font-bold text-emerald-600">{t.package}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer / Note */}
        <div className="mt-10 text-center text-xs text-charcoal-400">
          Representative cohort outcomes and interview benchmark records. Detailed candidate case studies available upon request.
        </div>

      </div>
    </section>
  );
};
