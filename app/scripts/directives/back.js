'use strict';

/**
 * @ngdoc directive
 * @name myNewProjectApp.directive:back
 * @description
 * # back
 */
angular.module('myNewProjectApp')
  .directive('back', function($window) {
        return {
            restrict: 'A',
            link: function (scope, elem, attrs) {
                elem.bind('click', function () {
                    $window.history.back();
                });
            }
        };
    });
