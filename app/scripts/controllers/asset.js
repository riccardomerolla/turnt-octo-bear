'use strict';

/**
 * @ngdoc function
 * @name myNewProjectApp.controller:AssetCtrl
 * @description
 * # AssetCtrl
 * Controller of the myNewProjectApp
 */
angular.module('myNewProjectApp')
  .controller('AssetCtrl', function ($scope, $routeParams, $location, $log,
    assetFactory) {

    $scope.getAssetById = function () {
      $log.info("ByID");
      var assetSelected = assetFactory.show({id: $routeParams.id});
      $scope.asset = {selected: assetSelected};
    }

    $scope.getAsset = function (query) {
      $log.info("Query");
      $scope.asset = assetFactory.query({query: $scope.queryParam});
    };

    $scope.pageChanged = function () {
      $log.info("Page Changed");
      $scope.asset = assetFactory.query({query: $scope.queryParam, page: $scope.asset.currentPage});
    };

    $scope.update = function () {
      assetFactory.save($scope.asset.selected);
      $scope.getAsset();
      $location.path("/asset");
    }

    $scope.delete = function (idToDelete) {
      assetFactory.delete({id: idToDelete});
      $scope.getAsset();
      $location.path("/asset");
    }

    if($routeParams.id) {
      $scope.getAssetById();
    } else {
      $scope.getAsset();
    }

  });
