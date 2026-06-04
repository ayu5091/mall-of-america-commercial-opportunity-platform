# 🏬 Mall of America — Commercial Opportunity Platform

> An interactive, cinematic sales deck built to showcase commercial leasing, sponsorship, and event opportunities at Mall of America — the largest retail and entertainment destination in North America.

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?logo=tailwindcss)
![Prisma](https://img.shields.io/badge/Prisma-6-2D3748?logo=prisma)

---

## 📋 Table of Contents

- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Design Decisions](#design-decisions)
- [AI Tools Used](#ai-tools-used)
- [Features](#features)

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS v4 |
| **UI Components** | shadcn/ui + Radix UI |
| **Animations** | Framer Motion |
| **Database ORM** | Prisma 6 (SQLite) |
| **Auth** | NextAuth.js v4 |
| **State Management** | Zustand |
| **Data Fetching** | TanStack Query v5 |
| **Forms** | React Hook Form + Zod |
| **Charts** | Recharts |
| **Runtime** | Bun |
| **AI SDK** | z-ai-web-dev-sdk |

---

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── api/route.ts          # API route handler
│   │   ├── globals.css           # Global styles & CSS variables
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Main page (section orchestrator)
│   ├── components/
│   │   ├── navigation/
│   │   │   ├── TopBar.tsx        # Sticky top nav with scroll transparency
│   │   │   ├── SideNav.tsx       # IntersectionObserver-driven side nav
│   │   │   └── MobileNav.tsx     # Hamburger menu for mobile
│   │   ├── sections/
│   │   │   ├── CinematicHero.tsx     # Ken Burns hero with staggered reveal
│   │   │   ├── WhyProperty.tsx       # Animated counters & demographics
│   │   │   ├── Retail.tsx            # Category cards & growth chart
│   │   │   ├── Luxury.tsx            # Glassmorphism luxury brands section
│   │   │   ├── DiningLifestyle.tsx   # Dining categories & counters
│   │   │   ├── Attractions.tsx       # Attraction cards with hover effects
│   │   │   ├── EventsPlatform.tsx    # 400+ events highlights & timeline
│   │   │   ├── Sponsorship.tsx       # 3-tier partnership module
│   │   │   ├── LeasingPaths.tsx      # 4 leasing category paths
│   │   │   ├── EventsModule.tsx      # 5 venue types & specs
│   │   │   ├── VenueModules.tsx      # Detailed venue specifications
│   │   │   └── ContactCTA.tsx        # 3-CTA contact section
│   │   └── ui/
│   │       ├── GlassCard.tsx         # Reusable glassmorphism card
│   │       ├── AnimatedCounter.tsx   # RAF-based smooth number counter
│   │       ├── SectionWrapper.tsx    # Scroll-triggered animation wrapper
│   │       └── LoadingScreen.tsx     # Animated loading with gold progress bar
│   ├── hooks/
│   │   ├── use-mobile.ts         # Responsive breakpoint hook
│   │   └── use-toast.ts          # Toast notification hook
│   └── lib/
│       ├── db.ts                 # Prisma client singleton
│       └── utils.ts              # Utility helpers (cn, etc.)
├── prisma/
│   └── schema.prisma             # Database schema
├── public/                       # Static assets & AI-generated images
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## ⚙️ Setup Instructions

### Prerequisites

- [Bun](https://bun.sh) >= 1.0 (recommended) or Node.js >= 18
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/ayu5091/mall-of-america-commercial-opportunity-platform.git
cd mall-of-america-commercial-opportunity-platform
```

### 2. Install Dependencies

```bash
bun install
# or
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory:

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Set Up the Database

```bash
bun run db:generate    # Generate Prisma client
bun run db:push        # Push schema to SQLite database
```

### 5. Run the Development Server

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 6. Build for Production

```bash
bun run build
bun run start
```

---

## 🎨 Design Decisions

### Visual Theme
A **luxury dark theme** was chosen to match Mall of America's premium positioning:
- **Background:** `#0A0A0B` — near-black for cinematic depth
- **Gold Accent:** `#C9A84C` — premium gold for highlights, CTAs, and borders
- **Typography:** Clean sans-serif with generous spacing for a high-end feel

### Component Architecture
- Each section is a **self-contained component** for maintainability and independent scrolling animation control
- A **SectionWrapper** component provides consistent scroll-triggered entrance animations across all sections
- Reusable **GlassCard** and **AnimatedCounter** primitives reduce duplication

### Navigation Strategy
- **Non-linear navigation** via a sticky SideNav that uses `IntersectionObserver` to highlight the active section in real-time — no manual scroll tracking
- **TopBar** transitions from transparent to solid on scroll for a cinematic feel
- **MobileNav** (hamburger) activates below `md` breakpoint for responsive design

### Performance
- Images are AI-generated and optimized with Next.js `<Image>` and `sharp`
- Animations use `framer-motion`'s `whileInView` to defer rendering until visible
- `AnimatedCounter` uses `requestAnimationFrame` for smooth, jank-free number counting

### Database
- **SQLite via Prisma** was chosen for simplicity in a demo/presentation context — easily swappable to PostgreSQL for production by changing a single line in `schema.prisma`

---

## 🤖 AI Tools Used

### Z AI GLM Model (`z-ai-web-dev-sdk`)
The **Z AI GLM model** was the primary AI engine powering this project:

- **Image Generation:** All 12+ section images (hero, retail, luxury, dining, attractions, events, sponsorship, venues, etc.) were generated using the Z AI GLM model, producing high-quality, context-specific visuals tailored to Mall of America's brand
- **Content Generation:** Section copy, statistics, and descriptive text were drafted and refined with AI assistance
- **Component Scaffolding:** Initial component structures and logic patterns were generated and iterated on using the Z AI GLM model via the `z-ai-web-dev-sdk` integration

### Claude (Anthropic)
- Used for code review, architecture guidance, and README drafting

---

## ✨ Features

- 🎬 **Cinematic Hero** — Ken Burns zoom effect with staggered text reveal and grain overlay
- 📊 **Animated Statistics** — Smooth RAF-based counters for visitor numbers, revenue, and event data
- 💎 **Glassmorphism UI** — Frosted glass cards for luxury sections
- 📍 **Smart Navigation** — IntersectionObserver-powered active section tracking
- 📱 **Fully Responsive** — Mobile-first design with dedicated mobile navigation
- 🌑 **Loading Experience** — Branded loading screen with animated gold progress bar
- 🏗 **12 Sections** — Hero → Why Property → Retail → Luxury → Dining → Attractions → Events → Sponsorship → Leasing → Venues → Contact
- 🎯 **3-Tier Sponsorship** — Presenting, Platinum, and Signature partnership tiers
- 🏢 **4 Leasing Paths** — Flagship, Pop-Up, Kiosk, and Digital Display categories

---

## 📄 License

This project was built as a commercial opportunity platform demonstration for Mall of America.

---

*Built with ❤️ by Ayush Mahajan*
