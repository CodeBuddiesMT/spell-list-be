module.exports = function (app, db) {
  // accounts index
  app.get("/accounts", (req, res) => {
    res.send("accounts index");
  });

  // show account
  app.get("/accounts/:accountId", (req, res) => {
    res.send("show account");
  });

  // create account
  app.post("/accounts/:accountId", (req, res) => {
    res.send("create account");
  });

  // create account
  app.delete("/accounts/:accountId", (req, res) => {
    res.send("delete account");
  });
};
