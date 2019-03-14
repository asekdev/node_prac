var chai = require('chai')
  , chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

it('basic test equality', done => {
  expect(2).to.equal(2);
  done(); 
});