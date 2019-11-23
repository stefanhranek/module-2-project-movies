var createError   = require('http-errors');
var express       = require('express');
var path          = require('path');
var cookieParser  = require('cookie-parser');
var logger        = require('morgan');
var mongoose      = require('mongoose');
var bodyParser    = require('body-parser');


mongoose.connect('mongodb://localhost:27017/users', {
  useNewUrlParser   : true,
  useUnifiedTopology: true
});


var loginRouter           = require('./routes/public/login');
var signupRouter          = require('./routes/public/signup');
var homeRouter            = require('./routes/private/home');
var searchRouter          = require('./routes/private/search');
var searchResultsRouter   = require('./routes/private/searchResults');
var movieDetailRouter     = require('./routes/private/movieDetail');
var movieListRouter       = require('./routes/private/movieList');
var profileRouter         = require('./routes/private/profile');
var settingsRouter        = require('./routes/private/settings');

var authRouter = require('./routes/public/auth');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);
app.use('/public/login', loginRouter);
app.use('/public/signup', signupRouter);
app.use('/private/home', homeRouter);
app.use('/private/search', searchRouter);
app.use('/private/searchResults', searchResultsRouter);
app.use('/private/movieDetail', movieDetailRouter);
app.use('/private/movieList', movieListRouter);
app.use('/private/profile', profileRouter);
app.use('/private/settings', settingsRouter);

app.use('/auth',authRouter );


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error   = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
