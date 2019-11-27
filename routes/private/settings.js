var express = require('express');
var router  = express.Router();
const User  = require('./../../Models/User')

// GET '/private/settings'
router.get('/', function(req, res, next) {
  res.render('settings', {user:req.session.currentUser});
});


// POST /
router.post('/', function (req, res, next) {
  
  const updatedUser = {
    username: req.body.username,
    email: req.body.email,
    quote: req.body.quote,
  }
  // console.log(updatedUser);
  
  User.findOneAndUpdate({_id: req.session.currentUser._id}, updatedUser, {new: true}, (err, theUser) => {
    // console.log('THIS IS WHAT WERE LOOKING FOR', theUser);
    req.session.currentUser = theUser;
    if (err) {return next(err); }
    res.redirect('/private/profile');
  });
});

module.exports = router;
