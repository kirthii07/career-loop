import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  CheckCircle2, 
  Search, 
  SlidersHorizontal,
  Briefcase,
  IndianRupee,
  TrendingUp,
  UserCheck
} from 'lucide-react';

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  const [profileProgress, setProfileProgress] = useState(0);
  const [matchScore, setMatchScore] = useState(0);

  // Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Chennai, Tamil Nadu');
  const [activeChip, setActiveChip] = useState<string | null>(null);

  // Count animations on load
  useEffect(() => {
    const profileTimer = setTimeout(() => {
      let p = 0;
      const interval = setInterval(() => {
        p += 2;
        if (p >= 92) {
          setProfileProgress(92);
          clearInterval(interval);
        } else {
          setProfileProgress(p);
        }
      }, 20);
    }, 400);

    const matchTimer = setTimeout(() => {
      let m = 0;
      const interval = setInterval(() => {
        m += 2;
        if (m >= 94) {
          setMatchScore(94);
          clearInterval(interval);
        } else {
          setMatchScore(m);
        }
      }, 20);
    }, 600);

    return () => {
      clearTimeout(profileTimer);
      clearTimeout(matchTimer);
    };
  }, []);

  const filterChips = [
    'Remote',
    'Internship',
    'Full-time',
    'Fresher',
    '₹5L+',
    'Engineering',
    'Marketing',
    'Design',
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/jobs?query=${encodeURIComponent(searchQuery)}&location=${encodeURIComponent(selectedLocation)}${activeChip ? `&filter=${encodeURIComponent(activeChip)}` : ''}`);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Multi-gradient ambient backdrops */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-loop-indigo/15 via-loop-violet/15 to-loop-coral/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-[350px] h-[350px] bg-loop-pink/10 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-charcoal-200/80 shadow-subtle text-xs font-bold uppercase tracking-wider text-charcoal-700"
            >
              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-loop-indigo via-loop-pink to-loop-coral"></span>
              THE CAREER OPPORTUNITY PLATFORM
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-charcoal-900 tracking-tighter leading-[1.05]">
                Find What's Next.
              </h1>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-black text-charcoal-900 tracking-tighter leading-[1.05]">
                Build Your <span className="gradient-loop-text">Career</span> in the <span className="gradient-loop-text">Loop</span>.
              </h1>
            </motion.div>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-charcoal-600 max-w-xl font-normal leading-relaxed"
            >
              Discover genuine jobs and internships, connect with employers and take your next career step with confidence.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                to="/jobs"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold text-white bg-charcoal-900 hover:bg-black transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                <span>Explore Opportunities</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/recruiter/register"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-charcoal-800 bg-white hover:bg-warm-100 border border-charcoal-200/90 transition-all duration-200 shadow-subtle"
              >
                <Briefcase className="w-4 h-4 text-loop-indigo" />
                <span>I'm Hiring</span>
              </Link>
            </motion.div>

            {/* Quick credibility bullet */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-2 flex items-center gap-4 text-xs font-medium text-charcoal-500"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                100% Verified Employers
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Curated for Tamil Nadu & Beyond
              </span>
            </motion.div>
          </div>

          {/* Right Column: Visual Composition with 4 Floating UI Cards (5 cols) */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-3xl overflow-visible"
            >
              {/* Central Professional Candidate Image with rounded framing */}
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                  alt="CareerLoop Candidate"
                  className="w-full h-full object-cover object-top"
                />
                {/* Gradient tint overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold px-3 py-1.5 rounded-xl bg-black/40 backdrop-blur-md border border-white/20">
                  Priyan R. • Software Engineer placed at Kinetix
                </div>
              </div>

              {/* CARD 1: Software Engineer — Kinetix Technologies */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -top-6 -left-6 sm:-left-12 z-20 w-64 p-4 rounded-2xl glass-card shadow-float animate-float-gentle border border-charcoal-200/80"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs">
                      KT
                    </div>
                    <div>
                      <div className="text-xs font-bold text-charcoal-900 leading-tight">Software Engineer</div>
                      <div className="text-[11px] text-charcoal-500">Kinetix Technologies</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-warm-200 text-charcoal-700">Full-time</span>
                </div>
                <div className="mt-2.5 flex items-center justify-between text-xs">
                  <span className="text-charcoal-500 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-charcoal-400" /> Chennai, India
                  </span>
                  <span className="font-bold text-charcoal-900">₹6L – ₹10L</span>
                </div>
                <Link
                  to="/jobs"
                  className="mt-2.5 w-full py-1.5 rounded-lg bg-charcoal-900 text-white text-xs font-bold flex items-center justify-center gap-1 hover:bg-black transition-colors"
                >
                  <span>Apply</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </motion.div>

              {/* CARD 2: Frontend Developer Intern */}
              <motion.div
                initial={{ opacity: 0, x: 30, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="absolute -bottom-8 -right-4 sm:-right-8 z-20 w-60 p-4 rounded-2xl glass-card shadow-float animate-float-delayed border border-charcoal-200/80"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-loop-violet uppercase tracking-wider bg-loop-violet/10 px-2 py-0.5 rounded-md">
                    Internship
                  </span>
                  <span className="text-xs font-bold text-emerald-600">₹15K/month</span>
                </div>
                <div className="mt-2 text-xs font-bold text-charcoal-900">Frontend Developer Intern</div>
                <div className="mt-1 flex items-center justify-between text-[11px] text-charcoal-500">
                  <span>Remote</span>
                  <span>3 Months</span>
                </div>
                <Link
                  to="/internships"
                  className="mt-2 block text-center text-xs font-bold text-loop-indigo hover:underline"
                >
                  View →
                </Link>
              </motion.div>

              {/* CARD 3: Career Profile Progress 92% */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="absolute top-1/2 -left-8 sm:-left-14 -translate-y-1/2 z-20 w-52 p-3.5 rounded-2xl glass-card shadow-card border border-charcoal-200/80"
              >
                <div className="flex items-center justify-between text-xs font-bold text-charcoal-900">
                  <span>Your Career Profile</span>
                  <span className="text-loop-indigo font-black">{profileProgress}%</span>
                </div>
                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-charcoal-100 my-2 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-loop-indigo via-loop-violet to-loop-pink"
                    style={{ width: `${profileProgress}%` }}
                  />
                </div>
                <div className="text-[10px] text-charcoal-500 font-semibold mb-1">Skills:</div>
                <div className="flex flex-wrap gap-1">
                  {['React', 'JavaScript', 'Python', 'SQL'].map((skill) => (
                    <span key={skill} className="text-[9px] font-semibold px-1.5 py-0.5 rounded bg-warm-200 text-charcoal-700">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CARD 4: New Opportunity Matched 94% */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="absolute top-12 -right-6 sm:-right-10 z-20 w-52 p-3 rounded-2xl glass-card shadow-card border border-emerald-200/60"
              >
                <div className="flex items-center gap-1.5 text-xs font-bold text-charcoal-900">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                  <span>New Opportunity</span>
                </div>
                <div className="text-[11px] text-charcoal-600 mt-0.5">Software Engineer</div>
                <div className="mt-2 inline-flex items-center gap-1 text-xs font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/60">
                  <span>{matchScore}% Match</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* HERO SEARCH SECTION (PRD #11) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 sm:mt-20 max-w-4xl mx-auto"
        >
          {/* Main search bar */}
          <form
            onSubmit={handleSearchSubmit}
            className="p-2 sm:p-3 rounded-2xl sm:rounded-full glass-card border border-charcoal-200/90 shadow-card flex flex-col sm:flex-row items-center gap-2"
          >
            {/* Search Input */}
            <div className="flex items-center gap-3 px-4 py-2 w-full flex-1">
              <Search className="w-5 h-5 text-charcoal-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search jobs, internships, skills or companies"
                className="w-full bg-transparent text-sm font-medium text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none"
              />
            </div>

            <div className="hidden sm:block w-px h-8 bg-charcoal-200" />

            {/* Location Input */}
            <div className="flex items-center gap-2 px-4 py-2 w-full sm:w-56">
              <MapPin className="w-4 h-4 text-loop-indigo shrink-0" />
              <input
                type="text"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                placeholder="Location"
                className="w-full bg-transparent text-sm font-medium text-charcoal-900 placeholder:text-charcoal-400 focus:outline-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full text-sm font-bold text-white bg-charcoal-900 hover:bg-black transition-all duration-200 flex items-center justify-center gap-2 shrink-0 shadow-sm"
            >
              <span>Search Opportunities</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Filter Chips */}
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-semibold text-charcoal-400 mr-1">Popular:</span>
            {filterChips.map((chip) => {
              const isSelected = activeChip === chip;
              return (
                <button
                  key={chip}
                  type="button"
                  onClick={() => {
                    const next = isSelected ? null : chip;
                    setActiveChip(next);
                    if (next) {
                      navigate(`/jobs?filter=${encodeURIComponent(next)}`);
                    }
                  }}
                  className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                    isSelected
                      ? 'bg-charcoal-900 text-white shadow-sm'
                      : 'bg-white border border-charcoal-200/80 text-charcoal-700 hover:border-charcoal-350 hover:bg-warm-100'
                  }`}
                >
                  {chip}
                </button>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
