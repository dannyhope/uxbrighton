const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const siteDirectory = path.resolve(__dirname, './_site/jobs2');

  // Retrieve all HTML files in the _site/jobs2 directory
  const htmlFiles = getHtmlFiles(siteDirectory);

  htmlFiles.forEach((file) => {
    const filePath = path.resolve(siteDirectory, file);
    let htmlContent = fs.readFileSync(filePath, 'utf-8');

    // Modify the htmlContent variable to include the JSON data object
    htmlContent += `<script type="application/ld+json">YOUR_JSON_DATA_OBJECT</script>`;

    // Write the modified content back to the file
    fs.writeFileSync(filePath, htmlContent, 'utf-8');
  });

  return {
    statusCode: 200,
    body: 'JSON data added to each page successfully!',
  };
};

// Helper function to retrieve all HTML files in a directory and its subdirectories
function getHtmlFiles(directory) {
  const files = fs.readdirSync(directory);
  const htmlFiles = [];

  files.forEach((file) => {
    const filePath = path.resolve(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile() && path.extname(file) === '.html') {
      htmlFiles.push(file);
    } else if (stats.isDirectory()) {
      const subdirectoryFiles = getHtmlFiles(filePath);
      htmlFiles.push(...subdirectoryFiles);
    }
  });

  return htmlFiles;
}
