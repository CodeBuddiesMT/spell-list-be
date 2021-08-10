const spellsRoutes = require("./spells_routes");


module.exports = function(app, db) {  spellsRoutes(app, db);  // Other route groups could go here, in the future};