var express = require('express');
var router = express.Router();


// GET '/public/signup'
router.get('/', function(req, res, next) {
    res.render('signup');
});

//   /* POST signup page. */
// router.post('/signup', function(req, res, next) {
//     res.send('signup', { title: 'signup page' });
// });

module.exports = router;
