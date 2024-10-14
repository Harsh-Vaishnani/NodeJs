const express = require("express");

const app = express();

const port = 8000;

//iska ka use form data ko easily req.body me access karne ke liye hota hai. Agar iska use nahi karoge, toh tumhe form se aane wale data ko directly access karna mushkil hoga, kyunki wo parse nahi hoga. Both are Same

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  return res.render("index", { records });
});

const records = [];

// For Add Data


app.post("/add", (req, res) => {
    const newRecord = req.body.record;
    if (newRecord) {
      records.push(newRecord);
    }
    res.redirect("/");
  });

// For Update


app.post("/edit/:index", (req, res) => {
  const index = req.params.index;
  const editToBe = records[index];
  res.render("edit", { record: editToBe, index });
});

// For Update


app.post("/update/:index", (req, res) => {
  const index = req.params.index;
  records[index] = req.body.record;
  res.redirect("/");
});

// For Delete

app.get("/delete/:index", (req, res) => {
  const index = req.params.index;
  records.splice(index, 1);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`localhost:${port} started.`);
});
