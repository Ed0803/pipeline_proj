const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`
    <h1>Pipeline Project</h1>
    <p>Application successfully running.</p>
    <a href="/about">About</a>
  `);
});

app.get('/about', (req, res) => {
  res.send(`
    <h1>About</h1>
    <p>Docker and CI/CD demonstration.</p>
    <a href="/">Home</a>
  `);
});

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

app.get('/version', (req, res) => {
  res.set('Cache-Control', 'no-store');
  res.send(process.env.APP_VERSION || 'local');
});

if (require.main === module) {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;