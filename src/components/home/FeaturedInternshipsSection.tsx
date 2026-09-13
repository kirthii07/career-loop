import React from 'react';
import { Link } from 'react-router-dom';
import { InternshipCard } from '../shared/InternshipCard';
import { mockInternships } from '../../data/internships';
import { ArrowRight, Compass } from 'lucide-react';

export const FeaturedInternshipsSection: React.FC = () => {
  const featuredInternships = mockInternships.slice(0, 4);

  return (
    <section className="py-20 bg-warm-100/40 border-b border-charcoal-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-loop-violet bg-loop-violet/10 px-3 py-1 rounded-full mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Internship Marketplace</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              Start before you're ready.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 mt-2 max-w-xl">
              High-impact summer & winter internships with structured mentorship, competitive stipends, and PPO potential.
            </p>
          </div>

          <Link
            to="/internships"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold text-charcoal-900 bg-white hover:bg-warm-200/80 border border-charcoal-200 transition-all self-start md:self-auto group"
          >
            <span>Browse Internships</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Internships Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredInternships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>

      </div>
    </section>
  );
};
