const express = require('express');
const router = express.Router();

// Get all the users from the database
router.get('/users', function (req, res) {
    res.send('Hello World');
});

// Add new users to the database
router.post('/users', function (req, res) {
    res.send('Hello World');gti
});

// Update a user in the database
router.put('/users/:id', function (req, res) {
    res.send('Hello World');
});

// Delete a user from the database
router.delete('/users/:id', function (req, res) {
    res.send('Hello World');
});

module.exports = router;