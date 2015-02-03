'use strict';

/**
 * @ngdoc function
 * @name myNewProjectApp.controller:MyrouteCtrl
 * @description
 * # MyrouteCtrl
 * Controller of the myNewProjectApp
 */
angular.module('myNewProjectApp')
  .controller('MyrouteCtrl', function ($scope, $routeParams, $log, myFactory) {

    var id = $routeParams;

    myFactory.get({partition: id.partitionKey, code: id.code}, function(data) {
      $log.info("data:" + angular.toJson(data));
      $scope.item = data;
    });

    $scope.update = function () {
      myFactory.save($scope.item);
    }
  });
