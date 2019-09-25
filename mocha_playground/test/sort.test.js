'use strict';

const sort = require('../sort');
const { expect } = require('chai');

describe('Sort function', () => {
  it('Sorts array in ascending order', () => {
    const arr = [3, 1, 2];
    const arr2 = [1, 2, 3];
    return expect(sort(arr)).to.deep.equal(arr2);
  });

  it('Sorts array with duplicate values', () => {
    const arr = [3, 1, 1, 2];
    const arr2 = [1, 1 ,2 ,3];
    return expect(sort(arr)).to.deep.equal(arr2);
  });

  it('Returns an empty array when given an empty array', () => {
    return expect(sort([])).to.deep.equal([]);
  });

  it('Is an array', () => {
    return expect(sort([1, 2, 3])).to.be.an('array');
  });

});