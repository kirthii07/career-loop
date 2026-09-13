import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Building2, GraduationCap, ArrowRight, ShieldCheck, Lock } from 'lucide-react';

export const LoginPage: React.FC = () => {
  const [role, setRole] = useState<'candidate' | 'recruiter' | 'college'>('candidate');
  const [email, setEmail] = useState('arunkumar.tech@careerloop.demo');
  const [password, setPassword] = useState('••••••••••••');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'candidate') {
      navigate('/candidate/dashboard');
    } else if (role === 'recruiter') {
      navigate('/recruiter/dashboard');
    } else {
      navigate('/admin');
    }
  };

  return (
    <div className="pt-28 pb-20 bg-[#FAFAF9] min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-3xl border border-black/[0.08] shadow-card-hover p-8 space-y-6">
        
        {/* Brand Top */}
        <div className="text-center space-y-1">
          <Link to="/" className="inline-flex items-center space-x-2">
            <div className="w-8 h-8 rounded-xl bg-charcoal-900 flex items-center justify-center text-white font-bold text-sm">
              CL
            </div>
            <span className="font-display font-bold text-xl tracking-tight text-charcoal-900">
              Career<span className="text-loop-indigo">Loop</span>
            </span>
          </Link>
          <h1 className="text-xl font-bold text-charcoal-900 pt-3">Sign in to your account</h1>
          <p className="text-xs text-charcoal-500">Access verified jobs, applicant pipelines and institutional portals</p>
        </div>

        {/* Role Switcher */}
        <div className="grid grid-cols-3 gap-1 p-1 bg-neutral-100 rounded-xl">
          <button
            type="button"
            onClick={() => {
              setRole('candidate');
              setEmail('arunkumar.tech@careerloop.demo');
            }}
            className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center space-x-1 ${
              role === 'candidate' ? 'bg-white text-charcoal-900 shadow-xs' : 'text-charcoal-500 hover:text-charcoal-800'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Candidate</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setRole('recruiter');
              setEmail('hiring@kinetix-tech.demo');
            }}
            className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center space-x-1 ${
              role === 'recruiter' ? 'bg-white text-charcoal-900 shadow-xs' : 'text-charcoal-500 hover:text-charcoal-800'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Recruiter</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setRole('college');
              setEmail('placement.dean@ceg-annauniv.demo');
            }}
            className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center space-x-1 ${
              role === 'college' ? 'bg-white text-charcoal-900 shadow-xs' : 'text-charcoal-500 hover:text-charcoal-800'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>College</span>
          </button>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-charcoal-700">Email Address</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-black/[0.1] focus:border-loop-indigo outline-none"
            />
          </div>

          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-xs font-semibold text-charcoal-700">Password</label>
              <a href="#" className="text-[11px] text-loop-indigo hover:underline font-medium">Forgot?</a>
            </div>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-black/[0.1] focus:border-loop-indigo outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-xs font-bold text-white bg-charcoal-900 hover:bg-black rounded-xl transition-all shadow-sm flex items-center justify-center space-x-2"
          >
            <span>Sign In as {role.charAt(0).toUpperCase() + role.slice(1)}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        <div className="pt-2 text-center text-xs text-charcoal-500">
          Don&apos;t have an account?{' '}
          <Link to="/register" className="font-semibold text-loop-indigo hover:underline">
            Register now
          </Link>
        </div>

      </div>
    </div>
  );
};
