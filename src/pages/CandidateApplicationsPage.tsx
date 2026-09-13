import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Clock, Calendar, AlertCircle, Sparkles, Building2, MapPin, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const CandidateApplicationsPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Active' | 'Interview' | 'Selected'>('All');

  const applications = [
    {
      id: 'APP-2026-081',
      jobTitle: 'Software Engineer',
      company: 'Kinetix Technologies',
      companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=120&auto=format&fit=crop',
      location: 'Chennai, Tamil Nadu',
      appliedDate: '12 Sep 2026',
      lastUpdated: 'Today, 11:30 AM',
      recruiter: 'Deepika Ramanathan',
      status: 'Interview',
      stages: [
        { name: 'Applied', date: '12 Sep', done: true },
        { name: 'Viewed', date: '13 Sep', done: true },
        { name: 'Shortlisted', date: '13 Sep', done: true },
        { name: 'Interview', date: 'Tomorrow 2:00 PM', done: true, current: true },
        { name: 'Selected', date: 'Pending', done: false },
      ],
      nextAction: 'Technical Video Interview with Engineering Lead scheduled for tomorrow.',
    },
    {
      id: 'APP-2026-064',
      jobTitle: 'Frontend Developer Intern',
      company: 'CloudPulse Labs',
      companyLogo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=120&auto=format&fit=crop',
      location: 'Remote',
      appliedDate: '09 Sep 2026',
      lastUpdated: '11 Sep 2026',
      recruiter: 'Karthik Raja',
      status: 'Shortlisted',
      stages: [
        { name: 'Applied', date: '09 Sep', done: true },
        { name: 'Viewed', date: '10 Sep', done: true },
        { name: 'Shortlisted', date: '11 Sep', done: true, current: true },
        { name: 'Interview', date: 'Pending', done: false },
        { name: 'Selected', date: 'Pending', done: false },
      ],
      nextAction: 'Profile shortlisted. Recruiter will schedule screening call.',
    },
    {
      id: 'APP-2026-042',
      jobTitle: 'Associate UI/UX Designer',
      company: 'ZettaScale Networks',
      companyLogo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=120&auto=format&fit=crop',
      location: 'Coimbatore, Tamil Nadu',
      appliedDate: '04 Sep 2026',
      lastUpdated: '06 Sep 2026',
      recruiter: 'Meenakshi Sundaram',
      status: 'Viewed',
      stages: [
        { name: 'Applied', date: '04 Sep', done: true },
        { name: 'Viewed', date: '06 Sep', done: true, current: true },
        { name: 'Shortlisted', date: 'Pending', done: false },
        { name: 'Interview', date: 'Pending', done: false },
        { name: 'Selected', date: 'Pending', done: false },
      ],
      nextAction: 'Application opened by recruiter. Awaiting review decision.',
    },
  ];

  const filteredApps = applications.filter((app) => {
    if (filter === 'All') return true;
    if (filter === 'Active') return app.status !== 'Selected' && app.status !== 'Rejected';
    if (filter === 'Interview') return app.status === 'Interview';
    if (filter === 'Selected') return app.status === 'Selected';
    return true;
  });

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <Link
              to="/candidate/dashboard"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-charcoal-500 hover:text-charcoal-900 mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Dashboard</span>
            </Link>
            <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight">
              Application Tracker
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
              Transparent live telemetry of your candidature across verified companies.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border border-charcoal-200 shadow-subtle self-start sm:self-auto">
            {(['All', 'Active', 'Interview', 'Selected'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  filter === tab
                    ? 'bg-charcoal-900 text-white shadow-sm'
                    : 'text-charcoal-600 hover:text-charcoal-900'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Application Cards List */}
        <div className="space-y-6">
          {filteredApps.map((app) => (
            <motion.div
              key={app.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-8 shadow-card"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-charcoal-100">
                <div className="flex items-center gap-3.5">
                  <img
                    src={app.companyLogo}
                    alt={app.company}
                    className="w-12 h-12 rounded-2xl object-cover border border-charcoal-100"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base font-bold text-charcoal-900">{app.jobTitle}</h2>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-warm-100 text-charcoal-600">
                        {app.id}
                      </span>
                    </div>
                    <div className="text-xs text-charcoal-500 flex items-center gap-2 mt-0.5">
                      <span>{app.company}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-charcoal-400" />
                        {app.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="text-left sm:text-right text-xs text-charcoal-500">
                  <div>Applied: <strong className="text-charcoal-800">{app.appliedDate}</strong></div>
                  <div className="mt-0.5">Recruiter: <strong className="text-charcoal-800">{app.recruiter}</strong></div>
                </div>
              </div>

              {/* Animated Stages Tracker (PRD #23: Applied → Viewed → Shortlisted → Interview → Selected) */}
              <div className="py-6">
                <div className="grid grid-cols-5 gap-2 relative">
                  {app.stages.map((st, i) => (
                    <div key={st.name} className="flex flex-col items-center text-center relative">
                      {/* Connecting Line */}
                      {i < app.stages.length - 1 && (
                        <div
                          className={`absolute top-4 left-1/2 w-full h-1 -z-0 ${
                            st.done && app.stages[i + 1].done
                              ? 'bg-emerald-500'
                              : 'bg-charcoal-200'
                          }`}
                        />
                      )}

                      {/* Stage Circle */}
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold z-10 transition-all ${
                          st.current
                            ? 'bg-loop-indigo text-white ring-4 ring-loop-indigo/20 scale-110 shadow-md'
                            : st.done
                            ? 'bg-emerald-500 text-white'
                            : 'bg-warm-200 text-charcoal-400'
                        }`}
                      >
                        {st.done ? <CheckCircle2 className="w-4 h-4" /> : i + 1}
                      </div>

                      <div className="text-xs font-bold text-charcoal-800 mt-2">{st.name}</div>
                      <div className="text-[10px] text-charcoal-400 mt-0.5">{st.date}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Note & Next Action */}
              <div className="pt-4 border-t border-charcoal-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-charcoal-700">
                  <span className="w-2 h-2 rounded-full bg-loop-indigo animate-pulse"></span>
                  <span>{app.nextAction}</span>
                </div>
                <div className="text-[11px] text-charcoal-400">
                  Last Updated: {app.lastUpdated}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};
