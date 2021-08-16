const accountRoutes = require("./account_routes");
const characterRoutes = require("./character_routes");
const classRoutes = require("./class_routes");
const itemRoutes = require("./item_routes");
const raceRoutes = require("./race_routes");
const spellRoutes = require("./spell_routes");

module.exports = function (app, db) {
  accountRoutes(app, db);
  characterRoutes(app, db);
  classRoutes(app.db);
  itemRoutes(app, db);
  raceRoutes(app, db);
  spellRoutes(app, db);
};
