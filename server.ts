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
app.use(express.static(dir, { extensions: ['html'] }));

// Fallback to index.html for SPA-like routes if any (though these are static files)
app.get('*', (req, res) => {
  res.sendFile(path.join(dir, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
