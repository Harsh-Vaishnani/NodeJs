const express = require('express');
const router = express.Router();
const Product = require('../models/Product'); // Import Product model

// Render the 'Add Product' form (GET request)
router.get('/add-product', (req, res) => {
    res.render('addProduct'); // Render the addProduct.ejs form
});

// Handle form submission for adding a new product (POST request)
router.post('/add-product', async (req, res) => {
    try {
        // Get data from the form submission
        const { name, description, price, category } = req.body;

        // Validate the data
        if (!name || !description || !price || !category) {
            return res.status(400).send('All fields are required!');
        }

        // Create a new product instance
        const newProduct = new Product({
            name,
            description,
            price,
            category
        });

        // Save the product to the database
        await newProduct.save();

        // Redirect to the product list after successful addition
        res.redirect('/products'); // Adjust the URL to where you want to go after adding
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error while adding product');
    }
});

module.exports = router;
