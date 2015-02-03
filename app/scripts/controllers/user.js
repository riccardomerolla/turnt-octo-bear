'use strict';

/**
 * @ngdoc function
 * @name myNewProjectApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the myNewProjectApp
 */
angular.module('myNewProjectApp')
  .controller('UserCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
