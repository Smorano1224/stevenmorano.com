# System Architecture & Technical Specifications

This document outlines the technical design, component hierarchy, performance optimizations, and design system constraints implemented in Steven Morano's personal consulting website.

---

## 🏗️ Next.js Rendering Architecture

The website leverages Next.js App Router and React Server Components (RSC) to minimize client-side JavaScript execution, optimizing the hydration cycle and initial page load speed.

```mermaid
graph TD
    subgraph Server Components (Build Time)
        page["page.tsx (Static Route '/')"]
        layout["layout.tsx (Global Wrapper)"]
        contact["Contact.tsx (RSC Component)"]
        footer["Footer.tsx (RSC Component)"]
    end

    subgraph Client Components (Hydrated)
        navbar["Navbar.tsx (State & Scroll Listeners)"]
        hero["Hero.tsx (Framer Motion Entrance)"]
        about["About.tsx (Framer Motion & Local Expand State)"]
        whatido["WhatIDo.tsx (Framer Motion & Bento Grid)"]
        experience["Experience.tsx (Local Accordion State)"]
        stack["Stack.tsx (Local Filter State)"]
        projects["Projects.tsx (Framer Motion & Carousel)"]
    end

    layout --> page
    page --> navbar
    page --> hero
    page --> about
    page --> whatido
    page --> experience
    page --> stack
    page --> projects
    page --> contact
    page --> footer
```

### Component Breakdown
- **Server Components (Default)**: Components like [Contact.tsx](file:///d:/AntigravityWorkspaces/stevenmoranocom/src/components/Contact.tsx) and [Footer.tsx](file:///d:/AntigravityWorkspaces/stevenmoranocom/src/components/Footer.tsx) do not contain client-only hooks (`useState`, `useEffect`) or event listeners. By removing `"use client"`, they compile to raw static HTML/CSS, reducing the client-side JavaScript payload.
- **Client Components**: Added `"use client"` only where dynamic state (expanding lists in `Experience.tsx`/`Stack.tsx`/`About.tsx`), scroll listeners (`Navbar.tsx`), or hardware-accelerated animations (`Hero.tsx`/`Projects.tsx`) are required.

---

## 🎨 Design System & Layout Constraints

All layouts strictly enforce the **Double-Bezel (Doppelrand) UI pattern** to create soft visual depth.

### Double-Bezel Architecture
Concentric containers are structured as follows to ensure radius spacing scales proportionally:
- **Outer Shell Bezel**:
  - CSS: `bg-white/[0.01] border border-white/[0.05] p-1.5 rounded-[2rem]` (translates to 32px outer corner radius).
- **Inner Core Content**:
  - CSS: `bg-[#07070a] border border-white/[0.03] p-8 rounded-[calc(2rem-6px)]` (translates to 26px inner corner radius, matching the padding offset).
- **Spacing Principle**: Inner Radius = `Outer Radius - Padding` to prevent corner distortion.

### Widescreen Optimization & Grid Containment
- **Wrapper Constraint**: The main wrapper container is set to `max-w-6xl` (1152px) on desktop to guarantee breathing room and prevent grid columns from spreading too far on 1080p and 1440p monitors.
- **Typography Scale**: Base text scales to `text-xs md:text-sm`, and headings scale to `text-sm md:text-base` within cards to ensure absolute scanning legibility on wide screen resolutions.

---

## 🚀 Performance Optimizations

### IntersectionObserver Scroll Spy & Throttled Scroll Listener
To completely eliminate layout thrashing and scrolling lag (scroll-spy jank) caused by reading layout properties (`offsetTop` and `offsetHeight`) during rapid scroll events:
1. **Intersection Detection**: We utilize a native browser `IntersectionObserver` configured with a custom trigger viewport margin (`rootMargin: "-150px 0px -50% 0px"`) to track exactly when sections enter the upper-middle portion of the screen.
2. **Scroll Lock Ref**: To prevent the active nav highlight from jumping between links during smooth scrolling animations, clicking a link triggers a manual scroll-lock state (`isManualScrolling` ref). The lock is released only after the scroll animation settles (via a scroll-end debounce).
3. **Throttled Scroll Listener**: A passive window scroll listener registered with `{ passive: true }` and throttled via `window.requestAnimationFrame` is maintained to toggle the sticky navbar background (`scrolled` state) and handle absolute top/bottom edge cases (forcing `#contact` highlight when at the absolute bottom of the page, and clearing highlights when at the top hero).

### GPU-Accelerated CSS Transitions
- **Animation Layers**: Framer Motion animations in `Hero.tsx`, `Projects.tsx`, and `WhatIDo.tsx` are strictly limited to `opacity` and `y` (vertical transforms).
- **Compositing**: By avoiding animation of layout triggers (like `width`, `height`, `margin`, or `top`), layout shifts are calculated directly on the GPU composite thread, avoiding layout calculations on the browser main thread.

### Mobile Safari (iOS) Performance Hardening
Mobile Safari uses a single-threaded WebKit rendering engine that is highly sensitive to CPU-heavy SVG filter processing and composition-heavy backdrop filters combined with active animations. To secure 60 FPS scrolling and instantaneous page loading on iPhones:
1. **Dynamic Animation Bypass**: A custom hook ([useMobileSafe.ts](file:///d:/AntigravityWorkspaces/stevenmoranocom/src/hooks/useMobileSafe.ts)) checks if the client is on a mobile platform (or has requested reduced motion). If true, it changes Framer Motion component props to a static visible state (`initial={{ opacity: 1, y: 0 }}`, `whileInView={{ opacity: 1, y: 0 }}`) immediately upon load, bypassing all scroll-spy rendering queues.
2. **Desktop-Only SVG Noise**: The fixed global background noise overlay uses an SVG turbulence filter. To prevent WebKit from re-rendering this filter on every scroll event, the rule is wrapped in a `@media (min-width: 1024px)` block in CSS, keeping mobile frames light.
3. **Optimized Backdrop Filtering**: Backdrop-blur filters on massive outer panels (`page.tsx`) and card backgrounds (`Experience.tsx` and `Navbar.tsx` mobile panels) are disabled on mobile by using responsive classes (e.g. `bg-[#050508] md:bg-[#050508]/60 md:backdrop-blur-md`). The solid opaque backdrop eliminates composite layer building overhead on WebKit.

---

## 🔍 Search Engine Optimization (SEO)

- **Dynamic Sitemap & Robots**: Dynamic sitemaps (`/sitemap.xml`) and robots directives (`/robots.txt`) are compiled automatically during builds via Next.js App Router metadata handlers ([sitemap.ts](file:///d:/AntigravityWorkspaces/stevenmoranocom/src/app/sitemap.ts) and [robots.ts](file:///d:/AntigravityWorkspaces/stevenmoranocom/src/app/robots.ts)).
- **Outline Hierarchy**: Headings are strictly linear. There is a single `<h1>` on the page (Hero title), and all major sections start with an `<h2>` heading. Subheading metadata elements within sections (like work roles) use `<h3>` tags to avoid outline gaps.
- **Semantic HTML5**: Code uses semantic structural sections (`<main>`, `<section>`, `<header>`, `<footer>`, `<nav>`, `<article>`) to make indexing highly organized for crawlers.
