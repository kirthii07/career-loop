import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { MapPin, ArrowRight, Menu, X, ChevronDown, User, Briefcase, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenSignIn?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSignIn }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [authDropdownOpen, setAuthDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setAuthDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Jobs', href: '/jobs' },
    { label: 'Internships', href: '/internships' },
    { label: 'Companies', href: '/companies' },
    { label: 'For Candidates', href: '/candidate/dashboard' },
    { label: 'For Recruiters', href: '/recruiter/dashboard' },
    { label: 'For Colleges', href: '/#colleges' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3.5 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: Logo */}
        <Logo size="md" />

        {/* Center: Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.label}
                to={link.href}
                className={`px-3.5 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-charcoal-900 bg-charcoal-100 font-semibold'
                    : 'text-charcoal-600 hover:text-charcoal-900 hover:bg-black/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Items */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Location Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-warm-200/60 border border-charcoal-200/60 text-xs font-medium text-charcoal-700">
            <MapPin className="w-3.5 h-3.5 text-loop-indigo" />
            <span>Tamil Nadu, India</span>
          </div>

          {/* Sign In Dropdown */}
          <div className="relative">
            <button
              onClick={() => setAuthDropdownOpen(!authDropdownOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-charcoal-700 hover:text-charcoal-900 px-3 py-2 rounded-lg transition-colors"
            >
              <span>Sign In</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${authDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
              {authDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 mt-2 w-56 p-2 glass-card rounded-2xl shadow-card border border-charcoal-100/80 z-50"
                >
                  <Link
                    to="/candidate/login"
                    onClick={() => setAuthDropdownOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-warm-100 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-loop-indigo/10 flex items-center justify-center text-loop-indigo group-hover:scale-105 transition-transform">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-charcoal-900">Candidate Login</div>
                      <div className="text-[11px] text-charcoal-500">Students & Job Seekers</div>
                    </div>
                  </Link>

                  <Link
                    to="/recruiter/login"
                    onClick={() => setAuthDropdownOpen(false)}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-warm-100 transition-colors group mt-1"
                  >
                    <div className="w-8 h-8 rounded-lg bg-loop-coral/10 flex items-center justify-center text-loop-coral group-hover:scale-105 transition-transform">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-charcoal-900">Recruiter Login</div>
                      <div className="text-[11px] text-charcoal-500">Companies & Startups</div>
                    </div>
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Primary CTA */}
          <Link
            to="/candidate/register"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-charcoal-900 hover:bg-black transition-all duration-200 shadow-sm hover:shadow-md"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            to="/candidate/register"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold text-white bg-charcoal-900"
          >
            Get Started
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-charcoal-800 hover:bg-black/5"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-nav border-t border-charcoal-100 px-4 pt-3 pb-6"
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 mb-3 rounded-full bg-warm-200/60 w-fit text-xs font-medium text-charcoal-700">
              <MapPin className="w-3.5 h-3.5 text-loop-indigo" />
              <span>Tamil Nadu, India</span>
            </div>

            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-sm font-medium text-charcoal-800 hover:bg-black/5"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t border-charcoal-100/80 flex flex-col gap-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-charcoal-400 px-3">
                Sign In As
              </div>
              <Link
                to="/candidate/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-charcoal-800 hover:bg-black/5"
              >
                <span>Candidate / Student</span>
                <ArrowRight className="w-4 h-4 text-charcoal-400" />
              </Link>
              <Link
                to="/recruiter/login"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium text-charcoal-800 hover:bg-black/5"
              >
                <span>Recruiter / Employer</span>
                <ArrowRight className="w-4 h-4 text-charcoal-400" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
