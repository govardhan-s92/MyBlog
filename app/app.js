"use strict";
var app = angular.module('schoolApp',['ngRoute'])
		.run(function ($rootScope,$timeout) {
	        $rootScope.$on('$viewContentLoaded', ()=> {
	          $timeout(() => {
	            componentHandler.upgradeAllRegistered();
	          })
	        })
    	})
		.config(function($routeProvider) {
	        $routeProvider

	            // route for the home page
	            .when('/', {
	                templateUrl : './app/partials/home.html',
	                controller  : 'homeCtrl'
	            })

	             // route for the contact page
	            .when('/contact', {
	                templateUrl : './app/partials/contact.html',
	                controller  : 'contactCtrl'
	            })

	             // route for the add student page
	            .when('/addStudent', {
	                templateUrl : './app/partials/addStudent.html',
	                controller  : 'addStudentCtrl'
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
            $scope.toggleSidenav = function(menuId) {
        	$mdSidenav(menuId).toggle();
    		}
        }]
    }
});
app.directive('foot', function () {
    return {
        restrict: 'A',// head will used as an attribute for header
        replace: true,
        templateUrl: "./app/partials/footer.html",
        controller: ['$scope', '$filter', function ($scope, $filter) {
             
        }]
    }
});