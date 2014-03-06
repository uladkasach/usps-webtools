var chai = require('chai');
var USPS = require('../usps.js');
var should = chai.should();

var usps = new USPS({
  server: 'http://production.shippingapis.com/ShippingAPI.dll',
  userId: '##'
});

describe('#cityStateLookup()', function() {
  it('should return the city when passed a zipcode', function(done) {
    usps.cityStateLookup('98031', function(err, address) {
      address.city.should.equal('KENT');
      done();
    });
  });

  it('should return the state when passed a zipcode', function(done) {
    usps.cityStateLookup('98031', function(err, address) {
      address.state.should.equal('WA');
      done()
    });
  });
});
