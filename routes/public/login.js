var express = require("express");
var router = express.Router();

/* GET login page. */
router.get("/", function(req, res, next) {
  console.log("req session", req.session.currentUser);

  res.render("login", { layout: "layoutPublic.hbs" });
});

module.exports = router;
