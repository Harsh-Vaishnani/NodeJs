// routes/products.js
const express = require('express');
const router = express.Router();

// Assuming you have a model for Product (adjust if needed)
const Product = require('../models/Product');

// Get all products
router.get('/products', async (req, res) => {
    try {
        // Fetch products from database (adjust model name if needed)
        const products = await Product.find(); 
        res.render('productList', { products }); // Pass products to the view
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
