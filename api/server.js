// Database
MongoClient = require("mongodb").MongoClient;
const mongoose = require("mongoose");

// Routing and API
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const bodyParser = require("body-parser");

// Server Initialization
const server = express();

// Server uses
server.use(cors());
server.use(helmet());
server.use(express.json());
// Connect to local DB
mongoose.connect("mongodb://localhost:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Initialize DB
const db = mongoose.connection;

// Error or success DB.
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected");
});

server.get("/", (req, res) => {
  res.send("Spell list API");
});

// get api routes
require("../routes")(server, db);

// get models
require("../models")();

// // test of models
// Spell.create({
//   name: "testSpellName",
//   description: "testSpellDescription",
//   spell_level: 1,
// });

// export server
// spells = Spell.find().exec();

// console.log(spells);

module.exports = server;
