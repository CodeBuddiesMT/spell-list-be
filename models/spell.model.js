var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const spellSchema = new Schema({
  name: String,
  description: String,
  spell_slot: Number,
});

module.exports = Spell = mongoose.model("spell", spellSchema);
