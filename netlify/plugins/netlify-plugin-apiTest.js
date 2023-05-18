const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
  async onPreBuild() {
    try {
      // Read the directory containing the job post markdown files
      const jobPostsDirectory = `${SITE_ROOT}/_jobPosts`;
      const fileNames = await fs.readdir(jobPostsDirectory);

      // Process each markdown file
      for (const fileName of fileNames) {
        if (path.extname(fileName) === '.md') {
          const filePath = path.join(jobPostsDirectory, fileName);

          // Extract the ID from the markdown file name
          const id = path.basename(fileName, '.md');

          // Retrieve the Bearer token from environment variables
          const token = process.env.JOBS_API_TOKEN;

          // Make API request to retrieve the JSON data based on the ID
          const response = await axios.get(`https://workml.io/v1/jobs/${id}/jsonld`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = response.data;

          // Read the markdown file content
          let content = await fs.readFile(filePath, 'utf8');

          // Append the JSON data to the content
          content = appendToBody(content, data);

          // Write the updated content back to the markdown file
          await fs.writeFile(filePath, content, 'utf8');
        }
      }

      console.log('Job post markdown files updated successfully.');
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

