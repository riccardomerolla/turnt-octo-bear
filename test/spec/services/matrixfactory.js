'use strict';

describe('Service: matrixFactory', function () {

  // load the service's module
  beforeEach(module('myNewProjectApp'));

  // instantiate service
  var matrixFactory;
  beforeEach(inject(function (_matrixFactory_) {
    matrixFactory = _matrixFactory_;
  }));

  it('should do something', function () {
    expect(!!matrixFactory).toBe(true);
  });

});
