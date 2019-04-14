var express = require("express");
var router = express.Router();
const Gymnast = require("../models/gymnast");
// var fs = require("fs");
// var path = require("path");

router.get("/", async function(req, res, next) {
  try {
    const gymnasts = await Gymnast.find({});
    if (gymnasts) {
      console.log(res.json);
      return res.json({
        sucess: true,
        data: { gymnasts },
        message: "Here's all the gymnasts!"
      });
    } else {
      return res.json({
        success: false,
        data: [],
        message: "Gymnasts not found! Try again pliz :("
      });
    }
  } catch (err) {
    if (err) {
      console.err(err);
    }
  }
});
//   //   res.send(gymnastsData);
//   fs.readFile(
//     path.join(__dirname, "../data/gymnasts.json"),
//     (err, gymnastsData) => {
//       if (err) throw err;
//       res.send(JSON.parse(gymnastsData));
//     }
//   );
// });

module.exports = router;
