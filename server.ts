import express from 'express';
import path from 'path';

const app = express();
const PORT = 3000;

// Log all requests and set CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.on('finish', () => {
    console.log(`${req.method} ${req.originalUrl} - ${res.statusCode}`);
  });
  next();
});

const dir = path.join(process.cwd(), 'hashgraphvc.com');

// Explicitly serve HTML pages that have corresponding directories containing Nuxt payload files
app.get('/about', (req, res) => {
  res.sendFile(path.join(dir, 'about.html'));
});
app.get('/about/', (req, res) => {
  res.sendFile(path.join(dir, 'about.html'));
});
app.get('/services', (req, res) => {
  res.sendFile(path.join(dir, 'services.html'));
});
app.get('/services/', (req, res) => {
  res.sendFile(path.join(dir, 'services.html'));
});
app.get('/contact', (req, res) => {
  res.sendFile(path.join(dir, 'contact.html'));
});
app.get('/contact/', (req, res) => {
  res.sendFile(path.join(dir, 'contact.html'));
});
app.get('/projects', (req, res) => {
  res.sendFile(path.join(dir, 'projects.html'));
});
app.get('/projects/', (req, res) => {
  res.sendFile(path.join(dir, 'projects.html'));
});
app.get('/team', (req, res) => {
  res.sendFile(path.join(dir, 'directors.html'));
});
app.get('/team/', (req, res) => {
  res.sendFile(path.join(dir, 'directors.html'));
});
app.get('/careers', (req, res) => {
  res.sendFile(path.join(dir, 'careers.html'));
});
app.get('/careers/', (req, res) => {
  res.sendFile(path.join(dir, 'careers.html'));
});
app.get('/privacy-policy', (req, res) => {
  res.sendFile(path.join(dir, 'privacy-policy.html'));
});
app.get('/privacy-policy/', (req, res) => {
  res.sendFile(path.join(dir, 'privacy-policy.html'));
});
app.get('/companies/:name', (req, res) => {
  res.sendFile(path.join(dir, 'companies', `${req.params.name}.html`));
});
app.get('/companies/:name/', (req, res) => {
  res.sendFile(path.join(dir, 'companies', `${req.params.name}.html`));
});

app.use(express.static(dir, { extensions: ['html'] }));

// Fallback to index.html for SPA-like routes if any (though these are static files)
app.get('*', (req, res) => {
  res.sendFile(path.join(dir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
