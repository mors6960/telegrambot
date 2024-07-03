const express = require('express');
const bodyParser = require('body-parser');
const botRoutes = require('./routes/botRoutes');
const { startWebApp, isWebAppStarted } = require('./services/webAppService');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/bot', botRoutes);

app.get('/webapp-state', (req, res) => {
  res.json({ started: isWebAppStarted() });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
