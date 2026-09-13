import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Briefcase, 
  Users, 
  UserCheck, 
  Calendar, 
  CheckCircle2, 
  Plus, 
  ArrowRight, 
  TrendingUp, 
  Sparkles,
  LayoutDashboard,
  FileText,
  Compass,
  Bell,
  Settings,
  LogOut
} from 'lucide-react';
import { 
  ResponsiveContainer, 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  BarChart, 
  Bar 
} from 'recharts';

export const RecruiterDashboardPage: React.FC = () => {
  // PRD #28 specified metrics:
  // Active Jobs: 24, Applications: 1,248, Shortlisted: 86, Interviews: 32, Selected: 12
  const metrics = [
    { label: 'Active Jobs', value: '24', change: '+3 this month', icon: Briefcase, color: 'text-loop-indigo' },
    { label: 'Applications', value: '1,248', change: '+18% vs last week', icon: Users, color: 'text-loop-violet' },
    { label: 'Shortlisted', value: '86', change: '7% conversion', icon: UserCheck, color: 'text-loop-pink' },
    { label: 'Interviews', value: '32', change: '8 today', icon: Calendar, color: 'text-loop-coral' },
    { label: 'Selected', value: '12', change: 'Offers rolled', icon: CheckCircle2, color: 'text-emerald-600' },
  ];

  const trendData = [
    { day: 'Mon', applications: 140, shortlisted: 12 },
    { day: 'Tue', applications: 210, shortlisted: 18 },
    { day: 'Wed', applications: 260, shortlisted: 22 },
    { day: 'Thu', applications: 190, shortlisted: 14 },
    { day: 'Fri', applications: 248, shortlisted: 20 },
    { day: 'Sat', applications: 110, shortlisted: 6 },
    { day: 'Sun', applications: 90, shortlisted: 4 },
  ];

  const funnelData = [
    { stage: 'Applied', count: 1248 },
    { stage: 'Reviewed', count: 520 },
    { stage: 'Shortlisted', count: 86 },
    { stage: 'Interview', count: 32 },
    { stage: 'Selected', count: 12 },
  ];

  const recentApplicants = [
    {
      name: 'Priyan R.',
      role: 'Software Engineer',
      skills: ['React', 'JavaScript', 'Python'],
      match: 94,
      date: 'Today, 10:15 AM',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop',
    },
    {
      name: 'Kavitha Murugan',
      role: 'Frontend Developer Intern',
      skills: ['HTML/CSS', 'TypeScript', 'Tailwind'],
      match: 89,
      date: 'Yesterday',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=120&auto=format&fit=crop',
    },
    {
      name: 'Siddharth Balaji',
      role: 'Software Engineer',
      skills: ['Java', 'Spring Boot', 'SQL'],
      match: 86,
      date: '2 days ago',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=120&auto=format&fit=crop',
    },
  ];

  const sidebarItems = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/recruiter/dashboard', active: true },
    { label: 'Company Profile', icon: Building2, href: '/recruiter/dashboard' },
    { label: 'Post Job', icon: Plus, href: '/recruiter/jobs/new' },
    { label: 'Post Internship', icon: Compass, href: '/recruiter/jobs/new' },
    { label: 'My Jobs', icon: Briefcase, href: '/recruiter/jobs' },
    { label: 'Applicants', icon: Users, href: '/recruiter/applicants' },
    { label: 'Shortlisted', icon: UserCheck, href: '/recruiter/applicants?status=Shortlisted' },
    { label: 'Interviews', icon: Calendar, href: '/recruiter/applicants?status=Interview' },
    { label: 'Notifications', icon: Bell, href: '/recruiter/dashboard' },
    { label: 'Settings', icon: Settings, href: '/recruiter/dashboard' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Recruiter Sidebar (PRD #28) */}
          <aside className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-charcoal-200/80 p-5 shadow-subtle sticky top-28">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-warm-100/70 border border-charcoal-100 mb-6">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                  KT
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-charcoal-900 truncate">Kinetix Tech</h3>
                  <p className="text-[11px] text-emerald-600 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Verified Employer
                  </p>
                </div>
              </div>

              <nav className="space-y-1">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.label}
                      to={item.href}
                      className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-colors ${
                        item.active
                          ? 'bg-charcoal-900 text-white shadow-sm'
                          : 'text-charcoal-600 hover:bg-warm-100 hover:text-charcoal-900'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${item.active ? 'text-white' : 'text-charcoal-400'}`} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </nav>

              <div className="pt-6 mt-6 border-t border-charcoal-100">
                <Link
                  to="/recruiter/login"
                  className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Dashboard Panel */}
          <main className="lg:col-span-9 space-y-8">
            
            {/* Top Action Header */}
            <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-8 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-loop-coral mb-1">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Hiring Command Center</span>
                </div>
                <h1 className="font-display text-2xl sm:text-3xl font-black text-charcoal-900">
                  Talent Telemetry & Requisitions
                </h1>
                <p className="text-xs sm:text-sm text-charcoal-500 mt-0.5">
                  Overview of current applicant flow across Tamil Nadu candidate pools.
                </p>
              </div>

              <Link
                to="/recruiter/jobs/new"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-charcoal-900 hover:bg-black text-white text-xs font-bold shadow-md transition-all self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" />
                <span>Post New Role</span>
              </Link>
            </div>

            {/* 5 Metrics Cards (PRD #28) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {metrics.map((m) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.label}
                    className="p-4 rounded-2xl bg-white border border-charcoal-200/80 shadow-subtle flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between text-charcoal-400 mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-charcoal-500">
                        {m.label}
                      </span>
                      <Icon className={`w-4 h-4 ${m.color}`} />
                    </div>
                    <div>
                      <div className="font-display text-2xl font-black text-charcoal-900">{m.value}</div>
                      <div className="text-[10px] font-semibold text-charcoal-500 mt-0.5">{m.change}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Application Trend Chart (Recharts) */}
            <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-8 shadow-card">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-display text-base font-bold text-charcoal-900">
                    Application Velocity & Shortlists
                  </h3>
                  <p className="text-xs text-charcoal-500">Daily candidate traffic over the past 7 days</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-warm-200 text-charcoal-700">
                  Past 7 Days
                </span>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={trendData}>
                    <defs>
                      <linearGradient id="appGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366F1" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#6366F1" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="shortGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#EC4899" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#EC4899" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="day" stroke="#929186" fontSize={12} tickLine={false} />
                    <YAxis stroke="#929186" fontSize={12} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#0F0F0E',
                        color: '#fff',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '12px',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="applications"
                      name="Applications"
                      stroke="#6366F1"
                      strokeWidth={2.5}
                      fillOpacity={1}
                      fill="url(#appGradient)"
                    />
                    <Area
                      type="monotone"
                      dataKey="shortlisted"
                      name="Shortlisted"
                      stroke="#EC4899"
                      strokeWidth={2}
                      fillOpacity={1}
                      fill="url(#shortGradient)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Hiring Funnel & Recent Applicants Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Hiring Funnel */}
              <div className="lg:col-span-5 rounded-3xl bg-white border border-charcoal-200/80 p-6 shadow-card space-y-4">
                <div>
                  <h3 className="font-display text-base font-bold text-charcoal-900">
                    Hiring Conversion Funnel
                  </h3>
                  <p className="text-xs text-charcoal-500">From application to final selection</p>
                </div>

                <div className="space-y-3 pt-2">
                  {funnelData.map((stage, i) => (
                    <div key={stage.stage}>
                      <div className="flex justify-between text-xs font-bold text-charcoal-800 mb-1">
                        <span>{stage.stage}</span>
                        <span>{stage.count}</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-warm-200 overflow-hidden">
                        <div
                          className="h-full bg-charcoal-900 rounded-full"
                          style={{ width: `${(stage.count / 1248) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Applicants */}
              <div className="lg:col-span-7 rounded-3xl bg-white border border-charcoal-200/80 p-6 shadow-card space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-base font-bold text-charcoal-900">
                      Recent Candidate Applications
                    </h3>
                    <p className="text-xs text-charcoal-500">Awaiting your screening feedback</p>
                  </div>
                  <Link to="/recruiter/applicants" className="text-xs font-bold text-loop-indigo hover:underline">
                    View Table →
                  </Link>
                </div>

                <div className="space-y-3 pt-1">
                  {recentApplicants.map((c) => (
                    <div
                      key={c.name}
                      className="p-3.5 rounded-2xl bg-warm-50/70 border border-charcoal-100 flex items-center justify-between gap-3"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={c.avatar}
                          alt={c.name}
                          className="w-10 h-10 rounded-xl object-cover border border-charcoal-100"
                        />
                        <div>
                          <div className="text-xs font-bold text-charcoal-900">{c.name}</div>
                          <div className="text-[11px] text-charcoal-500">{c.role}</div>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="inline-block text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                          {c.match}% Match
                        </span>
                        <div className="text-[10px] text-charcoal-400 mt-1">{c.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </main>

        </div>

      </div>
    </div>
  );
};
