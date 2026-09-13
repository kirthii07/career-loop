import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, MapPin, Briefcase, IndianRupee, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { Job } from '../../types';
import { motion } from 'framer-motion';

interface JobCardProps {
  job: Job;
  onApply?: (job: Job) => void;
  featured?: boolean;
}

export const JobCard: React.FC<JobCardProps> = ({ job, onApply, featured = false }) => {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group relative rounded-2xl border p-6 transition-all duration-300 ${
        featured
          ? 'bg-gradient-to-b from-white to-warm-50 border-loop-indigo/30 shadow-card hover:border-loop-indigo/60 hover:shadow-card-hover'
          : 'bg-white border-charcoal-200/80 shadow-subtle hover:border-charcoal-300 hover:shadow-card'
      }`}
    >
      {/* Top Tag & Bookmark */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <img
            src={job.companyLogo}
            alt={job.company}
            className="w-12 h-12 rounded-xl object-cover border border-charcoal-100 shadow-sm"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-charcoal-600">{job.company}</span>
              {job.isVerified && (
                <span title="Verified Employer">
                  <CheckCircle2 className="w-3.5 h-3.5 text-loop-indigo inline" />
                </span>
              )}
            </div>
            <Link to={`/jobs/${job.id}`}>
              <h3 className="text-base font-bold text-charcoal-900 group-hover:text-loop-indigo transition-colors line-clamp-1">
                {job.title}
              </h3>
            </Link>
          </div>
        </div>

        <button
          onClick={(e) => {
            e.preventDefault();
            setIsSaved(!isSaved);
          }}
          className={`p-2 rounded-xl border transition-all ${
            isSaved
              ? 'bg-loop-indigo/10 border-loop-indigo text-loop-indigo'
              : 'border-charcoal-200/70 text-charcoal-400 hover:text-charcoal-800 hover:border-charcoal-350 bg-warm-50/50'
          }`}
          title={isSaved ? 'Saved to bookmarks' : 'Save job'}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-loop-indigo' : ''}`} />
        </button>
      </div>

      {/* Badges / Pill row */}
      <div className="flex flex-wrap gap-2 mb-4 text-xs font-medium">
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-warm-200/70 text-charcoal-700">
          <MapPin className="w-3 h-3 text-charcoal-500" />
          {job.location}
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-warm-200/70 text-charcoal-700">
          <Briefcase className="w-3 h-3 text-charcoal-500" />
          {job.workMode}
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-loop-indigo/10 text-loop-indigo font-semibold">
          <IndianRupee className="w-3 h-3" />
          {job.salaryDisplay}
        </span>
        {job.matchScore && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-700 font-semibold border border-emerald-200/50">
            <Sparkles className="w-3 h-3 text-emerald-600" />
            {job.matchScore}% Match
          </span>
        )}
      </div>

      {/* Skills snippet */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {job.skills.slice(0, 3).map((skill) => (
          <span
            key={skill}
            className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-charcoal-100 text-charcoal-600"
          >
            {skill}
          </span>
        ))}
        {job.skills.length > 3 && (
          <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-charcoal-50 text-charcoal-400">
            +{job.skills.length - 3}
          </span>
        )}
      </div>

      {/* Bottom info & Apply CTA */}
      <div className="pt-3 border-t border-charcoal-100 flex items-center justify-between text-xs text-charcoal-500">
        <span>Posted {job.postedDate}</span>
        <Link
          to={`/jobs/${job.id}`}
          className="inline-flex items-center gap-1 font-semibold text-charcoal-900 group-hover:text-loop-indigo transition-colors"
        >
          <span>View Details</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-loop-indigo" />
        </Link>
      </div>
    </motion.div>
  );
};
