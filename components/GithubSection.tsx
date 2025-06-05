"use client";

import { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, GitFork, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
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

  useEffect(() => {
    const getRepos = async () => {
      try {
        setIsLoading(true);
        const data = await fetchGithubRepos('RanggaGibran');
        setRepos(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching repos:', err);
        setError('Failed to load repositories. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    getRepos();
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
    };
    
    return colors[language] || 'bg-gray-500';
  };

  return (
    <section id="github" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Projects</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Check out some of my recent projects and contributions on GitHub.
            </p>
          </motion.div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
            <AlertCircle className="h-12 w-12 text-destructive mb-4" />
            <p className="text-lg text-muted-foreground max-w-md">{error}</p>
            <p className="mt-4">
              Please visit my{' '}
              <a 
                href="https://github.com/RanggaGibran?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary underline"
              >
                GitHub profile
              </a>{' '}
              directly to see my repositories.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <Github className="h-5 w-5" />
                        <span className="truncate">{repo.name}</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {repo.description || 'No description provided.'}
                    </p>
                    
                    {repo.language && (
                      <div className="flex items-center gap-2 mt-auto">
                        <span className={`h-3 w-3 rounded-full ${getLanguageColor(repo.language)}`}></span>
                        <span className="text-sm">{repo.language}</span>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4" />
                        <span className="text-sm">{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="h-4 w-4" />
                        <span className="text-sm">{repo.forks_count}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline" asChild>
                      <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-1"
                      >
                        View <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Button asChild>
            <a 
              href="https://github.com/RanggaGibran?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" />
              View All Repositories
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GithubSection;