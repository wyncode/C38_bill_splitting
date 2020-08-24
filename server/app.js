require('./db/config');
const express = require('express'),
  openRoutes = require('./routes/open'),
  app = express(),
  passport = require('./middleware/authentication'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
  userRouter = require('./routes/secure/users'),
  billRouter = require('./routes/secure/Bills');

// Parse incoming JSON into objects
app.use(express.json());

// app.use((req, resp, next) => {
//   console.log(req.method, req.path);
//   next();
// });

app.use(openRoutes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(
  passport.authenticate('jwt', {
    session: false,
  }),
);

app.use(userRouter);
app.use(billRouter);
module.exports = app;
