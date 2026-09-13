import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Award,
  Layers,
  FileText
} from 'lucide-react';
import { STUDENT_JOURNEY_STEPS } from '../data/mockData';

interface StudentJourneyProps {
  onOpenAssessment: () => void;
}

export const StudentJourney: React.FC<StudentJourneyProps> = ({ onOpenAssessment }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = STUDENT_JOURNEY_STEPS[activeStepIndex];

  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-100 text-charcoal-800 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-brand-600" />
            <span>THE STUDENT EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight leading-[1.15] mb-5">
            A Better Way <br />
            <span className="gradient-text">To Build Your Career.</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            From the initial assessment of your aptitudes to your first verified offer and continuous senior level-up, the journey is organized into six transparent, measurable phases.
          </p>
        </div>

        {/* Interactive Step Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Step Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {STUDENT_JOURNEY_STEPS.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isSelected
                      ? 'bg-white border-brand-300 shadow-card ring-1 ring-brand-200'
                      : 'bg-white/60 hover:bg-white border-charcoal-200/70 hover:border-charcoal-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-sm font-mono font-bold w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-charcoal-900 text-white'
                          : 'bg-charcoal-100 text-charcoal-600 group-hover:bg-charcoal-200'
                      }`}
                    >
                      {step.number}
                    </span>

                    <div>
                      <div className="text-base font-bold text-charcoal-900 group-hover:text-brand-600 transition-colors">
                        {step.title}
                      </div>
                      <div className="text-xs text-charcoal-500 font-medium">
                        {step.subtitle}
                      </div>
                    </div>
                  </div>

                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isSelected ? 'text-brand-600 translate-x-0.5' : 'text-charcoal-400 group-hover:translate-x-0.5'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Deep Phase Reveal Showcase (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-charcoal-200/80 shadow-card relative">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-charcoal-100">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-mono font-bold bg-brand-50 text-brand-700 px-3 py-1 rounded-lg">
                  PHASE {activeStep.number}
                </span>
                <span className="text-xs font-semibold text-charcoal-400">
                  {activeStep.subtitle}
                </span>
              </div>

              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                {activeStep.metrics}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 mb-4">
              {activeStep.title}
            </h3>

            <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed mb-8">
              {activeStep.description}
            </p>

            {/* Deliverables Box */}
            <div className="bg-charcoal-50/70 rounded-2xl p-5 border border-charcoal-100 mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-charcoal-500 mb-3 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-brand-600" />
                <span>Verified Deliverables in this Stage</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeStep.deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-medium text-charcoal-800 bg-white p-2.5 rounded-xl border border-charcoal-200/60">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action inside step */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-charcoal-100">
              <div className="text-xs text-charcoal-500 text-center sm:text-left">
                Start phase 01 with a calibrated 7-minute diagnostic.
              </div>
              <button
                onClick={onOpenAssessment}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-charcoal-900 hover:bg-brand-600 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
              >
                <span>Initiate Step {activeStep.number}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
