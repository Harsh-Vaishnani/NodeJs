const express = require("express");
const router = express.Router();

// Route for the home page
router.get("/", (req, res) => {
  res.render("index"); // Ensure 'index.ejs' exists in the 'views' folder
});

module.exports = router;
