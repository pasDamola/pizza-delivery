// Dependencies
const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Set up express app
const app = express();

//connect to mongobd
mongoose.connect('mongodb://localhost/users', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

// body parser middleware
app.use(bodyParser.json());

// initialize all the routes 
app.use('/api', routes);

// error handling middleware
app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message });
});

//Start the server
app.listen(process.env.port || 4000, function () {
    console.log("listening at port 4000");
});