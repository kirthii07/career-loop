import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X, ChevronDown, Compass, BookOpen, ShieldCheck, Sparkles, Building2 } from 'lucide-react';

interface NavbarProps {
  onOpenAssessment: () => void;
  onOpenSignIn: () => void;
  onOpenCareerPaths: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenAssessment,
  onOpenSignIn,
  onOpenCareerPaths,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-3 sm:pt-4">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-card py-3 px-5 sm:px-6'
            : 'bg-white/70 backdrop-blur-md border border-charcoal-200/50 py-3.5 px-5 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo Mark: Continuous Loop */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative w-8 h-8 flex items-center justify-center rounded-xl bg-charcoal-900 group-hover:bg-brand-600 transition-colors duration-300 shadow-sm">
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 text-white transition-transform duration-500 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* Continuous infinity / pathway loop */}
                <path d="M7 8c-2.5 0-4 1.8-4 4s1.5 4 4 4c2.8 0 4.2-2.5 5-4 .8-1.5 2.2-4 5-4 2.5 0 4 1.8 4 4s-1.5 4-4 4c-2.8 0-4.2-2.5-5-4-.8-1.5-2.2-4-5-4z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-charcoal-900 leading-none">
                Career<span className="text-brand-600">Loop</span>
              </span>
              <span className="text-[10px] tracking-wider uppercase font-semibold text-charcoal-400 mt-0.5">
                Career Intelligence
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-charcoal-600 hover:text-charcoal-900 rounded-lg hover:bg-charcoal-50 transition-colors"
              >
                Solutions
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180 text-brand-600' : 'text-charcoal-400'}`} />
              </button>

              {solutionsDropdownOpen && (
                <div className="absolute top-full left-0 w-80 pt-2 z-50">
                  <div className="bg-white rounded-xl shadow-card border border-charcoal-100 p-2.5 space-y-1">
                    <a
                      href="#solutions"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-charcoal-50 transition-colors group"
                      onClick={() => setSolutionsDropdownOpen(false)}
                    >
                      <div className="p-2 rounded-lg bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                        <Compass className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-charcoal-900">Career Discovery</div>
                        <div className="text-[11px] text-charcoal-500 leading-tight mt-0.5">Aptitude & cognitive direction mapping</div>
                      </div>
                    </a>

                    <a
                      href="#solutions"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-charcoal-50 transition-colors group"
                      onClick={() => setSolutionsDropdownOpen(false)}
                    >
                      <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                        <Sparkles className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-charcoal-900">Skill Intelligence</div>
                        <div className="text-[11px] text-charcoal-500 leading-tight mt-0.5">Automated gap identification & roadmaps</div>
                      </div>
                    </a>

                    <a
                      href="#solutions"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-charcoal-50 transition-colors group"
                      onClick={() => setSolutionsDropdownOpen(false)}
                    >
                      <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-charcoal-900">Placement Readiness</div>
                        <div className="text-[11px] text-charcoal-500 leading-tight mt-0.5">Mock panels, ATS resume stress tests</div>
                      </div>
                    </a>

                    <a
                      href="#institutions"
                      className="flex items-start gap-3 p-2.5 rounded-lg hover:bg-charcoal-50 transition-colors group"
                      onClick={() => setSolutionsDropdownOpen(false)}
                    >
                      <div className="p-2 rounded-lg bg-charcoal-100 text-charcoal-700 group-hover:bg-charcoal-900 group-hover:text-white transition-colors">
                        <Building2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-charcoal-900">For Institutions</div>
                        <div className="text-[11px] text-charcoal-500 leading-tight mt-0.5">Enterprise cohort analytics & outcomes</div>
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={onOpenCareerPaths}
              className="px-3 py-1.5 text-sm font-medium text-charcoal-600 hover:text-charcoal-900 rounded-lg hover:bg-charcoal-50 transition-colors"
            >
              Career Guidance
            </button>
            <a
              href="#dashboard-showcase"
              className="px-3 py-1.5 text-sm font-medium text-charcoal-600 hover:text-charcoal-900 rounded-lg hover:bg-charcoal-50 transition-colors"
            >
              Placement
            </a>
            <a
              href="#resources"
              className="px-3 py-1.5 text-sm font-medium text-charcoal-600 hover:text-charcoal-900 rounded-lg hover:bg-charcoal-50 transition-colors"
            >
              Resources
            </a>
            <a
              href="#career-loop"
              className="px-3 py-1.5 text-sm font-medium text-charcoal-600 hover:text-charcoal-900 rounded-lg hover:bg-charcoal-50 transition-colors"
            >
              About
            </a>
          </nav>

          {/* Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenSignIn}
              className="text-sm font-medium text-charcoal-700 hover:text-charcoal-900 px-3 py-2 rounded-lg transition-colors hover:bg-charcoal-50"
            >
              Sign In
            </button>
            <button
              onClick={onOpenAssessment}
              className="group inline-flex items-center gap-2 bg-charcoal-900 hover:bg-brand-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-sm hover:shadow-glow active:scale-95"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenAssessment}
              className="text-xs font-semibold bg-charcoal-900 text-white px-3 py-1.5 rounded-lg"
            >
              Get Started
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg text-charcoal-700 hover:text-charcoal-900 hover:bg-charcoal-100 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Animated Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 border-t border-charcoal-100 mt-3 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-charcoal-700 hover:bg-charcoal-50 rounded-lg"
            >
              Solutions
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCareerPaths();
              }}
              className="w-full text-left px-3 py-2 text-sm font-medium text-charcoal-700 hover:bg-charcoal-50 rounded-lg"
            >
              Career Guidance & Paths
            </button>
            <a
              href="#dashboard-showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-charcoal-700 hover:bg-charcoal-50 rounded-lg"
            >
              Placement Dashboard
            </a>
            <a
              href="#career-loop"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-charcoal-700 hover:bg-charcoal-50 rounded-lg"
            >
              The Career Loop
            </a>
            <a
              href="#institutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-charcoal-700 hover:bg-charcoal-50 rounded-lg"
            >
              For Institutions
            </a>
            <a
              href="#resources"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-charcoal-700 hover:bg-charcoal-50 rounded-lg"
            >
              Resources
            </a>
            <div className="pt-2 border-t border-charcoal-100 flex items-center justify-between px-1">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenSignIn();
                }}
                className="text-sm font-semibold text-charcoal-700 hover:text-charcoal-900"
              >
                Sign In
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAssessment();
                }}
                className="inline-flex items-center gap-1.5 bg-brand-600 text-white text-xs font-semibold px-3 py-2 rounded-lg"
              >
                Start Diagnostic
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
