import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  User, 
  FileText, 
  Search, 
  Compass, 
  Bookmark, 
  CheckCircle2, 
  Bell, 
  Settings, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Briefcase, 
  Calendar,
  LogOut
} from 'lucide-react';
import { mockJobs } from '../data/jobs';
import { JobCard } from '../components/shared/JobCard';

export const CandidateDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'saved' | 'notifications'>('overview');
  const recommendedJobs = mockJobs.slice(0, 3);

  const sidebarLinks = [
    { label: 'Dashboard', icon: LayoutDashboard, href: '/candidate/dashboard', active: true },
    { label: 'My Profile', icon: User, href: '/candidate/profile' },
    { label: 'Resume', icon: FileText, href: '/candidate/profile' },
    { label: 'Find Jobs', icon: Search, href: '/jobs' },
    { label: 'Internships', icon: Compass, href: '/internships' },
    { label: 'Saved Jobs', icon: Bookmark, href: '/candidate/dashboard?tab=saved' },
    { label: 'Applied Jobs', icon: CheckCircle2, href: '/candidate/applications' },
    { label: 'Notifications', icon: Bell, href: '/candidate/dashboard?tab=notifications' },
    { label: 'Settings', icon: Settings, href: '/candidate/dashboard' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Sidebar (PRD #22) */}
          <aside className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-charcoal-200/80 p-5 shadow-subtle sticky top-28">
              
              {/* Profile Card Snippet */}
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-warm-100/70 border border-charcoal-100 mb-6">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                  alt="Candidate"
                  className="w-12 h-12 rounded-xl object-cover border border-white shadow-sm"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-charcoal-900 truncate">Priyan R.</h3>
                  <p className="text-[11px] text-charcoal-500 truncate">B.E. Computer Science</p>
                  <span className="inline-block mt-0.5 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded">
                    Active Seeker
                  </span>
                </div>
              </div>

              {/* Sidebar Nav Items */}
              <nav className="space-y-1">
                {sidebarLinks.map((item) => {
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
                  to="/candidate/login"
                  className="flex items-center gap-3 px-3.5 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Dashboard Area (PRD #22) */}
          <main className="lg:col-span-9 space-y-8">
            
            {/* Greeting Header & Profile Completion */}
            <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-8 shadow-card flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal-900">
                  Good morning 👋
                </h1>
                <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
                  You have 4 opportunities matching your verified skills in Chennai & Remote.
                </p>
              </div>

              {/* Profile Completion Card (80%) */}
              <div className="p-4 rounded-2xl bg-warm-100/80 border border-charcoal-200/70 sm:w-64">
                <div className="flex items-center justify-between text-xs font-bold text-charcoal-800 mb-1.5">
                  <span>Profile Completion</span>
                  <span className="text-loop-indigo font-black">80%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-charcoal-200 overflow-hidden">
                  <div className="w-[80%] h-full bg-gradient-to-r from-loop-indigo via-loop-violet to-loop-pink rounded-full" />
                </div>
                <Link
                  to="/candidate/profile"
                  className="mt-2 block text-[11px] font-bold text-loop-indigo hover:underline text-right"
                >
                  Add certifications +20% →
                </Link>
              </div>
            </div>

            {/* 4 Metric Cards (PRD #22: Applications 12, Shortlisted 4, Interviews 2, Saved Jobs 8) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Link
                to="/candidate/applications"
                className="p-5 rounded-2xl bg-white border border-charcoal-200/80 shadow-subtle hover:shadow-card hover:border-loop-indigo/40 transition-all block"
              >
                <div className="text-xs font-bold text-charcoal-500 uppercase tracking-wider mb-2">
                  Applications
                </div>
                <div className="font-display text-3xl font-black text-charcoal-900">12</div>
                <div className="text-[11px] text-loop-indigo font-semibold mt-1">3 Under review</div>
              </Link>

              <Link
                to="/candidate/applications"
                className="p-5 rounded-2xl bg-white border border-charcoal-200/80 shadow-subtle hover:shadow-card hover:border-loop-violet/40 transition-all block"
              >
                <div className="text-xs font-bold text-charcoal-500 uppercase tracking-wider mb-2">
                  Shortlisted
                </div>
                <div className="font-display text-3xl font-black text-charcoal-900">4</div>
                <div className="text-[11px] text-emerald-600 font-semibold mt-1">Ready for screening</div>
              </Link>

              <Link
                to="/candidate/applications"
                className="p-5 rounded-2xl bg-white border border-charcoal-200/80 shadow-subtle hover:shadow-card hover:border-loop-pink/40 transition-all block"
              >
                <div className="text-xs font-bold text-charcoal-500 uppercase tracking-wider mb-2">
                  Interviews
                </div>
                <div className="font-display text-3xl font-black text-charcoal-900">2</div>
                <div className="text-[11px] text-loop-pink font-semibold mt-1">Next: Tomorrow 2 PM</div>
              </Link>

              <div className="p-5 rounded-2xl bg-white border border-charcoal-200/80 shadow-subtle block">
                <div className="text-xs font-bold text-charcoal-500 uppercase tracking-wider mb-2">
                  Saved Jobs
                </div>
                <div className="font-display text-3xl font-black text-charcoal-900">8</div>
                <div className="text-[11px] text-charcoal-400 font-semibold mt-1">2 Deadlines closing</div>
              </div>
            </div>

            {/* Quick Live Application Status Alert Banner */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-loop-indigo/10 via-loop-violet/10 to-transparent border border-loop-indigo/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-loop-indigo text-white flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal-900">
                    Interview Scheduled: Kinetix Technologies
                  </div>
                  <div className="text-[11px] text-charcoal-600">
                    Role: Software Engineer • Tomorrow, 2:00 PM IST (Google Meet)
                  </div>
                </div>
              </div>
              <Link
                to="/candidate/applications"
                className="px-4 py-2 rounded-xl bg-charcoal-900 text-white text-xs font-bold self-start sm:self-auto hover:bg-black"
              >
                View Tracker →
              </Link>
            </div>

            {/* Recommended Jobs Section */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="font-display text-lg font-bold text-charcoal-900">
                    Recommended For Your Profile
                  </h2>
                  <p className="text-xs text-charcoal-500">
                    Based on React, Python, JavaScript skills & Tamil Nadu preference
                  </p>
                </div>
                <Link to="/jobs" className="text-xs font-bold text-loop-indigo hover:underline">
                  Browse All Jobs →
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {recommendedJobs.map((job) => (
                  <JobCard key={job.id} job={job} featured={job.isFeatured} />
                ))}
              </div>
            </div>

          </main>

        </div>

      </div>
    </div>
  );
};
