// const http = require("http");

// const myServer = http.createServer((request, response) => {
//     console.log("My Name is Harsh Patel.");
//     response.end("Hello");
// });

// myServer.listen(8000, () => console.log("Server Started"));

const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
  console.log("New Request Received");
  console.log(req);
  console.log(req.headers);

  const log = `New Request Received : ${Date.now()} : ${req.url} \n`;

  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("Home Page");
        break;

      case "/about":
        res.end("About Page");
        break;

      case "/profile":
        res.end("Profile Page");
        break;

      case "/contact":
        res.end("Contact Page");
        break;

      default:
        res.end("404 Page Not Found");
    }
  });
});

myServer.listen(8000, () => {
  console.log("Server Started");
});
