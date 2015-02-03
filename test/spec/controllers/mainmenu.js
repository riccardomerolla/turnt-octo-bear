'use strict';

describe('Controller: MainmenuctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('myNewProjectApp'));

  var MainmenuctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainmenuctrlCtrl = $controller('MainmenuctrlCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
