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
var race_controller = require("../controllers/raceController");

module.exports = function (app, db) {
  // races index
  app.get("/races", race_controller.race_list);

  app.get("/races/:id", race_controller.race_detail);

  app.get("/races/create", race_controller.race_create_get);

  app.post("/races/create", race_controller.race_create_post);

  app.get("/races/:id/delete", race_controller.race_delete_get);

  app.post("/races/:id/delete", race_controller.race_delete_post);

  app.get("/races/:id/update", race_controller.race_update_get);

  app.post("/races/:id/update", race_controller.race_update_post);
};
