

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

describe('demo of types', () => {
  describe('.equal', () => {
    it('shows number equality', () => {
      expect(2).to.equal(2, '2 === 2'); // pass
    });
    it('shows type matters', () => {
      expect(2).to.equal("2", '2 === "2"'); // fail, wrong types
    });
    it('shows value matters', () => {
      expect(2).to.equal(3, '2 === 3'); // fail, wrong value
    });
    it('shows case matters', () => {
      expect('hen').to.equal('Hen', "'hen' == 'Hen'"); //fail, case sensitive
    });
  });
  describe('.deep', () => {
    it('fails with equal', () => {
      const a = { x: 5 };
      const b = { x: 5 };
      expect(a).to.equal(b, 'fails because they are not same exact obj');
    });
    it('passes with .deep equal', () => {
      const a = { x: 5 };
      const b = { x: 5 };
      expect(a).to.deep.equal(b, 'passes because .deep does not require strict equality of obj');
    });
  });
});