const fs = require('fs');
const path = require('path');

exports.handler = async () => {
  const siteDirectory = path.resolve(__dirname, './_site');
  const targetDirectory = path.resolve(siteDirectory, 'jobs2');

  // Retrieve all HTML files in the _site/jobs2 directory and its subdirectories
  const htmlFiles = getHtmlFiles(targetDirectory);

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
  let htmlFiles = [];

  files.forEach((file) => {
    const filePath = path.resolve(directory, file);
    const stats = fs.statSync(filePath);

    if (stats.isFile() && path.extname(file) === '.html') {
      htmlFiles.push(path.relative(path.resolve(__dirname, '../_site'), filePath));
    } else if (stats.isDirectory()) {
      const subdirectoryFiles = getHtmlFiles(filePath);
      htmlFiles = htmlFiles.concat(subdirectoryFiles);
    }
  });

  return htmlFiles;
}
