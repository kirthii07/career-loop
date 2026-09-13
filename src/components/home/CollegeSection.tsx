import React from 'react';
import { GraduationCap, Users, FileText, CheckCircle, TrendingUp, BarChart2 } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

export const CollegeSection: React.FC = () => {
  const readinessData = [
    { branch: 'CSE', readiness: 88, placed: 74 },
    { branch: 'IT', readiness: 84, placed: 70 },
    { branch: 'ECE', readiness: 76, placed: 62 },
    { branch: 'Mech', readiness: 68, placed: 55 },
    { branch: 'MBA', readiness: 92, placed: 81 },
  ];

  return (
    <section id="colleges" className="py-24 bg-white border-b border-charcoal-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-loop-indigo bg-loop-indigo/10 px-3 py-1 rounded-full">
            Institutional Placement Suite
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black text-charcoal-900 tracking-tight mt-3">
            Bring opportunities closer to every student.
          </h2>
          <p className="text-sm sm:text-base text-charcoal-600 mt-3 leading-relaxed">
            Empower college placement cells, training directors, and department heads with real-time campus hiring telemetry, industry partner verification, and student readiness metrics.
          </p>
        </div>

        {/* Enterprise Dashboard Preview Card */}
        <div className="rounded-3xl bg-warm-50 border border-charcoal-200/90 shadow-card p-6 sm:p-10">
          
          {/* Institutional Top Metrics Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-charcoal-200/80 shadow-subtle">
              <div className="flex items-center justify-between text-charcoal-500 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Total Cohort</span>
                <Users className="w-4 h-4 text-loop-indigo" />
              </div>
              <div className="font-display text-2xl sm:text-3xl font-black text-charcoal-900">1,480</div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-1">98% Enrolled in CareerLoop</div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-charcoal-200/80 shadow-subtle">
              <div className="flex items-center justify-between text-charcoal-500 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Applications</span>
                <FileText className="w-4 h-4 text-loop-violet" />
              </div>
              <div className="font-display text-2xl sm:text-3xl font-black text-charcoal-900">6,240</div>
              <div className="text-[11px] text-charcoal-500 mt-1">Across 42 Verified Startups</div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-charcoal-200/80 shadow-subtle">
              <div className="flex items-center justify-between text-charcoal-500 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Interviews</span>
                <TrendingUp className="w-4 h-4 text-loop-pink" />
              </div>
              <div className="font-display text-2xl sm:text-3xl font-black text-charcoal-900">418</div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-1">+24% vs Last Season</div>
            </div>

            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-charcoal-200/80 shadow-subtle">
              <div className="flex items-center justify-between text-charcoal-500 mb-2">
                <span className="text-xs font-bold uppercase tracking-wider">Placement Rate</span>
                <CheckCircle className="w-4 h-4 text-emerald-600" />
              </div>
              <div className="font-display text-2xl sm:text-3xl font-black text-charcoal-900">76.4%</div>
              <div className="text-[11px] text-emerald-600 font-semibold mt-1">Avg Offer ₹6.8 LPA</div>
            </div>
          </div>

          {/* Institutional Chart & Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-charcoal-200/80">
            <div className="lg:col-span-7">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-base font-bold text-charcoal-900">Branch-wise Readiness vs Offers (%)</h4>
                  <p className="text-xs text-charcoal-500">Real-time benchmark across 2025–2026 graduation cohorts</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 rounded bg-warm-200 text-charcoal-700">Live Feed</span>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={readinessData}>
                    <XAxis dataKey="branch" stroke="#929186" fontSize={12} tickLine={false} />
                    <YAxis stroke="#929186" fontSize={12} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#0F0F0E',
                        color: '#fff',
                        borderRadius: '8px',
                        border: 'none',
                        fontSize: '12px',
                      }}
                    />
                    <Bar dataKey="readiness" name="Readiness %" fill="#6366F1" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="placed" name="Placed %" fill="#EC4899" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-base font-bold text-charcoal-900">Institutional Capabilities</h4>
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-warm-100/60 border border-charcoal-100">
                  <div className="text-xs font-bold text-charcoal-900">Verified Corporate Ties</div>
                  <div className="text-xs text-charcoal-600 mt-0.5">Only genuine GST/MCA validated companies can contact college candidates.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-warm-100/60 border border-charcoal-100">
                  <div className="text-xs font-bold text-charcoal-900">Automated NOC & Resume Formats</div>
                  <div className="text-xs text-charcoal-600 mt-0.5">Standardized 1-page resumes and institutional placement verification exports.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-warm-100/60 border border-charcoal-100">
                  <div className="text-xs font-bold text-charcoal-900">Tier-2 / Tier-3 Regional Access</div>
                  <div className="text-xs text-charcoal-600 mt-0.5">Direct hiring bridges connecting Coimbatore, Madurai, Trichy, Salem and Chennai tech hubs.</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
