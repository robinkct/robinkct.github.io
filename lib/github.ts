import { GitHubRepo, Project } from '@/types';

const GITHUB_USERNAME = 'robinkct';

export async function getGitHubRepos(): Promise<Project[]> {
    try {
        const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
            {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                },
                next: { revalidate: 3600 }, // Revalidate every hour
            }
        );

        if (!response.ok) {
            throw new Error('Failed to fetch GitHub repos');
        }

        const repos: GitHubRepo[] = await response.json();

        // Filter out forks and convert to Project type
        const projects: Project[] = repos
            .filter((repo) => !repo.name.includes('git-') && repo.name !== 'robinkct') // Filter out git practice repos
            .map((repo) => ({
                id: repo.id,
                title: repo.name,
                description: repo.description || 'No description available',
                url: repo.html_url,
                homepage: repo.homepage || undefined,
                language: repo.language || undefined,
                stars: repo.stargazers_count,
                topics: repo.topics || [],
            }))
            .sort((a, b) => b.stars - a.stars); // Sort by stars

        return projects;
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        return [];
    }
}
