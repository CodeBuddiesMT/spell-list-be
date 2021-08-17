var raceController = require("../controllers/raceController");

module.exports = function (app, db) {
  // races index
  app.get("/races", raceController.race_list);

  app.get("/races/:id", raceController.race_detail);

  app.get("/races/create", raceController.race_create_get);

  app.post("/races/create", raceController.race_create_post);

  app.get("/races/:id/delete", raceController.race_delete_get);

  app.post("/races/:id/delete", raceController.race_delete_post);

  app.get("/races/:id/update", raceController.race_update_get);

  app.post("/races/:id/update", raceController.race_update_post);
};
