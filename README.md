# G S Shanjaiy Samarjith — Portfolio

A premium software engineer portfolio built with React, Vite, and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          — Sticky responsive navigation
│   ├── ThemeToggle.jsx     — Dark/light theme switcher
│   ├── Hero.jsx            — Hero section with code visual
│   ├── About.jsx           — About + education
│   ├── Skills.jsx          — Technical skills by domain
│   ├── FeaturedProjects.jsx — Four featured projects
│   ├── Experience.jsx      — Education & experience timeline
│   ├── Achievements.jsx    — Coding achievements
│   ├── CodingProfiles.jsx  — LeetCode / GFG / GitHub links
│   ├── GitHubActivity.jsx  — Live GitHub repo data
│   ├── Contact.jsx         — Contact form + info
│   ├── Footer.jsx          — Footer with back-to-top
│   ├── CustomCursor.jsx    — Desktop custom cursor
│   └── ScrollProgress.jsx  — Scroll progress bar
├── data/
│   ├── profile.js          — Personal information
│   ├── projects.js         — Project data
│   └── skills.js           — Skills by category
├── hooks/
│   ├── useTheme.js         — Theme state + persistence
│   ├── useGitHubActivity.js — GitHub API calls
│   └── useActiveSection.js — Active nav section detection
├── pages/
│   └── Home.jsx            — Home page composition
└── styles/
    ├── themes.css          — CSS custom property tokens
    ├── globals.css         — Reset + global styles
    ├── animations.css      — Keyframe animations
    └── components.css      — All component styles
```

## Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

### Contact Form (Formspree)

1. Create a free account at [formspree.io](https://formspree.io)
2. Create a new form and copy the endpoint URL
3. Set it in `.env`:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

If `VITE_FORMSPREE_ENDPOINT` is not set, the contact form falls back to opening
the user's email client via `mailto:` link.

## Updating Content

### Personal information
Edit [`src/data/profile.js`](src/data/profile.js):
- Update email, LinkedIn, GitHub, resume URL
- Add LeetCode and GeeksforGeeks profile URLs when available

### Projects
Edit [`src/data/projects.js`](src/data/projects.js):
- Update `repositoryUrl` and `demoUrl` for each project

### Skills
Edit [`src/data/skills.js`](src/data/skills.js)

### Adding a photo
In [`src/components/Hero.jsx`](src/components/Hero.jsx), replace `<HeroVisual />`
with an `<img>` element pointing to your photo.

## Deployment — Vercel

### Option 1: Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### Option 2: GitHub Integration
1. Push the repository to GitHub
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Framework preset: **Vite**
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add environment variables in Vercel dashboard settings

`vercel.json` is already configured for SPA routing.

## Items Requiring Confirmation Before Publishing


## Design System

- **Colors**: CSS custom properties in `src/styles/themes.css`
- **Dark mode** is default; switches to light if system preference is set
- **Fonts**: Space Grotesk (headings), Inter (body), JetBrains Mono (code)
- **Motion**: Framer Motion with `prefers-reduced-motion` support

