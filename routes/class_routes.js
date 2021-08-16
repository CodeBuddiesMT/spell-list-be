module.exports = function (app, db) {
  // classes index
  app.get("/classes", (req, res) => {
    res.send("classes index");
  });

  // show class
  app.get("/classes/:classId", (req, res) => {
    res.send("show class");
  });

  // create class
  app.post("/classes/:classId", (req, res) => {
    res.send("create class");
  });

  // create class
  app.delete("/classes/:classId", (req, res) => {
    res.send("delete class");
  });
};
