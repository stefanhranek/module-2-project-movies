var express = require('express');
var router  = express.Router();

// GET '/private/search'
router.get('/', function(req, res, next) {
  res.render('search', { 
    layout: 'nav/yellowsearch.hbs' ,
    title: 'Search | Movie Log' });
});

module.exports = router;