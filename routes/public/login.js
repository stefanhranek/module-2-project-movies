var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
    console.log('req session', req.session.currentUser);

    res.render('login', { layout: 'layoutPublic.hbs' });
});

// router.get('/login', function(req, res, next) {
//   res.render('login', { title: 'Express' });
// });

// /* POST login page. */
// router.post('/', function(req, res, next) {
//   res.send('login', { title: 'Login page' });
// });

module.exports = router;