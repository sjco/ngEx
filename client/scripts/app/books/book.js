'use strict';

/**
* mLib Module
*
* Description
*/
angular.module("mLib")

.config(function($routeProvider) {
	$routeProvider.when("/books",{
		templateUrl:"scripts/app/books/books.html",
		controller:"BooksController"
	});
});