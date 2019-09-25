const { expect } = require('chai');
const supertest = require('supertest');
const app = require('../app');

describe('app module GET /apps', () => {
  it('sends 400 status and response with invalid param values', () => {
    return supertest(app)
      .get('/apps')
      .query({sort: 'invalid'})
      .expect(400, 'Sort parameter must be either rating or app');
  });
  it('sorts with case insensitive params', () => {
    return supertest(app)
      .get('/apps')
      .query({sort: 'app'})
      .expect(res => {
        const lower = res.body;
        supertest(app)
          .get('/apps')
          .query({sort: 'App'})
          .then(upper => {
            expect(upper.body).to.deep.equal(lower);
          });
      });
  });
  it('sorts Rating in descending order');
  it('sorts by App in ascending alphabetical');
  it('provides response body in json');
  it('returns a 200 response and expected response body');
});