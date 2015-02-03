'use strict';

describe('Controller: MeasurementCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewProjectApp'));

  var MeasurementCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MeasurementCtrl = $controller('MeasurementCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
