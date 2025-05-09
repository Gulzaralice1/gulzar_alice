export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  category: 'web' | 'mobile' | 'other';
}

export interface ExperienceItem {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  type: 'education' | 'experience';
}

export interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools';
}