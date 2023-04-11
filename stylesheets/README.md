# Stylesheets configuration

This directory contains the stylesheets used by the site.

There's still a fair bit of work to do on the stylesheets. Particularly their consolidation & optimisation - but a global structure is now in place and the sites - (*from year `/2022` onwards*) - are using these styles.

---

## Some important notes

* **IMPORTANT:** `styles-to-be-rationalised.css` &mdash; in the `/css` directory &mdash; is a collection of styles that need to be rationalised and moved into the appropriate component files.
  > Please ***DO NOT*** remove this file until all styles have been moved into the appropriate component files.
* Need to find a solution for file name cachebusting to ensure that the latest styles are always used.

---

## Building the stylesheets

The outputs of these build scripts are the `styles.css` and `styles.css.map` files in the `stylesheets/css` directory.

```bash
# Output an unminified / uncompressed version of the stylesheet
npm run build:styles-dev

# Output a minified / compressed version of the stylesheet (for production)
npm run build:styles-prod
```

---

## Stylesheets structure

```bash
uxbri.org
├── stylesheets
│   ├── css
│   │   ├── styles-to-be-rationalised.scss             # Collection of styles that need to be rationalised
│   │   ├── styles.css                                 # Outputted / compiled styles
│   │   └── styles.css.map                             # Outputted / compiled styles `map` file
│   │
│   ├── scss
│   │   ├── 0-zero-output                              # Variables, mixins, functions, etc.
│   │   │   ├── _colour-vars.scss
│   │   │   ├── _easings.scss
│   │   │   ├── _forms.scss
│   │   │   ├── _functions.scss
│   │   │   ├── _mixins_.scss
│   │   │   ├── _placeholders_.scss
│   │   │   ├── _size-and-breakpoints_.scss
│   │   │   ├── _typography-vars.scss
│   │   │   └── _visual-other_.scss
│   │   │
│   │   ├── 1-elements                                 # Elements
│   │   │   ├── _0-reset_.scss
│   │   │   ├── _1-base.scss
│   │   │   ├── _2-typography.scss
│   │   │   ├── _3-links.scss
│   │   │   ├── _4-forms.scss
│   │   │   ├── _5-tables.scss
│   │   │   └── _6-media.scss
│   │   │
│   │   ├── 2-components                               # Components
│   │   │   ├── _hoverable-caption_.scss
│   │   │   └── _responsive-embeds_.scss
│   │   │
│   │   ├── 3-layout                                   # Layouts
│   │   │   ├── _1-main-layout.scss
│   │   │   ├── _2-masthead.scss
│   │   │   ├── _3-misc.scss
│   │   │   ├── _4-conference.scss
│   │   │   └── _5-jobs.scss
│   │   │
│   │   ├── 4-helpers                                  # Helpers
│   │   │   ├── _alignment.scss
│   │   │   ├── _colours.scss
│   │   │   ├── _decorative.scss
│   │   │   ├── _display.scss
│   │   │   ├── _grids.scss
│   │   │   ├── _hidden-at-breakpoints.scss
│   │   │   ├── _hidden-but-accessible.scss
│   │   │   ├── _hidden-misc.scss
│   │   │   ├── _positioning.scss
│   │   │   ├── _print.scss
│   │   │   ├── _spacing.scss
│   │   │   ├── _typographic.scss
│   │   │   └── _wrap-fit-and-clear.scss
│   │   │
│   │   └── styles.scss                                # Global styles base SCSS file
│   │
│   └── README.md                                      # This file (Instructions and SCSS structure information)
```
