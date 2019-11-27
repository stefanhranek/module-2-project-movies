var createError   = require('http-errors');
var express       = require('express');
var path          = require('path');
var cookieParser  = require('cookie-parser');
var logger        = require('morgan');
var mongoose      = require('mongoose');
var bodyParser    = require('body-parser');
var session       = require('express-session');
var MongoStore    = require('connect-mongo')(session);
require('dotenv').config();


var loginRouter           = require('./routes/public/login');
var signupRouter          = require('./routes/public/signup');
var homeRouter            = require('./routes/private/home');
var searchRouter          = require('./routes/private/search');
var movieDetailRouter     = require('./routes/private/movieDetail');
var movieListRouter       = require('./routes/private/movieList');
var profileRouter         = require('./routes/private/profile');
var settingsRouter        = require('./routes/private/settings');
var favoritesRouter        = require('./routes/private/favorites');


var app = express();

var authRouter = require('./routes/public/auth');



mongoose.connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser   : true,
    useUnifiedTopology: true,
    reconnectTries: Number.MAX_VALUE
});


app.use(logger('dev'));


// view engine setup   
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));


// session
app.use(
    session({
        secret: "basic-auth-secret",
        resave: true,
        saveUninitialized: true,
        cookie: { maxAge: 60000 },
        store: new MongoStore({
            mongooseConnection: mongoose.connection,
            ttl: 24 * 60 * 60 // 1 day
        })
    }));


app.use('/', loginRouter);
app.use('/public/login', loginRouter);
app.use('/public/signup', signupRouter);
app.use('/private/home', homeRouter);
app.use('/private/search', searchRouter);
app.use('/private/movieDetail', movieDetailRouter);
app.use('/private/movieList', movieListRouter);
app.use('/private/profile', profileRouter);
app.use('/private/settings', settingsRouter);
app.use('/auth', authRouter);
app.use('/private/favorites', favoritesRouter);


// app.use((req, res, next) => {
//   app.locals.currentUser = req.session.currentUser;
//   next();
// });


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