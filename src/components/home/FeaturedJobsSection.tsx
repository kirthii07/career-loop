import React from 'react';
import { Link } from 'react-router-dom';
import { JobCard } from '../shared/JobCard';
import { mockJobs } from '../../data/jobs';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const FeaturedJobsSection: React.FC = () => {
  const featuredJobs = mockJobs.slice(0, 6);

  return (
    <section className="py-20 bg-white border-b border-charcoal-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-loop-indigo bg-loop-indigo/10 px-3 py-1 rounded-full mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Direct Employer Listings</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              Opportunities worth exploring.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 mt-2 max-w-xl">
              Verified full-time roles across engineering, product, analytics, and growth from active hiring teams.
            </p>
          </div>

          <Link
            to="/jobs"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-charcoal-900 bg-warm-100 hover:bg-warm-200/80 border border-charcoal-200 transition-all self-start md:self-auto group"
          >
            <span>View All Jobs</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} featured={job.isFeatured} />
          ))}
        </div>

      </div>
    </section>
  );
};
