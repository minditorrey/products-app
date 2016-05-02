'use strict';

var app = angular.module('productsApp');


app.controller('listController', function($scope, $state, ProductsFactory) {
  var products = ProductsFactory.getAll()
  console.log(products)
  $scope.products = products;
});

app.controller('formController', function($scope, $state, ProductsFactory) {
    var products = ProductsFactory.getAll()
    $scope.products = products;
    $scope.newProduct = {};
    $scope.submit = function() {
      $scope.formName.push(newProduct);
      $scope.formImage.push(newProduct);
      $scope.formDescription.push(newProduct);
      $scope.formCategory.push(newProduct);
      $scope.formPrice.push(newProduct);

      $scope.newProduct.push(products);

      $scope.formName = '';
      $scope.formImage = '';
      $scope.formDescription = '';
      $scope.formCategory = '';
      $scope.formPrice = '';
    
    };
});

app.controller('detailController', function($scope, $state) {
	
});


app.controller('statsController', function($scope, $state) {

});