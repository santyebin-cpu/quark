# Quark

Marketing website for Quark, a small modular reactor (SMR) company, and its Hadron® reactor. The site is a static build modeled on the structure and visual language of [terrapower.com](https://www.terrapower.com/): a dark animated hero, numbered content sections, a stats grid, CTA cards, a pill-shaped fixed nav with a slide-in menu, and a cookie notice.

## Stack

- [Astro](https://astro.build) 5 (static output, zero client-side framework)
- Plain CSS with design tokens in `src/styles/global.css`
- Vanilla TypeScript for the nav/menu, hero canvas animation, scroll-reveal, cookie banner and contact form
- Instrument Sans from Google Fonts

No images are bundled; "photography" slots are rendered with CSS gradients and inline SVG diagrams.

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
  components/   Nav, Footer, CookieBanner, HeroCanvas, Stat, CtaBox, SectionNumber, PageHero, Icons, Logo
  data/         site.ts (brand + nav), team.ts, news.ts, faq.ts
  layouts/      Layout.astro (document shell), LegalLayout.astro
  pages/        index, hadron, heat, future, idaho, about, news, careers, suppliers, faq, contact, terms, privacy, cookie, 404
  styles/       global.css (tokens, type scale, grid, shared primitives)
public/         favicon.svg
```

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage: hero, intro, factory/flexibility features, "Clear Advantage" stats, CTA cards |
| `/hadron` | The Hadron plant: partnership, technology, grid behavior, safety, fact sheet |
| `/heat` | Quark Heat: industrial process steam from Hadron modules |
| `/future` | Hadron-HT high-temperature roadmap and timeline |
| `/idaho` | First plant site page |
| `/about` | Company, board, leadership, biographies |
| `/news` | Newsroom list |
| `/careers` | Values, benefits, open roles |
| `/suppliers` | Procurement categories and onboarding steps |
| `/faq` | Accordion FAQ |
| `/contact` | Contact form (client-side only), offices, direct lines |
| `/terms`, `/privacy`, `/cookie` | Legal |

## Notes

- Brand and navigation copy lives in `src/data/site.ts`; change the product or company name there.
- The contact form has no backend. Wire `data-contact-form` in `src/pages/contact.astro` to a form service or API route when one exists.
- All company facts, people and figures are fictional placeholders.
