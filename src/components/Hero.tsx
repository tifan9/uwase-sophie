import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ArrowDown, Download, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';

interface HeroProps {
  onAISecretaryClick: () => void;
}

export function Hero({ onAISecretaryClick }: HeroProps) {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadCV = () => {
    // Placeholder for CV download functionality
    console.log('Download CV clicked');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image Placeholder */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-[var(--accent-active)] to-[var(--accent-active)]/70 flex items-center justify-center shadow-portfolio-lg">
            <span className="text-3xl font-bold text-white">SU</span>
          </div>
        </div>

        {/* Status Badge */}
        <Badge variant="secondary" className="mb-6 px-4 py-2">
          <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse" />
          Available for Projects
        </Badge>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
          Sophie Uwase
        </h1>

        {/* Role */}
        <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
          Software Engineer & API Testing Specialist
        </p>

        {/* Bio */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          Web developer and API tester with hands-on experience integrating RESTful services, 
          validating JSON/XML exchanges, and improving system reliability. Passionate about 
          building reliable, user-friendly web experiences.
        </p>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Kigali, Rwanda</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+250 783 199 810</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>uwasesophie101@gmail.com</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="px-8 bg-[var(--accent-active)] hover:bg-[var(--accent-active)]/90 text-white"
            onClick={handleDownloadCV}
          >
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="px-8"
            onClick={onAISecretaryClick}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Ask Sophie's AI Secretary
          </Button>
        </div>

        {/* Skills Preview */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {['JavaScript', 'PHP', 'Java', 'HTML/CSS', 'MySQL', 'Postman', 'RESTful APIs', 'Linux'].map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={handleScrollToAbout}
          className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="h-6 w-6 mx-auto" />
        </button>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 bg-[var(--accent-active)]/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-[var(--accent-active)]/5 rounded-full blur-2xl animate-pulse delay-1000" />
    </section>
  );
}