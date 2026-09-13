import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="relative py-28 sm:py-36 bg-charcoal-950 text-white overflow-hidden">
      {/* Animated subtle gradient backdrop blobs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-gradient-to-r from-loop-indigo/25 via-loop-violet/20 to-loop-coral/20 rounded-full blur-3xl pointer-events-none" />

      {/* Infinity path line in background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <svg viewBox="0 0 1000 400" fill="none" className="w-full h-full max-w-5xl">
          <path
            d="M200 200 C 50 50, 50 350, 200 350 C 350 350, 650 50, 800 50 C 950 50, 950 350, 800 350 C 650 350, 350 50, 200 50"
            stroke="white"
            strokeWidth="3"
            strokeDasharray="12 12"
          />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-bold tracking-wider uppercase text-white">
          <Sparkles className="w-3.5 h-3.5 text-loop-coral" />
          <span>Start Your Momentum</span>
        </div>

        {/* Heading */}
        <h2 className="font-display text-4xl sm:text-6xl font-black tracking-tighter leading-[1.1]">
          Your next opportunity is <span className="gradient-loop-text">closer</span> than you think.
        </h2>

        {/* Supporting Quote */}
        <p className="text-lg sm:text-xl text-charcoal-300 font-light max-w-2xl mx-auto italic">
          “Find the role. Build the experience. Keep moving.”
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/jobs"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-extrabold text-charcoal-950 bg-white hover:bg-warm-100 transition-all duration-200 shadow-xl hover:scale-105 group"
          >
            <span>Explore Jobs</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            to="/internships"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-extrabold text-white bg-charcoal-900 hover:bg-charcoal-800 border border-charcoal-700/80 transition-all duration-200 hover:scale-105"
          >
            <Compass className="w-4 h-4 text-loop-violet" />
            <span>Find Internships</span>
          </Link>
        </div>

        {/* Footnote */}
        <div className="pt-6 text-xs text-charcoal-400">
          Free for candidates & students across Tamil Nadu and India • Verified startups & colleges
        </div>
      </div>
    </section>
  );
};
