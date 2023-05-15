# Netlify CMS &mdash; (now "Decap CMS")

Some information and documentation about the [Netlify CMS](https://decapcms.org/) configuration used in this project.

- [Netlify CMS — (now "Decap CMS")](#netlify-cms--now-decap-cms)
  - [Core configuration files](#core-configuration-files)
  - [1️⃣ `config.yml`](#1️⃣-configyml)
    - [Backend authentication](#backend-authentication)
    - [Backend (*local*)](#backend-local)
    - [Content workflow \& media](#content-workflow--media)
    - [Site URLs \& logo](#site-urls--logo)
    - [Collections (*data*)](#collections-data)
      - ["Conferences" collection](#conferences-collection)
        - [UX Brighton 2022 - (homepage)](#ux-brighton-2022---homepage)
        - [UX Brighton 2023 - (homepage)](#ux-brighton-2023---homepage)
        - [UX Brighton 2024 - (homepage)](#ux-brighton-2024---homepage)
      - ["Event pages" collection](#event-pages-collection)
      - ["Generic pages" collection](#generic-pages-collection)
  - [2️⃣ `index.html`](#2️⃣-indexhtml)
    - [Customising the CMS editor](#customising-the-cms-editor)
    - [Custom editor components](#custom-editor-components)
  - [3️⃣ `styles-cms.css`](#3️⃣-styles-cmscss)
  - [Developing locally with Netlify CMS](#developing-locally-with-netlify-cms)
  - [Production CMS](#production-cms)
  - [References \& helps](#references--helps)
    - [Archived references](#archived-references)

---

## Core configuration files

The CMS is configured using 3 core files in the `admin/` directory of this repository.

- `config.yml`: The main configuration file for the CMS.
- `index.html`: The HTML file that loads the CMS GUI.
- `styles-cms.css`: The CSS file that styles the CMS GUI.

## 1️⃣ `config.yml`

The `config.yml` file contains the configuration for the CMS backend, collections, and other settings. The file is divided into sections, each of which is described below.

### Backend authentication

The `backend` section determines how content is created, modified, and previewed using the Netlify CMS GUI. In this example, the configuration is set to use the `git-gateway` backend with GitHub API for authentication.

The Git Gateway provides a convenient way to authenticate and interact with a Git repository through an API. Here are the steps to set it up:

1. Make sure your Git repository is hosted on a supported Git provider, such as GitHub, GitLab, or Bitbucket.

2. Enable the Netlify Identity service for your site. Netlify Identity provides user authentication and management for your CMS.

3. In the Netlify UI, go to your site's "Site settings" and navigate to the "Identity" section. Enable Identity and configure it to use your preferred authentication provider (e.g. GitHub, GitLab, or Bitbucket).

4. Once Identity is set up, go to the "Services" section in the Netlify UI and enable "Git Gateway." This will create an API endpoint for managing your Git repository through the CMS.

5. In the `config.yml` file, set the following options under the `backend` section:

   - `name: git-gateway`: Specifies the backend type as `git-gateway`, which utilizes the Git Gateway API for authentication.
   - `branch: gh-pages`: Specifies the branch where Netlify CMS will be available. Adjust this value based on your repository configuration.

### Backend (*local*)

To facilitate local development, the `local_backend` section is provided. This is useful when you want to work with a local version of the site and a custom proxy server.

- `url: http://localhost:8082/api/v1`: Specifies the URL for the custom proxy server to use during [local development](#developing-locally-with-netlify-cms).
- `allowed_hosts: ['192.168.0.1']`: Specifies the hosts allowed to access the local site. By default, only 'localhost' and '127.0.0.1' are allowed.

### Content workflow & media

The following lines define the content workflow and configuration related to media files in Netlify CMS:

- `publish_mode: editorial_workflow`: Sets the publish mode to `editorial_workflow`, which means content goes through a workflow before being published. The workflow includes stages like "**Drafts**," "**In Review**," and "**Ready**."
- `media_folder: "/images"`: Specifies the folder where media files will be stored in the repository, in this case, "**/images**".
- `public_folder: "/images"`: Sets the folder path for the `src` attribute of uploaded media files, so it begins with "**/images**".

### Site URLs & logo

These lines configure the URLs and logo for the site:

- `site_url: https://uxbri.org`: Specifies the URL of the deployed website.
- `display_url: https://uxbri.org`: Defines the URL that will be displayed for the website.
- `logo_url: https://uxbri.org/2022/logo/red-square-small.png`: Sets the URL for the logo image to be used in the CMS.

### Collections (*data*)

Here is where the `collections` are defined. Each collection represents a specific type of content (data) that can be managed in the CMS. The following collections are defined:

#### "Conferences" collection

The "**Conferences**" collection manages content related to year-specific versions of the UX Brighton website. Each conference has a specific data file associated with it, which is updated whenever applicable fields are modified in the CMS.

Here's a list of the conferences and their corresponding data files:

##### UX Brighton 2022 - (homepage)

- `label: "UX Brighton 2022 - (homepage)"`: Specifies the label for the file, which will be displayed in the CMS. This represents the conference homepage for the year 2022.
- `file: "_data/year_2022/homepage.yml"`: Specifies the file path for the year 2022 conference homepage data file. The data file contains specific information and settings related to the UX Brighton 2022 conference homepage.

Whenever applicable fields are updated in the CMS for the "**UX Brighton 2022 - (homepage)**" collection, the corresponding data file `_data/year_2022/homepage.yml` will be modified to reflect the changes. This file is then used to generate the conference homepage for the year 2022.

##### UX Brighton 2023 - (homepage)

- `label: "UX Brighton 2023 - (homepage)"`: Specifies the label for the file, which will be displayed in the CMS. This represents the conference homepage for the year 2023.
- `file: "_data/year_2023/homepage.yml"`: Specifies the file path for the year 2023 conference homepage data file. The data file contains specific information and settings related to the UX Brighton 2023 conference homepage.

Whenever applicable fields are updated in the CMS for the "**UX Brighton 2023 - (homepage)**" collection, the corresponding data file `_data/year_2023/homepage.yml` will be modified to reflect the changes. This file is then used to generate the conference homepage for the year 2023.

##### UX Brighton 2024 - (homepage)

- `label: "UX Brighton 2024 - (homepage)"`: Specifies the label for the file, which will be displayed in the CMS. This represents the conference homepage for the year 2024.
- `file: "_data/year_2024/homepage.yml"`: Specifies the file path for the year 2024 conference homepage data file. The data file contains specific information and settings related to the UX Brighton 2024 conference homepage.

Whenever applicable fields are updated in the CMS for the "**UX Brighton 2024 - (homepage)**" collection, the corresponding data file `_data/year_2024/homepage.yml` will be modified to reflect the changes. This file is then used to generate the conference homepage for the year 2024.

**NOTE:** The above `collections` are used to manage the conference homepage for each year. The conference homepage is a single page that contains information about the conference, including the conference theme, speakers, sponsors, and other details. If you'd like a new conference homepage to be created for a new year, you can create a new collection in the `config.yml` file - (just below the last one) - and then create a new data file for the new year - eg. `_data/year_2025/homepage.yml`.

#### "Event pages" collection

The "**Event pages**" collection manages content related to events that UX Brighton run all year round. The CMS is used to create and manage the content for each event, including the event title, description, date, time, location, and other details. A separate markdown file is created for each event in the `_posts` directory of the repository, which is then used by Jekyll to build the event page for the website.

#### "Generic pages" collection

The "**Generic pages**" collection manages content related to generic pages on the UX Brighton website. The CMS is used to create and manage the content for each generic page, including the page title, description, and other details. A separate markdown file is created for each generic page in the `pages` directory of the repository, which is then used by Jekyll to build the generic page for the website.

## 2️⃣ `index.html`

The `index.html` file is the HTML file that loads the Netlify CMS GUI.

It sets up a basic HTML structure with a `<head>` and `<body>` section.

Within the `<head>` and `<body>`, there are `<script>` tags that load external scripts needed for the content management system (CMS). The first script imports the Netlify Identity widget, which handles authentication and user management. The second script imports Netlify CMS itself, which powers the content management functionality.

### Customising the CMS editor

Inside the `<script>` tag, a few customisations have been made to the Netlify CMS editor:

- The line `CMS.registerPreviewStyle("styles-cms.css");` registers a custom CSS file called `styles-cms.css` to be used for the editor preview. This allows you to define specific styles for the preview pane in the CMS.

- The `CMS.registerEditorComponent({})` function is used to register custom editor components for the Markdown editor in the CMS. This allows you to create custom widgets for the CMS that can be used to add custom content to the website.

  - The `label` property specifies the visible label for the component.
  - The `id` property defines an internal ID for the component.
  - The `collapsed` property determines whether the component is initially collapsed in the editor.

- The `fromBlock` function is used to populate the custom widget in the Markdown editor based on the content of the markdown document. It extracts the relevant data from the match object.

- The `toBlock` function serializes the data from the custom widget back to the markdown document. It generates the markdown code for the custom image component.

- The `toPreview` function generates the preview output for the component, either as a string or a React component.

- The `pattern` property is a regex pattern used to search for instances of this custom component in the markdown document.

- The `fields` property defines an array of fields that the user needs to fill out when adding an instance of the component. Each field has a `label`, `name`, `widget` (input type), and optional properties like `hint`, `options`, and `default`.

### Custom editor components

This is a list of the custom editor components that we've added to the CMS:

- "**Slideshare link**": This component allows you to add Slideshare links to your content. It includes fields for the Slideshare talk URL and the label to be displayed on the page.

- "**Slideshare (embedded)**": This component allows you to embed Slideshare presentations in your content. It includes a field for the Slideshare deck ID.

- "**YouTube (embedded)**": This component enables you to embed YouTube videos in your content. It includes a field for the YouTube video ID.

- "**Horizontal rule**": This component represents a horizontal rule or separator line in the content. It does not have any fields and is defined by the pattern `/.^/` to ensure it is recognized as a horizontal rule when the document is reloaded.

These custom editor components enhance the functionality of the Netlify CMS by providing additional options for managing content. By adding more `CMS.registerEditorComponent({})` sections and defining custom components, you can further extend the capabilities of the CMS to suit specific needs.

It's worth noting that the script includes comments (`//`) throughout the code, explaining the purpose and functionality of each section. These comments can be helpful for understanding and modifying the code according to your requirements.

## 3️⃣ `styles-cms.css`

The `styles-cms.css` file is the CSS file that styles the Netlify CMS GUI.

1. The CSS file is registered for the editor preview by using the `CMS.registerPreviewStyle()` function. This line ensures that the specified CSS file (`styles-cms.css`) is applied to the preview pane of the Netlify CMS editor. It allows you to define custom styling for the preview of your content, providing a more accurate representation of how it will look on the actual website.

2. The specific styles defined in the `styles-cms.css` file will depend on its content. For example, if the custom components defined in the JavaScript code have associated classes or selectors, the `styles-cms.css` file could define the appearance, layout, and styling rules for those classes or selectors.

In general, the `styles-cms.css` file allows you to customize the visual presentation of the content within the Netlify CMS editor. You can define styles for elements, modify the layout, adjust typography, apply colors, and more.

---

## Developing locally with Netlify CMS

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

## Production CMS

Danny has a file called UX Brighton Netlify CMS secrets.txt containing the Client ID and Client secret.

1. Navigate to `https://uxbri.org/admin/` in your browser.
2. Click on the “**Login with Netlify Identity**” button
3. You should then see a login dialog box with a button at the bottom that says “**Continue with GitHub**”. Click this button. If you are already logged into GitHub, you should then be signed into the CMS.
4. If you are not logged into GitHub, you will be prompted to log in with your GitHub credentials.

---

## References & helps

- [Netlify CMS - (Github)](https://github.com/decaporg/decap-cms/tree/master#readme)
- [Netlify CMS Proxy Server - (npmjs.com)](https://www.npmjs.com/package/netlify-cms-proxy-server)
- [Netlify CMS Backend Configuration - (decapcms.org)](https://decapcms.org/docs/backends-overview/)

### Archived references

This step is archived because we're not using GitHub Pages anymore. We're using Netlify CMS with Netlify hosting.

- [Just 3 Steps: Adding Netlify CMS to Existing GitHub Pages Site Within 10 Minutes (cnly.github.io)](https://cnly.github.io/2018/04/14/just-3-steps-adding-netlify-cms-to-existing-github-pages-site-within-10-minutes.html)
