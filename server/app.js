require('./db/config');
const express = require('express'),
  app = express(),
  passport = require('./db/middleware/authentication/authentication'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  openRoutes = require('./routes/open'),
  userRouter = require('./routes/secure/users'),
  billRouter = require('./routes/secure/bills'),
  braintreeRouter = require('./routes/secure/braintree');

// Parse incoming JSON into objectsx
app.use(express.json());
app.use(braintreeRouter);

app.use(openRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  passport.authenticate('jwt', {
    session: false
  })
);

app.use(userRouter);
app.use(billRouter);
module.exports = app;
