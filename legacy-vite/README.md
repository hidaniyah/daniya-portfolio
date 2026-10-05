

A minimal, single-column developer portfolio built with **React (Vite)** and
**Tailwind CSS v4**. Clean typography, light/dark theme, and projects as the focus.

![Full Stack Software Engineer](public/og-image.svg)

## ✨ Features

- **Sections** — Intro, About, Experience, Projects, Skills, Contact
- **Dark / Light theme** toggle (persisted to `localStorage`, respects OS preference)
- **Sticky header** with active-section highlighting
- **Responsive**, accessible (skip link, focus styles, reduced-motion support)
- **Content in data files** — edit `src/data/` to update the site

## 🧱 Tech Stack

| Area        | Choice                                |
| ----------- | ------------------------------------- |
| Framework   | React 19 + Vite                       |
| Language    | JavaScript                            |
| Styling     | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Icons       | React Icons                           |
| Lint        | oxlint                                |

## 📁 Folder Structure

```
src/
├─ components/
│  ├─ Header.jsx
│  ├─ sections/      # Intro, About, Experience, Projects, Skills, Contact, Footer
│  └─ ui/            # Section, ProjectItem, ExternalLink, ThemeToggle
├─ hooks/            # useTheme, useActiveSection, useScrollThreshold
├─ utils/            # link helpers
├─ data/             # navLinks, personal, skills, projects, experience, socials
├─ App.jsx
├─ main.jsx
└─ index.css         # Tailwind + theme tokens
```

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# production build
npm run build

# preview the production build locally
npm run preview

# lint
npm run lint
```

## ✏️ Customizing Content

All copy lives in `src/data/` (the About text is in `About.jsx`):

- `personal.js` — name, title, intro line, email, social URLs, resume path
- `experience.js` — roles, dates and highlights
- `projects.js` — title, year, role, description, stack, links, optional `image`
- `skills.js` — skill groups
- `navLinks.js` / `socials.js` — navigation and links

### Project screenshots

Put images in `public/projects/` and set `image: '/projects/your-file.png'` on the
project. A 16:9 screenshot works best; without one a plain placeholder is shown.

### Resume

The **Download Resume** button links to `public/resume.pdf`.

- Replace it with **your own designed resume** (recommended), **or**
- Regenerate the simple placeholder any time:

  ```bash
  node scripts/generate-resume.mjs
  ```

## ☁️ Deploying to Vercel

This project is 100% compatible with Vercel — no config file needed.

### Option A — Vercel Dashboard (easiest)

1. Push this project to a GitHub/GitLab/Bitbucket repository.
2. Go to **[vercel.com/new](https://vercel.com/new)** and **Import** the repo.
3. Vercel auto-detects **Vite**. Confirm the settings:
   - **Framework Preset:** `Vite`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
4. Click **Deploy**. Your site goes live at `your-project.vercel.app`.
5. (Optional) Add a **custom domain** under **Project → Settings → Domains**.

Every push to the default branch triggers a new production deploy; pull requests get
preview URLs automatically.

### Option B — Vercel CLI

```bash
# install the CLI once
npm i -g vercel

# from the project root — follow the prompts (accept the Vite defaults)
vercel

# ship a production build
vercel --prod
```

> **SPA note:** This is a single-page app that scrolls to in-page anchors, so no
> rewrite rules are required. If you later add client-side routes with different
> paths, add a `vercel.json` with a catch-all rewrite to `/`.

## 📄 License

Personal portfolio — feel free to use it as a reference for your own.
