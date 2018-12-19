// handling different routes using express

const http = require('http');

const express = require('express');

const app = express();

app.use( '/', (req, res, next) => {
    console.log('This always works')
    next(); // for sending reply and it can send content type of type any.

});

app.use( '/products', (req, res, next) => {
    console.log('In the next middleware')
    res.send('Hello products'); // for sending reply and it can send content type of type any.

});

app.use( '/', (req, res, next) => {
    console.log('In the next middleware')
    res.send('Hello from express'); // for sending reply and it can send content type of type any.

});

app.listen(3000);