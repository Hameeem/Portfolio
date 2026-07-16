# Hameem Baba — Developer Portfolio

A production-built developer portfolio: React 19, TypeScript, Vite, Tailwind CSS v4,
and Framer Motion. Dark mode by default, glassmorphism surfaces, a live GitHub feed,
filterable projects, and a signature "pipeline status" motif tying the whole site back
to a data-engineering identity.

## Tech stack

- **React 19 + TypeScript + Vite** — app shell and build tooling
- **Tailwind CSS v4** (via `@tailwindcss/vite`) — styling, CSS-variable-based theme
- **Framer Motion** — scroll reveals, page/section transitions, hero choreography
- **React Router** — routing + 404 page
- **React Icons** — iconography
- **EmailJS** — contact form (client-side email, no backend needed)
- **GitHub REST API** — live repo/profile stats, fetched client-side, no token required

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

```bash
npm run build       # type-checks then builds to dist/
npm run preview     # preview the production build locally
```

## Before you deploy — 5 things to personalize

1. **Resume** — drop your PDF at `public/assets/resume/Hameem_Baba_Resume.pdf`
   (the Hero "Download Resume" button already points here).
2. **Contact details** — update the email, LinkedIn, and GitHub links in
   `src/components/sections/Contact.tsx` and `src/components/layout/Footer.tsx`.
3. **EmailJS** — create a free account at [emailjs.com](https://www.emailjs.com),
   then fill in `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, and `EMAILJS_PUBLIC_KEY`
   at the top of `src/components/sections/Contact.tsx`. Until you do, the form falls
   back to opening the visitor's email client instead — it still works, just less
   seamlessly.
4. **GitHub username** — `src/hooks/useGithubStats.ts` defaults to `Hameeem`. Change
   `GITHUB_USERNAME` there if needed.
5. **Repo name / base path** — already configured for a repo named `Portfolio`
   (`https://hameeem.github.io/Portfolio`). If you rename the repo, update the three
   spots listed in the deployment section below to match.

Project content (projects, skills, certifications, achievements, education,
experience) lives entirely in `src/data/*.ts` — edit those files directly, no need
to touch components to update copy.

## Project structure

```
src/
  components/
    layout/      Navbar, Footer, ScrollProgress, BackToTop, CustomCursor,
                  ParticleBackground, LoadingScreen
    sections/    Hero, About, Skills, Projects, Experience, Certifications,
                  Achievements, Education, Github, Contact
    ui/          Button, GlassCard, SectionHeading, Badge, ProjectCard, ProjectModal
  context/       ThemeContext (dark/light, persisted to localStorage)
  hooks/         useScrollProgress, useTypingEffect, useTilt, useCountUp, useGithubStats
  data/          projects.ts, skills.ts, certifications.ts, achievements.ts,
                 education.ts, experience.ts  — all portfolio content
  pages/         Home, NotFound
  types/         shared TypeScript interfaces
  App.tsx        router + global chrome (nav, footer, cursor, loading screen)
  main.tsx       entry point
  index.css      design tokens (CSS variables) + Tailwind v4 theme
```

## Deploying to GitHub Pages

**Option A — one command (gh-pages package, already configured):**

```bash
npm run deploy
```

This builds the site and pushes `dist/` to a `gh-pages` branch. Then, in your repo's
**Settings → Pages**, set the source to the `gh-pages` branch.

**Option B — automatic on every push (GitHub Actions, already configured):**

A workflow at `.github/workflows/deploy.yml` builds and deploys automatically on
every push to `main`. In your repo's **Settings → Pages**, set the source to
**GitHub Actions** — no further setup needed.

**This project is already configured for a repo named `Portfolio`.** If your repo
name differs, update these three places first (they all need to match your actual
GitHub repo name):

- `vite.config.ts` → `base: '/your-repo-name/'`
- `package.json` → `"homepage": "https://hameeem.github.io/your-repo-name"`
- `src/App.tsx` → `<BrowserRouter basename="/your-repo-name/">`

If you're deploying to a user/org page (`<username>.github.io` itself, not a project
page), set `base: '/'` and drop the `basename` prop entirely.

## Notes

- **GitHub stats** are fetched live from the public GitHub REST API in the browser —
  no API key needed, but unauthenticated requests are rate-limited to 60/hour per IP,
  which is generous for a personal portfolio.
- **Dark/light mode** persists via `localStorage` and respects the visitor's OS
  preference on first visit.
- **Reduced motion** is respected — animations shorten to near-zero for visitors who
  have that OS setting enabled.
- The custom cursor and floating-particle background automatically disable themselves
  on touch devices.
