const express = require('express');
const path = require('path');
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'public')));

// Define the root route for "/"
app.get('/', (req, res) => {
    res.render('index'); // Render index.ejs
});

// Define the "/register" route
app.get('/register', (req, res) => {
    res.render('register'); // Render register.ejs
});

app.get('/categories', (req, res) => {
    res.render('categoryList'); // Render register.ejs
});

app.get('/products', (req, res) => {
    res.render('productList'); // Render register.ejs
});



app.get('/addProduct', (req, res) => {
    res.render('productItem'); // Render register.ejs
});


// Import other routes (like login)
const authRoutes = require('./routes/auth');
app.use('/', authRoutes); // Use the auth routes

// Start the server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
