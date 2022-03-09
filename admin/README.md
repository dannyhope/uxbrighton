# Netlify CMS configuration files

This `admin/` directory contains the Netlify CMS files necessary to run the CMS GUI and make content changes.

## Local development

1. Make sure you have a `.env` file in the root directory of your local Git repository.
2. This file needs the following in it:

```
# Using this port for local Netlify CMS usage
PORT=8082
```

The following steps are for when developing on the CMS locally:

1. Navigate to a local Git repository configured with the CMS.
2. Run `npx netlify-cms-proxy-server` from the root directory of this repository.
3. Run `bundle exec jekyll serve` to spin up the website locally.
4. Navigate to `http://localhost:4000/admin/` in your browser.

## Production

1. Navigate to `https://uxbri.org/admin/` in your browser.
2. Login with your GitHub credentials.
---

## References & helps:

* https://github.com/netlify/netlify-cms/tree/master#readme
* https://www.npmjs.com/package/netlify-cms-proxy-server
* https://www.netlifycms.org/docs/backends-overview
* https://cnly.github.io/2018/04/14/just-3-steps-adding-netlify-cms-to-existing-github-pages-site-within-10-minutes.html