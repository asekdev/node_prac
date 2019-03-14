var chai = require('chai')
  , chaiHttp = require('chai-http');
var expect = chai.expect;

chai.use(chaiHttp);

it('basic test equality var', done => {
  let x = 10;
  let y = 10;
  let result = x + y;

  expect(result).to.equal(20);
  done(); 
});

// it('should return a json body', done => {
//   const result = {
//     id: 2,
//     name: "Birdy",
//     type: "Bird"
//   }

//   chai.request('http://localhost:3000/api')
//   .get('/pets/mine/Birdy')
//   .end((err, res) => {

//     console.log("res body = ", res.body)

//       if (err) done(err);

//       //deep equal compares the object properties
//       chai.expect(res.body).to.deep.equal(result);
//       done();
//   });
// });