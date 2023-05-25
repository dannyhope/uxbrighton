# Netlify functions and plugins

This directory contains the Netlify functions and plugins used by the site. Here's a breakdown of the directory structure:

```bash
netlify/
├── functions/
│   └── hello.js                                          # Example serverless function
│
└── plugins/
    └── jobs-structured-schema-api/
        ├── manifest.yml                                  # Plugin manifest file (required)
        └── netlify-plugin-jobs-structured-schema-api.js  # Plugin code (required)
```

## Functions

The `functions` subdirectory contains serverless function files. Currently, it includes the following file:

- `hello.js`: A temporary/example serverless function file.

**hello.js**

```javascript
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello UX Brighton!" }),
  };
};
```

## Plugins

The `plugins` subdirectory contains Netlify plugins. Currently, it includes the following plugin:

- `jobs-structured-schema-api`: A plugin for processing job post markdown files and adding structured data to the content pulled from an external API.

**jobs-structured-schema-api**

The plugin includes the following files:

- `manifest.yml`: The manifest file for the plugin &mdash; (*This file is required for all Netlify plugins.*)
- `netlify-plugin-jobs-structured-schema-api.js`: The plugin script file responsible for processing job post markdown files &mdash; (*This file is required for all Netlify plugins.*)

The plugin performs the following tasks:

1. Reads the directory containing the job post markdown files.
2. Processes each markdown file:
   - Extracts the JSON front matter and content from the markdown file.
   - Extracts the ID from the JSON front matter.
   - Retrieves a JSON data based on the ID from an external API using a bearer token.
   - Appends the JSON data to the content.
   - Updates the JSON front matter in the content.
   - Writes the updated content back to the markdown file.

**NOTE:** The updated markdown files only appear in the Nelify deploy preview and not in the local repository. This is because the plugin is executed during the build process and the updated files are not committed to the repository.

**netlify-plugin-jobs-structured-schema-api.js**

```javascript
// Dependencies
const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
  async onPreBuild() {
    // Code for processing job post markdown files
    // ...
  },
};

// Helper functions
// ...
```

### Helper Functions

The `netlify-plugin-jobs-structured-schema-api.js` file also includes several helper functions used in the processing of job post markdown files:

- `extractJsonFrontMatter(content)`: Extracts the JSON front matter and content from a markdown file.
- `createMarkdownWithJsonFrontMatter(jsonFrontmatter, content)`: Updates the JSON front matter in the content and returns the updated markdown content.
- `appendToBody(content, data)`: Appends the provided JSON data as a `<script>` tag to the body area of the markdown content.

### Usage

To utilise the `jobs-structured-schema-api` plugin in your Netlify project, follow these steps:

1. Add the plugin to your `netlify.toml` file:

   ```toml
   [[plugins]]
   package = "netlify-plugin-jobs-structured-schema-api"
   ```

2. Ensure that the `jobs-structured-schema-api` plugin directory is present within the `plugins` directory of your Netlify project.

3. Customize the plugin's behavior by modifying the `netlify-plugin-jobs-structured-schema-api.js` file as needed. You can adjust the API endpoint, token retrieval, or any other relevant logic within the `onPreBuild` method.

4. Run the Netlify build command to trigger the plugin's execution during the build process.

   Example command: `netlify build`
