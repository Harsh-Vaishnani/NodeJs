const express = require("express");

const app = express();

const port = 8000;

app.set("view engine", "ejs")

app.get("/",(req,res)=>{
    return res.render("index")
    // res.end("Welcome")
})

app.listen(port,()=>{console.log("Done")})