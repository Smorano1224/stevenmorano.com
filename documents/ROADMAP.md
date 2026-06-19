# Project Roadmap & Progress Tracker

This document outlines the development phases, completed milestones, and future tasks for Steven Morano's personal website.

---

## 🏁 Current Status & Achievements

We have completed the core development, visual scaling, search engine optimizations, and frontend polishes, bringing the site to Awwwards-tier visual specifications and 100% clean validation under strict TypeScript and ESLint standards.

### Completed Milestones

#### Phase 1: Core Content & Schema Bootstrap
- [x] Initialized Next.js App Router and Tailwind CSS v4 integration.
- [x] Set up TypeScript schema interfaces and centralized content variables inside `src/data/siteContent.ts`.
- [x] Mapped fonts (`Outfit` for display headings, `Plus Jakarta Sans` for body copy).

#### Phase 2: Double-Bezel Visual Styling & UI Elements
- [x] Built card components following concentric double-bezel (Doppelrand) architecture.
- [x] Set up global noise texture overlay for organic paper styling.
- [x] Configured Lucide icons with custom thin stroke widths (`1.2` / `1.5`) and thin SVG brands.
- [x] Crafted Button-in-Button interactive capsule CTAs with fluid transitions (`ease-apple`).
- [x] Resolved root layouts React hydration mismatches.

#### Phase 3: Screen Scaling & Mobile Responsiveness
- [x] Widened page layout container to `max-w-6xl` (1152px) for widescreen readability.
- [x] Scaled typography size elements from `text-[10px]` to `text-xs/sm` to ensure legibility on 1080p and 1440p displays.
- [x] Tightened mobile section margins and padding spacing constraints by 25% (`space-y-8 sm:space-y-12`).
- [x] Restructured mobile services list to show stacked card columns, wrapping description texts, and limiting visible tags to 3 key items.
- [x] Integrated horizontal swipe ping indicators above Selected Projects carousel on mobile.
- [x] Perfected timeline dot alignment in the Work History vertical list.
- [x] Enlarged toggle button touch heights on mobile to guarantee a 44px minimum tap target.

#### Phase 4: React Performance & SEO Optimizations
- [x] Converted Leaf components (Contact card, Footer) to Server Components, reducing the client-side JS bundle.
- [x] Throttled floating navbar scroll spy listener using `requestAnimationFrame` and `passive` event configurations to eliminate scroll jank.
- [x] Set up dynamic `/robots.txt` and `/sitemap.xml` Next.js routes.
- [x] Optimized global SEO meta configurations and aligned LinkedIn/Twitter preview cards with the *Marketing Operations & AI Systems Consultant* positioning.
- [x] Implemented email booking fallback redirects for placeholder Cal.com buttons.
- [x] Audited codebase, deleted unused components (`Personal.tsx`), and verified zero compile warnings/errors.

#### Phase 5: SEO, Accessibility & UX Hardening
- [x] Consolidated duplicate responsive markup in `Projects.tsx` and `WhatIDo.tsx` into single mapped containers with responsive classes.
- [x] Removed text-node duplicates in `Hero.tsx` and `Contact.tsx` for cleaner crawler indexability and SEO parsing.
- [x] Added `aria-hidden` and `tabIndex` locks to the mobile header navigation menu inside `Navbar.tsx` to secure keyboard navigation pathways.
- [x] Set `aria-hidden="true"` on the visual-only flowchart component in `About.tsx` to keep screen readers focused on semantic narrative content.
- [x] Replaced the janky scroll-spy loop in `Navbar.tsx` with a native browser `IntersectionObserver` coupled with a click-scroll locking throttle ref to prevent highlight jumping.
- [x] Reordered navigation links to match the exact visual layout order of sections on the website (About -> Services -> Experience -> Stack -> Projects -> Contact).

#### Phase 6: Mobile Safari (iOS) Performance Hardening
- [x] Designed and integrated the `useMobileSafe` hook to bypass Framer Motion entrance/scroll animations on mobile and reduced-motion viewports.
- [x] Configured static visibility states immediately on load for all sections on mobile to resolve scroll-delayed popping.
- [x] Relocated fixed SVG turbulence noise filter to desktop media query wrappers (`min-width: 1024px`) to remove CPU-heavy redraw processes.
- [x] Replaced composition-heavy backdrop-filter properties on major outer sections and experience cards with opaque colors on mobile viewports.
- [x] Extracted redundant backdrop-blur filters on the sticky navbar mobile navigation sheet to simplify layout composite cycles.
- [x] Completely disabled the 3D perspective grid floor and absolute blurred background light overlay circles on mobile viewports, saving huge compositing calculations.
- [x] Restricted body background radial gradients and drop shadows (`shadow-lg`, `shadow-2xl`) to desktop screens, preventing GPU repaint cycles.

#### Phase 7: Mobile Readability & Sizing Optimization
- [x] Reduced outer margin page constraints from `px-4` to `px-3` (12px) to maximize screen width usage on mobile viewports.
- [x] Scaled mobile text sizes across the board to improve legibility (body copy to 15.5px, card descriptions to 14.5px, and metadata/chips to 13.5px).
- [x] Refined contact button padding and font sizes for better mobile tap targets.
- [x] Unified contact CTA links on mobile and desktop while completely removing the Travel Blog link from both.
- [x] Verified full build and compile compliance using strict `tsc`, `lint`, and Next.js static output builds.

---

## 🗺️ Future Roadmap & Development Ideas

These are future opportunities to extend the website as Steven Morano's consulting business grows:

### 1. Cal.com / Calendly Direct Integration
- **Goal**: Allow users to book calls directly on-page.
- **Approach**: Replace the email booking fallback with Cal.com inline iframe embed widgets, styling the scheduling box inside the concentric double-bezel template.

### 2. Serverless Contact Form API
- **Goal**: Enable direct email submission from the contact banner.
- **Approach**:
  - Create a Next.js serverless route: `src/app/api/contact/route.ts`.
  - Use [Resend](https://resend.com) or [Nodemailer](https://nodemailer.com) to route form submissions directly to `steven@stevenmorano.com`.
  - Add client validation via React Hook Form and Zod.

### 3. Vercel Hosting & Domain Configuration
- **Goal**: Host the compiled static files live on Vercel.
- **Approach**:
  - Connect the GitHub repository to a Vercel team project.
  - Set up DNS records (CNAME/A) on the registrar to map the custom domain `stevenmorano.com`.
  - Verify HTTPS and SSL certificates.
