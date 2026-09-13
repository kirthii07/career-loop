import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-950 text-charcoal-300 pt-16 pb-12 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top brand row */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-14 border-b border-charcoal-800/80">
          {/* Col 1 & 2: Brand & Mission */}
          <div className="col-span-2 space-y-4">
            <Logo size="md" isLight={true} />
            <p className="text-sm text-charcoal-400 max-w-sm leading-relaxed">
              CareerLoop connects ambitious students, job seekers, verified recruiters, and top colleges across Tamil Nadu and India in one unified talent ecosystem.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-charcoal-900 border border-charcoal-700/60 text-xs font-medium text-emerald-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Platform Active • Tamil Nadu
              </span>
            </div>
          </div>

          {/* Col 3: Platform */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/jobs" className="hover:text-white transition-colors">Jobs</Link>
              </li>
              <li>
                <Link to="/internships" className="hover:text-white transition-colors">Internships</Link>
              </li>
              <li>
                <Link to="/companies" className="hover:text-white transition-colors">Companies</Link>
              </li>
              <li>
                <Link to="/jobs?mode=Remote" className="hover:text-white transition-colors">Remote Roles</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Candidates */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Candidates</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/candidate/profile" className="hover:text-white transition-colors">Profile</Link>
              </li>
              <li>
                <Link to="/candidate/profile" className="hover:text-white transition-colors">Resume Builder</Link>
              </li>
              <li>
                <Link to="/candidate/dashboard" className="hover:text-white transition-colors">Saved Jobs</Link>
              </li>
              <li>
                <Link to="/candidate/dashboard" className="hover:text-white transition-colors">Applications</Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Recruiters */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Recruiters</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/recruiter/jobs/new" className="hover:text-white transition-colors">Post a Job</Link>
              </li>
              <li>
                <Link to="/recruiter/applicants" className="hover:text-white transition-colors">Applicants</Link>
              </li>
              <li>
                <Link to="/recruiter/dashboard" className="hover:text-white transition-colors">Hiring Pipeline</Link>
              </li>
              <li>
                <Link to="/recruiter/register" className="hover:text-white transition-colors">Register Company</Link>
              </li>
            </ul>
          </div>

          {/* Col 6: Colleges & Legal */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Colleges</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#colleges" className="hover:text-white transition-colors">Placement Support</a>
              </li>
              <li>
                <a href="#colleges" className="hover:text-white transition-colors">Student Opportunities</a>
              </li>
              <li>
                <a href="#trust" className="hover:text-white transition-colors">Verification</a>
              </li>
              <li>
                <Link to="/admin" className="text-xs text-loop-indigo hover:underline flex items-center gap-1">
                  Admin Portal <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-charcoal-500 gap-4">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} CareerLoop Technologies. All rights reserved.</span>
            <span>•</span>
            <span className="text-charcoal-400">careerloopapp.com</span>
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-charcoal-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-charcoal-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-charcoal-300 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
