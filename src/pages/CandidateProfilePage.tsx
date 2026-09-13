import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Briefcase, 
  Upload, 
  FileText, 
  CheckCircle2, 
  Plus, 
  Trash2, 
  Save, 
  ArrowLeft 
} from 'lucide-react';

export const CandidateProfilePage: React.FC = () => {
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Personal Info
  const [name, setName] = useState('Priyan R.');
  const [email, setEmail] = useState('priyan.r@example.com');
  const [phone, setPhone] = useState('+91 98401 98765');
  const [location, setLocation] = useState('Chennai, Tamil Nadu');

  // Education
  const [degree, setDegree] = useState('Bachelor of Engineering (B.E.)');
  const [college, setCollege] = useState('College of Engineering, Guindy (Anna University)');
  const [specialization, setSpecialization] = useState('Computer Science & Engineering');
  const [gradYear, setGradYear] = useState('2025');

  // Experience
  const [experiences, setExperiences] = useState([
    {
      company: 'Zenith Labs',
      title: 'Frontend Engineering Intern',
      startDate: 'May 2024',
      endDate: 'Aug 2024',
      description: 'Engineered responsive dashboard features using React, Tailwind CSS, and TypeScript. Improved load time by 28%.',
    },
  ]);

  // Skills (PRD #24 specified: Java, Python, React, JavaScript, SQL, Digital Marketing, Sales)
  const [skills, setSkills] = useState([
    'React',
    'JavaScript',
    'Python',
    'SQL',
    'Java',
    'Digital Marketing',
    'Sales',
  ]);
  const [newSkill, setNewSkill] = useState('');

  const [resumeName, setResumeName] = useState('Priyan_Software_Engineer_Resume.pdf');

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const removeSkill = (sk: string) => {
    setSkills(skills.filter((s) => s !== sk));
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);
  };

  return (
    <div className="min-h-screen pt-24 pb-16 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top breadcrumb navigation */}
        <div className="flex items-center justify-between mb-8">
          <Link
            to="/candidate/dashboard"
            className="inline-flex items-center gap-2 text-xs font-bold text-charcoal-600 hover:text-charcoal-900"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Dashboard</span>
          </Link>
          {savedSuccess && (
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Profile Updated Successfully</span>
            </div>
          )}
        </div>

        <form onSubmit={handleSave} className="space-y-8">
          
          {/* SECTION 1: Personal Information (PRD #24) */}
          <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-8 shadow-card">
            <h2 className="font-display text-xl font-bold text-charcoal-900 mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-loop-indigo" />
              <span>Personal Information</span>
            </h2>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6 pb-6 border-b border-charcoal-100">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
                alt="Profile"
                className="w-20 h-20 rounded-2xl object-cover border-2 border-charcoal-200 shadow-sm"
              />
              <div className="text-center sm:text-left">
                <h3 className="text-sm font-bold text-charcoal-900">{name}</h3>
                <p className="text-xs text-charcoal-500 mb-3">Chennai, Tamil Nadu • Software Engineer Candidate</p>
                <button
                  type="button"
                  className="px-3 py-1.5 rounded-lg border border-charcoal-200 text-xs font-semibold text-charcoal-700 hover:bg-warm-100"
                >
                  Change Photo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-indigo"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-indigo"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-indigo"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Location (City / State)
                </label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-indigo"
                />
              </div>
            </div>
          </div>

          {/* SECTION 2: Education (PRD #24) */}
          <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-8 shadow-card">
            <h2 className="font-display text-xl font-bold text-charcoal-900 mb-6 flex items-center gap-2">
              <GraduationCap className="w-5 h-5 text-loop-violet" />
              <span>Education</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Degree
                </label>
                <input
                  type="text"
                  value={degree}
                  onChange={(e) => setDegree(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-violet"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  College / Institution
                </label>
                <input
                  type="text"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-violet"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Specialization / Branch
                </label>
                <input
                  type="text"
                  value={specialization}
                  onChange={(e) => setSpecialization(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-violet"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-charcoal-700 uppercase tracking-wider mb-1">
                  Graduation Year
                </label>
                <input
                  type="text"
                  value={gradYear}
                  onChange={(e) => setGradYear(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50 focus:outline-none focus:border-loop-violet"
                />
              </div>
            </div>
          </div>

          {/* SECTION 3: Experience (PRD #24) */}
          <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-8 shadow-card">
            <div className="flex items-center justify-between mb-6">
              <h2 className="font-display text-xl font-bold text-charcoal-900 flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-loop-pink" />
                <span>Work / Internship Experience</span>
              </h2>
              <button
                type="button"
                onClick={() =>
                  setExperiences([
                    ...experiences,
                    {
                      company: 'New Company',
                      title: 'Role Title',
                      startDate: '2024',
                      endDate: 'Present',
                      description: 'Describe contributions...',
                    },
                  ])
                }
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-charcoal-200 text-xs font-semibold text-charcoal-700 hover:bg-warm-100"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Position</span>
              </button>
            </div>

            <div className="space-y-4">
              {experiences.map((exp, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-warm-50/70 border border-charcoal-200/60 relative">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-charcoal-500 mb-1">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => {
                          const updated = [...experiences];
                          updated[idx].company = e.target.value;
                          setExperiences(updated);
                        }}
                        className="w-full p-2 text-xs font-bold rounded-lg border border-charcoal-200 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-charcoal-500 mb-1">
                        Job Title
                      </label>
                      <input
                        type="text"
                        value={exp.title}
                        onChange={(e) => {
                          const updated = [...experiences];
                          updated[idx].title = e.target.value;
                          setExperiences(updated);
                        }}
                        className="w-full p-2 text-xs font-bold rounded-lg border border-charcoal-200 bg-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-charcoal-500 mb-1">
                        Start Date
                      </label>
                      <input
                        type="text"
                        value={exp.startDate}
                        onChange={(e) => {
                          const updated = [...experiences];
                          updated[idx].startDate = e.target.value;
                          setExperiences(updated);
                        }}
                        className="w-full p-2 text-xs rounded-lg border border-charcoal-200 bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-charcoal-500 mb-1">
                        End Date
                      </label>
                      <input
                        type="text"
                        value={exp.endDate}
                        onChange={(e) => {
                          const updated = [...experiences];
                          updated[idx].endDate = e.target.value;
                          setExperiences(updated);
                        }}
                        className="w-full p-2 text-xs rounded-lg border border-charcoal-200 bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-charcoal-500 mb-1">
                      Description
                    </label>
                    <textarea
                      rows={2}
                      value={exp.description}
                      onChange={(e) => {
                        const updated = [...experiences];
                        updated[idx].description = e.target.value;
                        setExperiences(updated);
                      }}
                      className="w-full p-2 text-xs rounded-lg border border-charcoal-200 bg-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 4: Skills (PRD #24) */}
          <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-8 shadow-card">
            <h2 className="font-display text-xl font-bold text-charcoal-900 mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-loop-coral"></span>
              <span>Skills & Competencies</span>
            </h2>

            <div className="flex gap-2 mb-4">
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), addSkill())}
                placeholder="Add skill (e.g. AWS, Figma, Docker)..."
                className="flex-1 px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-charcoal-200 bg-warm-50/50"
              />
              <button
                type="button"
                onClick={addSkill}
                className="px-5 py-2 rounded-xl bg-charcoal-900 text-white text-xs font-bold hover:bg-black"
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-warm-100 border border-charcoal-200 text-xs font-semibold text-charcoal-800"
                >
                  <span>{s}</span>
                  <button
                    type="button"
                    onClick={() => removeSkill(s)}
                    className="hover:text-rose-600 font-bold"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          {/* SECTION 5: Resume Upload (PRD #24: PDF / DOC / DOCX upload UI) */}
          <div className="rounded-3xl bg-white border border-charcoal-200/80 p-6 sm:p-8 shadow-card">
            <h2 className="font-display text-xl font-bold text-charcoal-900 mb-4 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" />
              <span>Resume Upload</span>
            </h2>

            <div className="p-4 rounded-2xl bg-warm-50 border border-charcoal-200/80 flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-charcoal-900">{resumeName}</div>
                  <div className="text-[11px] text-charcoal-500">Last updated today • Parsed for matches</div>
                </div>
              </div>

              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                Active Resume
              </span>
            </div>

            <label className="border-2 border-dashed border-charcoal-300 rounded-2xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-loop-indigo hover:bg-warm-100/50 transition-all block text-center">
              <Upload className="w-6 h-6 text-charcoal-400" />
              <span className="text-xs font-bold text-charcoal-800">Upload New Resume Document</span>
              <span className="text-[11px] text-charcoal-400">Accepts PDF, DOC, DOCX up to 5MB</span>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setResumeName(e.target.files[0].name);
                  }
                }}
              />
            </label>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-2">
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-charcoal-900 hover:bg-black text-white text-sm font-bold shadow-md hover:shadow-lg transition-all"
            >
              <Save className="w-4 h-4" />
              <span>Save Profile Changes</span>
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
