export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  colSpan: string;
  image: string;
}

export interface ExperienceEntry {
  role: string;
  company: string;
  dates: string;
  isCurrent: boolean;
}

export interface StatItem {
  value: string;
  label: string;
}
