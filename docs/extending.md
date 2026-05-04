# Extending the System

When you need a component or pattern that isn't in the existing library, follow these steps to keep additions on-brand.

## 1. Check the constitution first

Before designing anything new, re-read the twelve rules in `design-system.md` §11. The most common cause of off-brand additions is forgetting one of:

- Italic = serif (rule 2)
- Pill or sharp, nothing in between (rule 4)
- Default weight is 300 or 400 (rule 12)

## 2. Reuse tokens, never invent

If you need a color, type size, radius, or shadow that doesn't exist in `tokens/tokens.css`, you almost certainly should pick the closest existing one. New tokens require justification — write the justification in this file.

The acceptable reasons to introduce a new token:
- A new state (e.g., warning yellow, currently missing)
- A real semantic gap that can't be expressed by existing tokens
- An accessibility requirement (e.g., a contrast-bumped variant of an existing color)

Unacceptable reasons:
- "I think it would look better"
- "The brief said vibrant"
- "It's just slightly different"

## 3. Compose, don't restyle

If your new component looks like a card, start from `.card`. If it looks like a stat block, start from `.stat`. Override only what's genuinely different.

```css
/* Good: extending */
.case-card {
  /* inherits .card */
  padding: 3.2rem;
  min-height: 28rem;
}

/* Bad: starting fresh */
.case-card {
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 20px rgba(0,0,0,.15);
  padding: 3.2rem;
  min-height: 28rem;
}
```

The bad version duplicates token values inline, which means the component won't update if the tokens change.

## 4. Naming convention

Match the existing pattern: BEM-ish kebab-case with `--variant` modifiers.

```
.component-name
.component-name__element
.component-name--variant
```

Examples from the system: `button--blue-fill`, `case-study-single`, `extra-cases`, `page-resource__components`.

## 5. Document new additions

Every new component gets:
1. A short paragraph in `patterns.md` explaining when to use it (and when not to).
2. A reference HTML snippet in `components/`.
3. Optional: a token addition note in `design-system.md` if you needed new tokens.

## 6. Test against the rules

Before merging a new component, walk through this checklist:

- [ ] Italic emphasis renders in PT Serif italic at 1.09em
- [ ] Buttons and tags are pills (border-radius: 9999px)
- [ ] Image blocks and section frames are sharp (border-radius: 0)
- [ ] Links use the highlighter hover effect
- [ ] No bold (600+) weights unless there's a documented reason
- [ ] Cyan and blurple aren't both used as primary fills
- [ ] Headings use 1.5 line-height
- [ ] Container respects 1440px max
- [ ] Side padding scales 2rem → 5rem at 1340px

If any of these fail, fix them before merging.

## 7. When the rules need to bend

The rules above are firm but not absolute. If you have a genuine reason to break one — e.g., a campaign moment that needs visual rupture — document the deviation in this file with:

- Which rule was broken
- Why
- The scope (one component? one page? one campaign?)
- When the deviation expires

Treat deviations like technical debt: useful sometimes, but they accrue cost if left unmanaged.
