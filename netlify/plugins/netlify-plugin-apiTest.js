const axios = require('axios');
const fs = require('fs-extra');

module.exports = {
  async onPreBuild() {
    try {
      // Your API request logic to retrieve the data
      const response = await axios.get('https://www.workml.io/v1/jobs/1243/jsonld', {
        headers: {
          Authorization: 'Bearer 5e21833f-f5ea-4ce7-7a5c-2bfb537ca8bd', // Replace with your actual authentication token
        },
      });
      const data = response.data;

      // Read the markdown file and append the data to the body
      const filePath = `./_jobPosts/1272-senior-ux-designer-saas.md`;
      const content = await fs.readFile(filePath, 'utf8');
      const updatedContent = appendToBody(content, data);

      // Write the updated content back to the markdown file
      await fs.writeFile(filePath, updatedContent, 'utf8');

      console.log('Markdown file updated successfully.');
    } catch (error) {
      console.error('Error:', error);
    }
  },
};

function appendToBody(content, data) {
  // Wrap the JSON data in a <script> tag with type "application/ld+json"
  const jsonData = JSON.stringify(data, null, 2);
  const scriptTag = `<script type="application/ld+json">\n${jsonData}\n</script>`;

  // Append the <script> tag to the body area of the markdown file
  const updatedContent = `${content}\n\n${scriptTag}`;

  return updatedContent;
}
