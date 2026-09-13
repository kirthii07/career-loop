import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { RoleSelectionSection } from '../components/home/RoleSelectionSection';
import { StatsSection } from '../components/home/StatsSection';
import { HowItWorksSection } from '../components/home/HowItWorksSection';
import { FeaturedJobsSection } from '../components/home/FeaturedJobsSection';
import { FeaturedInternshipsSection } from '../components/home/FeaturedInternshipsSection';
import { CompaniesSection } from '../components/home/CompaniesSection';
import { CareerDiscoverySection } from '../components/home/CareerDiscoverySection';
import { CollegeSection } from '../components/home/CollegeSection';
import { TrustSection } from '../components/home/TrustSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { ResourcesSection } from '../components/home/ResourcesSection';
import { FinalCTASection } from '../components/home/FinalCTASection';

export const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* 1. Cinematic Hero with 4 floating UI cards & interactive search */}
      <HeroSection />

      {/* 2. Candidate vs Recruiter Role Selection Entry */}
      <RoleSelectionSection />

      {/* 3. Demo Metrics Strip */}
      <StatsSection />

      {/* 4. A Simple Loop to a Better Career (Animated SVG Infinity Path) */}
      <HowItWorksSection />

      {/* 5. Featured Jobs: Opportunities worth exploring */}
      <FeaturedJobsSection />

      {/* 6. Featured Internships: Start before you're ready */}
      <FeaturedInternshipsSection />

      {/* 7. Companies Section: Meet the teams hiring */}
      <CompaniesSection />

      {/* 8. Editorial Career Discovery: Your career isn't a straight line */}
      <CareerDiscoverySection />

      {/* 9. College Institutional Experience */}
      <CollegeSection />

      {/* 10. Trust & Verification Governance */}
      <TrustSection />

      {/* 11. Testimonials Carousel */}
      <TestimonialsSection />

      {/* 12. Editorial Resources */}
      <ResourcesSection />

      {/* 13. Cinematic Final CTA */}
      <FinalCTASection />
    </div>
  );
};
