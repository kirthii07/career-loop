import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, Mail, Phone, User, Globe, MapPin, Briefcase, FileText, CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const RecruiterRegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);

  // Form Fields
  const [recruiterName, setRecruiterName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [website, setWebsite] = useState('');
  const [location, setLocation] = useState('Chennai, Tamil Nadu');
  const [industry, setIndustry] = useState('Information Technology & Services');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-28 pb-16 flex items-center justify-center px-4 bg-warm-100/60 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-loop-coral/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-loop-violet/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-xl bg-white border border-charcoal-200/80 rounded-3xl p-8 sm:p-10 shadow-card relative z-10">
        
        {!submitted ? (
          <div>
            <div className="mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-loop-coral/10 text-loop-coral text-xs font-bold mb-3">
                <Building2 className="w-3.5 h-3.5" />
                <span>Employer Registration</span>
              </div>
              <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight">
                Register Your Company
              </h1>
              <p className="text-xs sm:text-sm text-charcoal-500 mt-1.5 leading-relaxed">
                Connect with pre-screened students and junior tech talent across Tamil Nadu institutions.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Recruiter Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={recruiterName}
                      onChange={(e) => setRecruiterName(e.target.value)}
                      placeholder="Deepika Ramanathan"
                      className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-coral"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Official Work Email
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="deepika@cloudpulse.io"
                      className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-coral"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Mobile Number
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98401 23456"
                      className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-coral"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="CloudPulse Technologies"
                      className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-coral"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Company Website
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="url"
                      required
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      placeholder="https://cloudpulse.io"
                      className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-coral"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Company Location
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="Chennai / Coimbatore, Tamil Nadu"
                      className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-coral"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Industry Sector
                </label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <select
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-coral"
                  >
                    <option value="Information Technology & Services">Information Technology & Services</option>
                    <option value="Software Products & SaaS">Software Products & SaaS</option>
                    <option value="Fintech & Banking">Fintech & Banking</option>
                    <option value="Healthcare Technology">Healthcare Technology</option>
                    <option value="Automotive & EV">Automotive & EV</option>
                    <option value="EdTech">EdTech</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Brief Company Description
                </label>
                <textarea
                  rows={3}
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Tell prospective candidates about your products, culture, and team..."
                  className="w-full p-3 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-coral"
                />
              </div>

              <div className="p-3.5 rounded-xl bg-warm-100 border border-charcoal-200/60 flex items-start gap-2.5 text-xs text-charcoal-600">
                <Clock className="w-4 h-4 text-loop-coral shrink-0 mt-0.5" />
                <span>
                  Per CareerLoop Trust policy, all new corporate accounts enter <strong>Pending Verification</strong> state while GST/domain authenticity is verified by Admin.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-charcoal-900 hover:bg-black text-white text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md mt-4"
              >
                <span>Register & Submit for Verification</span>
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-charcoal-100 text-center">
              <p className="text-xs text-charcoal-500">
                Already registered?{' '}
                <Link to="/recruiter/login" className="font-bold text-loop-coral hover:underline">
                  Recruiter Sign In →
                </Link>
              </p>
            </div>
          </div>
        ) : (
          /* Confirmation & Pending Verification State (PRD #15) */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6 space-y-5"
          >
            <div className="w-16 h-16 rounded-full bg-amber-50 border-2 border-amber-300 text-amber-600 flex items-center justify-center mx-auto shadow-sm">
              <Clock className="w-8 h-8 animate-pulse" />
            </div>

            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100/70 text-amber-800 text-xs font-bold">
              Status: Pending Verification
            </span>

            <h2 className="font-display text-2xl font-extrabold text-charcoal-900">
              Registration Received
            </h2>

            <p className="text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
              Thank you for registering <strong>{companyName || 'your company'}</strong>. Our trust operations team is reviewing your organization profile. You can explore the recruiter dashboard in sandbox mode now.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => navigate('/recruiter/dashboard')}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-charcoal-900 hover:bg-black text-white text-xs font-bold transition-all"
              >
                Go to Recruiter Dashboard (Preview)
              </button>
              <Link
                to="/"
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-charcoal-200 text-charcoal-700 hover:bg-warm-100 text-xs font-bold"
              >
                Return Home
              </Link>
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
};
