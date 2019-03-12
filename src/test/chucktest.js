var chai = require('chai')
  , chaiHttp = require('chai-http');
var expect = chai.expect;
const constants = require("../util/consants");

chai.use(chaiHttp);

it('test from second test file', done => {
    chai.request(constants.API_PATH)
    .get("/jokes/randomzz")
    .end((err, res) => {
      console.log(res)
      chai.expect(res.status).to.equal(404);
      done();
    });
});