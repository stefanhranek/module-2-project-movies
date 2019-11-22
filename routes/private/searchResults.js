var express = require('express');
var router  = express.Router();

// GET '/private/searchResults'
router.get('/', function(req, res, next) {
  res.render('searchResults');
});

module.exports = router;
