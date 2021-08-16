module.exports = function (app, db) {
  // races index
  app.get("/races", (req, res) => {
    res.send("races index");
  });

  // show race
  app.get("/races/:raceId", (req, res) => {
    res.send("show race");
  });

  // create race
  app.post("/races/:raceId", (req, res) => {
    res.send("create race");
  });

  // create race
  app.delete("/races/:raceId", (req, res) => {
    res.send("delete race");
  });
};
