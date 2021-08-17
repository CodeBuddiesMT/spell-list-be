var accountController = require("../controllers/accountController");

module.exports = function (app, db) {
  // accounts index
  app.get("/accounts", accountController.account_list);

  app.get("/accounts/:id", accountController.account_detail);

  app.get("/accounts/create", accountController.account_create_get);

  app.post("/accounts/create", accountController.account_create_post);

  app.get("/accounts/:id/delete", accountController.account_delete_get);

  app.post("/accounts/:id/delete", accountController.account_delete_post);

  app.get("/accounts/:id/update", accountController.account_update_get);

  app.post("/accounts/:id/update", accountController.account_update_post);
};
