# Sophie Uwase - Portfolio Website

A modern, responsive portfolio website for Sophie Uwase, a Software Engineer and API Testing Specialist based in Kigali, Rwanda.

## Features

- **Dual Layout Modes**: Switch between One-Page scrolling and Multi-Page navigation
- **Design System**: Three accent color themes (Indigo, Emerald, Orange) with dark/light mode support
- **AI Secretary**: Interactive chat assistant that can answer questions about Sophie's background
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS v4

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS v4 with custom design system
- **UI Components**: Radix UI primitives with shadcn/ui
- **Icons**: Lucide React
- **Animations**: Motion (formerly Framer Motion)
- **Notifications**: Sonner
- **TypeScript**: Full type safety throughout

## Portfolio Sections

- **Hero**: Introduction with contact info and call-to-actions
- **Experience**: Detailed work history with case studies
- **Skills**: Categorized skill showcase with proficiency levels
- **Education**: Academic background and certifications
- **Contact**: Contact form with service selection
- **API Testing**: Dedicated page highlighting API testing expertise

## AI Secretary Features

- Intelligent responses about Sophie's experience and background
- Quick intent buttons for common queries
- Contextual action buttons for navigation and contact
- Professional conversation flow with knowledge base

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sophie-uwase-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Development

### Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with metadata
│   └── page.tsx           # Home page component
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── AISecretary.tsx   # AI chat assistant
│   ├── Navigation.tsx    # Header navigation
│   ├── Hero.tsx          # Landing section
│   ├── Experience.tsx    # Work experience
│   ├── Skills.tsx        # Skills showcase
│   ├── Education.tsx     # Education & certifications
│   └── Contact.tsx       # Contact form
├── lib/                  # Utility functions
├── styles/               # Global styles and CSS
└── public/              # Static assets
```

### Key Features Implementation

- **Accent Colors**: CSS custom properties with dynamic class switching
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: ARIA labels, keyboard navigation, focus indicators
- **Performance**: Optimized images, lazy loading, and code splitting

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## Customization

### Accent Colors

The portfolio supports three accent colors defined in `styles/globals.css`:
- Indigo (default)
- Emerald 
- Orange

### Content Updates

Portfolio content is primarily located in:
- Experience data: `components/Experience.tsx`
- Skills data: `components/Skills.tsx` 
- Education data: `components/Education.tsx`
- AI Secretary knowledge: `components/AISecretary.tsx`

### Design System

The design system uses CSS custom properties for:
- Color palette (light/dark modes)
- Typography scale
- Spacing scale
- Shadow tokens
- Border radius tokens

## Deployment

This Next.js application can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

### Environment Variables

Create a `.env.local` file for any environment-specific configurations:

```env
# Add any required environment variables here
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created for Sophie Uwase's personal portfolio. All rights reserved.

## Contact

- **Email**: uwasesophie101@gmail.com
- **Phone**: +250 783 199 810
- **Location**: Kigali, Rwanda

For technical questions about this portfolio website, please contact the development team.