const fs = require("fs");

// writeFile no use nvi file creat krva mate thay ch
fs.writeFileSync("./text.txt", "Hello Harsh For Sync.");

//readFile no use data read krva mate thay ch
const res = fs.readFileSync("./text.txt", "utf-8");
console.log(res);

//file ne unlink krva mate
fs.unlinkSync("./text.txt");

//append file ka use data ko add karne ke liye hota hay
const newData = "\nWelcome to Append Sync in Node.js.";
fs.appendFileSync("./text.txt", newData);

//rename
fs.renameSync("./text.txt", "./Harsh.txt");
