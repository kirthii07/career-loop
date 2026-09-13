import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, CheckCircle2, TrendingUp, Sparkles, BookOpen } from 'lucide-react';

export const CareerDiscoverySection: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#0F0F0E] text-white relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-loop-indigo/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-loop-coral/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left: Editorial Storytelling */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-800 border border-charcoal-700 text-xs font-bold text-loop-indigo">
              <Compass className="w-4 h-4" />
              <span>EDITORIAL ROADMAP</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter leading-[1.1]">
              Your career isn't a <span className="gradient-loop-text">straight line</span>.
            </h2>

            <p className="text-xl sm:text-2xl text-charcoal-300 font-light italic">
              “Explore. Experiment. Learn. Grow.”
            </p>

            <p className="text-sm sm:text-base text-charcoal-400 font-normal leading-relaxed">
              Modern tech careers zig-zag across internships, open-source projects, mentorship sessions, and rapid pivot points. CareerLoop maps your skills to emerging opportunities so you never get locked into an outdated track.
            </p>

            {/* Key Milestones */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-charcoal-900 border border-charcoal-800">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <Sparkles className="w-4 h-4 text-loop-indigo" />
                  Dynamic Skill Gap Mapping
                </div>
                <p className="text-xs text-charcoal-400 leading-relaxed">
                  Identify specific libraries, frameworks, or certifications companies are actively prioritizing.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-charcoal-900 border border-charcoal-800">
                <div className="flex items-center gap-2 text-white font-bold text-sm mb-1">
                  <TrendingUp className="w-4 h-4 text-loop-coral" />
                  Verified Career Milestones
                </div>
                <p className="text-xs text-charcoal-400 leading-relaxed">
                  Turn internships and campus projects into recruiter-grade proof of execution.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/candidate/register"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-charcoal-950 bg-white hover:bg-warm-100 transition-colors group"
              >
                <span>Chart Your Pathway</span>
                <ArrowRight className="w-4 h-4 text-charcoal-950 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right: Layered Visual Composition */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/5] rounded-3xl overflow-hidden border border-charcoal-800 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop"
                alt="Career Discovery Student"
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0E] via-transparent to-transparent pointer-events-none" />

              {/* Floating Career Path Indicator Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl glass-dark border border-white/10 shadow-2xl space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-loop-pink uppercase tracking-wider">Career Milestone</span>
                  <span className="text-xs font-bold text-emerald-400">92% Ready</span>
                </div>
                <div className="text-sm font-bold text-white">Associate Frontend Engineer</div>
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div className="w-[92%] h-full bg-gradient-to-r from-loop-indigo via-loop-violet to-loop-pink" />
                </div>
                <div className="flex items-center justify-between text-[11px] text-charcoal-400 pt-1">
                  <span>Tamil Nadu Tech Cohort</span>
                  <span>Avg Package: ₹7.5 LPA</span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
