# Steven Morano | Marketing Operations & AI Systems Consultant Website

A modern, premium, high-performance personal portfolio website for **Steven Morano**, representing his professional consulting services, work history, and technical experiments.

The site is built as a static-ready Next.js application, optimized for visual excellence, layout responsiveness on high-resolution displays, SEO visibility, and client-side performance.

---

## 🛠️ Technology Stack

- **Framework**: [Next.js 16+ (App Router)](https://nextjs.org/) & **React 19**
- **Styling**: [Tailwind CSS v4.0](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) (rendered with precision `strokeWidth={1.2}` or `strokeWidth={1.5}`)
- **Fonts**:
  - `Plus Jakarta Sans`: Modern geometric sans-serif for body copy and UI elements.
  - `Outfit`: Bold display sans-serif for headlines and section indicators.

---

## 🎨 Visual Design Guidelines (Premium Agency-Grade Specs)

The site strictly adheres to digital agency design principles:
1. **OLED First Theme**: Deep `#030303` black body backdrop with soft blurred backing glow overlays and linear neon grids.
2. **Double-Bezel (Doppelrand) Architecture**: Cards and panels are wrapped in concentric bezel boxes:
   - *Outer Bezel*: `bg-white/[0.01] border border-white/[0.05] p-1.5 rounded-[2rem]`
   - *Inner Core*: `bg-[#07070a] border border-white/[0.03] p-8 rounded-[calc(2rem-6px)]`
   - *Concentric Math*: Inner radius = `calc(Outer Radius - Padding)`.
3. **Button-in-Button CTAs**: Primary action buttons utilize a fully rounded capsule housing text and a separate, nested circular icon pill that animates independently.
4. **CSS Noise Overlay**: A fixed, low-opacity grain structure is applied globally to establish physical paper texture.
5. **Fluid Easing**: Custom transition curves mimic realistic physical weight and damping:
   - `ease-[cubic-bezier(0.16,1,0.3,1)]`

---

## 📁 Project Structure

```
├── public/                  # Static assets
└── src/
    ├── app/
    │   ├── globals.css      # Custom animations, bezel variables, and global classes
    │   ├── layout.tsx       # Google Fonts loading, noise overlay, and SEO metadata
    │   ├── page.tsx         # Page controller aggregating sections inside containers
    │   ├── robots.ts        # Dynamic robots.txt generation
    │   └── sitemap.ts       # Dynamic sitemap.xml generation
    ├── components/          # Modular UI components
    │   ├── Navbar.tsx       # Sticky floating glass nav with sliding highlights
    │   ├── Hero.tsx         # Typography headline, location badges, and action CTAs
    │   ├── About.tsx        # Personal narrative and systems connector SVG flowchart
    │   ├── WhatIDo.tsx      # Bento grid for core business consulting services
    │   ├── Experience.tsx   # Stat bento card and work history timeline
    │   ├── Stack.tsx        # Consolidated tools & platforms categories grid
    │   ├── Projects.tsx     # Selected SaaS/experiments bento cards and horizontal swipe carousel
    │   ├── Contact.tsx      # Indented layout block with email, social, and booking buttons
    │   └── Footer.tsx       # Brand signature, copyright, and metadata indicators
    └── data/
        └── siteContent.ts   # Centralized copy, experience data, stack categories, and links
```

---

## ✏️ How to Edit Content

To modify the website text, statistics, software stack categories, or project links, you do **not** need to touch the layout components. All page content is centralized:
- Edit [src/data/siteContent.ts](file:///d:/AntigravityWorkspaces/stevenmoranocom/src/data/siteContent.ts).
- Save changes, and Next.js will automatically hot-reload the changes.

---

## 🚀 Running the Project

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
The development server is configured to run on port **3001**:
```bash
npm run dev
```
Open [http://localhost:3001](http://localhost:3001) in your browser.

### 3. Production Build
To check build optimization and compile static assets:
```bash
npm run build
```

---

## 🗺️ Roadmap & Current Progress

### Phase 1: Core Layout & Content Setup (Completed)
- [x] Next.js App Router & Tailwind CSS integration.
- [x] Centralized typescript content schema in `siteContent.ts`.
- [x] Full page section implementation matching consulting positioning.

### Phase 2: Design Scaling & Spacing Tuning (Completed)
- [x] Widened page container layouts to `max-w-6xl` (1152px) for widescreen readability.
- [x] Scaled micro-font sizes up to `text-xs/sm` to ensure sharp legibility on 1080p and 1440p displays.
- [x] Tightened vertical section padding and margins on mobile viewports.
- [x] Refactored mobile services cards to stack cleanly and limit visible chips to top 3 items.
- [x] Added swipe horizontal indicator to mobile projects carousel.
- [x] Aligned timeline dots exactly with vertical guide lines.

### Phase 3: Performance & SEO Optimizations (Completed)
- [x] Converted Leaf components (Contact, Footer) to Server Components to trim client-side JS.
- [x] Optimized Navbar scroll listeners with passive event listeners and `requestAnimationFrame` throttling.
- [x] Implemented dynamic sitemap and robots.txt outputs.
- [x] Updated SEO titles, descriptions, and OpenGraph social sharing tags.
- [x] Integrated booking email fallback for Cal.com buttons.
- [x] Removed unused components (`Personal.tsx`) and verified clean ESLint/TypeScript compilation.
