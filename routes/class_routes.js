var class_controller = require("../controllers/classController");

module.exports = function (app, db) {
  // classes index
  app.get("/classes", class_controller.class_list);

  app.get("/classes/:id", class_controller.class_detail);

  app.get("/classes/create", class_controller.class_create_get);

  app.post("/classes/create", class_controller.class_create_post);

  app.get("/classes/:id/delete", class_controller.class_delete_get);

  app.post("/classes/:id/delete", class_controller.class_delete_post);

  app.get("/classes/:id/update", class_controller.class_update_get);

  app.post("/classes/:id/update", class_controller.class_update_post);
};
