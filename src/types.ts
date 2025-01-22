export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}