'use strict';

/**
 * @ngdoc service
 * @name myNewProjectApp.measurementFactory
 * @description
 * # measurementFactory
 * Factory in the myNewProjectApp.
 */
angular.module('myNewProjectApp')
  .factory('measurementFactory', function (APP_URL, $resource) {
    return $resource(APP_URL + '/resources/measurement/:id', {}, {
        query: { method: 'GET', isArray: false },
        create: { method: 'POST' },
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    });
  });
