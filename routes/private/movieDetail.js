var express = require('express');
var router = express.Router();

// GET '/private/movieDetail'
router.get('/', function(req, res, next) {
  res.render('movieDetail');
});


module.exports = router;
