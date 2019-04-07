var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");

router.get("/", function(req, res, next) {
  //   res.send(gymnastsData);
  fs.readFile(
    path.join(__dirname, "../data/gymnasts.json"),
    (err, gymnastsData) => {
      if (err) throw err;
      res.send(JSON.parse(gymnastsData));
    }
  );
});

module.exports = router;
