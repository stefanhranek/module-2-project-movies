var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var homeRouter = require('./routes/private/home');
var searchRouter = require('./routes/private/search');
var searchResultsRouter = require('./routes/private/searchResults');
var movieDetailRouter = require('./routes/private/movieDetail');
var movieListRouter = require('./routes/private/movieList');
var profileRouter = require('./routes/private/profile');
var settingsRouter = require('./routes/private/settings');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/routes/private/home', homeRouter);
app.use('/routes/private/search', searchRouter);
app.use('/routes/private/searchResults', searchResultsRouter);
app.use('/routes/private/movieDetail', movieDetailRouter);
app.use('/routes/private/movieList', movieListRouter);
app.use('/routes/private/profile', profileRouter);
app.use('/routes/private/settings', settingsRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
