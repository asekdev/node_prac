var chai = require('chai')
  , chaiHttp = require('chai-http');

chai.use(chaiHttp);

it('test from second test file', done => {
    const result =  {
      id: 2,
      name: "Birdy",
      type: "Bird"
    }

    chai.request('http://localhost:3000/api')
    .get('/pets/sample')
    .end((err, res) => {

      console.log(res.body)
        if (err) done(err);
        chai.expect(res.status).to.equal(200);
        chai.expect(res.text).to.equal("Hello world");
        done();
    });
});

it('should return a json body', done => {
  const result = {
    id: 2,
    name: "Birdy",
    type: "Bird"
  }

  chai.request('http://localhost:3000/api')
  .get('/pets/mine/Birdy')
  .end((err, res) => {

    console.log("res body = ", res.body)

      if (err) done(err);

      //deep equal compares the object properties
      chai.expect(res.body).to.deep.equal(result);
      done();
  });
});