import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Plus, Search, Eye, Users, CheckCircle2, Clock, ArrowLeft, MoreVertical } from 'lucide-react';
import { mockJobs } from '../data/jobs';

export const RecruiterJobsPage: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Active' | 'Pending'>('All');

  const jobsList = [
    {
      id: 'JOB-2026-01',
      title: 'Software Engineer',
      department: 'Engineering',
      location: 'Chennai, Tamil Nadu (Hybrid)',
      salary: '₹6L – ₹10L',
      status: 'Active',
      views: 1240,
      applicants: 128,
      postedDate: '01 Sep 2026',
    },
    {
      id: 'JOB-2026-02',
      title: 'Frontend Developer Intern',
      department: 'Engineering',
      location: 'Remote',
      salary: '₹15K/month',
      status: 'Active',
      views: 890,
      applicants: 94,
      postedDate: '04 Sep 2026',
    },
    {
      id: 'JOB-2026-03',
      title: 'Product Design Intern',
      department: 'Design',
      location: 'Chennai, Tamil Nadu (On-site)',
      salary: '₹18K/month',
      status: 'Pending Admin Approval',
      views: 0,
      applicants: 0,
      postedDate: 'Today, 02:40 PM',
    },
  ];

  const filtered = jobsList.filter((j) => {
    if (filter === 'Active') return j.status === 'Active';
    if (filter === 'Pending') return j.status === 'Pending Admin Approval';
    return true;
  });

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <Link
              to="/recruiter/dashboard"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-charcoal-500 hover:text-charcoal-900 mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Dashboard</span>
            </Link>
            <h1 className="font-display text-2xl sm:text-3xl font-black text-charcoal-900 tracking-tight">
              Manage Job Listings
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-500 mt-0.5">
              Track real-time engagement and applicant pipelines for each requisition.
            </p>
          </div>

          <Link
            to="/recruiter/jobs/new"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-charcoal-900 hover:bg-black text-white text-xs font-bold shadow-md transition-all self-start sm:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Post New Listing</span>
          </Link>
        </div>

        {/* Filter Pills */}
        <div className="flex gap-2 mb-6">
          {(['All', 'Active', 'Pending'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                filter === tab
                  ? 'bg-charcoal-900 text-white shadow-sm'
                  : 'bg-white border border-charcoal-200 text-charcoal-700 hover:bg-warm-100'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Listings Cards */}
        <div className="space-y-4">
          {filtered.map((j) => (
            <div
              key={j.id}
              className="rounded-3xl bg-white border border-charcoal-200/80 p-6 shadow-subtle hover:shadow-card transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-warm-100 text-charcoal-600">
                    {j.id}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                      j.status === 'Active'
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'bg-amber-50 text-amber-700'
                    }`}
                  >
                    {j.status === 'Active' ? (
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    ) : (
                      <Clock className="w-3 h-3 text-amber-600" />
                    )}
                    {j.status}
                  </span>
                </div>

                <h3 className="font-display text-lg font-bold text-charcoal-900">
                  {j.title}
                </h3>
                <p className="text-xs text-charcoal-500 mt-1">
                  {j.location} • {j.salary} • Posted {j.postedDate}
                </p>
              </div>

              {/* Stats & Actions */}
              <div className="flex items-center gap-6 self-start md:self-auto">
                <div className="flex items-center gap-4 text-xs text-charcoal-600">
                  <div className="flex items-center gap-1.5">
                    <Eye className="w-4 h-4 text-charcoal-400" />
                    <span>{j.views} Views</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-loop-indigo" />
                    <strong className="text-charcoal-900">{j.applicants} Applicants</strong>
                  </div>
                </div>

                <Link
                  to="/recruiter/applicants"
                  className="px-4 py-2 rounded-xl border border-charcoal-200 text-xs font-bold text-charcoal-800 hover:bg-warm-100 transition-colors"
                >
                  Manage Candidates →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
