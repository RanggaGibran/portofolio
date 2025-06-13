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
    <section id="github" className="py-24 md:py-32 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">GitHub Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Check out some of my recent projects and contributions on GitHub.
            </p>
          </motion.div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent"></div>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center min-h-[300px] text-center">
            <AlertCircle className="h-16 w-16 text-destructive mb-6" />
            <p className="text-xl text-muted-foreground max-w-md mb-6">{error}</p>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a 
                href="https://github.com/RanggaGibran?tab=repositories" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg"
              >
                Visit GitHub Profile
              </a>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo, index) => (
              <motion.div
                key={repo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col card-hover">
                  <CardHeader>
                    <CardTitle className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Github className="h-6 w-6 text-primary" />
                        <span className="text-xl truncate">{repo.name}</span>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-lg text-muted-foreground mb-6 line-clamp-3">
                      {repo.description || 'No description provided.'}
                    </p>
                    
                    {repo.language && (
                      <div className="flex items-center gap-3">
                        <span className={`h-4 w-4 rounded-full ${getLanguageColor(repo.language)}`}></span>
                        <span className="text-base font-medium">{repo.language}</span>
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex gap-6">
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        <span className="text-base">{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <GitFork className="h-5 w-5 text-primary" />
                        <span className="text-base">{repo.forks_count}</span>
                      </div>
                    </div>
                    <Button size="lg" variant="outline" className="rounded-full" asChild>
                      <a 
                        href={repo.html_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        View <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="rounded-full text-lg px-8 shadow-lg shadow-primary/20 hover:shadow-primary/40"
            asChild
          >
            <a 
              href="https://github.com/RanggaGibran?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3"
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