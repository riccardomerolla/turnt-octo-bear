'use strict';

/**
 * @ngdoc service
 * @name myNewProjectApp.assetFactory
 * @description
 * # assetFactory
 * Factory in the myNewProjectApp.
 */
angular.module('myNewProjectApp')
  .factory('assetFactory', function (APP_URL, $resource) {
    return $resource(APP_URL + '/resources/asset/:id', {}, {
        query: { method: 'GET', isArray: false },
        create: { method: 'POST' },
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    });
});
