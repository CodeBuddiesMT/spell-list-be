var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const characterSchema = new Schema({
  name: String,
  // class: Class, // we will want to import class somehow and use it here.
  // race: Race, // we will want to import Race somehow and use it here.
  // spells: Spell, // we will want to import Spell somehow and use it here.
});

module.exports = Character = mongoose.model("character", characterSchema);
