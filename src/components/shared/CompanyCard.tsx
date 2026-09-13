import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, MapPin, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';
import { Company } from '../../types';
import { motion } from 'framer-motion';

interface CompanyCardProps {
  company: Company;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({ company }) => {
  return (
    <motion.div
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="group rounded-2xl bg-white border border-charcoal-200/80 p-6 shadow-subtle hover:shadow-card hover:border-loop-coral/40 transition-all flex flex-col justify-between"
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-4">
          <img
            src={company.logo}
            alt={company.name}
            className="w-14 h-14 rounded-2xl object-cover border border-charcoal-100 p-1"
          />
          {company.verified && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-loop-indigo/10 text-loop-indigo text-xs font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5" /> Verified
            </span>
          )}
        </div>

        <h3 className="text-base font-bold text-charcoal-900 group-hover:text-loop-coral transition-colors mb-1">
          {company.name}
        </h3>
        <p className="text-xs text-charcoal-500 line-clamp-2 mb-4 leading-relaxed">
          {company.about}
        </p>

        <div className="flex flex-col gap-1.5 text-xs text-charcoal-600 mb-4">
          <div className="flex items-center gap-1.5">
            <Building2 className="w-3.5 h-3.5 text-charcoal-400" />
            <span>{company.industry}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-charcoal-400" />
            <span>{company.headquarters}, {company.state}</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-charcoal-100 flex items-center justify-between">
        <span className="text-xs font-bold text-loop-indigo bg-loop-indigo/10 px-2.5 py-1 rounded-lg">
          {company.openJobsCount + company.openInternshipsCount} Open Roles
        </span>
        <Link
          to={`/jobs?company=${encodeURIComponent(company.name)}`}
          className="inline-flex items-center gap-1 text-xs font-semibold text-charcoal-900 hover:text-loop-coral transition-colors"
        >
          <span>Explore</span>
          <ArrowRight className="w-3.5 h-3.5 text-loop-coral" />
        </Link>
      </div>
    </motion.div>
  );
};
