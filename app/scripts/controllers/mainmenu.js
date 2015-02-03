'use strict';

/**
 * @ngdoc function
 * @name myNewProjectApp.controller:mainMenuCtrl
 * @description
 * # mainMenuCtrl
 * Controller of the myNewProjectApp
 */
angular.module('myNewProjectApp')
  .controller('mainMenuCtrl', function ($scope, $location) {
    $scope.menuClass = function(page) {
      var current = $location.path().substring(1);
      return page === current ? "active" : "";
    };
  });
