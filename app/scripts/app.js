'use strict';

/**
 * @ngdoc overview
 * @name myNewProjectApp
 * @description
 * # myNewProjectApp
 *
 * Main module of the application.
 */
angular
  .module('myNewProjectApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.select'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/asset', {
        templateUrl: 'views/list_asset.html',
        controller: 'AssetCtrl'
      })
      .when('/asset/:id', {
        templateUrl: 'views/detail_asset.html',
        controller: 'AssetCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/my/route/:partitionKey/:code', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl'
      })
      .when('/measurement', {
        templateUrl: 'views/measurement.html',
        controller: 'MeasurementCtrl'
      })
      .when('/maintenance', {
        templateUrl: 'views/maintenance.html',
        controller: 'MaintenanceCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
