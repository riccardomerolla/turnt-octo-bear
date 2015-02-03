'use strict';

/**
 * @ngdoc service
 * @name myNewProjectApp.measurementFactory
 * @description
 * # measurementFactory
 * Factory in the myNewProjectApp.
 */
angular.module('myNewProjectApp')
  .factory('measurementFactory', function ($resource) {
    return $resource("http://localhost:8080/headlands/resources/measurement/:id", {}, {
        query: { method: 'GET', isArray: false },
        create: { method: 'POST' },
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
  });
