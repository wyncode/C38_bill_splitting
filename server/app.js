require('./db/config');
if (process.env.NODE_ENV !== 'production') require('dotenv').config();
const express = require('express'),
  app = express(),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  openRoutes = require('./routes/open'),
  userRouter = require('./routes/secure/users'),
  billRouter = require('./routes/secure/bills'),
  path = require('path');

// Parse incoming JSON into objectsx
app.use(express.json());

app.use(openRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(userRouter);
app.use(billRouter);

if (process.env.NODE_ENV === 'production') {
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, '../client/build', 'index.html'));
  });
}
module.exports = app;
