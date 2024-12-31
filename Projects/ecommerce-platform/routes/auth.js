const express = require('express');
const router = express.Router();

// Render the login page
router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;
