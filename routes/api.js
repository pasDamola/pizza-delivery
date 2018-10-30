const express = require('express');
const router = express.Router();
const User = require('../models/users');

// Get all the users from the database
router.get('/users', function (req, res, next) {
    User.find({}).then(function (users) {
        res.send(users);
    })
});

// Add new users to the database
router.post('/users', function (req, res, next) {
    User.create(req.body).then(function (user) {
        res.send(user);
    }).catch(next);
});

// Update a user in the database
router.put('/users/:id', function (req, res, next) {
    User.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function () {
        User.findOne({ _id: req.params.id }).then(function (user) {
            res.send(user);
        })
    });
});

// Delete a user from the database
router.delete('/users/:id', function (req, res, next) {
    User.findByIdAndRemove({ _id: req.params.id }).then(function (user) {
        res.send(user);
    });
});

module.exports = router;