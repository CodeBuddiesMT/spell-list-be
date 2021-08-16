var account_controller = require("../controllers/accountController");

module.exports = function (app, db) {
  // accounts index
  app.get("/accounts", account_controller.account_list);

  app.get("/accounts/:id", account_controller.account_detail);

  app.get("/accounts/create", account_controller.account_create_get);

  app.post("/accounts/create", account_controller.account_create_post);

  app.get("/accounts/:id/delete", account_controller.account_delete_get);

  app.post("/accounts/:id/delete", account_controller.account_delete_post);

  app.get("/accounts/:id/update", account_controller.account_update_get);

  app.post("/accounts/:id/update", account_controller.account_update_post);
};
