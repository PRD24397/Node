// for using for get and post requests expilicitly and not all the http requests by replacing use by get and post

// parsing incoming requests


const express = require('express');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const app = express();

app.use(adminRouter);
app.use(shopRouter);


app.listen(3000);