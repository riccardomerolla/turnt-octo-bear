'use strict';

/**
 * @ngdoc function
 * @name myNewProjectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myNewProjectApp
 */
angular.module('myNewProjectApp')
  .controller('MainCtrl', function ($scope, $http, myFactory, matrixFactory) {

    $scope.addTest = function () {
      var testItem = $scope.test.list[0];
      testItem.value = new Date();
      myFactory.save(testItem);
      $scope.getListTest();
    }

    $scope.getListTest = function () {
      myFactory.get({partition: "test"}, function(data) {
        $scope.test = data;
      });
    }

    matrixFactory.get({}, function(data) {
      $scope.matrix = data;
    });

    $scope.address = {};
    $scope.refreshAddresses = function(address) {
      var params = {address: address, sensor: false};
      return $http.get(
        'http://maps.googleapis.com/maps/api/geocode/json',
        {params: params}
      ).then(function(response) {
        $scope.addresses = response.data.results
      });
    };

    $scope.getListTest();

  });
