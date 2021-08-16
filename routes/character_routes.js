module.exports = function (app, db) {
  // characters index
  app.get("/characters", (req, res) => {
    res.send("characters index");
  });

  // show character
  app.get("/characters/:characterId", (req, res) => {
    res.send("show character");
  });

  // create character
  app.post("/characters/:characterId", (req, res) => {
    res.send("create character");
  });

  // create character
  app.delete("/characters/:characterId", (req, res) => {
    res.send("delete character");
  });
};
