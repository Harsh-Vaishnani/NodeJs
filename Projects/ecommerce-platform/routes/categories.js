// routes/categories.js
const express = require('express');
const router = express.Router();

// Assuming you have a Category model
const Category = require('../models/Category');

// Get all categories
router.get('/categories', async (req, res) => {
    try {
        // Fetch categories from the database
        const categories = await Category.find();
        res.render('categoryList', { categories });  // Render the view and pass the categories
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
