module.exports = function (app, db) {
  app.post("/spells", (req, res) => {
    res.send("Spells!");
  });
};
