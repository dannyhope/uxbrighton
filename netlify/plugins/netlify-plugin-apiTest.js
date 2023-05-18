const axios = require('axios');
const fs = require('fs-extra');
const path = require('path');

module.exports = {
  async onPreBuild() {
    try {
      // Read the directory containing the job post markdown files
      const jobPostsDirectory = './_jobPosts';
      const fileNames = await fs.readdir(jobPostsDirectory);

      // Process each markdown file
      for (const fileName of fileNames) {
        if (path.extname(fileName) === '.md') {
          const filePath = path.join(jobPostsDirectory, fileName);

          // Read the markdown file content
          let content = await fs.readFile(filePath, 'utf8');

          // Extract the front matter and content from the markdown file
          const { frontmatter, body } = extractFrontMatter(content);

          // Extract the ID from the front matter attributes
          const id = frontmatter.id;

          // Retrieve the Bearer token from environment variables
          const token = process.env.JOBS_API_TOKEN;

          // Make API request to retrieve the JSON data based on the ID
          const response = await axios.get(`https://workml.io/v1/jobs/${id}/jsonld`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = response.data;

          // Append the JSON data to the content
          content = appendToBody(body, data);

          // Update the front matter in the content
          const updatedContent = createMarkdownWithFrontMatter(frontmatter, content);

          // Write the updated content back to the markdown file
          await fs.writeFile(filePath, updatedContent, 'utf8');
        }
      }

      console.log('Job post markdown files updated successfully.');
    } catch (error) {
      console.error('Error:', error);
    }
  },
};

function extractFrontMatter(content) {
  const frontmatterRegex = /^(---\s*\n[\s\S]*?\n?)^(---\s*$\n?)/m;
  const matches = frontmatterRegex.exec(content);
  if (matches && matches.length > 2) {
    return {
      frontmatter: JSON.parse(matches[1]),
      body: content.slice(matches[0].length),
    };
  } else {
    return {
      frontmatter: {},
      body: content,
    };
  }
}

function createMarkdownWithFrontMatter(frontmatter, content) {
  const frontmatterString = JSON.stringify(frontmatter, null, 2);
  return `---\n${frontmatterString}\n---\n\n${content}`;
}

function appendToBody(content, data) {
  // Wrap the JSON data in a <script> tag with type "application/ld+json"
  const jsonData = JSON.stringify(data, null, 2);
  const scriptTag = `<script type="application/ld+json">\n${jsonData}\n</script>`;

  // Append the <script> tag to the body area of the markdown content
  const updatedContent = `${content}\n\n${scriptTag}`;

  return updatedContent;
}

