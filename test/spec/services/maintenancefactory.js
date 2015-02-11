'use strict';

describe('Service: maintenanceFactory', function () {

  // load the service's module
  beforeEach(module('myNewProjectApp'));

  // instantiate service
  var maintenanceFactory;
  beforeEach(inject(function (_maintenanceFactory_) {
    maintenanceFactory = _maintenanceFactory_;
  }));

  it('should do something', function () {
    expect(!!maintenanceFactory).toBe(true);
  });

});
