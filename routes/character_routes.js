var character_controller = require("../controllers/characterController");

module.exports = function (app, db) {
  // characters index
  app.get("/characters", character_controller.character_list);

  app.get("/characters/:id", character_controller.character_detail);

  app.get("/characters/create", character_controller.character_create_get);

  app.post("/characters/create", character_controller.character_create_post);

  app.get("/characters/:id/delete", character_controller.character_delete_get);

  app.post("/characters/:id/delete", character_controller.character_delete_post);

  app.get("/characters/:id/update", character_controller.character_update_get);

  app.post("/characters/:id/update", character_controller.character_update_post);
};
