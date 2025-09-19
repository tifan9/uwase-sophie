import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Code, Database, Shield, Network, Users, MessageCircle, Globe, Server } from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  skills: SkillItem[];
}

interface SkillItem {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  example?: string;
}

const skillCategories: SkillCategory[] = [
  {
    id: 'technical',
    title: 'Technical Skills',
    icon: Code,
    skills: [
      {
        name: 'JavaScript',
        level: 'Intermediate',
        description: 'Frontend and backend development with modern ES6+ features',
        example: 'Built interactive web applications with DOM manipulation and API integration'
      },
      {
        name: 'PHP',
        level: 'Intermediate',
        description: 'Server-side development and web application backends',
        example: 'Developed appointment booking systems with database integration'
      },
      {
        name: 'Java',
        level: 'Intermediate',
        description: 'Object-oriented programming and enterprise applications',
        example: 'Created network administration tools and system utilities'
      },
      {
        name: 'HTML/CSS',
        level: 'Advanced',
        description: 'Modern responsive web design and styling',
        example: 'Built responsive, accessible websites with modern CSS techniques'
      },
      {
        name: 'MySQL',
        level: 'Intermediate',
        description: 'Database design, optimization, and management',
        example: 'Designed patient management database schemas with proper relationships'
      }
    ]
  },
  {
    id: 'api-testing',
    title: 'API Testing & Security',
    icon: MessageCircle,
    skills: [
      {
        name: 'Postman',
        level: 'Advanced',
        description: 'API testing, automation, and collection management',
        example: 'Created comprehensive test collections for appointment booking APIs'
      },
      {
        name: 'Insomnia',
        level: 'Beginner',
        description: 'REST API testing and debugging',
        example: 'Used for quick API endpoint testing and validation'
      },
      {
        name: 'OAuth',
        level: 'Intermediate',
        description: 'Authentication and authorization protocols',
        example: 'Implemented secure API authentication for patient data access'
      },
      {
        name: 'JWT',
        level: 'Intermediate',
        description: 'JSON Web Token implementation and validation',
        example: 'Secured API endpoints with token-based authentication'
      },
      {
        name: 'RESTful APIs',
        level: 'Advanced',
        description: 'API design, integration, and testing',
        example: 'Integrated multiple healthcare APIs for appointment and patient management'
      }
    ]
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Operations',
    icon: Server,
    skills: [
      {
        name: 'Linux Administration',
        level: 'Intermediate',
        description: 'System administration and server management',
        example: 'Managed Ubuntu servers for web applications and monitoring systems'
      },
      {
        name: 'Network Configuration',
        level: 'Intermediate',
        description: 'Network setup, troubleshooting, and security',
        example: 'Configured secure networks for healthcare data transmission'
      },
      {
        name: 'CI/CD',
        level: 'Intermediate',
        description: 'Continuous integration and deployment pipelines',
        example: 'Set up GitHub Actions workflows for automated testing and deployment'
      },
      {
        name: 'System Monitoring',
        level: 'Intermediate',
        description: 'Performance monitoring and issue detection',
        example: 'Implemented monitoring systems that improved uptime by 40%'
      },
      {
        name: 'Cloud Technologies',
        level: 'Beginner',
        description: 'Cloud platforms and deployment strategies',
        example: 'Deployed applications on Render and Vercel platforms'
      }
    ]
  },
  {
    id: 'soft-skills',
    title: 'Professional Skills',
    icon: Users,
    skills: [
      {
        name: 'Problem-Solving',
        level: 'Advanced',
        description: 'Analytical thinking and troubleshooting complex issues',
        example: 'Diagnosed and resolved critical system failures in production environments'
      },
      {
        name: 'Communication',
        level: 'Advanced',
        description: 'Technical documentation and stakeholder communication',
        example: 'Created comprehensive API documentation and training materials'
      },
      {
        name: 'Teamwork',
        level: 'Advanced',
        description: 'Collaborative development and cross-functional coordination',
        example: 'Collaborated with healthcare professionals to understand system requirements'
      },
      {
        name: 'Time Management',
        level: 'Advanced',
        description: 'Project planning and deadline management',
        example: 'Successfully delivered multiple projects on schedule with quality standards'
      },
      {
        name: 'Adaptability',
        level: 'Advanced',
        description: 'Learning new technologies and adapting to change',
        example: 'Quickly learned new API testing tools to meet project requirements'
      }
    ]
  }
];

const languageSkills = [
  { name: 'English', level: 'Fluent', flag: '🇺🇸' },
  { name: 'Kinyarwanda', level: 'Native', flag: '🇷🇼' }
];

function SkillLevelBadge({ level }: { level: string }) {
  const colors = {
    'Beginner': 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
    'Intermediate': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
    'Advanced': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
  };

  return (
    <Badge className={`text-xs ${colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-800'}`}>
      {level}
    </Badge>
  );
}

export function Skills() {
  const [activeCategory, setActiveCategory] = useState('technical');

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for modern web development and API integration
          </p>
        </div>

        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
            {skillCategories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="flex items-center gap-2"
              >
                <category.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{category.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {category.skills.map((skill) => (
                  <TooltipProvider key={skill.name}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Card className="hover:shadow-portfolio-md transition-all duration-300 cursor-pointer">
                          <CardHeader className="pb-3">
                            <div className="flex items-center justify-between">
                              <CardTitle className="text-lg">{skill.name}</CardTitle>
                              <SkillLevelBadge level={skill.level} />
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-sm text-muted-foreground">
                              {skill.description}
                            </p>
                          </CardContent>
                        </Card>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" className="max-w-xs">
                        <p className="text-sm font-medium mb-1">{skill.name}</p>
                        {skill.example && (
                          <p className="text-xs text-muted-foreground">{skill.example}</p>
                        )}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Languages Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Languages</h3>
          <div className="flex justify-center gap-6">
            {languageSkills.map((lang) => (
              <Card key={lang.name} className="w-40">
                <CardContent className="pt-6 text-center">
                  <div className="text-2xl mb-2">{lang.flag}</div>
                  <h4 className="font-medium mb-1">{lang.name}</h4>
                  <Badge variant="secondary" className="text-xs">
                    {lang.level}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}