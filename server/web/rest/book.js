// routes/products.js

// create another router for getting 'product' resources
var router = require('express').Router();

router.use(function(req, res, next) {
  console.log("/",req.method);
  next();
});

// individual products routes
router.get('/', function(req, res, next) {  
	res.json([{id:1,name:'iPhone 5s',price:280},{id:2,name:'Redme Note 3',price:210}]);  
	//res.json(userService.dummy());
});

router.get('/:id', function(req, res, next) {
	console.log("Get 1");
	//res.json([{id:1,name:'iPhone 5s',price:280},{id:2,name:'Redme Note 3',price:210}]);  
	//res.json(userService.dummy());
});

router.post('/', function(req, res, next) {
	console.log("update");  
	//res.json([{id:1,name:'iPhone 5s',price:280},{id:2,name:'Redme Note 3',price:210}]);  
	//res.json(userService.dummy());
});

router.put('/', function(req, res, next) {  
	console.log("put");
	//res.json([{id:1,name:'iPhone 5s',price:280},{id:2,name:'Redme Note 3',price:210}]);  
	//res.json(userService.dummy());
});

router.delete('/:id', function(req, res, next) {  
	console.log("Delete");
	//res.json([{id:1,name:'iPhone 5s',price:280},{id:2,name:'Redme Note 3',price:210}]);  
	//res.json(userService.dummy());
});

module.exports = router;  