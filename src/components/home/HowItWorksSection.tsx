import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Send, Sprout, RefreshCw } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'Explore verified jobs and internships tailored to your skills, domain, and location.',
      icon: Compass,
      color: 'from-blue-500 to-indigo-600',
      badgeColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    },
    {
      number: '02',
      title: 'Apply',
      description: 'Take the next step with 1-click profiles, custom resumes, and transparent tracking.',
      icon: Send,
      color: 'from-indigo-500 to-purple-600',
      badgeColor: 'text-purple-600 bg-purple-50 border-purple-200',
    },
    {
      number: '03',
      title: 'Grow',
      description: 'Gain practical workplace experience, mentorship, industry skills, and real confidence.',
      icon: Sprout,
      color: 'from-purple-500 to-pink-600',
      badgeColor: 'text-pink-600 bg-pink-50 border-pink-200',
    },
    {
      number: '04',
      title: 'Repeat',
      description: 'Keep building your future. Every milestone feeds back into your evolving career loop.',
      icon: RefreshCw,
      color: 'from-pink-500 to-orange-500',
      badgeColor: 'text-orange-600 bg-orange-50 border-orange-200',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#FAF9F6] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-gradient-to-r from-loop-indigo/10 via-loop-pink/10 to-loop-coral/10 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-loop-indigo bg-loop-indigo/10 px-3 py-1 rounded-full">
            The Continuous Cycle
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-charcoal-900 tracking-tight mt-3">
            A Simple <span className="gradient-loop-text">Loop</span> to a Better Career.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 mt-3">
            Career advancement is not a rigid one-time event — it's an evolving momentum loop of learning, matching, and elevating.
          </p>
        </div>

        {/* Visual Animated Connecting Infinity Path */}
        <div className="relative mb-12 hidden lg:block">
          <svg
            className="w-full h-32 drop-shadow-sm"
            viewBox="0 0 1000 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="curveLoopGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="35%" stopColor="#8B5CF6" />
                <stop offset="70%" stopColor="#EC4899" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
            </defs>

            {/* Gray track */}
            <path
              d="M 50 60 C 250 -20, 250 140, 500 60 C 750 -20, 750 140, 950 60"
              stroke="#E8E5DC"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="8 8"
            />

            {/* Glowing animated multi-gradient path */}
            <motion.path
              d="M 50 60 C 250 -20, 250 140, 500 60 C 750 -20, 750 140, 950 60"
              stroke="url(#curveLoopGrad)"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: 'easeInOut' }}
            />

            {/* 4 Node Dots on the line */}
            <circle cx="120" cy="40" r="8" fill="#6366F1" className="shadow-lg" />
            <circle cx="380" cy="78" r="8" fill="#8B5CF6" className="shadow-lg" />
            <circle cx="620" cy="40" r="8" fill="#EC4899" className="shadow-lg" />
            <circle cx="880" cy="78" r="8" fill="#F97316" className="shadow-lg" />
          </svg>
        </div>

        {/* 4 Stage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-3xl bg-white border border-charcoal-200/80 p-7 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className={`text-xs font-black px-2.5 py-1 rounded-md border ${step.badgeColor}`}>
                      {step.number}
                    </span>
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-xl font-bold text-charcoal-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-charcoal-100 flex items-center gap-2 text-xs font-bold text-charcoal-400 group-hover:text-charcoal-900 transition-colors">
                  <span>Loop Step {step.number}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
