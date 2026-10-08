---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/qark-one.astro","src/pages/thorium.astro","src/pages/india.astro","src/pages/industry.astro","src/pages/about.astro"]
---

# Surface brief: Homepage, with the site-wide India rewrite

Scope: `src/pages/index.astro`, plus the content of every inner page for Qark Energy. Visitor mode: Persuade.

Audience and job: utilities and industry, government and partners, investors, and engineers (see PRODUCT.md). Each should leave knowing that Qark One means more firm power for India from India's own thorium, and knowing their next step.

Proof and content: five user-supplied concept renders (`src/assets/plant/*`) and the principal data on the general-arrangement drawing. Renders carry a "Concept render" label. No invented sites, partners, dates or people.

Constraints: inherit the incumbent visual system (CLAUDE.md): black WebGL hero, two-tone headlines, violet `#745adb` accent, Instrument Sans, fixed chapter indicator, rounded photo frames, Lenis smooth scroll, `html.motion-reduced`.

Unresolved: office address and email domain (placeholders until the user supplies them).

## Direction contract

THESIS: The homepage is a guided walk through one real plant design, render by render, ending at the drawing that defines it. It refuses the generic SMR page of stock towers, glowing atoms and vague promises.

OWN-WORLD: The incumbent world: near-black opener, white chapters, two-tone Instrument Sans display, violet only for small signals. Renders sit in rounded plates on grounds matched to each image: white for the cutaway, pale grey for the vessel, navy for the blueprint. Chapter label and number stay fixed in the bottom corners.

STORY: India needs far more firm power (a 100 GW nuclear goal for 2047). Qark One supplies it from thorium. The visitor sees the plant, how it is built, how it stays safe, the reactor and the drawing, then chooses a door: buy power, partner, invest or join.

FIRST VIEWPORT: Full-bleed black. A WebGL core lattice (452 fuel channels as columns of light, 61 control positions in violet) sits right of centre at about 60% of viewport height. "More power for India" sits bottom-left at display size, "More power" grey and "for India" white. Nav pill on top; chapter label and number in the bottom corners. No call to action; scrolling is the action.

FORM: Extension of the incumbent pinned-chapter scroll form; no concept-seed run (local extension of an established world). Signature interaction: the cutaway camera tour, pinned while the view travels turbine hall, reactor building, control building, each with a caption. Motion grammar: scroll-scrubbed transforms and clip-path, exponential ease-out reveals; reduced motion swaps movement for fades.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
