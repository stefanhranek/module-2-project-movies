var express = require('express');
var router = express.Router();
var axios = require('axios');

const baseUrl = 'https://api.themoviedb.org/3/movie/';

// // GET '/private/movieDetail/get'
// router.get('/get/:movieId', function(req, res, next) {

//   const { movieId } = req.params;

//   res.redirect('/private/movieDetail/' + movieId)

// });

const User = require('./../../Models/User');


// GET '/private/movieDetail'
router.get('/:movieId', function(req, res, next) {


    const { movieId } = req.params
        // const { moviesToSee, seenMovies } = req.session.currentUser;
    const { _id } = req.session.currentUser;
    // find user by id
    let seenMovie = false;
    let movieToSee = false;
    User.findById({ _id })
        .then((userObj) => {
            const { seenMovies, moviesToSee } = userObj;
            const seenMovieIdExists = seenMovies.includes(movieId);
            const movieToSeeIdExists = moviesToSee.includes(movieId);

            // Check if movieId exist in seenMovies or not
            if (seenMovieIdExists) {
                const movieIndex = seenMovies.indexOf(movieId);
                seenMovies.splice(movieIndex, 1);
            } else if (!seenMovieIdExists) {
                seenMovies.push(movieId)
                seenMovie = true;
            }

            if (movieToSeeIdExists) {
                const movieIndex = moviesToSee.indexOf(movieId);
                moviesToSee.splice(movieIndex, 1);
            } else if (!movieToSeeIdExists) {
                moviesToSee.push(movieId)
                movieToSee = true;
            }

            // console.log("THISSSSSSSSSSSSSS", seenMovies);

            // seenMovies.map(movie => {
            //     console.log(movieId, '=',movie);
            //     if (movie == movieId) {


            //     }
            // })
        })
        .catch((err) => console.log(err));




    // console.log(">>>>>>>>", movieId)

    // moviesToSee.map(movie => {
    //     if (movie === movieId) {
    //         movieToSee = true;
    //     }
    // })




    const moviePromise1 = axios.get(`${baseUrl}${movieId}?api_key=885dbfba88f11b7023082ad1956f5310&language=en-US`);

    const creditsPromise2 = axios.get(`${baseUrl}${movieId}/credits?api_key=885dbfba88f11b7023082ad1956f5310`)

    Promise.all([moviePromise1, creditsPromise2])
        .then((responseArr) => {


            const movie = responseArr[0].data;
            movie.seenMovie = seenMovie;
            movie.movieToSee = movieToSee;

            const credits = responseArr[1].data;

            let director = '';

            if (credits.crew) {
                credits.crew.forEach(
                    (person) => {
                        if (person.job === 'Director') {
                            director = person.name;


                        }
                    }
                )
            }

            // console.log(">>>>>>>>'",seenMovies);

            const year = movie.release_date.slice(0, 4);

            console.log(year);


            res.render('movieDetail', {
                layout: 'nav/yellowprofile.hbs',
                movie, director, year 
            });


        })
        .catch((err) => console.log(err));

});






module.exports = router;