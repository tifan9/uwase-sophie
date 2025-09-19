# Sophie Uwase Portfolio - Local Setup Guide

## Quick Start

Follow these steps to run the portfolio locally on your computer:

### 1. Prerequisites

Make sure you have installed:
- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **VS Code** (recommended) - [Download here](https://code.visualstudio.com/)

### 2. Clone and Install

```bash
# Clone the repository
git clone <your-repository-url>
cd sophie-uwase-portfolio

# Install dependencies
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The portfolio should now be running!

## VS Code Setup

### Recommended Extensions

Install these VS Code extensions for the best development experience:

1. **ES7+ React/Redux/React-Native snippets**
2. **Tailwind CSS IntelliSense**
3. **TypeScript Importer**
4. **Auto Rename Tag**
5. **Prettier - Code formatter**
6. **ESLint**

### VS Code Settings

Create a `.vscode/settings.json` file in your project root with these settings:

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "typescript.suggest.autoImports": true,
  "emmet.includeLanguages": {
    "typescript": "html",
    "typescriptreact": "html"
  }
}
```

## Project Features You Can Test

### 1. View Mode Toggle
- Look for the toggle in the top-left corner
- Switch between "One Page" and "Multi Page" layouts

### 2. Accent Color Themes
- Use the color picker in the navigation (desktop)
- Try Indigo, Emerald, and Orange themes

### 3. Dark/Light Mode
- Toggle in the navigation bar
- Uses system preference by default

### 4. AI Secretary
- Click the floating chat button (bottom-right)
- Try asking about:
  - "Tell me about Sophie's experience"
  - "What services does she offer?"
  - "Is she available for projects?"

### 5. Interactive Components
- Case study modals in Experience section
- Skill tooltips with examples
- Contact form with service selection
- Collapsible references section

### 6. Responsive Design
- Test on different screen sizes
- Mobile navigation menu
- Responsive layouts

## File Structure Overview

```
sophie-uwase-portfolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── Navigation.tsx    # Header navigation
│   ├── Hero.tsx          # Landing section  
│   ├── Experience.tsx    # Work experience
│   ���── Skills.tsx        # Skills showcase
│   ├── Education.tsx     # Education section
│   ├── Contact.tsx       # Contact form
│   └── AISecretary.tsx   # AI chat assistant
├── lib/                  # Utility functions
├── styles/               # Global CSS and design system
├── public/               # Static assets
├── package.json          # Dependencies and scripts
├── next.config.js        # Next.js configuration
├── tailwind.config.js    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run type checking
npm run type-check

# Run linting
npm run lint
```

## Common Issues & Solutions

### Issue: Port 3000 already in use
```bash
# Use a different port
npm run dev -- --port 3001
```

### Issue: Dependencies not installing
```bash
# Clear npm cache and reinstall
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors
```bash
# Run type checking to see detailed errors
npm run type-check
```

## Customizing Content

### Update Sophie's Information
- **Contact info**: Edit `components/Hero.tsx` and `components/Contact.tsx`
- **Experience**: Modify `experienceData` in `components/Experience.tsx`
- **Skills**: Update `skillCategories` in `components/Skills.tsx`
- **Education**: Change `educationData` in `components/Education.tsx`

### AI Secretary Knowledge
- Update the `knowledgeBase` object in `components/AISecretary.tsx`
- Add new response patterns in the `generateResponse` function

### Design System
- Accent colors: Modify CSS custom properties in `styles/globals.css`
- Typography: Update the typography scale variables
- Spacing: Adjust the spacing scale variables

## Testing Features

### Test the Portfolio:
1. **Navigation**: Click through all sections
2. **Responsive**: Resize browser window
3. **AI Chat**: Ask different questions
4. **Forms**: Try the contact form
5. **Dark Mode**: Toggle theme
6. **Accent Colors**: Switch color themes

### Performance Testing:
- Open browser DevTools
- Check Lighthouse scores
- Monitor Core Web Vitals

## Need Help?

If you encounter any issues:

1. Check the browser console for errors
2. Verify all dependencies are installed (`npm install`)
3. Make sure you're using Node.js 18+
4. Try clearing your browser cache

## Ready for Production?

When ready to deploy:

```bash
# Build the project
npm run build

# Test the production build locally
npm start
```

The portfolio is ready to deploy to platforms like Vercel, Netlify, or any Node.js hosting service.

---

**Happy coding! 🚀**