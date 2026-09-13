import React, { useState } from 'react';
import { X, ArrowRight, CheckCircle2, Sparkles, Compass, ShieldCheck, RefreshCw } from 'lucide-react';

interface QuickAssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickAssessmentModal: React.FC<QuickAssessmentModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedTrack, setSelectedTrack] = useState('engineering');
  const [selectedExperience, setSelectedExperience] = useState('final_year');
  const [selectedStrength, setSelectedStrength] = useState('algorithms');
  const [isCalculating, setIsCalculating] = useState(false);

  if (!isOpen) return null;

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setIsCalculating(true);
      setTimeout(() => {
        setIsCalculating(false);
        setStep(4); // results
      }, 900);
    }
  };

  const handleReset = () => {
    setStep(1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-float border border-charcoal-200 relative overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-charcoal-400 hover:text-charcoal-700 hover:bg-charcoal-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Progress Indicator */}
        {step <= 3 && (
          <div className="mb-6">
            <div className="flex items-center justify-between text-xs font-semibold text-charcoal-500 mb-2">
              <span className="text-brand-600 font-mono">CAREER CLARITY DIAGNOSTIC</span>
              <span>Step {step} of 3</span>
            </div>
            <div className="w-full bg-charcoal-100 h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-brand-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* STEP 1: Academic / Domain Background */}
        {step === 1 && (
          <div>
            <h3 className="text-xl font-bold text-charcoal-900 mb-2">
              What domain aligns most with your ambition?
            </h3>
            <p className="text-xs text-charcoal-500 mb-6">
              Our placement engine calibrates against specific hiring benchmarks for each domain.
            </p>

            <div className="space-y-2.5 mb-6">
              {[
                { id: 'engineering', title: 'Backend & Cloud Systems', desc: 'Distributed architectures, Go/Java/Python, Docker, APIs' },
                { id: 'aiml', title: 'AI & Data Intelligence', desc: 'Machine learning models, PyTorch, LLMs, data pipelines' },
                { id: 'fullstack', title: 'Full-Stack Product Engineering', desc: 'React, Node, modern databases, web performance' },
                { id: 'product', title: 'Technical Product Management', desc: 'Product analytics, roadmaps, technical user discovery' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedTrack(item.id)}
                  className={`w-full p-3.5 rounded-2xl border text-left transition-all ${
                    selectedTrack === item.id
                      ? 'border-brand-600 bg-brand-50/50 shadow-sm'
                      : 'border-charcoal-200/70 hover:border-charcoal-300'
                  }`}
                >
                  <div className="text-xs font-bold text-charcoal-900">{item.title}</div>
                  <div className="text-[11px] text-charcoal-500 mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 2: Current Stage */}
        {step === 2 && (
          <div>
            <h3 className="text-xl font-bold text-charcoal-900 mb-2">
              Where are you currently in your education?
            </h3>
            <p className="text-xs text-charcoal-500 mb-6">
              Allows us to calculate your placement readiness runway and optimal sprint velocity.
            </p>

            <div className="space-y-2.5 mb-6">
              {[
                { id: 'final_year', title: 'Final Year Student (Graduating 2026/2027)', desc: 'Immediate placement cycle preparation required' },
                { id: 'pre_final', title: 'Pre-Final Year Student (Graduating 2027+)', desc: 'Internship readiness and core skill gap closure' },
                { id: 'early_grad', title: 'Recent Graduate / Junior Engineer', desc: 'Transitioning into high-paying Tier-1 SaaS roles' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedExperience(item.id)}
                  className={`w-full p-3.5 rounded-2xl border text-left transition-all ${
                    selectedExperience === item.id
                      ? 'border-brand-600 bg-brand-50/50 shadow-sm'
                      : 'border-charcoal-200/70 hover:border-charcoal-300'
                  }`}
                >
                  <div className="text-xs font-bold text-charcoal-900">{item.title}</div>
                  <div className="text-[11px] text-charcoal-500 mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3: Self-Assessed Primary Strength */}
        {step === 3 && (
          <div>
            <h3 className="text-xl font-bold text-charcoal-900 mb-2">
              Which area feels most natural to you?
            </h3>
            <p className="text-xs text-charcoal-500 mb-6">
              Identifies your highest-leverage cognitive anchor.
            </p>

            <div className="space-y-2.5 mb-6">
              {[
                { id: 'algorithms', title: 'Algorithmic Problem Solving & Logic', desc: 'Data structures, pattern matching, time complexity' },
                { id: 'building', title: 'Practical Code Architecture & Projects', desc: 'Building full applications, debugging, system wiring' },
                { id: 'communication', title: 'Technical Communication & Product Logic', desc: 'Explaining trade-offs, writing specs, user empathy' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setSelectedStrength(item.id)}
                  className={`w-full p-3.5 rounded-2xl border text-left transition-all ${
                    selectedStrength === item.id
                      ? 'border-brand-600 bg-brand-50/50 shadow-sm'
                      : 'border-charcoal-200/70 hover:border-charcoal-300'
                  }`}
                >
                  <div className="text-xs font-bold text-charcoal-900">{item.title}</div>
                  <div className="text-[11px] text-charcoal-500 mt-0.5">{item.desc}</div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4: CALCULATED RESULTS */}
        {step === 4 && (
          <div className="text-center py-2 animate-in zoom-in-95 duration-300">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
              DIAGNOSTIC COMPLETED
            </span>

            <h3 className="text-2xl font-extrabold text-charcoal-900 mt-2 mb-1">
              Your Career Intelligence Dossier
            </h3>
            <p className="text-xs text-charcoal-500 mb-6">
              Target Profile Calibrated for Tier-1 Tech Placement
            </p>

            {/* Metric Results Box */}
            <div className="bg-charcoal-50 rounded-2xl p-4 border border-charcoal-200/80 mb-6 text-left">
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white p-3 rounded-xl border border-charcoal-100">
                  <div className="text-[10px] text-charcoal-500 font-semibold">Career Readiness</div>
                  <div className="text-2xl font-black text-charcoal-900">86%</div>
                  <div className="text-[9px] text-emerald-600 font-semibold">+14% with 4-week sprint</div>
                </div>

                <div className="bg-white p-3 rounded-xl border border-charcoal-100">
                  <div className="text-[10px] text-charcoal-500 font-semibold">Career Match Fit</div>
                  <div className="text-2xl font-black text-brand-600">94%</div>
                  <div className="text-[9px] text-charcoal-500 font-semibold">High Alignment</div>
                </div>
              </div>

              <div className="text-xs font-bold text-charcoal-700 mb-1">Recommended Pathway</div>
              <div className="text-sm font-extrabold text-charcoal-900 mb-3">
                Software Engineer — Distributed Cloud Systems
              </div>

              <div className="text-xs font-semibold text-charcoal-600 mb-2">Recommended 3-Step Action Plan:</div>
              <ul className="space-y-1.5 text-xs text-charcoal-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Complete SQL Indexing Diagnostic</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Execute 2 System Design Mock Panels</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Calibrate ATS Resume to 95+ Score</span>
                </li>
              </ul>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                className="flex-1 py-3 rounded-xl border border-charcoal-200 text-xs font-semibold text-charcoal-700 hover:bg-charcoal-50 flex items-center justify-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Recalibrate</span>
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 rounded-xl bg-charcoal-900 hover:bg-brand-600 text-white text-xs font-semibold transition-colors"
              >
                Access Full Roadmap
              </button>
            </div>
          </div>
        )}

        {/* Action Button for Steps 1-3 */}
        {step <= 3 && (
          <button
            onClick={handleNext}
            disabled={isCalculating}
            className="w-full flex items-center justify-center gap-2 bg-charcoal-900 hover:bg-brand-600 text-white text-sm font-semibold py-3.5 rounded-xl transition-all shadow-sm"
          >
            {isCalculating ? (
              <span>Calibrating Career Rubrics...</span>
            ) : (
              <>
                <span>{step === 3 ? 'Generate Clarity Dossier' : 'Continue'}</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>
        )}

      </div>
    </div>
  );
};
