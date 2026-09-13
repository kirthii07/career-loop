import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Logo } from '../components/layout/Logo';
import { Mail, Lock, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const CandidateLoginPage: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/candidate/dashboard');
    }, 600);
  };

  return (
    <div className="min-h-screen pt-28 pb-16 flex items-center justify-center px-4 bg-warm-100/60 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-loop-indigo/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-loop-pink/15 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md bg-white border border-charcoal-200/80 rounded-3xl p-8 sm:p-10 shadow-card"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-loop-indigo/10 text-loop-indigo text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Students & Job Seekers</span>
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-charcoal-900 tracking-tight">
            CareerLoop Candidate
          </h1>
          <p className="text-xs sm:text-sm text-charcoal-500 mt-1.5">
            Sign in to access your matched jobs, applications, and verified profile.
          </p>
        </div>

        {/* Google OAuth Button */}
        <button
          type="button"
          onClick={() => {
            setLoading(true);
            setTimeout(() => navigate('/candidate/dashboard'), 500);
          }}
          className="w-full py-3 px-4 rounded-xl border border-charcoal-200 bg-warm-50 hover:bg-warm-100/80 text-charcoal-800 text-sm font-semibold flex items-center justify-center gap-2.5 transition-all shadow-subtle mb-6"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
            />
          </svg>
          <span>Continue with Google</span>
        </button>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-charcoal-200" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-white px-3 text-charcoal-400 font-medium">Or continue with email</span>
          </div>
        </div>

        {/* Email & Password Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="student@domain.com"
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-loop-indigo/30 focus:border-loop-indigo bg-warm-50/50"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider">
                Password
              </label>
              <a href="#" className="text-xs font-semibold text-loop-indigo hover:underline">
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
                className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-charcoal-200 focus:outline-none focus:ring-2 focus:ring-loop-indigo/30 focus:border-loop-indigo bg-warm-50/50"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-xl bg-charcoal-900 hover:bg-black text-white text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md mt-2"
          >
            <span>{loading ? 'Signing In...' : 'Sign In'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-charcoal-100 text-center">
          <p className="text-xs text-charcoal-600">
            Don't have an account?{' '}
            <Link to="/candidate/register" className="font-bold text-loop-indigo hover:underline">
              Create Candidate Account →
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};
