var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');

var router = require('./routes');

var app = express();
app.set('views', __dirname);
app.set('view engine', 'jade');
app.set('port', '3000');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
