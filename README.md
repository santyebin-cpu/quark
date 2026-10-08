# Qark Energy

Marketing website for Qark Energy and Qark One, a thorium-fuelled small modular reactor for India. The site is a static build in the visual language of [terrapower.com](https://www.terrapower.com/): a dark WebGL hero, pinned scroll chapters, two-tone headlines, a pill-shaped fixed nav with a slide-in menu, and a cookie notice.

## Stack

- [Astro](https://astro.build) 5 (static output, zero client-side framework), with `astro:assets` generating AVIF/WebP image sets
- Plain CSS with design tokens in `src/styles/global.css`
- Vanilla TypeScript for the nav/menu, WebGL hero, scroll-driven chapters, reveals/parallax, cookie banner and contact form
- [Lenis](https://github.com/darkroomengineering/lenis) for smooth scrolling
- Instrument Sans from Google Fonts

### Imagery

- **Concept renders** (`src/assets/plant/`): plant cutaway, underground pool hall, reactor vessel, factory hall and the general-arrangement drawing QE-GA-001, all supplied by Qark Energy. The four photographic renders are illustrations, so every one carries a "Concept render" tag; don't label their parts with Qark One design terms (their equipment does not match the pressure-tube design).
- **Photographs** are placeholder stock hot-linked from Unsplash (free under the [Unsplash License](https://unsplash.com/license)), listed with credits in `src/data/media.ts`. Swap the IDs there for Qark Energy's own photography before launch.

### Motion

Animations follow the visitor's OS "reduce motion" setting: with it on, movement (smooth scrolling, parallax, zooms, the camera tour and pans) is replaced by fades. To preview either mode regardless of that setting, add `?motion=full` or `?motion=reduced` to any URL; the choice sticks for the browser tab.

## Development

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the production build
```

## Structure

```
src/
  assets/plant/ Concept renders and drawing QE-GA-001 (optimised at build time)
  components/   Nav, Footer, CookieBanner, HeroCanvas, Photo, Render, SectionNumber, PageHero, Icons, Logo
  data/         site.ts (brand, nav, emails), qark-one.ts (reactor reference data), media.ts (photos), news.ts, faq.ts
  layouts/      Layout.astro (document shell), LegalLayout.astro
  pages/        index, qark-one, thorium, india, industry, about, news, careers, suppliers, faq, contact, terms, privacy, cookie, 404
  styles/       global.css (tokens, type scale, grid, shared primitives)
public/         favicon.svg
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage: WebGL core lattice, scroll-lit statement, plant camera tour, factory pan, passive-safety full-bleed, reactor, blueprint draw-in with principal data, thorium stages, one door per audience |
| `/qark-one` | The reactor: how it works, passive safety, the drawing, full principal data |
| `/thorium` | Why thorium, India's three-stage programme, Qark One's fuel, where the design stands |
| `/india` | Why India needs more firm power, where Qark One fits, the Indian supply chain, first plant (not yet announced) |
| `/industry` | Electricity and 285 °C steam for industry and desalination |
| `/about` | Mission, principles and disciplines (no named people until real profiles exist) |
| `/news` | Verifiable news only: Qark One milestones, explainers, Indian policy |
| `/careers` | Disciplines Qark Energy hires for |
| `/suppliers` | What a plant needs and how suppliers get involved |
| `/faq` | Grouped questions on Qark One, thorium, safety and the company |
| `/contact` | Topic-routed contact form (opens the visitor's email app), direct lines |
| `/terms`, `/privacy`, `/cookie` | Legal |

## Deploying

The site is fully static (`dist/`), so any static host works. Internal links go through `withBase()` in `src/lib/paths.ts`, so the build also works under a sub-path.

**Cloudflare Pages** (production, live at [qarkenergy.com](https://qarkenergy.com))
The Pages project is connected to this repo with production branch `main`, framework preset Astro, build command `npm run build`, output directory `dist` and `NODE_VERSION=22`. Every push to `main` deploys; other branches get preview URLs. Cloudflare serves `/qark-one` from `qark-one.html` and uses `404.html` for misses without extra config. The full setup history, DNS records and troubleshooting steps are in [docs/hosting-and-domain.md](docs/hosting-and-domain.md).

**Netlify** (`netlify.toml`) / **Vercel** (`vercel.json`)
Alternative hosts; import the repo and the build settings are picked up from these files.

## Notes

- Brand, navigation and email addresses live in `src/data/site.ts`. Every address uses `qarkenergy.com` (hello@, partners@, suppliers@, investors@, careers@, media@, privacy@); make sure those mailboxes or aliases exist. **Placeholder to replace:** the registered office address, which shows "Full address to follow".
- Every reactor figure comes from drawing QE-GA-001 via `src/data/qark-one.ts`; update that one file when the design changes.
- The contact form has no backend: it composes the message in the visitor's email app, addressed by topic. Wire `data-contact-form` in `src/pages/contact.astro` to a form service or API route when one exists.
- No site, partners, timelines, people or customers are stated anywhere; add them only when they are real and public.
