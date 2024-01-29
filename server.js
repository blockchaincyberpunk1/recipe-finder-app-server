const express = require('express');
const cors = require('cors');
const recipeRoutes = require('./api/recipes'); // Import the recipe routes

const app = express();
app.use(cors());

// Set the port number
const PORT = process.env.PORT || 3001;

/**
 * Middleware to handle JSON requests.
 */
app.use(express.json());

/**
 * Root route for the server.
 * @path {GET} /
 * @response {String} - A welcome message.
 */
app.get('/', (req, res) => {
    res.send('Welcome to the Recipe Finder API');
});

/**
 * Recipe routes.
 * Mounts recipe routes at /api/recipes.
 */
app.use('/api/recipes', recipeRoutes);

/**
 * Start the Express server.
 */
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
