import { InstitutionAnalytics, AdminJobReviewItem, AdminCompanyVerificationItem } from '../types';

export const MOCK_INSTITUTION_DATA: InstitutionAnalytics = {
  studentsCount: 1420,
  readinessRate: 88,
  applicationsCount: 3840,
  interviewsCount: 910,
  placementsCount: 842,
  averagePackage: '₹7.4 LPA',
  highestPackage: '₹28.5 LPA',
  topRecruiters: ['Kinetix Tech', 'PaySphere', 'NovaCloud Labs', 'Solstice', 'Zoho', 'Freshworks'],
  monthlyActivity: [
    { month: 'Jun', applications: 280, interviews: 60, placements: 45 },
    { month: 'Jul', applications: 620, interviews: 140, placements: 110 },
    { month: 'Aug', applications: 1150, interviews: 290, placements: 245 },
    { month: 'Sep', applications: 1790, interviews: 420, placements: 360 },
  ],
  branchPlacement: [
    { branch: 'Computer Science', placed: 290, total: 300, rate: 96.6 },
    { branch: 'Information Tech', placed: 215, total: 230, rate: 93.4 },
    { branch: 'Electronics & Comm', placed: 185, total: 210, rate: 88.0 },
    { branch: 'Electrical & Electronics', placed: 92, total: 115, rate: 80.0 },
    { branch: 'Mechanical Engg', placed: 60, total: 85, rate: 70.5 },
  ],
  skillDemand: [
    { skill: 'React & TypeScript', demandPercentage: 94 },
    { skill: 'SQL & Database Architecture', demandPercentage: 91 },
    { skill: 'Python / Machine Learning', demandPercentage: 86 },
    { skill: 'Cloud & Docker DevOps', demandPercentage: 78 },
    { skill: 'Figma & UI Systems', demandPercentage: 65 },
  ]
};

export const MOCK_ADMIN_JOB_REVIEWS: AdminJobReviewItem[] = [
  {
    id: 'rev-101',
    title: 'Cloud Security Architect',
    company: 'SecurePulse Systems',
    location: 'Chennai, Tamil Nadu',
    salary: '₹14L – ₹22L',
    vacancies: 2,
    submittedDate: '2 hours ago',
    status: 'Pending Admin Approval',
    workMode: 'Hybrid'
  },
  {
    id: 'rev-102',
    title: 'Senior React Native Engineer',
    company: 'FinTrack Digital',
    location: 'Coimbatore, Tamil Nadu',
    salary: '₹10L – ₹16L',
    vacancies: 3,
    submittedDate: '5 hours ago',
    status: 'Pending Admin Approval',
    workMode: 'Remote'
  },
  {
    id: 'rev-103',
    title: 'Computer Vision Research Intern',
    company: 'DeepTamil AI Research',
    location: 'IITM Research Park, Chennai',
    salary: '₹25,000 / month',
    vacancies: 2,
    submittedDate: 'Yesterday',
    status: 'Approved',
    workMode: 'On-site'
  }
];

export const MOCK_ADMIN_COMPANIES: AdminCompanyVerificationItem[] = [
  {
    id: 'ver-201',
    companyName: 'AeroGlide Avionics India',
    registrationNumber: 'U72900TN2023PTC159012',
    state: 'Tamil Nadu',
    submittedDate: 'Today, 11:30 AM',
    status: 'Pending',
    industry: 'Aerospace & Embedded Tech',
    website: 'https://aeroglide.demo'
  },
  {
    id: 'ver-202',
    companyName: 'Solstice Intelligence Pvt Ltd',
    registrationNumber: 'U74999TN2021PTC142871',
    state: 'Tamil Nadu',
    submittedDate: '3 days ago',
    status: 'Verified',
    industry: 'Data & Enterprise AI',
    website: 'https://solstice-analytics.demo'
  },
  {
    id: 'ver-203',
    companyName: 'Kinetix Technologies LLP',
    registrationNumber: 'AAX-8921-TN-CH',
    state: 'Tamil Nadu',
    submittedDate: '1 week ago',
    status: 'Verified',
    industry: 'Fintech & Cloud',
    website: 'https://kinetix-tech.demo'
  }
];
