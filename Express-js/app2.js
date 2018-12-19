// parsing incoming requests


const express = require('express');

const app = express();
const bodyParser = require('body-parser'); // this for parsing the body 
// parse the incoming request body by doing install 3 party npm install body-parser --save
app.use(bodyParser.urlencoded({extended : false})); // this does the request parsing send through the form. extended false for  

app.use('/add-product',(req, res, next) => {
    res.send('<form action="/product" method = "POST"> <input type = "text" name = "title"></input> <button name = "button1" type= "submit"> ADD Products </button> </form>');
    
});

app.use('/product', (req, res, next) => {

    res.redirect('/');  // redirecting using express js function
    console.log(req.body); // you see undefined. As default the request does not parses the request and you must do by your own 
});


app.use('/',(req,res,next) => {
    res.send('<h1> welcome to express </h1>');
});


app.listen(3000);