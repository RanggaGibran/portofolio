"use client";

import { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, GitFork, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { fetchGithubRepos } from '@/lib/github';

interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
}

const GithubSection = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadRepos = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const data = await fetchGithubRepos('RanggaGibran');
      setRepos(data);
    } catch (err) {
      console.error('Error loading repos:', err);
      setError('Unable to load repositories at the moment');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadRepos();
  }, []);

  const getLanguageColor = (language: string) => {
    const colors: Record<string, string> = {
      JavaScript: 'bg-yellow-400',
      TypeScript: 'bg-blue-500',
      Python: 'bg-green-500',
      'C#': 'bg-purple-600',
      Java: 'bg-orange-500',
      Rust: 'bg-orange-700',
      Ruby: 'bg-red-600',
      'C++': 'bg-pink-600',
      Go: 'bg-blue-400',
      HTML: 'bg-red-500',
      CSS: 'bg-blue-300',
      PHP: 'bg-indigo-500',
      Markdown: 'bg-gray-600',
    };
    
    return colors[language] || 'bg-gray-500';
  };

  return (
    <section id="github" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            GitHub Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore my latest projects and contributions
          </p>
          
          {error && (
            <div className="mt-4 flex items-center justify-center gap-4">
              <p className="text-red-500">{error}</p>
              <Button
                variant="outline"
                size="sm"
                onClick={loadRepos}
                className="rounded-full"
              >
                <RefreshCw className="h-4 w-4 mr-2" />
                Retry
              </Button>
            </div>
          )}
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo) => (
              <Card key={repo.id} className="h-full flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Github className="h-6 w-6 text-blue-500" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate">
                      {repo.name}
                    </h3>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {repo.description || 'No description provided.'}
                  </p>
                  
                  {repo.language && (
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`h-3 w-3 rounded-full ${getLanguageColor(repo.language)}`}></div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {repo.language}
                      </span>
                    </div>
                  )}

                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <span 
                          key={topic}
                          className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}
                </CardContent>
                
                <CardFooter className="flex justify-between items-center">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {repo.stargazers_count}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="h-4 w-4 text-gray-500" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">
                        {repo.forks_count}
                      </span>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="rounded-full" 
                    asChild
                  >
                    <a 
                      href={repo.html_url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      View <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="rounded-full bg-blue-500 hover:bg-blue-600 text-white px-8 py-3"
            asChild
          >
            <a 
              href="https://github.com/RanggaGibran?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-5 w-5" />
              View All Repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;