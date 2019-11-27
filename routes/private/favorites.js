var express = require('express');
var router  = express.Router();
const User = require('./../../Models/User');

// GET '/private/favorites/seen'
router.get('/seen', function(req, res, next) {

    // get movieId from req.movie-search-query

    // Get the user by id from the cookie _> req.session.currentUser

    // Update current users seenMovies array (push)
    res.status(200).send();
});

// GET '/private/favorites/next'
router.get('/next', function(req, res, next) {
    
    // get movieId from req.movie-search-query

    // Get the user by id from the cookie _> req.session.currentUser

    // Update current users seenMovies array (push)
    res.status(200).send();
});




module.exports = router;


