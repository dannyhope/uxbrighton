# Netlify CMS

Some information and documentation about the Netlify CMS configuration used in this project.

- [Netlify CMS](#netlify-cms)
  - [Netlify CMS configuration files](#netlify-cms-configuration-files)
  - [`config.yml`](#configyml)
    - [Backend (*remote*)](#backend-remote)
    - [Backend (*local*)](#backend-local)
    - [Content workflow \& media](#content-workflow--media)
    - [Site URLs \& logo](#site-urls--logo)
    - [Collections (*data*)](#collections-data)
      - [1.  "Conferences"](#1--conferences)
        - [UX Brighton 2022 - (homepage)](#ux-brighton-2022---homepage)
        - [UX Brighton 2023 - (homepage)](#ux-brighton-2023---homepage)
        - [UX Brighton 2024 - (homepage)](#ux-brighton-2024---homepage)
      - [2. "Event pages"](#2-event-pages)
      - [3. "Generic pages"](#3-generic-pages)
  - [`index.html`](#indexhtml)
    - [CMS editor customisations](#cms-editor-customisations)
    - [Custom editor components - (created by UX Brighton)](#custom-editor-components---created-by-ux-brighton)
  - [`styles-cms.css`](#styles-cmscss)

---

## Netlify CMS configuration files

The CMS is configured using the `config.yml` file in the `admin/` directory of this repository. This file contains the configuration for the CMS backend, collections, and other settings.

There are 3 core files in the `admin/` directory:

- `config.yml`: The main configuration file for the CMS.
- `index.html`: The HTML file that loads the CMS GUI.
- `styles-cms.css`: The CSS file that styles the CMS GUI.

## `config.yml`

The `config.yml` file contains the configuration for the CMS backend, collections, and other settings. The file is divided into sections, each of which is described below.

### Backend (*remote*)

The `backend` section determines how content is created, modified, and previewed using the Netlify CMS GUI. In this example, the configuration is set to use the `git-gateway` backend with GitHub API for authentication.

- `name: git-gateway`: Specifies the backend type as the `git-gateway` which utilizes the GitHub API for authentication.
- `branch: gh-pages`: Specifies the branch where Netlify CMS will be available.

### Backend (*local*)

To facilitate local development, the `local_backend` section is provided. This is useful when you want to work with a local version of the site and a custom proxy server.

- `url: http://localhost:8082/api/v1`: Specifies the URL for the custom proxy server to use during local development.
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

#### 1.  "Conferences"

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

#### 2. "Event pages"

The "**Event pages**" collection manages content related to events that UX Brighton run all year round. The CMS is used to create and manage the content for each event, including the event title, description, date, time, location, and other details. A separate markdown file is created for each event in the `_posts` directory of the repository, which is then used by Jekyll to build the event page for the website.

#### 3. "Generic pages"

The "**Generic pages**" collection manages content related to generic pages on the UX Brighton website. The CMS is used to create and manage the content for each generic page, including the page title, description, and other details. A separate markdown file is created for each generic page in the `pages` directory of the repository, which is then used by Jekyll to build the generic page for the website.

---

## `index.html`

The `index.html` file is the HTML file that loads the Netlify CMS GUI.

It sets up a basic HTML structure with a `<head>` and `<body>` section.

Within the `<head>` and `<body>`, there are `<script>` tags that load external scripts needed for the content management system (CMS). The first script imports the Netlify Identity widget, which handles authentication and user management. The second script imports Netlify CMS itself, which powers the content management functionality.

### CMS editor customisations

Inside the `<script>` tag, a few customisations have been made to the Netlify CMS editor:

1. The line `CMS.registerPreviewStyle("styles-cms.css");` registers a custom CSS file called `styles-cms.css` to be used for the editor preview. This allows you to define specific styles for the preview pane in the CMS.

2. The `CMS.registerEditorComponent({})` function is used to register custom editor components for the Markdown editor in the CMS. This allows you to create custom widgets for the CMS that can be used to add custom content to the website.

   - The `label` property specifies the visible label for the component.
   - The `id` property defines an internal ID for the component.
   - The `collapsed` property determines whether the component is initially collapsed in the editor.

3. The `fromBlock` function is used to populate the custom widget in the Markdown editor based on the content of the markdown document. It extracts the relevant data from the match object.

4. The `toBlock` function serializes the data from the custom widget back to the markdown document. It generates the markdown code for the custom image component.

5. The `toPreview` function generates the preview output for the component, either as a string or a React component.

6. The `pattern` property is a regex pattern used to search for instances of this custom component in the markdown document.

7. The `fields` property defines an array of fields that the user needs to fill out when adding an instance of the component. Each field has a `label`, `name`, `widget` (input type), and optional properties like `hint`, `options`, and `default`.

The `index.html` file provides a basic structure and sets up the necessary scripts and customizations for the Netlify CMS. With these configurations, you can create and manage content using the custom components and functionality defined in the script. You can extend the `CMS.registerEditorComponent({})` section to add more custom components such as "Slideshare link," "Slideshare (embedded)," "YouTube (embedded)," or any other components you need for your CMS.

### Custom editor components - (created by UX Brighton)

1. "**Slideshare link**": This component allows you to add Slideshare links to your content. It includes fields for the Slideshare talk URL and the label to be displayed on the page.

2. "**Slideshare (embedded)**": This component allows you to embed Slideshare presentations in your content. It includes a field for the Slideshare deck ID.

3. "**YouTube (embedded)**": This component enables you to embed YouTube videos in your content. It includes a field for the YouTube video ID.

4. "**Horizontal rule**": This component represents a horizontal rule or separator line in the content. It does not have any fields and is defined by the pattern `/.^/` to ensure it is recognized as a horizontal rule when the document is reloaded.

These custom editor components enhance the functionality of the Netlify CMS by providing additional options for managing content. By adding more `CMS.registerEditorComponent({})` sections and defining custom components, you can further extend the capabilities of the CMS to suit specific needs.

It's worth noting that the script includes comments (`//`) throughout the code, explaining the purpose and functionality of each section. These comments can be helpful for understanding and modifying the code according to your requirements.

## `styles-cms.css`

The `styles-cms.css` file is the CSS file that styles the Netlify CMS GUI.

1. The CSS file is registered for the editor preview by using the `CMS.registerPreviewStyle()` function. This line ensures that the specified CSS file (`styles-cms.css`) is applied to the preview pane of the Netlify CMS editor. It allows you to define custom styling for the preview of your content, providing a more accurate representation of how it will look on the actual website.

2. The specific styles defined in the `styles-cms.css` file will depend on its content. For example, if the custom components defined in the JavaScript code have associated classes or selectors, the `styles-cms.css` file could define the appearance, layout, and styling rules for those classes or selectors.

In general, the `styles-cms.css` file allows you to customize the visual presentation of the content within the Netlify CMS editor. You can define styles for elements, modify the layout, adjust typography, apply colors, and more.
