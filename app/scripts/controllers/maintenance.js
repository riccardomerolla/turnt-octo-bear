'use strict';

/**
 * @ngdoc function
 * @name myNewProjectApp.controller:MaintenanceCtrl
 * @description
 * # MaintenanceCtrl
 * Controller of the myNewProjectApp
 */
angular.module('myNewProjectApp')
  .controller('MaintenanceCtrl', function ($scope, $routeParams, $location, $log,
maintenanceFactory) {

  $scope.getMaintenance = function () {
      if($routeParams.id) {
        var maintenanceSelected = maintenanceFactory.show({id: $routeParams.id});
        $scope.maintenance = {selected: maintenanceSelected};
      } else {
        $scope.maintenance = maintenanceFactory.query();
      }
  };

  $scope.getMaintenance = function (query) {
      $log.info("Query");
      $scope.maintenance = maintenanceFactory.query({query: $scope.queryParam});
  };

  $scope.pageChanged = function () {
    $log.info("Page Changed");
    $scope.maintenance = maintenanceFactory.query({query: $scope.queryParam,
      page: $scope.maintenance.currentPage});
  };

  $scope.update = function () {
    maintenanceFactory.save($scope.maintenance.selected);
    $scope.getMaintenance();
    $location.path("/maintenance");
  };

  $scope.delete = function (idToDelete) {
    maintenanceFactory.delete({id: idToDelete});
    $scope.getMaintenance();
    $location.path("/maintenance");
  };

  $scope.getMaintenance();
});
