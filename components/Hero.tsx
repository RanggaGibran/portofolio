"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDownCircle, Code, Github, Sparkles, Zap, Rocket } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'FullStack Developer';
  const [currentTech, setCurrentTech] = useState(0);
  const technologies = ['C#', 'Python', 'Rust', 'Java', 'TypeScript', 'React'];
  
  useEffect(() => {
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [typedText]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTech((prev) => (prev + 1) % technologies.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const handleScroll = () => {
    const element = document.getElementById('github');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden particles">
      {/* Enhanced Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-gradient-to-r from-primary/40 to-blue-500/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="max-w-5xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              className="absolute top-20 left-10 text-primary/50"
              variants={floatingVariants}
              animate="animate"
            >
              <Code className="w-8 h-8" />
            </motion.div>
            <motion.div 
              className="absolute top-32 right-16 text-blue-500/50"
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 1 }}
            >
              <Zap className="w-6 h-6" />
            </motion.div>
            <motion.div 
              className="absolute bottom-32 left-20 text-purple-500/50"
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 2 }}
            >
              <Sparkles className="w-7 h-7" />
            </motion.div>
            <motion.div 
              className="absolute bottom-20 right-12 text-pink-500/50"
              variants={floatingVariants}
              animate="animate"
              transition={{ delay: 0.5 }}
            >
              <Rocket className="w-8 h-8" />
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div className="relative">
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-balance text-visible"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                Hi, I'm{' '}
                <span className="gradient-text relative text-glow">
                  Rangga Gibran
                </span>
              </motion.h1>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="relative mb-12">
              <h2 className="text-4xl md:text-5xl font-medium mb-4">
                <span className="gradient-text text-glow">{typedText}</span>
                <motion.span 
                  className="text-primary-visible"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  |
                </motion.span>
              </h2>
              <motion.div 
                className="text-2xl md:text-3xl font-light text-muted-visible"
                key={currentTech}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                Specializing in{' '}
                <span className="text-primary-visible font-semibold text-glow">
                  {technologies[currentTech]}
                </span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <div className="glass rounded-2xl p-8 mb-12 max-w-3xl mx-auto">
              <p className="text-xl md:text-2xl leading-relaxed text-balance text-visible">
                From <span className="text-primary-visible font-semibold text-glow">Pekanbaru</span>, I craft exceptional web applications 
                using cutting-edge technologies. Passionate about creating digital experiences that make a difference.
              </p>
            </div>
          </motion.div>

          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
          >
            <Button
              onClick={handleScroll}
              size="lg"
              className="group text-lg px-10 py-6 rounded-full btn-primary magnetic-btn pulse-glow"
            >
              <span className="flex items-center">
                Explore My Work
                <ArrowDownCircle className="ml-3 h-6 w-6 group-hover:translate-y-1 group-hover:scale-110 transition-all duration-300" />
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-10 py-6 rounded-full glass hover:bg-primary/10 border-primary/30 hover:border-primary/50 transition-all duration-500 magnetic-btn text-visible"
              asChild
            >
              <a href="https://github.com/RanggaGibran" target="_blank" rel="noopener noreferrer">
                <Github className="mr-3 h-6 w-6" />
                GitHub Profile
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {['C#', 'Python', 'Rust', 'Java'].map((tech, index) => (
              <motion.div
                key={tech}
                className="glass rounded-xl p-6 hover:bg-primary/10 transition-all duration-500 card-hover group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="flex flex-col items-center space-y-3">
                  <Code className="h-8 w-8 text-primary-visible group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-lg font-semibold text-visible">{tech}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;