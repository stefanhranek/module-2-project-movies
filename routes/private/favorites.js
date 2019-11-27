var express = require('express');
var router  = express.Router();
const User = require('./../../Models/User');

// GET '/private/favorites/seen'
router.get('/seen/:movieId', function(req, res, next) {

    console.log('HEEERE', req.params);
    // get movieId from req.params
    const { movieId } = req.params;
    const { _id } = req.session.currentUser;

    // Get the user by id from the cookie _> req.session.currentUser

    User.findById( { _id } )
      .then( (userObj) => {

        const { seenMovies } =  userObj;
        const movieIdExists = seenMovies.includes(movieId);

        // Check if movieId exist in seenMovies or not
        if (movieIdExists) {
            const movieIndex = seenMovies.indexOf(movieId);
            seenMovies.splice(movieIndex, 1);
        }
        else if (!movieIdExists) {
            seenMovies.push(movieId)
        }

        const updatedSeenMovies = seenMovies;

        // Set the updated seenMovies array in the DB for current user
        User.findByIdAndUpdate({ _id }, { $set: { seenMovies: updatedSeenMovies }  } )
          .then( () => {
            res.redirect(`/private/movieDetail/${movieId}`);
          })
          .catch( (err) => console.log(err));

        
    })
      .catch( (err) => console.log(err));

});

// GET '/private/favorites/next'
router.get('/next/:movieId', function(req, res, next) {
    // get movieId from req.params
    const { movieId } = req.params;
    const { _id } = req.session.currentUser;

    // Get the user by id from the cookie _> req.session.currentUser

    User.findById( { _id } )
      .then( (userObj) => {

        const { moviesToSee } =  userObj;
        const movieIdExists = moviesToSee.includes(movieId);

        // Check if movieId exist in moviesToSee or not
        if (movieIdExists) {
            const movieIndex = moviesToSee.indexOf(movieId);
            moviesToSee.splice(movieIndex, 1);
        }
        else if (!movieIdExists) {
            moviesToSee.push(movieId)
        }

        const updatedMoviesToSee = moviesToSee;

        // Set the updated seenMovies array in the DB for current user
        User.findByIdAndUpdate({ _id }, { $set: { moviesToSee: updatedMoviesToSee }  } )
          .then( () => {
            res.redirect(`/private/movieDetail/${movieId}`);
          })
          .catch( (err) => console.log(err));

        
    })
      .catch( (err) => console.log(err));

});




module.exports = router;


