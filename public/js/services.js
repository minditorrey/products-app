'use strict';

var app = angular.module('productsApp');


app.service('Stories', function() {


});

app.factory('ProductsFactory', function(){
	var products = [
	{'id': '1',
	'name': 'unicorns',
	'image': 'https://lh6.ggpht.com/gOpnshwBdtkWJ4Rdu9XEAGr177ILOdW6n_tgGVARVkAJtGKNvMAawm4UjpqvWwIovQ=w170',
	'price': '1000',
	'description': 'Makes all of your dreams come true.',
	'category': 'dreams'
	}, {'id': '2',
	'name': 'dog pile',
	'image': 'https://qph.is.quoracdn.net/main-qimg-3b52a0be114724e2a2d26fb6c1cddd61?convert_to_webp=true',
	'price': '2000',
	'description': 'Makes you feel warm and fuzzy.',
	'category': 'dreams'
	}]

	var productsObject = {
		getAll: function() {
			return products;
		}
	}
	return productsObject;



});