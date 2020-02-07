var express = require("express");
var router = express.Router();

// GET '/public/signup'
router.get("/", function(req, res, next) {
  res.render("signup", { layout: "layoutPublic.hbs" });
});

module.exports = router;
