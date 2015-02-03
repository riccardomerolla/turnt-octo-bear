'use strict';

/**
 * @ngdoc function
 * @name myNewProjectApp.decorator:Servicename
 * @description
 * # Servicename
 * Decorator of the myNewProjectApp
 */
angular.module('myNewProjectApp')
  .config(function ($provide) {
    $provide.decorator('myService', function ($delegate) {
      // decorate the $delegate
      return $delegate;
    });
  });
