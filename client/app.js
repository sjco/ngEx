'use strict';

/**
* mLib Module
*
* Description
*/
angular.module("mLib",['ngRoute','ui.bootstrap'])

.config(function($routeProvider) {
	$routeProvider.otherwise("/");
});