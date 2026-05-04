# AHEAD Design System

A reverse-engineered design system extracted from [www.ahead.com](https://www.ahead.com), packaged for use with Claude Design and general-purpose prototyping.

## What you can do with it

- **Prototype on-brand pages quickly** — drop `tokens/tokens.css` into any HTML/JSX prototype and you have the full token set.
- **Use with Tailwind** — extend `tokens/tailwind.config.js` to get all colors, fonts, radii, shadows, and the type scale as Tailwind utilities.
- **Use with Claude Design** — connect this repo to Claude Design's "Set up your design system" flow. The `CLAUDE.md` file at the root is the entry point Claude reads first.

## Quick start (plain HTML)

```html
<link rel="stylesheet" href="tokens/tokens.css" />

<section class="section">
  <div class="container">
    <span class="eyebrow">Our Mission</span>
    <h2>We propel your transformation forward by doing nine things <i>exceptionally</i> well</h2>
    <a class="button button--blurple-fill" href="#">Talk to an Expert</a>
  </div>
</section>
```

## Quick start (Tailwind)

```js
// tailwind.config.js
const aheadPreset = require('./path/to/tokens/tailwind.config.js');

module.exports = {
  presets: [aheadPreset],
  content: ['./src/**/*.{html,jsx,tsx}'],
};
```

```html
<h2 class="text-display-md text-ahead-canvas">
  We do nine things <i>exceptionally</i> well
</h2>
<button class="btn-blurple-fill">Get Started</button>
```

## What's documented

| File | What's in it |
|---|---|
| `CLAUDE.md` | Entry point for Claude Design. Three signature rules + repo map. |
| `docs/design-system.md` | Full spec — tokens, heading roles, twelve-rule constitution, honest gaps. |
| `docs/patterns.md` | Composition pattern library — eyebrow+display, numbered anchors, stat blocks, two-column articles, sticky sidebars, etc. |
| `docs/extending.md` | How to add new components without breaking the system. |
| `tokens/` | CSS variables, JSON token export, Tailwind preset. |
| `components/` | Reference HTML for each primitive. |
| `examples/` | Full-page compositions to learn from. |

## Provenance

Tokens were extracted from the production stylesheet (`styles.378ac6ea975bd5e164a8.css`, ~307KB) and cross-checked across the homepage, AI service page, Our Work page, the "Anatomy of Operational Excellence" article, and the case studies index. The system is a *plausible* reconstruction — the original team's intent is inferred from the evidence, not read from a brand book.

See `docs/design-system.md` §11 for the honest list of what this reverse-engineering does **not** recover.

## License

This is a reverse-engineered reference for prototyping work. The design language belongs to AHEAD; do not use it for production work that competes with or impersonates AHEAD.
