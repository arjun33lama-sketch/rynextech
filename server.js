const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static assets from project root
app.use(express.static(__dirname, {
  extensions: ['html', 'htm']
}));

// Explicit SEO asset routes
app.get('/robots.txt', (req, res) => {
  res.type('text/plain').sendFile(path.join(__dirname, 'robots.txt'));
});

app.get('/sitemap.xml', (req, res) => {
  res.type('application/xml').sendFile(path.join(__dirname, 'sitemap.xml'));
});

// Clean route aliases matching modern blog paths & iPlus references
app.get(['/blog', '/blog/', '/en/blog', '/en/blog/'], (req, res) => {
  res.sendFile(path.join(__dirname, 'blog.html'));
});

app.get([
  '/how-to-evaluate-ai-tools-objectively',
  '/blog/how-to-evaluate-ai-tools-objectively',
  '/en/blog/how-to-evaluate-ai-tools-objectively'
], (req, res) => {
  res.sendFile(path.join(__dirname, 'how-to-evaluate-ai-tools-objectively.html'));
});

app.get([
  '/blog-japan-nepal-collaboration',
  '/japan-nepal-collaboration',
  '/blog/japan-nepal-collaboration',
  '/blog/blog-japan-nepal-collaboration',
  '/en/blog/japan-nepal-collaboration'
], (req, res) => {
  res.sendFile(path.join(__dirname, 'blog-japan-nepal-collaboration.html'));
});

app.get([
  '/setting-up-nepal-offshore-development-center',
  '/blog/setting-up-nepal-offshore-development-center',
  '/en/blog/setting-up-nepal-offshore-development-center'
], (req, res) => {
  res.sendFile(path.join(__dirname, 'setting-up-nepal-offshore-development-center.html'));
});

app.get([
  '/ai-assisted-senior-led-teams-deliver-faster',
  '/blog/ai-assisted-senior-led-teams-deliver-faster',
  '/en/blog/ai-assisted-senior-led-teams-deliver-faster'
], (req, res) => {
  res.sendFile(path.join(__dirname, 'ai-assisted-senior-led-teams-deliver-faster.html'));
});

app.get([
  '/building-scalable-microservices-with-go-and-kubernetes',
  '/blog/building-scalable-microservices-with-go-and-kubernetes',
  '/en/blog/building-scalable-microservices-with-go-and-kubernetes',
  '/building-scalable-microservices',
  '/blog/building-scalable-microservices'
], (req, res) => {
  res.sendFile(path.join(__dirname, 'building-scalable-microservices-with-go-and-kubernetes.html'));
});

app.get([
  '/offshore-hr-for-tech-sourcing-bilingual-engineers',
  '/blog/offshore-hr-for-tech-sourcing-bilingual-engineers',
  '/en/blog/offshore-hr-for-tech-sourcing-bilingual-engineers',
  '/offshore-hr-for-tech',
  '/blog/offshore-hr-for-tech'
], (req, res) => {
  res.sendFile(path.join(__dirname, 'offshore-hr-for-tech-sourcing-bilingual-engineers.html'));
});

// Fallback to index.html for root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Rynex Tech static server running on http://localhost:${PORT}`);
});

