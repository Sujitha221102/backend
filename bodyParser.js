const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded());

app.get("/df", (req, res, next) => {
  res.send(
    '<h1>Hello</h1><form action="/first" method="POST"><input type="text" name="name"><input type="submit" value="submit" /></form>'
  );
});
app.post("/first", (req, res, next) => {
  console.log("Form data:", req.body.name);
  res.send("your valid now");
});

app.listen(3000);
