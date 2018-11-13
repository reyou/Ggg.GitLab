const request = require('supertest');
const app = require('../app');
// tests here
describe('App', function () {
  it('has the default page', function (done) {
    request(app)
      .get('/')
      .expect(/Welcome to Express/, done);
  });
}); 
