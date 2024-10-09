const express = require("express");

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  res.send("Hello Harsh Vaishnani");
});

app.get("/about", (req, res) => {
  res.send(`Namaste ${req.query.name}. Your age is ${req.query.age}`);
});

app.listen(port, () => {
  console.log("Run . . .");
});


