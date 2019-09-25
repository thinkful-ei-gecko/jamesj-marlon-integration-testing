'use strict';

const { expect } = require('chai');
const supertest = require('supertest');
const appFrequency = require('../appFrequency');

describe('appFrequency GET /frequency', () => {

  it('Returns 400 response if s param not provided', () => {
    return supertest(appFrequency)
      .get('/frequency')
      .expect(400, 'Invalid request');
  });

  it('Returns a valid json response', () => {
    return supertest(appFrequency)
      .get('/frequency')
      .query({s: 'thisisasupertest'})
      .expect(200)
      .expect('Content-Type', /json/);
  });
  
  it('Returns an object', () => {
    return supertest(appFrequency)
      .get('/frequency')
      .query({s: 'thisisasupertest'})
      .then(res => {
        expect(res.body).to.an('object');
      });
  });

  it('Contains unique, average, and highest keys', () => {
    return supertest(appFrequency)
      .get('/frequency')
      .query({s: 'thisisasupertest'})
      .then(res => {
        expect(res.body).to.include.keys('unique','average','highest');
      });
  });

  it('Returns expected result for a given string', () => {
    const correctObj = {
      t: 3,
      h: 1,
      i: 2,
      s: 4,
      a: 1,
      u: 1,
      p: 1,
      e: 2,
      r: 1,
      unique: 9,
      average: 1.7777777777777777,
      highest: 's'
    };

    return supertest(appFrequency)
      .get('/frequency')
      .query({s: 'thisisasupertest'})
      .then(res => {
        expect(res.body).to.deep.equal(correctObj);
      });
  });
});