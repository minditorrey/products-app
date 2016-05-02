var app = angular.module('productsApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('list', {
			url: '/list',
			templateUrl: '/templates/list.html',
			controller: 'listController'
		})
		.state('details', {
			url: '/details',
			templateUrl: '/templates/details.html',
			controller: 'detailsController'
		})
		.state('form', {
			url: '/form',
			templateUrl: '/templates/form.html',
			controller: 'formController'
		})
		.state('stats', {
			url: '/stats',
			templateUrl: '/templates/stats.html',
			controller: 'statsController'
		})

	$urlRouterProvider.otherwise('/');

});