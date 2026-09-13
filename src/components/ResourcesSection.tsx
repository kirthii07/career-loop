import React from 'react';
import { ArrowRight, BookOpen, Clock, Sparkles } from 'lucide-react';
import { RESOURCES_DATA } from '../data/mockData';
import resourcesImg from '../assets/images/resources.jpg';

export const ResourcesSection: React.FC = () => {
  return (
    <section id="resources" className="py-24 sm:py-32 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold mb-4">
              <BookOpen className="w-3.5 h-3.5" />
              <span>EDITORIAL & INTELLIGENCE ARCHIVES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-charcoal-900 tracking-tight leading-[1.15]">
              Insights For <br />
              <span className="gradient-text">Your Next Move.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-charcoal-600 max-w-md">
            Rigorous, data-backed frameworks from hiring managers, senior engineers, and placement strategists.
          </p>
        </div>

        {/* Top Hero Editorial Resource Feature */}
        <div className="mb-12 bg-white rounded-3xl overflow-hidden border border-charcoal-200/80 shadow-card grid grid-cols-1 lg:grid-cols-12 group">
          <div className="lg:col-span-7 aspect-[16/9] lg:aspect-auto relative overflow-hidden">
            <img
              src={resourcesImg}
              alt="Editorial workspace with skill roadmap and career strategy journal"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-charcoal-900/90 backdrop-blur-md text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                Featured Strategy Guide
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 text-xs text-charcoal-500 mb-3">
                <span className="font-semibold text-brand-600">Career Architecture</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 10 min read
                </span>
              </div>

              <h3 className="text-2xl font-bold text-charcoal-900 mb-3 group-hover:text-brand-600 transition-colors">
                The 2026 Tech Placement Playbook: Engineering Leverage Over Rote Learning
              </h3>

              <p className="text-sm text-charcoal-600 leading-relaxed mb-6">
                Why modern hiring rounds prioritize distributed system intuition, code quality, and clear architectural articulation over grinding hundreds of trivial algorithmic puzzles.
              </p>
            </div>

            <div className="pt-6 border-t border-charcoal-100 flex items-center justify-between">
              <span className="text-xs font-mono text-charcoal-400">By Career Loop Editorial</span>
              <span className="text-xs font-bold text-brand-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Publication <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {RESOURCES_DATA.map((article, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-charcoal-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between text-xs mb-4">
                  <span className="font-semibold text-brand-600 bg-brand-50 px-2.5 py-1 rounded-lg">
                    {article.category}
                  </span>
                  <span className="text-charcoal-400 flex items-center gap-1 text-[11px]">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>

                <h4 className="text-lg font-bold text-charcoal-900 group-hover:text-brand-600 transition-colors leading-snug mb-3">
                  {article.title}
                </h4>

                <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-charcoal-100 flex items-center justify-between text-xs">
                <span className="text-charcoal-400 font-mono text-[11px]">{article.date}</span>
                <span className="font-bold text-brand-600 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                  Read <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
