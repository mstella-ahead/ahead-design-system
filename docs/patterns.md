# Composition Patterns

These are the page-level patterns that appear across ahead.com. They matter more than any single component — get these right and a prototype reads as on-brand.

---

## A. Eyebrow + Display + Body

The most-used pattern on the site. Almost every section opens with this trio.

```html
<section class="section">
  <div class="container">
    <span class="eyebrow">Our Mission</span>
    <h2>We propel your transformation forward by doing nine things <i>exceptionally</i> well</h2>
    <p>Many organizations are stuck when it comes to transformation, because they haven't put the right foundation in place to enable change.</p>
  </div>
</section>
```

The italic-serif word is doing real work — it's the visual anchor.

## B. Numbered Section Anchor (01 / 02 / 03)

Used on the homepage as a table-of-contents and inside long pages as section markers. Generated via CSS counter, large 3rem PT Serif italic numerals.

```html
<ol class="counter-list stack">
  <li>
    <h4>Education & Enablement</h4>
    <p>We are educators first, and each year we host more than 300 clients...</p>
  </li>
  <li>
    <h4>Strategy & Roadmap</h4>
    <p>Our consultants partner with clients...</p>
  </li>
</ol>
```

## C. Stat Block

Big number + unit + supporting line. Typically 3-up grid against a tinted background.

```html
<div class="grid-3">
  <div class="stat">
    <div class="stat__num">85<sup>%</sup></div>
    <div class="stat__label">of enterprises are currently in the midst of a digital transformation</div>
  </div>
  <!-- ... -->
</div>
```

Stat numbers use **300 weight, not bold**. The cyan color carries the emphasis.

## D. Logo Grid + Stat Card

For partner sections. Each card: white-on-transparent logo + tier label + 2 stat lines + CTA pill.

```html
<div class="card card--dark">
  <img src="logos/aws-white.png" alt="AWS" style="height: 4rem;" />
  <p class="text-muted">Premier Consulting Partner</p>
  <div class="stack--tight">
    <div class="stat"><div class="stat__num">6</div><div class="stat__label">AWS Competencies</div></div>
    <div class="stat"><div class="stat__num">450+</div><div class="stat__label">AWS Certifications</div></div>
  </div>
  <a class="button button--white-outline" href="#">Learn More</a>
</div>
```

## E. News Card

Background image + dark gradient overlay + small partner logo + title (white) + date + "Read More" link with highlighter.

```html
<a class="news-card" href="#">
  <div class="image-block image-block--overlay">
    <img src="bg.jpg" alt="" />
  </div>
  <img class="news-card__partner" src="logos/nvidia-white.png" alt="" />
  <h4 class="news-card__title">AHEAD Opens 10MW Liquid-Cooled Integration Facility</h4>
  <time class="news-card__date">March 16, 2026</time>
  <span class="link">Read More</span>
</a>
```

## F. Full-Bleed Hero with Rotating Messages

Homepage pattern. Three cycling hero panels, each: subtitle line + h1 + body + pill CTA. Sharp edges, dark canvas, generous padding.

```html
<section class="section section--dark hero hero--rotating">
  <div class="container">
    <h5>AHEAD Foundry</h5>
    <h1>Accelerate your infrastructure modernization with end-to-end integration services</h1>
    <p>AHEAD Foundry's design, integration, and deployment services handle everything...</p>
    <a class="button button--blue-fill" href="#">Learn More</a>
  </div>
</section>
```

## G. Tall Dark Article Hero

Resource pages and white papers. Massive top padding (15rem mobile → 35rem desktop), full black overlay over a hero image, white title text.

```html
<section class="article-hero">
  <img class="article-hero__bg" src="hero.jpg" alt="" />
  <div class="article-hero__overlay"></div>
  <div class="container article-hero__content">
    <h5>Article</h5>
    <h1>The Anatomy of <i>Operational</i> Excellence</h1>
    <div class="byline">
      <img src="author.jpg" alt="" />
      <div>
        <p class="byline__name">Tim Frank</p>
        <p class="byline__role">Chief Client Officer, AHEAD</p>
      </div>
    </div>
  </div>
</section>
```

## H. Two-Column Article Body

The signature long-form layout. Body text breaks into two columns at desktop. Use the `.rte` wrapper.

```html
<article class="rte">
  <p>Long-form paragraph that flows into two columns at desktop width...</p>
  <p>Subsequent paragraphs continue the column flow...</p>
  <ul>
    <li>List items break-inside: avoid</li>
  </ul>
</article>
```

CSS handles the column layout automatically.

## I. Decorated Pull-Quote

Articles and case studies. Giant ornamental opening curly quote at 9.5rem, 20% opacity, positioned upper-left of the quote body.

```html
<blockquote>
  <p>You'll hear the words speed and impact a lot when working with AHEAD.</p>
  <cite>Daniel Adamany, Founder and CEO</cite>
</blockquote>
```

The big curly quote glyph is generated via `:before` — no extra markup needed.

## J. Listicle with Image

Case study pattern. 50/50 image+content split, wraps on mobile, side-by-side at desktop.

```html
<div class="listicle-image">
  <div class="listicle-image__media">
    <img src="case-study.jpg" alt="" />
  </div>
  <div class="listicle-image__content">
    <span class="eyebrow">Step 01</span>
    <h3>Discovery and assessment</h3>
    <p>Body content describing the step...</p>
  </div>
</div>
```

## K. Sticky Share Sidebar

Articles and case studies have a sticky share rail on the left. Icons start grey, shift to cyan on hover.

```html
<aside class="share">
  <ul>
    <li><a href="#"><svg>...</svg> LinkedIn</a></li>
    <li><a href="#"><svg>...</svg> Twitter</a></li>
    <li><a href="#"><svg>...</svg> Email</a></li>
  </ul>
</aside>
```

## L. Related Cases / Extra Cases

Footer pattern for case studies. 3-up grid of related work with margin-bottom on images.

```html
<section class="extra-cases">
  <h3>More Client Stories</h3>
  <div class="grid-3">
    <a class="case-study-single" href="#">
      <img src="case-1.jpg" alt="" />
      <h4>Reducing latency for a global retailer</h4>
    </a>
    <!-- ... -->
  </div>
</section>
```

## M. Multi-Quote Rotation

Testimonial sections that cycle through 3 quotes. Each quote uses a different accent color (navy, indigo, cyan-light) for the author byline.

The CSS handles the per-position color via `:nth-child` — just include three quotes in order:

```html
<div class="quotes">
  <div class="quote">
    <blockquote>
      <p>First testimonial...</p>
      <cite class="author">Speaker One, Title</cite>
    </blockquote>
  </div>
  <div class="quote"><!-- second, second color --></div>
  <div class="quote"><!-- third, third color --></div>
</div>
```

---

## How to combine patterns into a page

A typical landing page is: **F** (hero) → **A** repeated 3–5x → **C** (stats once) → **D** (partners) → **B** (numbered services) → **A** (final CTA).

A typical article is: **G** (article hero) → **H** (two-column body) interleaved with **I** (pull-quotes) → **L** (related).

A typical case study is: **G** (hero) → **A** (overview) → **J** repeated 3–6x → **I** (testimonial quote) → **L** (related cases). Sidebar **K** is sticky throughout.

Stay close to these recipes when prototyping new pages.
