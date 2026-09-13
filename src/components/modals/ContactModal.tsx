import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageSquare, Building2, User } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [role, setRole] = useState<'student' | 'institution'>('institution');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-float border border-charcoal-200 relative">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-charcoal-400 hover:text-charcoal-700 hover:bg-charcoal-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-2.5 py-1 rounded-full">
            CONNECT WITH CAREER LOOP
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-charcoal-900 mt-2">
            Schedule An Architecture Session
          </h3>
          <p className="text-xs text-charcoal-500 mt-1">
            Discuss customized cohort diagnostics or high-intent placement pathways.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-8 animate-in zoom-in-95">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="text-base font-bold text-charcoal-900">Message Received</div>
            <div className="text-xs text-charcoal-500 mt-1">
              A Career Loop partner strategist will reach out within 4 business hours.
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2 p-1 bg-charcoal-50 rounded-xl border border-charcoal-200">
              <button
                type="button"
                onClick={() => setRole('institution')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  role === 'institution' ? 'bg-white text-charcoal-900 shadow-subtle' : 'text-charcoal-500'
                }`}
              >
                <Building2 className="w-3.5 h-3.5" />
                <span>University / Institute</span>
              </button>
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`flex-1 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  role === 'student' ? 'bg-white text-charcoal-900 shadow-subtle' : 'text-charcoal-500'
                }`}
              >
                <User className="w-3.5 h-3.5" />
                <span>Individual Candidate</span>
              </button>
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal-700 mb-1">Full Name</label>
              <input
                type="text"
                defaultValue="Dr. Arvind Narayanan"
                className="w-full px-3.5 py-2.5 bg-charcoal-50 border border-charcoal-200 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:border-brand-500 focus:bg-white"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal-700 mb-1">Work / College Email</label>
              <input
                type="email"
                defaultValue="a.narayanan@nitk.ac.in"
                className="w-full px-3.5 py-2.5 bg-charcoal-50 border border-charcoal-200 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:border-brand-500 focus:bg-white"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-charcoal-700 mb-1">Message / Requirements</label>
              <textarea
                rows={3}
                defaultValue="Interested in deploying Career Loop placement diagnostics for our upcoming 2026 computer science graduating batch (480 students)."
                className="w-full px-3.5 py-2.5 bg-charcoal-50 border border-charcoal-200 rounded-xl text-xs text-charcoal-900 focus:outline-none focus:border-brand-500 focus:bg-white"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold py-3 rounded-xl transition-all shadow-sm"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Submit Request</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
