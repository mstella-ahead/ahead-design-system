/**
 * AHEAD Design System — Tailwind Preset
 *
 * Usage:
 *   const aheadPreset = require('./tokens/tailwind.config.js');
 *   module.exports = {
 *     presets: [aheadPreset],
 *     content: ['./src/**\/*.{html,jsx,tsx}'],
 *   };
 *
 * This preset matches the tokens defined in tokens.css. The two are kept
 * in sync by hand — when you change one, change the other.
 */

const plugin = require('tailwindcss/plugin');

module.exports = {
  theme: {
    // ---- Hard-overriding Tailwind defaults that don't match the system ----
    fontFamily: {
      sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      serif: ['"PT Serif"', 'Georgia', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },

    // AHEAD's CSS uses 1rem = 10px (root font-size: 10px). The scale below is
    // expressed in rem to match what's in the live stylesheet.
    fontSize: {
      xs:    ['1.2rem', { lineHeight: '1.6' }],
      sm:    ['1.4rem', { lineHeight: '1.6' }],
      base:  ['1.5rem', { lineHeight: '1.6' }],
      md:    ['1.7rem', { lineHeight: '1.5' }],
      lg:    ['2rem',   { lineHeight: '1.5' }],
      xl:    ['2.5rem', { lineHeight: '1.5' }],
      '2xl': ['3rem',   { lineHeight: '1.5' }],
      '3xl': ['3.6rem', { lineHeight: '1.5' }],
      '4xl': ['5rem',   { lineHeight: '1.2' }],

      // Semantic display sizes
      'display-sm':  ['2.5rem', { lineHeight: '1.5', fontWeight: '500' }],
      'display-md':  ['3.6rem', { lineHeight: '1.5', fontWeight: '500' }],
      'display-lg':  ['5rem',   { lineHeight: '1.2', fontWeight: '400' }],
      'eyebrow':     ['1.4rem', { lineHeight: '1.5', letterSpacing: '0.094em', fontWeight: '500' }],
    },

    // Default font-weight ladder, with 300/400 emphasized
    fontWeight: {
      thin:       '200',
      light:      '300',  // common default in the system
      normal:     '400',
      medium:     '500',
      semibold:   '600',
    },

    borderRadius: {
      none:   '0',
      sm:     '0.375rem',
      DEFAULT:'0.5rem',
      md:     '0.5rem',
      lg:     '0.8rem',
      pill:   '9999px',
      full:   '9999px',
      circle: '50%',
    },

    // ---- Extending Tailwind defaults (preserve other utilities) ----
    extend: {
      colors: {
        // Brand
        'ahead-cyan':       '#009fdc',
        'ahead-cyan-light': '#67c3e9',
        'ahead-blurple':    '#1c4cbf',
        'ahead-navy':       '#123a61',
        'ahead-mid-navy':   '#253857',
        'ahead-canvas':     '#102033',
        'ahead-near-black': '#181c24',

        // Surfaces & text
        'surface-light': '#ebf0f2',
        'surface-white': '#ffffff',
        'text-default':  '#181c24',
        'text-muted':    '#6b7280',
        'text-quiet':    '#5a5a5a',
        'border-quiet':  '#c9c9c9',

        // Accent / state
        'accent-green': '#00b388',
        'accent-mint':  '#6eceb2',
        'accent-error': '#f87171',
      },

      screens: {
        // AHEAD's actual breakpoints
        'xs':   '375px',
        'sm':   '420px',
        'md':   '768px',
        'lg':   '1024px',
        'xl':   '1250px',
        '2xl':  '1340px',  // "full layout" breakpoint — side padding upgrades to 5rem here
        '3xl':  '1920px',
      },

      maxWidth: {
        container: '1440px',
        canvas:    '1920px',
        prose:     '70ch',
      },

      spacing: {
        // AHEAD's tall article hero padding
        'hero-mobile':  '15rem',
        'hero-desktop': '35rem',
        'section':      '6rem',
      },

      boxShadow: {
        'soft':         '0 0 20px rgba(0,0,0,.15)',
        'strong':       '0 5px 15px rgba(0,0,0,.25), 0 0 10px rgba(0,0,0,.152)',
        'lift':         '0 14px 28px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.22)',
        'halo':         '0 0 15px rgba(0,0,0,.7)',
        // Highlighter shadows — the signature link interaction
        'hl-cyan':      'inset 0 -2px 0 0 #009fdc',
        'hl-cyan-fill': 'inset 0 -24px 0 0 #009fdc',
        'hl-blurple':   'inset 0 -1px 0 0 #1c4cbf',
        'hl-blurple-fill':'inset 0 -24px 0 0 #1c4cbf',
      },

      transitionTimingFunction: {
        ahead: 'cubic-bezier(.4, 0, .2, 1)',
      },

      transitionDuration: {
        fast: '150ms',
        DEFAULT: '200ms',
      },

      // Custom column-count utility for two-column article body
      columns: {
        'article': '2',
      },
    },
  },

  plugins: [
    /**
     * Component classes that are too involved to express purely as utilities.
     * Mirrors the `.button--*`, `.eyebrow`, `.link`, and italic-serif rules
     * from tokens.css.
     */
    plugin(function ({ addComponents, addBase, theme }) {
      addBase({
        // Italic emphasis — the signature rule
        'em, i, h1 em, h1 i, h2 em, h2 i, h3 em, h3 i, h4 em, h4 i': {
          fontFamily: theme('fontFamily.serif').join(', '),
          fontStyle: 'italic',
          fontSize: '1.09em',
          fontWeight: 'inherit',
        },
        // Generous heading line-height
        'h1, h2, h3, h4, h5, h6': {
          lineHeight: '1.5',
        },
      });

      addComponents({
        // Eyebrow label
        '.eyebrow': {
          display: 'block',
          fontSize: theme('fontSize.sm[0]'),
          fontWeight: '500',
          textTransform: 'uppercase',
          letterSpacing: '0.094em',
          color: theme('colors.ahead-cyan'),
          marginBottom: '1.2rem',
        },

        // Highlighter link
        '.link': {
          color: theme('colors.ahead-blurple'),
          textDecoration: 'none',
          boxShadow: theme('boxShadow.hl-blurple'),
          padding: '2px 0',
          transition: `all ${theme('transitionDuration.DEFAULT')} ${theme('transitionTimingFunction.ahead')}`,
        },
        '.link:hover': {
          boxShadow: theme('boxShadow.hl-blurple-fill'),
          color: '#fff',
        },
        '.section--dark .link': {
          color: theme('colors.ahead-cyan'),
          boxShadow: theme('boxShadow.hl-cyan'),
        },
        '.section--dark .link:hover': {
          boxShadow: theme('boxShadow.hl-cyan-fill'),
          color: '#fff',
        },

        // Button base
        '.btn': {
          display: 'inline-block',
          fontFamily: theme('fontFamily.sans').join(', '),
          fontSize: theme('fontSize.sm[0]'),
          fontWeight: '400',
          lineHeight: '1.5',
          textDecoration: 'none',
          whiteSpace: 'nowrap',
          borderRadius: theme('borderRadius.pill'),
          border: '1px solid transparent',
          padding: '1.2rem 2.4rem',
          cursor: 'pointer',
          transition: `all ${theme('transitionDuration.DEFAULT')} ${theme('transitionTimingFunction.ahead')}`,
          '@media (min-width: 768px)': { fontSize: theme('fontSize.md[0]') },
        },

        // Button variants
        '.btn-blurple-fill': {
          background: theme('colors.ahead-blurple'),
          borderColor: theme('colors.ahead-blurple'),
          color: '#fff',
          '&:hover': {
            background: 'transparent',
            color: theme('colors.ahead-blurple'),
          },
        },
        '.btn-blue-fill': {
          background: theme('colors.ahead-cyan'),
          borderColor: theme('colors.ahead-cyan'),
          color: '#fff',
          '&:hover': {
            background: theme('colors.ahead-blurple'),
            borderColor: theme('colors.ahead-blurple'),
          },
        },
        '.btn-blue-outline': {
          background: 'transparent',
          borderColor: theme('colors.ahead-cyan'),
          color: theme('colors.ahead-cyan'),
          '&:hover': {
            background: theme('colors.ahead-cyan'),
            color: '#fff',
          },
        },
        '.btn-white-fill': {
          background: '#fff',
          borderColor: '#fff',
          color: theme('colors.ahead-blurple'),
          '&:hover': {
            background: 'transparent',
            color: '#fff',
          },
        },
        '.btn-white-outline': {
          background: 'transparent',
          borderColor: '#fff',
          color: '#fff',
          '&:hover': {
            background: '#fff',
            color: theme('colors.ahead-canvas'),
          },
        },

        // Pill-shaped tag
        '.tag': {
          display: 'inline-block',
          background: theme('colors.surface-light'),
          color: theme('colors.text-default'),
          borderRadius: theme('borderRadius.pill'),
          padding: '1rem 2rem',
          fontSize: theme('fontSize.xs[0]'),
          fontWeight: '500',
          lineHeight: '1',
        },

        // Container with the AHEAD padding scale
        '.container-ahead': {
          width: '100%',
          maxWidth: theme('maxWidth.container'),
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '2rem',
          paddingRight: '2rem',
          '@media (min-width: 1340px)': {
            paddingLeft: '5rem',
            paddingRight: '5rem',
          },
        },
      });
    }),
  ],
};
