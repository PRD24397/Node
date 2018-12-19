const http = require('http');

const express = require('express');

const app = express();
// express function to use the express app

// before cerating a server the code for express middleware is kept. See below for use() function offered by express
// use allows us to add a new middleware function. Use() is run for each incoming requests
app.use( (req, res, next) => {
    console.log('In the middleware')
    next(); // use next if you want to allow the request to go to next function 

});

// this whole use function is a middleware and the next() funtion is used to navigate to the succesive next middleware

app.use( (req, res, next) => {
    console.log('In the next middleware')
    res.send('Hello from express'); // for sending reply and it can send content type of type any.

});

const server = http.createServer(app);

app.listen(3000); // express code for starting the server at specified port