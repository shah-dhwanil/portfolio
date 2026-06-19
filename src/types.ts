export interface Profile {
  name: string;
  title: string;
  avatar: string;
  email: string;
  phone: string;
  linkedin: string;
  linkedinHandle: string;
  location: string;
  socials: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface About {
  bio: string;
  services: Service[];
}

export interface Education {
  title: string;
  institution: string;
  period: string;
  description: string;
  slug: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  summary?: string;
  slug: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface Resume {
  education: Education[];
  experience: Experience[];
  skills: Skill[];
}

export interface Project {
  title: string;
  categories: string[];
  image: string;
  url: string;
  slug: string;
  excerpt: string;
  description: string;
  comingSoon?: boolean;
}

export interface ProjectsData {
  categories: string[];
  projects: Project[];
}

export interface BlogPost {
  title: string;
  slug: string;
  category: string;
  date: string;
  image: string;
  excerpt: string;
  url: string;
  body: string;
}

export interface BlogData {
  posts: BlogPost[];
}

export interface Contact {
  mapEmbedUrl: string;
  emailjsServiceId: string;
  emailjsTemplateId: string;
  emailjsPublicKey: string;
}
