var express = require('express');
var router = express.Router();
const User = require('./../../Models/User');
const axios = require('axios');
const baseUrl = 'https://api.themoviedb.org/3/movie/';


// GET '/private/profile'
router.get('/', function(req, res, next) {

    const { _id } = req.session.currentUser;

    User.findById({ _id })
        .then((userObj) => {
            const { moviesToSee, seenMovies } = userObj;

            // Take the movieIds from moviesToSee
            // Create a get request for each movie. This returns array of request promises
            const moviesToSeePr = moviesToSee.map((movieId) => {
                return axios.get(`${baseUrl}${movieId}?api_key=885dbfba88f11b7023082ad1956f5310&language=en-US`);
            });

            // Listen to array of promises when all of the GET requests are done
            Promise.all(moviesToSeePr)
                .then((moviesToSee) => { // returns back the movie objects from previous requests

                    console.log('moviesToSee', moviesToSee);

                    const seenMoviesPr = seenMovies.map((movieId) => {
                        return axios.get(`${baseUrl}${movieId}?api_key=885dbfba88f11b7023082ad1956f5310&language=en-US`);
                    });

                    Promise.all(seenMoviesPr)
                        .then((seenMovies) => {

                            console.log('seenMovies', seenMovies);


                            res.render('profile', { 
                                layout: 'nav/yellowprofile.hbs',
                                title: 'Profile | Movie Log',
                                user: req.session.currentUser, moviesToSee, seenMovies });
                        })
                })
                .catch((err) => console.log(err));



        })
        .catch((err) => console.log(err));

    // res.render('profile', {user:req.session.currentUser});
});



module.exports = router;