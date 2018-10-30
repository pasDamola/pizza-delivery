// Dependencies
const express = require('express');
const routes = require('./routes/api');

// Set up express app
const app = express();

// initialize all the routes 
app.use('/api', routes);

//Start the server
app.listen(process.env.port || 4000, function () {
    console.log("listening at port 4000");
});