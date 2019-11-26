var express = require('express');
var router  = express.Router();
var axios   = require('axios');


// // GET '/private/movieDetail/get'
// router.get('/get/:movieId', function(req, res, next) {

//   const { movieId } = req.params;

//   res.redirect('/private/movieDetail/' + movieId)
  
// });




// GET '/private/movieDetail'
router.get('/:movieId', function(req, res, next) {

  const { movieId } = req.params

  console.log('param is ', movieId);

  axios
  .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=885dbfba88f11b7023082ad1956f5310&language=en-US`)
  .then( (response) => {

    const movie = response.data;

    console.log('BLAAAA', response.data)
    res.render('movieDetail', { movie });
  })
  .catch( (err) => console.log(err));
  
});






module.exports = router;
