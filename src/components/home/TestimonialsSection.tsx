import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Sparkles, Building2, User, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      type: 'Candidate Experience',
      icon: User,
      quote:
        'Finding my first frontend engineer job as a fresher in Chennai felt overwhelming with traditional job portals. On CareerLoop, I applied with my verified skill profile, and received an interview invite within 4 days. The stage tracker made every step crystal clear.',
      author: 'Aravind Swaminathan',
      role: 'Associate Frontend Engineer at Kinetix Technologies',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=200&auto=format&fit=crop',
      color: 'text-loop-indigo',
      badgeBg: 'bg-loop-indigo/10',
    },
    {
      type: 'Recruiter Perspective',
      icon: Building2,
      quote:
        'Hiring entry-level and intermediate engineers across Tamil Nadu used to yield hundreds of unformatted, irrelevant resumes. CareerLoop delivers pre-vetted skill profiles where 80%+ of applicants match our exact tech stack requirements.',
      author: 'Deepika Ramanathan',
      role: 'Talent Acquisition Lead at CloudPulse Labs',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop',
      color: 'text-loop-coral',
      badgeBg: 'bg-loop-coral/10',
    },
    {
      type: 'College Placement Cell',
      icon: GraduationCap,
      quote:
        'CareerLoop has given our placement cell a real-time command dashboard. We can monitor student applications across tier-1 startups, verify corporate authenticity, and provide targeted intervention to students before placement season.',
      author: 'Dr. K. Sundararajan',
      role: 'Head of Placements, Coimbatore Institute of Engineering',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      color: 'text-loop-pink',
      badgeBg: 'bg-loop-pink/10',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];
  const Icon = current.icon;

  return (
    <section className="py-24 bg-white border-b border-charcoal-200/70 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-loop-violet bg-loop-violet/10 px-3 py-1 rounded-full mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Community Stories (Demo)</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
            Voices from across the Loop.
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-4xl mx-auto rounded-3xl bg-warm-50 border border-charcoal-200/80 p-8 sm:p-12 shadow-card"
        >
          <Quote className="w-12 h-12 text-charcoal-200 mb-4" />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: 'easeInOut' }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white border border-charcoal-200/70 text-charcoal-700">
                <Icon className={`w-3.5 h-3.5 ${current.color}`} />
                <span>{current.type}</span>
              </div>

              <p className="text-lg sm:text-xl text-charcoal-800 font-medium leading-relaxed italic">
                “{current.quote}”
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-charcoal-200/60">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="text-sm font-bold text-charcoal-900">{current.author}</h4>
                  <p className="text-xs text-charcoal-500">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <div className="mt-8 flex items-center justify-between pt-4">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex ? 'w-8 bg-charcoal-900' : 'w-2 bg-charcoal-300'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2.5 rounded-full bg-white border border-charcoal-200 text-charcoal-700 hover:bg-warm-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2.5 rounded-full bg-white border border-charcoal-200 text-charcoal-700 hover:bg-warm-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
