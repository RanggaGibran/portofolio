"use client";

import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Code, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillsData = [
  { name: 'C#', level: 95, category: 'Backend' },
  { name: 'C++', level: 90, category: 'Systems' },
  { name: 'Python', level: 85, category: 'Backend' },
  { name: 'Rust', level: 80, category: 'Systems' },
  { name: 'Ruby', level: 75, category: 'Backend' },
  { name: 'Java', level: 85, category: 'Backend' },
  { name: 'JavaScript', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 85, category: 'Frontend' },
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'SQL', level: 80, category: 'Database' },
  { name: 'Git', level: 90, category: 'Tools' },
];

const experienceData = [
  {
    role: 'Staff PHL',
    company: 'Badan Pengelola Usaha UNRI',
    duration: '2023 1 Mei - 31 Desember 2023',
    description: 'Managing and maintaining critical server infrastructure to support business operations. Demonstrated excellent communication skills in effectively interacting with both technical and non-technical teams.',
    achievements: ['Improved server uptime by 99.9%', 'Led infrastructure modernization', 'Mentored junior staff'],
  },
  {
    role: 'Staff Kontrak BPU',
    company: 'Badan Pengelola Usaha UNRI',
    duration: '2022 15 Jan - 25 April 2023',
    description: 'Responsible for server management and system administration tasks. Collaborated with cross-functional teams to ensure optimal system performance.',
    achievements: ['Optimized system performance', 'Implemented monitoring solutions', 'Reduced downtime by 40%'],
  },
  {
    role: 'Server Manager',
    company: 'Server Management',
    duration: '2018 09 Oct - 1 November 2021',
    description: 'Led server management initiatives and infrastructure maintenance. Implemented robust monitoring systems and troubleshooting protocols.',
    achievements: ['Managed 50+ servers', 'Implemented backup strategies', 'Established monitoring protocols'],
  },
];

const educationData = [
  {
    degree: 'Vocational High School',
    institution: 'SMK Labor Binaan FKIP UNRI',
    duration: '2017-2020',
    description: 'Focused on technical and practical skills in computer science and information technology.',
    grade: 'Excellent',
  },
];

const ResumeSection = () => {
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

  return (
    <section id="resume" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted/30"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 mb-6 glass rounded-full px-6 py-3">
            <Award className="h-6 w-6 text-primary" />
            <span className="text-lg font-medium">Professional Journey</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-balance mb-8">
            My professional experience, education, and technical expertise that drive innovation.
          </p>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="group text-lg px-10 py-6 rounded-full shadow-2xl shadow-primary/30 hover:shadow-primary/50 magnetic-btn pulse-glow" 
              asChild
            >
              <a 
                href="https://cdn.pintarnya.com/jobseekers/8752078/cv/20250618025444_b49a0606-c0d0-4222-922f-7b30a735bf5d.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Download className="mr-3 h-6 w-6 group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300" />
                Download CV
                <TrendingUp className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </Button>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">Work Experience</h3>
              </div>
            </motion.div>
            
            <div className="space-y-8">
              {experienceData.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="relative overflow-hidden card-hover group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-blue-500"></div>
                    <CardHeader>
                      <CardTitle>
                        <div className="space-y-2">
                          <h4 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                            {item.role}
                          </h4>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                            <p className="text-primary font-semibold text-lg">{item.company}</p>
                            <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                              {item.duration}
                            </p>
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{item.description}</p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-sm uppercase tracking-wide text-primary">Key Achievements</h5>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education & Skills Section */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Education */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">Education</h3>
              </div>
            </motion.div>
            
            <div className="space-y-8 mb-16">
              {educationData.map((item, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="relative overflow-hidden card-hover group">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-purple-500"></div>
                    <CardHeader>
                      <CardTitle>
                        <div className="space-y-2">
                          <h4 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                            {item.degree}
                          </h4>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                            <p className="text-primary font-semibold text-lg">{item.institution}</p>
                            <p className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                              {item.duration}
                            </p>
                          </div>
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-3 leading-relaxed">{item.description}</p>
                      <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">{item.grade}</span>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Skills */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Code className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-3xl font-bold">Technical Skills</h3>
              </div>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 gap-6"
              variants={containerVariants}
            >
              {skillsData.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="space-y-3"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-lg">{skill.name}</span>
                      <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full font-medium">
                        {skill.category}
                      </span>
                    </div>
                    <span className="text-sm font-bold text-primary">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div 
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;