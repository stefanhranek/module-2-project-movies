var express = require('express');
var router = express.Router();

/* GET signup page. */

router.get('/signup', function(req, res, next) {
    res.render('signup', { title: 'Express' });
});

  /* POST signup page. */
router.post('/signup', function(req, res, next) {
    res.send('signup', { title: 'signup page' });
});

module.exports = router;
