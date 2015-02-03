'use strict';

/**
 * @ngdoc service
 * @name myNewProjectApp.matrixFactory
 * @description
 * # matrixFactory
 * Factory in the myNewProjectApp.
 */
angular.module('myNewProjectApp')
  .factory('matrixFactory', function ($resource) {
  return $resource("http://localhost:8080/six/rest/matrix/:id");
});
