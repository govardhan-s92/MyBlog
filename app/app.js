var app = angular.module('app',['ngRoute','ngMaterial'])
		.config(function($routeProvider) {
	        $routeProvider

	            // route for the home page
	            .when('/', {
	                templateUrl : './app/partials/home.html',
	                controller  : 'homeController'
	            })

	             // route for the contact page
	            .when('/contact', {
	                templateUrl : './app/partials/contact.html',
	                controller  : 'contactController'
	            })

	            //otherwise
				.otherwise({
			        redirectTo: '/'
			      });
		});

//As header and footer are common for all pages
app.directive('head', function () {
    return {
        restrict: 'A',// head will used as an attribute for header
        replace: true,
        templateUrl: "./app/partials/header.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
            // Your behaviour goes here :)
        }]
    }
});
app.directive('foot', function () {
    return {
        restrict: 'A',// foot will used as an attribute for footer
        replace: true,
        templateUrl: "./app/partials/footer.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
            // Your behaviour goes here :)
        }]
    }
});