var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.get("/hellousers", function (req, res, next) {
  res.send("respond with a resource on route hellousers again");
});

module.exports = router;
