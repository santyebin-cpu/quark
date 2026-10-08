# Qark Energy website

Astro 5 static site for Qark Energy (Qark One, a thorium SMR for India): plain CSS with tokens in `src/styles/global.css`, vanilla TypeScript, Lenis for smooth scrolling. `npm run dev` serves http://localhost:4321; `npm run build` must pass before work is done. Product truth lives in `PRODUCT.md`; read it before writing copy, and never invent sites, partners, dates, people or customers.

## Design and redesign work: use the design skills

Any task that designs, redesigns, restyles or animates the website (a new page or section, a visual change, layout, typography, color, imagery or motion) must use the installed design skills. Load them with the Skill tool before writing code:

1. **`impeccable` first, every time.** It leads the process: project context, direction, its craft floor and the finish check. Run the sub-command that fits the task (`critique`, `audit`, `polish`, `bolder`, `quieter`, `layout`, `typeset`, `animate`, ...). If `PRODUCT.md` does not exist yet, offer the user `/impeccable init` before a large redesign.
2. **Add the skills the task calls for:**
   - Redesigning an existing page or section: `redesign-existing-projects` (audit first, then upgrade).
   - Building a new page or section: `design-taste-frontend`.
   - Overall visual finish: `high-end-visual-design` (the calm, premium direction this site follows).
   - Any animation or transition: `emil-design-eng` for the principles and `animate` to build it. Use `find-animation-opportunities` when asked where motion should go, `improve-animations` to audit existing motion.
   - Components with variable content (stats, cards, lists, forms): `break-ui`.
   - Phone behavior (fixed or sticky elements, full-height sections, touch): `mobile-native`.
3. **Before calling it done:** run impeccable's `audit` and `polish` on what changed, then check it in the browser at desktop and phone widths, with both `?motion=full` and `?motion=reduced`.

Three skills only run when the user types them. Suggest them at the right moment: `/review-animations` after motion changes, `/prototype` when choosing between design directions, `/pick-ui-library` before adding a dependency.

Skip these for this project unless the user asks for them: `minimalist-ui` and `industrial-brutalist-ui` (different visual directions); `gpt-taste`, `design-taste-frontend-v1` and `stitch-design-taste` (variants for other tools); `image-to-code`, `imagegen-frontend-web`, `imagegen-frontend-mobile` and `brandkit` (need an image generator); `write-swift`, `animate-expo` and `ask-sonner` (other stacks).

## Rules that override the skills

The skills hold strong and sometimes conflicting opinions. Where they disagree with these rules, these rules win:

- The user's brief and the site's established design language come first: black WebGL hero, two-tone headlines (ink and grey), violet accent `#745adb`, Instrument Sans, numbered chapter sections, rounded photo cards, TerraPower-like pacing.
- Keep the stack. No React, Tailwind, GSAP or other frameworks or animation libraries unless the user asks; build motion with CSS and the scroll drivers in `src/layouts/Layout.astro` and `src/pages/index.astro`.
- Reduced motion goes through the `html.motion-reduced` class set in the layout head, not `@media (prefers-reduced-motion)`. Replace movement with fades rather than removing animation entirely.
- Photos are registered in `src/data/media.ts` and rendered with `src/components/Photo.astro`; concept renders live in `src/assets/plant/` and render through `src/components/Render.astro` (or `Picture`) with a "Concept render" tag.
- Reactor figures come only from `src/data/qark-one.ts` (drawing QE-GA-001).
