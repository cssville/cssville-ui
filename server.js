const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '')));

// API routes or any other routes can be added here

// For any other requests, serve the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});