var express = require("express");
var router = express.Router();
const Gymnast = require("../models/gymnast");

router.post("/", async function(req, res, next) {
  try {
    const gymnast = new Gymnast(req.body);
    const newGymnast = await gymnast.save();
    if (newGymnast)
      return res.json({
        sucess: true,
        data: { newGymnast },
        message: "Yey! New gymnast has been created"
      });
    else {
      return res.json({
        sucess: false,
        data: [],
        message: ":( please try again"
      });
    }
  } catch (err) {
    if (err) {
      console.log(error);
    }
  }
});

module.exports = router;
