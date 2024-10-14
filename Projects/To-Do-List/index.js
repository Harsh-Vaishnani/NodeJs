const express = require ("express");

const app = express();

const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.set("view engine" , "ejs")


//For Store the Data 
let records = [];


app.get("/",(req,res)=>{
    return res.render("index" , {records});
})





app.listen(port,()=>{console.log("Server Started ✅ ")});