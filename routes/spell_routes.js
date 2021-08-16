module.exports = function (app, db) {
  // spells index
  app.get("/spells", (req, res) => {
    res.send("spells index");
  });

  // show spell
  app.get("/spells/:spellId", (req, res) => {
    res.send("show spell");
  });

  // create spell
  app.post("/spells/:spellId", (req, res) => {
    res.send("create spell");
  });

  // create spell
  app.delete("/spells/:spellId", (req, res) => {
    res.send("delete spell");
  });
};
