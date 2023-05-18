const axios = require('axios');
const fs = require('fs-extra');
const yaml = require('js-yaml');

module.exports = {
  async onPreBuild({ constants }) {
    try {
      // Your API request logic to retrieve the data
      const response = await axios.get('https://www.workml.io/v1/jobs/1243/jsonld', {
        headers: {
          Authorization: 'Bearer 5e21833f-f5ea-4ce7-7a5c-2bfb537ca8bd', // Replace with your actual authentication token
        },
      });
      const data = response.data;

      // Read the markdown file and update the front matter
      const filePath = `${constants.SITE_ROOT}/_jobPosts/1272-senior-ux-designer-saas.md`;
      const content = await fs.readFile(filePath, 'utf8');
      const updatedContent = appendToFrontMatter(content, data);

      // Write the updated content back to the markdown file
      await fs.writeFile(filePath, updatedContent, 'utf8');

      console.log('Markdown file updated successfully.');
    } catch (error) {
      console.error('Error:', error);
    }
  },
};

function appendToFrontMatter(content, data) {
  // Parse the front matter YAML
  let frontMatter = yaml.safeLoadFront(content);

  // Append the data object to the front matter
  frontMatter = { ...frontMatter, ...data };

  // Convert the front matter back to YAML string
  const updatedFrontMatter = yaml.safeDump(frontMatter, { lineWidth: -1 });

  // Update the content with the updated front matter
  const updatedContent = `---\n${updatedFrontMatter}---\n${content}`;

  return updatedContent;
}

