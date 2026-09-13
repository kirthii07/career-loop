import React, { useState } from 'react';
import { X, Briefcase, TrendingUp, Building2, CheckCircle2, ChevronRight, Award, DollarSign } from 'lucide-react';
import { CAREER_PATHS_DATA } from '../../data/mockData';

interface CareerPathModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPath: (pathId: string) => void;
}

export const CareerPathModal: React.FC<CareerPathModalProps> = ({ isOpen, onClose, onSelectPath }) => {
  const [selectedId, setSelectedId] = useState(CAREER_PATHS_DATA[0].id);
  const activePath = CAREER_PATHS_DATA.find((p) => p.id === selectedId) || CAREER_PATHS_DATA[0];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full p-6 sm:p-8 shadow-float border border-charcoal-200 relative max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-charcoal-100">
          <div>
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
              CAREER PATHWAY INTELLIGENCE
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 mt-1">
              Verified Career Trajectories & Market Demands
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-charcoal-400 hover:text-charcoal-700 hover:bg-charcoal-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Layout Grid: Left Sidebar Selector + Right Path Details */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Path Selector List (4 cols) */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-charcoal-400 mb-2 font-mono">
              Select Trajectory
            </div>

            {CAREER_PATHS_DATA.map((path) => {
              const isSelected = path.id === selectedId;
              return (
                <button
                  key={path.id}
                  onClick={() => setSelectedId(path.id)}
                  className={`w-full text-left p-3.5 rounded-2xl border transition-all ${
                    isSelected
                      ? 'bg-charcoal-900 text-white border-charcoal-900 shadow-sm'
                      : 'bg-charcoal-50/70 hover:bg-white text-charcoal-800 border-charcoal-200/70'
                  }`}
                >
                  <div className="text-xs font-bold leading-tight">{path.title}</div>
                  <div className={`text-[10px] mt-1 ${isSelected ? 'text-brand-300' : 'text-charcoal-500'}`}>
                    {path.category} • {path.marketDemand} Demand
                  </div>
                </button>
              );
            })}
          </div>

          {/* Path Details (8 cols) */}
          <div className="md:col-span-8 bg-charcoal-50/50 rounded-2xl p-5 sm:p-6 border border-charcoal-200/80">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-brand-700 bg-brand-50 px-2.5 py-1 rounded-lg border border-brand-200">
                {activePath.growthRate} Market Growth
              </span>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                {activePath.salaryRange}
              </span>
            </div>

            <h4 className="text-xl font-bold text-charcoal-900 mb-2">
              {activePath.title}
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-600 leading-relaxed mb-6">
              {activePath.description}
            </p>

            {/* Required Skills Matrix */}
            <div className="mb-6">
              <div className="text-xs font-bold text-charcoal-800 uppercase tracking-wider mb-3">
                Core Competencies & Benchmark Levels
              </div>
              <div className="space-y-2.5">
                {activePath.requiredSkills.map((skill, idx) => (
                  <div key={idx} className="bg-white p-2.5 rounded-xl border border-charcoal-200/60 flex items-center justify-between text-xs">
                    <span className="font-medium text-charcoal-800">{skill.name}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 bg-charcoal-100 h-2 rounded-full overflow-hidden hidden sm:block">
                        <div
                          className={`h-full rounded-full ${
                            skill.status === 'mastered' ? 'bg-emerald-500' : skill.status === 'learning' ? 'bg-brand-600' : 'bg-amber-500'
                          }`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="font-bold text-charcoal-900 text-right w-8">{skill.level}%</span>
                      <span className={`text-[10px] px-2 py-0.5 rounded-md font-semibold ${
                        skill.status === 'mastered' ? 'bg-emerald-100 text-emerald-800' : skill.status === 'learning' ? 'bg-brand-100 text-brand-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {skill.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hiring Partners Strip */}
            <div className="bg-white p-4 rounded-xl border border-charcoal-200/60 mb-6">
              <div className="text-[11px] font-bold text-charcoal-500 uppercase tracking-wider mb-2">
                Hiring Ecosystem & Corporate Partners
              </div>
              <div className="flex flex-wrap gap-2">
                {activePath.hiringCompanies.map((c, i) => (
                  <span key={i} className="text-xs font-medium bg-charcoal-50 text-charcoal-800 px-3 py-1 rounded-lg border border-charcoal-200">
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Select Path CTA */}
            <button
              onClick={() => {
                onSelectPath(activePath.id);
                onClose();
              }}
              className="w-full bg-charcoal-900 hover:bg-brand-600 text-white text-xs font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm"
            >
              <span>Target This Trajectory In Dashboard</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
