const express = require("express");
const app = express();
const port = 8000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  return res.render("index");
});
app.get("/about", (req, res) => {
  return res.render("about");
});
app.use((req, res) => {
  return res.status(404).render("404");
});
app.listen(port, () => {
  console.log(`localhost:${port} is Started.`);
});
