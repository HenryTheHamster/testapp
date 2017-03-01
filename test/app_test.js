var chai = require('chai');
var expect = chai.expect;
var App = require('../lib/app').App;

describe('the app', function() {
  it('should do app things', function() {
    app = new App();
    expect(app.message()).to.equal('Hello, World!');
  });
});