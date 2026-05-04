# CLAUDE.md — AHEAD Design System

> **Read this file first.** It tells you how to use the rest of this repo.

## What this is

A reverse-engineered design system extracted from www.ahead.com. AHEAD is an enterprise IT consulting firm; the visual system pairs structured engineering composition (sharp blocks, pill buttons) with editorial typography (italic-serif emphasis inside sans-serif headings, magazine-style two-column body text).

## Three rules that must never break

These are the signature behaviors of the system. Breaking any of them makes a prototype no longer feel like AHEAD.

1. **Italic emphasis inside any heading (h2/h3/h4) MUST render in PT Serif italic at 1.09em.** This is the brand's most identifiable visual signature. The CSS rule lives in `tokens/tokens.css` — do not override it. Use `<i>` or `<em>` to invoke it: e.g., `<h2>Doing nine things <i>exceptionally</i> well</h2>`.

2. **Links use the highlighter hover effect.** A 1–2px inset bottom shadow at rest, expanding to a 24px fill on hover, with text flipping to white. Apply via the `.link` class or the `.prose` wrapper — not via `text-decoration: underline`.

3. **All buttons are pills.** `border-radius: 9999px`, no exceptions. Image blocks, section frames, and hero panels are sharp-edged (`border-radius: 0`). Mid-radii (~6–12px) are reserved for content cards only. The bimodal sharp-vs-pill geometry is part of the identity.

## How to use this repo when prototyping

1. Load `tokens/tokens.css` in any HTML prototype, **or** extend `tokens/tailwind.config.js` for Tailwind projects.
2. Reference `components/` for working examples of buttons, cards, stats, articles, and case studies.
3. Reference `examples/` for full-page compositions.
4. Follow the twelve-rule constitution in `docs/design-system.md` §10.
5. For composition patterns (eyebrow + display, numbered anchors, stat blocks, two-column articles, etc.), see `docs/patterns.md`.

## Quick palette

```
Cyan      #009fdc   primary brand accent
Blurple   #1c4cbf   secondary accent, default link
Navy      #123a61   deep brand
Canvas    #102033   darkest section background
```

Cyan dominates on dark canvases, blurple on light. **Never use both as primary fills in the same composition.**

## Quick type stack

```
Sans:  Poppins (200–600)  — everything
Serif: PT Serif Italic     — emphasis inside headings only
Mono:  ui-monospace stack  — code
```

Default font weight is 300 or 400. Bold (600+) appears almost nowhere.

## What's in this repo

```
.
├── CLAUDE.md                      ← you are here
├── README.md                      human-readable intro
├── docs/
│   ├── design-system.md           full spec, tokens, twelve-rule constitution
│   ├── patterns.md                composition pattern library
│   └── extending.md               how to add new components
├── tokens/
│   ├── tokens.css                 CSS custom properties + base styles
│   ├── tokens.json                machine-readable token export
│   └── tailwind.config.js         Tailwind preset
├── components/
│   ├── buttons.html               16 button variants
│   ├── cards.html                 card + stat patterns
│   ├── article.html               long-form article components
│   └── case-study.html            case study layout primitives
├── examples/
│   ├── landing.html               full landing page
│   ├── article.html               full article page
│   └── case-study.html            full case study page
└── assets/
    └── README.md                  fonts, logos, image conventions
```

## When in doubt

If the user asks for something that isn't covered here, **stay close to the rules above and ask before improvising**. It is better to produce a less-ambitious prototype that feels on-brand than a more-ambitious one that breaks the system.
