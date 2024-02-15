const express = require('express');
const cors = require('cors');
const path = require('node:path');

const routes = require('./routes');

const app = express();

// permission cors
app.use(cors());
app.use(express.json());

// add routes to app
app.use('/api', routes);

// if routes not found, send message with 404 status
app.use((error, res, next) => {
  res.status(404).json({ message: 'Use api on routes: /api/' });
});

// error handler (4 params)
app.use((error, req, res, next) => {
  const { status = 500, message = 'Internal Server Error' } = error;
  res.status(status).json({ message });
});

module.exports = app;
