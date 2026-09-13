import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, IndianRupee, MapPin, Globe, CheckCircle2, Bookmark, Send, Sparkles, Building2 } from 'lucide-react';
import { mockInternships } from '../data/internships';

export const InternshipDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(false);
  const [applied, setApplied] = useState(false);

  const internship = mockInternships.find((i) => i.id === id) || mockInternships[0];

  const handleApply = () => {
    setApplied(true);
    setTimeout(() => {
      navigate('/candidate/applications');
    }, 1200);
  };

  return (
    <div className="min-h-screen pt-28 pb-20 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/internships"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-charcoal-500 hover:text-charcoal-900"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Internships</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <main className="lg:col-span-8 space-y-8">
            <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-8 shadow-card">
              <div className="flex items-start gap-4 mb-6">
                <img
                  src={internship.companyLogo}
                  alt={internship.company}
                  className="w-16 h-16 rounded-2xl object-cover border border-charcoal-100 shadow-sm"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-charcoal-600">{internship.company}</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-loop-violet/10 text-loop-violet text-xs font-bold">
                      <Sparkles className="w-3 h-3" /> Mentorship Included
                    </span>
                  </div>
                  <h1 className="font-display text-2xl sm:text-3xl font-black text-charcoal-900 mt-1">
                    {internship.title}
                  </h1>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-charcoal-100">
                <div className="p-3 rounded-xl bg-warm-50 border border-charcoal-100">
                  <div className="text-[10px] uppercase font-bold text-charcoal-400">Duration</div>
                  <div className="text-xs font-bold text-charcoal-900 mt-0.5 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-loop-violet" />
                    {internship.duration}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-warm-50 border border-charcoal-100">
                  <div className="text-[10px] uppercase font-bold text-charcoal-400">Stipend</div>
                  <div className="text-xs font-bold text-charcoal-900 mt-0.5 flex items-center gap-1">
                    <IndianRupee className="w-3 h-3 text-emerald-600" />
                    {internship.stipend}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-warm-50 border border-charcoal-100">
                  <div className="text-[10px] uppercase font-bold text-charcoal-400">Location</div>
                  <div className="text-xs font-bold text-charcoal-900 mt-0.5">
                    {internship.remote ? 'Remote' : internship.location}
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-warm-50 border border-charcoal-100">
                  <div className="text-[10px] uppercase font-bold text-charcoal-400">Eligibility</div>
                  <div className="text-xs font-bold text-charcoal-900 mt-0.5">{internship.education}</div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-8 shadow-card space-y-4">
              <h2 className="font-display text-lg font-bold text-charcoal-900">Internship Description</h2>
              <p className="text-sm text-charcoal-600 leading-relaxed">
                {internship.description}
              </p>
            </div>

            <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-8 shadow-card space-y-4">
              <h2 className="font-display text-lg font-bold text-charcoal-900">What You'll Work On</h2>
              <ul className="space-y-2.5">
                {internship.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-charcoal-700">
                    <div className="w-1.5 h-1.5 rounded-full bg-loop-violet mt-2 shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-8 shadow-card space-y-4">
              <h2 className="font-display text-lg font-bold text-charcoal-900">Skills & Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {internship.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-loop-violet/10 text-loop-violet text-xs font-bold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </main>

          <aside className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-3xl border border-charcoal-200/80 p-6 shadow-card sticky top-28 space-y-6">
              <button
                type="button"
                disabled={applied}
                onClick={handleApply}
                className={`w-full py-4 rounded-2xl text-sm font-extrabold flex items-center justify-center gap-2 transition-all shadow-md ${
                  applied ? 'bg-emerald-600 text-white' : 'bg-charcoal-900 hover:bg-black text-white'
                }`}
              >
                {applied ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Applied Successfully!</span>
                  </>
                ) : (
                  <>
                    <span>Apply for Internship</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => setIsSaved(!isSaved)}
                className="w-full py-3 rounded-2xl border border-charcoal-200 bg-white text-xs font-bold text-charcoal-700 hover:bg-warm-100 flex items-center justify-center gap-2"
              >
                <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-charcoal-900' : ''}`} />
                <span>{isSaved ? 'Saved' : 'Bookmark Internship'}</span>
              </button>

              <div className="pt-4 border-t border-charcoal-100 space-y-3 text-xs text-charcoal-600">
                <div className="flex justify-between">
                  <span className="text-charcoal-400">Application Deadline</span>
                  <span className="font-bold text-charcoal-800">{internship.deadline}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-charcoal-400">Pre-placement Offer (PPO)</span>
                  <span className="font-bold text-emerald-600">Eligible on Performance</span>
                </div>
              </div>
            </div>
          </aside>

        </div>

      </div>
    </div>
  );
};
