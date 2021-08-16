var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const raceSchema = new Schema({
  name: String,
  description: String,
});

module.exports = Race = mongoose.model("race", raceSchema);
