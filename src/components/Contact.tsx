import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Badge } from './ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { toast } from 'sonner@2.0.3';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle, 
  ChevronDown,
  User,
  Briefcase
} from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
  services: string[];
}

const availableServices = [
  'Web Development',
  'API Testing & Integration',
  'Documentation',
  'CI/CD Setup',
  'IT Support',
  'System Monitoring',
  'Network Configuration'
];

const references = [
  {
    name: 'Iraturagiye Emmanuella',
    title: 'Operations Manager',
    company: 'Career Access Africa',
    phone: '+250 784 046 464',
    email: null
  },
  {
    name: 'Ishimwe Pacifique', 
    title: 'Facilitator',
    company: 'SheCanCode',
    phone: '+250 787 334 843',
    email: 'ishimwepacifique0@gmail.com'
  }
];

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
    services: []
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isReferencesOpen, setIsReferencesOpen] = useState(false);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Message sent successfully! Sophie will get back to you soon.');
      setFormData({ name: '', email: '', message: '', services: [] });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to work together? Let's discuss your project and how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card className="shadow-portfolio-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-[var(--accent-active)]" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-[var(--accent-active)] mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:uwasesophie101@gmail.com"
                      className="text-muted-foreground hover:text-[var(--accent-active)] transition-colors"
                    >
                      uwasesophie101@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-[var(--accent-active)] mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a 
                      href="tel:+250783199810"
                      className="text-muted-foreground hover:text-[var(--accent-active)] transition-colors"
                    >
                      +250 783 199 810
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[var(--accent-active)] mt-0.5" />
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-muted-foreground">Kigali, Rwanda</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex items-center gap-2 mb-3">
                    <Briefcase className="h-4 w-4 text-[var(--accent-active)]" />
                    <span className="font-medium">Available Services</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {availableServices.slice(0, 4).map((service) => (
                      <Badge key={service} variant="secondary" className="text-xs">
                        {service}
                      </Badge>
                    ))}
                    <Badge variant="outline" className="text-xs">
                      +{availableServices.length - 4} more
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* References Section */}
            <Card className="shadow-portfolio-md mt-6">
              <Collapsible open={isReferencesOpen} onOpenChange={setIsReferencesOpen}>
                <CollapsibleTrigger asChild>
                  <CardHeader className="cursor-pointer hover:bg-accent/50 transition-colors">
                    <CardTitle className="flex items-center justify-between">
                      <span>References</span>
                      <ChevronDown className={`h-4 w-4 transition-transform ${isReferencesOpen ? 'rotate-180' : ''}`} />
                    </CardTitle>
                  </CardHeader>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <CardContent className="space-y-4">
                    {references.map((ref, index) => (
                      <div key={index} className="pb-4 border-b last:border-b-0 last:pb-0">
                        <h4 className="font-medium">{ref.name}</h4>
                        <p className="text-sm text-muted-foreground">{ref.title}</p>
                        <p className="text-sm text-muted-foreground">{ref.company}</p>
                        <div className="flex flex-col gap-1 mt-2">
                          <a 
                            href={`tel:${ref.phone}`}
                            className="text-xs text-[var(--accent-active)] hover:underline"
                          >
                            {ref.phone}
                          </a>
                          {ref.email && (
                            <a 
                              href={`mailto:${ref.email}`}
                              className="text-xs text-[var(--accent-active)] hover:underline"
                            >
                              {ref.email}
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-portfolio-md">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="mb-3 block">Services Needed (Optional)</Label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((service) => (
                        <Badge
                          key={service}
                          variant={formData.services.includes(service) ? "default" : "outline"}
                          className={`cursor-pointer transition-colors ${
                            formData.services.includes(service) 
                              ? 'bg-[var(--accent-active)] text-white hover:bg-[var(--accent-active)]/90' 
                              : 'hover:bg-accent'
                          }`}
                          onClick={() => handleServiceToggle(service)}
                        >
                          {formData.services.includes(service) && (
                            <CheckCircle className="w-3 h-3 mr-1" />
                          )}
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell me about your project, timeline, and any specific requirements..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[var(--accent-active)] hover:bg-[var(--accent-active)]/90 text-white"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}