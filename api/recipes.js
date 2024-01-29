const express = require('express');
const axios = require('axios');
const router = express.Router();

// Base URL for the MealDB API
const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1';

/**
 * GET route to search for meals by name.
 * 
 * @path {GET} /api/recipes/search
 * @query {String} s - Name of the meal to search for.
 * @response {Object} - JSON response with meal data or error message.
 */
router.get('/search', async (req, res) => {
    try {
        const searchQuery = req.query.s;
        const response = await axios.get(`${API_BASE_URL}/search.php?s=${searchQuery}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * GET route to list all meals by the first letter.
 * 
 * @path {GET} /api/recipes/first-letter
 * @query {String} f - First letter to filter meals by.
 * @response {Object} - JSON response with meals data or error message.
 */
router.get('/first-letter', async (req, res) => {
    try {
        const firstLetter = req.query.f;
        const response = await axios.get(`${API_BASE_URL}/search.php?f=${firstLetter}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * GET route to lookup a single random meal.
 * 
 * @path {GET} /api/recipes/random
 * @response {Object} - JSON response with a random meal data or error message.
 */
router.get('/random', async (req, res) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/random.php`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * GET route to filter meals by main ingredient.
 * 
 * @path {GET} /api/recipes/filter
 * @query {String} i - Main ingredient to filter meals by.
 * @response {Object} - JSON response with filtered meal data or error message.
 */
router.get('/filter', async (req, res) => {
    try {
        const ingredient = req.query.i;
        const response = await axios.get(`${API_BASE_URL}/filter.php?i=${ingredient}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
