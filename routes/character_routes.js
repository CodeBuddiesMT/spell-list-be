var characterController = require("../controllers/characterController");

module.exports = function (app, db) {
  // characters index
  app.get("/characters", characterController.character_list);

  app.get("/characters/:id", characterController.character_detail);

  app.get("/characters/create", characterController.character_create_get);

  app.post("/characters/create", characterController.character_create_post);

  app.get("/characters/:id/delete", characterController.character_delete_get);

  app.post("/characters/:id/delete", characterController.character_delete_post);

  app.get("/characters/:id/update", characterController.character_update_get);

  app.post("/characters/:id/update", characterController.character_update_post);
};
