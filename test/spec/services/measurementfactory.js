'use strict';

describe('Service: measurementFactory', function () {

  // load the service's module
  beforeEach(module('myNewProjectApp'));

  // instantiate service
  var measurementFactory;
  beforeEach(inject(function (_measurementFactory_) {
    measurementFactory = _measurementFactory_;
  }));

  it('should do something', function () {
    expect(!!measurementFactory).toBe(true);
  });

});
