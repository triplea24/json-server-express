"use strict";
const express = require("express");
const serverless = require("serverless-http");
const jsonServer = require("json-server");
const bodyParser = require("body-parser");

const app = express();
// ...

app.use(bodyParser);
// You may want to mount JSON Server on a specific end-point, for example /api
// Optiona,l except if you want to have JSON Server defaults
// server.use('/api', jsonServer.defaults());
app.use("/api", jsonServer.router("db.json"));

module.exports = app;
module.exports.handler = serverless(app);
