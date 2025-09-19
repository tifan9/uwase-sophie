import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { AISecretary, ChatButton } from './components/AISecretary';
import { Button } from './components/ui/button';
import { Toaster } from './components/ui/sonner';
import { ArrowUp } from 'lucide-react';

type AccentColor = 'indigo' | 'emerald' | 'orange';
type ViewMode = 'one-page' | 'multi-page';
type Page = 'home' | 'experience' | 'skills' | 'education' | 'api-testing' | 'contact';

export default function App() {
  const [accentColor, setAccentColor] = useState<AccentColor>('indigo');
  const [viewMode, setViewMode] = useState<ViewMode>('one-page');
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [isAISecretaryOpen, setIsAISecretaryOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll for back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply accent color class to body
  useEffect(() => {
    document.body.className = `accent-${accentColor}`;
  }, [accentColor]);

  const handlePageChange = (page: string) => {
    setCurrentPage(page as Page);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openContactForm = () => {
    if (viewMode === 'one-page') {
      const contactSection = document.getElementById('contact');
      contactSection?.scrollIntoView({ behavior: 'smooth' });
    } else {
      setCurrentPage('contact');
    }
  };

  // One-page variant content
  const renderOnePage = () => (
    <div className="min-h-screen">
      <Navigation 
        mode="one-page"
        accentColor={accentColor}
        onAccentChange={setAccentColor}
      />
      <Hero onAISecretaryClick={() => setIsAISecretaryOpen(true)} />
      <div id="about">
        <Experience />
      </div>
      <Skills />
      <Education />
      <Contact />
    </div>
  );

  // Multi-page variant content
  const renderMultiPage = () => {
    const renderCurrentPage = () => {
      switch (currentPage) {
        case 'home':
          return <Hero onAISecretaryClick={() => setIsAISecretaryOpen(true)} />;
        case 'experience':
          return <Experience />;
        case 'skills':
          return <Skills />;
        case 'education':
          return <Education />;
        case 'api-testing':
          return <APITestingPage />;
        case 'contact':
          return <Contact />;
        default:
          return <Hero onAISecretaryClick={() => setIsAISecretaryOpen(true)} />;
      }
    };

    return (
      <div className="min-h-screen">
        <Navigation 
          mode="multi-page"
          currentPage={currentPage}
          onPageChange={handlePageChange}
          accentColor={accentColor}
          onAccentChange={setAccentColor}
        />
        {renderCurrentPage()}
      </div>
    );
  };

  return (
    <>
      {/* View Mode Toggle (Development Helper) */}
      {/* <div className="fixed top-4 left-4 z-50">
        <div className="bg-background/80 backdrop-blur-md border rounded-lg p-2">
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant={viewMode === 'one-page' ? 'default' : 'outline'}
              onClick={() => setViewMode('one-page')}
              className="text-xs"
            >
              One Page
            </Button>
            <Button 
              size="sm" 
              variant={viewMode === 'multi-page' ? 'default' : 'outline'}
              onClick={() => setViewMode('multi-page')}
              className="text-xs"
            >
              Multi Page
            </Button>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      {viewMode === 'one-page' ? renderOnePage() : renderMultiPage()}

      {/* Floating Chat Button */}
      <ChatButton onClick={() => setIsAISecretaryOpen(true)} />

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 w-12 h-12 rounded-full bg-background/80 backdrop-blur-md border shadow-portfolio-md hover:shadow-portfolio-lg transition-all duration-300 z-40"
          variant="outline"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}

      {/* AI Secretary */}
      <AISecretary 
        isOpen={isAISecretaryOpen}
        onClose={() => setIsAISecretaryOpen(false)}
        onContactFormOpen={openContactForm}
      />

      {/* Toast notifications */}
      <Toaster position="top-right" />
    </>
  );
}

// API Testing dedicated page component
function APITestingPage() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">API Testing Expertise</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Specialized in RESTful API testing, validation, and security implementation
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Tools & Technologies</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--accent-active)] rounded-full mt-2" />
                  <div>
                    <strong>Postman:</strong> Advanced API collection management, automated testing workflows, and environment configurations
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--accent-active)] rounded-full mt-2" />
                  <div>
                    <strong>Insomnia:</strong> REST API testing and debugging for rapid development cycles
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--accent-active)] rounded-full mt-2" />
                  <div>
                    <strong>OAuth & JWT:</strong> Implementation and testing of secure authentication protocols
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Testing Approach</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--accent-active)] rounded-full mt-2" />
                  <div>JSON/XML data validation and schema verification</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--accent-active)] rounded-full mt-2" />
                  <div>End-to-end API workflow testing</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--accent-active)] rounded-full mt-2" />
                  <div>Performance and load testing</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-[var(--accent-active)] rounded-full mt-2" />
                  <div>Security testing and vulnerability assessment</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-4">Real-World Impact</h2>
              <div className="bg-accent/10 rounded-lg p-6">
                <h3 className="font-semibold mb-2">KADC Healthcare System</h3>
                <p className="text-muted-foreground mb-4">
                  Integrated and tested appointment booking APIs, ensuring reliable data exchange between frontend and backend systems.
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>System Reliability</span>
                    <span className="font-semibold text-green-600">+40%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Error Reduction</span>
                    <span className="font-semibold text-green-600">-60%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Response Time</span>
                    <span className="font-semibold text-green-600">+50%</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Security Focus</h2>
              <p className="text-muted-foreground mb-4">
                Strong emphasis on API security testing, including authentication, authorization, and data protection protocols.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[var(--accent-active)] rounded-full" />
                  <span>Role-based access control testing</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[var(--accent-active)] rounded-full" />
                  <span>Token validation and refresh mechanisms</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-[var(--accent-active)] rounded-full" />
                  <span>Data encryption verification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}