import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Calendar, MapPin, Building, ChevronRight, Target, Lightbulb, TrendingUp } from 'lucide-react';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
  caseStudy?: {
    challenge: string;
    solution: string;
    impact: string;
  };
}

const experienceData: ExperienceItem[] = [
  {
    id: 'kadc',
    company: 'Kigali Adventist Dental Clinic (KADC)',
    role: 'Web Developer',
    location: 'Kigali, Rwanda',
    period: 'Apr 2022 – Jan 2025',
    description: [
      'Integrated and tested RESTful APIs for appointment booking and patient management using Postman',
      'Validated data exchange in JSON and XML between frontend and backend systems',
      'Troubleshot hardware/software issues to maintain uptime and reliability',
      'Implemented system monitoring processes, improving platform uptime and issue resolution speed',
      'Documented configurations, troubleshooting processes, and security protocols'
    ],
    skills: ['Postman', 'RESTful APIs', 'JSON/XML', 'System Monitoring', 'Documentation', 'Troubleshooting'],
    caseStudy: {
      challenge: 'The dental clinic needed a reliable appointment booking system with proper API integration and data validation between frontend and backend systems.',
      solution: 'Implemented comprehensive API testing using Postman, created automated test collections for appointment booking flows, and established robust data validation processes for JSON/XML exchanges.',
      impact: 'Improved system reliability by 40%, reduced appointment booking errors by 60%, and established monitoring processes that improved issue resolution speed by 50%.'
    }
  },
  {
    id: 'caa',
    company: 'Career Access Africa',
    role: 'IT Support',
    location: 'Kigali, Rwanda',
    period: 'May 2024 – Sept 2024',
    description: [
      'Designed, developed, and launched a branded website tailored to organization needs',
      'Integrated web apps into CI/CD pipelines (GitHub Actions, Render, Vercel) for automated builds and testing',
      'Monitored network/system performance; ensured high availability',
      'Oversaw IT infrastructure development and maintenance; ensured policy compliance',
      'Provided strategic oversight for operations (hardware, network configuration)'
    ],
    skills: ['Web Development', 'CI/CD', 'GitHub Actions', 'Render', 'Vercel', 'Network Monitoring', 'IT Infrastructure'],
    caseStudy: {
      challenge: 'Career Access Africa needed a modern web presence with automated deployment processes and reliable IT infrastructure to support their operations.',
      solution: 'Built a custom branded website, set up CI/CD pipelines using GitHub Actions with deployment to Render and Vercel, and implemented comprehensive monitoring systems.',
      impact: 'Delivered a professional web presence that increased organization visibility, reduced deployment time by 80% through automation, and achieved 99.5% uptime through proactive monitoring.'
    }
  }
];

export function Experience() {
  const [selectedExperience, setSelectedExperience] = useState<ExperienceItem | null>(null);

  return (
    <section id="experience" className="py-20 bg-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building reliable web solutions and ensuring system excellence through API testing and integration
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((experience, index) => (
            <Card key={experience.id} className="shadow-portfolio-md hover:shadow-portfolio-lg transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{experience.role}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          <span className="text-sm">{experience.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span className="text-sm">{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {experience.caseStudy && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="shrink-0">
                          View Case Study
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-left">
                            {experience.role} at {experience.company}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Target className="h-5 w-5 text-[var(--accent-active)]" />
                              <h4 className="font-semibold">Challenge</h4>
                            </div>
                            <p className="text-muted-foreground">{experience.caseStudy.challenge}</p>
                          </div>
                          
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Lightbulb className="h-5 w-5 text-[var(--accent-active)]" />
                              <h4 className="font-semibold">Solution</h4>
                            </div>
                            <p className="text-muted-foreground">{experience.caseStudy.solution}</p>
                          </div>
                          
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <TrendingUp className="h-5 w-5 text-[var(--accent-active)]" />
                              <h4 className="font-semibold">Impact</h4>
                            </div>
                            <p className="text-muted-foreground">{experience.caseStudy.impact}</p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  )}
                </div>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {experience.description.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-[var(--accent-active)] rounded-full mt-2 shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}