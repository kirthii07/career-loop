import React, { useState, useMemo } from 'react';
import { Search, MapPin, Compass, IndianRupee, Clock, Globe, Filter } from 'lucide-react';
import { mockInternships } from '../data/internships';
import { InternshipCard } from '../components/shared/InternshipCard';

export const InternshipsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [selectedDuration, setSelectedDuration] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const filteredInternships = useMemo(() => {
    return mockInternships.filter((item) => {
      if (searchTerm.trim()) {
        const term = searchTerm.toLowerCase();
        const matchTitle = item.title.toLowerCase().includes(term);
        const matchCompany = item.company.toLowerCase().includes(term);
        const matchSkills = item.skills.some((s) => s.toLowerCase().includes(term));
        if (!matchTitle && !matchCompany && !matchSkills) return false;
      }

      if (remoteOnly && !item.remote) return false;

      if (selectedDuration !== 'All' && !item.duration.includes(selectedDuration)) {
        return false;
      }

      if (selectedLocation !== 'All') {
        if (!item.location.toLowerCase().includes(selectedLocation.toLowerCase())) {
          return false;
        }
      }

      return true;
    });
  }, [searchTerm, remoteOnly, selectedDuration, selectedLocation]);

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-loop-violet/10 text-loop-violet text-xs font-bold mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Internship Hub</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl font-black text-charcoal-900 tracking-tight">
            High-Impact Internships
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-1 max-w-2xl">
            Gain structured mentorship, real software exposure, and competitive stipends with startups and tech companies across Tamil Nadu.
          </p>
        </div>

        {/* Filter / Search Strip */}
        <div className="p-3 rounded-2xl bg-white border border-charcoal-200/90 shadow-card mb-8 flex flex-col sm:flex-row items-center gap-3">
          <div className="flex items-center gap-3 px-3 py-1.5 w-full flex-1">
            <Search className="w-4 h-4 text-charcoal-400 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search internships by domain, company, or skills (e.g. Frontend, Python)"
              className="w-full bg-transparent text-sm text-charcoal-900 focus:outline-none placeholder:text-charcoal-400"
            />
          </div>

          <div className="hidden sm:block w-px h-6 bg-charcoal-200" />

          {/* Remote Toggle */}
          <button
            type="button"
            onClick={() => setRemoteOnly(!remoteOnly)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors ${
              remoteOnly
                ? 'bg-emerald-600 text-white shadow-sm'
                : 'bg-warm-100 text-charcoal-700 hover:bg-warm-200'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Remote Only</span>
          </button>

          {/* Duration Filter */}
          <select
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-warm-50 border border-charcoal-200 text-charcoal-700 font-medium focus:outline-none"
          >
            <option value="All">Any Duration</option>
            <option value="2 Months">2 Months</option>
            <option value="3 Months">3 Months</option>
            <option value="6 Months">6 Months</option>
          </select>

          {/* Location Filter */}
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-3 py-2 text-xs rounded-xl bg-warm-50 border border-charcoal-200 text-charcoal-700 font-medium focus:outline-none"
          >
            <option value="All">All Locations</option>
            <option value="Chennai">Chennai</option>
            <option value="Coimbatore">Coimbatore</option>
            <option value="Bengaluru">Bengaluru</option>
          </select>
        </div>

        {/* Internships Grid */}
        <div className="mb-4 text-xs text-charcoal-500">
          Showing <strong>{filteredInternships.length}</strong> active student internship opportunities
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInternships.map((item) => (
            <InternshipCard key={item.id} internship={item} />
          ))}
        </div>

      </div>
    </div>
  );
};
