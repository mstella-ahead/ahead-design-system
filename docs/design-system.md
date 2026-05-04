# AHEAD Design System — Spec

*Extracted from the production stylesheet (`styles.378ac6ea975bd5e164a8.css`, ~307KB) and cross-checked across the homepage, AI service page, Our Work page, the "Anatomy of Operational Excellence" article, and the case studies index. This is a plausible reconstruction, not the source of truth — the original team's intent is inferred from the evidence.*

---

## 1. Stack & Architecture

- **Framework**: Gatsby (React, static-rendered)
- **CSS**: Tailwind CSS (compiled), with hand-rolled component classes layered on top
- **Single global stylesheet** — same `styles.<hash>.css` is referenced from every page, so the system is genuinely consistent rather than per-page divergent
- **Naming convention for components**: BEM-ish kebab-case with `--variant` modifiers (e.g., `button--blue-fill`, `button--blurple-mini-t`)

## 2. Brand Voice (Visual)

The site reads as **enterprise-confident with editorial flair**. The flair comes from two recurring devices:

1. **Italic-serif emphasis inside large headings** — any `<i>` or `<em>` inside an `h2`/`h3`/`h4` switches to PT Serif at 1.09em while the surrounding text stays in Poppins.
2. **Highlighter-pen link hover** — links carry a 1–2px inset bottom shadow (looks like an underline). On hover, the inset expands to 24px, filling the link's bounding box with the brand color, while the text flips to white.

Together these create a system that feels structured but warm — engineering with personality.

## 3. Color Tokens

### Primary palette
| Token | Hex | Role |
|---|---|---|
| `--ahead-cyan` | `#009fdc` | Signature brand accent. Eyebrow text, section labels, primary CTA on dark, link highlight |
| `--ahead-blurple` | `#1c4cbf` | Secondary accent. Default link color, "blurple" button fills, in-text emphasis |
| `--ahead-navy` | `#123a61` | Deep brand navy. Backgrounds, dark sections |
| `--ahead-canvas` | `#102033` | Darkest canvas. Hero backgrounds, full-bleed dark sections |
| `--ahead-near-black` | `#181c24` | UI black (use over pure `#000`) |
| `--ahead-mid-navy` | `#253857` | Card backgrounds on dark, secondary surfaces |

### Surfaces & neutrals
| Token | Hex | Role |
|---|---|---|
| `--surface-light` | `#ebf0f2` | Light section background, default canvas for case studies, tag/chip background |
| `--surface-white` | `#ffffff` | Default canvas |
| `--text-muted` | `#6b7280` | Secondary text |
| `--text-quiet` | `#5a5a5a` | Captions, metadata, share icons |
| `--border-quiet` | `#c9c9c9` | Dividers, low-contrast borders |

### Accent / state
| Token | Hex | Role |
|---|---|---|
| `--accent-cyan-light` | `#67c3e9` | Tinted variant of cyan (used for author bylines, second-quote color) |
| `--accent-green` | `#00b388` | Success / positive metric |
| `--accent-mint` | `#6eceb2` | Soft positive |
| `--accent-error` | `#f87171` | Errors (Tailwind red-400) |

**Usage rule**: Cyan and blurple are *never* used as large fills together — one always dominates. Cyan tends to lead on dark backgrounds, blurple on light.

## 4. Typography

### Families
- **Sans (everything)**: `Poppins`, weights 200/300/400/500/600
- **Serif (italic emphasis only)**: `PT Serif`, italic
- **Mono**: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`

### Scale (rem)
The full ladder observed in the compiled CSS:
`1.2 · 1.3 · 1.4 · 1.5 · 1.563 · 1.7 · 1.8 · 2 · 2.2 · 2.3 · 2.4 · 2.5 · 2.7 · 3 · 3.6 · 4 · 5`

Collapsed for the template:
`xs 1.2 · sm 1.4 · base 1.5 · md 1.7 · lg 2 · xl 2.5 · 2xl 3 · 3xl 3.6 · 4xl 5`

### Heading roles
| Element | Mobile | Desktop | Weight | Notes |
|---|---|---|---|---|
| `h1` | 2.5rem | 3–5rem | 400 | Hero/page title. `<span>` inside h1 is rendered smaller (1.8–2.2rem), 500 weight, blurple — used as a **kicker** above the title |
| `h2` (display) | 2.5rem | 3.6rem | 500 | Section heading on landing pages |
| `h2` (eyebrow) | 1.4rem | — | 500 | Uppercase + cyan = section label like "OUR MISSION" |
| `h2` (article) | 1.7rem | 3rem | 300 | **Article H2 is softer** — less weight, used inside `.WYSIWYG` and `.ListicleImage` |
| `h3` | 1.7rem | 3rem | 300 | Subheading. `h3 strong` ⇒ 500 |
| `h4` | 1.563rem | 1.8rem | 300 | Card titles, group headers. On dark hero, white + 500 |
| `h5` | 1.2rem | — | (default) | **Eyebrow tier 2** — uppercase, `letter-spacing: 1.5px` |
| `h6` | 1.7rem | 2.2rem | 500 | Callout / pull-quote |

**Line-height**: `1.5` on every heading. Generous, deliberate.

**Italic accent rule** (codify this):
```css
em, h2 i, h2 em, h3 i, h3 em, h4 i, h4 em {
  font-family: "PT Serif";
  font-size: 1.09em;
}
```

### Body & long-form copy
- Default body: 1.5rem
- Article body (`.rte p`): 1.4rem
- Article list items (`.rte li`): 1.2rem
- Article body uses `column-count: 2` at desktop — **two-column magazine layout** is a signature for long-form content.

### Blockquote
- `font-size: 2rem`, italic, weight 300
- Indented `margin-left: 5rem`
- Decorative opening curly quote: 9.5rem, 20% opacity, positioned upper-left at `top: -3.5rem; left: -5rem`
- Cite: 1.2rem, weight 700, uppercase

## 5. Spacing & Layout

### Container
- **Max content width**: `1440px`
- **Outer canvas cap**: `1920px`
- **Side padding**: `2rem` mobile → `5rem` at the 1340px breakpoint
- **Vertical rhythm**: section gap is typically `4rem` to `6rem`, internal gap is `2rem`
- **Article hero**: massive top padding — `15rem` mobile → `35rem` desktop (used for full-bleed imagery behind the title)

### Breakpoints
```
375px · 420px · 768px · 1024px · 1250px · 1340px · 1920px
```
The 1250 / 1340 split is unusual — most systems stop at 1280. Treat 1340 as the "full layout" breakpoint and 1250 as a fallback for mid-large laptops.

## 6. Radii

| Token | Value | Use |
|---|---|---|
| `--r-sharp` | `0` | Image cards, hero blocks (much of the site is sharp-edged) |
| `--r-sm` | `0.375rem` | Small chips, form fields |
| `--r-md` | `0.5rem` | Tables, content cards |
| `--r-lg` | `0.8rem` | Larger cards |
| `--r-pill` | `9999px` (or `10rem`) | **All buttons + tags** |
| `--r-circle` | `50%` | Avatars, icon backgrounds |

**Pattern**: The system is bimodal — *sharp blocks* (sections, image tiles) paired with *fully rounded pills* (buttons, tags). Mid-radii are rare. This is part of the visual identity.

## 7. Shadows

```css
--shadow-soft:    0 0 20px rgba(0,0,0,.15);                                /* default cards */
--shadow-strong:  0 5px 15px rgba(0,0,0,.25), 0 0 10px rgba(0,0,0,.152);   /* lifted */
--shadow-lift:    0 14px 28px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.22);/* modal/floating */
--shadow-halo:    0 0 15px rgba(0,0,0,.7);                                 /* on dark bg */
```

Plus the **highlighter shadows** (functional, not decorative):
```css
--hl-cyan-rest:  inset 0 -2px 0 0 #009fdc;
--hl-cyan-hover: inset 0 -24px 0 0 #009fdc;
--hl-blurple-rest:  inset 0 -1px 0 0 #1c4cbf;
--hl-blurple-hover: inset 0 -24px 0 0 #1c4cbf;
```

## 8. Buttons

16 variants found. They reduce to a 3×3 + specials:

| | **Cyan** | **Blurple** | **Neutral** |
|---|---|---|---|
| **Fill** | `button--blue-fill` | `button--blurple-fill` | `button--white-fill` / `button--default` |
| **Outline** | `button--blue-outline` | (n/a) | `button--white-outline` |
| **Mini** (smaller, denser) | (n/a) | `button--blurple-mini`, `button--blurple-mini-t` (transparent) | `button--dark-mini`, `button--white-mini`, `button--white-mini-blue` |

Specials: `button--link` (text-only with highlighter), `button--arrow` (icon), `button--pill-small`, `button--default-thin`, `button--grey-thin`.

### Base rules
- Font-size: `1.4rem` mobile → `1.7rem` desktop
- Font-weight: 400
- Line-height: 1.5
- Border-radius: `9999px` (always pill)
- White-space: nowrap
- Transition: 200ms `cubic-bezier(.4, 0, .2, 1)` on color/bg/border/shadow/transform

### Hover
On hover, fills swap to a deeper shade and outlines flip to filled. Icons (`svg g`, `img`) invert via `--tw-invert: invert(100%)`.

## 9. Tags & Chips

Pill-shaped, filled with `--surface-light`, padded `1rem 2rem`, displayed inline-block. Used for article categories and filter chips.

```css
.tag {
  background: var(--surface-light);
  border-radius: 9999px;
  padding: 1rem 2rem;
  display: inline-block;
}
```

## 10. Recurring Composition Patterns

These are documented in detail in `patterns.md`. The full list:

| Pattern | When to use |
|---|---|
| **A. Eyebrow + Display + Body** | Almost every section on landing pages |
| **B. Numbered Section Anchor** (`01 / 02 / 03`) | Single-page narratives, table of contents |
| **C. Stat Block** | Hero metrics, partner pages |
| **D. Logo Grid + Stat Card** | Partner sections |
| **E. News Card** | Article and news indexes |
| **F. Full-Bleed Hero with Rotating Messages** | Homepage |
| **G. Tall Dark Article Hero** | Resource pages, white papers (15rem→35rem padding-top, full black overlay) |
| **H. Two-Column Article Body** | Long-form content (`.rte` with `column-count: 2`) |
| **I. Decorated Pull-Quote** | Articles, case studies (giant 9.5rem opening curly quote at 20% opacity) |
| **J. Listicle with Image** | Case studies (50/50 image+content split, wraps on mobile) |
| **K. Sticky Share Sidebar** | Articles, case studies (with hover color shift to cyan) |
| **L. Related Cases / Extra Cases** | Article and case study footers |
| **M. Multi-Quote Rotation** | Testimonial sections (cycling colors per quote) |

## 11. Constitution — Twelve rules to keep prototypes "on-brand"

1. **One serif, one sans, one mono.** Never substitute Poppins or PT Serif. PT Serif appears *only* as italic emphasis inside headings or in numbered counters and pull-quote glyphs — never as body text.
2. **Italic = serif.** Any `<em>` or `<i>` inside h2/h3/h4 must render in PT Serif italic at 1.09em. **The single most identifiable signature of the system.**
3. **Eyebrow before display.** Section headings come in pairs: a small uppercase cyan label (h2.eyebrow or h5) above a large display heading.
4. **Pill or sharp, nothing in between** (except content cards). Buttons and tags are pills. Image blocks and section frames are sharp-edged. Mid-radii are reserved for content cards only.
5. **Cyan and blurple don't share fills.** One leads per surface. Cyan dominates on dark canvases; blurple on light.
6. **Links are highlighted, not underlined.** Use the inset-shadow highlighter pattern (rest 1–2px → hover 24px with white text).
7. **Headings sit on a 1.5 line-height.** No tighter. Generous line-height is part of the editorial feel.
8. **Container caps at 1440.** Content never spans more than 1440px even on a 4K display. Outer chrome may go to 1920.
9. **Side padding scales: 2rem → 5rem.** Mobile gets 2rem, the 1340 breakpoint upgrades to 5rem.
10. **Stats use raw numerals, not animated counters by default.** Big number, units, supporting line — three lines max per stat block. Stat numbers use 300 weight, not bold.
11. **Dark sections are `#102033`, not `#000`.** Pure black is reserved for UI chrome and shadows. Brand "black" is `#181c24`.
12. **Default font weight is 300 or 400.** Bold (600) appears almost nowhere. The system gets its weight from size and color contrast, not from heavy strokes.

---

## 12. Honest gaps

Things this reverse-engineering does **not** recover:

- **Motion specs beyond hover transitions.** Scroll-triggered animations are JS-driven; the CSS only shows the hover/focus pieces.
- **Form field styling.** Forms use a third-party embed — limited evidence in the main stylesheet.
- **Iconography rules.** The site uses both inline SVGs and image assets; no clear icon system in CSS alone.
- **Content density / editorial rules** (which phrase deserves italic emphasis, what's a "section" worth eyebrowing). These are editorial judgment calls, not encodable in tokens.
- **Image treatment specifics.** Aspect ratios, crop rules, filters, and the "PseudoPills" decorative overlays are partially observable but their use cases aren't fully documented.
- **Why** any of these decisions were made. The output is a *plausible* reconstruction.
