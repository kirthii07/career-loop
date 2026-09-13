import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Compass,
  Activity,
  BookOpen,
  ShieldCheck,
  Send,
  TrendingUp,
  RotateCcw,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { LOOP_STEPS } from '../data/mockData';

export const CareerLoopSignature: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState(0);

  const stepIcons = [Compass, Activity, BookOpen, ShieldCheck, Send, TrendingUp];

  return (
    <section id="career-loop" className="py-24 sm:py-32 bg-background-subtle relative overflow-hidden">
      {/* Subtle radial ambient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-brand-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-charcoal-200 text-brand-700 text-xs font-semibold mb-4 shadow-subtle">
            <RotateCcw className="w-3.5 h-3.5 text-brand-600 animate-spin" style={{ animationDuration: '8s' }} />
            <span>SIGNATURE METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight leading-[1.15] mb-5">
            Your Career, <br />
            <span className="gradient-text">In One Continuous Loop.</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
            Traditional education treats placement as a finish line. Career Loop models your trajectory as an iterative, accelerating loop—re-evaluating and elevating your leverage at every stage of growth.
          </p>
        </div>

        {/* Circular / Loop Interactive Pathway Visual */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-charcoal-200/80 shadow-card mb-12 relative">
          
          {/* SVG Continuous Loop Track (Desktop & Tablet) */}
          <div className="hidden md:block relative w-full mb-10">
            <svg viewBox="0 0 1000 180" className="w-full h-auto overflow-visible">
              <defs>
                <linearGradient id="loopGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#4F46E5" />
                  <stop offset="30%" stopColor="#6366F1" />
                  <stop offset="70%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#2563EB" />
                </linearGradient>
              </defs>

              {/* Main Forward Pathway */}
              <path
                d="M 60 90 H 940"
                fill="none"
                stroke="#E2E8F0"
                strokeWidth="4"
                strokeDasharray="8 8"
              />

              {/* Active animated loop path */}
              <path
                d="M 60 90 H 940"
                fill="none"
                stroke="url(#loopGradient)"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Return Loop Back from GROW to DISCOVER */}
              <path
                d="M 940 90 C 990 140, 960 170, 850 170 H 150 C 40 170, 10 140, 60 90"
                fill="none"
                stroke="#C7D2FE"
                strokeWidth="3"
                strokeDasharray="6 6"
              />
              <text x="500" y="162" textAnchor="middle" fill="#6366F1" fontSize="11" fontWeight="600" letterSpacing="0.08em">
                CONTINUOUS ITERATIVE LOOPBACK TO DISCOVER
              </text>
            </svg>

            {/* Positioned Node Buttons along the track */}
            <div className="grid grid-cols-6 gap-2 sm:gap-4 -mt-36 sm:-mt-40 mb-14 relative z-10">
              {LOOP_STEPS.map((step, index) => {
                const Icon = stepIcons[index];
                const isActive = selectedStep === index;
                return (
                  <button
                    key={step.id}
                    onClick={() => setSelectedStep(index)}
                    className={`flex flex-col items-center p-3 rounded-2xl transition-all duration-300 group text-center ${
                      isActive
                        ? 'bg-charcoal-900 text-white shadow-float scale-105'
                        : 'bg-white hover:bg-charcoal-50 text-charcoal-700 border border-charcoal-200/80 shadow-subtle'
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center mb-2 transition-transform ${
                        isActive
                          ? 'bg-brand-600 text-white'
                          : 'bg-brand-50 text-brand-600 group-hover:scale-110'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider opacity-60 uppercase mb-0.5">
                      {step.number}
                    </span>
                    <span className="text-xs font-bold leading-tight">
                      {step.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Mobile Step Carousel / Selector */}
          <div className="md:hidden flex overflow-x-auto gap-2 pb-4 mb-6 no-scrollbar">
            {LOOP_STEPS.map((step, index) => {
              const Icon = stepIcons[index];
              const isActive = selectedStep === index;
              return (
                <button
                  key={step.id}
                  onClick={() => setSelectedStep(index)}
                  className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-charcoal-900 text-white'
                      : 'bg-charcoal-50 text-charcoal-700 border border-charcoal-200'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{step.name}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Active Step Focus Box */}
          <div className="bg-gradient-to-br from-charcoal-50 to-white rounded-2xl p-6 sm:p-8 border border-charcoal-200/70">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              <div className="lg:col-span-8">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-brand-600 mb-2">
                  <span>STEP {LOOP_STEPS[selectedStep].number} OF 06</span>
                  <span>•</span>
                  <span>{LOOP_STEPS[selectedStep].stat}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-charcoal-900 mb-3">
                  {LOOP_STEPS[selectedStep].title}
                </h3>

                <p className="text-sm sm:text-base text-charcoal-600 leading-relaxed mb-5">
                  {LOOP_STEPS[selectedStep].description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-charcoal-700">
                  <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-charcoal-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    Automated Evaluation Metrics
                  </span>
                  <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-charcoal-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-600" />
                    Tier-1 Company Alignment
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-charcoal-200/80 shadow-subtle">
                <div className="text-xs font-bold text-charcoal-500 uppercase tracking-wider mb-2">
                  Key Output & Verification
                </div>
                <div className="text-lg font-extrabold text-charcoal-900 mb-1">
                  {LOOP_STEPS[selectedStep].stat}
                </div>
                <p className="text-xs text-charcoal-500 mb-4">
                  Delivered into your verifiable candidate portfolio upon completion.
                </p>
                <div className="flex items-center justify-between text-xs pt-3 border-t border-charcoal-100">
                  <span className="text-charcoal-600 font-medium">Next Stage:</span>
                  <button
                    onClick={() => setSelectedStep((selectedStep + 1) % LOOP_STEPS.length)}
                    className="font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
                  >
                    <span>{LOOP_STEPS[(selectedStep + 1) % LOOP_STEPS.length].name}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
