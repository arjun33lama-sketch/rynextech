const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from project root
app.use(express.static(__dirname, {
  extensions: ['html', 'htm']
}));

// Fallback to index.html for root or missing routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Rynex Tech static server running on http://localhost:${PORT}`);
});
