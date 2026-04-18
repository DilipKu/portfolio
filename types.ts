
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  challenges: string;
  solutions: string;
  image: string;
  github?: string;
  link?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
}

export interface SkillGroup {
  category: string;
  skills: { name: string; icon: string }[];
}
