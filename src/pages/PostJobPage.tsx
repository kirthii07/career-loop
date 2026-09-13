import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Briefcase, 
  IndianRupee, 
  MapPin, 
  Calendar, 
  Users, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  Send,
  Plus
} from 'lucide-react';
import { motion } from 'framer-motion';

export const PostJobPage: React.FC = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  // Form states matching PRD #30
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [requirements, setRequirements] = useState('');
  const [skills, setSkills] = useState('React, TypeScript, Tailwind CSS, REST APIs');
  const [experience, setExperience] = useState('0 - 2 Years');
  const [salary, setSalary] = useState('₹6L – ₹10L');
  const [location, setLocation] = useState('Chennai, Tamil Nadu');
  const [workMode, setWorkMode] = useState<'On-site' | 'Hybrid' | 'Remote'>('Hybrid');
  const [jobType, setJobType] = useState<'Full-time' | 'Part-time' | 'Contract' | 'Internship'>('Full-time');
  const [vacancies, setVacancies] = useState('3');
  const [deadline, setDeadline] = useState('2026-10-15');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation */}
        <div className="mb-6">
          <Link
            to="/recruiter/dashboard"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-charcoal-500 hover:text-charcoal-900"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Dashboard</span>
          </Link>
        </div>

        {!submitted ? (
          <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-10 shadow-card">
            
            {/* Header */}
            <div className="mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-loop-indigo/10 text-loop-indigo text-xs font-bold mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Job Requisition Creator</span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl font-black text-charcoal-900 tracking-tight">
                Post a Job or Internship
              </h1>
              <p className="text-xs sm:text-sm text-charcoal-500 mt-1">
                Reach pre-screened students and freshers across Tamil Nadu. Listings are verified before public launch.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Job Title */}
              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Job Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Associate Software Engineer"
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-indigo"
                />
              </div>

              {/* Work Mode & Job Type Grid (PRD #30) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Work Mode *
                  </label>
                  <select
                    value={workMode}
                    onChange={(e) => setWorkMode(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-indigo"
                  >
                    <option value="On-site">On-site</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Remote">Remote</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Job Type *
                  </label>
                  <select
                    value={jobType}
                    onChange={(e) => setJobType(e.target.value as any)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-indigo"
                  >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>

              {/* Experience, Salary, Location */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Experience *
                  </label>
                  <input
                    type="text"
                    required
                    value={experience}
                    onChange={(e) => setExperience(e.target.value)}
                    placeholder="e.g. 0 - 1 Years (Fresher)"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Salary Range / Stipend *
                  </label>
                  <input
                    type="text"
                    required
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                    placeholder="e.g. ₹6L – ₹10L"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Location *
                  </label>
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Chennai, Tamil Nadu"
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50"
                  />
                </div>
              </div>

              {/* Vacancies & Deadline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Open Vacancies
                  </label>
                  <input
                    type="number"
                    min="1"
                    value={vacancies}
                    onChange={(e) => setVacancies(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Application Deadline
                  </label>
                  <input
                    type="date"
                    required
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50"
                  />
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Job Description *
                </label>
                <textarea
                  rows={4}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Provide an overview of the team, product domain, and what this role accomplishes..."
                  className="w-full p-3 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50"
                />
              </div>

              {/* Responsibilities */}
              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Responsibilities (Line separated)
                </label>
                <textarea
                  rows={3}
                  value={responsibilities}
                  onChange={(e) => setResponsibilities(e.target.value)}
                  placeholder="• Build user interfaces in React&#10;• Collaborate with backend engineers&#10;• Maintain unit test coverage"
                  className="w-full p-3 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50"
                />
              </div>

              {/* Requirements */}
              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Requirements (Line separated)
                </label>
                <textarea
                  rows={3}
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  placeholder="• B.E./B.Tech in CS, IT, or equivalent&#10;• Strong JavaScript / TypeScript fundamentals&#10;• Problem solving mindset"
                  className="w-full p-3 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50"
                />
              </div>

              {/* Skills */}
              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Target Skills (Comma separated)
                </label>
                <input
                  type="text"
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                  placeholder="React, TypeScript, SQL, Node.js"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50"
                />
              </div>

              {/* Admin Approval Notice (PRD #30) */}
              <div className="p-4 rounded-2xl bg-warm-100 border border-charcoal-200/80 flex items-start gap-3 text-xs text-charcoal-600">
                <ShieldCheck className="w-5 h-5 text-loop-indigo shrink-0 mt-0.5" />
                <div>
                  <div className="font-bold text-charcoal-800">Review & Admin Approval Workflow</div>
                  <div className="mt-0.5">
                    Upon submission, your requisition will hold status <strong>Pending Admin Approval</strong>. Once our trust team validates the stipend/salary and eligibility criteria, it will become immediately live for candidates.
                  </div>
                </div>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-charcoal-900 hover:bg-black text-white text-sm font-extrabold flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <span>Submit for Admin Approval →</span>
              </button>
            </form>
          </div>
        ) : (
          /* Confirmation & Pending Admin Approval Screen (PRD #30) */
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-3xl bg-white border border-charcoal-200/80 p-8 sm:p-12 shadow-card text-center space-y-5"
          >
            <div className="w-16 h-16 rounded-full bg-amber-50 border-2 border-amber-300 text-amber-600 flex items-center justify-center mx-auto shadow-sm">
              <Clock className="w-8 h-8 animate-pulse" />
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 text-amber-800 text-xs font-bold">
              Status: Pending Admin Approval
            </span>

            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal-900">
              Requisition Submitted for Review
            </h2>

            <p className="text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
              Your opening for <strong>{title || 'Software Engineer'}</strong> ({jobType}, {workMode}) has been queued for admin verification. Approvals typically complete within 2 to 4 business hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => navigate('/recruiter/dashboard')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-charcoal-900 hover:bg-black text-white text-xs font-bold"
              >
                Return to Recruiter Dashboard
              </button>
              <Link
                to="/recruiter/jobs"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-charcoal-200 text-charcoal-700 hover:bg-warm-100 text-xs font-bold"
              >
                View Requisition Queue
              </Link>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};
