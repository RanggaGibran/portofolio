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
    role: 'Staff PHL',
    company: 'Badan Pengelola Usaha UNRI',
    duration: '2023 1 Mei - 31 Desember 2023',
    description: 'Managing and maintaining critical server infrastructure to support business operations. Demonstrated excellent communication skills in effectively interacting with both technical and non-technical teams.',
  },
  {
    role: 'Staff Kontrak BPU',
    company: 'Badan Pengelola Usaha UNRI',
    duration: '2022 15 Jan - 25 April 2023',
    description: 'Responsible for server management and system administration tasks. Collaborated with cross-functional teams to ensure optimal system performance.',
  },
  {
    role: 'Server Manager',
    company: 'Server Management',
    duration: '2018 09 Oct - 1 November 2021',
    description: 'Led server management initiatives and infrastructure maintenance. Implemented robust monitoring systems and troubleshooting protocols.',
  },
];

const educationData = [
  {
    degree: 'Vocational High School',
    institution: 'SMK Labor Binaan FKIP UNRI',
    duration: '2017-2020',
    description: 'Focused on technical and practical skills in computer science and information technology.',
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
            <Button className="group" asChild>
              <a 
                href="https://cdn.pintarnya.com/jobseekers/8752078/cv/20250521010253_95d99d75-e24e-444e-87c6-2f204ff9ebbf.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Download className="mr-2 h-4 w-4 group-hover:-translate-y-1 transition-transform" />
                Download CV
              </a>
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