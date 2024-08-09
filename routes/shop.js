const express = require("express");
const route = express.Router();
const path = require("path");

const rootDir = require("../utils/path");

route.get("/shop", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});
module.exports = route;
