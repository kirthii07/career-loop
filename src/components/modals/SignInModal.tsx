import React, { useState } from 'react';
import { X, ArrowRight, ShieldCheck, Mail, Lock } from 'lucide-react';

interface SignInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SignInModal: React.FC<SignInModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('ananya.verma@example.edu');
  const [password, setPassword] = useState('••••••••••••');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSigningIn(true);
    setTimeout(() => {
      setIsSigningIn(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
      }, 900);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-float border border-charcoal-200 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-charcoal-400 hover:text-charcoal-700 hover:bg-charcoal-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <div className="w-10 h-10 rounded-xl bg-charcoal-900 text-white flex items-center justify-center mb-3 shadow-sm">
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 8c-2.5 0-4 1.8-4 4s1.5 4 4 4c2.8 0 4.2-2.5 5-4 .8-1.5 2.2-4 5-4 2.5 0 4 1.8 4 4s-1.5 4-4 4c-2.8 0-4.2-2.5-5-4-.8-1.5-2.2-4-5-4z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-charcoal-900">
            Sign in to Career Loop
          </h3>
          <p className="text-xs text-charcoal-500 mt-0.5">
            Access your student intelligence dashboard & mock rubrics
          </p>
        </div>

        {isSuccess ? (
          <div className="text-center py-6 animate-in zoom-in-95">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-base font-bold text-charcoal-900">Welcome Back, Ananya</div>
            <div className="text-xs text-charcoal-500 mt-1">Routing to candidate dashboard...</div>
          </div>
        ) : (
          <form onSubmit={handleSignIn} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-charcoal-700 mb-1">
                Institutional / Candidate Email
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-charcoal-50/80 border border-charcoal-200 rounded-xl text-xs text-charcoal-900 font-medium focus:outline-none focus:border-brand-500 focus:bg-white"
                  placeholder="name@college.edu"
                  required
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-semibold text-charcoal-700">
                  Password
                </label>
                <a href="#" className="text-[11px] text-brand-600 hover:underline">
                  Forgot?
                </a>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-charcoal-50/80 border border-charcoal-200 rounded-xl text-xs text-charcoal-900 font-medium focus:outline-none focus:border-brand-500 focus:bg-white"
                  placeholder="••••••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSigningIn}
              className="w-full flex items-center justify-center gap-2 bg-charcoal-900 hover:bg-brand-600 text-white text-xs font-semibold py-3 rounded-xl transition-all shadow-sm active:scale-98 mt-2"
            >
              {isSigningIn ? (
                <span>Authenticating Session...</span>
              ) : (
                <>
                  <span>Sign In To Workspace</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>

            <div className="text-center text-[11px] text-charcoal-400 pt-2">
              Demo Candidate Mode • No active credentials required
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
