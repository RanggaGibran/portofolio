export async function fetchGithubRepos(username: string) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    throw error;
  }
}