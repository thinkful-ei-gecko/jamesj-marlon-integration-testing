const { expect } = require('chai');
const diff = require('../arrayDiff');

describe('diff module', () => {
  it('returns type array', () => {
    expect(diff([], [])).to.be.an('array');
  });
  it('returned expected, filtered array', () => {
    expect(diff([3, 2, 1], [1])).to.deep.equal([3, 2]);
  });
  it('returns first array if second has no overlap', () => {
    expect(diff([3, 2, 1], [4])).to.deep.equal([3, 2, 1]);
  });
  it('returns empty array when both array args are the same', () => {
    expect(diff([3, 2, 1], [3, 2, 1])).to.deep.equal([]);
  });
});