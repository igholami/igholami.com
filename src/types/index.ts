export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  researchFocus: string;
  email: string;
  profileImage: string;
}

export interface SocialLink {
  name: string;
  url: string;
  type: 'email' | 'github' | 'scholar' | 'linkedin' | 'dblp' | 'cv';
}

export interface Publication {
  id: number;
  order: number;
  slug: string;
  title: string;
  venue: string;
  year: string;
  url: string;
  content: string;
  videoUrl?: string;
}

export type Award = string;

export interface MiniProject {
  id: number;
  name: string;
  description: string;
  githubUrl: string;
  technologies?: string[];
  geekyOnly?: boolean;
}