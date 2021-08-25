var Spell = require("../models/spell.model");

// Display list of all Spells.
exports.spell_list = function (req, res, next) {
  // res.send("NOT IMPLEMENTED: Account list");
  Spell.find({}, "id name description spell_slot").exec(function (err, list_spells) {
    if (err) {
      console.log(err);
      return next(err);
    }

    //Successful, so render
    // console.log("success!", list_spells);
    res.status(200).send(list_spells);
  });
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

// Handle spell update on POST.
exports.spell_populate_get = function (req, res) {
  res.send("HIT THIS URL IF YOU WANT TO FETCH SPELLS FROM EXISTING API, AND POPULATE DB WITH THEM. ");
};
