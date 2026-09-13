import type { CareerPath, StudentMilestone, TestimonialItem, ResourceArticle } from '../types';

export const HERO_DASHBOARD_METRICS = {
  careerReadiness: 86,
  careerMatch: 94,
  skillProgress: 78,
  interviewReadiness: 88,
  recommendedCareer: 'Software Engineer',
  nextRecommendedAction: 'Complete SQL Assessment',
  skills: [
    { name: 'Data Structures', level: 92, tag: 'Advanced' },
    { name: 'System Design', level: 74, tag: 'In Progress' },
    { name: 'SQL & Databases', level: 68, tag: 'Action Required' },
    { name: 'Problem Solving', level: 88, tag: 'Strong' },
  ],
  recentActivity: [
    { text: 'Mock DSA Interview cleared', score: '9.2/10', time: '2 hours ago' },
    { text: 'System Design diagnostic passed', score: 'Top 5%', time: 'Yesterday' },
  ]
};

export const CAREER_PATHS_DATA: CareerPath[] = [
  {
    id: 'swe',
    title: 'Software Engineer (Backend / Cloud)',
    category: 'Engineering',
    salaryRange: '$95k – $165k / ₹14L – ₹32L',
    readinessScore: 86,
    marketDemand: 'Very High',
    growthRate: '+24% YoY',
    description: 'Design, build, and optimize scalable distributed backend systems, microservices, and modern cloud infrastructure.',
    requiredSkills: [
      { name: 'Data Structures & Algorithms', level: 92, status: 'mastered' },
      { name: 'Distributed Systems', level: 75, status: 'learning' },
      { name: 'SQL & Database Indexing', level: 68, status: 'gap' },
      { name: 'Cloud & Docker', level: 82, status: 'mastered' },
    ],
    hiringCompanies: ['Stripe', 'Atlassian', 'Databricks', 'Razorpay', 'Swiggy'],
    recommendedCertifications: ['AWS Solutions Architect', 'PostgreSQL Internals'],
  },
  {
    id: 'aiml',
    title: 'AI / Machine Learning Engineer',
    category: 'Data & AI',
    salaryRange: '$110k – $185k / ₹18L – ₹40L',
    readinessScore: 78,
    marketDemand: 'Very High',
    growthRate: '+38% YoY',
    description: 'Build predictive machine learning models, fine-tune LLMs, and architect real-time inference pipelines.',
    requiredSkills: [
      { name: 'Python & PyTorch', level: 88, status: 'mastered' },
      { name: 'LLM Fine-tuning & RAG', level: 76, status: 'learning' },
      { name: 'Vector DBs & Embeddings', level: 70, status: 'learning' },
      { name: 'Math & Linear Algebra', level: 84, status: 'mastered' },
    ],
    hiringCompanies: ['OpenAI', 'Anthropic', 'Google Cloud', 'NVIDIA', 'Cohere'],
    recommendedCertifications: ['DeepLearning.AI Spec', 'TensorFlow Developer'],
  },
  {
    id: 'pm',
    title: 'Product Manager (Tech SaaS)',
    category: 'Product & Strategy',
    salaryRange: '$90k – $155k / ₹16L – ₹35L',
    readinessScore: 82,
    marketDemand: 'High',
    growthRate: '+19% YoY',
    description: 'Own end-to-end product roadmaps, conduct user discovery, and collaborate closely with engineering and design.',
    requiredSkills: [
      { name: 'Product Analytics & SQL', level: 84, status: 'mastered' },
      { name: 'User Journey Mapping', level: 90, status: 'mastered' },
      { name: 'A/B Testing & Experimentation', level: 72, status: 'learning' },
      { name: 'System Architecture Literacy', level: 78, status: 'learning' },
    ],
    hiringCompanies: ['Linear', 'Notion', 'Figma', 'Freshworks', 'Zoho'],
    recommendedCertifications: ['Reforge Product Strategy', 'Pragmatic Institute PM'],
  },
  {
    id: 'data',
    title: 'Data Platform & Analytics Engineer',
    category: 'Data Engineering',
    salaryRange: '$85k – $145k / ₹12L – ₹28L',
    readinessScore: 85,
    marketDemand: 'High',
    growthRate: '+22% YoY',
    description: 'Model data warehouses with dbt, build streaming pipelines with Kafka, and empower executive decision intelligence.',
    requiredSkills: [
      { name: 'Advanced SQL & Window Functions', level: 94, status: 'mastered' },
      { name: 'dbt & Data Modeling', level: 80, status: 'learning' },
      { name: 'Snowflake / BigQuery', level: 86, status: 'mastered' },
      { name: 'Apache Spark', level: 65, status: 'gap' },
    ],
    hiringCompanies: ['Uber', 'Airbnb', 'Zomato', 'PhonePe', 'Carta'],
    recommendedCertifications: ['dbt Certified Developer', 'Snowflake SnowPro'],
  }
];

export const SOLUTIONS_DATA = [
  {
    id: 'discovery',
    number: '01',
    title: 'Career Discovery',
    tagline: 'Understand strengths, interests & career direction',
    description: 'Move past arbitrary career decisions. Our cognitive and psychometric engine aligns your natural aptitude, technical passions, and market viability into verified career trajectories.',
    badge: 'Precision Matching',
    metric: '94% Match Accuracy',
    features: [
      'Multi-dimensional aptitude & cognitive mapping',
      'Market opportunity & salary trajectory analysis',
      'Real-world role simulation & day-in-the-life previews',
    ],
    previewType: 'discovery'
  },
  {
    id: 'skill-intel',
    number: '02',
    title: 'Skill Intelligence',
    tagline: 'Identify skill gaps & understand what to learn next',
    description: 'Never waste time learning redundant skills. Dynamic benchmark graphs compare your codebase and assessment output directly against top 1% industry standards.',
    badge: 'Dynamic Gap Analysis',
    metric: '3.8x Faster Upskilling',
    features: [
      'Automated code & system design diagnostics',
      'Targeted micro-modules to close specific gaps',
      'Real-time skill graph updating with every project',
    ],
    previewType: 'skills'
  },
  {
    id: 'placement-ready',
    number: '03',
    title: 'Placement Readiness',
    tagline: 'Prepare for resumes, aptitude, coding & interviews',
    description: 'Transform theoretical knowledge into competitive placement readiness through mock panel interviews, ATS resume stress-testing, and timed coding rounds.',
    badge: 'Industry Benchmark',
    metric: '88% First-Round Pass Rate',
    features: [
      'High-intent ATS resume grading & optimization',
      'Live behavioral & system design mock simulations',
      'Company-specific hiring rubrics & question banks',
    ],
    previewType: 'placement'
  },
  {
    id: 'opportunities',
    number: '04',
    title: 'Career Opportunities',
    tagline: 'Connect preparation with relevant opportunities',
    description: 'Direct pipeline into tier-1 hiring networks. Verified readiness scores bypass initial screening filters, placing you directly in front of engineering leaders and hiring teams.',
    badge: 'Direct Pipeline',
    metric: '420+ Hiring Partners',
    features: [
      'Pre-vetted fast-track interview invites',
      'Transparent compensation & leveling parity',
      'Dedicated placement mentor until offer letter signed',
    ],
    previewType: 'opportunities'
  },
];

export const LOOP_STEPS = [
  {
    id: 'discover',
    number: '01',
    name: 'DISCOVER',
    title: 'Discover Direction',
    description: 'Map aptitude, cognitive tendencies, and career aspirations to high-growth market domains.',
    icon: 'Compass',
    stat: 'Aptitude Diagnostic'
  },
  {
    id: 'assess',
    number: '02',
    name: 'ASSESS',
    title: 'Assess Readiness',
    description: 'Evaluate current baseline across code, architecture, communication, and problem solving.',
    icon: 'Activity',
    stat: 'Skill Baseline 72%'
  },
  {
    id: 'learn',
    number: '03',
    name: 'LEARN',
    title: 'Targeted Learning',
    description: 'Execute high-impact micro-sprints tailored strictly to your identified competency gaps.',
    icon: 'BookOpen',
    stat: 'Curated Roadmaps'
  },
  {
    id: 'prepare',
    number: '04',
    name: 'PREPARE',
    title: 'Placement Readiness',
    description: 'Master live whiteboard interviews, algorithmic depth, and company-targeted mock scenarios.',
    icon: 'ShieldCheck',
    stat: '88% Interview Ready'
  },
  {
    id: 'apply',
    number: '05',
    name: 'APPLY',
    title: 'High-Intent Apply',
    description: 'Submit pre-verified credential profiles directly to 420+ hiring managers and founders.',
    icon: 'Send',
    stat: 'Pre-Vetted Pipeline'
  },
  {
    id: 'grow',
    number: '06',
    name: 'GROW',
    title: 'Continuous Growth',
    description: 'Loop your learnings into promotion cycles, senior specialization, and lifetime career milestones.',
    icon: 'TrendingUp',
    stat: 'Continuous Loop'
  }
];

export const DASHBOARD_TREND_DATA = [
  { month: 'Month 1', readiness: 42, target: 80, aptitude: 60, technical: 38 },
  { month: 'Month 2', readiness: 54, target: 80, aptitude: 68, technical: 49 },
  { month: 'Month 3', readiness: 66, target: 80, aptitude: 75, technical: 64 },
  { month: 'Month 4', readiness: 73, target: 80, aptitude: 79, technical: 72 },
  { month: 'Month 5', readiness: 81, target: 80, aptitude: 84, technical: 83 },
  { month: 'Month 6', readiness: 86, target: 80, aptitude: 88, technical: 92 },
];

export const INSTITUTION_ANALYTICS_DATA = {
  kpis: [
    { label: 'Students Assessed', value: '14,820', change: '+28.4%', trend: 'up' as const },
    { label: 'Placement Readiness', value: '84.2%', change: '+12.6%', trend: 'up' as const },
    { label: 'Skill Gap Reduction', value: '64.8%', change: '-34.2%', trend: 'up' as const },
    { label: 'Hiring Partners', value: '420+', change: '+52 new', trend: 'up' as const },
  ],
  cohortTrends: [
    { cohort: 'Sem 3', aptitude: 62, technical: 54, communication: 68, readiness: 58 },
    { cohort: 'Sem 4', aptitude: 69, technical: 63, communication: 72, readiness: 66 },
    { cohort: 'Sem 5', aptitude: 76, technical: 75, communication: 79, readiness: 75 },
    { cohort: 'Sem 6', aptitude: 83, technical: 84, communication: 82, readiness: 81 },
    { cohort: 'Sem 7', aptitude: 89, technical: 91, communication: 87, readiness: 87 },
  ],
  domainDistribution: [
    { name: 'Backend & Cloud', value: 38, count: 5630, color: '#4F46E5' },
    { name: 'AI & Data Platforms', value: 27, count: 4001, color: '#6366F1' },
    { name: 'Full-Stack Systems', value: 19, count: 2815, color: '#2563EB' },
    { name: 'Product & Analytics', value: 16, count: 2374, color: '#7C3AED' },
  ],
  skillGapHighlights: [
    { skill: 'Distributed Systems & Microservices', benchmark: 85, currentAvg: 68, status: 'Improving' },
    { skill: 'SQL Optimization & Indexing', benchmark: 80, currentAvg: 64, status: 'Focus Area' },
    { skill: 'Data Structures & Algorithms', benchmark: 90, currentAvg: 88, status: 'On Target' },
    { skill: 'Technical Communication & System Pitch', benchmark: 85, currentAvg: 79, status: 'Improving' },
  ]
};

export const STUDENT_JOURNEY_STEPS: StudentMilestone[] = [
  {
    step: '01',
    number: '01',
    title: 'Discover Direction',
    subtitle: 'Aptitude & Cognitive Mapping',
    description: 'We unpack your natural inclinations, problem-solving tendencies, and career goals to identify the highest-probability high-paying trajectories.',
    deliverables: ['Cognitive Profile Report', 'Domain Viability Matrix', 'Target Roles Shortlist'],
    metrics: '94% Directional Alignment',
    status: 'completed',
  },
  {
    step: '02',
    number: '02',
    title: 'Understand Baseline',
    subtitle: 'Diagnostic Benchmarks',
    description: 'Take calibrated assessments mirroring Tier-1 tech interviews to measure precise gaps against real-world hiring criteria.',
    deliverables: ['Comprehensive Skill Radar', 'Gap Analysis Breakdown', 'Salary Benchmark Forecast'],
    metrics: '12 Competencies Benchmarked',
    status: 'completed',
  },
  {
    step: '03',
    number: '03',
    title: 'Build Capabilities',
    subtitle: 'Targeted Skill Sprints',
    description: 'Follow personalized, weekly dynamic learning roadmaps that target your exact gaps with real-world architecture projects.',
    deliverables: ['Production-Grade Portfolio Project', 'Code Review History', 'Technical Badges'],
    metrics: '78% Skill Mastery Reached',
    status: 'in-progress',
  },
  {
    step: '04',
    number: '04',
    title: 'Prepare Rigorously',
    subtitle: 'Mock Panels & ATS Optimization',
    description: 'Simulate high-stakes live technical panels with experienced senior engineers and fine-tune your resume to score 95+ on ATS filters.',
    deliverables: ['ATS Score 96 Resume', '3 Recorded Mock Panel Rounds', 'Company Rubric Guides'],
    metrics: '88% Interview Readiness',
    status: 'in-progress',
  },
  {
    step: '05',
    number: '05',
    title: 'Apply Confidently',
    subtitle: 'Verified Pipeline Submissions',
    description: 'Bypass cold applications. Your verified Career Loop readiness dossier is delivered directly to hiring managers with guaranteed reviews.',
    deliverables: ['Fast-Track Referral Codes', 'Direct Recruiter Introductions', 'Offer Negotiation Guide'],
    metrics: '420+ Hiring Networks',
    status: 'upcoming',
  },
  {
    step: '06',
    number: '06',
    title: 'Grow Exponentially',
    subtitle: 'Continuous Loop',
    description: 'Career growth is never a one-time event. As your role evolves, return to the loop to level up into senior, lead, or architectural positions.',
    deliverables: ['Promotion Roadmap', 'L5/L6 Competency Blueprints', 'Lifetime Alumni Network'],
    metrics: 'Continuous Pathway',
    status: 'upcoming',
  },
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    quote: 'Career Loop removed the blind guesswork from my preparation. Seeing an exact 86% readiness score and knowing SQL was my only critical blocker gave me laser focus. I secured my backend engineering role in 7 weeks.',
    name: 'Ananya Verma',
    role: 'Associate Software Engineer',
    company: 'Fintech Scaleup',
    placedAt: 'Razorpay Partner Network',
    package: '₹19.5 LPA ($92k equivalent)',
    avatar: 'AV',
    metrics: '86% Placement Readiness'
  },
  {
    quote: 'Most college guidance is outdated and generic. Career Loop felt like a modern product company—clean diagnostics, realistic live mock interviews, and zero fluff. The interview rubric was spot-on with what my interviewer asked.',
    name: 'Devansh Kulkarni',
    role: 'Cloud Infrastructure Associate',
    company: 'Enterprise SaaS',
    placedAt: 'Atlassian Ecosystem',
    package: '₹22 LPA ($105k equivalent)',
    avatar: 'DK',
    metrics: '94% Career Match'
  },
  {
    quote: 'As a computer science student with good grades but no clarity on whether to pursue AI or Systems, Career Loop’s discovery engine broke down the market demand and daily workflows clearly. Game changer.',
    name: 'Priya Sundaram',
    role: 'AI / Data Engineer',
    company: 'Autonomous Systems Lab',
    placedAt: 'Direct Campus Referral',
    package: '₹26 LPA ($120k equivalent)',
    avatar: 'PS',
    metrics: 'Top 3% Cohort'
  }
];

export const RESOURCES_DATA: ResourceArticle[] = [
  {
    tag: 'Career Strategy',
    readTime: '6 min read',
    title: 'How to Choose the Right Career Path in 2026',
    summary: 'Why traditional job hunting advice fails in the era of AI tools and how high-performing candidates build specialized domain leverage.',
    date: 'Updated September 2026',
    category: 'Career Planning'
  },
  {
    tag: 'Interview Prep',
    readTime: '8 min read',
    title: 'What Engineering Recruiters Actually Look For',
    summary: 'An unvarnished breakdown of modern hiring rubrics across System Design, practical problem solving, and behavioral maturity.',
    date: 'Updated September 2026',
    category: 'Interview Preparation'
  },
  {
    tag: 'Skill Intelligence',
    readTime: '5 min read',
    title: 'Building High-Leverage Skills That Actually Matter',
    summary: 'How to avoid tutorial purgatory and build production-grade projects that prove architecture competency to prospective hiring teams.',
    date: 'Updated September 2026',
    category: 'Skill Development'
  }
];
