'use strict';

/**
 * @ngdoc service
 * @name myNewProjectApp.myService
 * @description
 * # myService
 * Service in the myNewProjectApp.
 */
angular.module('myNewProjectApp')
  .service('myService', function ($resource) {
    this.test = function () {
      return $resource("http://localhost:8080/six/rest/partition-map/:partition")
    };
  });
