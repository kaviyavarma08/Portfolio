import { Project } from '../types';

export const fetchGithubProjects = async (username: string): Promise<Project[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch GitHub projects');
    }
    
    const data = await response.json();
    
    // Transform the data to match our Project interface
    return data.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      homepage: repo.homepage,
      topics: repo.topics || []
    }));
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    throw error;
  }
};