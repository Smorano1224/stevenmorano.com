# ANTIGRAVITY.md — Developer Guidelines & Reference

This guide helps Antigravity and developers build on, maintain, and check the code in this repository.

## 🚀 Commands Reference

- **Development Server**: `npm run dev` (Runs on port `3001` in this workspace)
- **Compile Production Build**: `npm run build`
- **Lint Code**: `npm run lint` (runs `eslint`)

---

## 🎨 Architectural Design Rules (Awwwards-Tier)

All subsequent visual updates or page additions **MUST** strictly follow the design system:

1. **Banned Fonts**: Do NOT import or use `Inter`, `Roboto`, `Arial`, or `Helvetica` for styling. 
   - Use `Plus Jakarta Sans` (`var(--font-plus-jakarta)`) for body and interface elements.
   - Use `Outfit` (`var(--font-outfit)`) for headings and sections.
2. **Concentric Double-Bezel (Doppelrand)**: All major visual cards must follow this layout structure:
   - *Outer Shell*: `bg-white/[0.01] border border-white/[0.05] p-1.5 rounded-[2rem]`
   - *Inner Core*: `bg-[#07070a] border border-white/[0.03] p-8 rounded-[calc(2rem-6px)]`
   - *Concentric Math*: Inner radius = `calc(Outer Radius - Padding)`.
3. **Thin SVG Icons**:
   - Set `strokeWidth={1.2}` or `strokeWidth={1}` on all Lucide React icons.
   - Use custom thin SVG outlines for brand icons (LinkedIn, GitHub) in `Contact.tsx`.
4. **Button-in-Button CTAs**:
   - Buttons are fully rounded pills: `pl-6 pr-2 py-2 rounded-full`.
   - Trailing icons must sit inside their own circular container: `w-8 h-8 rounded-full bg-white/10 flex items-center justify-center`.
   - Use `ease-apple` transition: `cubic-bezier(0.16, 1, 0.3, 1)`.
5. **No Hydration Mismatches**:
   - If writing layout elements that can be modified by browser extensions or testing harnesses, attach the `suppressHydrationWarning` prop (e.g. to the `<html>` tag).

---

## 📁 Key File Map

- **[siteContent.ts](file:///d:/AntigravityWorkspaces/stevenmoranocom/src/data/siteContent.ts)**: Central data configurations. **Modify this file first** to change text, lists, stats, or links.
- **[globals.css](file:///d:/AntigravityWorkspaces/stevenmoranocom/src/app/globals.css)**: Custom keyframes, noise filters, layout easing.
- **[layout.tsx](file:///d:/AntigravityWorkspaces/stevenmoranocom/src/app/layout.tsx)**: Font loader, noise backdrop, global HTML wrapper.
- **[components/](file:///d:/AntigravityWorkspaces/stevenmoranocom/src/components/)**: React UI components folder.
