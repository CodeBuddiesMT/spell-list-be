var Race = require("../models/race.model");

// Display list of all Races.
exports.race_list = function (req, res) {
  res.send("NOT IMPLEMENTED: Race list");
};

// Display detail page for a specific Race.
exports.race_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Race detail: " + req.params.id);
};

// Display Race create form on GET.
exports.race_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Race create GET");
};

// Handle Race create on POST.
exports.race_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Race create POST");
};

// Display Race delete form on GET.
exports.race_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Race delete GET");
};

// Handle Race delete on POST.
exports.race_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Race delete POST");
};

// Display Race update form on GET.
exports.race_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Race update GET");
};

// Handle race update on POST.
exports.race_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Race update POST");
};
