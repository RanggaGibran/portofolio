"use client";

import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Github, Linkedin, Twitter, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      content: 'Pekanbaru, Indonesia',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'anggakatio73@gmail.com',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      href: 'mailto:anggakatio73@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+62 857 6206 5369',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      href: 'tel:+6285762065369',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/RanggaGibran',
      color: 'hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: '#',
      color: 'hover:bg-blue-600 hover:text-white',
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: '#',
      color: 'hover:bg-blue-400 hover:text-white',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 to-background"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-6 glass rounded-full px-6 py-3">
            <MessageCircle className="h-6 w-6 text-primary" />
            <span className="text-lg font-medium">Let's Connect</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance">
            Ready to bring your ideas to life? Let's discuss your next project 
            and create something extraordinary together.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            const CardComponent = item.href ? 'a' : 'div';
            
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className="text-center h-full card-hover group cursor-pointer">
                  <CardComponent 
                    {...(item.href ? { href: item.href } : {})}
                    className="block h-full"
                  >
                    <CardContent className="pt-12 pb-8">
                      <motion.div 
                        className="flex justify-center mb-8"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={`p-6 ${item.bgColor} rounded-2xl group-hover:scale-110 transition-all duration-300`}>
                          <Icon className={`h-10 w-10 ${item.color}`} />
                        </div>
                      </motion.div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-lg text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                        {item.content}
                      </p>
                    </CardContent>
                  </CardComponent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <div className="glass rounded-3xl p-12 max-w-2xl mx-auto mb-12">
            <h3 className="text-3xl font-bold mb-8 gradient-text">Follow My Journey</h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Stay updated with my latest projects, insights, and tech adventures 
              across different platforms.
            </p>
            
            <div className="flex justify-center gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      className={`rounded-2xl h-20 w-20 card-hover transition-all duration-300 ${social.color}`}
                      asChild
                    >
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center justify-center gap-2"
                      >
                        <Icon className="h-8 w-8" />
                        <span className="sr-only">{social.label}</span>
                      </a>
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              size="lg"
              className="text-lg px-12 py-6 rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 magnetic-btn pulse-glow"
              asChild
            >
              <a 
                href="mailto:anggakatio73@gmail.com"
                className="flex items-center gap-3"
              >
                <Send className="h-6 w-6" />
                Start a Conversation
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;