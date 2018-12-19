const express = require('express');

const router = express.Router();

const bodyParser = require('body-parser'); // this for parsing the body 

// parse the incoming request body by doing install 3 party npm install body-parser --save
router.use(bodyParser.urlencoded({extended : false})); // this does the request parsing send through the form. extended false for  

router.use('/add-product',(req, res, next) => {
    res.send('<form action="/product" method = "POST"> <input type = "text" name = "title"></input> <button name = "button1" type= "submit"> ADD Products </button> </form>');
    
});

router.post('/product', (req, res, next) => { // post for post request and get for get requests

    res.redirect('/');  // redirecting using express js function
    console.log(req.body); // you see undefined. As default the request does not parses the request and you must do by your own 
});


module.exports = router;