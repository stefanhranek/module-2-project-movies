var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login page' });
});

router.get('/login', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST login page. */
router.post('/login', function(req, res, next) {
  res.send('index', { title: 'Login page' });
});

module.exports = router;
