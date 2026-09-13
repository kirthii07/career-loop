import React from 'react';
import { Link } from 'react-router-dom';
import { CompanyCard } from '../shared/CompanyCard';
import { mockCompanies } from '../../data/companies';
import { ArrowRight, Building2 } from 'lucide-react';

export const CompaniesSection: React.FC = () => {
  const hiringCompanies = mockCompanies.slice(0, 4);

  return (
    <section className="py-20 bg-white border-b border-charcoal-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-loop-coral bg-loop-coral/10 px-3 py-1 rounded-full mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Verified Employers</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              Meet the teams hiring.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 mt-2 max-w-xl">
              From fast-scaling SaaS startups in Chennai and Bengaluru to leading product engineering centers.
            </p>
          </div>

          <Link
            to="/companies"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-charcoal-900 bg-warm-100 hover:bg-warm-200/80 border border-charcoal-200 transition-all self-start md:self-auto group"
          >
            <span>Explore All Companies</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Companies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hiringCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>

      </div>
    </section>
  );
};
