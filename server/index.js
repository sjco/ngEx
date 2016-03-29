'use strict';

var express = require("express");

var app = express();



app.use("/",function(req,res){
	res.header("Content-Type","text/html");
	res.sendFile(__dirname+"/../client/index.html");
}).listen(3000);

console.log("Server started at 3000!!!");





