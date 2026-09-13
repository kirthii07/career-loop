import React, { useState } from 'react';
import {
  Building2,
  Users,
  TrendingUp,
  BarChart3,
  PieChart as PieChartIcon,
  ShieldCheck,
  Download,
  ArrowUpRight,
  Filter,
  CheckCircle2
} from 'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend
} from 'recharts';
import { INSTITUTION_ANALYTICS_DATA } from '../data/mockData';

export const InstitutionSection: React.FC = () => {
  const [activeCohort, setActiveCohort] = useState('All Cohorts');

  return (
    <section id="institutions" className="py-24 sm:py-32 bg-charcoal-900 text-white relative overflow-hidden">
      {/* Subtle radial accent lights for dark luxury SaaS aesthetic */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[350px] bg-brand-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[500px] h-[300px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-charcoal-800 border border-charcoal-700 text-brand-300 text-xs font-semibold mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>ENTERPRISE & UNIVERSITY PLATFORM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.15] mb-5">
            Better Career Outcomes <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-indigo-300 to-white">
              For Forward-Thinking Institutions.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-300 leading-relaxed">
            Equip placement cells and academic leadership with real-time cohort visibility. Identify curriculum gaps, track student milestones, and connect graduating batches with enterprise hiring pipelines.
          </p>
        </div>

        {/* Enterprise Analytics Dashboard Preview */}
        <div className="bg-charcoal-800/90 rounded-3xl p-5 sm:p-8 border border-charcoal-700/80 shadow-float backdrop-blur-md">
          
          {/* Top Bar of Institutional Portal */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-charcoal-700">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-400">
                  Institutional Intelligence Console
                </span>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Live Enterprise Sync
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mt-1">
                National Institute of Technology • Engineering Cohort 2026
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-charcoal-400 font-mono hidden md:inline">Demo Analytics Mode</span>
              <button className="inline-flex items-center gap-1.5 bg-charcoal-700 hover:bg-charcoal-600 text-white text-xs font-semibold px-3 py-2 rounded-xl transition-colors border border-charcoal-600">
                <Download className="w-3.5 h-3.5" />
                <span>Export Accreditation Report</span>
              </button>
            </div>
          </div>

          {/* 4 High-Impact Institutional KPIs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {INSTITUTION_ANALYTICS_DATA.kpis.map((kpi, idx) => (
              <div key={idx} className="bg-charcoal-900/80 p-4 sm:p-5 rounded-2xl border border-charcoal-700/60">
                <div className="text-xs text-charcoal-400 font-medium mb-1">{kpi.label}</div>
                <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">{kpi.value}</div>
                <div className="text-[11px] text-emerald-400 font-semibold mt-2 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>{kpi.change} vs prior semester</span>
                </div>
              </div>
            ))}
          </div>

          {/* Two Large Analytic Visualizations */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
            
            {/* Chart 1: Placement Readiness by Semester Cohort (7 cols) */}
            <div className="lg:col-span-7 bg-charcoal-900/80 p-5 sm:p-6 rounded-2xl border border-charcoal-700/60">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-sm font-bold text-white">Cohort Skill & Readiness Progression</div>
                  <div className="text-xs text-charcoal-400">Average benchmark score across semesters 3 through 7</div>
                </div>
                <BarChart3 className="w-4 h-4 text-brand-400" />
              </div>

              <div className="w-full h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={INSTITUTION_ANALYTICS_DATA.cohortTrends} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#333748" />
                    <XAxis dataKey="cohort" tick={{ fontSize: 11, fill: '#9EA6BA' }} axisLine={false} tickLine={false} />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 11, fill: '#9EA6BA' }} axisLine={false} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#181A22',
                        borderColor: '#323746',
                        borderRadius: '10px',
                        color: '#FFFFFF',
                        fontSize: '12px'
                      }}
                    />
                    <Bar dataKey="readiness" fill="#4F46E5" radius={[4, 4, 0, 0]} name="Readiness Index" />
                    <Bar dataKey="technical" fill="#6366F1" radius={[4, 4, 0, 0]} name="Technical Mastery" />
                    <Bar dataKey="aptitude" fill="#2563EB" radius={[4, 4, 0, 0]} name="Aptitude Baseline" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: Career Domain Distribution (5 cols) */}
            <div className="lg:col-span-5 bg-charcoal-900/80 p-5 sm:p-6 rounded-2xl border border-charcoal-700/60 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <div className="text-sm font-bold text-white">Career Domain Distribution</div>
                    <div className="text-xs text-charcoal-400">Aspiration and placement fit breakdown</div>
                  </div>
                  <PieChartIcon className="w-4 h-4 text-brand-400" />
                </div>

                <div className="space-y-3 mt-4">
                  {INSTITUTION_ANALYTICS_DATA.domainDistribution.map((domain, i) => (
                    <div key={i} className="bg-charcoal-800/70 p-3 rounded-xl border border-charcoal-700/50 flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: domain.color }} />
                        <span className="text-xs font-medium text-charcoal-200">{domain.name}</span>
                      </div>
                      <div className="text-right flex items-center gap-3">
                        <span className="text-xs font-bold text-white">{domain.value}%</span>
                        <span className="text-[10px] text-charcoal-400 font-mono">({domain.count})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-charcoal-700/60 text-[11px] text-charcoal-400 text-center">
                Refreshed weekly from verified student mock tests and diagnostics.
              </div>
            </div>

          </div>

          {/* Curriculum Skill Gap Diagnostic for Institutional Deans */}
          <div className="bg-charcoal-900/80 p-5 sm:p-6 rounded-2xl border border-charcoal-700/60">
            <div className="text-xs font-bold uppercase tracking-wider text-brand-400 mb-2">
              Actionable Curriculum Optimization
            </div>
            <div className="text-sm font-bold text-white mb-4">
              Real-time Skill Gap Analysis vs Tier-1 Corporate Hiring Demands
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {INSTITUTION_ANALYTICS_DATA.skillGapHighlights.map((item, idx) => (
                <div key={idx} className="bg-charcoal-800/60 p-3.5 rounded-xl border border-charcoal-700/50 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-charcoal-200">{item.skill}</div>
                    <div className="text-[11px] text-charcoal-400 mt-0.5">
                      Cohort Average: <span className="text-white font-semibold">{item.currentAvg}%</span> • Required: <span className="text-brand-300 font-semibold">{item.benchmark}%</span>
                    </div>
                  </div>
                  <span className={`text-[10px] font-semibold px-2 py-1 rounded-md ${
                    item.status === 'On Target'
                      ? 'bg-emerald-500/20 text-emerald-300'
                      : item.status === 'Focus Area'
                      ? 'bg-amber-500/20 text-amber-300'
                      : 'bg-brand-500/20 text-brand-300'
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
