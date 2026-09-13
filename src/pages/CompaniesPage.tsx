import React, { useState, useMemo } from 'react';
import { Search, Building2, MapPin, CheckCircle2, Filter } from 'lucide-react';
import { mockCompanies } from '../data/companies';
import { CompanyCard } from '../components/shared/CompanyCard';

export const CompaniesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('All');

  const filteredCompanies = useMemo(() => {
    return mockCompanies.filter((comp) => {
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        if (!comp.name.toLowerCase().includes(term) && !comp.about.toLowerCase().includes(term)) {
          return false;
        }
      }
      if (selectedIndustry !== 'All' && comp.industry !== selectedIndustry) {
        return false;
      }
      return true;
    });
  }, [searchTerm, selectedIndustry]);

  const industries = ['All', 'SaaS & Enterprise', 'Fintech', 'Cloud Infrastructure', 'AI & Machine Learning'];

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-loop-coral/10 text-loop-coral text-xs font-bold mb-2">
            <Building2 className="w-3.5 h-3.5" />
            <span>Employer Directory</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-black text-charcoal-900 tracking-tight">
            Companies Hiring on CareerLoop
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-1 max-w-2xl">
            Discover verified tech startups and engineering teams actively hiring students, freshers, and experienced talent.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="p-3 rounded-2xl bg-white border border-charcoal-200/90 shadow-card mb-8 flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-3 px-3 py-1.5 w-full flex-1">
            <Search className="w-4 h-4 text-charcoal-400 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search companies by name or keywords..."
              className="w-full bg-transparent text-sm text-charcoal-900 focus:outline-none placeholder:text-charcoal-400"
            />
          </div>

          <div className="hidden sm:block w-px h-6 bg-charcoal-200" />

          {/* Industry Filter */}
          <select
            value={selectedIndustry}
            onChange={(e) => setSelectedIndustry(e.target.value)}
            className="px-3.5 py-2 text-xs rounded-xl bg-warm-50 border border-charcoal-200 text-charcoal-700 font-medium focus:outline-none"
          >
            {industries.map((ind) => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </div>

        {/* Companies Grid */}
        <div className="mb-4 text-xs text-charcoal-500">
          Showing <strong>{filteredCompanies.length}</strong> verified hiring organizations
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCompanies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>

      </div>
    </div>
  );
};
