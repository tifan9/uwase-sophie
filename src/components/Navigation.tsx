import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { Switch } from './ui/switch';
import { Menu, Moon, Sun, Code, User, BookOpen, Briefcase, Mail, MessageCircle } from 'lucide-react';

interface NavigationProps {
  mode: 'one-page' | 'multi-page';
  currentPage?: string;
  onPageChange?: (page: string) => void;
  accentColor: 'indigo' | 'emerald' | 'orange';
  onAccentChange: (color: 'indigo' | 'emerald' | 'orange') => void;
}

export function Navigation({ mode, currentPage, onPageChange, accentColor, onAccentChange }: NavigationProps) {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  const navigationItems = mode === 'one-page' 
    ? [
        { id: 'about', label: 'About', icon: User },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'skills', label: 'Skills', icon: Code },
        { id: 'education', label: 'Education', icon: BookOpen },
        { id: 'contact', label: 'Contact', icon: Mail },
      ]
    : [
        { id: 'home', label: 'Home', icon: User },
        { id: 'experience', label: 'Experience', icon: Briefcase },
        { id: 'skills', label: 'Skills', icon: Code },
        { id: 'education', label: 'Education', icon: BookOpen },
        { id: 'api-testing', label: 'API Testing', icon: MessageCircle },
        { id: 'contact', label: 'Contact', icon: Mail },
      ];

  const handleNavClick = (id: string) => {
    if (mode === 'one-page') {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      onPageChange?.(id);
    }
  };

  const accentColors = [
    { id: 'indigo' as const, name: 'Indigo', color: 'bg-indigo-500' },
    { id: 'emerald' as const, name: 'Emerald', color: 'bg-emerald-500' },
    { id: 'orange' as const, name: 'Orange', color: 'bg-orange-500' },
  ];

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md border-b' : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-lg font-semibold">Sophie Uwase</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center space-x-2 text-sm transition-colors hover:text-foreground ${
                  currentPage === item.id ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center space-x-4">
            {/* Accent Color Picker */}
            <div className="hidden lg:flex items-center space-x-2">
              {accentColors.map((color) => (
                <button
                  key={color.id}
                  onClick={() => onAccentChange(color.id)}
                  className={`w-6 h-6 rounded-full border-2 ${color.color} ${
                    accentColor === color.id ? 'border-foreground' : 'border-transparent'
                  }`}
                  title={color.name}
                />
              ))}
            </div>

            {/* Dark Mode Toggle */}
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4" />
              <Switch checked={isDark} onCheckedChange={setIsDark} />
              <Moon className="h-4 w-4" />
            </div>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigationItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`flex items-center space-x-3 p-3 rounded-lg text-left transition-colors hover:bg-accent ${
                        currentPage === item.id ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </button>
                  ))}
                  
                  {/* Mobile Accent Colors */}
                  <div className="pt-4 border-t">
                    <p className="text-sm font-medium mb-3">Accent Colors</p>
                    <div className="flex space-x-3">
                      {accentColors.map((color) => (
                        <button
                          key={color.id}
                          onClick={() => onAccentChange(color.id)}
                          className={`w-8 h-8 rounded-full border-2 ${color.color} ${
                            accentColor === color.id ? 'border-foreground' : 'border-border'
                          }`}
                          title={color.name}
                        />
                      ))}
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}