import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  IndianRupee, 
  CheckCircle2, 
  Bookmark, 
  Send, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { mockJobs } from '../data/jobs';
import { Job } from '../types';

export const JobDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const [applied, setApplied] = useState(false);

  const job: Job = mockJobs.find((j: Job) => j.id === id) || mockJobs[0];

  const handleApply = () => {
    setApplied(true);
    setTimeout(() => {
      navigate('/candidate/applications');
    }, 1200);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/jobs"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-charcoal-500 hover:text-charcoal-900"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Jobs</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content Area (8 cols) */}
          <main className="lg:col-span-8 space-y-8">
            
            {/* Header Block */}
            <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-8 shadow-card">
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={job.companyLogo}
                  alt={job.company}
                  className="w-16 h-16 rounded-2xl object-cover border border-charcoal-100 shadow-sm"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-charcoal-600">{job.company}</span>
                    {job.isVerified && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-loop-indigo/10 text-loop-indigo text-xs font-bold">
                        <CheckCircle2 className="w-3 h-3" /> Verified Employer
                      </span>
                    )}
                  </div>
                  <h1 className="font-display text-2xl sm:text-3xl font-black text-charcoal-900 mt-1">
                    {job.title}
                  </h1>
                </div>
              </div>

              {/* Key Details Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-charcoal-100">
                <div className="p-3 rounded-xl bg-warm-50 border border-charcoal-100">
                  <div className="text-[10px] uppercase font-bold text-charcoal-400">Salary</div>
                  <div className="text-xs font-bold text-charcoal-900 mt-0.5 flex items-center gap-1">
                    <IndianRupee className="w-3 h-3 text-loop-indigo" />
                    {job.salaryDisplay}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-warm-50 border border-charcoal-100">
                  <div className="text-[10px] uppercase font-bold text-charcoal-400">Experience</div>
                  <div className="text-xs font-bold text-charcoal-900 mt-0.5">{job.experience}</div>
                </div>

                <div className="p-3 rounded-xl bg-warm-50 border border-charcoal-100">
                  <div className="text-[10px] uppercase font-bold text-charcoal-400">Work Mode</div>
                  <div className="text-xs font-bold text-charcoal-900 mt-0.5">{job.workMode}</div>
                </div>

                <div className="p-3 rounded-xl bg-warm-50 border border-charcoal-100">
                  <div className="text-[10px] uppercase font-bold text-charcoal-400">Job Type</div>
                  <div className="text-xs font-bold text-charcoal-900 mt-0.5">{job.jobType}</div>
                </div>
              </div>
            </div>

            {/* About Role */}
            <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-8 shadow-card space-y-4">
              <h2 className="font-display text-lg font-bold text-charcoal-900">About the Role</h2>
              <p className="text-sm text-charcoal-600 leading-relaxed font-normal">
                {job.description}
              </p>
            </div>

            {/* Responsibilities */}
            <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-8 shadow-card space-y-4">
              <h2 className="font-display text-lg font-bold text-charcoal-900">Key Responsibilities</h2>
              <ul className="space-y-2.5">
                {job.responsibilities.map((resp: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-loop-indigo mt-2 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements & Skills */}
            <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-8 shadow-card space-y-4">
              <h2 className="font-display text-lg font-bold text-charcoal-900">Candidate Requirements</h2>
              <ul className="space-y-2.5 mb-6">
                {job.requirements.map((req: string, i: number) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-loop-violet mt-2 shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>

              <h3 className="text-xs font-bold text-charcoal-900 uppercase tracking-wider pt-2">
                Required Tech Stack & Skills
              </h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {job.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-loop-indigo/10 text-loop-indigo text-xs font-bold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-8 shadow-card space-y-4">
              <h2 className="font-display text-lg font-bold text-charcoal-900">Perks & Benefits</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {job.benefits.map((benefit: string, i: number) => (
                  <div key={i} className="p-3 rounded-xl bg-warm-50 border border-charcoal-100 flex items-center gap-2.5 text-xs font-semibold text-charcoal-800">
                    <Sparkles className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

          </main>

          {/* Right Sticky Card (4 cols) */}
          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-charcoal-200/80 p-6 shadow-card sticky top-28 space-y-6">
              
              {/* Apply & Save Buttons */}
              <div className="space-y-3">
                <button
                  type="button"
                  disabled={applied}
                  onClick={handleApply}
                  className={`w-full py-4 rounded-2xl text-sm font-extrabold flex items-center justify-center gap-2 transition-all shadow-md ${
                    applied
                      ? 'bg-emerald-600 text-white'
                      : 'bg-charcoal-900 hover:bg-black text-white hover:shadow-lg'
                  }`}
                >
                  {applied ? (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Application Submitted! Redirecting...</span>
                    </>
                  ) : (
                    <>
                      <span>Apply Now</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsSaved(!isSaved)}
                  className={`w-full py-3 rounded-2xl border text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                    isSaved
                      ? 'bg-loop-indigo/10 border-loop-indigo text-loop-indigo'
                      : 'border-charcoal-200 bg-white text-charcoal-700 hover:bg-warm-100'
                  }`}
                >
                  <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-loop-indigo' : ''}`} />
                  <span>{isSaved ? 'Saved to Your Shortlist' : 'Save Job for Later'}</span>
                </button>
              </div>

              {/* Company Information Card */}
              <div className="pt-6 border-t border-charcoal-100 space-y-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-400">
                  Company Overview
                </h3>

                <div className="flex items-center gap-3">
                  <img
                    src={job.companyLogo}
                    alt={job.company}
                    className="w-10 h-10 rounded-xl object-cover border border-charcoal-100"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-charcoal-900">{job.company}</h4>
                    <span className="text-xs text-charcoal-500">Tamil Nadu Tech Center</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-charcoal-600">
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-400">Headquarters</span>
                    <span className="font-semibold text-charcoal-800">{job.location}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-400">Industry</span>
                    <span className="font-semibold text-charcoal-800">Software & Cloud</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-400">Open Vacancies</span>
                    <span className="font-semibold text-emerald-600">{job.vacancies} Positions</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-charcoal-400">Deadline</span>
                    <span className="font-semibold text-rose-600">{job.deadline}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-warm-100 border border-charcoal-200/60 flex items-center gap-2 text-xs text-charcoal-600">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified employer with genuine direct recruitment pipeline.</span>
                </div>
              </div>

            </div>
          </aside>

        </div>

      </div>
    </div>
  );
};
