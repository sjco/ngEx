'use strict';

/**
* mLib Module
*
* Description
*/
angular.module("mLib")

.factory("Book",function($http){

	var index = 0;
	var books = [
  					{id:++index,title:"Mooculus", author:"Martin Fowler", price:20, currency:"USD"},
  					{id:++index,title:"Up and Running with Angular", author:"Ray Villalabos", price:24, currency:"USD"}
  				];
  	var api = {};

  	var add = function(book) {
  		book.id = ++index;
  		books.push(book);
  	};
  	var update = function(book) {
  		var existingBook = books.filter(function(b){ return b.id == book.id;})[0];
  		if(existingBook) {
  			existingBook.title = book.title;
  			existingBook.author = book.author;
  			existingBook.price = book.price;
  			existingBook.currency = book.currency;
  		}
  	};

  api.query = function() {
  	return books;
  };

  api.save = function(book) {
  	if(book.id) {
  		add(book);
  	} else {
  		update(book);
  	}
  };

  api.get = function(id) {
  	return books.filter(function(book){ return book.id == id;})[0];
  };

  api.delete = function(id) {
  	books = books.filter(function(book){ return book.id!=id});
  };

  return api;

});