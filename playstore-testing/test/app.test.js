'use strict';

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
  
  it('sorts Rating in descending order', () => {
    return supertest(app)
      .get('/apps')
      .query({sort: 'Rating'})
      .then(res => {

        let resArray = [...res.body];

        for (let i = 1; i < resArray.length; i++){
          let j = i;
          while(j > 0 && resArray[j-1]['Rating'] < resArray[j]['Rating']){
            let temp = resArray[j];
            resArray[j] = resArray[j-1];
            resArray[j] = temp;
            j--;
          }
          return resArray;
        }
        expect(res.body).to.deep.equal(resArray);
      });
  });
      

  it('sorts by App in ascending alphabetical', () => {
    return supertest(app)
      .get('/apps')
      .query({sort: 'App'})
      .then(res => {

        let resArray = [...res.body];

        for (let i = 1; i < resArray.length; i++){
          let j = i;
          while(j > 0 && resArray[j-1]['App'] > resArray[j]['App']){
            let temp = resArray[j];
            resArray[j] = resArray[j-1];
            resArray[j] = temp;
            j--;
          }
          return resArray;
        }
        expect(res.body).to.deep.equal(resArray);
      });
  });

  it('provides response body in json', () => {
    return supertest(app)
      .get('/apps')
      .expect('Content-Type', /json/);
  });

  it('returns a 200 response and expected response body', () => {
    return supertest(app)
      .get('/apps')
      .expect(200)
      .expect(res => expect(res.body).to.be.an('array'));
  });
});