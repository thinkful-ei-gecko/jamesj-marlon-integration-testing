const divide = require('../index');
const { expect } = require('chai');

describe('Divide module', () => {
  it('should divide positive integers correctly', () => {
    return expect(divide(6, 3)).to.equal(2);
  });
  it('should throw an error when divide by zero', () => {
    return expect(() => divide(3, 0)).to.throw();
  });
});