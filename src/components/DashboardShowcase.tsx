import React, { useState } from 'react';
import {
  LayoutDashboard,
  Compass,
  Map,
  Sparkles,
  BookOpen,
  Send,
  Video,
  User,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  AlertCircle,
  Bell,
  Calendar,
  ExternalLink,
  ChevronRight,
  Search,
  Filter,
  Check
} from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart
} from 'recharts';
import { DASHBOARD_TREND_DATA } from '../data/mockData';

interface DashboardShowcaseProps {
  onOpenAssessment: () => void;
}

export const DashboardShowcase: React.FC<DashboardShowcaseProps> = ({ onOpenAssessment }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [checkedSteps, setCheckedSteps] = useState<number[]>([1]); // step 1 checked
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState<'6m' | '3m' | '1m'>('6m');

  const sidebarItems = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Career Assessment', icon: Compass },
    { name: 'Career Roadmap', icon: Map },
    { name: 'Skills Intelligence', icon: Sparkles },
    { name: 'Learning Modules', icon: BookOpen },
    { name: 'Applications', icon: Send, badge: '3 Active' },
    { name: 'Interviews', icon: Video, badge: 'Upcoming' },
    { name: 'Profile & Dossier', icon: User },
  ];

  const toggleStep = (stepNumber: number) => {
    if (checkedSteps.includes(stepNumber)) {
      setCheckedSteps(checkedSteps.filter(s => s !== stepNumber));
    } else {
      setCheckedSteps([...checkedSteps, stepNumber]);
    }
  };

  return (
    <section id="dashboard-showcase" className="py-24 sm:py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-4">
            <LayoutDashboard className="w-3.5 h-3.5 text-brand-600" />
            <span>INTERACTIVE PRODUCT EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight leading-[1.15] mb-5">
            See Where You Stand. <br />
            <span className="gradient-text">Know What's Next.</span>
          </h2>
          <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed max-w-2xl mx-auto">
            Experience the actual student command center. Live benchmarks, milestone progression charts, and real-time gap recommendations that replace guesswork with mathematical clarity.
          </p>
        </div>

        {/* Realistic SaaS Dashboard Container */}
        <div className="bg-charcoal-900/5 rounded-3xl p-2 sm:p-4 border border-charcoal-200/80 shadow-float overflow-hidden">
          <div className="bg-white rounded-2xl border border-charcoal-200/70 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[720px]">
            
            {/* SIDEBAR (3 cols on desktop) */}
            <aside className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-charcoal-100 p-4 sm:p-5 flex flex-col justify-between bg-charcoal-50/40">
              <div>
                {/* Brand & User Profile in sidebar */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-charcoal-200/60">
                  <div className="w-10 h-10 rounded-xl bg-charcoal-900 text-white font-bold text-sm flex items-center justify-center shadow-sm">
                    CL
                  </div>
                  <div>
                    <div className="text-xs font-bold text-charcoal-900">Student Portal</div>
                    <div className="text-[11px] text-charcoal-500">Tier-1 Placement Cohort</div>
                  </div>
                </div>

                {/* Sidebar Navigation */}
                <nav className="space-y-1">
                  {sidebarItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeTab === item.name;
                    return (
                      <button
                        key={item.name}
                        onClick={() => setActiveTab(item.name)}
                        className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                          isActive
                            ? 'bg-charcoal-900 text-white shadow-sm'
                            : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-100/70'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className={`w-4 h-4 ${isActive ? 'text-brand-300' : 'text-charcoal-500'}`} />
                          <span>{item.name}</span>
                        </div>
                        {item.badge && (
                          <span
                            className={`text-[9px] px-2 py-0.5 rounded-full font-mono ${
                              isActive ? 'bg-brand-600 text-white' : 'bg-brand-50 text-brand-700'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Sidebar Footer / Current Candidate Badge */}
              <div className="pt-4 mt-4 border-t border-charcoal-200/60">
                <div className="bg-white p-3 rounded-xl border border-charcoal-200 text-xs">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] uppercase font-bold text-charcoal-400">Target Role</span>
                    <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded">High Intent</span>
                  </div>
                  <div className="font-bold text-charcoal-900">Software Engineer</div>
                  <div className="text-[11px] text-charcoal-500 mt-0.5">Distributed Systems • Cloud</div>
                </div>
              </div>
            </aside>

            {/* MAIN DASHBOARD CONTENT (9 cols) */}
            <main className="lg:col-span-9 p-5 sm:p-7 flex flex-col justify-between bg-white overflow-y-auto">
              
              <div>
                {/* Top App Bar inside Dashboard */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 mb-6 border-b border-charcoal-100">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900">
                        Good morning, Ananya 👋
                      </h3>
                      <span className="text-xs bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-full border border-emerald-200">
                        Ready for Placement
                      </span>
                    </div>
                    <p className="text-xs text-charcoal-500 mt-0.5">
                      Target Placement Timeline: 6 Weeks remaining • 86% Readiness Index
                    </p>
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <button
                        onClick={() => setNotificationsOpen(!notificationsOpen)}
                        className="p-2 rounded-xl bg-charcoal-50 hover:bg-charcoal-100 text-charcoal-600 relative transition-colors"
                      >
                        <Bell className="w-4 h-4" />
                        <span className="w-2 h-2 rounded-full bg-brand-600 absolute top-1.5 right-1.5" />
                      </button>

                      {notificationsOpen && (
                        <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-card border border-charcoal-100 p-3 z-30 text-xs">
                          <div className="font-bold text-charcoal-900 mb-2">Notifications (2)</div>
                          <div className="space-y-2">
                            <div className="p-2 rounded-lg bg-brand-50 text-charcoal-700">
                              <div className="font-semibold text-brand-900">SQL Assessment Reminder</div>
                              <div className="text-[11px] text-charcoal-600">Complete SQL round to raise index to 92%.</div>
                            </div>
                            <div className="p-2 rounded-lg bg-charcoal-50 text-charcoal-700">
                              <div className="font-semibold text-charcoal-900">Mock Panel Scheduled</div>
                              <div className="text-[11px] text-charcoal-600">Thursday with Senior Systems Architect.</div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={onOpenAssessment}
                      className="inline-flex items-center gap-1.5 bg-charcoal-900 hover:bg-brand-600 text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition-colors shadow-sm"
                    >
                      <span>Retake Diagnostic</span>
                    </button>
                  </div>
                </div>

                {/* Core KPI Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6">
                  
                  {/* Technical Skills — 92% */}
                  <div className="bg-charcoal-50/70 p-3.5 rounded-2xl border border-charcoal-100 hover:border-brand-200 transition-colors">
                    <div className="text-xs font-semibold text-charcoal-500 mb-1">Technical Skills</div>
                    <div className="text-2xl sm:text-3xl font-black text-charcoal-900">92%</div>
                    <div className="w-full bg-charcoal-200 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: '92%' }} />
                    </div>
                    <div className="text-[10px] text-emerald-600 font-semibold mt-1">Tier-1 Benchmark Met</div>
                  </div>

                  {/* Communication — 81% */}
                  <div className="bg-charcoal-50/70 p-3.5 rounded-2xl border border-charcoal-100 hover:border-brand-200 transition-colors">
                    <div className="text-xs font-semibold text-charcoal-500 mb-1">Communication</div>
                    <div className="text-2xl sm:text-3xl font-black text-charcoal-900">81%</div>
                    <div className="w-full bg-charcoal-200 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-brand-600 h-full rounded-full" style={{ width: '81%' }} />
                    </div>
                    <div className="text-[10px] text-brand-600 font-semibold mt-1">STAR Format Cleared</div>
                  </div>

                  {/* Aptitude — 88% */}
                  <div className="bg-charcoal-50/70 p-3.5 rounded-2xl border border-charcoal-100 hover:border-brand-200 transition-colors">
                    <div className="text-xs font-semibold text-charcoal-500 mb-1">Aptitude & Logic</div>
                    <div className="text-2xl sm:text-3xl font-black text-charcoal-900">88%</div>
                    <div className="w-full bg-charcoal-200 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-indigo-600 h-full rounded-full" style={{ width: '88%' }} />
                    </div>
                    <div className="text-[10px] text-indigo-600 font-semibold mt-1">Top 5% Percentile</div>
                  </div>

                  {/* Interview — 76% */}
                  <div className="bg-charcoal-50/70 p-3.5 rounded-2xl border border-charcoal-100 hover:border-brand-200 transition-colors">
                    <div className="text-xs font-semibold text-charcoal-500 mb-1">Interview Readiness</div>
                    <div className="text-2xl sm:text-3xl font-black text-charcoal-900">76%</div>
                    <div className="w-full bg-charcoal-200 h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-amber-500 h-full rounded-full" style={{ width: '76%' }} />
                    </div>
                    <div className="text-[10px] text-amber-600 font-semibold mt-1">Final Mock Pending</div>
                  </div>

                </div>

                {/* Line Chart: Readiness Progression Trend */}
                <div className="bg-charcoal-50/50 rounded-2xl p-4 sm:p-5 border border-charcoal-100 mb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <div>
                      <div className="text-xs font-bold text-charcoal-900">
                        Career Readiness Index Progression
                      </div>
                      <div className="text-[11px] text-charcoal-500">
                        Historical trajectory benchmarked against Tier-1 placement cutoffs (80%)
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 bg-white p-1 rounded-lg border border-charcoal-200 text-xs">
                      {(['6m', '3m', '1m'] as const).map((t) => (
                        <button
                          key={t}
                          onClick={() => setSelectedTimeframe(t)}
                          className={`px-2.5 py-1 rounded-md font-semibold text-[11px] uppercase transition-colors ${
                            selectedTimeframe === t ? 'bg-charcoal-900 text-white' : 'text-charcoal-600 hover:text-charcoal-900'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Recharts Line Chart */}
                  <div className="w-full h-56">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={DASHBOARD_TREND_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <defs>
                          <linearGradient id="readinessGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#4F46E5" stopOpacity={0.25} />
                            <stop offset="95%" stopColor="#4F46E5" stopOpacity={0.0} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                        <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#64748B' }} axisLine={false} tickLine={false} />
                        <YAxis domain={[30, 100]} tick={{ fontSize: 11, fill: '#64748B' }} axisLine={false} tickLine={false} />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: '#0F1117',
                            borderRadius: '12px',
                            border: 'none',
                            color: '#FFFFFF',
                            fontSize: '12px',
                            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
                          }}
                        />
                        <Area type="monotone" dataKey="readiness" stroke="#4F46E5" strokeWidth={3} fillOpacity={1} fill="url(#readinessGrad)" name="Readiness Index" />
                        <Line type="monotone" dataKey="technical" stroke="#10B981" strokeWidth={2} dot={false} strokeDasharray="4 4" name="Technical Target" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Bottom Row: Recommended Next Steps + Upcoming Interview Card */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                  
                  {/* Recommended Next Steps Checklist (7 cols) */}
                  <div className="md:col-span-7 bg-white rounded-2xl p-4 sm:p-5 border border-charcoal-100 shadow-subtle">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-xs font-bold text-charcoal-900 uppercase tracking-wider">
                        Recommended Next Steps
                      </div>
                      <span className="text-[11px] text-brand-600 font-semibold">
                        {checkedSteps.length}/3 Completed
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      {[
                        { id: 1, title: 'Complete SQL & Database Indexing Assessment', subtext: 'Unlocks +6% in system architecture placement score', tag: 'High Priority' },
                        { id: 2, title: 'Improve Backend Fundamentals & Concurrency', subtext: 'Review Goroutine & Thread pooling micro-sprint', tag: 'In Progress' },
                        { id: 3, title: 'Practice Live Technical Mock Interview Round', subtext: 'Scheduled with Senior Platform Engineer on Thursday', tag: 'Final Stage' },
                      ].map((step) => {
                        const isChecked = checkedSteps.includes(step.id);
                        return (
                          <div
                            key={step.id}
                            onClick={() => toggleStep(step.id)}
                            className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                              isChecked
                                ? 'bg-emerald-50/40 border-emerald-200'
                                : 'bg-charcoal-50/60 border-charcoal-100 hover:border-brand-200 hover:bg-white'
                            }`}
                          >
                            <div
                              className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 transition-colors ${
                                isChecked ? 'bg-emerald-600 text-white' : 'border border-charcoal-300 bg-white'
                              }`}
                            >
                              {isChecked && <Check className="w-3.5 h-3.5" />}
                            </div>

                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <div className={`text-xs font-bold ${isChecked ? 'text-charcoal-500 line-through' : 'text-charcoal-900'}`}>
                                  {step.title}
                                </div>
                                <span className={`text-[9px] px-1.5 py-0.5 rounded font-medium ${
                                  step.tag === 'High Priority' ? 'bg-red-50 text-red-700' : 'bg-charcoal-100 text-charcoal-700'
                                }`}>
                                  {step.tag}
                                </span>
                              </div>
                              <div className="text-[11px] text-charcoal-500 mt-0.5">
                                {step.subtext}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Upcoming Interview Card (5 cols) */}
                  <div className="md:col-span-5 bg-gradient-to-br from-charcoal-900 to-charcoal-800 text-white rounded-2xl p-5 flex flex-col justify-between shadow-card">
                    <div>
                      <div className="flex items-center justify-between text-xs mb-3">
                        <span className="flex items-center gap-1.5 text-brand-300 font-semibold uppercase text-[10px] tracking-wider">
                          <Calendar className="w-3.5 h-3.5" /> Upcoming Live Mock
                        </span>
                        <span className="text-[10px] bg-brand-500/30 text-brand-200 px-2 py-0.5 rounded-full border border-brand-400/30 font-mono">
                          Confirmed
                        </span>
                      </div>

                      <div className="text-base font-bold mb-1">
                        System Architecture Mock Panel
                      </div>
                      <div className="text-xs text-charcoal-300 mb-4">
                        Evaluator: Staff Systems Architect (Ex-Swiggy, Atlassian)
                      </div>

                      <div className="bg-charcoal-800/80 p-3 rounded-xl border border-charcoal-700 space-y-1.5 text-xs mb-4">
                        <div className="flex justify-between text-charcoal-300">
                          <span>Date & Time:</span>
                          <span className="text-white font-semibold">Thursday, 6:30 PM IST</span>
                        </div>
                        <div className="flex justify-between text-charcoal-300">
                          <span>Focus Area:</span>
                          <span className="text-brand-300 font-semibold">Distributed Rate Limiter</span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={onOpenAssessment}
                      className="w-full bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Prepare Mock Checklist</span>
                    </button>
                  </div>

                </div>
              </div>

            </main>
          </div>
        </div>

      </div>
    </section>
  );
};
