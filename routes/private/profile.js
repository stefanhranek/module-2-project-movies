var express = require('express');
var router = express.Router();

// GET '/private/profile'
router.get('/', function(req, res, next) {
  res.render('profile');
});

module.exports = router;
