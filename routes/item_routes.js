var item_controller = require("../controllers/itemController");

module.exports = function (app, db) {
  // items index
  app.get("/items", item_controller.item_list);

  app.get("/items/:id", item_controller.item_detail);

  app.get("/items/create", item_controller.item_create_get);

  app.post("/items/create", item_controller.item_create_post);

  app.get("/items/:id/delete", item_controller.item_delete_get);

  app.post("/items/:id/delete", item_controller.item_delete_post);

  app.get("/items/:id/update", item_controller.item_update_get);

  app.post("/items/:id/update", item_controller.item_update_post);
};
