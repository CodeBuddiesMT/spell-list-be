var spellController = require("../controllers/spellController");

module.exports = function (app, db) {
  // spells index
  app.get("/spells", spellController.spell_list);

  app.get("/spells/:id", spellController.spell_detail);

  app.get("/spells/create", spellController.spell_create_get);

  app.post("/spells/create", spellController.spell_create_post);

  app.get("/spells/:id/delete", spellController.spell_delete_get);

  app.post("/spells/:id/delete", spellController.spell_delete_post);

  app.get("/spells/:id/update", spellController.spell_update_get);

  app.post("/spells/:id/update", spellController.spell_update_post);
};
