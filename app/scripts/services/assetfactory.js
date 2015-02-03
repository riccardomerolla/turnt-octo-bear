'use strict';

/**
 * @ngdoc service
 * @name myNewProjectApp.assetFactory
 * @description
 * # assetFactory
 * Factory in the myNewProjectApp.
 */
angular.module('myNewProjectApp')
  .factory('assetFactory', function ($resource) {
    return $resource("http://localhost:8080/headlands/resources/asset/:id", {}, {
        query: { method: 'GET', isArray: false },
        create: { method: 'POST' },
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    })
});
