import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, IndianRupee, MapPin, Globe, Sparkles, ArrowRight } from 'lucide-react';
import { Internship } from '../../types';
import { motion } from 'framer-motion';

interface InternshipCardProps {
  internship: Internship;
  onApply?: (internship: Internship) => void;
}

export const InternshipCard: React.FC<InternshipCardProps> = ({ internship, onApply }) => {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group relative rounded-2xl bg-white border border-charcoal-200/80 p-6 shadow-subtle hover:shadow-card hover:border-loop-violet/40 transition-all flex flex-col justify-between"
    >
      <div>
        {/* Top Header */}
        <div className="flex items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-3">
            <img
              src={internship.companyLogo}
              alt={internship.company}
              className="w-11 h-11 rounded-xl object-cover border border-charcoal-100"
            />
            <div>
              <span className="text-xs font-medium text-charcoal-500">{internship.company}</span>
              <h3 className="text-base font-bold text-charcoal-900 group-hover:text-loop-violet transition-colors">
                {internship.title}
              </h3>
            </div>
          </div>
          {internship.remote ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
              <Globe className="w-3 h-3" /> Remote
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-warm-200/80 text-charcoal-600 text-xs font-medium">
              <MapPin className="w-3 h-3" /> {internship.location}
            </span>
          )}
        </div>

        {/* Metrics Pill Grid */}
        <div className="grid grid-cols-2 gap-2 my-4">
          <div className="p-2.5 rounded-xl bg-warm-100/70 border border-charcoal-100 flex items-center gap-2">
            <Clock className="w-4 h-4 text-loop-violet" />
            <div>
              <div className="text-[10px] uppercase tracking-wider text-charcoal-400 font-semibold">Duration</div>
              <div className="text-xs font-bold text-charcoal-800">{internship.duration}</div>
            </div>
          </div>
          <div className="p-2.5 rounded-xl bg-warm-100/70 border border-charcoal-100 flex items-center gap-2">
            <IndianRupee className="w-4 h-4 text-loop-pink" />
            <div>
              <div className="text-[10px] uppercase tracking-wider text-charcoal-400 font-semibold">Stipend</div>
              <div className="text-xs font-bold text-charcoal-800">{internship.stipend}</div>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {internship.skills.slice(0, 3).map((skill) => (
            <span
              key={skill}
              className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-charcoal-100/80 text-charcoal-600"
            >
              {skill}
            </span>
          ))}
          {internship.skills.length > 3 && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-charcoal-50 text-charcoal-400">
              +{internship.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="pt-3 border-t border-charcoal-100 flex items-center justify-between">
        <span className="text-xs text-charcoal-400">Open for Freshers</span>
        <Link
          to={`/internships/${internship.id}`}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-charcoal-900 group-hover:text-loop-violet transition-colors"
        >
          <span>View Internship</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-loop-violet" />
        </Link>
      </div>
    </motion.div>
  );
};
