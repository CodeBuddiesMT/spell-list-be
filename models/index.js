// Keep these in alphabetical order

const Account = require("./account.model");
const Character = require("./character.model");
const Class = require("./class.model");
const Item = require("./item.model");
const Race = require("./race.model");
const Spell = require("./spell.model");

module.exports = function () {
  // Make sure exports are also in alphatical (matching) order.
  Account;
  Character;
  Class;
  Item;
  Race;
  Spell;
};
