import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Building2, GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';

export const RegisterPage: React.FC = () => {
  const [role, setRole] = useState<'candidate' | 'recruiter' | 'college'>('candidate');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [collegeOrCompany, setCollegeOrCompany] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'candidate') {
      navigate('/candidate/profile');
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
          <h1 className="text-xl font-bold text-charcoal-900 pt-3">Create your CareerLoop Account</h1>
          <p className="text-xs text-charcoal-500">Join the continuous career opportunity network</p>
        </div>

        {/* Role Switcher */}
        <div className="grid grid-cols-3 gap-1 p-1 bg-neutral-100 rounded-xl">
          <button
            type="button"
            onClick={() => setRole('candidate')}
            className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center space-x-1 ${
              role === 'candidate' ? 'bg-white text-charcoal-900 shadow-xs' : 'text-charcoal-500 hover:text-charcoal-800'
            }`}
          >
            <User className="w-3.5 h-3.5" />
            <span>Candidate</span>
          </button>

          <button
            type="button"
            onClick={() => setRole('recruiter')}
            className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center space-x-1 ${
              role === 'recruiter' ? 'bg-white text-charcoal-900 shadow-xs' : 'text-charcoal-500 hover:text-charcoal-800'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Recruiter</span>
          </button>

          <button
            type="button"
            onClick={() => setRole('college')}
            className={`py-2 text-xs font-semibold rounded-lg transition-all flex items-center justify-center space-x-1 ${
              role === 'college' ? 'bg-white text-charcoal-900 shadow-xs' : 'text-charcoal-500 hover:text-charcoal-800'
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>College</span>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-charcoal-700">Full Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Arun Kumar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-black/[0.1] focus:border-loop-indigo outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-charcoal-700">
              {role === 'candidate' ? 'College / University' : role === 'recruiter' ? 'Company Name' : 'Institution Name'}
            </label>
            <input
              type="text"
              required
              placeholder={role === 'candidate' ? 'e.g. Anna University (CEG)' : role === 'recruiter' ? 'e.g. Kinetix Technologies' : 'e.g. PSG College of Tech'}
              value={collegeOrCompany}
              onChange={(e) => setCollegeOrCompany(e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-black/[0.1] focus:border-loop-indigo outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-charcoal-700">Email Address</label>
            <input
              type="email"
              required
              placeholder="name@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-black/[0.1] focus:border-loop-indigo outline-none"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-charcoal-700">Password</label>
            <input
              type="password"
              required
              placeholder="Create a strong password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-xs p-3 rounded-xl border border-black/[0.1] focus:border-loop-indigo outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 text-xs font-bold text-white bg-charcoal-900 hover:bg-black rounded-xl transition-all shadow-sm flex items-center justify-center space-x-2"
          >
            <span>Create {role.charAt(0).toUpperCase() + role.slice(1)} Account</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </form>

        <div className="pt-2 text-center text-xs text-charcoal-500">
          Already have an account?{' '}
          <Link to="/login" className="font-semibold text-loop-indigo hover:underline">
            Sign in
          </Link>
        </div>

      </div>
    </div>
  );
};
