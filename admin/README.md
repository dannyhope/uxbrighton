# Netlify CMS configuration files

This `admin/` directory contains the Netlify CMS files necessary to run the CMS GUI and make content changes.

## Local development

1. Make sure you have a `.env` file in the root directory of your local Git repository. This file needs the following in it:
    ```env
    # Using this port for local Netlify CMS usage
    PORT=8082
    ```
2. Make sure the terminal is `cd`’d to the root directory of this local Git repository
3. Start the Netlify CMS server:
    1. Run `npx netlify-cms-proxy-server`
    2. Navigate to `http://localhost:4000/admin/` in your browser.
4. Start the website server:
    1. Open a new terminal 
    2. Run `bundle exec jekyll serve`
    3. Navigate to `http://localhost:4000/` in your browser.

## Production

Danny has a file called UX Brighton Netlify CMS secrets.txt containing the Client ID and Client secret.

1. Navigate to `https://uxbri.org/admin/` in your browser.
2. Login with your GitHub credentials.

---

## References & helps

* [Netlify CMS (Github)](https://github.com/netlify/netlify-cms/tree/master#readme)
* [Netlify CMS Proxy Server (npmjs.com)](https://www.npmjs.com/package/netlify-cms-proxy-server)
* [Netlify CMS Backend Configuration (netflyercms.org)](https://www.netlifycms.org/docs/backends-overview)
* [Just 3 Steps: Adding Netlify CMS to Existing GitHub Pages Site Within 10 Minutes (cnly.github.io)](https://cnly.github.io/2018/04/14/just-3-steps-adding-netlify-cms-to-existing-github-pages-site-within-10-minutes.html)
