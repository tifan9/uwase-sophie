import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin, GraduationCap, Award, BookOpen } from 'lucide-react';

interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  location: string;
  period: string;
  type: 'degree' | 'certification' | 'bootcamp';
  description?: string;
  coursework?: string[];
  status?: 'completed' | 'in-progress';
}

const educationData: EducationItem[] = [
  {
    id: 'auca',
    institution: 'Adventist University of Central Africa (AUCA)',
    degree: 'Bachelor of Networks and Communication Systems',
    location: 'Kigali, Rwanda',
    period: 'Jan 2021 – Feb 2025',
    type: 'degree',
    status: 'completed',
    description: 'Comprehensive program covering network administration, security, and communication systems',
    coursework: [
      'Linux Administration',
      'Network Administration', 
      'Network Security',
      'Java Programming',
      'Web Design',
      'Web Technology',
      'Cloud Technologies'
    ]
  },
  {
    id: 'solvit',
    institution: 'Solvit Africa',
    degree: 'Frontend Development',
    location: 'Kigali, Rwanda',
    period: 'Jul – Sept 2025',
    type: 'certification',
    status: 'completed',
    description: 'Intensive frontend development program focusing on modern web technologies'
  },
  {
    id: 'harambee',
    institution: 'Harambee',
    degree: 'Bridge Program (Work Readiness Training)',
    location: 'Kigali, Rwanda',
    period: 'Oct – Dec 2024',
    type: 'certification',
    status: 'completed',
    description: 'Professional development program focusing on workplace skills and career readiness'
  },
  {
    id: 'internet-society',
    institution: 'Internet Society',
    degree: 'Certificate in Advanced Network Operations',
    location: 'Online',
    period: 'Sept – Oct 2024',
    type: 'certification',
    status: 'completed',
    description: 'Advanced training in network operations, monitoring, and troubleshooting'
  },
  {
    id: 'cisco',
    institution: 'Cisco Academy',
    degree: 'Certificate in Linux Administration',
    location: 'Kigali, Rwanda',
    period: 'Sept – Dec 2022',
    type: 'certification',
    status: 'completed',
    description: 'Comprehensive Linux system administration and command-line proficiency'
  },
  {
    id: 'shield-tech',
    institution: 'Shield Tech Hub',
    degree: 'Bootcamp Cyber Security',
    location: 'Kigali, Rwanda',
    period: '2021',
    type: 'bootcamp',
    status: 'completed',
    description: 'Intensive cybersecurity training covering threat analysis, network security, and best practices'
  }
];

function getIcon(type: string) {
  switch (type) {
    case 'degree':
      return GraduationCap;
    case 'certification':
      return Award;
    case 'bootcamp':
      return BookOpen;
    default:
      return GraduationCap;
  }
}

function getTypeLabel(type: string) {
  switch (type) {
    case 'degree':
      return 'Degree';
    case 'certification':
      return 'Certificate';
    case 'bootcamp':
      return 'Bootcamp';
    default:
      return 'Education';
  }
}

function getStatusColor(status?: string) {
  switch (status) {
    case 'completed':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'in-progress':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
  }
}

export function Education() {
  const degrees = educationData.filter(item => item.type === 'degree');
  const certifications = educationData.filter(item => item.type !== 'degree');

  return (
    <section id="education" className="py-20 bg-accent/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Education & Certifications</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning through formal education and professional development
          </p>
        </div>

        {/* Degree Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-[var(--accent-active)]" />
            Degree
          </h3>
          <div className="space-y-6">
            {degrees.map((item) => {
              const IconComponent = getIcon(item.type);
              return (
                <Card key={item.id} className="shadow-portfolio-md hover:shadow-portfolio-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <IconComponent className="h-5 w-5 text-[var(--accent-active)]" />
                          <Badge className={getStatusColor(item.status)}>
                            {item.status === 'completed' ? 'Completed' : 'In Progress'}
                          </Badge>
                        </div>
                        <CardTitle className="text-xl mb-2">{item.degree}</CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <GraduationCap className="h-4 w-4" />
                            <span className="font-medium">{item.institution}</span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span className="text-sm">{item.period}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span className="text-sm">{item.location}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    {item.description && (
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                    )}
                    
                    {item.coursework && (
                      <div>
                        <h4 className="font-medium mb-3">Relevant Coursework:</h4>
                        <div className="flex flex-wrap gap-2">
                          {item.coursework.map((course) => (
                            <Badge key={course} variant="secondary" className="text-xs">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <Award className="h-6 w-6 text-[var(--accent-active)]" />
            Certifications & Training
          </h3>
          <div className="grid gap-6 md:grid-cols-2">
            {certifications.map((item) => {
              const IconComponent = getIcon(item.type);
              return (
                <Card key={item.id} className="shadow-portfolio-md hover:shadow-portfolio-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <IconComponent className="h-5 w-5 text-[var(--accent-active)]" />
                      <Badge variant="secondary" className="text-xs">
                        {getTypeLabel(item.type)}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{item.degree}</CardTitle>
                    <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-3 w-3" />
                        <span>{item.institution}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          <span>{item.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3" />
                          <span>{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  {item.description && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}