'use strict';

/**
* BooksController Module
*
* Description
*/
angular.module("mLib")

.controller("BooksController",function($scope,$modal,Book){
	

	$scope.books = [];

	$scope.books = Book.query();

	$scope.open = function(book) {
		var modalInstance = $modal.open({
			templateUrl:"scripts/app/books/book.view.html",
			controller:"BookViewController",
			resolve:{
				book:function(){
					return angular.copy(book);
				}
			}
		});

		modalInstance.result.then(function(status){
			if(status) {
				console.log("Modal closed with status", status);
			} else {
				console.log("Modal dismissed");
			}
		});
	};


})


.controller("BookViewController",function($scope,book,Book){
	$scope.book = book;
});