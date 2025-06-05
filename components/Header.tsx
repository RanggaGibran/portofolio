"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code, Github, File, Mail } from 'lucide-react';
import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-background/95 backdrop-blur-sm border-b shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold flex items-center gap-2">
          <Code className="h-6 w-6" />
          <span>Rangga Gibran</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex space-x-6">
            <li>
              <button 
                onClick={() => handleNavClick('home')}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Home
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('github')}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Projects
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('resume')}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Resume
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNavClick('contact')}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </li>
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={toggleMenu} className="md:hidden">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b">
          <nav className="container mx-auto px-4 py-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <button 
                  onClick={() => handleNavClick('home')}
                  className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('github')}
                  className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Projects
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('resume')}
                  className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
                >
                  <File className="h-4 w-4" />
                  Resume
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;