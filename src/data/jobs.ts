import { Job } from '../types';

export const MOCK_JOBS: Job[] = [
  {
    id: 'job-1',
    title: 'Software Engineer (Full Stack)',
    company: 'Kinetix Technologies',
    companyId: 'comp-1',
    companyLogo: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=128&auto=format&fit=crop&q=80',
    location: 'Chennai, Tamil Nadu',
    state: 'Tamil Nadu',
    salaryMin: 600000,
    salaryMax: 1000000,
    salaryDisplay: '₹6L – ₹10L',
    experience: 'Fresher – 2 Yrs',
    jobType: 'Full-time',
    workMode: 'Hybrid',
    department: 'Engineering',
    description: 'We are seeking an ambitious Software Engineer to build resilient distributed microservices, develop clean React frontends, and collaborate directly with product leads in our Chennai engineering center.',
    responsibilities: [
      'Design, build, and deploy production-ready web applications using TypeScript, React, and Node.js.',
      'Architect robust REST and GraphQL API services backed by PostgreSQL and Redis.',
      'Participate in architecture reviews, code pair sessions, and automated CI/CD pipeline improvements.',
      'Diagnose latency bottlenecks and enhance database indexing for high-traffic endpoints.'
    ],
    requirements: [
      'Bachelor’s degree in Computer Science, Information Technology, or equivalent practical experience.',
      'Strong foundational knowledge of Data Structures, Algorithms, and System Design principles.',
      'Proficiency in modern TypeScript/JavaScript, React, and server-side runtimes.',
      'Experience with relational databases (PostgreSQL/MySQL) and Git version control.'
    ],
    skills: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker', 'REST APIs'],
    benefits: [
      'Health insurance cover of ₹5,00,000 for employee & family',
      'Flexible hybrid working schedule (2 days office, 3 days remote)',
      'Annual learning & development stipend of ₹35,000',
      'Ergonomic workstation setup reimbursement'
    ],
    vacancies: 4,
    postedDate: '2 days ago',
    deadline: '2026-10-15',
    isFeatured: true,
    isVerified: true,
    matchScore: 94
  },
  {
    id: 'job-2',
    title: 'Frontend Developer',
    company: 'NovaCloud Labs',
    companyId: 'comp-2',
    companyLogo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=128&auto=format&fit=crop&q=80',
    location: 'Coimbatore, Tamil Nadu',
    state: 'Tamil Nadu',
    salaryMin: 500000,
    salaryMax: 900000,
    salaryDisplay: '₹5L – ₹9L',
    experience: 'Fresher – 1 Yr',
    jobType: 'Full-time',
    workMode: 'Remote',
    department: 'Engineering',
    description: 'NovaCloud is hiring a Frontend Developer passionate about craft, micro-interactions, responsive accessibility, and performance-first web applications.',
    responsibilities: [
      'Craft fluid, responsive web interfaces using modern React, Tailwind CSS, and Framer Motion.',
      'Integrate state management patterns and optimize bundle delivery for fast first contentful paint.',
      'Collaborate with UI/UX designers to translate Figma design systems into scalable component libraries.'
    ],
    requirements: [
      'Strong grasp of semantic HTML5, modern CSS3/Tailwind, and modern JavaScript (ES6+).',
      'Hands-on experience building web apps with React and component-driven architecture.',
      'Eye for detail regarding typography, spacing, states, and responsive breakpoints.'
    ],
    skills: ['React', 'Tailwind CSS', 'TypeScript', 'Framer Motion', 'Figma'],
    benefits: [
      '100% Remote-first work flexibility across India',
      'Latest MacBook Pro M3 provided',
      'Quarterly team offsites in Kodaikanal & Ooty',
      'Wellness and gym membership allowance'
    ],
    vacancies: 3,
    postedDate: '1 day ago',
    deadline: '2026-10-20',
    isFeatured: true,
    isVerified: true,
    matchScore: 91
  },
  {
    id: 'job-3',
    title: 'Product Designer (UI/UX)',
    company: 'LoopStudio Design Systems',
    companyId: 'comp-3',
    companyLogo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=128&auto=format&fit=crop&q=80',
    location: 'Chennai, Tamil Nadu',
    state: 'Tamil Nadu',
    salaryMin: 700000,
    salaryMax: 1200000,
    salaryDisplay: '₹7L – ₹12L',
    experience: '1 – 3 Yrs',
    jobType: 'Full-time',
    workMode: 'Hybrid',
    department: 'Product Design',
    description: 'Shape the next generation of SaaS workflow tools. Work closely with product directors to conduct user research, construct wireframes, and refine high-fidelity prototypes.',
    responsibilities: [
      'Lead product discovery and usability research sessions with enterprise clients.',
      'Maintain and expand our core multi-brand Figma design token system.',
      'Create polished high-fidelity prototypes with interactive micro-animations.'
    ],
    requirements: [
      'Strong portfolio demonstrating end-to-end product thinking, typography, and UX rationale.',
      'Mastery of Figma, component variants, auto-layout, and interactive prototyping.',
      'Familiarity with web technology constraints (HTML, CSS, responsiveness).'
    ],
    skills: ['Figma', 'User Research', 'Design Systems', 'Prototyping', 'Wireframing'],
    benefits: [
      'Competitive equity stock options (ESOPs)',
      'Subsidized healthy catered lunches at Guindy tech park',
      'Annual international design conference sponsorship'
    ],
    vacancies: 2,
    postedDate: '3 days ago',
    deadline: '2026-10-30',
    isFeatured: true,
    isVerified: true,
    matchScore: 88
  },
  {
    id: 'job-4',
    title: 'Data Analyst',
    company: 'Solstice Intelligence',
    companyId: 'comp-4',
    companyLogo: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=128&auto=format&fit=crop&q=80',
    location: 'Chennai, Tamil Nadu',
    state: 'Tamil Nadu',
    salaryMin: 550000,
    salaryMax: 950000,
    salaryDisplay: '₹5.5L – ₹9.5L',
    experience: 'Fresher – 2 Yrs',
    jobType: 'Full-time',
    workMode: 'Hybrid',
    department: 'Data & Analytics',
    description: 'Transform raw behavioral telemetry into actionable executive intelligence dashboards and strategic growth insights.',
    responsibilities: [
      'Write complex SQL queries, window functions, and views to aggregate multi-tenant user event data.',
      'Build automated visualization dashboards in PowerBI/Tableau and Python notebooks.',
      'Partner with product teams to design and evaluate statistical A/B test experiments.'
    ],
    requirements: [
      'Strong proficiency in Advanced SQL and relational database schemas.',
      'Working knowledge of Python (pandas, numpy, matplotlib) or R.',
      'Solid mathematical understanding of descriptive and inferential statistics.'
    ],
    skills: ['SQL', 'Python', 'PowerBI', 'Tableau', 'Data Modeling', 'Excel'],
    benefits: [
      'Comprehensive medical insurance',
      'Hybrid commute allowance for OMR corridor',
      'Performance-linked annual bonus up to 20%'
    ],
    vacancies: 2,
    postedDate: '4 days ago',
    deadline: '2026-10-25',
    isFeatured: false,
    isVerified: true,
    matchScore: 86
  },
  {
    id: 'job-5',
    title: 'Marketing Associate (Growth & Content)',
    company: 'FreshReach Digital',
    companyId: 'comp-5',
    companyLogo: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=128&auto=format&fit=crop&q=80',
    location: 'Chennai, Tamil Nadu',
    state: 'Tamil Nadu',
    salaryMin: 400000,
    salaryMax: 700000,
    salaryDisplay: '₹4L – ₹7L',
    experience: 'Fresher – 1 Yr',
    jobType: 'Full-time',
    workMode: 'On-site',
    department: 'Marketing',
    description: 'Drive organic discovery, write engaging technical and career-focused newsletters, and orchestrate campus ambassador outreach across premier colleges.',
    responsibilities: [
      'Develop compelling long-form career editorial pieces and social media campaigns.',
      'Coordinate student placement cell webinars, hackathons, and campus activations.',
      'Track search engine performance, conversion rates, and referral channel growth.'
    ],
    requirements: [
      'Exceptional written and oral communication skills in English (Tamil fluency is a bonus).',
      'Understanding of modern SEO, LinkedIn distribution, and community engagement.',
      'High enthusiasm for career technology, student empowerment, and tech ecosystems.'
    ],
    skills: ['Content Writing', 'SEO', 'Social Media Marketing', 'Community Management'],
    benefits: [
      'Vibrant open-plan office in T. Nagar',
      'Weekly learning sessions with startup founders',
      'Annual team retreat'
    ],
    vacancies: 2,
    postedDate: 'Just now',
    deadline: '2026-10-18',
    isFeatured: false,
    isVerified: true,
    matchScore: 82
  },
  {
    id: 'job-6',
    title: 'Backend Engineer (Go / Distributed Systems)',
    company: 'PaySphere Cloud',
    companyId: 'comp-6',
    companyLogo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=128&auto=format&fit=crop&q=80',
    location: 'Coimbatore, Tamil Nadu',
    state: 'Tamil Nadu',
    salaryMin: 800000,
    salaryMax: 1500000,
    salaryDisplay: '₹8L – ₹15L',
    experience: '1 – 3 Yrs',
    jobType: 'Full-time',
    workMode: 'Hybrid',
    department: 'Engineering',
    description: 'Build high-throughput transaction routing infrastructure handling millions of financial operations with sub-millisecond latencies.',
    responsibilities: [
      'Develop microservices in Go adhering to strict concurrency and memory safety models.',
      'Implement distributed message queues using Apache Kafka and RabbitMQ.',
      'Ensure 99.99% system availability through automated telemetry and alerting.'
    ],
    requirements: [
      'Experience in Go, Java, or C++ with strong knowledge of concurrent programming.',
      'Understanding of distributed consensus, transactions (ACID), and database internals.',
      'Bachelor’s in CS/ECE or equivalent engineering background.'
    ],
    skills: ['Go', 'Kafka', 'PostgreSQL', 'Docker', 'Kubernetes', 'gRPC'],
    benefits: [
      'Relocation assistance to Coimbatore',
      'Generous parental leave policy',
      'Top-tier insurance coverage'
    ],
    vacancies: 3,
    postedDate: '5 days ago',
    deadline: '2026-11-01',
    isFeatured: true,
    isVerified: true,
    matchScore: 89
  },
  {
    id: 'job-7',
    title: 'AI / Machine Learning Engineer',
    company: 'DeepTamil AI Research',
    companyId: 'comp-7',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=128&auto=format&fit=crop&q=80',
    location: 'Chennai, Tamil Nadu',
    state: 'Tamil Nadu',
    salaryMin: 800000,
    salaryMax: 1400000,
    salaryDisplay: '₹8L – ₹14L',
    experience: 'Fresher – 2 Yrs',
    jobType: 'Full-time',
    workMode: 'Hybrid',
    department: 'AI & Research',
    description: 'Fine-tune open LLMs, engineer high-precision vector retrieval pipelines, and build real-time multilingual NLP applications.',
    responsibilities: [
      'Train and evaluate transformer models on domain-specific corpora using PyTorch.',
      'Construct RAG pipelines with Qdrant/Pinecone vector databases and LangChain.',
      'Deploy low-latency model inference servers with TensorRT and ONNX runtime.'
    ],
    requirements: [
      'Strong command of Python, PyTorch, Hugging Face ecosystem, and NumPy.',
      'Familiarity with tokenization, embedding generation, and prompt optimization.',
      'Published projects or Kaggle/HuggingFace portfolio demonstrating applied ML.'
    ],
    skills: ['Python', 'PyTorch', 'Transformers', 'Vector Databases', 'NLP', 'FastAPI'],
    benefits: [
      'Access to dedicated high-end GPU clusters (NVIDIA H100)',
      'Research paper submission conference grants',
      'Generous performance stock awards'
    ],
    vacancies: 2,
    postedDate: '3 days ago',
    deadline: '2026-11-05',
    isFeatured: true,
    isVerified: true,
    matchScore: 92
  },
  {
    id: 'job-8',
    title: 'Cloud DevOps Specialist',
    company: 'HexaInfrastructure',
    companyId: 'comp-8',
    companyLogo: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=128&auto=format&fit=crop&q=80',
    location: 'Madurai, Tamil Nadu',
    state: 'Tamil Nadu',
    salaryMin: 700000,
    salaryMax: 1300000,
    salaryDisplay: '₹7L – ₹13L',
    experience: '1 – 3 Yrs',
    jobType: 'Full-time',
    workMode: 'Remote',
    department: 'Infrastructure',
    description: 'Manage multi-region AWS/GCP clusters, automate Terraform infrastructure-as-code, and enforce zero-trust security postures.',
    responsibilities: [
      'Maintain Kubernetes clusters across production and staging environments.',
      'Automate deployment workflows using GitHub Actions and ArgoCD.',
      'Implement observability metrics with Prometheus, Grafana, and OpenTelemetry.'
    ],
    requirements: [
      'Practical knowledge of Linux systems administration and containerization.',
      'Hands-on experience with AWS services (EKS, RDS, S3, CloudFront, IAM).',
      'Knowledge of Infrastructure as Code using Terraform or OpenTofu.'
    ],
    skills: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'CI/CD', 'Linux'],
    benefits: [
      'Fully remote with broadband and home office stipend',
      'Flexible working hours',
      'Annual certification exam fee reimbursement'
    ],
    vacancies: 2,
    postedDate: '6 days ago',
    deadline: '2026-11-10',
    isFeatured: false,
    isVerified: true,
    matchScore: 85
  }
];

// Alias export for compatibility
export const mockJobs = MOCK_JOBS;
