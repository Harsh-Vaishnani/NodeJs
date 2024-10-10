// const express = require("express");

// const app = express();

// const port = 8000;

// app.set("view engine" ,"ejs");

// app.get("/",(req,res)=>{
//     return res.render("index")
// });

// app.listen(port,()=>{console.log("WoW . . .")});





const express = require("express");

const app = express();
const PORT = 7320;


app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");


let records = [];


app.get("/", (req, res) => {
  return res.render("index", { records });
});


app.post("/add", (req, res)=>{
    const newRecord = req.body.record
    records.push(newRecord)    
    res.redirect("/")
})


app.listen(PORT, () => {
  console.log("Server Started");
});
