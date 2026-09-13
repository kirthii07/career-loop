export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: {
    title: string;
    description: string;
    icon: string;
    href: string;
  }[];
}

export interface MetricCard {
  label: string;
  value: string;
  subtext?: string;
  change?: string;
  trend?: 'up' | 'down' | 'neutral';
  color?: string;
}

export interface CareerPath {
  id: string;
  title: string;
  category: string;
  salaryRange: string;
  readinessScore: number;
  marketDemand: 'Very High' | 'High' | 'Steady';
  growthRate: string;
  description: string;
  requiredSkills: { name: string; level: number; status: 'mastered' | 'learning' | 'gap' }[];
  hiringCompanies: string[];
  recommendedCertifications: string[];
}

export interface StudentMilestone {
  step: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  metrics: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
  placedAt: string;
  package: string;
  avatar: string;
  metrics: string;
}

export interface ResourceArticle {
  tag: string;
  readTime: string;
  title: string;
  summary: string;
  date: string;
  category: string;
}
