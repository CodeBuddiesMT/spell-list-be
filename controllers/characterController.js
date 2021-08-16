var Character = require("../models/character.model");

// Display list of all Characters.
exports.character_list = function (req, res) {
  res.send("NOT IMPLEMENTED: Character list");
};

// Display detail page for a specific Character.
exports.character_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Character detail: " + req.params.id);
};

// Display Character create form on GET.
exports.character_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Character create GET");
};

// Handle Character create on POST.
exports.character_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Character create POST");
};

// Display Character delete form on GET.
exports.character_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Character delete GET");
};

// Handle Character delete on POST.
exports.character_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Character delete POST");
};

// Display Character update form on GET.
exports.character_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Character update GET");
};

// Handle character update on POST.
exports.character_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Character update POST");
};
