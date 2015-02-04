'use strict';

/**
 * @ngdoc service
 * @name myNewProjectApp.myFactory
 * @description
 * # myFactory
 * Factory in the myNewProjectApp.
 */
angular.module('myNewProjectApp')
  .factory('myFactory', function ($resource) {
    return $resource("http://docker.ict-group.it:28080/six/rest/partition-map/:partition/:code");
    // Service logic
    // ...

    //var meaningOfLife = 42;

    // Public API here
    //return {
    //  someMethod: function () {
    //    return meaningOfLife;
    //  }
    //};
  });
