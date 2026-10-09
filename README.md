<div align="center">

# 🚀 NEXA Digital

[![Live Demo](https://img.shields.io/badge/●_LIVE_DEMO-555555?style=for-the-badge)](https://nexadigital-pk.vercel.app)
[![Click to Launch](https://img.shields.io/badge/CLICK_TO_LAUNCH-7C3AED?style=for-the-badge)](https://nexadigital-pk.vercel.app)
[![React](https://img.shields.io/badge/REACT_18-0F172A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TYPESCRIPT-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Vite](https://img.shields.io/badge/VITE-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/TAILWIND_CSS_3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Supabase](https://img.shields.io/badge/SUPABASE-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white)](https://supabase.com)
[![Vercel](https://img.shields.io/badge/DEPLOYED_ON_VERCEL-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)
[![React Router](https://img.shields.io/badge/REACT_ROUTER_7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)](https://reactrouter.com)
[![Motion](https://img.shields.io/badge/MOTION-FF0088?style=for-the-badge&logo=framer&logoColor=white)](https://motion.dev)
[![Lucide](https://img.shields.io/badge/LUCIDE_ICONS-F56565?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev)
[![ESLint](https://img.shields.io/badge/ESLINT-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org)

**NEXA Digital — A premium, fully responsive digital agency website that showcases services, portfolio work and client trust, and turns visitors into leads through a working contact form.**

</div>

---

## 📌 Table of Contents

- [a. App Name, Purpose & Problem Solved](#a-app-name-purpose--problem-solved)
- [b. Live Deployed URL](#b-live-deployed-url)
- [c. Core Features List](#c-core-features-list)
- [d. Tools, Services & Technologies Used](#d-tools-services--technologies-used)
- [e. Project Structure](#e-project-structure)
- [f. How to Run the Project Locally](#f-how-to-run-the-project-locally)
- [g. Deployment](#g-deployment)
- [Our Mission](#-our-mission)

---

## a. App Name, Purpose & Problem Solved

### 🏷️ App Name

**NEXA Digital** — *Premium Digital Agency Website*

### 💡 What It Does

NEXA Digital is a modern multi-page agency website that presents the company's services, portfolio, testimonials and story in a polished dark-themed interface with smooth animations. Visitors can explore each service in detail, browse featured projects, and send an inquiry straight from the Contact page. Inquiries are delivered by email through a serverless **Supabase Edge Function**, so no dedicated backend server is required.

### 🎯 The Real Problem It Solves & For Whom

**The Problem:**

1. **Weak First Impressions:** Agencies without a professional online presence lose potential clients before the first conversation even starts.
2. **Poor Mobile Experience:** A large share of visitors browse on phones, and sites that are not responsive drive them away.
3. **Lost Leads:** When contact options are hard to find or unreliable, interested visitors never reach out.

**For Whom:**

- 🏢 **Prospective Clients:** Quickly understand what NEXA offers, see proof of past work, and get in touch.
- 👩‍💼 **The Agency Team:** A fast, low-maintenance site that delivers inquiries directly to their inbox.

---

## b. Live Deployed URL

The application is deployed and publicly accessible online:

🔗 **Live Application URL:** [https://nexadigital-pk.vercel.app](https://nexadigital-pk.vercel.app)

---

## c. Core Features List

### 🌐 1. Multi-Page Experience

![Home](https://img.shields.io/badge/HOME-7C3AED?style=for-the-badge)
![About](https://img.shields.io/badge/ABOUT-2563EB?style=for-the-badge)
![Services](https://img.shields.io/badge/SERVICES-06B6D4?style=for-the-badge)
![Work](https://img.shields.io/badge/WORK-F59E0B?style=for-the-badge)
![Contact](https://img.shields.io/badge/CONTACT-22C55E?style=for-the-badge)

| Page | What It Offers |
|---|---|
| **Home** | Hero section, trust indicators, services overview, featured work, testimonials and call-to-action |
| **About** | Company story and values |
| **Services** | Overview of everything the agency offers |
| **Service Detail** | A dedicated page for each individual service |
| **Work** | Portfolio of projects displayed as cards |
| **Contact** | Inquiry form with contact details |

### 📱 2. Fully Responsive Design

Layouts adapt smoothly across mobile, tablet and desktop screens using Tailwind CSS.

### ✨ 3. Polished UI & Animations

- Scroll-reveal animations on sections
- Animated hero visual
- Automatic scroll-to-top on page navigation
- Consistent dark theme with purple and cyan gradient accents

### 📬 4. Working Contact Form

Form submissions are sent to a **Supabase Edge Function** (`send-contact-email`), which delivers the message by email.

### 🗂️ 5. Easy Content Management

Services, projects, testimonials and site details live in simple data files under `src/data/`, so content can be updated without touching the page layouts.

### 🧩 6. Reusable Component Architecture

Navbar, Footer, CTA, PageHeader, ServiceCard, ProjectCard and TestimonialCard components keep the codebase clean and consistent.

---

## d. Tools, Services & Technologies Used

| Category | Technology | Role in the Application |
|---|---|---|
| Frontend Framework | [React 18](https://react.dev) + [TypeScript](https://www.typescriptlang.org) | Component-driven UI with strict type safety |
| Build Tooling | [Vite](https://vitejs.dev) | Fast development server and optimized production builds |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) + [PostCSS](https://postcss.org) | Utility-first responsive styling and custom theme |
| Routing | [React Router 7](https://reactrouter.com) | Client-side navigation between pages |
| Animation | [Motion](https://motion.dev) | Scroll-reveal and UI animations |
| Icons | [Lucide React](https://lucide.dev) | Clean, consistent vector icons |
| Backend / Serverless | [Supabase](https://supabase.com) + [Edge Functions](https://supabase.com/docs/guides/functions) | Sends contact form emails securely |
| Code Quality | [ESLint](https://eslint.org) | Linting and consistent code style |
| Deployment | [Vercel](https://vercel.com) | Hosting with continuous deployment from GitHub |

---

## e. Project Structure

```
nexa-digital/
├── src/
│   ├── components/     # Navbar, Footer, CTA, ContactForm, cards, Reveal, etc.
│   ├── data/           # services, projects, testimonials, site info
│   ├── pages/          # Home, About, Services, ServiceDetail, Work, Contact
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── supabase/
│   ├── config.toml
│   └── functions/
│       └── send-contact-email/   # Edge Function for contact emails
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── vercel.json
```

---

## f. How to Run the Project Locally

### Prerequisites

- **Node.js:** Version 18.x or higher installed
- **Git:** Installed on your system
- **Supabase Project:** Required only for the contact form

### Step-by-Step Local Setup Guide

1. **Clone the Repository:**

```bash
   git clone https://github.com/fizaishaq/nexa-digital.git
   cd nexa-digital
```

2. **Install Dependencies:**

```bash
   npm install
```

3. **Configure Environment Variables:** Create a `.env` file in the project root directory:

```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. **Start Development Server:**

```bash
   npm run dev
```

   Open your browser and navigate to the local URL shown in the terminal (usually `http://localhost:5173`).

5. **Build for Production:**

```bash
   npm run build
```

6. **Preview the Production Build:**

```bash
   npm run preview
```

### Other Useful Scripts

| Command | Description |
|---|---|
| `npm run lint` | Run ESLint to check code quality |
| `npm run typecheck` | Run the TypeScript type checker |

---

## g. Deployment

The project is deployed on **Vercel** and redeploys automatically on every push to the connected branch.

To deploy your own copy:

1. Import the repository into Vercel (Framework Preset: **Vite**).
2. Add the environment variables from the `.env` example above.
3. Click **Deploy**.

The `vercel.json` rewrite rule ensures direct links to pages such as `/about` or `/services` load correctly.

---

## 🎯 Our Mission

NEXA Digital exists to help brands grow online through clean design, reliable engineering and a smooth experience for every visitor. By combining a modern tech stack with a thoughtful user experience, it turns first-time visitors into confident clients.

---

<div align="center">

Made with ❤️ by [fizaishaq](https://github.com/fizaishaq)

</div>
