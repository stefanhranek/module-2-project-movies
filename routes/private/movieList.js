var express = require("express");
var router = express.Router();

// GET '/private/movieList'
router.get("/", function(req, res, next) {
  res.render("movieList");
});

module.exports = router;
