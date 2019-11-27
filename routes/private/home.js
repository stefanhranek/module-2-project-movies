var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥≥', req.session);

    res.render('home', { title: 'Home page' });
});

module.exports = router;