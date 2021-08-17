var itemController = require("../controllers/itemController");

module.exports = function (app, db) {
  // items index
  app.get("/items", itemController.item_list);

  app.get("/items/:id", itemController.item_detail);

  app.get("/items/create", itemController.item_create_get);

  app.post("/items/create", itemController.item_create_post);

  app.get("/items/:id/delete", itemController.item_delete_get);

  app.post("/items/:id/delete", itemController.item_delete_post);

  app.get("/items/:id/update", itemController.item_update_get);

  app.post("/items/:id/update", itemController.item_update_post);
};
