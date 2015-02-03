'use strict';

describe('Service: assetFactory', function () {

  // load the service's module
  beforeEach(module('myNewProjectApp'));

  // instantiate service
  var assetFactory;
  beforeEach(inject(function (_assetFactory_) {
    assetFactory = _assetFactory_;
  }));

  it('should do something', function () {
    expect(!!assetFactory).toBe(true);
  });

});
