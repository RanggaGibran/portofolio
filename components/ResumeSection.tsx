"use client";

import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

const skillsData = [
  { name: 'C#', level: 95 },
  { name: 'C++', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'Rust', level: 80 },
  { name: 'Ruby', level: 75 },
  { name: 'Java', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'SQL', level: 80 },
  { name: 'Git', level: 90 },
];

const experienceData = [
  {
    role: 'Senior Full Stack Developer',
    company: 'Tech Innovations Inc.',
    duration: '2021 - Present',
    description: 'Leading development of enterprise applications using C#, React, and TypeScript. Managing a team of developers and implementing CI/CD pipelines.',
  },
  {
    role: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    duration: '2018 - 2021',
    description: 'Developed and maintained web applications using C# and JavaScript. Implemented RESTful APIs and worked with SQL databases.',
  },
  {
    role: 'Junior Software Engineer',
    company: 'WebTech Systems',
    duration: '2016 - 2018',
    description: 'Assisted in the development of web applications. Worked on front-end components using JavaScript and back-end logic with Python.',
  },
];

const educationData = [
  {
    degree: 'Master of Computer Science',
    institution: 'University of Technology',
    duration: '2014 - 2016',
    description: 'Specialized in Software Engineering and Distributed Systems.',
  },
  {
    degree: 'Bachelor of Computer Science',
    institution: 'State University',
    duration: '2010 - 2014',
    description: 'Graduated with honors. Focused on programming languages and algorithm design.',
  },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
              My professional experience, education, and technical skills.
            </p>
            <Button className="group">
              <Download className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              Download CV
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Briefcase className="mr-2 h-5 w-5" />
                Work Experience
              </h3>
            </div>
            <div className="space-y-6">
              {experienceData.map((item, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                  <CardHeader>
                    <CardTitle>
                      <div className="space-y-1">
                        <h4 className="text-xl font-semibold">{item.role}</h4>
                        <div className="flex justify-between items-center">
                          <p className="text-primary font-medium">{item.company}</p>
                          <p className="text-sm text-muted-foreground">{item.duration}</p>
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="mr-2 h-5 w-5" />
                Education
              </h3>
            </div>
            <div className="space-y-6 mb-12">
              {educationData.map((item, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
                  <CardHeader>
                    <CardTitle>
                      <div className="space-y-1">
                        <h4 className="text-xl font-semibold">{item.degree}</h4>
                        <div className="flex justify-between items-center">
                          <p className="text-primary font-medium">{item.institution}</p>
                          <p className="text-sm text-muted-foreground">{item.duration}</p>
                        </div>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Code className="mr-2 h-5 w-5" />
                Technical Skills
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {skillsData.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;