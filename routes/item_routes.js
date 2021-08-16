module.exports = function (app, db) {
  // items index
  app.get("/items", (req, res) => {
    res.send("items index");
  });

  // show item
  app.get("/items/:itemId", (req, res) => {
    res.send("show item");
  });

  // create item
  app.post("/items/:itemId", (req, res) => {
    res.send("create item");
  });

  // create item
  app.delete("/items/:itemId", (req, res) => {
    res.send("delete item");
  });
};
