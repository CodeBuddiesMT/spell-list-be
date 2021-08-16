var Spell = require("../models/spell.model");

// Display list of all Spells.
exports.spell_list = function (req, res) {
  res.send("NOT IMPLEMENTED: Spell list");
};

// Display detail page for a specific Spell.
exports.spell_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Spell detail: " + req.params.id);
};

// Display Spell create form on GET.
exports.spell_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Spell create GET");
};

// Handle Spell create on POST.
exports.spell_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Spell create POST");
};

// Display Spell delete form on GET.
exports.spell_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Spell delete GET");
};

// Handle Spell delete on POST.
exports.spell_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Spell delete POST");
};

// Display Spell update form on GET.
exports.spell_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Spell update GET");
};

// Handle spell update on POST.
exports.spell_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Spell update POST");
};
