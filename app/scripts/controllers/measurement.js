'use strict';

/**
 * @ngdoc function
 * @name myNewProjectApp.controller:MeasurementCtrl
 * @description
 * # MeasurementCtrl
 * Controller of the myNewProjectApp
 */
angular.module('myNewProjectApp')
  .controller('MeasurementCtrl', function ($scope, $routeParams, $location, $log,
  measurementFactory) {

  $scope.getMeasurement = function () {
      if($routeParams.id) {
        var measurementSelected = measurementFactory.show({id: $routeParams.id});
        $scope.measurement = {selected: measurementSelected};
      } else {
        $scope.measurement = measurementFactory.query();
      }
  }

  $scope.getMeasurement = function (query) {
      $log.info("Query");
      $scope.measurement = measurementFactory.query({query: $scope.queryParam});
  };

  $scope.pageChanged = function () {
    $log.info("Page Changed");
    $scope.measurement = measurementFactory.query({query: $scope.queryParam,
      page: $scope.measurement.currentPage});
  };

  $scope.update = function () {
    measurementFactory.save($scope.measurement.selected);
    $scope.getMeasurement();
    $location.path("/measurement");
  }

  $scope.delete = function (idToDelete) {
    measurementFactory.delete({id: idToDelete});
    $scope.getMeasurement();
    $location.path("/measurement");
  }

  $scope.getMeasurement();
});
