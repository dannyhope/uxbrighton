[![pages-build-deployment](https://github.com/dannyhope/uxbrighton/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/dannyhope/uxbrighton/actions/workflows/pages/pages-build-deployment) [![Google & Yandex Sitemap Notification](https://github.com/dannyhope/uxbrighton/actions/workflows/search_engines_sitemap_notification.yml/badge.svg)](https://github.com/dannyhope/uxbrighton/actions/workflows/search_engines_sitemap_notification.yml)
# UX Brighton

All comprehensive instructions, for how to run and edit the website, have moved to the Ops Manual - https://uxbri.org/ops.

Once you've installed all the necessary Ruby & Jekyll global dependencies, you can run the site locally as follows&hellip;

## Initial setup

```bash
# Install all Node dev dependencies
npm install

# Kick off initial local build
npm start
```

## Local development

```bash
# Spin up a local server
npm run dev

# Need to spin up the Netlify CMS GUI?
npm run cms-local
```

## Local build

```bash
# Build ALL files & assets to the `_site` directory
npm run build

# Output an unminified / uncompressed version of the stylesheet
npm run build:styles-dev

# Output a minified / compressed version of the stylesheet (for production)
npm run build:styles-prod
```
