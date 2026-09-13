import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { Solutions } from './components/Solutions';
import { FeatureImageSection } from './components/FeatureImageSection';
import { CareerLoopSignature } from './components/CareerLoopSignature';
import { DashboardShowcase } from './components/DashboardShowcase';
import { StudentJourney } from './components/StudentJourney';
import { InstitutionSection } from './components/InstitutionSection';
import { Testimonials } from './components/Testimonials';
import { ResourcesSection } from './components/ResourcesSection';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { QuickAssessmentModal } from './components/modals/QuickAssessmentModal';
import { CareerPathModal } from './components/modals/CareerPathModal';
import { SignInModal } from './components/modals/SignInModal';
import { ContactModal } from './components/modals/ContactModal';

export function App() {
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isCareerPathOpen, setIsCareerPathOpen] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-charcoal-900 selection:bg-brand-100 selection:text-brand-900 font-sans">
      {/* Top Floating Glass Navbar */}
      <Navbar
        onOpenAssessment={() => setIsAssessmentOpen(true)}
        onOpenSignIn={() => setIsSignInOpen(true)}
        onOpenCareerPaths={() => setIsCareerPathOpen(true)}
      />

      {/* Main Page Sections */}
      <main>
        {/* 1. Hero Section: Editorial typography + SaaS Dashboard + Editorial Photo */}
        <Hero
          onOpenAssessment={() => setIsAssessmentOpen(true)}
          onOpenCareerPaths={() => setIsCareerPathOpen(true)}
        />

        {/* 2. Trust / Value Strip */}
        <TrustStrip />

        {/* 3. Solutions Section (4 Distinct Cards with UI Snippets) */}
        <Solutions
          onOpenAssessment={() => setIsAssessmentOpen(true)}
          onOpenCareerPaths={() => setIsCareerPathOpen(true)}
        />

        {/* 4. Large Editorial Feature Image with Floating Roadmap Step Overlay */}
        <FeatureImageSection
          onOpenAssessment={() => setIsAssessmentOpen(true)}
        />

        {/* 5. Signature "Career Loop" Section (Circular Animated Continuous Pathway) */}
        <CareerLoopSignature />

        {/* 6. Dashboard Showcase (Full Interactive Student SaaS Command Center) */}
        <DashboardShowcase
          onOpenAssessment={() => setIsAssessmentOpen(true)}
        />

        {/* 7. Student Experience (01 to 06 Interactive Phases) */}
        <StudentJourney
          onOpenAssessment={() => setIsAssessmentOpen(true)}
        />

        {/* 8. Institution Section & Enterprise B2B Analytics Preview */}
        <InstitutionSection />

        {/* 9. Testimonials (Editorial Stories & Verified Placements) */}
        <Testimonials />

        {/* 10. Resources Section (Magazine-Grade Articles & Strategy Guides) */}
        <ResourcesSection />

        {/* 11. Final High-Contrast SaaS CTA */}
        <FinalCTA
          onOpenAssessment={() => setIsAssessmentOpen(true)}
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenAssessment={() => setIsAssessmentOpen(true)}
        onOpenCareerPaths={() => setIsCareerPathOpen(true)}
      />

      {/* Interactive Presentation Modals */}
      <QuickAssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
      />

      <CareerPathModal
        isOpen={isCareerPathOpen}
        onClose={() => setIsCareerPathOpen(false)}
        onSelectPath={(pathId) => {
          // Can scroll to dashboard showcase
          const el = document.getElementById('dashboard-showcase');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <SignInModal
        isOpen={isSignInOpen}
        onClose={() => setIsSignInOpen(false)}
      />

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;
