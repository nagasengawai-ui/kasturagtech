export type PageId = 'home' | 'services' | 'industries' | 'portfolio' | 'company' | 'contact';

export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  details: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  metric1: string;
  metric2: string;
  imageAlt: string;
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarColor: string;
}

export interface ProcessStep {
  id: string;
  num: string;
  title: string;
  description: string;
}
