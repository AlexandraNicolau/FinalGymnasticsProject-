var express = require("express");
var router = express.Router();
const Gymnast = require("../models/gymnast");

router.get("/:lastName", async function(req, res, next) {
  try {
    const gymnast = await Gymnast.findOne({ lastName: req.params.lastName }); //
    // the req.paramas.lastName (or whatever else) makes it dynamic, so it is used as the value
    // for a paramter ie lastName to select from the db
    if (gymnast) {
      return res.json({
        success: true,
        data: gymnast,
        message: "Gymnast found! :)"
      });
    } else {
      return res.json({
        success: false,
        data: [],
        message: "Gymnast not found! Try again pliz :("
      });
    }
  } catch (err) {
    if (err) {
      console.log(err);
    }
  }
});

module.exports = router;
