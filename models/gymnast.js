const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var gymnastSchema = new mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    skill: String,
    country: String
  },
  { collection: "Gymnasts" }
);

module.exports = mongoose.model("Gymnasts", gymnastSchema);
