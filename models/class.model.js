var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const classSchema = new Schema({
  name: String,
  description: String,
});

module.exports = Class = mongoose.model("class", classSchema);
