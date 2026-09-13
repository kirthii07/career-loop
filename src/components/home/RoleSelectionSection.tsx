import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles, Building2, User } from 'lucide-react';

export const RoleSelectionSection: React.FC = () => {
  const candidateFeatures = [
    'Create your verified profile',
    'Apply to jobs & internships',
    'Track your applications live',
    'Get matched opportunities',
  ];

  const recruiterFeatures = [
    'Post jobs & internships seamlessly',
    'Manage applicants with rich pipeline',
    'Find pre-vetted student & fresher talent',
    'Connect directly with campus placement cells',
  ];

  return (
    <section className="py-16 sm:py-24 bg-warm-100/60 border-y border-charcoal-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-wider text-loop-indigo bg-loop-indigo/10 px-3 py-1 rounded-full">
            Choose Your Gateway
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight mt-3">
            Built for those stepping in, and those hiring up.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 mt-2">
            Whether you are embarking on your very first job or searching for top candidates in Tamil Nadu, CareerLoop provides tailored workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Candidate / Student */}
          <motion.div
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group relative rounded-3xl bg-white border border-charcoal-200/80 p-8 sm:p-10 shadow-card hover:shadow-card-hover hover:border-loop-indigo/50 transition-all flex flex-col justify-between overflow-hidden"
          >
            {/* Background decorative corner gradient */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-loop-indigo/10 via-loop-violet/5 to-transparent rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-loop-indigo/10 flex items-center justify-center text-loop-indigo group-hover:scale-110 transition-transform">
                  <User className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-loop-indigo/10 text-loop-indigo">
                  For Talent
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal-900 mb-2">
                I'm a Student / Job Seeker
              </h3>
              <p className="text-sm text-charcoal-600 mb-6 leading-relaxed">
                “Find jobs, internships and build your career.”
              </p>

              {/* Feature list */}
              <ul className="space-y-3 mb-8">
                {candidateFeatures.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm font-medium text-charcoal-700">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/candidate/register"
              className="inline-flex items-center justify-between w-full px-6 py-4 rounded-2xl text-sm font-bold text-white bg-charcoal-900 hover:bg-black transition-all group-hover:shadow-md"
            >
              <span>Get Started as Candidate</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Card 2: Recruiter / Employer */}
          <motion.div
            whileHover={{ y: -6, transition: { duration: 0.25 } }}
            className="group relative rounded-3xl bg-white border border-charcoal-200/80 p-8 sm:p-10 shadow-card hover:shadow-card-hover hover:border-loop-coral/50 transition-all flex flex-col justify-between overflow-hidden"
          >
            {/* Background decorative corner gradient */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-loop-coral/10 via-loop-pink/5 to-transparent rounded-bl-full pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-loop-coral/10 flex items-center justify-center text-loop-coral group-hover:scale-110 transition-transform">
                  <Building2 className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-loop-coral/10 text-loop-coral">
                  For Employers
                </span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal-900 mb-2">
                I'm a Recruiter
              </h3>
              <p className="text-sm text-charcoal-600 mb-6 leading-relaxed">
                “Hire talented students and professionals.”
              </p>

              {/* Feature list */}
              <ul className="space-y-3 mb-8">
                {recruiterFeatures.map((feat) => (
                  <li key={feat} className="flex items-center gap-3 text-sm font-medium text-charcoal-700">
                    <div className="w-5 h-5 rounded-full bg-loop-coral/10 text-loop-coral flex items-center justify-center shrink-0 border border-loop-coral/20">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/recruiter/register"
              className="inline-flex items-center justify-between w-full px-6 py-4 rounded-2xl text-sm font-bold text-white bg-charcoal-900 hover:bg-black transition-all group-hover:shadow-md"
            >
              <span>Get Started as Recruiter</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
