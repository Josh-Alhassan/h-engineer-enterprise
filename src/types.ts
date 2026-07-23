export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  features: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'solar' | 'networks' | 'security' | 'electrical' | 'hvac';
  description: string;
  location: string;
  imageUrl: string;
  specs: string[];
}

export interface ProcessStep {
  number: number;
  title: string;
  description: string;
  icon: string;
}

export interface ArticleItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: 'Guide' | 'Industry' | 'Company' | 'Event';
  date: string;
  author: string;
  readTime: string;
  imageUrl: string;
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface IndustryServed {
  name: string;
  icon: string;
}
