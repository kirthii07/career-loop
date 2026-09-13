import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  ArrowLeft, 
  CheckCircle2, 
  XCircle, 
  Calendar, 
  FileText, 
  User, 
  ExternalLink,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const RecruiterApplicantsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedApplicant, setSelectedApplicant] = useState<any | null>(null);

  const [applicants, setApplicants] = useState([
    {
      id: 'APP-101',
      candidateName: 'Priyan R.',
      email: 'priyan.r@example.com',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop',
      role: 'Software Engineer',
      skills: ['React', 'JavaScript', 'Python', 'SQL'],
      education: 'B.E. Computer Science (Anna Univ)',
      experience: 'Fresher (1 Internship)',
      appliedDate: '12 Sep 2026',
      status: 'Interview Scheduled',
      matchScore: 94,
    },
    {
      id: 'APP-102',
      candidateName: 'Kavitha Murugan',
      email: 'kavitha.m@example.com',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=120&auto=format&fit=crop',
      role: 'Frontend Developer Intern',
      skills: ['HTML5', 'TypeScript', 'Tailwind', 'Next.js'],
      education: 'B.Tech IT (PSG College)',
      experience: 'Pre-final Year Student',
      appliedDate: '11 Sep 2026',
      status: 'Shortlisted',
      matchScore: 89,
    },
    {
      id: 'APP-103',
      candidateName: 'Siddharth Balaji',
      email: 'siddharth.b@example.com',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=120&auto=format&fit=crop',
      role: 'Software Engineer',
      skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
      education: 'B.E. ECE (SSN College)',
      experience: '1.2 Years Experience',
      appliedDate: '10 Sep 2026',
      status: 'New',
      matchScore: 86,
    },
    {
      id: 'APP-104',
      candidateName: 'Ananya Ramesh',
      email: 'ananya.r@example.com',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=120&auto=format&fit=crop',
      role: 'Frontend Developer Intern',
      skills: ['React', 'CSS', 'Figma', 'UI Design'],
      education: 'B.Des (NIFT Chennai)',
      experience: 'Student Portfolio',
      appliedDate: '08 Sep 2026',
      status: 'New',
      matchScore: 81,
    },
    {
      id: 'APP-105',
      candidateName: 'Manoj Kumar',
      email: 'manoj.k@example.com',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop',
      role: 'Software Engineer',
      skills: ['Python', 'Django', 'AWS', 'Redis'],
      education: 'M.C.A. (Madras University)',
      experience: 'Fresher',
      appliedDate: '07 Sep 2026',
      status: 'Rejected',
      matchScore: 68,
    },
  ]);

  const updateStatus = (id: string, newStatus: string) => {
    setApplicants(
      applicants.map((a) => (a.id === id ? { ...a, status: newStatus } : a))
    );
  };

  const filtered = useMemo(() => {
    return applicants.filter((a) => {
      if (searchTerm) {
        const t = searchTerm.toLowerCase();
        const matchName = a.candidateName.toLowerCase().includes(t);
        const matchRole = a.role.toLowerCase().includes(t);
        const matchSkills = a.skills.some((s) => s.toLowerCase().includes(t));
        if (!matchName && !matchRole && !matchSkills) return false;
      }
      if (statusFilter !== 'All' && a.status !== statusFilter) {
        return false;
      }
      return true;
    });
  }, [applicants, searchTerm, statusFilter]);

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
              Applicant Pipeline Management
            </h1>
            <p className="text-xs sm:text-sm text-charcoal-500 mt-0.5">
              Review, shortlist, interview, and advance candidates directly across your active job openings.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-charcoal-200 text-charcoal-700">
              Total Applicants: <strong>{applicants.length}</strong>
            </span>
          </div>
        </div>

        {/* Filter / Search Bar */}
        <div className="p-3 rounded-2xl bg-white border border-charcoal-200/80 shadow-subtle mb-6 flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-3 px-3 py-1.5 w-full flex-1">
            <Search className="w-4 h-4 text-charcoal-400 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search candidate name, role, or skills..."
              className="w-full bg-transparent text-sm text-charcoal-900 focus:outline-none placeholder:text-charcoal-400"
            />
          </div>

          <div className="hidden sm:block w-px h-6 bg-charcoal-200" />

          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-3.5 py-2 text-xs rounded-xl bg-warm-50 border border-charcoal-200 text-charcoal-700 font-medium focus:outline-none"
          >
            <option value="All">All Statuses</option>
            <option value="New">New</option>
            <option value="Shortlisted">Shortlisted</option>
            <option value="Interview Scheduled">Interview Scheduled</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        {/* Recruiter Applicant Table (PRD #29) */}
        <div className="rounded-3xl bg-white border border-charcoal-200/80 shadow-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-warm-100/70 border-b border-charcoal-200/70 text-[11px] font-bold uppercase tracking-wider text-charcoal-500">
                  <th className="py-3.5 px-6">Candidate</th>
                  <th className="py-3.5 px-4">Role Applied</th>
                  <th className="py-3.5 px-4">Skills</th>
                  <th className="py-3.5 px-4">Education</th>
                  <th className="py-3.5 px-4">Date</th>
                  <th className="py-3.5 px-4">Status</th>
                  <th className="py-3.5 px-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-charcoal-100 text-xs">
                {filtered.map((item) => (
                  <motion.tr
                    key={item.id}
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="hover:bg-warm-50/70 transition-colors"
                  >
                    {/* Candidate */}
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.avatar}
                          alt={item.candidateName}
                          className="w-9 h-9 rounded-xl object-cover border border-charcoal-200 shrink-0"
                        />
                        <div>
                          <div className="font-bold text-charcoal-900">{item.candidateName}</div>
                          <div className="text-[11px] text-charcoal-400">{item.email}</div>
                          <span className="inline-block text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded mt-0.5">
                            {item.matchScore}% Match
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Role */}
                    <td className="py-4 px-4 font-semibold text-charcoal-800">
                      {item.role}
                    </td>

                    {/* Skills */}
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-1 max-w-[200px]">
                        {item.skills.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-medium px-2 py-0.5 rounded bg-warm-100 text-charcoal-700"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Education */}
                    <td className="py-4 px-4 text-charcoal-600">
                      <div>{item.education}</div>
                      <div className="text-[11px] text-charcoal-400">{item.experience}</div>
                    </td>

                    {/* Date */}
                    <td className="py-4 px-4 text-charcoal-500 whitespace-nowrap">
                      {item.appliedDate}
                    </td>

                    {/* Status */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full ${
                          item.status === 'Interview Scheduled'
                            ? 'bg-loop-coral/10 text-loop-coral'
                            : item.status === 'Shortlisted'
                            ? 'bg-emerald-50 text-emerald-700'
                            : item.status === 'Rejected'
                            ? 'bg-rose-50 text-rose-700'
                            : 'bg-warm-200 text-charcoal-700'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>

                    {/* Actions (PRD #29: View Profile, View Resume, Shortlist, Reject, Schedule Interview) */}
                    <td className="py-4 px-6 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => updateStatus(item.id, 'Shortlisted')}
                          title="Shortlist"
                          className="p-1.5 rounded-lg border border-charcoal-200 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => updateStatus(item.id, 'Interview Scheduled')}
                          title="Schedule Interview"
                          className="p-1.5 rounded-lg border border-charcoal-200 hover:bg-loop-indigo/10 hover:text-loop-indigo transition-colors"
                        >
                          <Calendar className="w-3.5 h-3.5" />
                        </button>

                        <button
                          onClick={() => updateStatus(item.id, 'Rejected')}
                          title="Reject"
                          className="p-1.5 rounded-lg border border-charcoal-200 hover:bg-rose-50 hover:text-rose-700 transition-colors"
                        >
                          <XCircle className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
