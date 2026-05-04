# Assets

This directory holds fonts, logos, and image conventions for the AHEAD design system.

## Fonts

The system uses two web fonts from Google Fonts. They are loaded by `tokens/tokens.css` via `@import`:

```css
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&family=PT+Serif:ital@1&display=swap");
```

If you want to self-host them for production:

1. Download from [Google Fonts](https://fonts.google.com/specimen/Poppins) and [PT Serif](https://fonts.google.com/specimen/PT+Serif).
2. Place the `.woff2` files in `assets/fonts/`.
3. Replace the `@import` in `tokens.css` with `@font-face` declarations pointing at the local files.

The required weights are:
- **Poppins**: 200, 300, 400, 500, 600
- **PT Serif**: 400 italic only (italic emphasis is the only use case)

## Logos

Add logo files to `assets/logos/` when you have them:

- `ahead-logo-color.svg` — full-color primary logo
- `ahead-logo-white.svg` — white version for dark backgrounds
- `ahead-mark.svg` — icon/mark only

Logos are typically rendered:
- **Inverted on dark backgrounds** via `filter: invert(100%)` or by using the dedicated white asset
- **At fixed heights** in the partner grid (~4rem)

## Image conventions observed on ahead.com

- **Aspect ratios**: News cards and case study tiles use 4:3 or 16:9. Hero backgrounds are full-bleed, no fixed ratio.
- **Treatment**: Most photographs are presented full-color. Dark gradient overlays (40% transparent at top, 85% canvas at bottom) are used to make white text legible over busy imagery — see `.image-block--overlay` in `tokens.css`.
- **Borders**: Image blocks are sharp-edged (rule 4 in the constitution). No rounded corners on hero images, news cards, or full-bleed visuals.

## Brand assets owned by AHEAD

This is a reverse-engineered reference repo. Don't redistribute AHEAD's actual logos or photography here. Use placeholder assets (e.g., `https://placehold.co/`) when prototyping.
