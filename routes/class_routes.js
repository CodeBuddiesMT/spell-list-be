var classController = require("../controllers/classController");

module.exports = function (app, db) {
  // classes index
  app.get("/classes", classController.class_list);

  app.get("/classes/:id", classController.class_detail);

  app.get("/classes/create", classController.class_create_get);

  app.post("/classes/create", classController.class_create_post);

  app.get("/classes/:id/delete", classController.class_delete_get);

  app.post("/classes/:id/delete", classController.class_delete_post);

  app.get("/classes/:id/update", classController.class_update_get);

  app.post("/classes/:id/update", classController.class_update_post);
};
