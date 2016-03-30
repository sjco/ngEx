'use strict';


/**
* mLib Module
*
* Description
*/
angular.module("mLib")

.config(function($routeProvider) {
	$routeProvider.when("/",{
		templateUrl:"scripts/app/dashboard/dashboard.html",
		controller:"DashboardController"
	});
});