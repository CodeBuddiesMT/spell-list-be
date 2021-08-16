var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const accountSchema = new Schema({
  name: String,
  password: String, // This is a stub. You'd never store password like this I assume.
  email: String, // maybe there is an email tyep? otherise we need to verify for correct email.
  // other stuff account specific stuff like characters
});

module.exports = Account = mongoose.model("account", accountSchema);
