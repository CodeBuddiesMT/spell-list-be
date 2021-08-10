require("./app/routes")(app, {});
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const server = express();

server.use(cors());
server.use(helmet());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Spell list API");
});

module.exports = server;
