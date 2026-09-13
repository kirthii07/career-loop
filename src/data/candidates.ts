import { CandidateProfile, JobApplication, RecruiterMetric, RecruiterApplicant } from '../types';

export const MOCK_CANDIDATE: CandidateProfile = {
  id: 'cand-101',
  name: 'Arun Kumar S',
  headline: 'Aspiring Full Stack Engineer | React, TypeScript & Node.js',
  email: 'arunkumar.tech@careerloop.demo',
  phone: '+91 98401 23456',
  avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=256&auto=format&fit=crop&q=80',
  location: 'Chennai, Tamil Nadu, India',
  bio: 'Final-year Computer Science undergraduate at CEG, Anna University. Passionate about building fast, accessible web applications and distributed backend microservices. Active open-source contributor and hackathon finalist.',
  completionPercentage: 92,
  skills: [
    { name: 'React', level: 92, verified: true },
    { name: 'JavaScript / TypeScript', level: 90, verified: true },
    { name: 'Node.js', level: 82, verified: true },
    { name: 'SQL & PostgreSQL', level: 78, verified: false },
    { name: 'Python', level: 84, verified: true },
    { name: 'Tailwind CSS', level: 94, verified: true },
    { name: 'Docker', level: 70, verified: false },
    { name: 'System Design', level: 68, verified: false },
  ],
  education: [
    {
      degree: 'B.E. Computer Science and Engineering',
      institution: 'College of Engineering, Guindy (Anna University)',
      location: 'Chennai, Tamil Nadu',
      year: '2022 – 2026',
      grade: 'CGPA: 8.9 / 10'
    },
    {
      degree: 'Higher Secondary Certificate (Class XII)',
      institution: 'DAV Boys Senior Secondary School',
      location: 'Gopalapuram, Chennai',
      year: '2020 – 2022',
      grade: '96.4%'
    }
  ],
  experience: [
    {
      role: 'Frontend Engineering Intern',
      company: 'NovaCloud Labs',
      location: 'Remote, Tamil Nadu',
      period: 'May 2025 – Jul 2025 (3 Months)',
      description: 'Built customer analytics dashboard components using React and Tailwind CSS. Decreased initial bundle loading time by 28% through code splitting.'
    }
  ],
  resumeUrl: '#',
  resumeFileName: 'Arun_Kumar_SDE_Resume_2026.pdf',
  portfolioUrl: 'https://arunkumar.dev.demo',
  githubUrl: 'https://github.com/arunkumar-demo',
  linkedinUrl: 'https://linkedin.com/in/arunkumar-demo'
};

export const MOCK_APPLICATIONS: JobApplication[] = [
  {
    id: 'APP-9021',
    jobId: 'job-1',
    role: 'Software Engineer (Full Stack)',
    company: 'Kinetix Technologies',
    companyLogo: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=128&auto=format&fit=crop&q=80',
    location: 'Chennai, Tamil Nadu',
    salary: '₹6L – ₹10L',
    appliedDate: 'Sep 02, 2026',
    status: 'interview',
    lastUpdated: '12 hours ago',
    nextStep: 'Round 2: Technical System Design & Live Coding',
    interviewDate: 'Sep 16, 2026 • 03:00 PM IST',
    timeline: [
      { stage: 'applied', label: 'Application Submitted', date: 'Sep 02, 2026', completed: true, note: 'Resume and profile sent directly to hiring lead' },
      { stage: 'viewed', label: 'Application Reviewed', date: 'Sep 04, 2026', completed: true, note: 'Profile viewed by Senior Technical Recruiter' },
      { stage: 'shortlisted', label: 'Candidate Shortlisted', date: 'Sep 07, 2026', completed: true, note: 'Cleared automated resume & skills screening' },
      { stage: 'interview', label: 'Technical Interview', date: 'Sep 16, 2026', completed: false, current: true, note: 'Virtual panel interview via Google Meet' },
      { stage: 'selected', label: 'Offer Decision', date: 'Pending', completed: false, note: 'Final selection and compensation review' },
    ]
  },
  {
    id: 'APP-8944',
    jobId: 'job-2',
    role: 'Frontend Developer',
    company: 'NovaCloud Labs',
    companyLogo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=128&auto=format&fit=crop&q=80',
    location: 'Coimbatore, Tamil Nadu',
    salary: '₹5L – ₹9L',
    appliedDate: 'Sep 05, 2026',
    status: 'shortlisted',
    lastUpdated: '1 day ago',
    nextStep: 'Awaiting interview slot confirmation',
    timeline: [
      { stage: 'applied', label: 'Application Submitted', date: 'Sep 05, 2026', completed: true },
      { stage: 'viewed', label: 'Application Reviewed', date: 'Sep 06, 2026', completed: true },
      { stage: 'shortlisted', label: 'Shortlisted for Next Stage', date: 'Sep 08, 2026', completed: true, current: true, note: 'Score 91/100 on code sample' },
      { stage: 'interview', label: 'Technical Interview', date: 'Pending', completed: false },
      { stage: 'selected', label: 'Offer Decision', date: 'Pending', completed: false },
    ]
  },
  {
    id: 'APP-8812',
    jobId: 'job-3',
    role: 'Product Designer (UI/UX)',
    company: 'LoopStudio Design Systems',
    companyLogo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=128&auto=format&fit=crop&q=80',
    location: 'Chennai, Tamil Nadu',
    salary: '₹7L – ₹12L',
    appliedDate: 'Sep 08, 2026',
    status: 'viewed',
    lastUpdated: '3 days ago',
    nextStep: 'Portfolio evaluation in progress',
    timeline: [
      { stage: 'applied', label: 'Application Submitted', date: 'Sep 08, 2026', completed: true },
      { stage: 'viewed', label: 'Portfolio Viewed', date: 'Sep 10, 2026', completed: true, current: true, note: 'Design lead accessed Figma project link' },
      { stage: 'shortlisted', label: 'Design Shortlist', date: 'Pending', completed: false },
      { stage: 'interview', label: 'Design Review Interview', date: 'Pending', completed: false },
      { stage: 'selected', label: 'Offer Decision', date: 'Pending', completed: false },
    ]
  },
  {
    id: 'APP-8730',
    jobId: 'job-6',
    role: 'Backend Engineer (Go)',
    company: 'PaySphere Cloud',
    companyLogo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=128&auto=format&fit=crop&q=80',
    location: 'Coimbatore, Tamil Nadu',
    salary: '₹8L – ₹15L',
    appliedDate: 'Sep 11, 2026',
    status: 'applied',
    lastUpdated: '2 days ago',
    timeline: [
      { stage: 'applied', label: 'Application Submitted', date: 'Sep 11, 2026', completed: true, current: true, note: 'Under initial screening' },
      { stage: 'viewed', label: 'Recruiter Review', date: 'Pending', completed: false },
      { stage: 'shortlisted', label: 'Assessment Shortlist', date: 'Pending', completed: false },
      { stage: 'interview', label: 'Technical Interview', date: 'Pending', completed: false },
      { stage: 'selected', label: 'Offer Decision', date: 'Pending', completed: false },
    ]
  }
];

export const MOCK_RECRUITER_METRICS: RecruiterMetric = {
  activeJobs: 24,
  applications: 1248,
  shortlisted: 86,
  interviews: 32,
  selected: 12
};

export const MOCK_RECRUITER_APPLICANTS: RecruiterApplicant[] = [
  {
    id: 'app-c1',
    candidateName: 'Priya Sundaram',
    candidateEmail: 'priya.sundaram@demo.edu',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&auto=format&fit=crop&q=80',
    role: 'Software Engineer',
    jobId: 'job-1',
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
    education: 'B.Tech CS, PSG College of Technology, Coimbatore',
    experience: 'Fresher (1 Internship)',
    appliedDate: '2 hours ago',
    status: 'Shortlisted',
    matchScore: 95,
    resumeUrl: '#'
  },
  {
    id: 'app-c2',
    candidateName: 'Karthik V',
    candidateEmail: 'karthik.v@demo.edu',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&auto=format&fit=crop&q=80',
    role: 'Frontend Developer',
    jobId: 'job-2',
    skills: ['React', 'Tailwind CSS', 'Next.js', 'Redux'],
    education: 'B.E. IT, SSN College of Engineering, Chennai',
    experience: 'Fresher',
    appliedDate: '5 hours ago',
    status: 'New',
    matchScore: 91,
    resumeUrl: '#'
  },
  {
    id: 'app-c3',
    candidateName: 'Deepa Natarajan',
    candidateEmail: 'deepa.n@demo.edu',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=128&auto=format&fit=crop&q=80',
    role: 'AI / Machine Learning Engineer',
    jobId: 'job-7',
    skills: ['Python', 'PyTorch', 'Transformers', 'FastAPI', 'SQL'],
    education: 'M.Tech AI, IIT Madras',
    experience: '1 Yr Research Experience',
    appliedDate: 'Yesterday',
    status: 'Interview Scheduled',
    matchScore: 97,
    resumeUrl: '#'
  },
  {
    id: 'app-c4',
    candidateName: 'Vigneshwaran M',
    candidateEmail: 'vignesh.m@demo.edu',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=128&auto=format&fit=crop&q=80',
    role: 'Backend Engineer (Go)',
    jobId: 'job-6',
    skills: ['Go', 'PostgreSQL', 'Kafka', 'Redis', 'Docker'],
    education: 'B.E. ECE, Thiagarajar College of Engineering, Madurai',
    experience: '1.5 Yrs Backend',
    appliedDate: '2 days ago',
    status: 'Shortlisted',
    matchScore: 89,
    resumeUrl: '#'
  },
  {
    id: 'app-c5',
    candidateName: 'Swetha Ramakrishnan',
    candidateEmail: 'swetha.r@demo.edu',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=128&auto=format&fit=crop&q=80',
    role: 'Product Designer (UI/UX)',
    jobId: 'job-3',
    skills: ['Figma', 'Prototyping', 'User Research', 'Design Systems'],
    education: 'B.Des, NIFT Chennai',
    experience: 'Fresher (Top Portfolio)',
    appliedDate: '3 days ago',
    status: 'Interview Scheduled',
    matchScore: 93,
    resumeUrl: '#'
  }
];
