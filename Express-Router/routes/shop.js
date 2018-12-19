const express = require('express');

const router = express.Router();

router.use('/',(req,res,next) => {
    res.send('<h1> welcome to express </h1>');
});

module.exports = router;