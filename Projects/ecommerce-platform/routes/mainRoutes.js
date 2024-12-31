const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

app.get('/login', (req, res) => {
    res.render('login');
});



module.exports = router;
