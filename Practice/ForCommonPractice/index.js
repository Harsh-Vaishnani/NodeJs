const express = require("express");

const app = express();

const port = 5400;

app.get("/",(req,res)=>{
    res.send("Welcome to Home Page . . . ");
})

app.get("/about",(req,res)=>{
    res.send(`Welcome to About Page ${req.query.name} . My Age is  ${req.query.age} . `);
})

app.listen(port,()=>{console.log("✅")})