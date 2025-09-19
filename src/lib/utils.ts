import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

export function scrollToElement(elementId: string): void {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

// Portfolio specific utilities
export const portfolioData = {
  name: 'Sophie Uwase',
  email: 'uwasesophie101@gmail.com',
  phone: '+250 783 199 810',
  location: 'Kigali, Rwanda',
  role: 'Software Engineer & API Testing Specialist',
  
  socialLinks: {
    github: '', // To be added later
    linkedin: '', // To be added later
    portfolio: '', // To be added later
  },
  
  skills: {
    technical: ['JavaScript', 'PHP', 'Java', 'HTML/CSS', 'MySQL'],
    apiTesting: ['Postman', 'Insomnia', 'OAuth', 'JWT', 'RESTful APIs'],
    infrastructure: ['Linux Administration', 'Network Configuration', 'CI/CD', 'System Monitoring'],
    soft: ['Problem-Solving', 'Communication', 'Teamwork', 'Time Management', 'Adaptability']
  }
}