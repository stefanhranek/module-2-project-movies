var express = require('express');
var router = express.Router();
var axios = require('axios');

const baseUrl = 'https://api.themoviedb.org/3/movie/';

// // GET '/private/movieDetail/get'
// router.get('/get/:movieId', function(req, res, next) {

//   const { movieId } = req.params;

//   res.redirect('/private/movieDetail/' + movieId)

// });




// GET '/private/movieDetail'
router.get('/:movieId', function(req, res, next) {

    const { movieId } = req.params

    console.log('param is ', movieId);

    const moviePromise1 = axios.get(`${baseUrl}${movieId}?api_key=885dbfba88f11b7023082ad1956f5310&language=en-US`)

    const creditsPromise2 = axios.get(`${baseUrl}${movieId}/credits?api_key=885dbfba88f11b7023082ad1956f5310`)

    Promise.all([moviePromise1, creditsPromise2])
        .then((responseArr) => {


            const movie = responseArr[0].data;
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

            console.log('credits', credits)
            console.log('movie', movie)
            console.log('director', director)
            res.render('movieDetail', { movie, director });

        })
        .catch((err) => console.log(err));

});






module.exports = router;