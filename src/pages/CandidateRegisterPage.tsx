import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Lock, MapPin, GraduationCap, Briefcase, ArrowRight, ArrowLeft, CheckCircle2, Sparkles, Upload } from 'lucide-react';

export const CandidateRegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);

  // Step 1: Basic Account Info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  // Step 2: Background & Level
  const [education, setEducation] = useState('B.E. Computer Science');
  const [location, setLocation] = useState('Chennai, Tamil Nadu');
  const [experienceLevel, setExperienceLevel] = useState('Fresher (0 - 1 years)');

  // Step 3: Complete Career Profile
  const [skills, setSkills] = useState(['React', 'JavaScript', 'Python']);
  const [skillInput, setSkillInput] = useState('');
  const [resumeUploaded, setResumeUploaded] = useState(false);

  const addSkill = () => {
    if (skillInput.trim() && !skills.includes(skillInput.trim())) {
      setSkills([...skills, skillInput.trim()]);
      setSkillInput('');
    }
  };

  const removeSkill = (s: string) => {
    setSkills(skills.filter((item) => item !== s));
  };

  const handleFinish = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/candidate/dashboard');
  };

  return (
    <div className="min-h-screen pt-28 pb-16 flex items-center justify-center px-4 bg-warm-100/60 relative overflow-hidden">
      {/* Glows */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-loop-indigo/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-loop-pink/15 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-lg bg-white border border-charcoal-200/80 rounded-3xl p-8 sm:p-10 shadow-card relative z-10">
        
        {/* Progress Bar & Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-bold text-charcoal-400 mb-2">
            <span>STEP {step} OF 3</span>
            <span className="text-loop-indigo">{step === 1 ? 'Account Setup' : step === 2 ? 'Education & Experience' : 'Profile Completion'}</span>
          </div>
          <div className="w-full h-1.5 bg-warm-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-loop-indigo via-loop-violet to-loop-pink rounded-full"
              initial={false}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* STEP 1: Basic Credentials */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-6">
                <h1 className="font-display text-2xl font-extrabold text-charcoal-900">
                  Create Candidate Account
                </h1>
                <p className="text-xs text-charcoal-500 mt-1">
                  Start matching with verified jobs and internships across Tamil Nadu.
                </p>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="py-2.5 px-3 rounded-xl border border-charcoal-200 bg-warm-50 text-xs font-semibold text-charcoal-700 hover:bg-warm-100 flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-loop-indigo" />
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="py-2.5 px-3 rounded-xl border border-charcoal-200 bg-warm-50 text-xs font-semibold text-charcoal-700 hover:bg-warm-100 flex items-center justify-center gap-2"
                >
                  <Briefcase className="w-3.5 h-3.5 text-loop-indigo" />
                  <span>LinkedIn</span>
                </button>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-charcoal-200" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-3 text-charcoal-400 font-medium">Or with email</span>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Priyan R"
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-indigo"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="priyan@example.com"
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-indigo"
                    />
                  </div>
                </div>

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
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-indigo"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-indigo"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full py-3.5 rounded-xl bg-charcoal-900 hover:bg-black text-white text-sm font-bold flex items-center justify-center gap-2 transition-all mt-4"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="mt-6 pt-4 border-t border-charcoal-100 text-center">
                <p className="text-xs text-charcoal-500">
                  Already registered?{' '}
                  <Link to="/candidate/login" className="font-bold text-loop-indigo hover:underline">
                    Sign In →
                  </Link>
                </p>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Education & Experience Level */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-6">
                <h1 className="font-display text-2xl font-extrabold text-charcoal-900">
                  Education & Background
                </h1>
                <p className="text-xs text-charcoal-500 mt-1">
                  Tell us where you are based and what roles you are targeting.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Highest Education / Degree
                  </label>
                  <div className="relative">
                    <GraduationCap className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={education}
                      onChange={(e) => setEducation(e.target.value)}
                      placeholder="e.g. B.Tech Computer Science, Anna University"
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-indigo"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Location in Tamil Nadu / India
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-charcoal-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-indigo"
                    >
                      <option value="Chennai, Tamil Nadu">Chennai, Tamil Nadu</option>
                      <option value="Coimbatore, Tamil Nadu">Coimbatore, Tamil Nadu</option>
                      <option value="Madurai, Tamil Nadu">Madurai, Tamil Nadu</option>
                      <option value="Trichy, Tamil Nadu">Trichy, Tamil Nadu</option>
                      <option value="Salem, Tamil Nadu">Salem, Tamil Nadu</option>
                      <option value="Bengaluru, Karnataka">Bengaluru, Karnataka</option>
                      <option value="Remote / Open across India">Remote / Open across India</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                    Experience Level
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {['Student / Intern', 'Fresher (0-1 yr)', '1-3 yrs Exp'].map((lvl) => (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => setExperienceLevel(lvl)}
                        className={`p-3 rounded-xl border text-xs font-semibold text-center transition-all ${
                          experienceLevel === lvl
                            ? 'border-loop-indigo bg-loop-indigo/10 text-loop-indigo font-bold'
                            : 'border-charcoal-200 bg-warm-50/50 text-charcoal-700 hover:bg-warm-100'
                        }`}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="p-3.5 rounded-xl border border-charcoal-200 text-charcoal-700 hover:bg-warm-100"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="flex-1 py-3.5 rounded-xl bg-charcoal-900 hover:bg-black text-white text-sm font-bold flex items-center justify-center gap-2 transition-all"
                  >
                    <span>Next: Complete Career Profile</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Complete Career Profile (PRD #14) */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="mb-6">
                <div className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Almost Done</span>
                </div>
                <h1 className="font-display text-2xl font-extrabold text-charcoal-900">
                  Complete Your Career Profile
                </h1>
                <p className="text-xs text-charcoal-500 mt-1">
                  Add core skills and upload your resume for immediate employer matching.
                </p>
              </div>

              <form onSubmit={handleFinish} className="space-y-5">
                {/* Skills Multi-add */}
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                    Your Core Skills
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={skillInput}
                      onChange={(e) => setSkillInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                      placeholder="Add a skill (e.g. Node.js, SQL, Figma)"
                      className="flex-1 px-3.5 py-2 text-xs rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-indigo"
                    />
                    <button
                      type="button"
                      onClick={addSkill}
                      className="px-4 py-2 rounded-xl bg-charcoal-900 text-white text-xs font-bold hover:bg-black"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((s) => (
                      <span
                        key={s}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-loop-indigo/10 text-loop-indigo"
                      >
                        {s}
                        <button
                          type="button"
                          onClick={() => removeSkill(s)}
                          className="hover:text-charcoal-900 font-bold"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Resume Upload Box */}
                <div>
                  <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1.5">
                    Upload Resume (PDF / DOCX)
                  </label>
                  <div
                    onClick={() => setResumeUploaded(!resumeUploaded)}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all ${
                      resumeUploaded
                        ? 'border-emerald-500 bg-emerald-50/40'
                        : 'border-charcoal-300 hover:border-loop-indigo bg-warm-50/50'
                    }`}
                  >
                    {resumeUploaded ? (
                      <div className="flex flex-col items-center gap-1 text-emerald-700">
                        <CheckCircle2 className="w-8 h-8 text-emerald-600" />
                        <span className="text-xs font-bold">Resume Attached: Priyan_Resume_2026.pdf</span>
                        <span className="text-[10px] text-charcoal-500">Click to replace</span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center gap-2 text-charcoal-600">
                        <Upload className="w-7 h-7 text-charcoal-400" />
                        <span className="text-xs font-bold text-charcoal-800">
                          Click to select your resume
                        </span>
                        <span className="text-[11px] text-charcoal-400">PDF, DOC, DOCX up to 5MB</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="p-3.5 rounded-xl border border-charcoal-200 text-charcoal-700 hover:bg-warm-100"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-3.5 rounded-xl bg-charcoal-900 hover:bg-black text-white text-sm font-bold flex items-center justify-center gap-2 transition-all shadow-md"
                  >
                    <span>Finish & Go to Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};
