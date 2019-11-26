var express = require('express');
var router = express.Router();

// GET '/private/profile'
router.get('/', function(req, res, next) {
    console.log('THIS IS THE SESSION', req.session.currentUser);

    res.render('profile', {user:req.session.currentUser});
});



module.exports = router;