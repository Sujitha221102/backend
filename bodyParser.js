const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Router = require("./routes/admin");
const Shop = require("./routes/shop");

app.use(bodyParser.urlencoded());

app.use("/admin", Router);
app.use(Shop);
app.use((req, res, next) => {
  res.status(404).send("404 not found");
});

app.listen(3000);
