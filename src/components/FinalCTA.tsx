import React from 'react';
import { ArrowRight, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';

interface FinalCTAProps {
  onOpenAssessment: () => void;
  onOpenContact: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenAssessment, onOpenContact }) => {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Box */}
        <div className="relative rounded-3xl sm:rounded-[40px] bg-charcoal-900 text-white p-8 sm:p-16 lg:p-20 overflow-hidden shadow-float">
          
          {/* Subtle animated background gradient orbs */}
          <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-brand-600/20 rounded-full blur-3xl pointer-events-none -mr-40 -mt-40 animate-pulse-subtle" />
          <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32" />

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-brand-300 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CAREER INTELLIGENCE FOR THE DRIVEN</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
              Your Next Opportunity <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-200 to-white">
                Starts Here.
              </span>
            </h2>

            <p className="text-base sm:text-xl text-charcoal-300 max-w-xl mx-auto leading-relaxed mb-10">
              Get the clarity, skills and support you need to move forward.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenAssessment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white text-base font-semibold px-8 py-4 rounded-xl transition-all duration-200 shadow-card hover:shadow-glow hover:-translate-y-0.5"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenContact}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white text-base font-medium px-7 py-4 rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-200"
              >
                <MessageSquare className="w-4 h-4 text-charcoal-300" />
                <span>Talk To Career Loop</span>
              </button>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-y-2 gap-x-8 text-xs text-charcoal-400">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Free Diagnostic Evaluation
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                No Credit Card Required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Individual & Institutional Onboarding
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
