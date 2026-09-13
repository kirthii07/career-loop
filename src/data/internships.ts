import { Internship } from '../types';

export const MOCK_INTERNSHIPS: Internship[] = [
  {
    id: 'intern-1',
    title: 'Frontend Developer Intern',
    company: 'NovaCloud Labs',
    companyId: 'comp-2',
    companyLogo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=128&auto=format&fit=crop&q=80',
    location: 'Remote (Tamil Nadu / Pan-India)',
    state: 'Tamil Nadu',
    remote: true,
    duration: '3 Months',
    stipend: '₹15,000 / month',
    stipendAmount: 15000,
    skills: ['React', 'JavaScript', 'HTML5/CSS3', 'Git', 'Tailwind CSS'],
    education: 'B.E. / B.Tech / BCA / MCA (Current Students or 2026/2027 Batches)',
    department: 'Engineering',
    description: 'Work alongside senior front-end engineers to implement pixel-perfect user interfaces, integrate real-time API state, and master modern component styling.',
    responsibilities: [
      'Translate UI components from Figma into clean, modular React TypeScript code.',
      'Assist in writing unit and component tests with Vitest and Testing Library.',
      'Participate in daily standups and sprint planning retrospectives.'
    ],
    learningOutcomes: [
      'Mastery of modern production React architecture and state hooks.',
      'Hands-on experience shipping features to active production users.',
      '1-on-1 weekly mentorship sessions with a Staff Frontend Engineer.',
      'Full-time PPO (Pre-Placement Offer) eligibility based on performance.'
    ],
    vacancies: 5,
    postedDate: 'Just now',
    deadline: '2026-10-10',
    isFeatured: true,
    isVerified: true,
    mentorSupport: true
  },
  {
    id: 'intern-2',
    title: 'UI/UX Design Intern',
    company: 'LoopStudio Design Systems',
    companyId: 'comp-3',
    companyLogo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=128&auto=format&fit=crop&q=80',
    location: 'Chennai, Tamil Nadu',
    state: 'Tamil Nadu',
    remote: false,
    duration: '4 Months',
    stipend: '₹20,000 / month',
    stipendAmount: 20000,
    skills: ['Figma', 'Wireframing', 'User Flows', 'Prototyping', 'Design Systems'],
    education: 'Design, HCI, Engineering, or Self-taught with strong portfolio',
    department: 'Design',
    description: 'Collaborate with our product design team in our Guindy studio to build cohesive design components, conduct student interviews, and produce interactive prototypes.',
    responsibilities: [
      'Design wireframes and interactive user journey flows for candidate onboarding.',
      'Assist in conducting usability test runs with student cohort test users.',
      'Document design token guidelines and component variations in Figma.'
    ],
    learningOutcomes: [
      'End-to-end design thinking from discovery to handoff.',
      'Expertise in design system architecture and Figma component libraries.',
      'Letter of recommendation and direct consideration for Junior Designer role.'
    ],
    vacancies: 3,
    postedDate: '2 days ago',
    deadline: '2026-10-25',
    isFeatured: true,
    isVerified: true,
    mentorSupport: true
  },
  {
    id: 'intern-3',
    title: 'Backend Engineering Intern',
    company: 'PaySphere Cloud',
    companyId: 'comp-6',
    companyLogo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=128&auto=format&fit=crop&q=80',
    location: 'Coimbatore, Tamil Nadu',
    state: 'Tamil Nadu',
    remote: false,
    duration: '6 Months',
    stipend: '₹25,000 / month',
    stipendAmount: 25000,
    skills: ['Python', 'Node.js', 'SQL', 'REST APIs', 'PostgreSQL'],
    education: 'Computer Science, IT or related Engineering streams',
    department: 'Engineering',
    description: 'Dive deep into backend web services, database queries, and caching mechanisms in an enterprise fintech engineering environment.',
    responsibilities: [
      'Write and optimize SQL queries and backend API controllers.',
      'Construct automated API integration test suites using Postman and Jest.',
      'Implement data validation schemas and security guardrails.'
    ],
    learningOutcomes: [
      'Real-world experience with fintech reliability, ACID compliance, and concurrency.',
      'Deep mastery of PostgreSQL indexing, query planning, and Redis caching.',
      'Strong PPO conversion track record for top performers.'
    ],
    vacancies: 4,
    postedDate: '3 days ago',
    deadline: '2026-10-30',
    isFeatured: true,
    isVerified: true,
    mentorSupport: true
  },
  {
    id: 'intern-4',
    title: 'AI & Data Science Intern',
    company: 'DeepTamil AI Research',
    companyId: 'comp-7',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=128&auto=format&fit=crop&q=80',
    location: 'Chennai, Tamil Nadu',
    state: 'Tamil Nadu',
    remote: true,
    duration: '3 Months',
    stipend: '₹18,000 / month',
    stipendAmount: 18000,
    skills: ['Python', 'Pandas', 'PyTorch', 'Data Preprocessing', 'Scikit-learn'],
    education: 'B.Tech/M.Tech in CS/AI/Data Science or Math/Stats',
    department: 'AI & Research',
    description: 'Assist in assembling high-quality training datasets, benchmarking open-source LLMs, and building evaluation harnesses for conversational AI.',
    responsibilities: [
      'Clean, tokenize, and preprocess Tamil and Indic language textual datasets.',
      'Evaluate model hallucinations, accuracy metrics, and benchmark latency.',
      'Assist in setting up vector database indices and retrieval experiments.'
    ],
    learningOutcomes: [
      'Hands-on experience with modern LLM fine-tuning and RAG pipelines.',
      'Co-authorship opportunities on research engineering whitepapers.',
      'Weekly research reading groups with AI PhD mentors.'
    ],
    vacancies: 2,
    postedDate: '1 day ago',
    deadline: '2026-10-15',
    isFeatured: true,
    isVerified: true,
    mentorSupport: true
  },
  {
    id: 'intern-5',
    title: 'Mobile App Intern (React Native)',
    company: 'Kinetix Technologies',
    companyId: 'comp-1',
    companyLogo: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=128&auto=format&fit=crop&q=80',
    location: 'Remote (Tamil Nadu)',
    state: 'Tamil Nadu',
    remote: true,
    duration: '3 Months',
    stipend: '₹15,000 / month',
    stipendAmount: 15000,
    skills: ['React Native', 'JavaScript', 'Mobile UI', 'Expo', 'REST'],
    education: 'Any Engineering / Science student with strong mobile apps portfolio',
    department: 'Engineering',
    description: 'Build native cross-platform mobile screens for candidate job discovery, instant notifications, and one-tap application submission.',
    responsibilities: [
      'Develop mobile UI screens using React Native and Expo framework.',
      'Integrate push notification triggers and offline caching.',
      'Test builds across Android and iOS emulator configurations.'
    ],
    learningOutcomes: [
      'Complete workflow understanding of mobile publishing and native bridge handling.',
      'Building performant touch interactions and fluid sheet modals.',
      'Pre-Placement Offer (PPO) opportunity.'
    ],
    vacancies: 2,
    postedDate: '4 days ago',
    deadline: '2026-10-20',
    isFeatured: false,
    isVerified: true,
    mentorSupport: true
  },
  {
    id: 'intern-6',
    title: 'Product Growth Intern',
    company: 'FreshReach Digital',
    companyId: 'comp-5',
    companyLogo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=128&auto=format&fit=crop&q=80',
    location: 'Chennai, Tamil Nadu',
    state: 'Tamil Nadu',
    remote: false,
    duration: '3 Months',
    stipend: '₹14,000 / month',
    stipendAmount: 14000,
    skills: ['Data Analysis', 'User Funnels', 'Content', 'Community', 'Excel'],
    education: 'Pre-final or final year undergraduate from any discipline',
    department: 'Growth',
    description: 'Analyze student acquisition channels, run college campus outreach programs, and brainstorm feature enhancements to increase daily active job applications.',
    responsibilities: [
      'Map candidate drop-off funnels and suggest UI friction reductions.',
      'Organize virtual resume building clinics for college placement cohorts.',
      'Draft weekly spotlight articles celebrating newly placed candidates.'
    ],
    learningOutcomes: [
      'Direct exposure to consumer tech growth strategies and product analytics.',
      'Mentorship from seasoned product growth heads.',
      'Certificate of excellence and stipend bonus for top campaign metrics.'
    ],
    vacancies: 3,
    postedDate: '5 days ago',
    deadline: '2026-10-22',
    isFeatured: false,
    isVerified: true,
    mentorSupport: true
  }
];

// Alias export for compatibility
export const mockInternships = MOCK_INTERNSHIPS;

