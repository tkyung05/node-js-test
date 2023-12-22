const app = require('./index');
const request = require('supertest');

describe('GET /users는', () => {
  it('유저 목록 전체를 불러온다', (done) => {
    request(app)
      .get('/users')
      .end((error, response) => {
        console.log(response.body);
        done();
      })
  });
});