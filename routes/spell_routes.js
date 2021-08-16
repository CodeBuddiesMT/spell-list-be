var spell_controller = require("../controllers/spellController");

module.exports = function (app, db) {
  // spells index
  app.get("/spells", spell_controller.spell_list);

  app.get("/spells/:id", spell_controller.spell_detail);

  app.get("/spells/create", spell_controller.spell_create_get);

  app.post("/spells/create", spell_controller.spell_create_post);

  app.get("/spells/:id/delete", spell_controller.spell_delete_get);

  app.post("/spells/:id/delete", spell_controller.spell_delete_post);

  app.get("/spells/:id/update", spell_controller.spell_update_get);

  app.post("/spells/:id/update", spell_controller.spell_update_post);
};
