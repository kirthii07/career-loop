import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, UserCheck, Calendar } from 'lucide-react';
import mentorshipImg from '../assets/images/mentorship.jpg';

interface FeatureImageSectionProps {
  onOpenAssessment: () => void;
}

export const FeatureImageSection: React.FC<FeatureImageSectionProps> = ({ onOpenAssessment }) => {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Container with subtle borders and shadows */}
        <div className="relative rounded-3xl sm:rounded-[36px] overflow-hidden border border-charcoal-200 shadow-float bg-charcoal-900">
          
          {/* Main Editorial Image */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full min-h-[420px] sm:min-h-[500px]">
            <img
              src={mentorshipImg}
              alt="1-on-1 career mentoring and professional guidance session"
              className="w-full h-full object-cover object-center filter brightness-95"
            />
            {/* Elegant gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/85 via-charcoal-900/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent sm:hidden" />
          </div>

          {/* Left Text / Editorial Storytelling */}
          <div className="absolute inset-0 flex items-center">
            <div className="p-6 sm:p-12 lg:p-16 max-w-xl text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-300 text-xs font-semibold mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>HUMAN GUIDANCE + DATA INTELLIGENCE</span>
              </div>

              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
                Guidance Calibrated To Where You Are.
              </h2>

              <p className="text-sm sm:text-base text-charcoal-200 leading-relaxed mb-6 font-normal">
                Algorithms analyze the data. Experienced technology leaders provide the human context. Every candidate is paired with personalized roadmap milestones to bridge theoretical degrees and real industry performance.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-charcoal-300">
                <span className="flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  1-on-1 Mentor Calibration
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-brand-300" />
                  Weekly Milestone Reviews
                </span>
              </div>
            </div>
          </div>

          {/* Overlay Floating Career Loop Interface Card (Required in prompt) */}
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 max-w-xs sm:max-w-sm w-full">
            <div className="bg-white/95 backdrop-blur-xl p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-charcoal-200/80 shadow-float transform hover:-translate-y-1 transition-transform duration-300">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">
                  YOUR NEXT STEP
                </span>
                <span className="text-xs font-mono font-bold text-charcoal-500">82% Complete</span>
              </div>

              <h3 className="text-base font-bold text-charcoal-900 mb-1">
                Improve SQL & Query Plans
              </h3>
              <p className="text-xs text-charcoal-500 mb-3">
                Targeting 3 complex indexing modules before your mock panel round.
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-charcoal-100 h-2.5 rounded-full overflow-hidden mb-4">
                <div className="bg-gradient-to-r from-brand-600 to-indigo-500 h-full rounded-full transition-all duration-1000" style={{ width: '78%' }} />
              </div>

              <button
                onClick={onOpenAssessment}
                className="w-full flex items-center justify-between bg-charcoal-900 hover:bg-brand-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-sm group"
              >
                <span>Continue Roadmap</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
