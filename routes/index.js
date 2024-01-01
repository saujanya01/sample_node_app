var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", {
    title: "Express",
    backend_url: process.env.REACT_APP_RMF_SERVER,
  });
});

router.get("/hello-from-nvim", (req, res)=>{
    res.status(200).json({message: "this route was written in nvim"})
}
)

router.get("/test", function (req, res, next) {
  res.status(200).json({ message: "Hello World!" });
});

module.exports = router;
