'use strict';

/**
 * @ngdoc service
 * @name myNewProjectApp.maintenanceFactory
 * @description
 * # maintenanceFactory
 * Factory in the myNewProjectApp.
 */
angular.module('myNewProjectApp')
  .factory('maintenanceFactory', function (APP_URL, $resource) {
    return $resource(APP_URL + '/resources/maintenance/:id', {}, {
        query: { method: 'GET', isArray: false },
        create: { method: 'POST' },
        show: { method: 'GET' },
        update: { method: 'PUT', params: {id: '@id'} },
        delete: { method: 'DELETE', params: {id: '@id'} }
    });
});
