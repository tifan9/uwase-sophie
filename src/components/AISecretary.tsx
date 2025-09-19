import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from './ui/sheet';
import { 
  MessageCircle, 
  Send, 
  User, 
  Bot, 
  X,
  Briefcase,
  GraduationCap,
  Calendar,
  Wrench,
  Mail,
  Phone,
  ExternalLink
} from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  actions?: {
    type: 'link' | 'contact' | 'schedule';
    label: string;
    data?: any;
  }[];
}

interface AISecretaryProps {
  isOpen: boolean;
  onClose: () => void;
  onContactFormOpen?: () => void;
}

const quickIntents = [
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'availability', label: 'Availability', icon: Calendar },
  { id: 'services', label: 'Services', icon: Wrench },
  { id: 'contact', label: 'Contact', icon: Mail },
];

const knowledgeBase = {
  experience: {
    kadc: {
      company: 'Kigali Adventist Dental Clinic (KADC)',
      role: 'Web Developer',
      period: 'Apr 2022 – Jan 2025',
      highlights: [
        'Integrated and tested RESTful APIs using Postman',
        'Validated JSON/XML data exchange',
        'Improved system uptime by 40%',
        'Documented security protocols'
      ]
    },
    caa: {
      company: 'Career Access Africa',
      role: 'IT Support',
      period: 'May 2024 – Sept 2024',
      highlights: [
        'Built branded website from scratch',
        'Set up CI/CD pipelines with GitHub Actions',
        'Achieved 99.5% uptime through monitoring',
        'Reduced deployment time by 80%'
      ]
    }
  },
  education: {
    degree: 'Bachelor of Networks and Communication Systems from AUCA (2021-2025)',
    certifications: [
      'Frontend Development - Solvit Africa (2025)',
      'Advanced Network Operations - Internet Society (2024)',
      'Linux Administration - Cisco Academy (2022)',
      'Cyber Security Bootcamp - Shield Tech Hub (2021)'
    ]
  },
  services: [
    'Web Development',
    'API Testing & Integration', 
    'Documentation',
    'CI/CD Setup',
    'IT Support',
    'System Monitoring',
    'Network Configuration'
  ],
  availability: 'Open for part-time and project-based work from next month. Let\'s chat about your project timeline!',
  contact: {
    email: 'uwasesophie101@gmail.com',
    phone: '+250 783 199 810',
    location: 'Kigali, Rwanda'
  }
};

export function AISecretary({ isOpen, onClose, onContactFormOpen }: AISecretaryProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi! I'm Sophie's AI Secretary. I can help you learn about her experience, education, availability, and services. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const generateResponse = (input: string): Message => {
    const lowerInput = input.toLowerCase();
    
    // Experience queries
    if (lowerInput.includes('experience') || lowerInput.includes('work') || lowerInput.includes('kadc') || lowerInput.includes('career access')) {
      const actions = [
        { type: 'link' as const, label: 'View Full Experience', data: { section: 'experience' } }
      ];
      
      if (lowerInput.includes('kadc')) {
        const kadc = knowledgeBase.experience.kadc;
        return {
          id: Date.now().toString(),
          role: 'assistant',
          content: `At ${kadc.company} (${kadc.period}), Sophie worked as a ${kadc.role}. Key achievements include: ${kadc.highlights.join(', ')}. This role really strengthened her API testing and system monitoring skills.`,
          timestamp: new Date(),
          actions
        };
      }
      
      return {
        id: Date.now().toString(),
        role: 'assistant',
        content: `Sophie has worked as a Web Developer at KADC and IT Support at Career Access Africa. Her experience includes API testing with Postman, CI/CD pipeline setup, and system monitoring. She's improved uptime by 40% and reduced deployment time by 80% across projects.`,
        timestamp: new Date(),
        actions
      };
    }

    // Education queries
    if (lowerInput.includes('education') || lowerInput.includes('study') || lowerInput.includes('degree') || lowerInput.includes('auca')) {
      return {
        id: Date.now().toString(),
        role: 'assistant',
        content: `Sophie holds a ${knowledgeBase.education.degree}. She also has certifications in: ${knowledgeBase.education.certifications.join(', ')}. Her coursework covered Linux Administration, Network Security, Java Programming, and Web Technologies.`,
        timestamp: new Date(),
        actions: [{ type: 'link' as const, label: 'View Education Details', data: { section: 'education' } }]
      };
    }

    // Availability queries
    if (lowerInput.includes('available') || lowerInput.includes('free') || lowerInput.includes('when') || lowerInput.includes('schedule')) {
      return {
        id: Date.now().toString(),
        role: 'assistant',
        content: knowledgeBase.availability,
        timestamp: new Date(),
        actions: [
          { type: 'schedule' as const, label: 'Schedule a Chat', data: { subject: 'Project Discussion' } },
          { type: 'contact' as const, label: 'Send Message', data: {} }
        ]
      };
    }

    // Services queries
    if (lowerInput.includes('services') || lowerInput.includes('what can') || lowerInput.includes('skills') || lowerInput.includes('do')) {
      return {
        id: Date.now().toString(),
        role: 'assistant',
        content: `Sophie offers: ${knowledgeBase.services.join(', ')}. She specializes in API testing with Postman, modern web development, and CI/CD pipeline setup. Her technical background includes JavaScript, PHP, Java, and Linux administration.`,
        timestamp: new Date(),
        actions: [
          { type: 'contact' as const, label: 'Request Quote', data: { services: knowledgeBase.services } },
          { type: 'link' as const, label: 'View Skills', data: { section: 'skills' } }
        ]
      };
    }

    // Contact queries
    if (lowerInput.includes('contact') || lowerInput.includes('reach') || lowerInput.includes('email') || lowerInput.includes('phone')) {
      return {
        id: Date.now().toString(),
        role: 'assistant',
        content: `You can reach Sophie at ${knowledgeBase.contact.email} or ${knowledgeBase.contact.phone}. She's based in ${knowledgeBase.contact.location}. I can also help you send a message directly!`,
        timestamp: new Date(),
        actions: [
          { type: 'contact' as const, label: 'Send Message', data: {} },
          { type: 'link' as const, label: 'Call Sophie', data: { url: `tel:${knowledgeBase.contact.phone}` } }
        ]
      };
    }

    // Default response
    return {
      id: Date.now().toString(),
      role: 'assistant',
      content: "I can help you learn about Sophie's experience, education, availability, services, and contact information. What specific area interests you most?",
      timestamp: new Date()
    };
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = generateResponse(inputValue);
      setMessages(prev => [...prev, response]);
      setIsTyping(false);
    }, 1000);
  };

  const handleQuickIntent = (intent: string) => {
    setInputValue(intent);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleAction = (action: Message['actions'][0]) => {
    if (action.type === 'contact') {
      onContactFormOpen?.();
      onClose();
    } else if (action.type === 'schedule') {
      onContactFormOpen?.();
      onClose();
    } else if (action.type === 'link' && action.data?.section) {
      const element = document.getElementById(action.data.section);
      element?.scrollIntoView({ behavior: 'smooth' });
      onClose();
    } else if (action.type === 'link' && action.data?.url) {
      window.open(action.data.url, '_blank');
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent side="right" className="w-full sm:w-[400px] flex flex-col h-full p-0">
        <SheetHeader className="px-6 py-4 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[var(--accent-active)] rounded-full flex items-center justify-center">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <SheetTitle className="text-left">Sophie's AI Secretary</SheetTitle>
                <p className="text-sm text-muted-foreground">Typically replies instantly</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
        </SheetHeader>

        {/* Quick Intents */}
        <div className="px-6 py-4 border-b">
          <div className="flex flex-wrap gap-2">
            {quickIntents.map((intent) => (
              <Badge
                key={intent.id}
                variant="outline"
                className="cursor-pointer hover:bg-accent flex items-center gap-1"
                onClick={() => handleQuickIntent(intent.label)}
              >
                <intent.icon className="h-3 w-3" />
                {intent.label}
              </Badge>
            ))}
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {message.role === 'assistant' && (
                <div className="w-8 h-8 bg-[var(--accent-active)] rounded-full flex items-center justify-center shrink-0">
                  <Bot className="h-4 w-4 text-white" />
                </div>
              )}
              <div className={`max-w-[80%] ${message.role === 'user' ? 'order-first' : ''}`}>
                <Card className={message.role === 'user' ? 'bg-[var(--accent-active)] text-white' : ''}>
                  <CardContent className="p-3">
                    <p className="text-sm">{message.content}</p>
                    {message.actions && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {message.actions.map((action, index) => (
                          <Button
                            key={index}
                            variant="outline"
                            size="sm"
                            className="text-xs h-7"
                            onClick={() => handleAction(action)}
                          >
                            {action.label}
                            {action.type === 'link' && <ExternalLink className="ml-1 h-3 w-3" />}
                          </Button>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
              {message.role === 'user' && (
                <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center shrink-0">
                  <User className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
          
          {isTyping && (
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-[var(--accent-active)] rounded-full flex items-center justify-center shrink-0">
                <Bot className="h-4 w-4 text-white" />
              </div>
              <Card>
                <CardContent className="p-3">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce delay-200" />
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="px-6 py-4 border-t">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about experience, skills, availability..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="flex-1"
            />
            <Button 
              onClick={handleSendMessage}
              disabled={!inputValue.trim() || isTyping}
              className="bg-[var(--accent-active)] hover:bg-[var(--accent-active)]/90 text-white"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            You're chatting with an AI assistant. Don't share sensitive info.
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// Floating Chat Button Component
interface ChatButtonProps {
  onClick: () => void;
}

export function ChatButton({ onClick }: ChatButtonProps) {
  return (
    <Button
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[var(--accent-active)] hover:bg-[var(--accent-active)]/90 text-white shadow-portfolio-lg hover:shadow-portfolio-lg hover:scale-105 transition-all duration-300 z-40"
      aria-label="Open AI Secretary"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}