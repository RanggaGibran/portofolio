"use client";

import { Code, Heart, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-card text-card-foreground border-t border-border/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-muted/20 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="relative">
              <Code className="h-6 w-6 text-primary" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg"></div>
            </div>
            <span className="font-bold text-xl gradient-text">Rangga Gibran</span>
          </motion.div>
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-right">
            <motion.div 
              className="flex items-center gap-2 text-muted-foreground"
              whileHover={{ scale: 1.05 }}
            >
              <span>Made with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="h-4 w-4 text-red-500 fill-current" />
              </motion.div>
              <span>and</span>
              <Coffee className="h-4 w-4 text-amber-600" />
            </motion.div>
            
            <div className="text-sm text-muted-foreground">
              © {currentYear} Rangga Gibran. All rights reserved.
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="mt-8 pt-8 border-t border-border/30 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-sm text-muted-foreground">
            Crafted with modern technologies • Next.js • TypeScript • Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;