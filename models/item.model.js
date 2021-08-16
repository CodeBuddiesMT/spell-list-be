var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: String,
  description: String,
});

module.exports = Item = mongoose.model("item", itemSchema);
