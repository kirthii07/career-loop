export type WorkMode = 'Remote' | 'Hybrid' | 'On-site';
export type JobType = 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
export type ApplicationStage = 'applied' | 'viewed' | 'shortlisted' | 'interview' | 'selected' | 'rejected';

export interface Job {
  id: string;
  title: string;
  company: string;
  companyId: string;
  companyLogo: string;
  location: string;
  state: string;
  salaryMin: number;
  salaryMax: number;
  salaryDisplay: string;
  experience: string;
  jobType: JobType;
  workMode: WorkMode;
  department: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
  benefits: string[];
  vacancies: number;
  postedDate: string;
  deadline: string;
  isFeatured?: boolean;
  isVerified?: boolean;
  matchScore?: number;
}

export interface Internship {
  id: string;
  title: string;
  company: string;
  companyId: string;
  companyLogo: string;
  location: string;
  state: string;
  remote: boolean;
  duration: string;
  stipend: string;
  stipendAmount: number;
  skills: string[];
  education: string;
  department: string;
  description: string;
  responsibilities: string[];
  learningOutcomes: string[];
  vacancies: number;
  postedDate: string;
  deadline: string;
  isFeatured?: boolean;
  isVerified?: boolean;
  mentorSupport?: boolean;
}

export interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  headquarters: string;
  state: string;
  size: string;
  website: string;
  about: string;
  openJobsCount: number;
  openInternshipsCount: number;
  verified: boolean;
  rating: number;
  reviewsCount: number;
  tags: string[];
}

export interface CandidateSkill {
  name: string;
  level: number; // 0 - 100
  verified: boolean;
}

export interface CandidateEducation {
  degree: string;
  institution: string;
  location: string;
  year: string;
  grade: string;
}

export interface CandidateExperience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
}

export interface CandidateProfile {
  id: string;
  name: string;
  headline: string;
  email: string;
  phone: string;
  avatar: string;
  location: string;
  bio: string;
  completionPercentage: number;
  skills: CandidateSkill[];
  education: CandidateEducation[];
  experience: CandidateExperience[];
  resumeUrl: string;
  resumeFileName: string;
  portfolioUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}

export interface ApplicationTimelineItem {
  stage: ApplicationStage;
  label: string;
  date: string;
  completed: boolean;
  current?: boolean;
  note?: string;
}

export interface JobApplication {
  id: string;
  jobId: string;
  role: string;
  company: string;
  companyLogo: string;
  location: string;
  salary: string;
  appliedDate: string;
  status: ApplicationStage;
  lastUpdated: string;
  timeline: ApplicationTimelineItem[];
  nextStep?: string;
  interviewDate?: string;
}

export interface RecruiterMetric {
  activeJobs: number;
  applications: number;
  shortlisted: number;
  interviews: number;
  selected: number;
}

export interface RecruiterApplicant {
  id: string;
  candidateName: string;
  candidateEmail: string;
  avatar: string;
  role: string;
  jobId: string;
  skills: string[];
  education: string;
  experience: string;
  appliedDate: string;
  status: 'New' | 'Shortlisted' | 'Interview Scheduled' | 'Rejected' | 'Selected';
  matchScore: number;
  resumeUrl: string;
}

export interface InstitutionAnalytics {
  studentsCount: number;
  readinessRate: number;
  applicationsCount: number;
  interviewsCount: number;
  placementsCount: number;
  averagePackage: string;
  highestPackage: string;
  topRecruiters: string[];
  monthlyActivity: { month: string; applications: number; interviews: number; placements: number }[];
  branchPlacement: { branch: string; placed: number; total: number; rate: number }[];
  skillDemand: { skill: string; demandPercentage: number }[];
}

export interface AdminJobReviewItem {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  vacancies: number;
  submittedDate: string;
  status: 'Pending Admin Approval' | 'Approved' | 'Rejected';
  workMode: WorkMode;
}

export interface AdminCompanyVerificationItem {
  id: string;
  companyName: string;
  registrationNumber: string;
  state: string;
  submittedDate: string;
  status: 'Pending' | 'Verified' | 'Rejected';
  industry: string;
  website: string;
}
