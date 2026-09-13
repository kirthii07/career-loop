export interface ResourceItem {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  date: string;
  image: string;
  author: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  collegeOrCompany: string;
  location: string;
  avatar: string;
  badge: string;
}

export const MOCK_RESOURCES: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'How to build a high-conversion tech resume for campus & off-campus hiring',
    category: 'Resume Strategy',
    readTime: '6 min read',
    summary: 'Action verbs, metric-driven impact points, ATS formatting secrets, and projects that catch senior engineering managers’ attention.',
    date: 'Sep 10, 2026',
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=80',
    author: 'Kirthivasan R • Head of Career Services'
  },
  {
    id: 'res-2',
    title: 'Preparing for your first technical interview: Live DSA and System Design basics',
    category: 'Interview Prep',
    readTime: '8 min read',
    summary: 'A structured blueprint for conquering live problem-solving, whiteboard communication, and answering behavioral situational questions with clarity.',
    date: 'Sep 06, 2026',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
    author: 'Ananya Ramesh • Staff Architect'
  },
  {
    id: 'res-3',
    title: 'Finding the right internship: Why mentorship and project ownership matter most',
    category: 'Internship Guide',
    readTime: '5 min read',
    summary: 'How to evaluate early-stage startup versus established enterprise internships to maximize your Pre-Placement Offer (PPO) conversion chances.',
    date: 'Aug 29, 2026',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&auto=format&fit=crop&q=80',
    author: 'Dr. S. Balasubramanian • Dean of Placements'
  },
  {
    id: 'res-4',
    title: 'The core technical skills Tamil Nadu & Indian high-growth tech companies want in 2026',
    category: 'Industry Intelligence',
    readTime: '7 min read',
    summary: 'An empirical analysis of 5,000+ open job descriptions: why TypeScript, backend distributed systems, and applied AI tools are dominating.',
    date: 'Aug 22, 2026',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80',
    author: 'CareerLoop Research Group'
  }
];

export const MOCK_TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote: 'CareerLoop made it infinitely easier to discover engineering opportunities that actually matched what I was building. The transparent application timeline saved me weeks of anxious waiting.',
    name: 'Harish Sundaram',
    role: 'Software Engineer Placed at Kinetix',
    collegeOrCompany: 'CEG, Anna University',
    location: 'Chennai, India',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=128&auto=format&fit=crop&q=80',
    badge: 'Verified Candidate'
  },
  {
    id: 'test-2',
    quote: 'We can spend less time sorting irrelevant resumes and more time interviewing candidates whose verified skills match our microservice stack. Our time-to-hire dropped by 45%.',
    name: 'Divya Chandran',
    role: 'Director of Talent Acquisition',
    collegeOrCompany: 'PaySphere Cloud',
    location: 'Coimbatore, India',
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=128&auto=format&fit=crop&q=80',
    badge: 'Verified Recruiter'
  },
  {
    id: 'test-3',
    quote: 'For our college placement cell, the unified dashboard gave us real-time visibility into which students needed interview coaching and where companies were actively recruiting.',
    name: 'Prof. J. Venkatesh',
    role: 'Head of Placements & Industry Relations',
    collegeOrCompany: 'PSG College of Technology',
    location: 'Coimbatore, India',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=128&auto=format&fit=crop&q=80',
    badge: 'Placement Cell Partner'
  }
];

export const MOCK_STATISTICS = [
  {
    value: '10K+',
    label: 'Verified Opportunities',
    subtext: 'High-signal jobs & internships',
    trend: '+32% this quarter'
  },
  {
    value: '5K+',
    label: 'Active Candidates',
    subtext: 'Across Tamil Nadu & India',
    trend: '94% response rate'
  },
  {
    value: '500+',
    label: 'Hiring Companies',
    subtext: 'Startups & enterprise brands',
    trend: 'Zero unverified listings'
  },
  {
    value: '95%',
    label: 'Profile Completion Rate',
    subtext: 'Structured skills verification',
    trend: '3x higher interview call rate'
  }
];
