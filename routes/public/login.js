var express = require('express');
var router  = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login page' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

/* POST login page. */
router.post('/login', function(req, res, next) {
  res.send('login', { title: 'Login page' });
});

module.exports = router;
