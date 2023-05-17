const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const jobPostsDirectory = path.resolve(__dirname, '../_jobPosts');
  const jobPostFiles = fs.readdirSync(jobPostsDirectory);

  jobPostFiles.forEach((file) => {
    const filePath = path.resolve(jobPostsDirectory, file);
    let markdownContent = fs.readFileSync(filePath, 'utf-8');

    // Modify the markdownContent variable to include the JSON data object
    markdownContent += `\n<script type="application/ld+json">YOUR_JSON_DATA_OBJECT</script>\n`;

    // Write the modified content back to the file
    fs.writeFileSync(filePath, markdownContent, 'utf-8');
  });

  return {
    statusCode: 200,
    body: 'JSON data added to each page successfully!',
  };
};
