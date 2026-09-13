import React, { useState } from 'react';
import {
  Compass,
  Sparkles,
  ShieldCheck,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Code2,
  Terminal,
  FileCheck,
  Building,
  Activity,
  Layers
} from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/mockData';

interface SolutionsProps {
  onOpenAssessment: () => void;
  onOpenCareerPaths: () => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onOpenAssessment, onOpenCareerPaths }) => {
  const [activeTab, setActiveTab] = useState<'card1' | 'card2' | 'card3' | 'card4'>('card1');
  const [skillAnalysisRan, setSkillAnalysisRan] = useState(false);

  return (
    <section id="solutions" className="py-24 sm:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200/60 text-brand-700 text-xs font-semibold mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>INTELLIGENCE & PLACEMENT SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight leading-[1.15] mb-5">
            Everything You Need <br />
            <span className="gradient-text">To Move Forward.</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed">
            Eliminate career uncertainty through connected intelligence. Each module directly addresses the specific friction points between student education and high-tier placement.
          </p>
        </div>

        {/* 4 Distinct Solutions Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* CARD 1: Career Discovery (Rich Cognitive Matching UI) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold font-mono text-brand-600 bg-brand-50 px-2.5 py-1 rounded-md">
                  SOLUTION 01
                </span>
                <span className="text-xs font-medium text-charcoal-400">Precision Mapping</span>
              </div>

              <h3 className="text-2xl font-bold text-charcoal-900 tracking-tight mb-2">
                Career Discovery
              </h3>
              <p className="text-sm text-charcoal-600 mb-6">
                Understand strengths, interests and career direction through cognitive diagnostics and high-growth market demand modeling.
              </p>

              {/* Unique Visual Snippet: Career Match Compass */}
              <div className="bg-charcoal-50/80 rounded-2xl p-4 border border-charcoal-100 mb-6">
                <div className="flex items-center justify-between text-xs font-semibold text-charcoal-700 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-brand-600" />
                    Cognitive Aptitude Alignments
                  </span>
                  <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    High Confidence
                  </span>
                </div>

                <div className="space-y-2.5">
                  <div className="bg-white p-3 rounded-xl border border-charcoal-200/60 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-charcoal-900">Cloud & Distributed Systems</div>
                      <div className="text-[11px] text-charcoal-500">Strong analytical & algorithmic spatial reasoning</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-black text-brand-600">94%</div>
                      <div className="text-[9px] text-charcoal-400">Match Fit</div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-charcoal-200/60 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-charcoal-900">AI / Machine Learning Engineer</div>
                      <div className="text-[11px] text-charcoal-500">High mathematical intuition & experimental logic</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-black text-charcoal-900">86%</div>
                      <div className="text-[9px] text-charcoal-400">Match Fit</div>
                    </div>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-charcoal-200/60 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-charcoal-900">Data Platform Engineer</div>
                      <div className="text-[11px] text-charcoal-500">High structured query & pattern recognition</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-black text-charcoal-900">82%</div>
                      <div className="text-[9px] text-charcoal-400">Match Fit</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Feature Bullets */}
              <ul className="space-y-2 text-xs text-charcoal-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Cognitive aptitude & technical interest alignment</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Salary benchmarks ($90k–$160k / ₹14L–₹32L range)</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-charcoal-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-charcoal-500">94% Career Clarity Rate</span>
              <button
                onClick={onOpenCareerPaths}
                className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:gap-1.5 transition-all"
              >
                <span>Explore Paths</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* CARD 2: Skill Intelligence (Interactive Gap Analysis UI) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold font-mono text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                  SOLUTION 02
                </span>
                <span className="text-xs font-medium text-charcoal-400">Gap Intelligence</span>
              </div>

              <h3 className="text-2xl font-bold text-charcoal-900 tracking-tight mb-2">
                Skill Intelligence
              </h3>
              <p className="text-sm text-charcoal-600 mb-6">
                Identify exact skill gaps and understand what to learn next through granular codebase and conceptual diagnostics.
              </p>

              {/* Unique Visual Snippet: Live Skill Gap Diagnostic Box */}
              <div className="bg-charcoal-900 text-white rounded-2xl p-4 border border-charcoal-700 mb-6 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-charcoal-700">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-brand-400" />
                    <span className="text-charcoal-300 text-[11px]">benchmark_diagnostic.ts</span>
                  </div>
                  <button
                    onClick={() => setSkillAnalysisRan(!skillAnalysisRan)}
                    className="text-[10px] bg-brand-600 hover:bg-brand-500 text-white px-2 py-0.5 rounded transition-colors font-sans font-semibold"
                  >
                    {skillAnalysisRan ? 'Reset' : 'Run Gap Analysis'}
                  </button>
                </div>

                <div className="space-y-2 font-sans">
                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-charcoal-300">Distributed Systems & Concurrency</span>
                      <span className="text-brand-300 font-mono">75% (Target: 85%)</span>
                    </div>
                    <div className="w-full bg-charcoal-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-brand-500 h-full rounded-full transition-all duration-700" style={{ width: skillAnalysisRan ? '85%' : '75%' }} />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-[11px] mb-1">
                      <span className="text-charcoal-300">Database Indexing & Query Plans</span>
                      <span className="text-amber-400 font-mono">68% (Focus Gap)</span>
                    </div>
                    <div className="w-full bg-charcoal-700 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-amber-400 h-full rounded-full transition-all duration-700" style={{ width: skillAnalysisRan ? '80%' : '68%' }} />
                    </div>
                  </div>

                  {skillAnalysisRan && (
                    <div className="mt-2.5 p-2 bg-charcoal-800 rounded-lg text-[10px] text-emerald-300 font-mono flex items-center gap-1.5 animate-in fade-in">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>Action plan generated: Complete 3-lesson SQL sprint to close 12% gap</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Feature Bullets */}
              <ul className="space-y-2 text-xs text-charcoal-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Dynamic competency graphs compared against industry rubrics</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Targeted micro-modules focused strictly on weaknesses</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-charcoal-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-charcoal-500">3.8x Faster Mastery</span>
              <button
                onClick={onOpenAssessment}
                className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:gap-1.5 transition-all"
              >
                <span>Diagnose Skills</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* CARD 3: Placement Readiness (ATS + Mock Panel Simulator) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold font-mono text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                  SOLUTION 03
                </span>
                <span className="text-xs font-medium text-charcoal-400">Interview Mastery</span>
              </div>

              <h3 className="text-2xl font-bold text-charcoal-900 tracking-tight mb-2">
                Placement Readiness
              </h3>
              <p className="text-sm text-charcoal-600 mb-6">
                Prepare for resumes, aptitude, coding and interviews with live panel mock simulations and strict ATS scoring.
              </p>

              {/* Unique Visual Snippet: Resume ATS & Mock Panel Card */}
              <div className="bg-charcoal-50/80 rounded-2xl p-4 border border-charcoal-100 mb-6">
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-white p-3 rounded-xl border border-charcoal-200/60 text-center">
                    <div className="text-[10px] text-charcoal-500 font-semibold mb-0.5">ATS Resume Score</div>
                    <div className="text-2xl font-black text-emerald-600">96<span className="text-xs text-charcoal-400">/100</span></div>
                    <div className="text-[9px] text-emerald-700 font-medium">Top Tier Pass</div>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-charcoal-200/60 text-center">
                    <div className="text-[10px] text-charcoal-500 font-semibold mb-0.5">Mock Interview Panel</div>
                    <div className="text-2xl font-black text-brand-600">88<span className="text-xs text-charcoal-400">%</span></div>
                    <div className="text-[9px] text-brand-700 font-medium">Placement Cleared</div>
                  </div>
                </div>

                <div className="bg-white p-2.5 rounded-xl border border-charcoal-200/60 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-charcoal-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      Algorithmic Data Structures
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600">92%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-charcoal-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      Live Technical Communication
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600">84%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-charcoal-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                      Behavioral & Situational STAR
                    </span>
                    <span className="text-[10px] font-bold text-emerald-600">89%</span>
                  </div>
                </div>
              </div>

              {/* Feature Bullets */}
              <ul className="space-y-2 text-xs text-charcoal-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Real mock interview simulations with veteran engineers</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Automated ATS keyword and project impact grading</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-charcoal-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-charcoal-500">88% First-Round Success</span>
              <button
                onClick={onOpenAssessment}
                className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:gap-1.5 transition-all"
              >
                <span>View Rubrics</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* CARD 4: Career Opportunities (Hiring Pipeline & Pre-Vetted Leads) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-charcoal-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold font-mono text-charcoal-900 bg-charcoal-100 px-2.5 py-1 rounded-md">
                  SOLUTION 04
                </span>
                <span className="text-xs font-medium text-charcoal-400">Direct Pipeline</span>
              </div>

              <h3 className="text-2xl font-bold text-charcoal-900 tracking-tight mb-2">
                Career Opportunities
              </h3>
              <p className="text-sm text-charcoal-600 mb-6">
                Connect preparation with relevant opportunities by submitting verified readiness profiles directly to partner hiring managers.
              </p>

              {/* Unique Visual Snippet: Hiring Partner Direct Dispatch */}
              <div className="bg-charcoal-50/80 rounded-2xl p-4 border border-charcoal-100 mb-6">
                <div className="flex items-center justify-between text-xs font-semibold text-charcoal-700 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Building className="w-4 h-4 text-charcoal-900" />
                    Verified Candidate Pipeline
                  </span>
                  <span className="text-[10px] font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">
                    Pre-Vetted Pass
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="bg-white p-3 rounded-xl border border-charcoal-200/60 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-charcoal-900">Distributed Backend SDE</div>
                      <div className="text-[10px] text-charcoal-500">Tier-1 SaaS Network • Remote / Bangalore</div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">
                      ₹18 – 24 LPA
                    </span>
                  </div>

                  <div className="bg-white p-3 rounded-xl border border-charcoal-200/60 flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-charcoal-900">Cloud Platform Associate</div>
                      <div className="text-[10px] text-charcoal-500">Enterprise Cloud Partner • Hyderabad</div>
                    </div>
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg border border-emerald-100">
                      ₹16 – 22 LPA
                    </span>
                  </div>
                </div>
              </div>

              {/* Feature Bullets */}
              <ul className="space-y-2 text-xs text-charcoal-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>No cold applications—readiness score bypasses initial filter</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>420+ vetted tech corporate and startup hiring partners</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-charcoal-100 flex items-center justify-between">
              <span className="text-xs font-semibold text-charcoal-500">420+ Corporate Partners</span>
              <button
                onClick={onOpenCareerPaths}
                className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1 group-hover:gap-1.5 transition-all"
              >
                <span>View Hiring Network</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
