import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, MapPin, SlidersHorizontal, Briefcase, IndianRupee, Sparkles, X, Check } from 'lucide-react';
import { mockJobs } from '../data/jobs';
import { JobCard } from '../components/shared/JobCard';
import { WorkMode, JobType } from '../types';

export const JobsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('query') || '';
  const locationParam = searchParams.get('location') || '';
  const filterParam = searchParams.get('filter') || '';
  const modeParam = searchParams.get('mode') || '';

  const [searchTerm, setSearchTerm] = useState(queryParam);
  const [selectedLocation, setSelectedLocation] = useState(locationParam);
  const [selectedMode, setSelectedMode] = useState<string>(modeParam || 'All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedExp, setSelectedExp] = useState<string>('All');
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Filter logic
  const filteredJobs = useMemo(() => {
    return mockJobs.filter((job) => {
      // Search match
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const matchTitle = job.title.toLowerCase().includes(term);
        const matchCompany = job.company.toLowerCase().includes(term);
        const matchSkills = job.skills.some((s) => s.toLowerCase().includes(term));
        if (!matchTitle && !matchCompany && !matchSkills) return false;
      }

      // Location match
      if (selectedLocation && selectedLocation !== 'All') {
        const loc = selectedLocation.toLowerCase();
        if (!job.location.toLowerCase().includes(loc) && !job.state.toLowerCase().includes(loc)) {
          return false;
        }
      }

      // Mode match
      if (selectedMode !== 'All' && job.workMode !== selectedMode) {
        return false;
      }

      // Type match
      if (selectedType !== 'All' && job.jobType !== selectedType) {
        return false;
      }

      // Experience match
      if (selectedExp !== 'All') {
        if (selectedExp === 'Fresher' && !job.experience.toLowerCase().includes('0')) return false;
        if (selectedExp === '1-3 Yrs' && !job.experience.includes('1') && !job.experience.includes('2')) return false;
      }

      return true;
    });
  }, [searchTerm, selectedLocation, selectedMode, selectedType, selectedExp]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedLocation('');
    setSelectedMode('All');
    setSelectedType('All');
    setSelectedExp('All');
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-loop-indigo/10 text-loop-indigo text-xs font-bold mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Opportunities Directory</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-black text-charcoal-900 tracking-tight">
            Verified Tech Jobs
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-1 max-w-2xl">
            Explore authentic openings verified for salary transparency, workplace legitimacy, and direct recruiter contact.
          </p>
        </div>

        {/* Search Bar Strip */}
        <div className="p-3 rounded-2xl bg-white border border-charcoal-200/90 shadow-card mb-8 flex flex-col md:flex-row items-center gap-3">
          <div className="flex items-center gap-3 px-3 py-1.5 w-full flex-1">
            <Search className="w-4 h-4 text-charcoal-400 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by role, company, or tech stack (e.g. React, Python)"
              className="w-full bg-transparent text-sm text-charcoal-900 focus:outline-none placeholder:text-charcoal-400"
            />
          </div>

          <div className="hidden md:block w-px h-6 bg-charcoal-200" />

          <div className="flex items-center gap-2 px-3 py-1.5 w-full md:w-60">
            <MapPin className="w-4 h-4 text-loop-indigo shrink-0" />
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full bg-transparent text-xs sm:text-sm text-charcoal-800 focus:outline-none"
            >
              <option value="">All Locations</option>
              <option value="Chennai">Chennai</option>
              <option value="Coimbatore">Coimbatore</option>
              <option value="Madurai">Madurai</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Remote">Remote</option>
            </select>
          </div>

          <button
            onClick={() => setMobileFiltersOpen(true)}
            className="md:hidden w-full py-2.5 px-4 rounded-xl border border-charcoal-200 flex items-center justify-center gap-2 text-xs font-bold text-charcoal-700 bg-warm-50"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filters</span>
          </button>
        </div>

        {/* Main Grid with Sidebar Filters */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Desktop Filter Sidebar (PRD #26) */}
          <aside className="hidden md:block md:col-span-3 space-y-6">
            <div className="bg-white rounded-3xl border border-charcoal-200/80 p-6 shadow-subtle sticky top-28 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-charcoal-100">
                <h3 className="text-xs font-bold uppercase tracking-wider text-charcoal-900">
                  Filters
                </h3>
                <button
                  onClick={resetFilters}
                  className="text-xs font-semibold text-loop-indigo hover:underline"
                >
                  Reset All
                </button>
              </div>

              {/* Work Mode Filter */}
              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-2">
                  Work Mode
                </label>
                <div className="space-y-1.5 text-xs font-medium text-charcoal-700">
                  {['All', 'Remote', 'Hybrid', 'On-site'].map((mode) => (
                    <label key={mode} className="flex items-center gap-2 cursor-pointer hover:text-charcoal-900">
                      <input
                        type="radio"
                        name="workMode"
                        checked={selectedMode === mode}
                        onChange={() => setSelectedMode(mode)}
                        className="accent-loop-indigo"
                      />
                      <span>{mode}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Job Type Filter */}
              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-2">
                  Job Type
                </label>
                <div className="space-y-1.5 text-xs font-medium text-charcoal-700">
                  {['All', 'Full-time', 'Part-time', 'Contract'].map((t) => (
                    <label key={t} className="flex items-center gap-2 cursor-pointer hover:text-charcoal-900">
                      <input
                        type="radio"
                        name="jobType"
                        checked={selectedType === t}
                        onChange={() => setSelectedType(t)}
                        className="accent-loop-indigo"
                      />
                      <span>{t}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-2">
                  Experience
                </label>
                <div className="space-y-1.5 text-xs font-medium text-charcoal-700">
                  {['All', 'Fresher', '1-3 Yrs'].map((exp) => (
                    <label key={exp} className="flex items-center gap-2 cursor-pointer hover:text-charcoal-900">
                      <input
                        type="radio"
                        name="exp"
                        checked={selectedExp === exp}
                        onChange={() => setSelectedExp(exp)}
                        className="accent-loop-indigo"
                      />
                      <span>{exp}</span>
                    </label>
                  ))}
                </div>
              </div>

            </div>
          </aside>

          {/* Jobs Listing Feed (9 cols) */}
          <main className="md:col-span-9 space-y-4">
            
            {/* Results counter */}
            <div className="flex items-center justify-between text-xs text-charcoal-500 pb-2">
              <span>
                Showing <strong>{filteredJobs.length}</strong> matching verified opportunities
              </span>
              {(selectedMode !== 'All' || selectedType !== 'All' || searchTerm) && (
                <button onClick={resetFilters} className="text-loop-indigo font-bold hover:underline">
                  Clear active filters
                </button>
              )}
            </div>

            {/* Job Cards */}
            {filteredJobs.length > 0 ? (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} featured={job.isFeatured} />
                ))}
              </div>
            ) : (
              <div className="p-12 text-center bg-white rounded-3xl border border-charcoal-200">
                <Briefcase className="w-12 h-12 text-charcoal-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-charcoal-800">No matching jobs found</h3>
                <p className="text-xs text-charcoal-500 mt-1 mb-4">Try broadening your search or resetting filters.</p>
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 rounded-xl bg-charcoal-900 text-white text-xs font-bold"
                >
                  Reset Filters
                </button>
              </div>
            )}

          </main>

        </div>

      </div>
    </div>
  );
};
