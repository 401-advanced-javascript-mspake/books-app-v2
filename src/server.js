'use strict';

// require('dotenv').config();

// Application Dependencies
const express = require('express');
const methodOverride = require('method-override');
const methodOverrideCallback = require('./middleware/method-override-callback.js');
const handleError = require('./middleware/error-handler.js');
const routes = require('./routes/routes.js');

// Application Setup
const app = express();

// Application Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(methodOverride(methodOverrideCallback))

// Set the view engine for server-side templating
app.set('view engine', 'ejs');

// API Routes
app.use('/', routes);

app.use(handleError)

let start = (port = process.env.PORT) => {
  app.listen(port, () => {
    console.log(`Server Up on ${port}`);
  });
};

module.exports = {app,start};
