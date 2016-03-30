'use strict';

var express = require("express");
var app = express();

var routes = require("./server/web/rest/routes");

app.use(express.static(__dirname+'/client'));

app.use("/api",routes);

app.get("*",function(req,res){
	res.sendFile(__dirname+"/client/index.html");
}).listen(3000);

console.log("Server started at 3000!!!");