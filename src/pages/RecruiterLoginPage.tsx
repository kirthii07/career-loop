import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, Lock, Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const RecruiterLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/recruiter/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen pt-28 pb-16 flex items-center justify-center px-4 bg-warm-100/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-loop-coral/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-loop-violet/15 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white border border-charcoal-200/80 rounded-3xl p-8 sm:p-10 shadow-card"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-loop-coral/10 text-loop-coral text-xs font-bold mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Employer & Talent Portal</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight">
            CareerLoop Recruiter
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-1.5">
            Log in to manage job requisitions, review candidates, and schedule interviews.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
              Official Work Email
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="recruiter@company.com"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-loop-coral/30 focus:border-loop-coral bg-warm-50/50"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider">
                Password
              </label>
              <a href="#" className="text-xs font-semibold text-loop-coral hover:underline">
                Forgot password?
              </a>
            </div>
            <div className="relative">
              <Lock className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-loop-coral/30 focus:border-loop-coral bg-warm-50/50"
              />
            </div>
          </div>

          {/* Verification Callout */}
          <div className="p-3 rounded-xl bg-warm-100 border border-charcoal-200/60 flex items-center gap-2.5 text-xs text-charcoal-600">
            <ShieldCheck className="w-4 h-4 text-loop-indigo shrink-0" />
            <span>Only authorized company representatives are permitted.</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-charcoal-900 hover:bg-black text-white text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md mt-2"
          >
            <span>{loading ? 'Authenticating...' : 'Sign In'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-charcoal-100 text-center">
          <p className="text-xs text-charcoal-600">
            Don't have an account?{' '}
            <Link to="/recruiter/register" className="font-bold text-loop-coral hover:underline">
              Register Your Company →
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
