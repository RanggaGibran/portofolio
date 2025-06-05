"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDownCircle, Code, Github, Linkedin } from 'lucide-react';

// We'll need to add framer-motion to package.json
const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'FullStack Developer';
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  const handleScroll = () => {
    const element = document.getElementById('github');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:py-32 lg:py-40 relative">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-blue-500/20 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm Rangga Gibran
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl md:text-3xl font-medium mb-6 text-primary">
              {typedText}<span className="animate-pulse">|</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
              From Pekanbaru, I craft exceptional web applications using various technologies 
              including C#, C++, Python, Rust, Ruby, and Java. Let's build something amazing together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button onClick={handleScroll} className="group">
              View My Work
              <ArrowDownCircle className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" asChild>
              <a href="https://github.com/RanggaGibran" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex justify-center gap-6"
          >
            <div className="flex items-center gap-2 text-muted-foreground">
              <Code className="h-5 w-5" />
              <span>C#</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Code className="h-5 w-5" />
              <span>Python</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Code className="h-5 w-5" />
              <span>Rust</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Code className="h-5 w-5" />
              <span>Java</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;