import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  ChevronRight,
  ShieldCheck,
  Code2,
  Layers,
  Bell
} from 'lucide-react';
import heroStudentImg from '../assets/images/hero_student.jpg';
import { HERO_DASHBOARD_METRICS } from '../data/mockData';

interface HeroProps {
  onOpenAssessment: () => void;
  onOpenCareerPaths: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAssessment, onOpenCareerPaths }) => {
  const [activeMetricTab, setActiveMetricTab] = useState<'overview' | 'skills' | 'timeline'>('overview');
  const [isAssessmentDone, setIsAssessmentDone] = useState(false);

  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-gradient-to-b from-background-warm via-background to-background-subtle">
      {/* Subtle background radial accent lights */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-brand-100/40 via-brand-50/20 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-36 right-[10%] w-[350px] h-[350px] bg-brand-200/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-48 left-[5%] w-[300px] h-[300px] bg-indigo-200/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Eyebrow & Hero Header */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-charcoal-200/80 shadow-subtle mb-6 glass-pill"
          >
            <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider text-charcoal-700 uppercase">
              CAREER INTELLIGENCE PLATFORM
            </span>
            <span className="text-charcoal-300">|</span>
            <span className="text-[11px] sm:text-xs font-medium text-brand-700 flex items-center gap-0.5">
              Powered by Verified Skill Diagnostics <ChevronRight className="w-3 h-3 inline" />
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-charcoal-900 leading-[1.08] mb-6"
          >
            Your Career <br className="hidden sm:inline" />
            <span className="gradient-text">Starts With Clarity.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl font-medium text-charcoal-800 max-w-2xl mx-auto mb-3"
          >
            Discover your direction. Build your skills. Become placement-ready.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="text-sm sm:text-base text-charcoal-500 max-w-xl mx-auto leading-relaxed mb-8"
          >
            Career Loop connects career guidance, skill development and placement support into one focused journey.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              onClick={onOpenAssessment}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-charcoal-900 hover:bg-brand-600 text-white text-base font-semibold px-7 py-3.5 rounded-xl transition-all duration-200 shadow-card hover:shadow-glow hover:-translate-y-0.5"
            >
              <span>Start Your Journey</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenCareerPaths}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-charcoal-50 text-charcoal-800 text-base font-medium px-6 py-3.5 rounded-xl border border-charcoal-200 transition-all duration-200 hover:border-charcoal-300 shadow-subtle"
            >
              <Briefcase className="w-4 h-4 text-charcoal-500" />
              <span>Explore Career Paths</span>
            </button>
          </motion.div>

          {/* Social Proof Mini Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-charcoal-500"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              No generic questionnaires
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              Real industry rubrics
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              420+ Hiring partner alignment
            </span>
          </motion.div>
        </div>

        {/* Section 9 & 10: HERO VISUAL + EDITORIAL IMAGE COMPOSITION */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="relative max-w-6xl mx-auto"
        >
          {/* Main Integrated Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            {/* LEFT / CENTER: Realistic SaaS Career Dashboard UI (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-charcoal-200/80 shadow-float p-5 sm:p-7 relative z-20">
              
              {/* Dashboard Browser Window Bar */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-charcoal-100">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-400/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-400/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-xs font-medium text-charcoal-400 ml-2 font-mono">
                    app.careerloop.io/intelligence/workspace
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="relative">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 absolute -top-0.5 -right-0.5" />
                    <div className="p-1.5 rounded-lg bg-charcoal-50 text-charcoal-600">
                      <Bell className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold bg-brand-50 text-brand-700 px-2.5 py-1 rounded-full border border-brand-200/60">
                    Live Diagnostic
                  </span>
                </div>
              </div>

              {/* User Greeting & Recommendation Strip */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-gradient-to-r from-charcoal-900 to-charcoal-800 text-white mb-6 shadow-sm">
                <div>
                  <div className="text-[11px] font-medium tracking-wide uppercase text-brand-300">
                    Target Trajectory
                  </div>
                  <div className="text-lg font-bold flex items-center gap-2">
                    <span>{HERO_DASHBOARD_METRICS.recommendedCareer}</span>
                    <span className="text-xs bg-brand-600/60 text-white px-2 py-0.5 rounded-md font-normal">
                      L4 Cloud Spec
                    </span>
                  </div>
                  <div className="text-xs text-charcoal-300 mt-0.5">
                    Tier-1 Tech Placement Benchmark
                  </div>
                </div>

                <div className="sm:text-right border-t sm:border-t-0 sm:border-l border-white/15 pt-2 sm:pt-0 sm:pl-4">
                  <div className="text-[11px] text-charcoal-300">Career Match Score</div>
                  <div className="text-2xl font-black text-brand-300 flex items-center sm:justify-end gap-1">
                    <span>{HERO_DASHBOARD_METRICS.careerMatch}%</span>
                    <Sparkles className="w-4 h-4 text-brand-400" />
                  </div>
                </div>
              </div>

              {/* 4 Core Readiness Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                
                {/* Metric 1: Career Readiness 86% */}
                <div className="bg-charcoal-50/70 border border-charcoal-100 rounded-2xl p-3.5 text-center relative overflow-hidden group hover:border-brand-300 transition-colors">
                  <div className="text-xs font-semibold text-charcoal-500 mb-1">Career Readiness</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight">
                    {HERO_DASHBOARD_METRICS.careerReadiness}%
                  </div>
                  <div className="w-full bg-charcoal-200 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-brand-600 h-full rounded-full" style={{ width: '86%' }} />
                  </div>
                  <div className="text-[10px] text-emerald-600 font-semibold mt-1 flex items-center justify-center gap-0.5">
                    <TrendingUp className="w-2.5 h-2.5" /> +14% this month
                  </div>
                </div>

                {/* Metric 2: Career Match 94% */}
                <div className="bg-charcoal-50/70 border border-charcoal-100 rounded-2xl p-3.5 text-center relative overflow-hidden group hover:border-brand-300 transition-colors">
                  <div className="text-xs font-semibold text-charcoal-500 mb-1">Career Match</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-brand-600 tracking-tight">
                    {HERO_DASHBOARD_METRICS.careerMatch}%
                  </div>
                  <div className="w-full bg-charcoal-200 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-brand-500 h-full rounded-full" style={{ width: '94%' }} />
                  </div>
                  <div className="text-[10px] text-charcoal-500 font-medium mt-1">
                    Aptitude Calibrated
                  </div>
                </div>

                {/* Metric 3: Skill Progress 78% */}
                <div className="bg-charcoal-50/70 border border-charcoal-100 rounded-2xl p-3.5 text-center relative overflow-hidden group hover:border-brand-300 transition-colors">
                  <div className="text-xs font-semibold text-charcoal-500 mb-1">Skill Progress</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight">
                    {HERO_DASHBOARD_METRICS.skillProgress}%
                  </div>
                  <div className="w-full bg-charcoal-200 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-indigo-500 h-full rounded-full" style={{ width: '78%' }} />
                  </div>
                  <div className="text-[10px] text-charcoal-500 font-medium mt-1">
                    4/5 Milestones
                  </div>
                </div>

                {/* Metric 4: Interview Readiness 88% */}
                <div className="bg-charcoal-50/70 border border-charcoal-100 rounded-2xl p-3.5 text-center relative overflow-hidden group hover:border-brand-300 transition-colors">
                  <div className="text-xs font-semibold text-charcoal-500 mb-1">Interview Ready</div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-600 tracking-tight">
                    {HERO_DASHBOARD_METRICS.interviewReadiness}%
                  </div>
                  <div className="w-full bg-charcoal-200 h-1.5 rounded-full mt-2 overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '88%' }} />
                  </div>
                  <div className="text-[10px] text-emerald-700 font-medium mt-1">
                    Mock Passed
                  </div>
                </div>
              </div>

              {/* Skills Diagnostic Breakdown */}
              <div className="space-y-2.5 mb-6">
                <div className="flex items-center justify-between text-xs font-semibold text-charcoal-700 mb-1">
                  <span>Target Competency Breakdown</span>
                  <span className="text-brand-600 font-mono">SWE Track</span>
                </div>

                {HERO_DASHBOARD_METRICS.skills.map((skill, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs bg-charcoal-50/60 p-2.5 rounded-xl border border-charcoal-100">
                    <div className="w-32 font-medium text-charcoal-800 truncate">{skill.name}</div>
                    <div className="flex-1 bg-charcoal-200 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full ${
                          skill.level >= 85
                            ? 'bg-emerald-500'
                            : skill.level >= 70
                            ? 'bg-brand-600'
                            : 'bg-amber-500'
                        }`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="w-9 font-bold text-charcoal-900 text-right">{skill.level}%</span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${
                        skill.tag === 'Action Required'
                          ? 'bg-amber-100 text-amber-800 border border-amber-200'
                          : skill.tag === 'Advanced'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-charcoal-200 text-charcoal-700'
                      }`}
                    >
                      {skill.tag}
                    </span>
                  </div>
                ))}
              </div>

              {/* Next Recommended Action Banner */}
              <div className="bg-gradient-to-r from-brand-50 to-indigo-50/60 border border-brand-200/80 rounded-2xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-brand-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-brand-700">
                      Next Recommended Action
                    </div>
                    <div className="text-sm font-semibold text-charcoal-900">
                      {HERO_DASHBOARD_METRICS.nextRecommendedAction}
                    </div>
                    <div className="text-xs text-charcoal-500">
                      Unlocks remaining 14% backend placement score
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsAssessmentDone(true)}
                  className="inline-flex items-center gap-1.5 bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition-all shadow-sm shrink-0"
                >
                  {isAssessmentDone ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-200" />
                      Assessment Cleared (96%)
                    </>
                  ) : (
                    <>
                      Begin Diagnostic
                      <ArrowRight className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* RIGHT: Editorial Human-Centered Career Photo + Overlay Badges (5 cols) */}
            <div className="lg:col-span-5 relative">
              {/* Subtle background glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-brand-300/30 to-indigo-300/30 rounded-3xl blur-2xl -z-10" />

              {/* Masked Editorial Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-card border border-charcoal-200/70 bg-white">
                <img
                  src={heroStudentImg}
                  alt="Young professional working on career growth in modern tech workspace"
                  className="w-full h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient vignette to blend */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Notification Badge: Placement Offer Verified */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute top-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-float border border-charcoal-100 max-w-[210px] animate-float-slow"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-bold text-charcoal-900 leading-tight">Offer Secured</div>
                      <div className="text-[10px] text-charcoal-500">₹22 LPA Software Role</div>
                    </div>
                  </div>
                  <div className="mt-2 pt-1.5 border-t border-charcoal-100 flex items-center justify-between text-[10px]">
                    <span className="text-charcoal-500">Interview prep time</span>
                    <span className="font-bold text-emerald-600">6 Weeks</span>
                  </div>
                </motion.div>

                {/* Floating Candidate Profile Card on bottom left */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-3.5 shadow-float border border-charcoal-100"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-charcoal-900 text-white font-bold text-sm flex items-center justify-center">
                        AV
                      </div>
                      <div>
                        <div className="text-xs font-bold text-charcoal-900">Ananya Verma</div>
                        <div className="text-[11px] text-charcoal-500">Computer Science • Final Year</div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-[10px] font-semibold text-brand-600 uppercase tracking-wider">
                        Target Role
                      </div>
                      <div className="text-xs font-bold text-charcoal-900">
                        Cloud & Systems
                      </div>
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-charcoal-100 grid grid-cols-3 gap-2 text-center">
                    <div className="bg-charcoal-50 rounded-lg py-1 px-1.5">
                      <div className="text-[9px] text-charcoal-500">Readiness</div>
                      <div className="text-xs font-bold text-charcoal-900">86%</div>
                    </div>
                    <div className="bg-charcoal-50 rounded-lg py-1 px-1.5">
                      <div className="text-[9px] text-charcoal-500">DSA Rank</div>
                      <div className="text-xs font-bold text-emerald-600">Top 4%</div>
                    </div>
                    <div className="bg-charcoal-50 rounded-lg py-1 px-1.5">
                      <div className="text-[9px] text-charcoal-500">Hiring Fast-Track</div>
                      <div className="text-xs font-bold text-brand-600">Active</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Miniature Sub-Card: Live ATS Score */}
              <div className="hidden sm:block absolute -bottom-5 -right-3 bg-charcoal-900 text-white rounded-2xl p-3 shadow-float border border-charcoal-700 z-30">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-brand-300" />
                  <span className="text-[11px] font-semibold">ATS Resume Calibrated</span>
                  <span className="text-xs font-bold text-emerald-400 ml-1">96/100</span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
