import React from 'react';
import { BookOpen, ArrowUpRight, Sparkles, FileText, CheckSquare, Target } from 'lucide-react';

export const ResourcesSection: React.FC = () => {
  const resources = [
    {
      title: 'Resume Building for Freshers',
      tag: 'Guide',
      description: 'How to frame GitHub projects, internships, and coursework into measurable ATS-friendly bullets.',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=600&auto=format&fit=crop',
      readTime: '6 min read',
    },
    {
      title: 'Technical Interview Preparation',
      tag: 'Masterclass',
      description: 'Core DSA concepts, system design basics, and live coding etiquette tailored for startup interviews.',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop',
      readTime: '9 min read',
    },
    {
      title: 'Finding High-Growth Internships',
      tag: 'Strategy',
      description: 'Cold outreach strategies, portfolio presentation, and converting 3-month stints into full-time PPOs.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
      readTime: '5 min read',
    },
    {
      title: 'High-Demand Tech Skills for 2026',
      tag: 'Industry Report',
      description: 'Frameworks, cloud tooling, and AI orchestration skills most sought by Tamil Nadu & Indian recruiters.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop',
      readTime: '8 min read',
    },
  ];

  return (
    <section className="py-20 bg-warm-100/40 border-b border-charcoal-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-loop-indigo bg-loop-indigo/10 px-3 py-1 rounded-full mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Career Intelligence</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-charcoal-900 tracking-tight">
              Make your next move smarter.
            </h2>
            <p className="text-sm sm:text-base text-charcoal-600 mt-2 max-w-xl">
              Curated playbooks and guides to fast-track your preparation, resume quality, and interview confidence.
            </p>
          </div>
        </div>

        {/* 4 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((item) => (
            <div
              key={item.title}
              className="group rounded-3xl bg-white border border-charcoal-200/80 overflow-hidden shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-white border border-white/20">
                    {item.tag}
                  </span>
                </div>

                <div className="p-5">
                  <div className="text-xs text-charcoal-400 font-medium mb-1.5">{item.readTime}</div>
                  <h3 className="font-display text-base font-bold text-charcoal-900 group-hover:text-loop-indigo transition-colors line-clamp-2 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-charcoal-600 line-clamp-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  type="button"
                  className="w-full pt-3 border-t border-charcoal-100 flex items-center justify-between text-xs font-bold text-charcoal-800 group-hover:text-loop-indigo transition-colors"
                >
                  <span>Read Playbook</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
