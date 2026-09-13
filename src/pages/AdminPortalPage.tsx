import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, XCircle, Building2, Briefcase, Search, AlertCircle, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export const AdminPortalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'jobs' | 'companies'>('jobs');

  const [pendingJobs, setPendingJobs] = useState([
    {
      id: 'JOB-REQ-401',
      title: 'Full Stack Engineer',
      company: 'Zenith Labs',
      location: 'Coimbatore, Tamil Nadu',
      salary: '₹7L – ₹11L',
      type: 'Full-time',
      date: 'Today, 09:30 AM',
      status: 'Pending Admin Approval',
    },
    {
      id: 'JOB-REQ-402',
      title: 'AI/ML Intern',
      company: 'Kinetix Technologies',
      location: 'Chennai, Tamil Nadu',
      salary: '₹20K/month',
      type: 'Internship',
      date: 'Yesterday',
      status: 'Pending Admin Approval',
    },
  ]);

  const [pendingCompanies, setPendingCompanies] = useState([
    {
      id: 'COMP-VER-201',
      name: 'Vortex Data Solutions',
      website: 'https://vortexdata.in',
      location: 'Trichy, Tamil Nadu',
      gst: '33AAACV1234D1Z5',
      industry: 'Cloud Analytics',
      date: '12 Sep 2026',
      status: 'Pending Verification',
    },
  ]);

  const approveJob = (id: string) => {
    setPendingJobs(pendingJobs.filter((j) => j.id !== id));
  };

  const approveCompany = (id: string) => {
    setPendingCompanies(pendingCompanies.filter((c) => c.id !== id));
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-charcoal-900 text-white text-xs font-bold mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>Platform Governance & Trust</span>
          </div>
          <h1 className="font-display text-3xl font-black text-charcoal-900 tracking-tight">
            CareerLoop Admin Console
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-0.5">
            Audit employer registrations, review job requisitions, and uphold marketplace trust for candidates in Tamil Nadu.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveTab('jobs')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'jobs'
                ? 'bg-charcoal-900 text-white shadow-sm'
                : 'bg-white border border-charcoal-200 text-charcoal-700 hover:bg-warm-100'
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Pending Job Approvals ({pendingJobs.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('companies')}
            className={`px-5 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeTab === 'companies'
                ? 'bg-charcoal-900 text-white shadow-sm'
                : 'bg-white border border-charcoal-200 text-charcoal-700 hover:bg-warm-100'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Company Verifications ({pendingCompanies.length})</span>
          </button>
        </div>

        {/* Content Body */}
        {activeTab === 'jobs' ? (
          <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 shadow-card space-y-4">
            <h2 className="font-display text-base font-bold text-charcoal-900 mb-2">
              Job Requisitions Awaiting Approval
            </h2>

            {pendingJobs.length > 0 ? (
              <div className="space-y-3">
                {pendingJobs.map((job) => (
                  <div
                    key={job.id}
                    className="p-4 rounded-2xl bg-warm-50/70 border border-charcoal-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-charcoal-900">{job.title}</span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                          {job.status}
                        </span>
                      </div>
                      <div className="text-xs text-charcoal-500 mt-1">
                        {job.company} • {job.location} • {job.salary} • {job.type}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <button
                        onClick={() => approveJob(job.id)}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Approve & Publish</span>
                      </button>
                      <button
                        onClick={() => approveJob(job.id)}
                        className="px-4 py-2 rounded-xl border border-charcoal-200 text-rose-600 hover:bg-rose-50 text-xs font-bold transition-colors"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-xs text-charcoal-400">
                All submitted job requisitions have been approved.
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 shadow-card space-y-4">
            <h2 className="font-display text-base font-bold text-charcoal-900 mb-2">
              Employer Organization Verifications
            </h2>

            {pendingCompanies.length > 0 ? (
              <div className="space-y-3">
                {pendingCompanies.map((c) => (
                  <div
                    key={c.id}
                    className="p-4 rounded-2xl bg-warm-50/70 border border-charcoal-200/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-charcoal-900">{c.name}</span>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                          {c.status}
                        </span>
                      </div>
                      <div className="text-xs text-charcoal-500 mt-1">
                        GST: <strong className="text-charcoal-700">{c.gst}</strong> • {c.location} • {c.industry}
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-start sm:self-auto">
                      <button
                        onClick={() => approveCompany(c.id)}
                        className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verify Employer</span>
                      </button>
                      <button
                        onClick={() => approveCompany(c.id)}
                        className="px-4 py-2 rounded-xl border border-charcoal-200 text-rose-600 hover:bg-rose-50 text-xs font-bold transition-colors"
                      >
                        Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center text-xs text-charcoal-400">
                All company verification requests processed.
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
