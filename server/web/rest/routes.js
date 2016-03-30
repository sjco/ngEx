var router = require('express').Router();

router.use('/books', require('./book')); 
//router.use('/products', require('./products'));

module.exports = router;