const express = require("express");

const route = express.Router();
const path = require("path");
const rootDir = require("../utils/path");

route.get("/df", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "add_product.html"));
});
route.post("/first", (req, res, next) => {
  console.log("Form data:", req.body);
  res.sendFile(path.join(rootDir, "views", "add_product.html"));
});

module.exports = route;
