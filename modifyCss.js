const fs = require('fs');

// Path to your CSS file
const cssFilePath = 'cssville-ui.bundle.css';

// Comments to add
const comments = {
  start: '/*! purgecss start ignore */',
  end: '/*! purgecss end ignore */',
};

// Read the content of the CSS file
fs.readFile(cssFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading CSS file:', err);
    return;
  }

  // Modify the content by adding comments
  const modifiedContent = `${comments.start}\n${data}\n${comments.end}`;

  // Write the modified content back to the file
  fs.writeFile(cssFilePath, modifiedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing modified CSS file:', err);
      return;
    }

    console.log('CSS file modified successfully.');
  });
});
