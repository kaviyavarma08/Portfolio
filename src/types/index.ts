export interface Project {
  id: string;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics?: string[];
}